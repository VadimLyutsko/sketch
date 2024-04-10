import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSortDown} from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import styles from './App.module.scss'
import {useState} from 'react';

library.add(fas);

function App() {


    const [value, setValue] = useState('home')

    let iconsNameArray = [faSortDown]

    let randomIndex = Math.floor(Math.random() * iconsNameArray.length);
    let randomIcon = iconsNameArray[randomIndex];
    let result = [];
    const handler = () => {
        iconsNameArray = Object.keys(fas).map((iconName) => {
            return iconName
        })
        randomIndex = Math.floor(Math.random() * iconsNameArray.length);
        randomIcon = iconsNameArray[randomIndex];
        result = []

        for (let i = 0; i < randomIcon.length; i++) {
            const element = randomIcon[i];
            if (element !== element.toUpperCase()) {
                result.push(element)
            } else {
                result.push('-');
                result.push(element.toLowerCase())
            }
        }
        setValue(result.join(''))
    }

    const deb = () => {
        setTimeout(() => {
            handler()
        }, 1000);
    }

    return (
        <div className={styles.container}>
            <button onClick={deb} className={styles.button}>click me!</button>
            <FontAwesomeIcon icon={`${value}`} className={styles.icon}/>
        </div>
    );
}

export default App;
