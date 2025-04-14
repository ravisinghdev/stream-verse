export async function getTVDBToken() {
	const res = await fetch("https://api4.thetvdb.com/v4/login", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ apikey: process.env.THETVDB_API_KEY }),
	});

	const json = await res.json();

	if (!res.ok) {
		console.error("TVDB login failed:", json);
		throw new Error(json?.error || "Failed to authenticate with TheTVDB");
	}

	return json.data.token;
}

export async function getSeriesById(id: string, token: string) {
	const res = await fetch(`https://api4.thetvdb.com/v4/series/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return await res.json();
}

export async function getEpisodes(id: string, token: string) {
	const res = await fetch(
		`https://api4.thetvdb.com/v4/series/${id}/episodes/default?page=0`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	return await res.json();
}
