//TYPESCRIPT
type PassPropsType = {
  username: string;
  age: number;
  isCute: true;
};
export default function PassProps({ username, age, isCute }: PassPropsType) {
  return (
    <div className="mt-3">
      <h1 className="text-3xl font-bold text-center mt-10 text-pink-600">
        PASS PROPS WITH TYPESCRIPT
      </h1>
      <p className="text-center text-2xl py-5 font-semibold ">
        Name : {username} <br />
        Age : {age} <br />
        My cat is cute ? -- {isCute}
      </p>
    </div>
  );
}
