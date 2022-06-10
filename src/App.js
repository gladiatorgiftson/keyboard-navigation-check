import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const dummyData1 = ["a", "b", "c", "d"];
  // const dummyData1 = false
  const dummyData2 = ["e", "f", "g", "h"];
  // const dummyData2 = false
  const dummyData3 = ["j", "k", "l", "m"];
  // const dummyData3 = false
  const dummyData4 = ["n", "o", "p", "h"];
  // const dummyData4 = false

  const [activeRow, setActiveRow] = useState(10);
  const [rowName, setRowName] = useState(dummyData1.length + 10);
  const [keyValue, setKeyValue] = useState("");

  const useKeyPress = (targetKey) => {
    const [keyPressed, setKeyPressed] = useState(false);
    function downHandler({ key }) {
      if (key === "ArrowDown") {
        setKeyValue("Down");
        setActiveRow((index) => (index = ++index));
      }
    }
    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
      if (key === "ArrowUp") {
        setKeyValue("Up");
        setActiveRow((index) => (index = --index));
      }
    };

    useEffect(() => {
      if (activeRow === rowName && keyValue === "Down") {
        setActiveRow((index) => (index = index - (index % 10) + 10));
      }
      if (activeRow === rowName && keyValue === "Up") {
        setActiveRow((index) => (index = (index % 10) - index - 10));
      }
    }, [activeRow]);

    useEffect(() => {
      if (activeRow === rowName) {
        if (rowName === dummyData1?.length + 10) {
          setRowName(() => dummyData2?.length + 20);
        }
        if (rowName === dummyData2?.length + 20) {
          setRowName(() => dummyData3?.length + 30);
        }
        if (rowName === dummyData3?.length + 30) {
          setRowName(() => dummyData4?.length + 40);
        }
        console.log("the active row", activeRow);
      }
    }, [activeRow]);

    // Add event listeners
    useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return keyPressed;
  };

  useKeyPress();
  return (
    <div className="App-container">
      {activeRow}
      {dummyData1 &&
        dummyData1.map((item, index) => {
          return (
            <div
              key={"1" + index}
              className={"1" + index == activeRow ? "Active" : "App-Item"}
            >
              {item}
            </div>
          );
        })}
      {dummyData2 &&
        dummyData2.map((item, index) => {
          return (
            <div
              key={"2" + index}
              className={"2" + index == activeRow ? "Active" : "App-Item"}
            >
              {item}
            </div>
          );
        })}
      {dummyData3 &&
        dummyData3.map((item, index) => {
          return (
            <div
              key={"3" + index}
              className={"3" + index == activeRow ? "Active" : "App-Item"}
            >
              {item}
            </div>
          );
        })}
      {dummyData4 &&
        dummyData4.map((item, index) => {
          return (
            <div
              key={"4" + index}
              className={"4" + index == activeRow ? "Active" : "App-Item"}
            >
              {item}
            </div>
          );
        })}
    </div>
  );
}

export default App;
