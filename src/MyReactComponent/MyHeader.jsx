export default function MyHeader(props) {
  return (
    <div className="border border-black">
      <header className="text-xl text-pink-400 font-semibold">
        {props.title}
      </header>
      <main className="text-xl  text-violet-400 font-semibold">
        {props.children}
      </main>
      <footer className="text-xl  text-blue-400 font-semibold">
        {props.socialLinks}
      </footer>
    </div>
  );
}
