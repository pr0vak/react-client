type UnauthorizedHandler = () => void;

let handler: UnauthorizedHandler = () => {};

export function setUnauthorizedHandler(fn: UnauthorizedHandler): void {
  handler = fn;
}

export function handleUnauthorized(): void {
  handler();
}
