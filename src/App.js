import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import styles from './App.module.scss';
import { useState } from 'react';

library.add(fas);

function App() {
  const [value, setValue] = useState('home');
  // Добавим начальную картинку

  let iconsNameArray, randomIndex, randomIcon, result;

  const nameCalculate = () => {
    iconsNameArray = Object.keys(fas).map((iconName) => {
      return iconName;
    });
    randomIndex = Math.floor(Math.random() * iconsNameArray.length);
    randomIcon = iconsNameArray[randomIndex];

    // на 23 сбрасываем значение, чтобы пушить в чистый массив, а не удлинять название иконки
    result = [];
    // в цикле меняем имя рандомной иконки из библиотеки с верблюжьего на дефисный (кебабный?)
    for (let i = 0; i < randomIcon.length; i++) {
      const element = randomIcon[i];
      if (element !== element.toUpperCase()) {
        result.push(element);
      } else {
        result.push('-');
        result.push(element.toLowerCase());
      }
    }

    setValue(result.join(''));
  };

  // задержка в 3 секунды
  const delayHandler = () => {
    setTimeout(() => {
      nameCalculate();
    }, 3000);
  };

  return (
    <div className={styles.container}>
      <button onClick={delayHandler} className={styles.button}>
        click me!
      </button>
      <FontAwesomeIcon icon={`${value}`} className={styles.icon} />
    </div>
  );
}

export default App;
