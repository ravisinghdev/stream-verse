"use client";

import { useEffect, useState } from "react";
import InfiniteSlider from "../FeaturedSlider/InfiniteSlider";
import { fetchTMDB } from "@/lib/fetchTMDB";
import { fetchAnime } from "@/lib/fetchJikan";
import { MediaItem } from "../FeaturedSlider/MediaCard";

export default function FeaturedSections() {
	const [movies, setMovies] = useState<MediaItem[]>([]);
	const [webSeries, setWebSeries] = useState<MediaItem[]>([]);
	const [anime, setAnime] = useState<MediaItem[]>([]);

	useEffect(() => {
		fetchTMDB("movie").then(setMovies);
		fetchTMDB("tv").then(setWebSeries);
		fetchAnime().then(setAnime);
	}, []);

	return (
		<div className="space-y-16 py-10 px-4 max-w-7xl mx-auto">
			<InfiniteSlider title="🎬 Popular Movies" items={movies} />
			<InfiniteSlider title="📺 Top Web Series" items={webSeries} />
			<InfiniteSlider title="🌀 Trending Anime" items={anime} />
		</div>
	);
}
