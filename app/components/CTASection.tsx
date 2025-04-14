import { Button } from "@/components/ui/button";

export default function CTASection() {
	return (
		<section className="py-20 px-4 text-center text-white">
			<h2 className="text-4xl font-bold mb-4">Start Streaming Now</h2>
			<p className="text-lg mb-6">
				Join us and get unlimited access to your favorite content.
			</p>
			<Button
				variant="secondary"
				size="lg"
				className="text-black font-semibold bg-white hover:bg-gray-200 transition"
			>
				Get Started for Free
			</Button>
		</section>
	);
}
