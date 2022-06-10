import "./App.css";
import { useEffect, useState } from "react";
import { Button } from "antd";
import _ from "lodash";
import "antd/dist/antd.css";

function App() {
  const [secondaryFilter, setSecondaryFilter] = useState([]);
  const [activeRow, setActiveRow] = useState();
  const dummyData1 = ["a", "b", "c", "d"];
  // const dummyData1 = false;
  const dummyData2 = ["e", "f", "g", "h"];
  // const dummyData2 = false
  const dummyData3 = ["j", "k", "l", "m"];
  // const dummyData3 = false
  const dummyData4 = ["n", "o", "p", "h"];
  // const dummyData4 = false
  const filterButton = [
    { name: "dummyData1" },
    { name: "dummyData2" },
    { name: "dummyData3" },
    { name: "dummyData4" },
  ];
  const handleDownPress = () => {};

  const handleUpPress = () => {};

  const useKeyPress = () => {
    function downHandler({ key }) {
      if (key === "ArrowDown") {
        handleDownPress();
      }
    }
    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
      if (key === "ArrowUp") {
        handleUpPress();
      }
    };

    // Add event listeners
    useEffect(() => {
      console.log(secondaryFilter);
      console.log("Secondary controller executed");
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
    }, [secondaryFilter]); // Empty array ensures that effect is only run on mount and unmount
  };

  const removeFromFilter = (name) => {
    setSecondaryFilter(_.without(secondaryFilter, name));
  };

  const addToFilter = (name) => {
    setSecondaryFilter([...secondaryFilter, name]);
  };

  useKeyPress();

  useEffect(() => {
    console.log("Second UseFilter");
  }, [secondaryFilter]);
  return (
    <>
      <div className="App-container-button">
        {filterButton.map((item) => (
          <div className="App-Button">
            <Button
              name={item.name}
              onClick={(e) => {
                if (secondaryFilter?.includes(item.name)) {
                  removeFromFilter(item.name);
                } else {
                  addToFilter(item.name);
                }
              }}
              type={secondaryFilter?.includes(item.name) ? "primary" : "ghost"}
            >
              {item.name}
            </Button>
          </div>
        ))}
      </div>
      <div className="App-container">
        {(secondaryFilter.includes("dummyData1") ||
          secondaryFilter.length === 0) &&
          dummyData1.map((item, index) => {
            const activeRowIndex = "dummyData1" + index;
            return (
              <div
                key={index}
                className={activeRowIndex === activeRow ? "Active" : "App-Item"}
              >
                {item}
              </div>
            );
          })}
        {(secondaryFilter.includes("dummyData2") ||
          secondaryFilter.length === 0) &&
          dummyData2.map((item, index) => {
            const activeRowIndex = "dummyData2" + index;
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
        {(secondaryFilter.includes("dummyData3") ||
          secondaryFilter.length === 0) &&
          dummyData3.map((item, index) => {
            const activeRowIndex = "dummyData3" + index;
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
        {(secondaryFilter.includes("dummyData4") ||
          secondaryFilter.length === 0) &&
          dummyData4.map((item, index) => {
            const activeRowIndex = "dummyData4" + index;
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
    </>
  );
}

export default App;
