import { ActionType } from '../../actions';

const initialState = {
  filterType: `Все квесты`,
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FilterType: {
      return {
        ...state,
        filterType: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export { filter };
