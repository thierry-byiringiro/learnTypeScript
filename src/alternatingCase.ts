export function toAlternatingCase(s: string): string {
  return s.split("").map(el => el.toUpperCase() === el ? el.toLowerCase() : el.toUpperCase()).join("");
}