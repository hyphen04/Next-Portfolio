import Link from "next/link";
import Github from "../assets/icons/GitHub.svg";
import Instagram from "../assets/icons/Instagram.svg";
import Linkedin from "../assets/icons/Linkedin.svg";
import Twitter from "../assets/icons/Twitter.svg";
import Image from "next/image";

export default function AppFooter() {
  return (
    <div className="w-full md:h-[60px] pl-[5%] text-2xl md:text-sm font-extrabold justify-between flex">
      <Link href="/">
        &copy; CopyRights 2023 <span className="text-teal-400">kp.dev</span>
      </Link>
      <div className="text-2xl md:text-sm font-bold flex gap-4 w-1/2 justify-end pr-[5%]">
        <Link href="https://github.com/hyphen04" target="_blank">
          <Image src={Github}></Image>
        </Link>
        <Link
          href="https://www.linkedin.com/in/kunj-patel-42053b237/"
          target="_blank"
        >
          <Image src={Linkedin}></Image>
        </Link>
        <Link href="https://www.instagram.com/kunj.026/" target="_blank">
          <Image src={Instagram}></Image>
        </Link>
        <Link href="https://twitter.com/Kunj2604" target="_blank">
          <Image src={Twitter}></Image>
        </Link>
      </div>
    </div>
  );
}
