import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('./components/Navbar'), { ssr: false });
import {
	Hero,
  Works,
} from "./components";



export default function Home() {
	return (
		<div className="relative z-0 bg-primary font-sans">
			<div className="relative z-0">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero />
        </div>
        <div className="bg-hero-pattern bg-repeat bg-center">
          <Works/>
        </div>
			</div>
		</div>
	);
}