import Reactive from './Reactive.js';

export default (value: any) => {
  const handler = new Reactive();
  return new Proxy({
    value,
    handler,
  }, {
    set: handler.set,
    get: handler.get,
  });
};
