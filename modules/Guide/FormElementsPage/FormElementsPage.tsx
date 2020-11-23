import { memo } from 'react';
import { Form, Field } from 'react-final-form';

import { SubscriptionField } from 'features/Auth/SubscriptionField/SubscriptionField';
import { CheckboxesList, Dropdown, Review, TimePicker } from 'shared/view/components';
import {
  checkboxesListData,
  expandableCheckboxesListData,
  richCheckboxesListData,
} from 'shared/view/components/CheckboxesList/CheckboxesList.fixture';
import {
  guestsGroups,
  guestsItems,
  amenitiesItems,
} from 'shared/view/components/Dropdown/Dropdown.fixture';
import {
  ArrowButton,
  Benefits,
  BulletList,
  Button,
  Expander,
  Input,
  LikeButton,
  RadioButton,
  StarRating,
  Slider,
  TextButton,
  Toggle,
  UILogo,
} from 'shared/view/elements';
import { emailValidator, dateValidator, dateFormatMask } from 'utils/validators';

import * as S from './FormElementsPage.styles';

const FormElementsPage = memo(() => {
  const handleFormSubmit = (): unknown => ({});

  return (
    <S.FormElementsPage>
      <S.Logo>
        <UILogo />
      </S.Logo>
      <Form
        onSubmit={handleFormSubmit}
        initialValues={{ gender: 'female', 'toggle-on': true, range: [5000, 10000] }}
        render={(values) => (
          <S.Content>
            <div>
              <S.InputWrapper>
                <Field
                  name="email"
                  type="text"
                  render={({ input }) => (
                    <Input
                      {...input}
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
                  render={({ input }) => (
                    <Input {...input} placeholder="This is pretty awesome" label="text field" />
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
                  render={({ input }) => (
                    <Input
                      {...input}
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
                <Slider
                  initialValue={values.initialValues.range}
                  title="range slider"
                  name="range"
                  showValue
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
                    term: 'Комфорт',
                    definition: 'Шумопоглощающие стены',
                  },
                  {
                    icon: 'location_city',
                    term: 'Удобство',
                    definition: 'Окно в каждой из спален',
                  },
                ]}
              />
            </S.BenefitsWrapper>
            <S.ReviewsWrapper>
              <Review
                avatarUrl="user.jpg"
                userName="Мурад Сарафанов"
                date={new Date('2020-09-27 12:03:14')}
                text="Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей."
                likesCount={12}
              />
            </S.ReviewsWrapper>
          </S.Content>
        )}
      />
    </S.FormElementsPage>
  );
});

export { FormElementsPage };
