//TYPESCRIPT
type PassPropsType = { name: string };
export default function PassProps({ name }: PassPropsType) {
  // let name : string;

  return (
    <div className="mt-3">
      <p></p>
      <p className="text-center text-xl text-pink-600 py-5 font-semibold ">
        {name} THIS NAME IS FROM PROPS
      </p>
    </div>
  );
}
