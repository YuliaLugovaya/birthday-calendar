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
    case EditEventActionTypes.UPDATE_EVENT: {
      const {
        name,
        year,
        socials,
        phone,
        messengers,
        address,
        email,
        textarea,
        photo,
      } = action.payload;
      return {
        ...state,
        allEvents: state.allEvents.map((event) => {
          const key = `${state.specificDay.day}_${state.specificDay.month}`;
          const keyName = state.specificEvent[0][key];
          if (Object.keys(event)[0] === key && event[key].name === keyName) {
            return {
              ...event,
              [key]: {
                ...event[key],
                name,
                year,
                socials,
                phone,
                messengers,
                address,
                email,
                textarea,
                photo,
              },
            };
          } else {
            return event;
          }
        }),
      };
    }
    case EditEventActionTypes.SELECT_DAY:
      return {
        ...state,
        specificDay: {
          ...state.specificDay,
          ...action.payload,
        },
      };
    case EditEventActionTypes.SELECT_EVENT:
      return {
        ...state,
        specificEvent: [...state.specificEvent, action.payload],
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
        additionalInputs: initialState.additionalInputs,
        specificDay: initialState.specificDay,
      };
    case EditEventActionTypes.CLEAR_SPECIFIC_EVENT:
      return {
        ...state,
        isEventAdded: initialState.isEventAdded,
        additionalInputs: initialState.additionalInputs,
        specificEvent: initialState.specificEvent,
      };
    case EditEventActionTypes.CLEAR_SELECT_EVENT:
      return {
        ...state,
        specificEvent: initialState.specificEvent,
      };
    case EditEventActionTypes.IS_EVENT_ADDED:
      return {
        ...state,
        isEventAdded: true,
      };
    default:
      return state;
  }
};
