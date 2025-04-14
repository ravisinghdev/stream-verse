"use client";

import { useEffect, useState } from "react";
import GenreTabs from "./GenreTabs";
import MediaSlider from "./MediaSlider";
import { fetchAnime } from "@/lib/fetchJikan";
import { fetchTMDB } from "@/lib/fetchTMDB";

const FeaturedSlider = () => {
	const [activeTab, setActiveTab] = useState("Anime");
	const [mediaItems, setMediaItems] = useState([]);
	const [loading, setLoading] = useState(true);

	const loadContent = async (tab: string) => {
		setLoading(true);
		if (tab === "Anime") {
			const anime = await fetchAnime();
			setMediaItems(anime);
		} else if (tab === "Movies") {
			const movies = await fetchTMDB("movie");
			setMediaItems(movies);
		} else if (tab === "Web Series") {
			const series = await fetchTMDB("tv");
			setMediaItems(series);
		}
		setLoading(false);
	};

	useEffect(() => {
		loadContent(activeTab);
	}, [activeTab]);

	return (
		<section className="w-full">
			<GenreTabs activeTab={activeTab} onChangeTab={setActiveTab} />
			<MediaSlider items={mediaItems} isLoading={loading} />
		</section>
	);
};

export default FeaturedSlider;
