"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

type Props = {
	src: string;
};

export default function CustomVideoPlayer({ src }: Props) {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (videoRef.current) {
			if (Hls.isSupported()) {
				const hls = new Hls();
				hls.loadSource(src);
				hls.attachMedia(videoRef.current);
			} else if (
				videoRef.current.canPlayType("application/vnd.apple.mpegurl")
			) {
				// Fallback for Safari
				videoRef.current.src = src;
			}
		}
	}, [src]);

	return (
		<video
			ref={videoRef}
			controls
			autoPlay
			className="w-full h-full rounded-xl bg-black"
		/>
	);
}
