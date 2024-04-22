import{_ as n,o as s,c as a,e as t}from"./app-B50tPwy8.js";const p={},o=t(`<h2 id="括号匹配-匹配一个字符串是否括号匹配-a-b-c-d" tabindex="-1"><a class="header-anchor" href="#括号匹配-匹配一个字符串是否括号匹配-a-b-c-d" aria-hidden="true">#</a> 括号匹配，匹配一个字符串是否括号匹配{a{b[c]d}()}</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">match</span><span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> stack<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> leftSymbols <span class="token operator">=</span> <span class="token string">&quot;([{&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> rightSymbols <span class="token operator">=</span> <span class="token string">&quot;)]}&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> tem <span class="token operator">=</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>leftSymbols<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>tem<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 压栈</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>rightSymbols<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>tem<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 判断栈顶</span>
      <span class="token keyword">let</span> top <span class="token operator">=</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        <span class="token punctuation">(</span>tem <span class="token operator">===</span> <span class="token string">&quot;)&quot;</span> <span class="token operator">&amp;&amp;</span> top <span class="token operator">===</span> <span class="token string">&quot;(&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span>
        <span class="token punctuation">(</span>tem <span class="token operator">===</span> <span class="token string">&quot;]&quot;</span> <span class="token operator">&amp;&amp;</span> top <span class="token operator">===</span> <span class="token string">&quot;[&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span>
        <span class="token punctuation">(</span>tem <span class="token operator">===</span> <span class="token string">&quot;}&quot;</span> <span class="token operator">&amp;&amp;</span> top <span class="token operator">===</span> <span class="token string">&quot;{&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;()2([4()[]3){}&#39;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">match</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p>`,3),e=[o];function c(l,i){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","match_bracket.html.vue"]]);export{k as default};