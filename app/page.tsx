import { BackgroundLines } from "@/components/aceternity-ui/background-lines";
import { FlipWords } from "@/components/aceternity-ui/flip-words";
import FeaturedSliderWrapper from "./components/FeaturedSlider";
import CategoryGrid from "./components/CategoryGrid";
import CTASection from "./components/CTASection";

export default function Home() {
	const words = ["movies", "anime", "web-series", "tv shows"];
	return (
		<div>
			{/* Hero Section - DON'T TOUCH */}
			<BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
				<div className="h-[40rem] flex justify-center items-center px-4">
					<div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
						Watch
						<FlipWords words={words} /> <br />
						on Stream Verse
					</div>
				</div>
			</BackgroundLines>

			{/* Featured Carousel */}
			<FeaturedSliderWrapper />

			{/* Categories */}
			<CategoryGrid />

			{/* CTA */}
			<CTASection />
		</div>
	);
}
