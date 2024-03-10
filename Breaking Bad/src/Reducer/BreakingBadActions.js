export const setFirstTextAction = (value) =>
  ({type: 'SET_FIRST_TEXT', value: value});
export const setSecondTextAction = (value) =>
  ({type: 'SET_SECOND_TEXT', value: value});

export const setFirstText = (value) => {
  return (dispatch) => {
    dispatch(setFirstTextAction(value));
  };
};

export const setSecondText = (value) => {
  return (dispatch) => {
    dispatch(setSecondTextAction(value));
  };
};
