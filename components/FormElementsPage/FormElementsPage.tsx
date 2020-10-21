import React from 'react';
import { Form, Field } from 'react-final-form';

import ArrowButton from 'components/ArrowButton/ArrowButton';
import Benefits from 'components/Benefits/Benefits';
import BulletList from 'components/BulletList/BulletList';
import Button from 'components/Button/Button';
import CheckboxesList from 'components/CheckboxesList/CheckboxesList';
import {
  checkboxesListData,
  expandableCheckboxesListData,
  richCheckboxesListData,
} from 'components/CheckboxesList/CheckboxesList.data';
import Comment from 'components/Comment/Comment';
import Dropdown from 'components/Dropdown/Dropdown';
import { guestsGroups, guestsItems, amenitiesItems } from 'components/Dropdown/Dropdown.data';
import Expander from 'components/Expander/Expander';
import Input from 'components/Input/Input';
import LikeButton from 'components/LikeButton/LikeButton';
import RadioButton from 'components/RadioButton/RadioButton';
import RangeSlider from 'components/RangeSlider/RangeSlider';
import StarRating from 'components/StarRating/StarRating';
import SubscriptionField from 'components/SubscriptionField/SubscriptionField';
import TextButton from 'components/TextButton/TextButton';
import TimePicker from 'components/TimePicker/TimePicker';
import Toggle from 'components/Toggle/Toggle';
import UILogo from 'components/UI-Logo/UI-Logo';
import { emailValidator, dateValidator, dateFormatMask } from 'shared/helpers/validators';

import * as S from './FormElementsPage.styles';

class FormElementsPage extends React.Component {
  handleFormSubmit = (): unknown => ({});

