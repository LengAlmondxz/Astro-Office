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
        <div class="flex gap-2 mt-5 ml-2 justify-center">
          <button
            onClick={incrementCount}
            class="px-5 py-2 border rounded-md font-semibold bg-red-200 shadow-lg "
          >
            +1
          </button>
          <button
            onClick={decrementCount}
            class="px-5 py-2 border rounded-md font-semibold bg-yellow-200 shadow-lg "
          >
            -1
          </button>
          <button
            onClick={reset}
            class="px-5 py-2 border rounded-md font-semibold bg-green-200 shadow-lg "
          >
            Reset
          </button>
        </div>
        <p class="text-6xl text-center mt-8">{count}</p>
      </div>
    </>
  );
}
