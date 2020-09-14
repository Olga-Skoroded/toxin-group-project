import React from 'react';
import { Form, Field } from 'react-final-form';

import BulletList from 'components/BulletList/BulletList';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import { emailValidator, dateValidator, dateFormatMask } from 'shared/helpers/validators/';

import * as S from './elements.styles';

class Elements extends React.Component {
  handleFormSubmit = () => {};

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
              <S.ButtonWrapper>
                <Button>click me</Button>
              </S.ButtonWrapper>
              <S.ButtonWrapper>
                <Button as="a" href="https://google.com" isFilled>click me</Button>
              </S.ButtonWrapper>
            </form>
          )}
        />
        <S.BulletListWrapper>
          <BulletList
            items={[
              'Нельзя с питомцами',
              'Без вечеринок и мероприятий',
              'Время прибытия — после 13:00, а выезд до 12:00',
            ]}
          />
        </S.BulletListWrapper>
      </S.Container>
    );
  }
}

export default Elements;
