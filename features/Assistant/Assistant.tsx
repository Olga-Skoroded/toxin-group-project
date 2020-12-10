import { memo, useRef, useState, useEffect } from 'react';
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

const Assistant = memo(
  ({ messages, userName, pushMessage }: Props): JSX.Element => {
    const messageContainer = useRef(null);
    const assistantBlock = useRef(null);
    const [isMinimized, setMinimized] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const changeMinimizedState = () => {
      setMinimized((prevState) => !prevState);
    };

    useEffect(() => {
      const initialCoordsOffset = window.innerWidth > 1280 ? 30 : 0;

      setPosition({
        x: window.innerWidth - (assistantBlock.current.clientWidth + initialCoordsOffset),
        y: window.innerHeight - (assistantBlock.current.clientHeight + initialCoordsOffset),
      });
    }, []);

    const handleDrag = (_, data) => {
      setPosition({ x: data.x, y: data.y });
    };

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
          <Draggable handle=".handle" bounds="body" position={position} onDrag={handleDrag}>
            <S.DraggableForm onSubmit={handleSubmit} ref={assistantBlock}>
              <S.Assistant>
                <div className="handle">
                  <Header
                    name="Бот Евгений"
                    avatarUrl=""
                    isMinimized={isMinimized}
                    setMinimized={changeMinimizedState}
                  />
                </div>
                <S.ContentArea isMinimized={isMinimized}>
                  <S.MessagesArea ref={messageContainer}>
                    {messages.map((message, index) => (
                      <Message
                        key={String(index)}
                        text={message.text}
                        name={message.author}
                        type={message.type}
                        data={message.data}
                      />
                    ))}
                  </S.MessagesArea>
                  <TypeMessageArea submitMessage={submitMessage} />
                </S.ContentArea>
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
