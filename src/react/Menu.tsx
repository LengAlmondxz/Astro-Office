// import Navigation from "../components/Navigation.astro";
import { PassChild } from "./Passchild";

export const Menu = () => {
  return (
    <div>
      <div className="mx-auto">
        <header className="bg-pink-50 sm:bg-violet-50 flex justify-center py-0 sm:py-5 nav-header">
          <nav className="uppercase">
            <div className="nav-links font-semibold text-xl flex gap-10">
              <a
                slot="menuLinks"
                className="text-xl font-bold underline text-blue-70"
                href="/"
              >
                home
              </a>
              <a slot="menuLinks" href="/webpages/about">
                about
              </a>
              <a slot="menuLinks" href="/webpages/blog">
                blog
              </a>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};
