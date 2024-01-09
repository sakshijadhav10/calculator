import styles from './App.module.css';
import Display from './Components/display';
import ButtonContainer from './Components/ButtonContainer';
import {useState} from "react";

function App() {

  const [calVal,setCalVal] =useState("");
  const onButtonClick=(buttonText)=>{
    if(buttonText==='C'){
        setCalVal("");
    }
    else if(buttonText==='='){
        const result=eval(calVal);
        setCalVal(result);
    }
    else{
      const newDisplayVal=calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  }
    return (
    <>
     <center className={styles.heading}><h1>Calculator</h1>
     <div className={styles.calculator}>
      <Display displayVal = {calVal}></Display>
      
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
     </div>
     </center>
    </>
  );
}

export default App;
