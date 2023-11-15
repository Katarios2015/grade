import { ActionType } from '../../actions';

const initialState = {
  isBookingModalOpened: false,
};

const modalToggle = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_TOGGLE: {
      return {
        ...state,
        isBookingModalOpened: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export { modalToggle };
