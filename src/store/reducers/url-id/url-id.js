import { ActionType } from '../../actions';

const initialState = {
  urlId: '',
};

const cardUrlId = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CardUrlId: {
      return {
        ...state,
        urlId: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export { cardUrlId };
