/*! Image Refractor 0.1.0, (c) 2023 Marc Anton Dahmen, MIT license */(()=>{var t={908:(t,e,i)=>{var r;r="undefined"!=typeof window?window:void 0!==i.g?i.g:"undefined"!=typeof self?self:{},t.exports=r},376:t=>{t.exports=function(t){if(!t)return!1;var i=e.call(t);return"[object Function]"===i||"function"==typeof t&&"[object RegExp]"!==i||"undefined"!=typeof window&&(t===window.setTimeout||t===window.alert||t===window.confirm||t===window.prompt)};var e=Object.prototype.toString},947:t=>{var e=function(t){return t.replace(/^\s+|\s+$/g,"")};t.exports=function(t){if(!t)return{};for(var i,r={},s=e(t).split("\n"),n=0;n<s.length;n++){var a=s[n],o=a.indexOf(":"),h=e(a.slice(0,o)).toLowerCase(),l=e(a.slice(o+1));void 0===r[h]?r[h]=l:(i=r[h],"[object Array]"===Object.prototype.toString.call(i)?r[h].push(l):r[h]=[r[h],l])}return r}},875:(t,e,i)=>{"use strict";var r=i(908),s=i(376),n=i(947),a=i(529);function o(t,e,i){var r=t;return s(e)?(i=e,"string"==typeof t&&(r={uri:t})):r=a(e,{uri:t}),r.callback=i,r}function h(t,e,i){return l(e=o(t,e,i))}function l(t){if(void 0===t.callback)throw new Error("callback argument missing");var e=!1,i=function(i,r,s){e||(e=!0,t.callback(i,r,s))};function r(){var t=void 0;if(t=u.response?u.response:u.responseText||function(t){try{if("document"===t.responseType)return t.responseXML;var e=t.responseXML&&"parsererror"===t.responseXML.documentElement.nodeName;if(""===t.responseType&&!e)return t.responseXML}catch(t){}return null}(u),T)try{t=JSON.parse(t)}catch(t){}return t}function s(t){return clearTimeout(d),t instanceof Error||(t=new Error(""+(t||"Unknown XMLHttpRequest Error"))),t.statusCode=0,i(t,p)}function a(){if(!l){var e;clearTimeout(d),e=t.useXDR&&void 0===u.status?200:1223===u.status?204:u.status;var s=p,a=null;return 0!==e?(s={body:r(),statusCode:e,method:f,headers:{},url:g,rawRequest:u},u.getAllResponseHeaders&&(s.headers=n(u.getAllResponseHeaders()))):a=new Error("Internal XMLHttpRequest Error"),i(a,s,s.body)}}var o,l,u=t.xhr||null;u||(u=t.cors||t.useXDR?new h.XDomainRequest:new h.XMLHttpRequest);var d,g=u.url=t.uri||t.url,f=u.method=t.method||"GET",c=t.body||t.data,m=u.headers=t.headers||{},E=!!t.sync,T=!1,p={body:void 0,headers:{},statusCode:0,method:f,url:g,rawRequest:u};if("json"in t&&!1!==t.json&&(T=!0,m.accept||m.Accept||(m.Accept="application/json"),"GET"!==f&&"HEAD"!==f&&(m["content-type"]||m["Content-Type"]||(m["Content-Type"]="application/json"),c=JSON.stringify(!0===t.json?c:t.json))),u.onreadystatechange=function(){4===u.readyState&&setTimeout(a,0)},u.onload=a,u.onerror=s,u.onprogress=function(){},u.onabort=function(){l=!0},u.ontimeout=s,u.open(f,g,!E,t.username,t.password),E||(u.withCredentials=!!t.withCredentials),!E&&t.timeout>0&&(d=setTimeout((function(){if(!l){l=!0,u.abort("timeout");var t=new Error("XMLHttpRequest timeout");t.code="ETIMEDOUT",s(t)}}),t.timeout)),u.setRequestHeader)for(o in m)m.hasOwnProperty(o)&&u.setRequestHeader(o,m[o]);else if(t.headers&&!function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}(t.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in t&&(u.responseType=t.responseType),"beforeSend"in t&&"function"==typeof t.beforeSend&&t.beforeSend(u),u.send(c||null),u}t.exports=h,t.exports.default=h,h.XMLHttpRequest=r.XMLHttpRequest||function(){},h.XDomainRequest="withCredentials"in new h.XMLHttpRequest?h.XMLHttpRequest:r.XDomainRequest,function(t,e){for(var i=0;i<t.length;i++)e(t[i])}(["get","put","post","patch","head","delete"],(function(t){h["delete"===t?"del":t]=function(e,i,r){return(i=o(e,i,r)).method=t.toUpperCase(),l(i)}}))},529:t=>{t.exports=function(){for(var t={},i=0;i<arguments.length;i++){var r=arguments[i];for(var s in r)e.call(r,s)&&(t[s]=r[s])}return t};var e=Object.prototype.hasOwnProperty}},e={};function i(r){var s=e[r];if(void 0!==s)return s.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,i),n.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=i(875),e=i.n(t);let r="";function s(t,e,i){function r(e,r){"function"==typeof i?i(e):function(e){let i=t.parentNode;i&&(i.innerHTML='\n<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>\n<td align="center">\n<div style="display: table-cell; vertical-align: middle;">\n<div style="">'+e+"</div>\n</div>\n</td></tr></table>\n")}(r)}if(!window.WebGLRenderingContext)return r(1,'\n\tThis page requires a browser that supports WebGL.<br/>\n\t<a href="http://get.webgl.org">Click here to upgrade your browser.</a>\n'),null;let s=function(t,e){let i=["webgl","experimental-webgl"],r=null;for(var s=0;s<i.length;++s)try{r=t.getContext(i[s],e)}catch(t){if(r)break}return r}(t,e);return s?s.getExtension("OES_standard_derivatives"):r(2,'\n\tIt does not appear your computer can support WebGL.<br/>\n\t<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>\n'),s}function n(t,e,i,s){let n=t.gl,a=n.createShader(i);return n.shaderSource(a,e),n.compileShader(a),n.getShaderParameter(a,n.COMPILE_STATUS)?a:(r=n.getShaderInfoLog(a),console.error("*** Error compiling shader "+a+":"+r),t.trigger("error",{shader:a,source:e,type:i,error:r,offset:s||0}),n.deleteShader(a),null)}function a(t,e,i,s){let n=t.gl,a=n.createProgram();for(let t=0;t<e.length;++t)n.attachShader(a,e[t]);if(i)for(let t=0;t<i.length;++t)n.bindAttribLocation(a,s?s[t]:t,i[t]);return n.linkProgram(a),n.getProgramParameter(a,n.LINK_STATUS)?a:(r=n.getProgramInfoLog(a),console.log("Error in program linking:"+r),n.deleteProgram(a),null)}function o(t,e=null){let i=[];for(let r in t){let s,n=t[r];if(e&&(r=e+"."+r),"number"==typeof n)i.push({type:"float",method:"1f",name:r,value:n});else if(Array.isArray(n)){if("number"==typeof n[0])1===n.length?i.push({type:"float",method:"1f",name:r,value:n}):n.length>=2&&n.length<=4?i.push({type:"vec"+n.length,method:n.length+"fv",name:r,value:n}):n.length>4&&i.push({type:"float[]",method:"1fv",name:r+"[0]",value:n});else if("string"==typeof n[0])i.push({type:"sampler2D",method:"1i",name:r,value:n});else if(Array.isArray(n[0])&&"number"==typeof n[0][0]){if(n[0].length>=2&&n[0].length<=4)for(s=0;s<n.length;s++)i.push({type:"vec"+n[0].length,method:n[s].length+"fv",name:r+"["+s+"]",value:n[s]})}else if("object"==typeof n[0])for(s=0;s<n.length;s++)i.push(...o(n[s],r+"["+s+"]"))}else"boolean"==typeof n?i.push({type:"bool",method:"1i",name:r,value:n}):"string"==typeof n?i.push({type:"sampler2D",method:"1i",name:r,value:n}):"object"==typeof n&&i.push(...o(n,r))}return i}function h(t){return 0==(t&t-1)}function l(t){var e=new Set;return Object.assign(t,{on(t,i){let r={};r[t]=i,e.add(r)},off(t,i){if(i){let r={};r[t]=i,e.delete(r)}else for(let i of e)for(let r of Object.keys(i))if(r===t)return void e.delete(i)},listSubscriptions(){for(let t of e)console.log(t)},subscribe(t){e.add(t)},unsubscribe(t){e.delete(t)},unsubscribeAll(){e.clear()},trigger(t,...i){for(var r of e)"function"==typeof r[t]&&r[t](...i)}})}class u{constructor(t,e,i={}){l(this),this.gl=t,this.texture=t.createTexture(),this.texture&&(this.valid=!0),this.bind(),this.name=e,this.source=null,this.sourceType=null,this.loading=null,this.setData(1,1,new Uint8Array([0,0,0,255]),{filtering:"linear"}),this.setFiltering(i.filtering),this.load(i)}destroy(){this.valid&&(this.gl.deleteTexture(this.texture),this.texture=null,delete this.data,this.data=null,this.valid=!1)}bind(t){this.valid&&("number"==typeof t&&u.activeUnit!==t&&(this.gl.activeTexture(this.gl.TEXTURE0+t),u.activeUnit=t),u.activeTexture!==this.texture&&(this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),u.activeTexture=this.texture))}load(t={}){this.loading=null,"string"==typeof t.url?void 0!==this.url&&t.url===this.url||this.setUrl(t.url,t):t.element?this.setElement(t.element,t):t.data&&t.width&&t.height&&this.setData(t.width,t.height,t.data,t)}setUrl(t,e={}){if(this.valid)return this.url=t,this.source=this.url,this.sourceType="url",this.loading=new Promise(((i,r)=>{let s,n=t.split(".").pop().toLowerCase(),a="ogv"===n||"webm"===n||"mp4"===n;a?(s=document.createElement("video"),s.autoplay=!0,s.muted=!0,setTimeout((function(){s.play()}),1),e.filtering="nearest"):s=new Image,s.onload=()=>{try{this.setElement(s,e)}catch(t){console.log(`Texture '${this.name}': failed to load url: '${this.source}'`,t,e)}i(this)},s.onerror=t=>{console.log(`Texture '${this.name}': failed to load url: '${this.source}'`,t,e),i(this)},/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&"data:"===this.source.slice(0,5)||(s.crossOrigin="anonymous"),s.src=this.source,a&&this.setElement(s,e)})),this.loading}setData(t,e,i,r={}){return this.width=t,this.height=e,this.source=i,this.sourceType="data",this.update(r),this.setFiltering(r),this.loading=Promise.resolve(this),this.loading}setElement(t,e){let i=t;if("string"==typeof t&&(t=document.querySelector(t)),t instanceof HTMLCanvasElement||t instanceof HTMLImageElement||t instanceof HTMLVideoElement)this.source=t,this.sourceType="element",t instanceof HTMLVideoElement?(this.width=this.source.videoWidth,this.height=this.source.videoHeight,t.addEventListener("canplaythrough",(()=>{this.intervalID=setInterval((()=>{this.update(e)}),15)}),!0),t.addEventListener("ended",(()=>{t.currentTime=0,t.play()}),!0)):this.update(e),this.setFiltering(e);else{let t=`the 'element' parameter (\`element: ${JSON.stringify(i)}\`) must be a CSS `;t+="selector string, or a <canvas>, <image> or <video> object",console.log(`Texture '${this.name}': ${t}`,e)}return this.loading=Promise.resolve(this),this.loading}update(t={}){this.valid&&(this.bind(),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1!==t.UNPACK_FLIP_Y_WEBGL),this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.UNPACK_PREMULTIPLY_ALPHA_WEBGL||!1),"element"===this.sourceType&&(this.source instanceof HTMLCanvasElement||this.source instanceof HTMLVideoElement||this.source instanceof HTMLImageElement&&this.source.complete)?(this.source instanceof HTMLVideoElement?(this.width=this.source.videoWidth,this.height=this.source.videoHeight):(this.width=this.source.width,this.height=this.source.height),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,this.source)):"data"===this.sourceType&&this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.width,this.height,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,this.source),this.trigger("loaded",this))}setFiltering(t={}){if(this.valid){this.powerOf2=h(this.width)&&h(this.height),this.filtering=t.filtering||"linear";var e=this.gl;this.bind(),this.powerOf2?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.TEXTURE_WRAP_S||e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.TEXTURE_WRAP_T||e.REPEAT),"mipmap"===this.filtering?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.generateMipmap(e.TEXTURE_2D)):"linear"===this.filtering?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR)):"nearest"===this.filtering&&(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST))):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),"mipmap"===this.filtering&&(this.filtering="linear"),"nearest"===this.filtering?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST)):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR)))}}}u.getMaxTextureSize=function(t){return t.getParameter(t.MAX_TEXTURE_SIZE)},u.activeUnit=-1;class d{constructor(t,i,r){l(this),i=i||{},r=r||{},!t.hasAttribute("data-fullscreen")||"1"!=t.getAttribute("data-fullscreen")&&"true"!=t.getAttribute("data-fullscreen")?(this.width=t.clientWidth,this.height=t.clientHeight):(this.width=window.innerWidth,this.height=window.innerHeight,t.width=window.innerWidth,t.height=window.innerHeight),this.canvas=t,this.gl=void 0,this.deps={},this.program=void 0,this.textures={},this.buffers={},this.uniforms={},this.vbo={},this.isValid=!1,this.animationFrameRequest=void 0,this.BUFFER_COUNT=0,this.vertexString=i.vertexString||"\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nattribute vec2 a_position;\nattribute vec2 a_texcoord;\n\nvarying vec2 v_texcoord;\n\nvoid main() {\n    gl_Position = vec4(a_position, 0.0, 1.0);\n    v_texcoord = a_texcoord;\n}\n",this.fragmentString=i.fragmentString||"\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nvarying vec2 v_texcoord;\n\nvoid main(){\n    gl_FragColor = vec4(0.0);\n}\n";let n=s(t,i,r.onError);if(!n)return;if(this.gl=n,this.timeLoad=this.timePrev=performance.now(),this.timeDelta=0,this.forceRender=!0,this.paused=!1,this.realToCSSPixels=window.devicePixelRatio||1,t.style.backgroundColor=i.backgroundColor||"rgba(1,1,1,0)",t.hasAttribute("data-fragment"))this.fragmentString=t.getAttribute("data-fragment");else if(t.hasAttribute("data-fragment-url")){let i=t.getAttribute("data-fragment-url");e().get(i,((t,e,i)=>{this.load(i,this.vertexString)}))}if(t.hasAttribute("data-vertex"))this.vertexString=t.getAttribute("data-vertex");else if(t.hasAttribute("data-vertex-url")){let i=t.getAttribute("data-vertex-url");e().get(i,((t,e,i)=>{this.load(this.fragmentString,i)}))}if(this.load(),!this.program)return;let a=n.getAttribLocation(this.program,"a_texcoord");this.vbo.texCoords=n.createBuffer(),this.gl.bindBuffer(n.ARRAY_BUFFER,this.vbo.texCoords),this.gl.bufferData(n.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),n.STATIC_DRAW),this.gl.enableVertexAttribArray(a),this.gl.vertexAttribPointer(a,2,n.FLOAT,!1,0,0);let o=n.getAttribLocation(this.program,"a_position");if(this.vbo.vertices=n.createBuffer(),this.gl.bindBuffer(n.ARRAY_BUFFER,this.vbo.vertices),this.gl.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),n.STATIC_DRAW),this.gl.enableVertexAttribArray(o),this.gl.vertexAttribPointer(o,2,n.FLOAT,!1,0,0),t.hasAttribute("data-textures")){let e=t.getAttribute("data-textures").split(",");for(let t in e)this.setUniform("u_tex"+t,e[t])}let h={x:0,y:0};document.addEventListener("mousemove",(t=>{h.x=t.clientX||t.pageX,h.y=t.clientY||t.pageY}),!1);let u=this;return this.setMouse({x:0,y:0}),function t(){u.nMouse>1&&u.setMouse(h),u.resize()&&(u.forceRender=!0),u.render(),u.animationFrameRequest=window.requestAnimationFrame(t)}(),this}destroy(){cancelAnimationFrame(this.animationFrameRequest),this.animated=!1,this.isValid=!1;for(let t in this.textures)t.destroy&&t.destroy();this.textures={};for(let t in this.attribs)this.gl.deleteBuffer(this.attribs[t]);this.gl.useProgram(null),this.gl.deleteProgram(this.program);for(let t in this.buffers){const e=this.buffers[t];this.gl.deleteProgram(e.program)}this.program=null,this.gl=null}load(t,e){e&&(this.vertexString=e),t&&(this.fragmentString=t);let i=this.fragmentString.split(/\r?\n/);if(this.fragmentString="#define PLATFORM_WEBGL\n#line 0\n",i.forEach(((t,e)=>{let i=t.trim();if(i.startsWith('#include "lygia')){let t=i.substring(15).replace(/\'|\"|\;|\s/g,"");if(t.endsWith("glsl")){if(void 0===this.deps[t]){var r="https://lygia.xyz"+t;this.deps[t]=function(t){let e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(),200==e.status?e.responseText:""}(r)}this.fragmentString+=this.deps[t]+"\n#line "+(e+1)+"\n"}}else this.fragmentString+=t+"\n"})),this.animated=!1,this.nDelta=(this.fragmentString.match(/u_delta/g)||[]).length,this.nTime=(this.fragmentString.match(/u_time/g)||[]).length,this.nDate=(this.fragmentString.match(/u_date/g)||[]).length,this.nMouse=(this.fragmentString.match(/u_mouse/g)||[]).length,this.animated=this.nDate>1||this.nTime>1||this.nMouse>1,this.fragmentString.search(/sampler2D/g)){let t=this.fragmentString.split("\n");for(let e=0;e<t.length;e++){let i=t[e].match(/uniform\s*sampler2D\s*([\w]*);\s*\/\/\s*([\w|\:\/\/|\.|\-|\_]*)/i);if(i){let t=i[2].split(".").pop().toLowerCase();i[1]&&i[2]&&("jpg"===t||"jpeg"===t||"png"===t||"ogv"===t||"webm"===t||"mp4"===t)&&this.setUniform(i[1],i[2])}if(t[e].match(/\s*void\s*main\s*/g))break}}let r=n(this,this.vertexString,this.gl.VERTEX_SHADER),s=n(this,this.fragmentString,this.gl.FRAGMENT_SHADER);s?this.isValid=!0:(s=n(this,"void main(){\n\tgl_FragColor = vec4(1.0);\n}",this.gl.FRAGMENT_SHADER),this.isValid=!1);let o=a(this,[r,s]);this.gl.useProgram(o),this.gl.deleteShader(r),this.gl.deleteShader(s),this.program=o,this.change=!0,this.BUFFER_COUNT=0;const h=this.getBuffers(this.fragmentString);Object.keys(h).length&&this.loadPrograms(h),this.buffers=h,this.texureIndex=this.BUFFER_COUNT,this.trigger("load",{}),this.forceRender=!0,this.render()}test(t,e,i){let r=this.vertexString,s=this.fragmentString,n=this.paused,a=this.gl.getExtension("EXT_disjoint_timer_query"),o=a.createQueryEXT(),h=this.isValid;(e||i)&&(this.load(e,i),h=this.isValid,this.forceRender=!0,this.render()),this.paused=!0,a.beginQueryEXT(a.TIME_ELAPSED_EXT,o),this.forceRender=!0,this.render(),a.endQueryEXT(a.TIME_ELAPSED_EXT);let l=this;!function u(){l.forceRender=!0,l.render();let d=a.getQueryObjectEXT(o,a.QUERY_RESULT_AVAILABLE_EXT),g=l.gl.getParameter(a.GPU_DISJOINT_EXT);if(d&&!g){let u={wasValid:h,frag:e||l.fragmentString,vert:i||l.vertexString,timeElapsedMs:a.getQueryObjectEXT(o,a.QUERY_RESULT_EXT)/1e6};l.paused=n,(e||i)&&l.load(s,r),t(u)}else window.requestAnimationFrame(u)}()}loadTexture(t,e,i){i||(i={}),"string"==typeof e?i.url=e:"object"==typeof e&&e.data&&e.width&&e.height?(i.data=e.data,i.width=e.width,i.height=e.height):"object"==typeof e&&(i.element=e),this.textures[t]?this.textures[t]&&(this.textures[t].load(i),this.textures[t].on("loaded",(t=>{this.forceRender=!0}))):(this.textures[t]=new u(this.gl,t,i),this.textures[t].on("loaded",(t=>{this.forceRender=!0})))}refreshUniforms(){this.uniforms={}}setUniform(t,...e){let i={};i[t]=e,this.setUniforms(i)}setUniforms(t){let e=o(t);for(let t in e)"sampler2D"===e[t].type?this.loadTexture(e[t].name,e[t].value[0]):this.uniform(e[t].method,e[t].type,e[t].name,e[t].value);this.forceRender=!0}setMouse(t){let e=this.canvas.getBoundingClientRect();if(t&&t.x&&t.x>=e.left&&t.x<=e.right&&t.y&&t.y>=e.top&&t.y<=e.bottom){let i=(t.x-e.left)*this.realToCSSPixels,r=this.canvas.height-(t.y-e.top)*this.realToCSSPixels;this.uniform("2f","vec2","u_mouse",i,r)}}uniform(t,e,i,...r){this.uniforms[i]=this.uniforms[i]||{};let s=this.uniforms[i];var n,a;if((n=s.value,a=r,!(!n||!a)&&n.toString()!==a.toString())||this.change||!s.location||!s.value){s.name=i,s.type=e,s.value=r,s.method="uniform"+t,this.gl.useProgram(this.program),s.location=this.gl.getUniformLocation(this.program,i),this.gl[s.method].apply(this.gl,[s.location].concat(s.value));for(let t in this.buffers){let e=this.buffers[t];this.gl.useProgram(e.program);let r=this.gl.getUniformLocation(e.program,i);this.gl[s.method].apply(this.gl,[r].concat(s.value))}}}uniformTexture(t,e,i){if(void 0===this.textures[t])this.loadTexture(t,e,i);else{this.uniform("1i","sampler2D",t,this.texureIndex);for(let e in this.buffers){const i=this.buffers[e];this.gl.useProgram(i.program),this.gl.activeTexture(this.gl.TEXTURE0+this.texureIndex),this.gl.bindTexture(this.gl.TEXTURE_2D,this.textures[t].texture)}this.gl.useProgram(this.program),this.gl.activeTexture(this.gl.TEXTURE0+this.texureIndex),this.gl.bindTexture(this.gl.TEXTURE_2D,this.textures[t].texture),this.uniform("2f","vec2",t+"Resolution",this.textures[t].width,this.textures[t].height)}}resize(){if(this.width!==this.canvas.clientWidth||this.height!==this.canvas.clientHeight){this.realToCSSPixels=window.devicePixelRatio||1;let t=Math.floor(this.gl.canvas.clientWidth*this.realToCSSPixels),e=Math.floor(this.gl.canvas.clientHeight*this.realToCSSPixels);return this.gl.canvas.width===t&&this.gl.canvas.height===e||(this.gl.canvas.width=t,this.gl.canvas.height=e,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)),this.width=this.canvas.clientWidth,this.height=this.canvas.clientHeight,this.resizeSwappableBuffers(),!0}return!1}render(){if(this.visible=function(t){let e=t.getBoundingClientRect();return e.top+e.height>0&&e.top<(window.innerHeight||document.documentElement.clientHeight)}(this.canvas),this.forceRender||this.change||this.animated&&this.visible&&!this.paused){let t=new Date,e=performance.now();this.timeDelta=(e-this.timePrev)/1e3,this.timePrev=e,this.nDelta>1&&this.uniform("1f","float","u_delta",this.timeDelta),this.nTime>1&&this.uniform("1f","float","u_time",(e-this.timeLoad)/1e3),this.nDate&&this.uniform("4f","float","u_date",t.getFullYear(),t.getMonth(),t.getDate(),3600*t.getHours()+60*t.getMinutes()+t.getSeconds()+.001*t.getMilliseconds()),this.uniform("2f","vec2","u_resolution",this.canvas.width,this.canvas.height);for(let t in this.buffers){const e=this.buffers[t];this.uniform("1i","sampler2D",e.name,e.bundle.input.index)}this.texureIndex=this.BUFFER_COUNT;for(let t in this.textures)this.uniformTexture(t),this.texureIndex++;this.renderPrograms(),this.trigger("render",{}),this.change=!1,this.forceRender=!1}}pause(){this.paused=!0}play(){this.paused=!1}renderPrograms(){const t=this.gl,e=t.canvas.width,i=t.canvas.height;t.viewport(0,0,e,i);for(let r in this.buffers){const s=this.buffers[r];s.bundle.render(e,i,s.program,s.name),t.bindFramebuffer(t.FRAMEBUFFER,null)}t.useProgram(this.program),t.drawArrays(t.TRIANGLES,0,6)}getBuffers(t){let e={};return t&&t.replace(/(?:^\s*)((?:#if|#elif)(?:\s*)(defined\s*\(\s*BUFFER_)(\d+)(?:\s*\))|(?:#ifdef)(?:\s*BUFFER_)(\d+)(?:\s*))/gm,(function(){const i=arguments[3]||arguments[4];e["u_buffer"+i]={fragment:"#define BUFFER_"+i+"\n"+t}})),e}loadPrograms(t){const e=this,i=this.gl,r=n(e,e.vertexString,i.VERTEX_SHADER);for(let s in t){const o=t[s];let h=n(e,o.fragment,i.FRAGMENT_SHADER,1);h?e.isValid=!0:(h=n(e,"void main(){\n\tgl_FragColor = vec4(1.0);\n}",i.FRAGMENT_SHADER),e.isValid=!1);const l=a(e,[r,h]);o.name=s,o.program=l,o.bundle=e.createSwappableBuffer(e.canvas.width,e.canvas.height,l),i.deleteShader(h)}i.deleteShader(r)}createSwappableBuffer(t,e,i){var r=this.createBuffer(t,e,i),s=this.createBuffer(t,e,i);const n=this.gl;return{input:r,output:s,swap:function(){var t=r;r=s,s=t,this.input=r,this.output=s},render:function(t,e,i,r){n.useProgram(i),n.viewport(0,0,t,e),n.bindFramebuffer(n.FRAMEBUFFER,this.input.buffer),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,this.output.texture,0),n.drawArrays(n.TRIANGLES,0,6),this.swap()},resize:function(t,e,i,r){n.useProgram(i),n.viewport(0,0,t,e),this.input.resize(t,e),this.output.resize(t,e)}}}createBuffer(t,e,i){const r=this.gl;let s=this.BUFFER_COUNT;this.BUFFER_COUNT+=2,r.getExtension("OES_texture_float");var n=r.createTexture();r.activeTexture(r.TEXTURE0+s),r.bindTexture(r.TEXTURE_2D,n),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,t,e,0,r.RGBA,r.FLOAT,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE);var a=r.createFramebuffer();return{index:s,texture:n,buffer:a,W:t,H:e,resize:function(t,e){r.bindFramebuffer(r.FRAMEBUFFER,a);var i=Math.min(t,this.W),o=Math.min(e,this.H),h=new Float32Array(i*o*4);r.readPixels(0,0,i,o,r.RGBA,r.FLOAT,h),r.bindFramebuffer(r.FRAMEBUFFER,null);var l=s+1,u=r.createTexture();r.activeTexture(r.TEXTURE0+l),r.bindTexture(r.TEXTURE_2D,u),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,t,e,0,r.RGBA,r.FLOAT,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texSubImage2D(r.TEXTURE_2D,0,0,0,i,o,r.RGBA,r.FLOAT,h);var d=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(n),r.activeTexture(r.TEXTURE0+s),r.bindTexture(r.TEXTURE_2D,u),s=this.index=s,n=this.texture=u,a=this.buffer=d,this.W=t,this.H=e}}}resizeSwappableBuffers(){const t=this.gl,e=t.canvas.width,i=t.canvas.height;t.viewport(0,0,e,i);for(let t in this.buffers){const r=this.buffers[t];r.bundle.resize(e,i,r.program,r.name)}t.useProgram(this.program)}version(){return"0.1.7"}}window.addEventListener("load",(function(){!function(){var t=document.getElementsByClassName("glslCanvas");if(t.length>0){window.glslCanvases=[];for(var e=0;e<t.length;e++){var i=new d(t[e]);i.isValid&&window.glslCanvases.push(i)}}}()}));class g extends HTMLElement{constructor(){super()}connectedCallback(){const t=document.createElement("canvas"),e=this.getAttribute("width")||"1000",i=this.getAttribute("height")||"1000",r=this.getAttribute("refract")||"1.333",s=this.getAttribute("speed")||"0.05",n=this.getAttribute("intensity")||"1.0";this.style.display="block",t.setAttribute("width",e),t.setAttribute("height",i),t.style.width="100%",t.style.height="100%",this.appendChild(t);const a=new d(t),o=`\n\t\t\tprecision mediump float;\n\n\t\t\tuniform float u_time;\n\t\t\tvarying vec2 v_texcoord;\n\t\t\tuniform vec3 spectrum;\n\t\t\tuniform sampler2D u_image;\t\n\n\t\t\t\n\t#define NUM_OCTAVES 5\n\n\tfloat rand(vec2 n) { \n\t\treturn fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\n\t}\n\n\tfloat noise(vec2 p){\n\t\tvec2 ip = floor(p);\n\t\tvec2 u = fract(p);\n\t\tu = u*u*(3.0-2.0*u);\n\t\t\n\t\tfloat res = mix(\n\t\t\tmix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),\n\t\t\tmix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);\n\t\treturn res*res;\n\t}\n\n\tfloat fbm(vec2 x) {\n\t\tfloat v = 0.0;\n\t\tfloat a = 0.5;\n\t\tvec2 shift = vec2(100);\n\t\t// Rotate to reduce axial bias\n\t\tmat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));\n\t\tfor (int i = 0; i < NUM_OCTAVES; ++i) {\n\t\t\tv += a * noise(x);\n\t\t\tx = rot * x * 2.0 + shift;\n\t\t\ta *= 0.5;\n\t\t}\n\t\treturn v;\n\t}\n\n\t#pragma glslify: export(fbm)\n\n\n\t\t\tvoid main (void) {\n\t\t\t\tvec2 uv = v_texcoord;\n\n\t\t\t\tvec2 surface = vec2(\n\t\t\t\t\tmix(-0.3, 0.3, fbm(${n} * uv + ${s} * u_time)),\n\t\t\t\t\tmix(-0.3, 0.3, fbm(${n} * uv + ${s} * u_time))\n\t\t\t\t);\n\t\t\t\n\t\t\t\tuv += refract(vec2(0.0, 0.0), surface, 1.0 / ${r});\n\n\t\t\t\tvec4 color = texture2D(u_image, uv);\n\n\t\t\t\tgl_FragColor = color;\n\t\t\t}\n\t\t\n\t\t`;a.load(o),a.setUniform("u_image",this.getAttribute("src"))}}customElements.define("image-refractor",g)})()})();