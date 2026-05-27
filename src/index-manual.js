import readline from "node:readline/promises";
import { styleText } from "node:util";

import { processDate } from "./utils-manual.js";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

console.log(styleText(["bold"], "convert tanggal"));

while (true) {
	try {
		const date = await rl.question("Input (DD-MM-YYYY): ");
		console.log(processDate(date));

		rl.close();
		break;
	} catch (error) {
		console.error(error.message);
	}
}
