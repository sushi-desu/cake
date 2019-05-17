
export const empty = (target: HTMLElement): void => {
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
}

export const zip = (f, xs, ys) =>
  (xs.length > ys.length)
    ? xs.map((x, i) => f(x, ys[i]))
    : ys.map((y, i) => f(xs[i], y));

export const uniqueId = (): string => {
  return Math.random().toString(34).slice(2);
}

export const isJancode = (jan: string): boolean => {
  if (jan.length !== 13) {return false}

  const digits = jan.split('').map(n => parseInt(n))
  if (digits.some(n => isNaN(n))) {return false}

  const odd = digits.filter( (_,i) => i % 2 === 1 )
  const even = digits.filter( (_,i) => i !== 12 && i % 2 === 0 )

  let total = 0;
  for (let i = 0; i < 6; i++) {
    total += (even[i] + odd[i] * 3)
  }

  const res = total % 10
  const checkd = digits[12]
  return res === 0 ? 0 === checkd : 10-res === checkd
}
