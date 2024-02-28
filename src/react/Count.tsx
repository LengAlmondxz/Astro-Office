import { useState } from "react";

export default function SetCount() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  const decrementCount = () => {
    setCount(count - 1);
    console.log(count);
  };

  const reset = () => {
    setCount(0);
    console.log(count);
  };

  return (
    <>
      <div>
        <div className="flex gap-2 mt-5 ml-2 justify-center">
          <button
            onClick={incrementCount}
            className="px-5 py-2 border rounded-md font-semibold bg-red-200 shadow-lg "
          >
            +1
          </button>
          <button
            onClick={decrementCount}
            className="px-5 py-2 border rounded-md font-semibold bg-yellow-200 shadow-lg "
          >
            -1
          </button>
          <button
            onClick={reset}
            className="px-5 py-2 border rounded-md font-semibold bg-green-200 shadow-lg "
          >
            Reset
          </button>
        </div>
        <p className="text-6xl text-center mt-8">{count}</p>
      </div>
    </>
  );
}
