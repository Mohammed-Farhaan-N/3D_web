"use client";
import ResumeButton from "./ResumeButton";
import Link from "next/link";
import Image from "next/image";

export const Logobar = () => {
	return (
	  <ul className="flex space-x-4 list-none p-0 m-0">
		<li>
		  <Link href="https://www.linkedin.com/in/mohammed-farhaan-n-5b45b7214/" target="_blank">
			<button
			  type="button"
			  className="flex justify-center rounded-md transition ease-in-out delay-150 bg-[#915EFF] hover:-translate-y-1 hover:scale-110 hover:bg-purple-600 duration-300 p-2"
			>
			  <Image
				src="/tech/linkedin.png"
				width={30}
				height={30}
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
				width={30}
				height={30}
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
				width={30}
				height={30}
				alt="X logo"
			  />
			</button>
		  </Link>
		</li>
	  </ul>
	);
  };

export default Logobar;
