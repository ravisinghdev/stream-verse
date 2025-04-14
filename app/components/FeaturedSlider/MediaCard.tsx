"use client";

import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";
import { motion } from "framer-motion"; // For smooth animations

interface MediaCardProps {
	item: {
		id: number;
		title: string;
		description: string;
		image: string;
		type?: string;
		rating?: number;
		year?: string;
	};
}

const MediaCard: FC<MediaCardProps> = ({ item }) => {
	const [isHovered, setIsHovered] = useState(false); // Track hover state

	return (
		<motion.div
			className={`relative min-w-[250px] h-[400px] rounded-xl overflow-hidden bg-muted/10 shadow-md hover:shadow-xl transition-shadow duration-300`}
			onMouseEnter={() => setIsHovered(true)} // Set hover state to true
			onMouseLeave={() => setIsHovered(false)} // Set hover state to false
		>
			{/* Image */}
			<img
				src={item.image}
				alt={item.title}
				className={`h-full w-full object-cover transition-transform duration-500 ease-in-out ${
					isHovered ? "scale-105" : ""
				}`}
			/>

			{/* Overlay - only on hovered card */}
			<div
				className={`absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-3 z-10 ${
					isHovered ? "opacity-100 backdrop-blur-sm" : "opacity-0"
				}`}
			>
				{/* Play and Details Button */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: isHovered ? 1 : 0 }} // Buttons appear only on hover
					transition={{ duration: 0.2 }}
				>
					<Button size="sm" className="gap-1">
						<Play size={16} /> Play
					</Button>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: isHovered ? 1 : 0 }} // Buttons appear only on hover
					transition={{ duration: 0.2, delay: 0.1 }}
				>
					<Button variant="secondary" size="sm" className="gap-1">
						<Info size={16} /> Details
					</Button>
				</motion.div>
			</div>

			{/* Text Info */}
			<div className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-3 z-20 backdrop-blur-md">
				{/* Title and Description */}
				<h3 className="text-lg font-semibold line-clamp-1">{item.title}</h3>
				<p className="text-sm text-muted-foreground line-clamp-2">
					{item.description}
				</p>

				{/* Rating and Year */}
				<div className="flex items-center justify-between text-xs mt-2 text-muted-foreground">
					<span>{item.year || "N/A"}</span>
					<span>{item.rating ? `${item.rating.toFixed(1)}★` : "NR"}</span>
				</div>
			</div>

			{/* Badges */}
			<div className="absolute top-2 left-2 z-20">
				{item.type === "Movie" && (
					<span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
						🎬 Movie
					</span>
				)}
				{item.type === "Web Series" && (
					<span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
						📺 Web Series
					</span>
				)}
				{/* Example Trending Badge */}
				<span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded-full">
					🔥 Trending
				</span>
			</div>
		</motion.div>
	);
};

export default MediaCard;
