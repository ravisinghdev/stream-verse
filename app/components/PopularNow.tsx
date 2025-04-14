"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Play, Info } from "lucide-react";

interface MediaItem {
	id: number;
	title: string;
	description: string;
	image: string;
}

export default function PopularNow() {
	const [popularItems, setPopularItems] = useState<MediaItem[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulating API call
		setTimeout(() => {
			setPopularItems([
				{
					id: 1,
					title: "Attack on Titan",
					description: "Humanity fights back against giant titans.",
					image: "/covers/aot.jpg",
				},
				{
					id: 2,
					title: "John Wick",
					description: "A retired hitman seeks revenge.",
					image: "/covers/johnwick.jpg",
				},
				{
					id: 3,
					title: "Demon Slayer",
					description: "A boy becomes a demon slayer after tragedy.",
					image: "/covers/demonslayer.jpg",
				},
				{
					id: 4,
					title: "Jujutsu Kaisen",
					description: "Sorcerers fight curses in modern Tokyo.",
					image: "/covers/jujutsu.jpg",
				},
			]);
			setLoading(false);
		}, 1500);
	}, []);

	return (
		<section className="mt-12 px-4">
			<h2 className="text-3xl font-bold mb-6 text-center">🔥 Popular Now</h2>
			<div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
				{loading
					? Array.from({ length: 4 }).map((_, i) => (
							<Skeleton
								key={i}
								className="min-w-[250px] h-[360px] rounded-xl bg-muted/30"
							/>
					  ))
					: popularItems.map((item) => (
							<div
								key={item.id}
								className="min-w-[250px] bg-muted/20 rounded-xl relative group overflow-hidden hover:shadow-xl transition-all duration-300"
							>
								<img
									src={item.image}
									alt={item.title}
									className="h-64 w-full object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
								/>
								<div className="p-4">
									<h3 className="text-xl font-semibold">{item.title}</h3>
									<p className="text-sm text-muted-foreground line-clamp-2">
										{item.description}
									</p>
								</div>
								<div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
									<Button variant="default" size="sm" className="gap-2">
										<Play size={16} /> Play
									</Button>
									<Button variant="secondary" size="sm" className="gap-2">
										<Info size={16} /> Details
									</Button>
								</div>
							</div>
					  ))}
			</div>
		</section>
	);
}
