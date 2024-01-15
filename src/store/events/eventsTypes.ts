export interface AdditionalInputs {
  name: string;
  year: string;
  phone: string[];
  messengers: string[];
  address: string;
  socials: string[];
  email: string;
  textarea: string;
  photo: string;
}

export interface EditEventState {
  isEventAdded: boolean;
  selectedEvent: string;
  additionalInputs: AdditionalInputs;
}

export const initialState: EditEventState = {
  isEventAdded: false,
  selectedEvent: "",
  additionalInputs: {
    name: "",
    year: "",
    phone: [],
    messengers: [],
    address: "",
    socials: [],
    email: "",
    textarea: "",
    photo: "",
  },
};

export enum EditEventActionTypes {
  ADD_EVENT = "ADD_EVENT",
  UPDATE_ADDITIONAL_INPUTS = "UPDATE_ADDITIONAL_INPUTS",
}

export interface AddEventAction {
  type: EditEventActionTypes.ADD_EVENT;
  payload: string;
}

export interface UpdateAdditionalInputsAction {
  type: EditEventActionTypes.UPDATE_ADDITIONAL_INPUTS;
  payload: AdditionalInputs;
}

export type EditEventAction = AddEventAction | UpdateAdditionalInputsAction;
