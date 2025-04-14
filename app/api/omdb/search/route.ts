import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const title = searchParams.get("title");

	const res = await fetch(
		`https://www.omdbapi.com/?s=${encodeURIComponent(title!)}&apikey=${
			process.env.OMDB_API_KEY
		}`
	);
	const data = await res.json();

	if (data.Response === "False") {
		return NextResponse.json([], { status: 200 });
	}

	return NextResponse.json(data.Search);
}
