export default class Reactive {
  private watchers: Set<Function> = new Set();

  private notifyWatchers(oldVal: any, newVal: any) {
    this.watchers.forEach((watcher) => {
      watcher(oldVal, newVal);
    });
  };

  get(obj: { [key: string]: any }, prop: string, receiver: any) {
    return obj[prop];
  }

  set(obj: { [key: string]: any }, prop: string, value: any) {
    obj.handler.notifyWatchers(obj.value, value);
    obj[prop] = value;
    return true;
  }

  public addWatcher(f: Function) {
    this.watchers.add(f);
  }
}
