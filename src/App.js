import Result from './components/Result';
import Entry from './components/Entry';
import { useState } from 'react';
import './App.css';

function App() { 
  let [data,setData] = useState({
    person1 : "",
    person2 : ""
  })
  const getDataFromChild=(dataFromChild)=>{
    setData(dataFromChild);
  }
  return (
    <div className="App">
      <div className='header mx-3'>
        <h1 className='pt-5 p-3 fst-italic fw-bolder text-center' style={{color : "#FFEA00"}}>Welcome to FLAMES game!</h1>
        <div className='fst-italic text-center' style={{color : "#00FFFF"}}>
          <div>It uses the concept FLAMES to determine the relationship between two people. </div>
          <div>FLAMES stands for - Friends, Lover, Affection, Marriage, Enemies, Siblings. </div>
        </div>
      </div>
      <div className="ui m-3 p-2">
        {data.person1.length === 0 && data.person2.length === 0 
        ?<Entry getDataFromChild={getDataFromChild}/>
        :<Result person1 = {data.person1} person2 = {data.person2} getDataFromChild={getDataFromChild}/>
        }
      </div>
    </div>
  );
}

export default App;
