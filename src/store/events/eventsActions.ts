import {
  EditEventActionTypes,
  AddEventAction,
  UpdateAdditionalInputsAction,
  AdditionalInputs,
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
