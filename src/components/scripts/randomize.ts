export function randomize(length: number, max: number) {
    return [...new Array(length)].map(() => Math.round(Math.random() * max));
}