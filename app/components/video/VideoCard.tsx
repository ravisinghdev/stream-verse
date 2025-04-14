"use client";

interface VideoCardProps {
	video: {
		id: number;
		title: string;
		thumbnail_url: string;
	};
}

export function VideoCard({ video }: VideoCardProps) {
	return (
		<div className="min-w-[160px] sm:min-w-[200px] md:min-w-[240px] lg:min-w-[280px] relative">
			<img
				src={video.thumbnail_url}
				alt={video.title}
				className="rounded-md w-full h-40 object-cover hover:scale-105 transition duration-300"
			/>
			<p className="mt-2 text-sm text-white">{video.title}</p>
		</div>
	);
}
