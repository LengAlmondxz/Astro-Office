export const MyHeader = (props) => {
  return (
    <div className="border border-black">
      <header className="text-xl text-pink-400 font-semibold">
        {props.title}
      </header>
      <header className="text-xl text-violet-400 font-semibold">
        {props.subTitle}
      </header>
      <footer className="text-xl text-blue-400 font-semibold">
        {props.socialLinks}
      </footer>
    </div>
  );
};
