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

export interface SpecificEvent {
  [key: string]: string;
}

export interface AllEvents {
  [key: string]: AdditionalInputs;
}

export interface EditEventState {
  isEventAdded: boolean;
  additionalInputs: AdditionalInputs;
  allEvents: AllEvents[];
  specificDay: SpecificDay;
  specificEvent: SpecificEvent[];
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
  specificEvent: [],
};

export enum EditEventActionTypes {
  ADD_EVENT = "ADD_EVENT",
  UPDATE_ADDITIONAL_INPUTS = "UPDATE_ADDITIONAL_INPUTS",
  SAVE_EVENT = "SAVE_EVENT",
  CLEAR_EVENT = "CLEAR_EVENT",
  CLEAR_SPECIFIC_EVENT = "CLEAR_SPECIFIC_EVENT",
  SELECT_DAY = "SELECT_DAY",
  IS_EVENT_ADDED = "IS_EVENT_ADDED",
  UPDATE_EVENT = "UPDATE_EVENT",
  SELECT_EVENT = "SELECT_EVENT",
  CLEAR_SELECT_EVENT = "CLEAR_SELECT_EVENT",
}

export interface AddEventAction {
  type: EditEventActionTypes.ADD_EVENT;
  payload: string;
}

export interface UpdateAdditionalInputsAction {
  type: EditEventActionTypes.UPDATE_ADDITIONAL_INPUTS;
  payload: AdditionalInputs;
}

export interface UpdateEventAction {
  type: EditEventActionTypes.UPDATE_EVENT;
  payload: AllEvents;
}

export interface SelectDayAction {
  type: EditEventActionTypes.SELECT_DAY;
  payload: SpecificDay;
}

export interface SelectEventAction {
  type: EditEventActionTypes.SELECT_EVENT;
  payload: SpecificEvent;
}

export interface SaveEventAction {
  type: EditEventActionTypes.SAVE_EVENT;
  payload: AllEvents;
}

export interface ClearEventAction {
  type: EditEventActionTypes.CLEAR_EVENT;
}

export interface ClearSpecificEventAction {
  type: EditEventActionTypes.CLEAR_SPECIFIC_EVENT;
}

export interface ClearSelectEventAction {
  type: EditEventActionTypes.CLEAR_SELECT_EVENT;
}

export interface IsEventAddedAction {
  type: EditEventActionTypes.IS_EVENT_ADDED;
}

export type EditEventAction =
  | AddEventAction
  | UpdateAdditionalInputsAction
  | SaveEventAction
  | ClearEventAction
  | ClearSpecificEventAction
  | SelectDayAction
  | IsEventAddedAction
  | UpdateEventAction
  | SelectEventAction
  | ClearSelectEventAction;
