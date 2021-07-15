function fetch(url) {
  return new Promise(function(resolve, reject) {
    const wait = Math.random() * 1000;
    setTimeout(() => {
      console.log("resolve" + url);
      resolve(url + "#" + wait);
    }, wait)
  })
}

// 1. 批量请求函数，最大并发数maxNum。
// 2. 每当有一个请求返回，就留下一个空位，可以增加新的请求。
// 2. 所有请求完成后，结果按照urls里面的顺序依次打出。
function multiRequest(urls, maxNum) {
  const resList = []; let index = 0, resCount = 0;

  return new Promise(function(resolve, reject) {
    const generatorReq = function(urlI) {
      fetch(urls[urlI]).then(res => {
        resCount++; resList[urlI] = res;
        if (resCount >= urls.length) resolve(resList);
        if (index < urls.length) generatorReq(index++);
      });
    }

    for (; index < maxNum && index < urls.length; index++) {
      generatorReq(index);
    }
  })
}