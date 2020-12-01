import './App.css';
import React, {useState, useEffect} from 'react';
import {loadState, saveState} from './getState';

function App() {

  const [goal, updateGoal] = useState(84000);
  const [haveNow, updateHaveNow] = useState(0);
  const [current, updateCurrent] = useState('');

  useEffect(() => {
    updateHaveNow(loadState());
  }, []);

  useEffect(() => {
    saveState(haveNow);
  }, [haveNow]);


  const getSum = (e)=>{
      updateCurrent(e.target.value);
  };

  const saveSum = (e)=>{
    if(e.key === 'Enter'){
      updateHaveNow(haveNow + +current);
      updateCurrent('');
    }
    
  };
  return (
    <div className="App">
     <div className='container'>
        <div className='inner-cont'>
          <div className='top-cont'>
            <span>{haveNow}</span>
          </div>
          <div className='top-cont'>
            <span>{(haveNow*100/goal).toFixed(2)}</span>
          </div>
          <div className='top-cont'>
            <span>{goal}</span>
          </div>
        </div>
        <div className='inner-cont input-container'>
          <input type='text' placeholder='write a sum' className='input' onChange={getSum} onKeyDown={current? saveSum : null} value={current}/>
        </div>
     </div>
    </div>
  );
}

export default App;
