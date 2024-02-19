computed和lwatch之问的区别：
  1.computed能完成的功能，watch都可以完成。
  2.watch能完成的功能，computed不一定能完成。例如：watch可以进行异步採作。
两个重要的小原则：
  1.所有被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象。
  2.所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等），最好写成箭头函数，这样this的指向才是vm 或 组什实例对象。