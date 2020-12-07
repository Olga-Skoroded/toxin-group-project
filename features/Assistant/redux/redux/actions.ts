import { Filters } from 'services/api/entities/model';

import {
  MessageData,
  SendMessage,
  PushMessage,
  DialogStates,
  ChangeDialogState,
  SetFindingRoomFilter,
} from '../model';

const sendMessage = (data: MessageData): SendMessage => ({
  type: 'SEND_MESSAGE',
  payload: data,
});

const pushMessage = (data: MessageData): PushMessage => ({
  type: 'PUSH_MESSAGE',
  payload: data,
});

const changeDialogState = (state: DialogStates): ChangeDialogState => ({
  type: 'CHANGE_DIALOG_STATE',
  payload: state,
});

const setFindingRoomFilter = (data: Filters): SetFindingRoomFilter => ({
  type: 'CHANGE_ROOM_FILTER',
  payload: data,
});

export { sendMessage, pushMessage, changeDialogState, setFindingRoomFilter };
