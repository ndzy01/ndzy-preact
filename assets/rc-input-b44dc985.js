import{c as y}from"./classnames-e9f2203f.js";import{_ as ce,s as oe,w as c,a as Ee,N as we,h as Ne,c as Se,p as be}from"./preact-0e59a8f0.js";import{e as b,b as A,g as ue,d as de,h as fe,c as le,f as Fe}from"./@babel-38a01a7f.js";import{A as Ie,t as Re}from"./rc-util-010eb662.js";function p(n){return!!(n.addonBefore||n.addonAfter)}function re(n){return!!(n.prefix||n.suffix||n.allowClear)}function se(n,e,r,d){if(r){var a=e;if(e.type==="click"){var l=n.cloneNode(!0);a=Object.create(e,{target:{value:l},currentTarget:{value:l}}),l.value="",r(a);return}if(d!==void 0){var g=n.cloneNode(!0);a=Object.create(e,{target:{value:g},currentTarget:{value:g}}),g.type!=="file"&&(g.value=d),r(a);return}r(a)}}function Ae(n,e){if(n){n.focus(e);var r=e||{},d=r.cursor;if(d){var a=n.value.length;switch(d){case"start":n.setSelectionRange(0,0);break;case"end":n.setSelectionRange(a,a);break;default:n.setSelectionRange(0,a)}}}}var Be=function(e){var r,d,a=e.inputElement,l=e.prefixCls,g=e.prefix,F=e.suffix,M=e.addonBefore,C=e.addonAfter,I=e.className,j=e.style,H=e.disabled,J=e.readOnly,K=e.focused,L=e.triggerFocus,x=e.allowClear,B=e.value,Z=e.handleReset,W=e.hidden,u=e.classes,i=e.classNames,_=e.dataAttrs,m=e.styles,f=e.components,T=(f==null?void 0:f.affixWrapper)||"span",Q=(f==null?void 0:f.groupWrapper)||"span",ee=(f==null?void 0:f.wrapper)||"span",k=(f==null?void 0:f.groupAddon)||"span",O=ce(null),s=function(h){var N;(N=O.current)!==null&&N!==void 0&&N.contains(h.target)&&(L==null||L())},$=function(){var h;if(!x)return null;var N=!H&&!J&&B,q="".concat(l,"-clear-icon"),Y=de(x)==="object"&&x!==null&&x!==void 0&&x.clearIcon?x.clearIcon:"✖";return c.createElement("span",{onClick:Z,onMouseDown:function(te){return te.preventDefault()},className:y(q,(h={},A(h,"".concat(q,"-hidden"),!N),A(h,"".concat(q,"-has-suffix"),!!F),h)),role:"button",tabIndex:-1},Y)},z=oe(a,{value:B,hidden:W,className:y((r=a.props)===null||r===void 0?void 0:r.className,!re(e)&&!p(e)&&I)||null,style:b(b({},(d=a.props)===null||d===void 0?void 0:d.style),!re(e)&&!p(e)?j:{})});if(re(e)){var E,w="".concat(l,"-affix-wrapper"),U=y(w,(E={},A(E,"".concat(w,"-disabled"),H),A(E,"".concat(w,"-focused"),K),A(E,"".concat(w,"-readonly"),J),A(E,"".concat(w,"-input-with-clear-btn"),F&&x&&B),E),!p(e)&&I,u==null?void 0:u.affixWrapper,i==null?void 0:i.affixWrapper),P=(F||x)&&c.createElement("span",{className:y("".concat(l,"-suffix"),i==null?void 0:i.suffix),style:m==null?void 0:m.suffix},$(),F);z=c.createElement(T,ue({className:U,style:b(b({},p(e)?void 0:j),m==null?void 0:m.affixWrapper),hidden:!p(e)&&W,onClick:s},_==null?void 0:_.affixWrapper,{ref:O}),g&&c.createElement("span",{className:y("".concat(l,"-prefix"),i==null?void 0:i.prefix),style:m==null?void 0:m.prefix},g),oe(a,{value:B,hidden:null}),P)}if(p(e)){var X="".concat(l,"-group"),G="".concat(X,"-addon"),V=y("".concat(l,"-wrapper"),X,u==null?void 0:u.wrapper),ne=y("".concat(l,"-group-wrapper"),I,u==null?void 0:u.group);return c.createElement(Q,{className:ne,style:j,hidden:W},c.createElement(ee,{className:V},M&&c.createElement(k,{className:G},M),oe(z,{hidden:null}),C&&c.createElement(k,{className:G},C)))}return z},_e=["show"];function De(n,e){return Ee(function(){var r={};e&&(r.show=de(e)==="object"&&e.formatter?e.formatter:!!e),r=b(b({},r),n);var d=r,a=d.show,l=fe(d,_e);return b(b({},l),{},{show:!!a,showFormatter:typeof a=="function"?a:void 0,strategy:l.strategy||function(g){return g.length}})},[n,e])}var ke=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],Ke=we(function(n,e){var r=n.autoComplete,d=n.onChange,a=n.onFocus,l=n.onBlur,g=n.onPressEnter,F=n.onKeyDown,M=n.prefixCls,C=M===void 0?"rc-input":M,I=n.disabled,j=n.htmlSize,H=n.className,J=n.maxLength,K=n.suffix,L=n.showCount,x=n.count,B=n.type,Z=B===void 0?"text":B,W=n.classes,u=n.classNames,i=n.styles,_=n.onCompositionStart,m=n.onCompositionEnd,f=fe(n,ke),T=Ne(!1),Q=le(T,2),ee=Q[0],k=Q[1],O=c.useRef(!1),s=ce(null),$=function(t){s.current&&Ae(s.current,t)},z=Ie(n.defaultValue,{value:n.value}),E=le(z,2),w=E[0],U=E[1],P=w==null?"":String(w),X=c.useState(null),G=le(X,2),V=G[0],ne=G[1],v=De(x,L),h=v.max||J,N=v.strategy(P),q=!!h&&N>h;Se(e,function(){return{focus:$,blur:function(){var t;(t=s.current)===null||t===void 0||t.blur()},setSelectionRange:function(t,S,R){var D;(D=s.current)===null||D===void 0||D.setSelectionRange(t,S,R)},select:function(){var t;(t=s.current)===null||t===void 0||t.select()},input:s.current}}),be(function(){k(function(o){return o&&I?!1:o})},[I]);var Y=function(t,S){var R=S;if(!O.current&&v.exceedFormatter&&v.max&&v.strategy(S)>v.max&&(R=v.exceedFormatter(S,{max:v.max}),S!==R)){var D,ae;ne([((D=s.current)===null||D===void 0?void 0:D.selectionStart)||0,((ae=s.current)===null||ae===void 0?void 0:ae.selectionEnd)||0])}U(R),s.current&&se(s.current,t,d,R)};c.useEffect(function(){if(V){var o;(o=s.current)===null||o===void 0||o.setSelectionRange.apply(o,Fe(V))}},[V]);var ie=function(t){Y(t,t.target.value)},te=function(t){O.current=!1,Y(t,t.currentTarget.value),m==null||m(t)},ve=function(t){g&&t.key==="Enter"&&g(t),F==null||F(t)},me=function(t){k(!0),a==null||a(t)},ge=function(t){k(!1),l==null||l(t)},he=function(t){U(""),$(),s.current&&se(s.current,t,d)},xe=q&&"".concat(C,"-out-of-range"),ye=function(){var t=Re(n,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames"]);return c.createElement("input",ue({autoComplete:r},t,{onChange:ie,onFocus:me,onBlur:ge,onKeyDown:ve,className:y(C,A({},"".concat(C,"-disabled"),I),u==null?void 0:u.input),style:i==null?void 0:i.input,ref:s,size:j,type:Z,onCompositionStart:function(R){O.current=!0,_==null||_(R)},onCompositionEnd:te}))},Ce=function(){var t=Number(h)>0;if(K||v.show){var S=v.showFormatter?v.showFormatter({value:P,count:N,maxLength:h}):"".concat(N).concat(t?" / ".concat(h):"");return c.createElement(c.Fragment,null,v.show&&c.createElement("span",{className:y("".concat(C,"-show-count-suffix"),A({},"".concat(C,"-show-count-has-suffix"),!!K),u==null?void 0:u.count),style:b({},i==null?void 0:i.count)},S),K)}return null};return c.createElement(Be,ue({},f,{prefixCls:C,className:y(H,xe),inputElement:ye(),handleReset:he,value:P,focused:ee,triggerFocus:$,suffix:Ce(),disabled:I,classes:W,classNames:u,styles:i}))});export{Be as B,Ke as I,se as r,De as u};
