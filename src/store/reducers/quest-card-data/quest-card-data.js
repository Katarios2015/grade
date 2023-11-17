import { ActionType } from '../../actions';

const initialState = {
  card: {},
  isCardDataLoaded: false,
};

const cardData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LoadQuestCard: {
      return {
        ...state,
        card: action.payload,
        isCardDataLoaded: true,
      };
    }
    default: {
      return state;
    }
  }
};

export { cardData };
