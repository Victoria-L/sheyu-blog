import{_ as i,o as e,c as l,e as t}from"./app-DMjJEOU4.js";const a="/image-20230308202952000.png",r="/image-20230308203629776.png",s="/image-20230308205237336.png",o="/image-20230308205759837.png",n="/image-20230308210958512.png",h={},p=t('<h2 id="http状态码" tabindex="-1"><a class="header-anchor" href="#http状态码" aria-hidden="true">#</a> http状态码</h2><ul><li><p>状态码分类</p><ul><li>1xx服务器收到请求</li><li>2xx请求成功</li><li>3xx重定向</li><li>4xx客户端错误</li><li>5xx服务端错误</li></ul></li><li><p>常见状态码</p><p>200、301永久重定向（浏览器会记住）、302临时重定向、304资源未被修改（本地有缓存）、404、403没有权限、500服务器错误、504网关超时</p></li><li><p>关于协议和规范</p><p>不要违反规范，如IE</p></li></ul><ul><li>301：如果你访问一个网站，但是发现网站已经搬家了，那么服务器会返回一个301状态码，告诉你现在的网址是什么，以后你就要访问这个新的网址了。</li><li>302：如果你访问一个网站，但是服务器发现你现在的浏览器不支持某些功能，就会给你跳转到一个备用页面，这时候服务器会返回一个302状态码。</li><li>304：如果你访问一个网站，但是服务器发现你的浏览器缓存里已经有了这个网页的内容，那么服务器就不会再重新发送一遍，而是直接从你的缓存里读取内容并返回给浏览器。</li></ul><p><strong>错误状态码：</strong></p><ol><li><strong>401 Unauthorized</strong>：表示请求需要用户身份验证，但用户未提供有效的身份验证凭据或凭据无效。客户端通常会显示一个登录提示，以便用户提供正确的凭据。</li><li><strong>403 Forbidden</strong>：表示服务器理解请求，但拒绝执行该请求。这可能是因为服务器已经理解请求，但不允许对请求的资源进行操作，或者是因为身份验证成功但权限不足。</li><li><strong>405 Method Not Allowed</strong>：表示请求中使用了不被允许的 HTTP 方法。服务器已经理解请求，但不支持请求中指定的方法。</li><li><strong>500 Internal Server Error</strong>：表示服务器在执行请求时遇到了内部错误。这可能是由于服务器出现了代码错误、配置问题或其他异常情况导致的。</li><li><strong>502 Bad Gateway</strong>：表示作为代理或网关的服务器从上游服务器接收到无效的响应。通常意味着上游服务器无法正常工作或返回了无效的响应。</li><li><strong>504 Gateway Timeout</strong>：表示作为代理或网关的服务器在等待上游服务器的响应时超时。通常意味着上游服务器无法及时响</li></ol><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> methods</h2><ul><li><p>传统的methods</p><ul><li>get获取数据</li><li>post提交数据</li></ul></li><li><p>现在的methods</p><ul><li>get获取数据</li><li>post新建数据</li><li>patch/put更新数据</li><li>delete删除数据</li></ul></li></ul><h2 id="restfulapi" tabindex="-1"><a class="header-anchor" href="#restfulapi" aria-hidden="true">#</a> RestfulAPI</h2><p>一种较 新的API设计方法</p><p>传统API设计：把每个url当作一个<strong>功能</strong>，如 GET /api/list?pageIndex=2、POST /api/update?id=100</p><p>RestfulAPI设计：把每个url当作一个<strong>唯一的资源</strong>，如 GET /api/list/2 、 PUT /api/list/2 使用同一个url，不同的method</p><ul><li>尽量不使用url参数</li><li>用methods表示操作类型</li></ul><p>​</p><h2 id="headers" tabindex="-1"><a class="header-anchor" href="#headers" aria-hidden="true">#</a> headers</h2><h3 id="常见的requst-headers" tabindex="-1"><a class="header-anchor" href="#常见的requst-headers" aria-hidden="true">#</a> 常见的Requst Headers</h3><ul><li>Accept 浏览器可接收的数据格式</li><li>Accept-Encoding 浏览器可接受的压缩算法，如gzip</li><li>Accept-Languange 浏览器可接收的语言，如zh-CN</li><li>Connection:keep-alive 一次TCP连接重复使用</li><li>cookie</li><li>Host 请求的域名</li><li>User-Agent（UA）浏览器信息</li><li>Content-type 发送数据的格式，如application/json</li></ul><h3 id="常见的response-headers" tabindex="-1"><a class="header-anchor" href="#常见的response-headers" aria-hidden="true">#</a> 常见的Response Headers</h3><ul><li>Content-type 返回数据的格式，如application/json</li><li>Content-length 返回数据的大小，多少字节</li><li>Content-Encoding 返回数据的压缩算法，如gzip</li><li>Set-Cookie 服务端改cookie</li></ul><h2 id="http缓存" tabindex="-1"><a class="header-anchor" href="#http缓存" aria-hidden="true">#</a> http缓存</h2><p>作用：减少网络请求，页面加载更快</p><p>可以缓存的资源：——静态资源（js css img）</p><h3 id="强制缓存" tabindex="-1"><a class="header-anchor" href="#强制缓存" aria-hidden="true">#</a> 强制缓存</h3><p><img src="'+a+'" alt="image-20230308202952000" style="zoom:40%;"><img src="'+r+'" alt="image-20230308203629776" style="zoom:40%;"></p><ul><li><p>Cache-Control</p><ul><li><p>Resonponse Headers中，控制强制缓存的逻辑，列如Cache-Control：max-age=31526000（秒）</p></li><li><p>值：max-age（缓存时间 ）/no-cache（不用强制缓存）/no-store（不让服务端做缓存）</p></li></ul></li><li><p>Expires，已经被Cache-Control</p></li></ul><h3 id="协商缓存-对比缓存" tabindex="-1"><a class="header-anchor" href="#协商缓存-对比缓存" aria-hidden="true">#</a> 协商缓存（对比缓存）</h3><ul><li>服务端缓存策略，服务端判断客户端能不能用缓存的内容</li><li>一致则返回304，否则返回200和最新资源</li><li><img src="'+s+'" alt="image-20230308205237336" style="zoom:50%;"></li><li>资源标识 <ul><li>Respons e Headers中，有两种：Last-Modified资源最后修改时间，Etag资源的唯一标识（优先使用）</li><li><img src="'+o+'" alt="image-20230308205759837" style="zoom:50%;"></li></ul></li></ul><img src="'+n+'" alt="image-20230308210958512" style="zoom:80%;"><h2 id="刷新操作" tabindex="-1"><a class="header-anchor" href="#刷新操作" aria-hidden="true">#</a> 刷新操作</h2><ul><li>正常操作：输入url，前进后退；强制缓存有效，协商缓存有效；</li><li>手动刷新：F5，点击刷新；强制缓存失效，协商缓存有效；</li><li>强制刷新：ctrl + F5；强制缓存失效，协商缓存失 效；</li></ul>',29),d=[p];function c(u,g){return e(),l("div",null,d)}const x=i(h,[["render",c],["__file","http.html.vue"]]);export{x as default};
