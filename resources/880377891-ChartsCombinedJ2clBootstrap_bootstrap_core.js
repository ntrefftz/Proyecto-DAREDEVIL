"use strict";this.default_ChartsCombinedJ2clBootstrap=this.default_ChartsCombinedJ2clBootstrap||{};(function(_){var window=this;
_._F_toggles_initialize=function(a){("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:this)._F_toggles=a||[]};(0,_._F_toggles_initialize)([]);
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
/*

 SPDX-License-Identifier: Apache-2.0
*/
var aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ba=function(a){return a.raw=a},k=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error("a`"+String(a));},ca=function(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b},da=function(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==
b||"object"==b&&"number"==typeof a.length},l=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},m=function(a,b){function c(){}c.prototype=b.prototype;a.s=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.o=function(d,e,g){for(var h=Array(arguments.length-2),f=2;f<arguments.length;f++)h[f-2]=arguments[f];return b.prototype[e].apply(d,h)}},n=function(a){return a},q=function(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,q);else{var c=Error().stack;c&&(this.stack=
c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)},r=function(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");q.call(this,c+a[d])},ea=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},t=function(a){if(!fa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ha,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ia,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ja,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ka,"&quot;"));-1!=
a.indexOf("'")&&(a=a.replace(la,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ma,"&#0;"));return a},w=function(){var a=u.navigator;return a&&(a=a.userAgent)?a:""},na=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},z=function(){if(void 0===x){var a=null,b=u.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:n,createScript:n,createScriptURL:n})}catch(c){u.console&&u.console.error(c.message)}x=a}else x=a}return x},C=function(a,b){this.g=a===A&&b||"";this.j=B},D=function(a){return a instanceof
C&&a.constructor===C&&a.j===B?a.g:"type_error:Const"},E=function(a){this.g=a},F=function(a){return a instanceof E&&a.constructor===E?a.g:"type_error:TrustedResourceUrl"},G=function(a){var b=z();a=b?b.createScriptURL(a):a;return new E(a,oa)},H=function(a){this.g=a},pa=function(a){return a instanceof H&&a.constructor===H?a.g:"type_error:SafeUrl"},sa=function(a){if(a instanceof H)return a;a="object"==typeof a&&a.i?a.h():String(a);qa.test(a)?a=new H(a,I):(a=String(a).replace(/(%0A|%0D)/g,""),a=a.match(ra)?
new H(a,I):null);return a},J=function(a){this.g=a;this.i=!0},ta=function(a){return a instanceof J&&a.constructor===J?a.g:"type_error:SafeStyle"},Aa=function(a){if(a instanceof H)return'url("'+pa(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof C)a=D(a);else{a=String(a);var b=a.replace(ua,"$1").replace(ua,"$1").replace(va,"url");if(wa.test(b)){if(b=!xa.test(a)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c&&ya(a)}a=b?za(a):"zClosurez"}else a=
"zClosurez"}if(/[{;}]/.test(a))throw new r("Value does not allow [{;}], got: %s.",[a]);return a},ya=function(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b},za=function(a){return a.replace(va,function(b,c,d,e){var g="";d=d.replace(/^(['"])(.*)\1$/,function(h,f,y){g=f;return y});b=(sa(d)||Ba).h();return c+g+b+g+e})},K=function(a){this.g=a;this.i=!0},L=function(a){return a instanceof
K&&a.constructor===K?a.g:"type_error:SafeHtml"},Ca=function(a){return a instanceof K?a:M(t("object"==typeof a&&a.i?a.h():String(a)))},P=function(a,b){var c=String(a);if(!Da.test(c))throw Error("c");if(c.toUpperCase()in Ea)throw Error("c");a=String(a);c="<"+a;var d={},e="";if(d)for(p in d)if(Object.prototype.hasOwnProperty.call(d,p)){if(!Da.test(p))throw Error("c");var g=d[p];if(null!=g){var h=p;var f=g;if(f instanceof C)f=D(f);else if("style"==h.toLowerCase()){g=void 0;if(!l(f))throw Error("c");if(!(f instanceof
J)){var y="";for(g in f)if(Object.prototype.hasOwnProperty.call(f,g)){if(!/^[-_a-zA-Z0-9]+$/.test(g))throw Error("b`"+g);var v=f[g];null!=v&&(v=Array.isArray(v)?v.map(Aa).join(" "):Aa(v),y+=g+":"+v+";")}f=y?new J(y,N):Fa}f=ta(f)}else{if(/^on/i.test(h))throw Error("c");if(h.toLowerCase()in Ga)if(f instanceof E)f=F(f).toString();else if(f instanceof H)f=pa(f);else if("string"===typeof f)f=(sa(f)||Ba).h();else throw Error("c");}f.i&&(f=f.h());h=h+'="'+t(String(f))+'"';e+=" "+h}}var p=c+e;null==b?b=[]:
Array.isArray(b)||(b=[b]);!0===Ha[a.toLowerCase()]?p+=">":(b=O(b),p+=">"+L(b).toString()+"</"+a+">");return M(p)},Ja=function(a){function b(e){Array.isArray(e)?e.forEach(b):(e=Ca(e),d.push(L(e).toString()))}var c=Ca(Ia),d=[];a.forEach(b);return M(d.join(L(c).toString()))},O=function(a){return Ja(Array.prototype.slice.call(arguments))},M=function(a){var b=z();a=b?b.createHTML(a):a;return new K(a,Ka)},R=function(a){return a?new Q(9==a.nodeType?a:a.ownerDocument||a.document):La||(La=new Q)},Na=function(a,
b){na(b,function(c,d){c&&"object"==typeof c&&c.i&&(c=c.h());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Ma.hasOwnProperty(d)?a.setAttribute(Ma[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})},Pa=function(a,b,c){function d(f){f&&b.appendChild("string"===typeof f?a.createTextNode(f):f)}for(var e=2;e<c.length;e++){var g=c[e];if(!da(g)||l(g)&&0<g.nodeType)d(g);else{a:{if(g&&"number"==typeof g.length){if(l(g)){var h="function"==
typeof g.item||"string"==typeof g.item;break a}if("function"===typeof g){h="function"==typeof g.item;break a}}h=!1}Oa(h?ea(g):g,d)}}},S=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)},Q=function(a){this.g=a||u.document||document},Qa=function(a){for(var b=ca.apply(1,arguments),c=a[0],d=0;d<a.length-1;d++)c+=String(b[d])+a[d+1];if(/[<>]/.test(c))throw Error("d`"+c);return new J(c,N)},T=function(a,b){this.m=a;this.l=b;this.j=this.g=null},
Ua=function(a){var b=document.head||document.body||document,c=Qa(Ra),d=R(b),e=P("html",O(P("head"),P("body")));e=O(Sa,e);c=d.j("IFRAME",{frameborder:0,style:"border:0;vertical-align:bottom;"+(c?ta(c):"")});c.src=F(Ta).toString();b.appendChild(c);b=e;e=c.contentDocument||c.contentWindow.document;e.open();e.write(L(b));e.close();c.id=a.m;c.tabIndex=-1;a.j=c},Va=function(a){return("undefined"==typeof document.readyState?"undefined"!=typeof document.body&&null!=document.body:/loaded|complete/.test(document.readyState))?
(null!=a.g&&(clearInterval(a.g),a.g=null),a.l(a.j),!0):!1},U=function(a,b){a.src=F(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)};var u=this||self,Wa=u._F_toggles||[];m(q,Error);q.prototype.name="CustomError";var La;m(r,q);r.prototype.name="AssertionError";var Oa=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};var Xa=!!(Wa[0]&1024);var V;if(Wa[0]&512)V=Xa;else{var W;a:{for(var Ya=["WIZ_global_data","oxN3nb"],X=u,Y=0;Y<Ya.length;Y++)if(X=X[Ya[Y]],null==X){W=null;break a}W=X}var Za=W&&W[610401301];V=null!=Za?Za:!1}var $a=V;var ha=/&/g,ia=/</g,ja=/>/g,ka=/"/g,la=/'/g,ma=/\x00/g,fa=/[\x00&<>"']/;var Z,ab=u.navigator;Z=ab?ab.userAgentData||null:null;var bb=$a&&Z&&0<Z.brands.length?!1:-1!=w().indexOf("Trident")||-1!=w().indexOf("MSIE");var Ha={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};var x;C.prototype.i=!0;C.prototype.h=function(){return this.g};var B={},A={};E.prototype.toString=function(){return this.g+""};E.prototype.i=!0;E.prototype.h=function(){return this.g.toString()};var oa={};H.prototype.toString=function(){return this.g.toString()};H.prototype.i=!0;H.prototype.h=function(){return this.g.toString()};var ra=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,qa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,I={},Ba=new H("about:invalid#zClosurez",I);var N={};J.prototype.h=function(){return this.g};J.prototype.toString=function(){return this.g.toString()};var Fa=new J("",N),wa=RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),va=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),ua=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)","g"),xa=/\/\*/;var Ka={};K.prototype.h=function(){return this.g.toString()};K.prototype.toString=function(){return this.g.toString()};var Da=/^[a-zA-Z0-9-]+$/,Ga={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},Ea={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Sa=M("<!DOCTYPE html>"),Ia=new K(u.trustedTypes&&u.trustedTypes.emptyHTML||"",Ka);var Ma={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};Q.prototype.j=function(a,b,c){var d=this.g,e=arguments,g=e[1],h=S(d,String(e[0]));g&&("string"===typeof g?h.className=g:Array.isArray(g)?h.className=g.join(" "):Na(h,g));2<e.length&&Pa(d,h,e);return h};var Ta=bb?G(D(new C(A,'javascript:""'))):G(D(new C(A,"about:blank")));bb?G(D(new C(A,'javascript:""'))):G(D(new C(A,"javascript:undefined")));var Ra=ba(["position:absolute; width:0; height:0; border:none;left: -1000px; top: -1000px;"]);T.prototype.load=function(){var a=this;Ua(this);Va(this)||(this.g=setInterval(function(){return void Va(a)},50))};window.tvizScriptLoader=new T("charts-export-frame",function(a){var b=a.contentDocument;a.contentWindow.ritzspreadsheetconstants=window.ritzspreadsheetconstants;a.contentWindow.__chartmessages=window.__chartmessages;a=k(window.CHARTS_EXPORT_URI);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=S(R(b).g,"SCRIPT");d.type="text/javascript";d.async=!1;U(d,G(c));b.body.appendChild(d)}});
window.gvizScriptLoader=new T("charts-gviz-rendering-frame",function(a){var b=a.contentDocument;a.contentWindow.ritzspreadsheetconstants=window.ritzspreadsheetconstants;a=k(window.CHARTS_RENDER_URI);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=S(R(b).g,"SCRIPT");d.type="text/javascript";d.async=!1;U(d,G(c));b.body.appendChild(d)}});
window.visualizationScriptLoader=new T("visualization-export-frame",function(a){var b=a.contentDocument;a.contentWindow.ritzspreadsheetconstants=window.ritzspreadsheetconstants;a=k(window.VISUALIZATION_EXPORT_URI);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=S(R(b).g,"SCRIPT");d.type="text/javascript";d.async=!1;U(d,G(c));b.body.appendChild(d)}});
}).call(this,this.default_ChartsCombinedJ2clBootstrap);
// Google Inc.

//# sourceMappingURL=ChartsCombinedJ2clBootstrap_bootstrap_core.sourcemap
