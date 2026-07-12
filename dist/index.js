"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var f=t(function(B,m){
var x=require('@stdlib/math-base-assert-is-nanf/dist'),v=require('@stdlib/math-base-special-abs/dist');function l(e,r,a,q){var u,s,i,n;if(e<=0)return NaN;if(e===1||a===0)return v(r[q]);for(s=q,n=0;n<e&&(i=r[s],i!==i);n++)s+=a;if(n===e)return NaN;for(u=v(i),n+=1,n;n<e;n++)s+=a,i=v(r[s]),!x(i)&&i<u&&(u=i);return u}m.exports=l
});var b=t(function(C,c){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=f();function k(e,r,a){return _(e,r,a,R(e,a))}c.exports=k
});var d=t(function(D,y){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=b(),O=f();E(p,"ndarray",O);y.exports=p
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=d(),o,j=h(g(__dirname,"./native.js"));w(j)?o=z:o=j;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
