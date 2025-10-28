"use client";

import { CountrySelectField } from "@/components/forms/country-select-field";
import { FooterLink } from "@/components/forms/footer-link";
import { InputField } from "@/components/forms/input-field";
import { SelectField } from "@/components/forms/select-field";
import { Button } from "@/components/ui/button";
import {
	INVESTMENT_GOALS,
	PREFERRED_INDUSTRIES,
	RISK_TOLERANCE_OPTIONS,
} from "@/lib/constants";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
	} = useForm<SignUpFormData>({
		defaultValues: {
			fullName: "",
			email: "",
			password: "",
			country: "US",
			investmentGoals: "Growth",
			riskTolerance: "Medium",
			preferredIndustry: "Technology",
		},
		mode: "onBlur",
	});

	const onSubmit = async (data: SignUpFormData) => {
		try {
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<h1 className="form-title">Sign Up & Personalize</h1>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
				<InputField
					name="fullName"
					label="Full Name"
					placeholder="John Doe"
					register={register}
					error={errors.fullName}
					validation={{
						required: "Full Name is required",
						minLength: 2,
					}}
				/>

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

				<CountrySelectField
					name="country"
					label="Country"
					control={control}
					error={errors.country}
					required
				/>

				<SelectField
					name="investmentGoals"
					label="Investment goals"
					placeholder="Select your investment goals"
					options={INVESTMENT_GOALS}
					control={control}
					error={errors.investmentGoals}
					required
				/>

				<SelectField
					name="riskTolerance"
					label="Risk Tolerance"
					placeholder="Select your risk level"
					options={RISK_TOLERANCE_OPTIONS}
					control={control}
					error={errors.riskTolerance}
					required
				/>

				<SelectField
					name="preferredIndustry"
					label="Preferred Industry"
					placeholder="Select your preferred industry"
					options={PREFERRED_INDUSTRIES}
					control={control}
					error={errors.preferredIndustry}
					required
				/>

				<Button
					type="submit"
					disabled={isSubmitting}
					className="yellow-btn w-full mt-5"
				>
					{isSubmitting
						? "Creating an account"
						: "Start your investing journey"}
				</Button>

				<FooterLink
					text={"Already have an account?"}
					linkText="Sign In"
					href="/sign-in"
				/>
			</form>
		</>
	);
};

export default SignUpPage;
