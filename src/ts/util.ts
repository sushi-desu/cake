
export const empty = (target: HTMLElement): void => {
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
}