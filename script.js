function minToHouers(minutes) {
    if (minutes) {
        return "Введіть будь ласка число";
    }

    if (minutes > 6000) {
        return "Введіть менше 6000 хвилин";
    }

    const hours = parseInt(minutes / 60);
    const remMinutes = minutes % 60;

    return `${hours} годин ${remMinutes} хвилин`;
}

const inputMinutes = prompt("Введіть кількість хвилин:");
const parMinutes = parseInt(inputMinutes);  

console.log(minToHouers(parMinutes));
