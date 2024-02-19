export default function MyHeader(props) {
  return (
    <div className="border border-black">
      <header class="text-xl text-pink-400 font-semibold">{props.title}</header>
      <header class="text-xl text-violet-400 font-semibold">
        {props.subTitle}
      </header>
      <footer class="text-xl text-blue-400 font-semibold">
        {props.socialLinks}
      </footer>
    </div>
  );
}
