import { fetchTMDB } from "./fetchTMDB";
import { fetchAnime } from "./fetchJikan";

export async function getAllMedia() {
	const [movies, series, anime] = await Promise.all([
		fetchTMDB("movie"),
		fetchTMDB("tv"),
		fetchAnime(),
	]);

	return [...movies, ...series, ...anime];
}
