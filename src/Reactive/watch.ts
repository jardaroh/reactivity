import Reactive from "./Reactive";

export default (proxy: any, callback: Function) => {
  proxy.handler.addWatcher(callback);
};
