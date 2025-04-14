"use client";

import { VideoCard } from "./VideoCard";

const dummyVideos = Array.from({ length: 10 }).map((_, i) => ({
	id: i,
	title: `Video Title ${i + 1}`,
	thumbnail_url: `/thumbnails/thumb${(i % 5) + 1}.jpg`, // Put dummy images
}));

export function VideoCarousel({ title }: { title: string }) {
	return (
		<div className="space-y-4">
			<h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
			<div className="flex gap-4 overflow-x-auto scrollbar-hide">
				{dummyVideos.map((video) => (
					<VideoCard key={video.id} video={video} />
				))}
			</div>
		</div>
	);
}
