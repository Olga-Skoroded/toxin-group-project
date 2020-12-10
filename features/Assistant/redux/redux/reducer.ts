import { AssistantActions, AssistantState } from '../model';

const initialState = {
  messages: [
    {
      author: 'Евгений',
      type: 'to',
      text:
        'Здравствуйте, меня зовут бот Евгений. Напишите мне ваши пожелания, либо вопрос, и я с радостью постараюсь помочь вам !',
    },
  ],
  dialogState: null,
  findRoomFilter: null,
};

const assistant = (state = initialState, action: AssistantActions): AssistantState => {
  switch (action.type) {
    case 'PUSH_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    case 'CHANGE_DIALOG_STATE':
      return { ...state, dialogState: action.payload };
    case 'CHANGE_ROOM_FILTER':
      return { ...state, findRoomFilter: { ...state.findRoomFilter, ...action.payload } };
    default:
      return state;
  }
};

export { assistant };
