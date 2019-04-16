
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
