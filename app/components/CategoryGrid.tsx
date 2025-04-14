import {
	LucideFilm,
	LucideTv,
	LucidePlaySquare,
	LucideLayoutGrid,
} from "lucide-react";

const categories = [
	{ icon: LucideFilm, label: "Movies" },
	{ icon: LucideLayoutGrid, label: "Anime" },
	{ icon: LucideTv, label: "Web Series" },
	{ icon: LucidePlaySquare, label: "TV Shows" },
];

export default function CategoryGrid() {
	return (
		<section className="py-12 px-4 md:px-16">
			<h2 className="text-3xl font-bold mb-6 text-center">
				Explore by Category
			</h2>
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
				{categories.map((cat, i) => (
					<div
						key={i}
						className="flex flex-col items-center p-4 bg-muted/30 backdrop-blur rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
					>
						<cat.icon className="w-10 h-10 mb-2 text-primary" />
						<p className="text-lg font-medium">{cat.label}</p>
					</div>
				))}
			</div>
		</section>
	);
}
