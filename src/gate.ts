// Solve all the typing issues in the code without changing the implementation
function format(value: string): string;
function format(value: number): string;
function format(value: boolean): string;
function format<T>(value: T): string {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value.toFixed(2);
  } else {
    return '';
  }
}

format(true);