const fetch = (id) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(id + "的值");
  }, Math.Random() * 1000);
})

// 1. 批量请求函数，最大并发数maxNum。
// 2. 每当有一个请求返回，就留下一个空位，可以增加新的请求。
// 2. 所有请求完成后，结果按照urls里面的顺序依次打出。
function multiRequest(urls, maxNum) {
  var resList = [], index = 0, rescount;

  return new Promise(function(resolve, reject) {
    const generatorReq = function(i) {
      fetch(urls[i]).then(function(value) {
        resList[i] = value; rescount++;
        if (rescount >= urls.length) {
          resolve(resList); return;
        }
        if (index<urls.length) {
          generatorReq(index);
          index++;
        }
      })
    }

    for(;index < maxNum; index++) {
      if (index >= urls.length) break;
      generatorReq(index);
    }
  });
}

const urls = [
  'www.baidu.com?page=1',
  'www.baidu.com?page=2',
  'www.baidu.com?page=3',
  'www.baidu.com?page=4',
  'www.baidu.com?page=5',
  'www.baidu.com?page=6',
  'www.baidu.com?page=7',
  'www.baidu.com?page=8',
  'www.baidu.com?page=9',
  'www.baidu.com?page=10',
  'www.baidu.com?page=11'
];