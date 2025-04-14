"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthCallback() {
	const router = useRouter();

	useEffect(() => {
		const handleOAuthRedirect = async () => {
			const { error } = await supabase.auth.getSession();
			if (error) {
				console.error("OAuth callback error:", error.message);
				return;
			}

			// You could fetch profile here if needed...

			router.replace("/dashboard");
		};

		handleOAuthRedirect();
	}, []);

	return <p className="text-white text-center mt-20">Redirecting...</p>;
}
