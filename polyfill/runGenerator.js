function runGenerator(generatorFn){
  return function(){
    return new Promise((resolve, reject) => {
      let g = generatorFn.call(this, ...arguments)
      function walk(data){
        let result = g.next(data);
        if(result.done){
          // 如果执行完毕，则返回
          return resolve(result.value)
        } else {
          return Promise.resolve(result.value).then(data => {
            walk(data)
          })
        }
      }
      walk()
    })
  }
}