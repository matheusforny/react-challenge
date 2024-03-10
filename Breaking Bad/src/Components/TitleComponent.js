import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {LIST_OF_IDS} from './AtomicElements';

const TitleComponent = () => {
  const firstText = useSelector((state) => state.text.firstText);
  const secondText = useSelector((state) => state.text.secondText);

  const [firstNameArray, setFirstNameArray] = useState([]);
  const [secondNameArray, setSecondNameArray] = useState([]);

  useEffect(() => {
    const textLoop = (text) => {
      const array = [];
      // This way we only find one symbol for text
      let alreadyFoundPeriodicSymbol = false;
      const listOfIds = LIST_OF_IDS;

      for (let index = 1; index < text.length; index++) {
        if (!alreadyFoundPeriodicSymbol &&
              listOfIds.includes(normalizeText(text[index - 1].toUpperCase() +
                    text[index]))) {
          if (index > 1) {
            array.pop();
          }

          array.push({
            text: normalizeText(text[index - 1].toUpperCase() + text[index]),
            periodicSymbol: true,
          });
          alreadyFoundPeriodicSymbol = true;
        } else {
          if (index === 1) {
            array.push({text: text[index - 1], periodicSymbol: false});
          }

          array.push({text: text[index], periodicSymbol: false});
        }
      }

      return array;
    };

    const firstArray = textLoop(firstText);
    const secondArray = textLoop(secondText);

    setFirstNameArray(firstArray);
    setSecondNameArray(secondArray);
  }, [firstText, secondText]);

  const normalizeText = (text) => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const displayText = (nameArray) => {
    return nameArray.map((value) =>
      <p
        className={value.periodicSymbol ?
                'textLetterPeriodic' : 'textLetterNormal'}
        key={value + Math.random()}>
        {value.text }
      </p>);
  };

  return (
    <div className='titleComponent'>
      <div className='titleTextContainer'>
        {displayText(firstNameArray) }
      </div>
      <div className='titleTextContainer'>
        {displayText(secondNameArray)}
      </div>
    </div>
  );
};

export default TitleComponent;
