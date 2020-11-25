import { useState, useRef, useEffect, useCallback, memo } from 'react';
import { Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import { TextButton as ApplyButton } from 'shared/view/elements';

import { NumberInput } from './components/NumberInput/NumberInput';
import { DropdownProps, WordForms } from './Dropdown.model';
import * as S from './Dropdown.styles';
import { getResultStringPart } from './utils/getResultStringPart';

const DEFAULT_SETTINGS = {
  min: 0,
  max: 5,
  initialValue: 0,
};

const Dropdown = memo(
  ({
    groups,
    name = '',
    placeholder = 'No placeholder passed',
    items = [{ title: 'No items passed' }],
    enableControls = true,
    disabled = false,
  }: DropdownProps) => {
    const initialState = items.map((item) => {
      const group =
        item.groupName && groups.find((currentGroup) => currentGroup.name === item.groupName);
      const groupMin = group && group.min;
      const groupMax = group && group.max;
      return {
        ...item,
        currentValue: item.initialValue || DEFAULT_SETTINGS.initialValue,
        inputName: item.inputName || item.title,
        min: groupMin || item.min || DEFAULT_SETTINGS.min,
        max: groupMax || item.max || DEFAULT_SETTINGS.max,
      };
    });

    const { t } = useTranslation(['WordForms']);
    const [dropdownState, setDropdownState] = useState(initialState);
    const [isOpen, setIsOpen] = useState(false);
    const [resultString, setResultString] = useState(placeholder);
    const dropdown = useRef(null);

    const applyChanges = useCallback(
      (currentState: typeof dropdownState): void => {
        const resultStrings: string[] = Array.from(
          new Set(
            currentState.map((item, _, state) => {
              const { groupName, currentValue } = item;

              if (!groupName) {
                const wordForms: WordForms = item.wordForms.map((wordForm) =>
                  t(`WordForms:${wordForm}`),
                ) as WordForms;

                return getResultStringPart(currentValue, wordForms);
              }

              const { wordForms: groupWordForms } = groups.find(
                (group) => group.name === groupName,
              );
              const groupCount = state
                .filter((stateItem) => stateItem.groupName === groupName)
                .reduce((sum, element) => sum + element.currentValue, 0);

              const languageParsedGroupForms: WordForms = groupWordForms.map((wordForm) =>
                t(`WordForms:${wordForm}`),
              ) as WordForms;

              return getResultStringPart(groupCount, languageParsedGroupForms);
            }),
          ),
        ).filter((el) => el);

        setResultString(resultStrings.join(', ') || t(placeholder));
      },
      [placeholder, groups, t],
    );

    const handleResultBarClick = useCallback((): void => {
      if (!disabled) setIsOpen((open) => !open);
    }, [disabled]);

    const handleDocumentClick = useCallback(
      (event: globalThis.MouseEvent) => {
        if (isOpen && !dropdown.current.contains(event.target)) {
          handleResultBarClick();
        }
      },
      [handleResultBarClick, isOpen],
    );

    useEffect(() => {
      if (!enableControls) {
        applyChanges(dropdownState);
      }
    }, [dropdownState, enableControls, applyChanges]);

    useEffect(() => {
      applyChanges(dropdownState);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [t]);

    useEffect(() => {
      document.addEventListener('click', handleDocumentClick);
      return () => document.removeEventListener('click', handleDocumentClick);
    }, [handleDocumentClick]);

    const isResetHidden = dropdownState.every((item) => !item.currentValue);

    return (
      <Field name={name}>
        {({ input }) => {
          const updateFieldValue = (state: typeof dropdownState) => {
            const result = {};
            state.forEach((item) => {
              result[item.inputName] = item.currentValue;
            });
            setTimeout(() => input.onChange(result));
          };
          const handleApplyClick = () => {
            updateFieldValue(dropdownState);
            applyChanges(dropdownState);
            handleResultBarClick();
          };
          const handleResetClick = () => {
            setDropdownState(initialState);
            applyChanges(initialState);
            updateFieldValue(initialState);
            handleResultBarClick();
          };
          return (
            <S.Dropdown ref={dropdown}>
              <S.Result isOpen={isOpen} onClick={handleResultBarClick} type="button">
                {resultString}
              </S.Result>
              <S.ListContainer isOpen={isOpen}>
                <S.List>
                  {dropdownState.map((el) => {
                    const { title, min, max, currentValue, inputName, groupName } = el;

                    const currentMax = groupName
                      ? currentValue +
                        groups.find((group) => group.name === groupName).max -
                        dropdownState
                          .filter((item) => item.groupName === groupName)
                          .reduce((acc, element) => acc + element.currentValue, 0)
                      : max;

                    const makeButtonHandler = (increment: number): (() => void) => (): void => {
                      setDropdownState((prevState) => {
                        const state = [...prevState];
                        const elementToUpdate = state.find((item) => item.title === title);
                        elementToUpdate.currentValue += increment;
                        if (!enableControls) {
                          updateFieldValue(state);
                        }
                        return state;
                      });
                    };
                    const handleIncrementClick = makeButtonHandler(1);
                    const handleDecrementClick = makeButtonHandler(-1);

                    return (
                      <S.Item key={title}>
                        <S.ItemTitle>{t(title)}</S.ItemTitle>
                        <NumberInput
                          currentValue={currentValue}
                          min={min}
                          max={currentMax}
                          onIncrement={handleIncrementClick}
                          onDecrement={handleDecrementClick}
                          name={inputName}
                        />
                      </S.Item>
                    );
                  })}
                </S.List>
                {enableControls && (
                  <S.Controls>
                    <S.ResetButton
                      type="button"
                      isSecondary
                      isHidden={isResetHidden}
                      onClick={handleResetClick}
                    >
                      {t('Buttons:Clear')}
                    </S.ResetButton>
                    <ApplyButton type="button" onClick={handleApplyClick}>
                      {t('Buttons:Apply')}
                    </ApplyButton>
                  </S.Controls>
                )}
              </S.ListContainer>
            </S.Dropdown>
          );
        }}
      </Field>
    );
  },
);

export { Dropdown };
