import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
    ".",
  ];

  return (
    <div style={{height:'400px'}} className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button
          className={styles.button }
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}

{/* <button className="button-30" >Button 30</button>  */}

    </div>
  );
};

export default ButtonsContainer;