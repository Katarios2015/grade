import { ActionType } from '../../actions';

const initialState = {
  title: `Квесты`,
};

const activeLink = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ActiveLink: {
      return {
        ...state,
        title: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export { activeLink };
