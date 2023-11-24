import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button === activeButton ? null : button);
  };

  const getButtonClassName = (button) => {
    return activeButton === button ? 'button-clicked' : 'button1';
  };

  return (
    <>
    <div className="container">

    <div className="elevateme">ElevateMe</div>

    <div className='buttons'>
      <input className={getButtonClassName('button1')} type="button" value="Home" onClick={() => handleButtonClick('button1')}></input>
      <input className={getButtonClassName('button2')} type="button" value="List" onClick={() => handleButtonClick('button2')}></input>
      <input className={getButtonClassName('button3')} type="button" value="5 Whys" onClick={() => handleButtonClick('button3')}></input>
      <input className={getButtonClassName('button4')} type="button" value="HMW" onClick={() => handleButtonClick('button4')}></input>
      <input className={getButtonClassName('button5')} type="button" value="About Us" onClick={() => handleButtonClick('button5')}></input>
    </div>
    </div>

    <div className='container2'>
      <div className='psg'>Problem Statement</div>
      <div className='generator'>Generator</div>
      <div className='specify-text1'>Specify first the number of Venn Diagram and</div>
      <div className='specify-text2'> Input the scopes of your problem statement</div>
      <div className='specify-text3'>you want to be generated</div>
      <input className='generate-button' type='submit' value='Generate'></input>
    </div>
    </>
  );
}

export default App;
