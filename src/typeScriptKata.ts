export function invert(array: number[]): number[] {
   return array.length < 1 ? [] : array.map(el => el >= 0 ? -el : Math.abs(el));
}