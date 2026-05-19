import readline from 'node:readline/promises';
import { styleText } from 'node:util';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processDate(date) {
    function throwDateFormatError() {
        throw new Error('Format tanggal salah');
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

    year = date.getFullYear().toString().padStart(4, '0');
    month = (date.getMonth() + 1).toString().padStart(2, '0');
    day = date.getDate().toString().padStart(2, '0');

    return `${day}/${month}/${year}`;
}


console.log(styleText(["bold"], 'convert tanggal'));


while (true) {
    try {
        const date = await rl.question('Input (DD-MM-YYYY): ');
        console.log(processDate(date));

        rl.close();
        break;
    } catch (error) {
        console.error(error.message)
    }
}
