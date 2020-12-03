import { nanoid } from 'nanoid';
import { memo, useRef } from 'react';
import Draggable from 'react-draggable';
import { Form } from 'react-final-form';
import { connect } from 'react-redux';

import { AppState } from 'redux/store.model';

import * as S from './Assistant.styles';
import { Header } from './components/Header/Header';
import { Message } from './components/Message/Message';
import { TypeMessageArea } from './components/TypeMessageArea/TypeMessageArea';
import { MessageData } from './redux/model';
import { sendMessage } from './redux/redux/actions';

type StateProps = {
  messages: MessageData[];
  userName: string;
};

const mapState = (state: AppState): StateProps => ({
  messages: state.assistant.messages,
  userName: state.auth.displayName,
});

const mapDispatch = {
  pushMessage: sendMessage,
};

type Props = StateProps & typeof mapDispatch;

const submitForm = (values) => values;

const Assistant: React.FC<Props> = memo(
  ({ messages, userName, pushMessage }: Props): JSX.Element => {
    const messageContainer = useRef(null);

    const submitMessage = (text: string) => {
      pushMessage({ author: userName || 'Аноним', text, type: 'from' });
    };

    setTimeout(() => {
      if (messageContainer.current) {
        messageContainer.current.scrollTop = messageContainer.current.scrollHeight;
      }
    });

    return (
      <Form
        onSubmit={submitForm}
        render={({ handleSubmit }) => (
          <Draggable handle=".handle" bounds="body">
            <S.DraggableForm onSubmit={handleSubmit}>
              <S.Assistant>
                <div className="handle">
                  <Header name="Бот Евгений" avatarUrl="" />
                </div>
                <S.MessagesArea ref={messageContainer}>
                  {messages.map((message) => (
                    <Message
                      key={nanoid()}
                      text={message.text}
                      name={message.author}
                      type={message.type}
                      data={message.data}
                    />
                  ))}
                </S.MessagesArea>
                <TypeMessageArea submitMessage={submitMessage} />
              </S.Assistant>
            </S.DraggableForm>
          </Draggable>
        )}
      />
    );
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(Assistant);

export { ConnectedComponent as Assistant };
