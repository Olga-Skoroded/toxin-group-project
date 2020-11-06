import { useEffect } from 'react';
import { Form } from 'react-final-form';
import { animateScroll as scroll } from 'react-scroll';

import {
  Accessibility,
  AdditionalAmenities,
  Amenities,
  Filters,
  Opportunities,
} from 'api/entities/types';
import CheckboxesList from 'components/CheckboxesList/CheckboxesList';
import {
  checkboxesListData,
  expandableCheckboxesListData,
  richCheckboxesListData,
} from 'components/CheckboxesList/CheckboxesList.data';
import { Option } from 'components/CheckboxesList/CheckboxesList.types';
import Dropdown from 'components/Dropdown/Dropdown';
import { guestsGroups, guestsItems, amenitiesItems } from 'components/Dropdown/Dropdown.data';
import { Item } from 'components/Dropdown/Dropdown.types';
import Expander from 'components/Expander/Expander';
import Slider from 'components/Slider/Slider';
import TimePicker from 'components/TimePicker/TimePicker';

import * as S from './RoomFilter.styles';
import { OptionName, Props } from './RoomFilter.types';

const getDropdownProps = (defaultProps: Item[], updatedProps: Amenities) => {
  return defaultProps.map((item) => ({
    ...item,
    initialValue: updatedProps[item.inputName],
  }));
};

const getOptionName = (name: string): OptionName => {
  const [, option] = name.split('.');
  return option as OptionName;
};

const getCheckboxProps = (
  defaultProps: Option[],
  updatedProps: Opportunities | Accessibility | AdditionalAmenities,
) => {
  return defaultProps.map((item) => ({
    ...item,
    isChecked: Boolean(updatedProps[getOptionName(item.name)]),
  }));
};

const RoomFilter: React.FC<Props> = ({ initialFilters, loadRooms, isPending = false }: Props) => {
  const handleFormSubmit = (values?: Filters) => {
    loadRooms(values);
    scroll.scrollToTop();
  };

  useEffect(() => {
    loadRooms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Form
      onSubmit={handleFormSubmit}
      initialValues={initialFilters}
      render={({ handleSubmit, initialValues }) => {
        const { guests } = initialValues;
        const updatedDropdownProps = guestsItems.map((item) => ({
          ...item,
          initialValue: (guests && guests[item.inputName]) || item.initialValue,
        }));

        return (
          <S.RoomFilter>
            <form onSubmit={handleSubmit}>
              <S.TimePickerWrapper>
                <TimePicker
                  type="single"
                  name="booked"
                  dateFromLabelText="даты пребывания в отеле"
                  dateFrom={new Date(initialValues.booked.from)}
                  dateTo={new Date(initialValues.booked.to)}
                />
              </S.TimePickerWrapper>
              <S.DropdownWrapper>
                <S.Title elementType="dropdown">Гости</S.Title>
                <Dropdown
                  placeholder="Сколько гостей"
                  name="guests"
                  enableControls={false}
                  groups={guestsGroups}
                  items={updatedDropdownProps}
                />
              </S.DropdownWrapper>
              <S.SliderWrapper>
                <Slider
                  name="price"
                  title="диапазон цены"
                  initialValue={[initialValues.price.from, initialValues.price.to]}
                  showValue
                />
                <S.SliderDescription>Стоимость за сутки пребывания в номере</S.SliderDescription>
              </S.SliderWrapper>
              <S.CheckboxWrapper>
                <S.Title elementType="checkbox">Checkbox buttons</S.Title>
                <CheckboxesList
                  roomOptions={getCheckboxProps(checkboxesListData, initialValues.opportunities)}
                />
              </S.CheckboxWrapper>
              <S.CheckboxWrapper>
                <S.Title elementType="checkbox">Доступность</S.Title>
                <CheckboxesList
                  roomOptions={getCheckboxProps(
                    richCheckboxesListData,
                    initialValues.accessibility,
                  )}
                />
              </S.CheckboxWrapper>
              <S.DropdownWrapper>
                <S.Title elementType="dropdown">Удобства номера</S.Title>
                <Dropdown
                  placeholder="Удобства номера"
                  enableControls={false}
                  name="amenities"
                  items={getDropdownProps(amenitiesItems, initialValues.amenities)}
                />
              </S.DropdownWrapper>
              <S.CheckboxWrapper>
                <Expander title="дополнительные удобства" isDefaultOpen={false}>
                  <CheckboxesList
                    roomOptions={getCheckboxProps(
                      expandableCheckboxesListData,
                      initialValues.additionalAmenities,
                    )}
                  />
                </Expander>
              </S.CheckboxWrapper>
              <S.SubmitButton disabled={isPending} isFilled>
                Применить
              </S.SubmitButton>
            </form>
          </S.RoomFilter>
        );
      }}
    />
  );
};

export default RoomFilter;
