"use client";

import { FooterLink } from "@/components/forms/footer-link";
import { InputField } from "@/components/forms/input-field";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const SignInPage = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
	} = useForm<SignInFormData>({
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onBlur",
	});

	const onSubmit = async (data: SignInFormData) => {
		try {
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<h1 className="form-title">Sign In</h1>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
				<InputField
					name="email"
					label="Email"
					placeholder="email@example.com"
					register={register}
					error={errors.email}
					type="email"
					validation={{
						required: "Email is required",
						minLength: 4,
						email: true,
						pattern: /^\w+@\w+\.\w+$/,
						message: "Email is required",
					}}
				/>

				<InputField
					name="password"
					label="Password"
					placeholder="Enter a strong password"
					register={register}
					error={errors.password}
					type="password"
					validation={{
						required: "Password is required",
						minLength: 8,
					}}
				/>

				<Button
					type="submit"
					disabled={isSubmitting}
					className="yellow-btn w-full mt-5"
				>
					{isSubmitting ? "Signing In" : "Sign In"}
				</Button>

				<FooterLink
					text={"Don't have an account?"}
					linkText="Sign Up"
					href="/sign-up"
				/>
			</form>
		</>
	);
};

export default SignInPage;
