"use client";

import { useRef } from "react";
import MediaCard from "./MediaCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MediaSliderProps {
	items: any[];
	isLoading: boolean;
}

const MediaSlider = ({ items, isLoading }: MediaSliderProps) => {
	const sliderRef = useRef<HTMLDivElement>(null);

	const scroll = (dir: "left" | "right") => {
		if (!sliderRef.current) return;
		const scrollAmount = dir === "left" ? -300 : 300;
		sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
	};

	return (
		<div className="relative group px-4 mt-4">
			{/* Prev/Next Buttons */}
			<Button
				size="icon"
				variant="ghost"
				className="absolute left-2 top-1/2 z-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition"
				onClick={() => scroll("left")}
			>
				<ChevronLeft />
			</Button>
			<Button
				size="icon"
				variant="ghost"
				className="absolute right-2 top-1/2 z-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition"
				onClick={() => scroll("right")}
			>
				<ChevronRight />
			</Button>

			{/* Scrollable Cards */}
			<div
				ref={sliderRef}
				className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth py-4"
			>
				{isLoading
					? Array.from({ length: 6 }).map((_, idx) => (
							<div
								key={idx}
								className="min-w-[240px] h-80 bg-muted/30 rounded-lg overflow-hidden"
							>
								<Skeleton className="h-full w-full" />
							</div>
					  ))
					: items.map((item) => (
							<div key={item.id} className="min-w-[240px]">
								<MediaCard item={item} />
							</div>
					  ))}
			</div>
		</div>
	);
};

export default MediaSlider;
