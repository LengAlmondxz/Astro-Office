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
            class="px-5 py-2 border border-black rounded-md"
          >
            +1
          </button>
          <button
            onClick={decrementCount}
            class="px-5 py-2 border border-black rounded-md"
          >
            -1
          </button>
          <button
            onClick={reset}
            class="px-5 py-2 border border-black rounded-md"
          >
            Reset
          </button>
        </div>
        <p class="text-6xl text-center mt-3">{count}</p>
      </div>
    </>
  );
}

// export default function Increment() {
// return setCount(count + 1);
// }

// export default function Decrement(props) {
// return setCount(count + 1);
// }

// export default function Reset(props) {
// return setCount(count + 1);
// }
