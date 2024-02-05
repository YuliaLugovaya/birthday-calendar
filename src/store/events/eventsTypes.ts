export interface AdditionalInputs {
  name: string;
  year: string;
  phone: string;
  messengers: string[];
  address: string;
  socials: string;
  email: string;
  textarea: string;
  photo: string;
  selectedEvent: string;
}

export interface SpecificDay {
  day: string;
  month: string;
  year: string;
}

export interface AllEvents {
  [key: string]: AdditionalInputs;
}

export interface EditEventState {
  isEventAdded: boolean;
  additionalInputs: AdditionalInputs;
  allEvents: AllEvents[];
  specificDay: SpecificDay;
}

export const initialState: EditEventState = {
  isEventAdded: false,
  additionalInputs: {
    name: "",
    year: "",
    phone: "",
    messengers: [],
    address: "",
    socials: "",
    email: "",
    textarea: "",
    photo: "",
    selectedEvent: "",
  },
  allEvents: [],
  specificDay: {
    day: "",
    month: "",
    year: "",
  },
};

export enum EditEventActionTypes {
  ADD_EVENT = "ADD_EVENT",
  UPDATE_ADDITIONAL_INPUTS = "UPDATE_ADDITIONAL_INPUTS",
  SAVE_EVENT = "SAVE_EVENT",
  CLEAR_EVENT = "CLEAR_EVENT",
  SELECT_DAY = "SELECT_DAY",
}

export interface AddEventAction {
  type: EditEventActionTypes.ADD_EVENT;
  payload: string;
}

export interface UpdateAdditionalInputsAction {
  type: EditEventActionTypes.UPDATE_ADDITIONAL_INPUTS;
  payload: AdditionalInputs;
}

export interface SelectDayAction {
  type: EditEventActionTypes.SELECT_DAY;
  payload: SpecificDay;
}

export interface SaveEventAction {
  type: EditEventActionTypes.SAVE_EVENT;
  payload: AllEvents;
}

export interface ClearEventAction {
  type: EditEventActionTypes.CLEAR_EVENT;
}

export type EditEventAction =
  | AddEventAction
  | UpdateAdditionalInputsAction
  | SaveEventAction
  | ClearEventAction
  | SelectDayAction;
