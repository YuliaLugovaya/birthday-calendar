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
        additionalInputs: {
          ...state.additionalInputs,
          selectedEvent: action.payload,
        },
      };
    case EditEventActionTypes.UPDATE_ADDITIONAL_INPUTS:
      return {
        ...state,
        additionalInputs: {
          ...state.additionalInputs,
          ...action.payload,
        },
      };
    case EditEventActionTypes.SAVE_EVENT:
      return {
        ...state,
        allEvents: [...state.allEvents, action.payload],
      };
    case EditEventActionTypes.CLEAR_EVENT:
      return {
        ...state,
        isEventAdded: initialState.isEventAdded,
        // selectedEvent: initialState.selectedEvent,
        additionalInputs: initialState.additionalInputs,
      };
    default:
      return state;
  }
};
