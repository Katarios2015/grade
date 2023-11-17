import {ActionType} from "../../actions";

const initialState = {
  cards: [],
  isDataLoaded: false,
};

const questsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LoadQuests: {
      return {
        ...state,
        cards: action.payload,
        isDataLoaded: true,
      };
    }
    default: {
      return state;
    }
  }
};

export {questsData};
