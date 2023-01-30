// simple angular decorator function
export function simpleDecorator(target: any) {
  console.log(target);
  Object.defineProperty(target.prototype, 'simple', {
    value: 'simple',
  });
}
