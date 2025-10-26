import { Header } from "@/components/header";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="min-h-screen text-gray-400">
			<Header />
			<div className="container py-10">{children}</div>
		</main>
	);
};

export default RootLayout;
