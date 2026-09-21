type TokenGetter = () => string | null;

let getter: TokenGetter = () => null;

export function setTokenGetter(fn: TokenGetter): void {
  getter = fn;
}

export function getAuthToken(): TokenGetter {
  return getter;
}
