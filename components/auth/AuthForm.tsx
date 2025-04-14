"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
	fullName: z.string().optional(),
	username: z.string().optional(),
});

type AuthFormProps = {
	type: "signin" | "signup";
};

export const AuthForm = ({ type }: AuthFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const onSubmit = async (values: z.infer<typeof schema>) => {
		setLoading(true);
		if (type === "signin") {
			const { error } = await supabase.auth.signInWithPassword({
				email: values.email,
				password: values.password,
			});
			if (error) toast.error(error.message);
			else {
				toast.success("Signed in successfully!");
				router.push("/");
			}
		} else {
			const { data, error } = await supabase.auth.signUp({
				email: values.email,
				password: values.password,
			});

			if (error) {
				toast.error(error.message);
			} else {
				const user = data.user;
				if (user) {
					await supabase.from("profiles").insert({
						id: user.id,
						full_name: values.fullName,
						username: values.username,
						email: values.email,
					});
				}
				toast.success("Check your email to confirm your account.");
				router.push("/auth/sign-in");
			}
		}
		setLoading(false);
	};

	const handleGoogleLogin = async () => {
		setLoading(true);
		const { error } = await supabase.auth.signInWithOAuth({
			provider: "google",
			options: {
				redirectTo: `${location.origin}/auth/callback`,
			},
		});

		if (error) toast.error(error.message);
		setLoading(false);
	};

	return (
		<div className="space-y-6 w-full max-w-md mx-auto">
			<h2 className="text-2xl font-semibold text-center">
				{type === "signin" ? "Sign In" : "Sign Up"}
			</h2>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				{type === "signup" && (
					<>
						<Input placeholder="Full Name" {...register("fullName")} />
						<Input placeholder="Username" {...register("username")} />
					</>
				)}

				<Input placeholder="Email" type="email" {...register("email")} />
				<Input
					placeholder="Password"
					type="password"
					{...register("password")}
				/>

				<Button type="submit" disabled={loading} className="w-full">
					{loading
						? "Please wait..."
						: type === "signin"
						? "Sign In"
						: "Sign Up"}
				</Button>
			</form>

			<div className="relative text-center py-3">
				<span className="text-sm text-muted-foreground">or continue with</span>
			</div>

			<Button
				variant="outline"
				className="w-full flex items-center justify-center gap-2"
				onClick={handleGoogleLogin}
				disabled={loading}
			>
				<FcGoogle size={20} />
				Continue with Google
			</Button>
		</div>
	);
};
