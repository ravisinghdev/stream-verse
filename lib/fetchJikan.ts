export async function fetchAnime() {
	const res = await fetch("https://api.jikan.moe/v4/top/anime");
	const data = await res.json();
	return data.data.map((anime: any) => ({
		id: anime.mal_id,
		title: anime.title,
		image: anime.images.jpg.image_url,
		rating: anime.score || 0,
		year: anime.year || "N/A",
		type: "Anime",
		description: anime.synopsis || "No description.",
	}));
}
