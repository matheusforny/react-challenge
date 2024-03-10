export const DEFAULT_FIRST_TEXT = 'Breaking';
export const DEFAULT_SECOND_TEXT = 'Bad';

const actionReducer = (
    state = {
      firstText: DEFAULT_FIRST_TEXT,
      secondText: DEFAULT_SECOND_TEXT,
    }, action) => {
  switch (action.type) {
    case 'SET_FIRST_TEXT':
      return {
        ...state, firstText: action.value,
      };
    case 'SET_SECOND_TEXT':
      return {
        ...state, secondText: action.value,
      };
    default:
      return state;
  }
};

export default actionReducer;
