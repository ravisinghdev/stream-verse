export default function Footer() {
	return (
		<footer className="bg-background border-t border-muted px-4 py-10">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<h3 className="text-xl font-semibold mb-2">Streaming App</h3>
					<p className="text-sm text-muted-foreground">
						Watch Movies, Anime & Series in one place.
					</p>
				</div>
				<div>
					<h4 className="text-lg font-semibold mb-2">Quick Links</h4>
					<ul className="space-y-1 text-muted-foreground text-sm">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Movies</a>
						</li>
						<li>
							<a href="#">Anime</a>
						</li>
						<li>
							<a href="#">Web Series</a>
						</li>
					</ul>
				</div>
				<div>
					<h4 className="text-lg font-semibold mb-2">Contact</h4>
					<p className="text-sm text-muted-foreground">
						Email: chauhanravisingh180@gmail.com
					</p>
					<p className="text-sm text-muted-foreground">Phone: +91-9506222179</p>
				</div>
			</div>
			<div className="text-center text-xs text-muted-foreground mt-8">
				&copy; {new Date().getFullYear()} Stream Verse. All rights reserved.
			</div>
		</footer>
	);
}
