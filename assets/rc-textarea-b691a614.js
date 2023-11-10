import{h as xe,c as F,d as Le,e as L,g as be,b as ue,f as Be}from"./@babel-179c1243.js";import{c as X}from"./classnames-b6baddbd.js";import{u as De,B as He,r as ge}from"./rc-input-bcebddf2.js";import{A as ze,a as me,l as pe}from"./rc-util-f8219cd0.js";import{N as Ke,_ as de,b as Re,F as Ye,h as he,p as ye,y as Se,w as p}from"./preact-23a6e7b2.js";import{R as je}from"./rc-resize-observer-34f97b1d.js";var Oe=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,We=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],oe={},c;function Ze(e){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(C&&oe[a])return oe[a];var n=window.getComputedStyle(e),f=n.getPropertyValue("box-sizing")||n.getPropertyValue("-moz-box-sizing")||n.getPropertyValue("-webkit-box-sizing"),v=parseFloat(n.getPropertyValue("padding-bottom"))+parseFloat(n.getPropertyValue("padding-top")),r=parseFloat(n.getPropertyValue("border-bottom-width"))+parseFloat(n.getPropertyValue("border-top-width")),i=We.map(function(s){return"".concat(s,":").concat(n.getPropertyValue(s))}).join(";"),x={sizingStyle:i,paddingSize:v,borderSize:r,boxSizing:f};return C&&a&&(oe[a]=x),x}function ke(e){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;c||(c=document.createElement("textarea"),c.setAttribute("tab-index","-1"),c.setAttribute("aria-hidden","true"),document.body.appendChild(c)),e.getAttribute("wrap")?c.setAttribute("wrap",e.getAttribute("wrap")):c.removeAttribute("wrap");var f=Ze(e,C),v=f.paddingSize,r=f.borderSize,i=f.boxSizing,x=f.sizingStyle;c.setAttribute("style","".concat(x,";").concat(Oe)),c.value=e.value||e.placeholder||"";var s=void 0,d=void 0,h,l=c.scrollHeight;if(i==="border-box"?l+=r:i==="content-box"&&(l-=v),a!==null||n!==null){c.value=" ";var P=c.scrollHeight-v;a!==null&&(s=P*a,i==="border-box"&&(s=s+v+r),l=Math.max(s,l)),n!==null&&(d=P*n,i==="border-box"&&(d=d+v+r),h=l>d?"":"hidden",l=Math.min(d,l))}var b={height:l,overflowY:h,resize:"none"};return s&&(b.minHeight=s),d&&(b.maxHeight=d),b}var Ge=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],ie=0,se=1,le=2,Xe=Ke(function(e,C){var a=e,n=a.prefixCls;a.onPressEnter;var f=a.defaultValue,v=a.value,r=a.autoSize,i=a.onResize,x=a.className,s=a.style,d=a.disabled,h=a.onChange;a.onInternalAutoSize;var l=xe(a,Ge),P=ze(f,{value:v,postState:function(u){return u??""}}),b=F(P,2),w=b[0],B=b[1],D=function(u){B(u.target.value),h==null||h(u)},z=de();Re(C,function(){return{textArea:z.current}});var Q=Ye(function(){return r&&Le(r)==="object"?[r.minRows,r.maxRows]:[]},[r]),T=F(Q,2),N=T[0],U=T[1],S=!!r,A=function(){try{if(document.activeElement===z.current){var u=z.current,Z=u.selectionStart,y=u.selectionEnd,J=u.scrollTop;z.current.setSelectionRange(Z,y),z.current.scrollTop=J}}catch{}},H=he(le),V=F(H,2),E=V[0],_=V[1],K=he(),Y=F(K,2),j=Y[0],ee=Y[1],O=function(){_(ie)};me(function(){S&&O()},[v,N,U,S]),me(function(){if(E===ie)_(se);else if(E===se){var R=ke(z.current,!1,N,U);_(le),ee(R)}else A()},[E]);var q=de(),$=function(){pe.cancel(q.current)},W=function(u){E===le&&(i==null||i(u),r&&($(),q.current=pe(function(){O()})))};ye(function(){return $},[]);var te=S?j:null,M=L(L({},s),te);return(E===ie||E===se)&&(M.overflowY="hidden",M.overflowX="hidden"),Se(je,{onResize:W,disabled:!(r||i)},Se("textarea",be({},l,{ref:z,style:M,className:X(n,x,ue({},"".concat(n,"-disabled"),d)),disabled:d,value:w,onChange:D})))}),Ue=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","classes","showCount","count","className","style","disabled","hidden","classNames","styles","onResize"],nt=p.forwardRef(function(e,C){var a,n,f=e.defaultValue,v=e.value,r=e.onFocus,i=e.onBlur,x=e.onChange,s=e.allowClear,d=e.maxLength,h=e.onCompositionStart,l=e.onCompositionEnd,P=e.suffix,b=e.prefixCls,w=b===void 0?"rc-textarea":b,B=e.classes,D=e.showCount,z=e.count,Q=e.className,T=e.style,N=e.disabled,U=e.hidden,S=e.classNames,A=e.styles,H=e.onResize,V=xe(e,Ue),E=ze(f,{value:v,defaultValue:f}),_=F(E,2),K=_[0],Y=_[1],j=K==null?"":String(K),ee=p.useState(!1),O=F(ee,2),q=O[0],$=O[1],W=p.useRef(!1),te=p.useState(null),M=F(te,2),R=M[0],u=M[1],Z=de(null),y=function(){var t;return(t=Z.current)===null||t===void 0?void 0:t.textArea},J=function(){y().focus()};Re(C,function(){return{resizableTextArea:Z.current,focus:J,blur:function(){y().blur()}}}),ye(function(){$(function(o){return!N&&o})},[N]);var ce=p.useState(null),fe=F(ce,2),ae=fe[0],Ce=fe[1];p.useEffect(function(){if(ae){var o;(o=y()).setSelectionRange.apply(o,Be(ae))}},[ae]);var g=De(z,D),k=(a=g.max)!==null&&a!==void 0?a:d,we=Number(k)>0,ne=g.strategy(j),Ae=!!k&&ne>k,ve=function(t,m){var I=m;!W.current&&g.exceedFormatter&&g.max&&g.strategy(m)>g.max&&(I=g.exceedFormatter(m,{max:g.max}),m!==I&&Ce([y().selectionStart||0,y().selectionEnd||0])),Y(I),ge(t.currentTarget,t,x,I)},Ee=function(t){W.current=!0,h==null||h(t)},Ie=function(t){W.current=!1,ve(t,t.currentTarget.value),l==null||l(t)},Fe=function(t){ve(t,t.target.value)},Te=function(t){var m=V.onPressEnter,I=V.onKeyDown;t.key==="Enter"&&m&&m(t),I==null||I(t)},Ne=function(t){$(!0),r==null||r(t)},Ve=function(t){$(!1),i==null||i(t)},Pe=function(t){Y(""),J(),ge(y(),t,x)},re=P,G;g.show&&(g.showFormatter?G=g.showFormatter({value:j,count:ne,maxLength:k}):G="".concat(ne).concat(we?" / ".concat(k):""),re=p.createElement(p.Fragment,null,re,p.createElement("span",{className:X("".concat(w,"-data-count"),S==null?void 0:S.count),style:A==null?void 0:A.count},G)));var _e=function(t){var m;H==null||H(t),(m=y())!==null&&m!==void 0&&m.style.height&&u(!0)},$e=!V.autoSize&&!D&&!s,Me=p.createElement(He,{value:j,allowClear:s,handleReset:Pe,suffix:re,prefixCls:w,classes:{affixWrapper:X(B==null?void 0:B.affixWrapper,(n={},ue(n,"".concat(w,"-show-count"),D),ue(n,"".concat(w,"-textarea-allow-clear"),s),n))},disabled:N,focused:q,className:X(Q,Ae&&"".concat(w,"-out-of-range")),style:L(L({},T),R&&!$e?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof G=="string"?G:void 0}},hidden:U,inputElement:p.createElement(Xe,be({},V,{maxLength:d,onKeyDown:Te,onChange:Fe,onFocus:Ne,onBlur:Ve,onCompositionStart:Ee,onCompositionEnd:Ie,className:X(S==null?void 0:S.textarea),style:L(L({},A==null?void 0:A.textarea),{},{resize:T==null?void 0:T.resize}),disabled:N,prefixCls:w,onResize:_e,ref:Z}))});return Me});export{nt as T};
