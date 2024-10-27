import Display from "./calcu_compo/Display";
import ButtonsContainer from "./calcu_compo/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div  style={{height:'100vh', width:'100vw',display:"flex" ,justifyContent:'center'
      ,alignItems:'center'
     }} className={styles.back} >
          <div style={{ height:'500px', padding:'20px',borderRadius:'40px', width:'250px',display:'flex',flexDirection:'column',alignItems:'center'}}  className={styles.calculator}>
      <div className={styles.imgg}></div>
    <Display displayValue={calVal}></Display>
    <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
  </div>
    </div>
  );
}

export default App;