  render(): JSX.Element {
    return (
      <S.FormElementsPage>
        <S.Logo>
          <UILogo />
        </S.Logo>
        <Form
          onSubmit={this.handleFormSubmit}
          initialValues={{ gender: 'female', 'toggle-on': true, range: [5000, 10000] }}
          render={(values) => (
            <S.Content>
              <div>
                <S.InputWrapper>
                  <Field
                    name="email"
                    type="text"
                    render={(props) => (
                      <Input
                        {...props.input}
                        {...props.meta}
                        placeholder="Email"
                        label="text field"
                        validators={[emailValidator]}
                      />
                    )}
                  />
                </S.InputWrapper>
                <S.InputWrapper>
                  <Field
                    name="name"
                    type="text"
                    render={(props) => (
                      <Input
                        {...props.rest}
                        {...props.input}
                        placeholder="This is pretty awesome"
                        label="text field"
                        isRequired
                      />
                    )}
                  />
                </S.InputWrapper>
                <S.Title>Dropdown</S.Title>
                <S.DropdownWrapper>
                  <Dropdown
                    placeholder="Сколько гостей"
                    enableControls={false}
                    name="amenities"
                    items={amenitiesItems}
                  />
                </S.DropdownWrapper>
                <S.InputWrapper>
                  <Field
                    name="date"
                    type="text"
                    render={(props) => (
                      <Input
                        {...props.rest}
                        {...props.input}
                        placeholder="ДД.ММ.ГГГГ"
                        validators={[dateValidator]}
                        mask={dateFormatMask}
                        label="Masked text field"
                      />
                    )}
                  />
                </S.InputWrapper>
                <S.TimePickerWrapper>
                  <TimePicker
                    type="double"
                    name="elements-date"
                    dateFromLabelText="date dropdown"
                    dateToLabelText="date dropdown"
                  />
                </S.TimePickerWrapper>
                <S.TimePickerWrapper>
                  <TimePicker
                    type="single"
                    name="elements-date"
                    dateFromLabelText="filter date dropdown"
                  />
                </S.TimePickerWrapper>
                <S.Title>subscription text field</S.Title>
                <S.SubscriptionWrapper>
                  <SubscriptionField placeholder="Email" />
                </S.SubscriptionWrapper>
              </div>

              <div>
                <S.Title>checkbox buttons</S.Title>
                <S.CheckboxWrapper>
                  <CheckboxesList roomOptions={checkboxesListData} />
                </S.CheckboxWrapper>
                <S.Title>radio buttons</S.Title>
                <S.RadioWrapper>
                  <RadioButton label="Мужчина" name="gender" value="male" />
                  <RadioButton label="Женщина" name="gender" value="female" />
                </S.RadioWrapper>
                <S.Title>toggle</S.Title>
                <S.ToggleWrapper>
                  <Toggle name="toggle-on" label="Получать спецпредложения" />
                </S.ToggleWrapper>
                <S.ToggleWrapper>
                  <Toggle name="toggle-off" label="Получать спецпредложения" />
                </S.ToggleWrapper>
                <S.Title>like button</S.Title>
                <S.LikeButtonWrapper>
                  <LikeButton count={2} />
                </S.LikeButtonWrapper>
                <S.Title>rate button</S.Title>
                <S.StarRatingWrapper>
                  <StarRating rating={4} />
                  <StarRating rating={5} />
                </S.StarRatingWrapper>
              </div>

              <div>
                <S.SliderWrapper>
                  <RangeSlider
                    initialValue={values.initialValues.range}
                    title="range slider"
                    name="range"
                  />
                </S.SliderWrapper>
                <S.Title>buttons</S.Title>
                <S.ButtonWrapper>
                  <Button type="button" isFilled>
                    click me
                  </Button>
                </S.ButtonWrapper>
                <S.ButtonWrapper>
                  <Button href="/mock-to-click">click me</Button>
                </S.ButtonWrapper>
                <S.TextButtonWrapper>
                  <TextButton href="/mock-to-click">Click me</TextButton>
                </S.TextButtonWrapper>
                <S.TextButtonWrapper>
                  <TextButton isSecondary>Click me</TextButton>
                </S.TextButtonWrapper>
                <S.ArrowButtonWrapper>
                  <ArrowButton href="/mock-to-click">Перейти к оплате</ArrowButton>
                </S.ArrowButtonWrapper>
              </div>

              <div>
                <S.Title>Dropdown</S.Title>
                <S.DropdownWrapper>
                  <Dropdown
                    placeholder="Сколько гостей"
                    enableControls={false}
                    name="amenities"
                    items={amenitiesItems}
                  />
                </S.DropdownWrapper>
                <S.Title>Dropdown</S.Title>
                <S.DropdownWrapper>
                  <Dropdown
                    placeholder="Сколько гостей"
                    name="guests"
                    enableControls
                    groups={guestsGroups}
                    items={guestsItems}
                  />
                </S.DropdownWrapper>
                <S.ExpandableCheckboxWrapper>
                  <Expander title="expandable checkbox list" isDefaultOpen={false}>
                    <CheckboxesList roomOptions={expandableCheckboxesListData} />
                  </Expander>
                </S.ExpandableCheckboxWrapper>
                <S.ExpandableCheckboxWrapper>
                  <Expander title="expandable checkbox list" isDefaultOpen>
                    <CheckboxesList roomOptions={expandableCheckboxesListData} />
                  </Expander>
                </S.ExpandableCheckboxWrapper>
              </div>

              <div>
                <S.Title>Dropdown</S.Title>
                <S.DropdownWrapper>
                  <Dropdown
                    placeholder="Сколько гостей"
                    name="guests"
                    enableControls
                    groups={guestsGroups}
                    items={guestsItems}
                  />
                </S.DropdownWrapper>
                <S.Title>rich checkbox</S.Title>
                <S.RichCheckboxWrapper>
                  <CheckboxesList roomOptions={richCheckboxesListData} />
                </S.RichCheckboxWrapper>
              </div>

              <div>
                <S.Title>Dropdown</S.Title>
                <S.DropdownWrapper>
                  <Dropdown
                    placeholder="Сколько гостей"
                    name="guests"
                    enableControls
                    groups={guestsGroups}
                    items={guestsItems}
                  />
                </S.DropdownWrapper>
                <S.Title>bullet list</S.Title>
                <S.BulletListWrapper>
                  <BulletList
                    items={[
                      'Нельзя с питомцами',
                      'Без вечеринок и мероприятий',
                      'Время прибытия — после 13:00, а выезд до 12:00',
                    ]}
                  />
                </S.BulletListWrapper>
              </div>

              <S.BenefitsWrapper>
                <Benefits
                  items={[
                    {
                      icon: 'insert_emoticon',
                      title: 'Комфорт',
                      description: 'Шумопоглощающие стены',
                    },
                    {
                      icon: 'location_city',
                      title: 'Удобство',
                      description: 'Окно в каждой из спален',
                    },
                  ]}
                />
              </S.BenefitsWrapper>
              <S.CommentsWrapper>
                <Comment
                  avatarUrl="user.jpg"
                  userName="Мурад Сарафанов"
                  date={new Date('2020-09-27 12:03:14')}
                  text="Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей."
                  likesCount={12}
                />
              </S.CommentsWrapper>
            </S.Content>
          )}
        />
      </S.FormElementsPage>
    );
  }
}

export default FormElementsPage;
