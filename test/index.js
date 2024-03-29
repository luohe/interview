async function testSometing() {
  console.log("执行testSometing");
  return "testSometing";
}

async function testAsync() {
  console.log("执行testAsync");
  return Promise.resolve("hello async");
}

async function test() {
  console.log("test start...");
  const v1 = await testSometing();
  console.log(v1);
  const v2 = await testAsync();
  console.log(v2);
  console.log(v1, v2);
}

test();

var promise = new Promise((resolve, reject) => {
  console.log("promise start...");
  reject("promise");
});
promise.then(val => console.log(val)).catch(val => console.log(val)).then(val => console.log(val));

console.log("test end...");