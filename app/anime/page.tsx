// app/anime/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AnimeSearchPage() {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);

	const handleSearch = async () => {
		if (!query) return;
		setLoading(true);
		const res = await fetch(
			`https://anime-eta-two.vercel.app/anime/zoro/${query}`
		);
		const data = await res.json();
		setResults(data.results || []);
		setLoading(false);
	};

	return (
		<main className="min-h-screen bg-black text-white px-4 py-8">
			<h1 className="text-4xl font-bold mb-4">Search Anime</h1>
			<div className="flex gap-2 mb-6">
				<input
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && handleSearch()}
					className="bg-zinc-800 text-white p-2 rounded w-full"
					placeholder="Search for an anime..."
				/>
				<button
					onClick={handleSearch}
					className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
				>
					Search
				</button>
			</div>

			{loading && <p className="text-zinc-400">Loading...</p>}

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
				{results.map((anime) => (
					<Link key={anime.id} href={`/anime/${anime.id}`}>
						<div className="bg-zinc-900 rounded shadow hover:scale-105 transition-transform">
							<Image
								src={anime.image}
								alt={anime.title}
								width={200}
								height={300}
								className="rounded-t w-full h-72 object-cover"
							/>
							<div className="p-2 text-sm text-center font-semibold">
								{anime.title.romaji || anime.title.english}
							</div>
						</div>
					</Link>
				))}
			</div>
		</main>
	);
}
