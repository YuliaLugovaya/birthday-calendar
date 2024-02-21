import {
  EditEventActionTypes,
  AddEventAction,
  UpdateAdditionalInputsAction,
  AdditionalInputs,
  AllEvents,
  SaveEventAction,
  ClearEventAction,
  ClearSpecificEventAction,
  SelectDayAction,
  SpecificDay,
  IsEventAddedAction,
  UpdateEventAction,
  SelectEventAction,
  SpecificEvent,
  ClearSelectEventAction,
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

export const updateEvent = (payload: AllEvents): UpdateEventAction => {
  return {
    type: EditEventActionTypes.UPDATE_EVENT,
    payload,
  };
};

export const selectDay = (payload: SpecificDay): SelectDayAction => {
  return {
    type: EditEventActionTypes.SELECT_DAY,
    payload,
  };
};

export const selectEvent = (payload: SpecificEvent): SelectEventAction => {
  return {
    type: EditEventActionTypes.SELECT_EVENT,
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

export const clearSpecificEvent = (): ClearSpecificEventAction => {
  return {
    type: EditEventActionTypes.CLEAR_SPECIFIC_EVENT,
  };
};

export const clearSelectEvent = (): ClearSelectEventAction => {
  return {
    type: EditEventActionTypes.CLEAR_SELECT_EVENT,
  };
};

export const isEventAdded = (): IsEventAddedAction => {
  return {
    type: EditEventActionTypes.IS_EVENT_ADDED,
  };
};
