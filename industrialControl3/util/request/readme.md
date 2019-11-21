**插件使用说明**

- 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
- 支持全局挂载
- 支持多个全局配置实例
- 支持` typescript `、` javascript ` 版本(如果不使用ts版本，则可以把luch-request-ts 文件夹删除)
- 下载后把 http-request 文件夹放到项目 utils/ 目录下


**Example**
---
创建实例  

``` javascript 
const http = new Request();
```

执行` GET `请求

``` javascript 
http.get('/user/login', {userName: 'name', password: '123456'}).then(res => {

}).catch(err => {

})
// 局部修改配置，局部配置优先级高于全局配置
http.get('/user/login', {userName: 'name', password: '123456'}, {
    header: {}, /* 会覆盖全局header */
    dataType: 'json',
    responseType: 'text'
}).then(res => {

}).catch(err => {

})
```
执行` POST `请求

``` javascript 
http.post('/user/login', {userName: 'name', password: '123456'} ).then(res => {

}).catch(err => {

})
// 局部修改配置，局部配置优先级高于全局配置
http.post('/user/login', {userName: 'name', password: '123456'}, {
    header: {}, /* 会覆盖全局header */
    dataType: 'json',
    responseType: 'text'
}).then(res => {

}).catch(err => {

})
```

**luch-request API**
--
``` javascript 
http.request({
     method: 'POST', // 请求方法必须大写
     url: '/user/12345',
     data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
     }
})
```


请求方法别名 / 实例方法

``` javascript
http.request(config)
http.get(url[, data[, config]])
http.delete(url[, data[, config]])
http.head(url[, data[, config]])
http.post(url[, data[, config]])
http.put(url[, data[, config]])
http.connect(url[, data[, config]])
http.options(url[, data[, config]])
http.trace(url[, data[, config]])
```

**全局请求配置**
--
``` javascript
{
    baseUrl: '', /* 全局根路径，需要注意，如果请求的路径为绝对路径，则不会应用baseUrl */
    header: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    method: 'GET',
    dataType: 'json',
    responseType: 'text'
}
```


全局配置修改` setConfig `

``` javascript
/**
     * @description 修改全局默认配置
     * @param {Function}   
*/
http.setConfig((config) => { /* config 为默认全局配置*/
    config.baseUrl = 'http://www.bbb.cn'; /* 根域名 */
    config.header = {
        a: 1,
        b: 2
    }
    return config
})
```

**拦截器**
--

在请求之前拦截

``` javascript
/**
 * @param { Function} cancel - 取消请求,调用cancel 会取消本次请求，但是该函数的catch() 仍会执行; 不会进入响应拦截器
 *
 * @param {String} text ['handle cancel'| any] - catch((err) => {}) err.errMsg === 'handle cancel'。非必传，默认'handle cancel'
 * @cancel {Object} config - catch((err) => {}) err.config === config; 非必传，默认为request拦截器修改之前的config
 * function cancel(text, config) {}
 */
http.interceptor.request((config, cancel) => { /* cancel 为函数，如果调用会取消本次请求。需要注意：调用cancel,本次请求的catch仍会执行。必须return config */
    config.header = {
        ...config.header,
        a: 1
    }
    /*
    if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
        cancel('token 不存在', config) //  把修改后的config传入，之后响应就可以拿到修改后的config。 如果调用了cancel但是不传修改后的config，则catch((err) => {}) err.config 为request拦截器修改之前的config
    }
    */
    return config;
})
```

在请求之后拦截

``` javascript
http.interceptor.response((response) => { /* 对响应成功做点什么 （statusCode === 200），必须return response*/
    console.log(response);
    return response;
}, (response) => { /*  对响应错误做点什么 （statusCode !== 200），必须return response*/
       console.log(response);
       return response;
})
```

**typescript使用**
--
在` request.ts `里还暴露了五个接口
```javascript
{
    options, // request 方法配置参数
    handleOptions, // get/post 方法配置参数
    config, // init 全局config接口(setConfig 参数接口)
    requestConfig, // 请求之前参数配置项
    response // 响应体
}
```

**常见问题**
--
-为什么会请求两次？<br>
总有些小白问这些很那啥的问题，有两种可能，一种是‘post三次握手’(不知道的请先给个五星好评，然后打自己一巴掌，并问自己，为什么这都不知道)，还有一种可能是`本地访问接口时跨域请求，所以浏览器会先发一个option 去预测能否成功，然后再发一个真正的请求`（没有自己观察请求头，Request Method，就跑来问的，请再打自己一巴掌，并问自己，为什么这都不知道，不知道也行，为什么不百度）。


**issue**
--
有任何问题或者建议可以=> <a href="https://ask.dcloud.net.cn/question/74922" target="_blank">issue提交</a>,先给个五星好评QAQ!!


**作者想说**
--
- 主体代码3kb
- 目前该插件已经上项目，遇到任何问题请先检查自己的代码（排除新版本发布的情况）。最近新上了` typescript ` 版本，因为本人没使用过ts,所以写的不好的地方，还请见谅~
- 写代码很容易，为了让你们看懂写文档真的很lei 0.0
- 最近发现有插件与我雷同，当初接触uni-app 就发现插件市场虽然有封装的不错的request库，但是都没有对多全局配置做处理，都是通过修改源码的方式配置。我首先推出通过class类，并仿照axios的api实现request请求库，并起名‘仿axios封装request网络请求库，支持拦截器全局配置’。他们虽然修改了部分代码，但是功能与性能并没有优化，反而使代码很冗余。希望能推出新的功能，和性能更加强悍的请求库。
####创作不易，五星好评你懂得！
