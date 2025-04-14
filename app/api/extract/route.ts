import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const { embedUrl } = await req.json();

	if (!embedUrl) {
		return NextResponse.json({ error: "Missing embed URL" }, { status: 400 });
	}

	// 👇 For now just return the same URL for test purposes
	return NextResponse.json({ videoUrl: embedUrl });
}
