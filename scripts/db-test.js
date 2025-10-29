#!/usr/bin/env node

// Leverage Next.js env loader so the script behaves like the app
const { loadEnvConfig } = require("@next/env");
const mongoose = require("mongoose");

loadEnvConfig(process.cwd());

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
	console.error("MONGODB_URI must be set in your environment or .env file");
	process.exit(1);
}

async function testConnection() {
	try {
		await mongoose.connect(mongoUri, { bufferCommands: false });
		console.log("✅ MongoDB connection established successfully.");
	} catch (error) {
		console.error("❌ MongoDB connection failed.");
		console.error(error);
		process.exitCode = 1;
	} finally {
		await mongoose.disconnect().catch(() => {
			console.warn(
				"Warning: failed to close MongoDB connection cleanly."
			);
		});
	}
}

testConnection();
