import {
  EditEventState,
  EditEventAction,
  initialState,
  EditEventActionTypes,
} from "./eventsTypes";

export const editEventReducer = (
  state: EditEventState = initialState,
  action: EditEventAction,
): EditEventState => {
  switch (action.type) {
    case EditEventActionTypes.ADD_EVENT:
      return {
        ...state,
        isEventAdded: true,
        selectedEvent: action.payload,
      };
    case EditEventActionTypes.UPDATE_ADDITIONAL_INPUTS:
      return {
        ...state,
        additionalInputs: {
          ...state.additionalInputs,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
