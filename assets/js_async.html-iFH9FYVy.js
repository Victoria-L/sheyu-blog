import{_ as e,a as o}from"./eventloop_3-DeBpIweO.js";import{_ as t,o as c,c as s,e as a}from"./app-BeBJElNi.js";const r={},p=a('<h3 id="何为异步" tabindex="-1"><a class="header-anchor" href="#何为异步" aria-hidden="true">#</a> 何为异步？</h3><p>代码在执行过程中，会遇到一些无法立即处理的任务，比如：</p><ul><li>计时完成后需要执行的任务 —— <code>setTimeout</code>、<code>setInterval</code></li><li>网络通信完成后需要执行的任务 -- <code>XHR</code>、<code>Fetch</code></li><li>用户操作后需要执行的任务 -- <code>addEventListener</code></li></ul><p>如果让渲染主线程等待这些任务的时机达到，就会导致主线程长期处于「阻塞」的状态，从而导致浏览器「卡死」</p><p><img src="'+e+'" alt=""></p><p><strong>渲染主线程承担着极其重要的工作，无论如何都不能阻塞！</strong></p><p>因此，浏览器选择<strong>异步</strong>来解决这个问题 <img src="'+o+'" alt=""></p><h3 id="总结-讲出这段话-直接吓死面试官" tabindex="-1"><a class="header-anchor" href="#总结-讲出这段话-直接吓死面试官" aria-hidden="true">#</a> 总结，讲出这段话，直接吓死面试官</h3><blockquote><p>参考答案：</p></blockquote><blockquote><p>JS是一门单线程的语言，这是因为它运行在浏览器的渲染主线程中，而渲染主线程只有一个。</p><p>而渲染主线程承担着诸多的工作，渲染页面、执行 JS 都在其中运行。</p><p>如果使用同步的方式，就极有可能导致主线程产生阻塞，从而导致消息队列中的很多其他任务无法得到执行。这样一来，一方面会导致繁忙的主线程白白的消耗时间，另一方面导致页面无法及时更新，给用户造成卡死现象。</p><p>所以浏览器采用异步的方式来避免。具体做法是当某些任务发生时，比如计时器、网络、事件监听，主线程将任务交给其他线程去处理，自身立即结束任务的执行，转而执行后续代码。当其他线程完成时，将事先传递的回调函数包装成任务，加入到消息队列的末尾排队，等待主线程调度执行。</p><p>在这种异步模式下，浏览器永不阻塞，从而最大限度的保证了单线程的流畅运行。</p></blockquote><p>使用异步的方式，<strong>渲染主线程永不阻塞</strong></p>',11),n=[p];function d(i,l){return c(),s("div",null,n)}const u=t(r,[["render",d],["__file","js_async.html.vue"]]);export{u as default};
