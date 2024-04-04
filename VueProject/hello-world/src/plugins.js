export default {
  install(Vue, x, y) {
    console.log('plugins install', x, y);
    // 1、过滤器
    Vue.filter('sliceStr', function(value) {
      return value.slice(0, 4);
    })
    // 2、自定义指令
    Vue.directive('inputfocus', {
      bind(el, binding) {
        let {value} = binding;
        el.value = value;
      },
      inserted(el, binding) {
        let {value} = binding;
        el.value = value;
        el.focus();
      },
      update(el, binding) {
        let {value} = binding;
        el.value = value;
      },
    })
    // 3、原型上添加属性和方法
    Vue.prototype.x = 99;
    Vue.prototype.x = function demo() {
      alert("demo");
    }
  }
}