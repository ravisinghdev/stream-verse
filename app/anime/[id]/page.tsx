"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface AnimeDetail {
	id: string;
	title: string;
	image: string;
	episodes: number;
	description: string;
}

const AnimeDetailPage = () => {
	const params = useParams();
	const id = params?.id as string;

	const [anime, setAnime] = useState<AnimeDetail | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchAnime = async () => {
			try {
				setLoading(true);
				const res = await fetch(
					`https://anime-eta-two.vercel.app/anime/zoro/info?id=${id}`
				);
				const data = await res.json();
				setAnime(data);
			} catch (err) {
				console.error("Error fetching anime:", err);
			} finally {
				setLoading(false);
			}
		};

		if (id) fetchAnime();
	}, [id]);

	if (loading) return <p className="p-6">Loading anime details...</p>;

	if (!anime) return <p className="p-6 text-red-500">Anime not found</p>;

	return (
		<div className="p-6">
			<h1 className="text-3xl font-bold mb-4">{anime.title}</h1>
			<div className="flex gap-6">
				<Image
					src={anime.image}
					alt={anime.title}
					width={300}
					height={400}
					className="rounded-lg"
				/>
				<div>
					<p className="mb-4">{anime.description}</p>
					<h2 className="text-xl font-semibold mb-2">Episodes</h2>
					<ul className="grid grid-cols-4 gap-4">
						{Array.from({ length: anime.episodes }, (_, i) => (
							<li key={i}>
								<Link
									href={`/watch/${anime.id}-episode-${i + 1}`}
									className="bg-blue-600 text-white px-3 py-1 rounded"
								>
									Episode {i + 1}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AnimeDetailPage;
