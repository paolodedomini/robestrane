function capitalizeFirstLetter(string: string | null) {
    if (string === null) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export { capitalizeFirstLetter, randomNumber };