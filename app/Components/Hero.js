"use client";

import React from "react";
import Soicalmedia from "./Soicalmedia";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
				<div>
					<h3 className="heroHeadText text-white">
					<span className="text-[#915EFF] ">I&apos;m Mohammed Farhaan ✌️</span>
					</h3>
					<p className="heroSubText">
						DevSecOps, Cloud, Software Engineer.
					</p>
					<p className="heroSubText2">
						Crafting secure, scalable solutions with innovation.
					</p>
					<ul className="heroSubapp">
						<Soicalmedia />
					</ul>

				</div>
			</div>
		</section>
	);
};

export default Hero;
