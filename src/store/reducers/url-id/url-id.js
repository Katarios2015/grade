import { ActionType } from '../../actions';

const initialState = {
  urlId: '',
};

const CardUrlId = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CARD_URL_ID: {
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

export { CardUrlId };
