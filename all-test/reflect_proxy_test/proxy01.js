var obj = {
  name: 'hanson'
};
var handler = {
  get(target, key, receiver){
    // console.log(this, receiver, this == receiver);
    console.log('get()');
    return 30;
  },
  set(target, key, value, receiver){
    // console.log(this, receiver, this == receiver);
    console.log('set()');
    target[key] = value;
  }
}
var proxy = new Proxy(obj, handler);
//console.log(obj, proxy);
//console.log(obj.age, proxy.age);
// console.log(proxy.age);
// console.log(obj, proxy);
// proxy.age = 26;
// obj.age = 28;
obj.age = 28;
console.log(proxy.age);
// console.log(obj, proxy, obj.age, proxy.age);