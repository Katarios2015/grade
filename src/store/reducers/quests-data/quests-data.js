import {ActionType} from "../../actions";

const initialState = {
  cards: [],
  isDataLoaded: false,
};

const QuestsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_QUESTS: {
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

export {QuestsData};
