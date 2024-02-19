export default function PassProps(props) {
  return (
    <div className="mt-3">
      <p></p>
      <p className="text-center text-xl text-pink-600 py-5 font-semibold ">
        {props.name} THIS NAME IS FROM PROPS
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
