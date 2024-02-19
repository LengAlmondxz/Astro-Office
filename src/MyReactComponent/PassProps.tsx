
//TYPESCRIPT
type PassPropsType = {name:string}
export default function PassProps({name} : PassPropsType) {
  // let name : string;

  return (
    <div className="mt-3">
      <p></p>
      <p className="text-center text-xl text-pink-600 py-5 font-semibold ">
        {name} THIS NAME IS FROM PROPS
      </p>
      <div className="grid justify-items-center">
        <input
          className="border-2 border-violet-800 w-60 h-9 rounded-md"
          type="text"
        />
      </div>
    </div>
  );
}
