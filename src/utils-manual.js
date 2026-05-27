/**
 * Formats date from `DD-MM-YYYY` to `DD/MM/YYYY`
 * @param {string} date A strict formatted `DD-MM-YYYY`
 * @returns {string} A formatted `DD/MM/YYYY`
 * @throws When `date` parameter is not correctly formatted
 */
export function processDate(date) {
	function throwDateFormatError() {
		throw new Error("Format tanggal salah");
	}

	date = date.trim().match(/^(\d{2})-(\d{2})-(\d{4})$/);

	if (!date) {
		throwDateFormatError();
	}

	let [, day, month, year] = date;
	day = parseInt(day, 10);
	month = parseInt(month, 10);
	year = parseInt(year, 10);

	date = new Date(year, month - 1, day);

	if (
		date.getFullYear() !== year ||
		date.getMonth() !== month - 1 ||
		date.getDate() !== day
	) {
		throwDateFormatError();
	}

	year = date.getFullYear().toString().padStart(4, "0");
	month = (date.getMonth() + 1).toString().padStart(2, "0");
	day = date.getDate().toString().padStart(2, "0");

	return `${day}/${month}/${year}`;
}
