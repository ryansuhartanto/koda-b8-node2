import moment from "moment";

/**
 * Formats date from `DD-MM-YYYY` to `DD/MM/YYYY`
 * @param {string} date A strict formatted `DD-MM-YYYY`
 * @returns {string} A formatted `DD/MM/YYYY`
 * @throws When `date` parameter is not correctly formatted
 */
export function processDate(date) {
	date = moment(date, "DD-MM-YYYY", true);

	if (!date.isValid()) {
		throw new Error("Format tanggal salah");
	}

	return date.format("DD/MM/YYYY");
}
