import classes from "./Container.module.css";
import CalKey from "./CalKey";
import { useState } from "react";

const Container = () => {
  const [result, setResult] = useState(0);
  const [tmpResult, setTmpResult] = useState(0);
  const [prevOperand, setPrevOperand] = useState(null);
  const numKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "/", "="];
  let resultVar = 0;

  function updateResult(keyVal) {
    if (isNaN(keyVal)) {
      if (tmpResult) {
        switch (prevOperand) {
          case "+":
            resultVar = tmpResult * 1 + result * 1;
            break;
          case "-":
            resultVar = tmpResult * 1 - result * 1;
            break;
          case "*":
            resultVar = tmpResult * 1 * result * 1;
            break;
          case "/":
            resultVar = (tmpResult * 1) / (result * 1);
            break;
          default:
        }
        if (keyVal !== "=") {
          // for intermediary opertaions the tmeporary result needs to be stored
          setResult(0);
          setTmpResult(resultVar);
        } else {
          setResult(resultVar);
          setTmpResult(0);
        }
      } else {
        setTmpResult(result);
        setResult(0);
      }

      if (keyVal !== "=") {
        setPrevOperand(keyVal);
      } else {
        setPrevOperand("");
      }
    } else {
      setResult(result ? result + "" + keyVal : keyVal);
    }
  }

  return (
    <>
      <div className={classes.result}>{result ? result : 0}</div>
      <div className={classes.result}>{prevOperand}</div>
      <div className={classes.result}>{tmpResult}</div>
      <div className={classes.containerMain}>
        {numKeys.map((numKey) => {
          return <CalKey key={numKey} keyVal={numKey} onClick={updateResult} />;
        })}
      </div>
    </>
  );
};

export default Container;
