import moment from "moment";
import readline from "node:readline/promises";
import { styleText } from "node:util";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

/**
 * Formats date from `DD-MM-YYYY` to `DD/MM/YYYY`
 * @param {string} date A strict formatted `DD-MM-YYYY`
 * @returns {string} A formatted `DD/MM/YYYY`
 * @throws When `date` parameter is not correctly formatted
 */
function processDate(date) {
	date = moment(date, "DD-MM-YYYY", true);

	if (!date.isValid()) {
		throw new Error("Format tanggal salah");
	}

	return date.format("DD/MM/YYYY");
}

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
