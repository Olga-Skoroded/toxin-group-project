import { ActionPayload } from 'redux/action.model';
import { Filters } from 'services/api/entities/model';

type MessageData = { author: string; text: string; type: string; data?: unknown };

type SendMessage = ActionPayload<'SEND_MESSAGE', MessageData>;
type PushMessage = ActionPayload<'PUSH_MESSAGE', MessageData>;
type ChangeDialogState = ActionPayload<'CHANGE_DIALOG_STATE', DialogStates>;
type SetFindingRoomFilter = ActionPayload<'CHANGE_ROOM_FILTER', Filters>;

type AssistantState = {
  messages: MessageData[];
  dialogState: DialogStates;
  findRoomFilter: Filters;
};

type DialogStates = 'FINDING_ROOM_AWAIT_COST';

type AssistantActions = PushMessage | ChangeDialogState | SetFindingRoomFilter;

export type {
  MessageData,
  SendMessage,
  PushMessage,
  AssistantState,
  AssistantActions,
  DialogStates,
  ChangeDialogState,
  SetFindingRoomFilter,
};
