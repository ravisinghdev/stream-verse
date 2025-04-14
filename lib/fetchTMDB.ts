export async function fetchTMDB(type: "movie" | "tv") {
	const res = await fetch(
		`https://api.themoviedb.org/3/${type}/popular?api_key=${process.env
			.NEXT_PUBLIC_TMDB_API_KEY!}&language=en-US&page=1`
	);
	const data = await res.json();
	return data.results.map((item: any) => ({
		id: item.id,
		title: item.title || item.name,
		image: item.poster_path
			? `https://image.tmdb.org/t/p/w500${item.poster_path}`
			: "",
		rating: item.vote_average,
		year: (item.release_date || item.first_air_date || "").slice(0, 4),
		type: type === "movie" ? "Movie" : "Web Series",
		description: item.overview,
	}));
}
