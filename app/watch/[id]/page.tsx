"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ReactPlayer from "react-player";

const WatchEpisode = () => {
	const params = useParams();
	const episodeId = params?.id as string;

	const [videoUrl, setVideoUrl] = useState<string | null>(null);

	useEffect(() => {
		if (!episodeId) return;

		const fetchStream = async () => {
			try {
				const res = await fetch(
					`https://anime-eta-two.vercel.app/anime/zoro/watch/${episodeId}`
				);
				const data = await res.json();

				const url = data.sources?.find(
					(s: any) => s.quality === "default" || s.quality === "720p"
				)?.url;

				setVideoUrl(url);
			} catch (err) {
				console.error("Failed to fetch episode stream:", err);
			}
		};

		fetchStream();
	}, [episodeId]);

	return (
		<div className="p-6">
			<h1 className="text-2xl font-semibold mb-4">Episode Player</h1>
			{videoUrl ? (
				<div className="aspect-video w-full">
					<ReactPlayer url={videoUrl} controls width="100%" height="100%" />
				</div>
			) : (
				<p>Loading video...</p>
			)}
		</div>
	);
};

export default WatchEpisode;
