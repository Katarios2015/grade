import {ActionType} from "../../actions";

const initialState = {
  card: {},
  isItemDataLoaded: false,
};

const CardData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_QUEST_CARD: {
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

export {CardData};
