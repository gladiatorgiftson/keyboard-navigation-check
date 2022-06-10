import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const dummyData1 = ["a", "b", "c", "d"];
  // const dummyData1 = false;
  const dummyData2 = ["e", "f", "g", "h"];
  // const dummyData2 = false
  const dummyData3 = ["j", "k", "l", "m"];
  // const dummyData3 = false
  const dummyData4 = ["n", "o", "p", "h"];
  // const dummyData4 = false

  const [activeRow, setActiveRow] = useState();
  const [rowIndex, setRowIndex] = useState([]);
  const [activeIndex, setActiveIndex] = useState();
  const [activeRowIndex, setActiveRowIndex] = useState("");
  const [indexValue, setIndexValue] = useState(0);
  const [indexLength, setIndexLength] = useState(6);
  // cosnt [rowName, setName]
  const handleDownPress = () => {
    if (rowIndex.isEmpty) {
      setRowIndex(["vehicle", "customers", "agreements", "reservation"]);
      setActiveIndex(rowIndex[indexValue]);
      setIndexValue(0);
    }
  };

  const useComponetActive = () => {
    useEffect(() => {
      setActiveRowIndex(activeIndex + indexValue);
    }, [activeIndex, indexValue]);
  };

  const useKeyPress = () => {
    function downHandler({ key }) {
      if (key === "ArrowDown") {
        handleDownPress();
      }
    }
    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
      if (key === "ArrowUp") {
        console.log("Arrow Up");
      }
    };
    // Add event listeners
    useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
    }, [rowIndex]); // Empty array ensures that effect is only run on mount and unmount
  };

  useKeyPress();
  return (
    <div className="App-container">
      {dummyData1 &&
        dummyData1.map((item, index) => {
          const activeRowIndex = "vehicle" + index;
          console.log(activeRowIndex);
          return (
            <div
              key={index}
              className={activeRowIndex === activeRow ? "Active" : "App-Item"}
            >
              {item}
            </div>
          );
        })}
      {dummyData2 &&
        dummyData2.map((item, index) => {
          const activeRowIndex = "customers" + index;
          return (
            <div
              key={index}
              className={activeRowIndex === activeRow ? "Active" : "App-Item"}
              onClick={(e) => {
                console.log(activeRowIndex);
              }}
            >
              {item}
            </div>
          );
        })}
      {dummyData3 &&
        dummyData3.map((item, index) => {
          const activeRowIndex = "Agreements" + index;
          return (
            <div
              key={index}
              className={activeRowIndex === activeRow ? "Active" : "App-Item"}
              onClick={(e) => {
                console.log(activeRowIndex);
              }}
            >
              {item}
            </div>
          );
        })}
      {dummyData4 &&
        dummyData4.map((item, index) => {
          const activeRowIndex = "Reservation" + index;
          console.log(activeRowIndex);
          return (
            <div
              key={index}
              className={activeRowIndex === activeRow ? "Active" : "App-Item"}
            >
              {item}
            </div>
          );
        })}
    </div>
  );
}

export default App;
