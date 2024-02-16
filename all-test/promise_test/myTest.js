/**
 * async function 测试
 */
function genPromise(){
  return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('get content success!');
      }, 2*1000);
  });
}
async function aa(){
  let a = await genPromise();
  console.log(a);
  return 'done';
}
let p = aa();
p.then(function(d){
  console.log(d);
})
.catch(function(err){
  console.log(err);
});