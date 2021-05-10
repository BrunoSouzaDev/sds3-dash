export const round = (value: number, precion: number) => {
    var multiplier = Math.pow(10, precion || 0);
    return Math.round(value * multiplier) / multiplier;
}