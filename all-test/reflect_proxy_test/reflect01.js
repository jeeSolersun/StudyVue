var obj = {
  name: 'hanson'
};
var obj2 = {
  age: 27
};
// var s = Reflect.set(obj, 'age', 26, obj2);
var s = Reflect.set(obj, 'age', 26, obj2);
//console.log(s, obj, obj2);
var s2 = Reflect.get(obj, 'age', obj2);
console.log(s, s2, obj, obj2);
