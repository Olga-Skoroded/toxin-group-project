import React from 'react';
import { Form, Field } from 'react-final-form';

import Benefit from 'components/Benefit/Benefit';
import BulletList from 'components/BulletList/BulletList';
import CheckboxesList from 'components/CheckboxesList/CheckboxesList';
import roomOptions from 'components/CheckboxesList/CheckboxesListData.json';
import Dropdown from 'components/Dropdown/Dropdown';
import Input from 'components/Input/Input';
import LikeButtonContainer from 'components/LikeButton/LikeButtonContainer';
import { emailValidator, dateValidator, dateFormatMask } from 'shared/helpers/validators/';

import * as S from './elements.styles';

class Elements extends React.Component {
  handleFormSubmit = () => { };

  render() {
    return (
      <S.Container>
        <Form
          onSubmit={this.handleFormSubmit}
          render={() => (
            <form>
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
              <S.LikeButtonWrapper>
                <LikeButtonContainer likes={2} />
              </S.LikeButtonWrapper>
              <S.DropdownWrapper>
                <Dropdown
                  placeholder="Сколько гостей"
                  enableControls={false}
                  name="guests"
                  items={[
                    {
                      title: 'Спальни',
                      wordForms: ['спальня', 'спальни', 'спален'],
                    },
                    {
                      title: 'Кровати',
                      wordForms: ['кровать', 'кровати', 'кроватей'],
                    },
                    {
                      title: 'Ванные комнаты',
                      wordForms: ['ванная', 'ванные', 'ванных'],
                    },
                  ]}
                />
              </S.DropdownWrapper>
              <S.DropdownWrapper>
                <Dropdown
                  placeholder="Сколько гостей"
                  name="guests"
                  enableControls
                  groups={[
                    {
                      name: 'guests',
                      wordForms: ['гость', 'гостя', 'гостей'],
                    },
                  ]}
                  items={[
                    {
                      title: 'взрослые',
                      groupName: 'guests',
                    },
                    {
                      title: 'дети',
                      groupName: 'guests',
                    },
                    {
                      title: 'младенцы',
                      wordForms: ['младенец', 'младенца', 'младенцев'],
                    },
                  ]}
                />
              </S.DropdownWrapper>
              <S.CheckboxWrapper>
                <CheckboxesList roomOptions={roomOptions} />
              </S.CheckboxWrapper>
            </form>
          )}
        />
        <S.TextButtonWrapper>

        </S.TextButtonWrapper>
        <S.TextButtonWrapper>

        </S.TextButtonWrapper>
        <S.BulletListWrapper>
          <BulletList
            items={[
              'Нельзя с питомцами',
              'Без вечеринок и мероприятий',
              'Время прибытия — после 13:00, а выезд до 12:00',
            ]}
          />
        </S.BulletListWrapper>
        <S.BenefitsWrapper>
          <Benefit items={[
            { icon: 'insert_emoticon', title: 'Комфорт', description: 'Шумопоглощающие стены' },
            { icon: 'location_city', title: 'Удобство', description: 'Окно в каждой из спален' },
            { icon: 'alarm_on', title: 'test', description: 'test' },
          ]}
          />
        </S.BenefitsWrapper>
      </S.Container>
    );
  }
}

export default Elements;
