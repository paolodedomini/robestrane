function capitalizeFirstLetter(string: string | null) {
    if (string === null) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export { capitalizeFirstLetter };