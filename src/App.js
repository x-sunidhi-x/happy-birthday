import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Confetti from './Confetti';
import Cake from './Cake';
import { ReactFloatingBalloons } from "react-floating-balloons";
function App() {
  const [click,setClick]=useState(false);


  return (
    <div className='App'>
      <p>Smart, good looking, and funny!<br/><br/>But enough about me.<br/></p>
        <h1>HAPPY BIRTHDAY MEHHH!!</h1>
        <center>
      
        <button  onClick={() => {
          setClick(!click);

        }}>
          Make a wish
        </button >
        {click && <Confetti />}
        {
          click &&
          <ReactFloatingBalloons
        count={6}
        msgText=""
        colors={["purple","blue"]}
        popVolumeLevel={0.1}
      />
        }
        <Cake click={click}/> 
    {click&& <div style={{marginTop:"300px"}}>
May All Your Wishes Come True
<br/>(double click the balloons 💥)
</div>}    
        </center>
    </div>
  );
}

export default App;
