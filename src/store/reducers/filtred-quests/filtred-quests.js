import { ActionType } from '../../actions';

const initialState = {
  filteredCards: [],
};

const cardFiltered = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTRED_CARDS: {
      return {
        ...state,
        filteredCards: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export { cardFiltered };
