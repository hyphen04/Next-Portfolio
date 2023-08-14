import Cursor from "./Cursor";
import AppFooter from "./AppFooter";
import Link from "next/link";

function Frame({ children, className = "" }) {
  return (
    <>
      <section
        className={`flex flex-col min-h-[calc(100vh-60px)] md:h-auto justify-between md:gap-10 ${className}`}
      >
        <div className="w-full pl-[5%]  text-4xl font-extrabold justify-between flex">
          <Link href="/">KP</Link>
          <Link
            href="/about"
            className="text-2xl font-bold flex  w-1/2 justify-end pr-[5%]"
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className="text-2xl font-bold flex  w-1/2 justify-end pr-[5%]"
          >
            Say hi..
          </Link>
        </div>

        <div className="flex justify-between items-center h-auto">
          <Link href="/skills" className="socialicon font-bold text-2xl">
            SKILLS
          </Link>
          {children}
          <Link href="/projects" className="socialicon font-bold text-2xl">
            PROJECTS
          </Link>
          <Cursor />
        </div>
        <div></div>
      </section>
      <AppFooter />
    </>
  );
}

export default Frame;
