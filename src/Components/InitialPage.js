import React from 'react';
import './components.css';
import {useDispatch} from 'react-redux';
import {setFirstText, setSecondText} from '../Reducer/BreakingBadActions';
import {
  DEFAULT_FIRST_TEXT,
  DEFAULT_SECOND_TEXT,
} from '../Reducer/ActionReducer';
import TitleComponent from './TitleComponent';

const InitialPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    dispatch(setFirstText(formJson['firstName']));
    dispatch(setSecondText(formJson['secondName']));
  };

  return (
    <div className="componentContainer">
      <div>
        <TitleComponent />
        <form onSubmit={handleSubmit}>
          <div className='breakingBadComponents'>
            <div className="inputContainer">
              <label
                htmlFor="firstName"
                className="inputLabel">
                                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                defaultValue={DEFAULT_FIRST_TEXT}
                className="inputField"
              />
            </div>
            <div className="inputContainer">
              <label
                htmlFor="secondName"
                className="inputLabel">
                                Second Name
              </label>
              <input
                type="text"
                id="secondName"
                name="secondName"
                defaultValue={DEFAULT_SECOND_TEXT}
                className="inputField"
              />
            </div>
          </div>
          <div className='breakingBadComponents'>
            <button
              className='breakingBadButton'
              type="submit">
                          Breakify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InitialPage;
