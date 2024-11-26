import { createContext, useContext, useState } from "react";

let CounterContext = createContext(null);

let CountProvider = ({children})=>{
  let [count, setCount] = useState(0);
  let countPlus=()=>{setCount(++count)};
  let countMinus=()=>{setCount(--count)};
  let value={
    count,
    // setCount,React.Dispatch<React.SetStateAction<number>>
    countPlus,
    countMinus
  };
  return(
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

let useCountContext=()=>{
  let context = useContext(CounterContext);
  if (!context)
    throw new Error(
      "useCountContext должен использоваться внутри CountProvider."
    );
  return context;
};
export {useCountContext, CountProvider};