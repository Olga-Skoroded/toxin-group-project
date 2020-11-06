import { useState, useRef, useEffect, MouseEvent, useCallback } from 'react';
import { Field } from 'react-final-form';

import NumberInput from '../NumberInput/NumberInput';
import ApplyButton from '../TextButton/TextButton';
import * as S from './Dropdown.styles';
import { DropdownProps } from './Dropdown.types';
import getResultStringPart from './utils/getResultStringPart';

const DEFAULT_SETTINGS = {
  min: 0,
  max: 5,
  initialValue: 0,
};

const Dropdown: React.FC<DropdownProps> = ({
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

  const [dropdownState, setDropdownState] = useState(initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [resultString, setResultString] = useState(placeholder);
  const dropdown = useRef(null);

  const applyChanges = useCallback(
    (currentState: typeof dropdownState): void => {
      const resultStrings: string[] = Array.from(
        new Set(
          currentState.map((item, _, state) => {
            const { groupName, currentValue, wordForms } = item;

            if (!groupName) return getResultStringPart(currentValue, wordForms);

            const { wordForms: groupWordForms } = groups.find((group) => group.name === groupName);
            const groupCount = state
              .filter((stateItem) => stateItem.groupName === groupName)
              .reduce((sum, element) => sum + element.currentValue, 0);
            return getResultStringPart(groupCount, groupWordForms);
          }),
        ),
      ).filter((el) => el);

      setResultString(resultStrings.join(', ') || placeholder);
    },
    [placeholder, groups],
  );

  const resetResult = () => {
    applyChanges(initialState);
  };

  const handleResultBarClick = (): void => {
    setIsOpen((open) => !open);
  };

  const handleApplyClick = (): void => {
    applyChanges(dropdownState);
    handleResultBarClick();
  };

  const handleResetClick = (): void => {
    setDropdownState(initialState);
    resetResult();
    handleResultBarClick();
  };

  const handleDocumentClick = useCallback(
    (event: globalThis.MouseEvent) => {
      if (isOpen && !dropdown.current.contains(event.target)) {
        handleResultBarClick();
      }
    },
    [dropdown, isOpen],
  );

  useEffect(() => {
    if (!enableControls) {
      applyChanges(dropdownState);
    }
  }, [dropdownState, enableControls, applyChanges]);

  useEffect(() => {
    applyChanges(dropdownState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        const apply = () => {
          handleApplyClick();
          updateFieldValue(dropdownState);
        };
        return (
          <S.Dropdown ref={dropdown}>
            <S.Result
              isOpen={isOpen}
              onClick={disabled ? undefined : handleResultBarClick}
              type="button"
            >
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

                  const makeButtonHandler = (
                    increment: number,
                  ): ((e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void) => (
                    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
                  ): void => {
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
                      <S.ItemTitle>{title}</S.ItemTitle>
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
                    Очистить
                  </S.ResetButton>
                  <ApplyButton type="button" onClick={apply}>
                    Применить
                  </ApplyButton>
                </S.Controls>
              )}
            </S.ListContainer>
          </S.Dropdown>
        );
      }}
    </Field>
  );
};

export default Dropdown;
