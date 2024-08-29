"use client";
import { useEffect, useState } from "react";
import Logobar from "./Logobar";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const handleScroll = () => {
				const scrollTop = window.scrollY;
				if (scrollTop > 500) {
					if (scrollTop > lastScrollY) {
						// Scrolling down
						setScrolled(false);
					} else {
						// Scrolling up
						setScrolled(false);
					}
				} else {
					// Less than 100px scrolled
					setScrolled(true);
				}
				setLastScrollY(scrollTop);
			};
			window.addEventListener("scroll", handleScroll);
			return () => window.removeEventListener("scroll", handleScroll);
		}
	}, [lastScrollY]);

/*shadow-[0_0.5px_0.5px_rgba(143,156,212,0.5),0_0.5px_0.5px_rgba(143,156,212,0.3),0_-0.5px_0.5px_rgba(143,156,212,0.5),0_-0.5px_0.5px_rgba(143,156,212,0.3)]*/


	return (
		<section className="w-full flex justify-between items-center max-w-7xl mx-auto">
			<nav
				className={`paddingZ
				w-full flex justify-center max-w-[1250px]  py-3 fixed top-3 z-20
				bg-primary rounded-[25px] transition-shadow duration-300 ease-in-out 
				${scrolled ? 'transform -translate-y-full opacity-0' : 'transform translate-y-0 opacity-100'}
				${window.scrollY > 0? "bg-primary shadow-[0_4px_4px_rgba(143,156,212,0.5),0_4px_4px_rgba(143,156,212,0.3),0_-4px_4px_rgba(143,156,212,0.5),0_-4px_4px_rgba(143,156,212,0.3)] " : "bg-transparent " }`}

			>
				<div className={`w-full mx-auto flex  justify-between items-center max-w-7xl mx-auto
				${window.scrollY > 0? "" : "bg-transparent transform -translate-y-full opacity-0 " }`}
				>
					<p className="text-white text-[28px] font-bold cursor-pointer flex">
						Faru  
					</p>
					<Logobar />
				</div>
				
				
			</nav>
		</section>
	);
};

export default Navbar;

