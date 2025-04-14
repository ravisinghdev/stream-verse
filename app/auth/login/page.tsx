"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";
import { AuthForm } from "@/components/auth/AuthForm";

export default function SignInPage() {
	const { user, loading } = useAuth();
	const router = useRouter();

	// Guest-only redirect
	useEffect(() => {
		if (!loading && user) {
			router.push("/dashboard");
		}
	}, [user, loading]);

	if (loading) return <div>Loading...</div>;
	return (
		<div className="flex justify-center items-center min-h-screen">
			<AuthForm type="signin" />
		</div>
	);
}
