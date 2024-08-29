"use client";
import ResumeButton from "./ResumeButton";
import Link from "next/link";
import Image from "next/image";

export const HorizontalList = () => {
	return (
	  <ul className="flex space-x-4 list-none p-0 m-0">
		<li>
			<ResumeButton/>
		</li>
		<li>
		  <Link href="https://www.linkedin.com/in/mohammed-farhaan-n-5b45b7214/" target="_blank">
			<button
			  type="button"
			  className="flex justify-center rounded-md transition ease-in-out delay-150 bg-[#915EFF] hover:-translate-y-1 hover:scale-110 hover:bg-purple-600 duration-300 p-2"
			>
			  <Image
				src="/tech/linkedin.png"
				width={40}
				height={40}
				alt="LinkedIn logo"
			  />
			</button>
		  </Link>
		</li>
		<li>
		  <Link href="https://github.com/Mohammed-Farhaan-N" target="_blank">
			<button
			  type="button"
			  className="flex justify-center rounded-md transition ease-in-out delay-150 bg-[#915EFF] hover:-translate-y-1 hover:scale-110 hover:bg-purple-600 duration-300 p-2"
			>
			  <Image
				src="/tech/github.png"
				width={40}
				height={40}
				alt="github logo"
			  />
			</button>
		  </Link>
		</li>
		<li>
		  <Link href="https://www.linkedin.com/in/mohammed-farhaan-n-5b45b7214/" target="_blank">
			<button
			  type="button"
			  className="flex justify-center rounded-md transition ease-in-out delay-150 bg-[#915EFF] hover:-translate-y-1 hover:scale-110 hover:bg-purple-600 duration-300 p-2"
			>
			  <Image
				src="/tech/X.png"
				width={40}
				height={40}
				alt="X logo"
			  />
			</button>
		  </Link>
		</li>
	  </ul>
	);
  };

export default HorizontalList;
