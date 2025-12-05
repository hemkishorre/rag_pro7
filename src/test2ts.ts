// utils.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function mul(a: number, b: number): number {
  let res = 0;
  for (let i = 0; i < b; i++) {
    res += a;
  }
  return res;
}
