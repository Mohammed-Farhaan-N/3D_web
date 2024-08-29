
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tilt } from "react-tilt";
import { projects, achievements } from "../Contents";
//import { SectionWrapper } from "./HigherOrderComponents";

// ProjectCard component without TypeScript type annotations
const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
	return (
		<div>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
			>
				<div className="relative w-full h-[230px]">
					<Image
						src={image}
						width={1000}
						height={1000}
						alt="project_image"
						className="w-full h-full object-cover rounded-2xl"
					/>

					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						<Link
							href={source_code_link}
							target="_blank"
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<Image
								src="/tech/github.webp"
								width={24}
								height={24}
								alt="source-code"
								className="object-contain"
							/>
						</Link>
					</div>
				</div>

				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px]">{description}</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</div>
	);
};

// AchievementCard component without TypeScript type annotations
const AchievementCard = ({ index, name, description, image, source_code_link }) => {
	return (
		<div>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
			>
				<div className="relative w-full h-[230px]">
					<Image
						src={image}
						width={1000}
						height={1000}
						alt="project_image"
						className="w-full h-full object-cover rounded-2xl"
					/>

					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						<Link
							href={source_code_link}
							target="_blank"
							className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<Image
								src="/tech/link.png"
								width={24}
								height={24}
								alt="source-code"
								className="object-contain"
							/>
						</Link>
					</div>
				</div>

				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px]">{description}</p>
				</div>
			</Tilt>
		</div>
	);
};

// Works component
const Works = () => {
	return (
		<>
			<div>
				<h2 className="sectionHeadText text-center">Skills</h2>
			</div>
			<div>
				<h2 className="sectionHeadText">Projects</h2>
			</div>

			<div className="w-full flex">
				<p className="mt-3 text-secondary text-[25px] max-w-5xl leading-[35px]">
					Showcasing my expertise through impactful projects, I address complex challenges,
					apply advanced technologies, and deliver outstanding results.
				</p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>

			<div className="mt-16">
				<h2 className="sectionHeadText">Achievements</h2>
			</div>

			<div className="w-full flex">
				<p className="mt-7 text-secondary text-[25px] max-w-5xl leading-[35px]">
					Notable achievements that emphasize my success in competitive environments, 
					leadership in technical teams, and contributions to advancing industry knowledge.
				</p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{achievements.map((project, index) => (
					<AchievementCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};
export default Works;

/*
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { achievements } from "../constants";
import { SectionWrapper } from "./HigherOrderComponents";

type ProjectCardProps = {
	index: number;
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link: string;
	/*netlify_link: string;
};

type AchievementCardProps = {
	index: number;
	name: string;
	description: string;
	image: string;
	source_code_link: string;
};

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
}: ProjectCardProps) => {
	return (
		<div>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
			>
				<div className="relative w-full h-[230px]">
					<Image
						src={image}
						width={1000}
						height={1000}
						alt="project_image"
						className="w-full h-full object-cover rounded-2xl"
					/>

					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						<Link
							href={source_code_link}
							target="_blank"
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<Image
								src="/tech/github.webp"
								width={24}
								height={24}
								alt="source-code"
								className="object-contain"
							/>
						</Link>
					</div>
				</div>

				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px]">{description}</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</div>
	);
};


const AchievementCard = ({
	index,
	name,
	description,
	image,
	source_code_link,
}:AchievementCardProps) => {
	return (
		<div >
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
			>
				<div className="relative w-full h-[230px]">
					<Image
						src={image}
						width={1000}
						height={1000}
						alt="project_image"
						className="w-full h-full object-cover rounded-2xl"
					/>

					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						<Link
							href={source_code_link}
							target="_blank"
							className=" w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<Image
								src="/tech/link.png"
								width={24}
								height={24}
								alt="source-code"
								className="object-contain"
							/>
						</Link>
					</div>
				</div>

				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px]">{description}</p>
				</div>
			</Tilt>
		</div>
	);
};
/*<p className="sectionSubText">My work</p>

const Works = () => {
	return (
		<>	
			<div>
				<h2 className="sectionHeadText text-center">Skills</h2>
			</div>
			<div>
				<h2 className="sectionHeadText">Projects</h2>
			</div>

			<div className="w-full flex">
				<p className="mt-3 text-secondary text-[25px] max-w-5xl leading-[35px]">
					Showcasing my expertise through impactful projects, I address complex challenges,
					apply advanced technologies, and deliver outstanding results.
				</p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>

			<div className="mt-16">
				<h2 className="sectionHeadText">Achievements</h2>
			</div>

			<div className=" w-full flex">
				<p className="mt-7 text-secondary text-[25px] max-w-5xl leading-[35px]">
					Notable achievements that emphasize my success in competitive environments, 
					leadership in technical teams, and contributions to advancing industry knowledge.
				</p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{achievements.map((project, index) => (
					<AchievementCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "");
*/