;(function anonymous(window) {
  /**
   * JSONP 方法
   * url 请求的接口地址
   * options 配置项
   *    jsonp: 'callback'（默认值）
   *    jsonpCallback: 随机生成的全局函数/自定义全局函数名
   *    timeout: 3000（默认值）
   */
  let jsonp = function (url, options = {}) {
    // 返回 Promise
    return new Promise((resolve, reject) => {
      // 验证参数合法性
      if (typeof url === 'undefined') {
        reject('url必须传递！')
        return
      }
      // 发送 jsonp 请求
      let SCRIPT = document.createElement('script'),
          CALL_BACK = options.jsonp || 'callback',
          FN_NAME = options.jsonpCallback || `JSONP${new Date().getTime()}`,
          TIMEOUT = options.jsonp || '3000'
          DELAY_TIMER = null

      SCRIPT.src = `${url}${url.indexOf('?') >= 0 ? '&' : '?'}${CALL_BACK}=${FN_NAME}&_${new Date().getTime()}`
      document.body.appendChild(SCRIPT)

      // 发送请求后立即监听响应时间，如果超过响应时间还没有执行全局函数，则认为是失败的请求，反之认为是成功的请求
      DELAY_TIMER = setTimeout(() => {
        clearTimeout(DELAY_TIMER)
        reject('jsonp请求失败！')
      }, TIMEOUT)

      // 成功或失败后执行的函数
      window[FN_NAME] = function (result) {
        document.body.removeChild(SCRIPT)
        window[FN_NAME] = null
        clearTimeout(DELAY_TIMER)
        resolve(result)
      }
    })
  }
  if (typeof module !== 'undefined' && module.exports !== 'undefined') {
    module.exports = {
      jsonp
    }
  }
  window.jsonp = jsonp

})(typeof window === 'undefined' ? global : window)
// 判断正在不同的环境下去，让 window 代表不同的全局对象，浏览器环境下就是 window，node 环境下执行代码就是 global