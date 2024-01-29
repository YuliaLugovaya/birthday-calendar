import {
  EditEventActionTypes,
  AddEventAction,
  UpdateAdditionalInputsAction,
  AdditionalInputs,
  AllEvents,
  SaveEventAction,
  ClearEventAction,
} from "./eventsTypes";

export const addEvent = (payload: string): AddEventAction => {
  return {
    type: EditEventActionTypes.ADD_EVENT,
    payload,
  };
};

export const updateAdditionalInputs = (
  payload: AdditionalInputs,
): UpdateAdditionalInputsAction => {
  return {
    type: EditEventActionTypes.UPDATE_ADDITIONAL_INPUTS,
    payload,
  };
};

export const saveEvent = (payload: AllEvents): SaveEventAction => {
  return {
    type: EditEventActionTypes.SAVE_EVENT,
    payload,
  };
};

export const clearEvent = (): ClearEventAction => {
  return {
    type: EditEventActionTypes.CLEAR_EVENT,
  };
};
