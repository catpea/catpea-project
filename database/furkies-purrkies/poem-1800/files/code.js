// NOTE: There is no reason why you shoudn't use this code in producion right now.
class Observable {
  subscribers = [];
  subscribe(subscriber) { this.subscribers.push(subscriber); return ()=>this.unsubscribe(subscriber); }
  unsubscribe(subscriber) { this.subscribers = this.subscribers.filter(o => o !== subscriber); }
  notify(v) { this.subscribers.forEach(subscriber => subscriber(v)); }
}
// Example
const observable = new Observable();
observable.subscribe(data => console.log('received:', data));
observable.notify('Hello Observers!');

//////////////////
class Signal {
  data = null;
  subscribers = [];
  constructor(value) { this.data = value; }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
    if (this.data !== undefined||this.data !== null) subscriber(this.data); // notify only if non empty
    return ()=>this.unsubscribe(subscriber);
  }
  unsubscribe(subscriber) { this.subscribers = this.subscribers.filter(o => o !== subscriber); }
  notify() { this.subscribers.forEach((subscriber) => subscriber(this.data)); }
  set value(v) {
    if (this.data == v) return; // will do nothing on same value
    this.data = v;
    this.notify();
  }
  get value() {
    return this.data;
  }
}
// Example
const signal = new Signal('Meow!');
signal.subscribe(data => console.log('received:', data));
signal.value = 'Kss kss';

//////////////////
class ObservableWhipflash {
  constructor(subscribeFn) { this.subscribeFn = subscribeFn; }
  subscribe(observer) { return this.subscribeFn(observer); }
  pipe(...operators) { return operators.reduce((acc, operator) => operator(acc), this); }
  static of(...values) { return new ObservableWhipflash(subscriber => { values.forEach(value => subscriber.next(value)); subscriber.complete(); }); }
}
// Example
const observable = ObservableWhipflash.of(1, 2, 3);
observable.subscribe({
  next(value) { console.log(value); },
  complete() { console.log('Completed'); }
});
