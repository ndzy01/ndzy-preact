import{y,w as On,q as jn,G as Hn,h as Ne,_ as ie,p as Ie,N as tn,s as Gn,c as wt,k as Nn,b as hn,F as ue,T as nn,f as Xn}from"./preact-23a6e7b2.js";import"./react-is-e5978b8b.js";import{w as Ct,f as yt,C as gn,K as D,b as It,m as Dt,e as Ot,a as Rt,A as xn,o as xt,t as Pt,c as Mt,y as Nt}from"./rc-util-f8219cd0.js";import{c as He}from"./classnames-b6baddbd.js";import{d as bn,c as te,e as J,b as ne,g as We,h as on,r as Vt,f as xe}from"./@babel-179c1243.js";import{F as Et}from"./rc-overflow-0bb9126a.js";import{T as Tt}from"./@rc-component-ae1e168c.js";import{L as At}from"./rc-virtual-list-6db7f7af.js";var Sn=function(e){var o=e.className,t=e.customizeIcon,r=e.customizeIconProps,a=e.onMouseDown,c=e.onClick,s=e.children,d;return typeof t=="function"?d=t(r):d=t,y("span",{className:o,onMouseDown:function(b){b.preventDefault(),a&&a(b)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:c,"aria-hidden":!0},d!==void 0?d:y("span",{className:He(o.split(/\s+/).map(function(g){return"".concat(g,"-icon")}))},s))};function _t(n,e,o,t,r){var a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:!1,c=arguments.length>6?arguments[6]:void 0,s=arguments.length>7?arguments[7]:void 0,d=On.useMemo(function(){if(bn(t)==="object")return t.clearIcon;if(r)return r},[t,r]),g=On.useMemo(function(){return!!(!a&&t&&(o.length||c)&&!(s==="combobox"&&c===""))},[t,a,o.length,c,s]);return{allowClear:g,clearIcon:On.createElement(Sn,{className:"".concat(n,"-clear"),onMouseDown:e,customizeIcon:d},"×")}}var Yn=Hn(null);function Lt(){return jn(Yn)}function Ft(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,e=Ne(!1),o=te(e,2),t=o[0],r=o[1],a=ie(null),c=function(){window.clearTimeout(a.current)};Ie(function(){return c},[]);var s=function(g,b){c(),a.current=window.setTimeout(function(){r(g),b&&b()},n)};return[t,s,c]}function qn(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:250,e=ie(null),o=ie(null);Ie(function(){return function(){window.clearTimeout(o.current)}},[]);function t(r){(r||e.current===null)&&(e.current=r),window.clearTimeout(o.current),o.current=window.setTimeout(function(){e.current=null},n)}return[function(){return e.current},t]}function kt(n,e,o,t){var r=ie(null);r.current={open:e,triggerOpen:o,customizedTrigger:t},Ie(function(){function a(c){var s;if(!((s=r.current)!==null&&s!==void 0&&s.customizedTrigger)){var d=c.target;d.shadowRoot&&c.composed&&(d=c.composedPath()[0]||d),r.current.open&&n().filter(function(g){return g}).every(function(g){return!g.contains(d)&&g!==d})&&r.current.triggerOpen(!1)}}return window.addEventListener("mousedown",a),function(){return window.removeEventListener("mousedown",a)}},[])}var Kt=function(e,o){var t,r=e.prefixCls,a=e.id,c=e.inputElement,s=e.disabled,d=e.tabIndex,g=e.autoFocus,b=e.autoComplete,l=e.editable,O=e.activeDescendantId,i=e.value,S=e.maxLength,M=e.onKeyDown,G=e.onMouseDown,N=e.onChange,T=e.onPaste,_=e.onCompositionStart,Z=e.onCompositionEnd,W=e.open,X=e.attrs,Y=c||y("input",null),q=Y,oe=q.ref,A=q.props,K=A.onKeyDown,U=A.onChange,ae=A.onMouseDown,V=A.onCompositionStart,z=A.onCompositionEnd,L=A.style;return Ct(!("maxLength"in Y.props)),Y=Gn(Y,J(J(J({type:"search"},A),{},{id:a,ref:yt(o,oe),disabled:s,tabIndex:d,autoComplete:b||"off",autoFocus:g,className:He("".concat(r,"-selection-search-input"),(t=Y)===null||t===void 0||(t=t.props)===null||t===void 0?void 0:t.className),role:"combobox","aria-expanded":W||!1,"aria-haspopup":"listbox","aria-owns":"".concat(a,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(a,"_list"),"aria-activedescendant":W?O:void 0},X),{},{value:l?i:"",maxLength:S,readOnly:!l,unselectable:l?null:"on",style:J(J({},L),{},{opacity:l?null:0}),onKeyDown:function(m){M(m),K&&K(m)},onMouseDown:function(m){G(m),ae&&ae(m)},onChange:function(m){N(m),U&&U(m)},onCompositionStart:function(m){_(m),V&&V(m)},onCompositionEnd:function(m){Z(m),z&&z(m)},onPaste:T})),Y},Vn=tn(Kt);Vn.displayName="Input";function Jn(n){return Array.isArray(n)?n:n!==void 0?[n]:[]}var $t=typeof window<"u"&&window.document&&window.document.documentElement,Wt=$t;function Bt(n){return n!=null}function Ut(n){return!n&&n!==0}function Kn(n){return["string","number"].includes(bn(n))}function Qn(n){var e=void 0;return n&&(Kn(n.title)?e=n.title.toString():Kn(n.label)&&(e=n.label.toString())),e}function zt(n,e){Wt?wt(n,e):Ie(n,e)}function jt(n){var e;return(e=n.key)!==null&&e!==void 0?e:n.value}var $n=function(e){e.preventDefault(),e.stopPropagation()},Ht=function(e){var o=e.id,t=e.prefixCls,r=e.values,a=e.open,c=e.searchValue,s=e.autoClearSearchValue,d=e.inputRef,g=e.placeholder,b=e.disabled,l=e.mode,O=e.showSearch,i=e.autoFocus,S=e.autoComplete,M=e.activeDescendantId,G=e.tabIndex,N=e.removeIcon,T=e.maxTagCount,_=e.maxTagTextLength,Z=e.maxTagPlaceholder,W=Z===void 0?function(w){return"+ ".concat(w.length," ...")}:Z,X=e.tagRender,Y=e.onToggleOpen,q=e.onRemove,oe=e.onInputChange,A=e.onInputPaste,K=e.onInputKeyDown,U=e.onInputMouseDown,ae=e.onInputCompositionStart,V=e.onInputCompositionEnd,z=ie(null),L=Ne(0),R=te(L,2),m=R[0],se=R[1],De=Ne(!1),Oe=te(De,2),de=Oe[0],Se=Oe[1],me="".concat(t,"-selection"),j=a||l==="multiple"&&s===!1||l==="tags"?c:"",Le=l==="tags"||l==="multiple"&&s===!1||O&&(a||de);zt(function(){se(z.current.scrollWidth)},[j]);function Ve(w,E,H,fe,le){return y("span",{className:He("".concat(me,"-item"),ne({},"".concat(me,"-item-disabled"),H)),title:Qn(w)},y("span",{className:"".concat(me,"-item-content")},E),fe&&y(Sn,{className:"".concat(me,"-item-remove"),onMouseDown:$n,onClick:le,customizeIcon:N},"×"))}function I(w,E,H,fe,le){var Re=function(pe){$n(pe),Y(!a)};return y("span",{onMouseDown:Re},X({label:E,value:w,disabled:H,closable:fe,onClose:le}))}function f(w){var E=w.disabled,H=w.label,fe=w.value,le=!b&&!E,Re=H;if(typeof _=="number"&&(typeof H=="string"||typeof H=="number")){var re=String(Re);re.length>_&&(Re="".concat(re.slice(0,_),"..."))}var pe=function(Q){Q&&Q.stopPropagation(),q(w)};return typeof X=="function"?I(fe,Re,E,le,pe):Ve(w,Re,E,le,pe)}function x(w){var E=typeof W=="function"?W(w):W;return Ve({title:E},E,!1)}var F=y("div",{className:"".concat(me,"-search"),style:{width:m},onFocus:function(){Se(!0)},onBlur:function(){Se(!1)}},y(Vn,{ref:d,open:a,prefixCls:t,id:o,inputElement:null,disabled:b,autoFocus:i,autoComplete:S,editable:Le,activeDescendantId:M,value:j,onKeyDown:K,onMouseDown:U,onChange:oe,onPaste:A,onCompositionStart:ae,onCompositionEnd:V,tabIndex:G,attrs:gn(e,!0)}),y("span",{ref:z,className:"".concat(me,"-search-mirror"),"aria-hidden":!0},j," ")),k=y(Et,{prefixCls:"".concat(me,"-overflow"),data:r,renderItem:f,renderRest:x,suffix:F,itemKey:jt,maxCount:T});return y(Nn,null,k,!r.length&&!j&&y("span",{className:"".concat(me,"-placeholder")},g))},Gt=function(e){var o=e.inputElement,t=e.prefixCls,r=e.id,a=e.inputRef,c=e.disabled,s=e.autoFocus,d=e.autoComplete,g=e.activeDescendantId,b=e.mode,l=e.open,O=e.values,i=e.placeholder,S=e.tabIndex,M=e.showSearch,G=e.searchValue,N=e.activeValue,T=e.maxLength,_=e.onInputKeyDown,Z=e.onInputMouseDown,W=e.onInputChange,X=e.onInputPaste,Y=e.onInputCompositionStart,q=e.onInputCompositionEnd,oe=e.title,A=Ne(!1),K=te(A,2),U=K[0],ae=K[1],V=b==="combobox",z=V||M,L=O[0],R=G||"";V&&N&&!U&&(R=N),Ie(function(){V&&ae(!1)},[V,N]);var m=b!=="combobox"&&!l&&!M?!1:!!R,se=oe===void 0?Qn(L):oe,De=function(){if(L)return null;var de=m?{visibility:"hidden"}:void 0;return y("span",{className:"".concat(t,"-selection-placeholder"),style:de},i)};return y(Nn,null,y("span",{className:"".concat(t,"-selection-search")},y(Vn,{ref:a,prefixCls:t,id:r,open:l,inputElement:o,disabled:c,autoFocus:s,autoComplete:d,editable:z,activeDescendantId:g,value:R,onKeyDown:_,onMouseDown:Z,onChange:function(de){ae(!0),W(de)},onPaste:X,onCompositionStart:Y,onCompositionEnd:q,tabIndex:S,attrs:gn(e,!0),maxLength:V?T:void 0})),!V&&L?y("span",{className:"".concat(t,"-selection-item"),title:se,style:m?{visibility:"hidden"}:void 0},L.label):null,De())};function Xt(n){return![D.ESC,D.SHIFT,D.BACKSPACE,D.TAB,D.WIN_KEY,D.ALT,D.META,D.WIN_KEY_RIGHT,D.CTRL,D.SEMICOLON,D.EQUALS,D.CAPS_LOCK,D.CONTEXT_MENU,D.F1,D.F2,D.F3,D.F4,D.F5,D.F6,D.F7,D.F8,D.F9,D.F10,D.F11,D.F12].includes(n)}var Yt=function(e,o){var t=ie(null),r=ie(!1),a=e.prefixCls,c=e.open,s=e.mode,d=e.showSearch,g=e.tokenWithEnter,b=e.autoClearSearchValue,l=e.onSearch,O=e.onSearchSubmit,i=e.onToggleOpen,S=e.onInputKeyDown,M=e.domRef;hn(o,function(){return{focus:function(){t.current.focus()},blur:function(){t.current.blur()}}});var G=qn(0),N=te(G,2),T=N[0],_=N[1],Z=function(R){var m=R.which;(m===D.UP||m===D.DOWN)&&R.preventDefault(),S&&S(R),m===D.ENTER&&s==="tags"&&!r.current&&!c&&(O==null||O(R.target.value)),Xt(m)&&i(!0)},W=function(){_(!0)},X=ie(null),Y=function(R){l(R,!0,r.current)!==!1&&i(!0)},q=function(){r.current=!0},oe=function(R){r.current=!1,s!=="combobox"&&Y(R.target.value)},A=function(R){var m=R.target.value;if(g&&X.current&&/[\r\n]/.test(X.current)){var se=X.current.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");m=m.replace(se,X.current)}X.current=null,Y(m)},K=function(R){var m=R.clipboardData,se=m.getData("text");X.current=se},U=function(R){var m=R.target;if(m!==t.current){var se=document.body.style.msTouchAction!==void 0;se?setTimeout(function(){t.current.focus()}):t.current.focus()}},ae=function(R){var m=T();R.target!==t.current&&!m&&s!=="combobox"&&R.preventDefault(),(s!=="combobox"&&(!d||!m)||!c)&&(c&&b!==!1&&l("",!0,!1),i())},V={inputRef:t,onInputKeyDown:Z,onInputMouseDown:W,onInputChange:A,onInputPaste:K,onInputCompositionStart:q,onInputCompositionEnd:oe},z=s==="multiple"||s==="tags"?y(Ht,We({},e,V)):y(Gt,We({},e,V));return y("div",{ref:M,className:"".concat(a,"-selector"),onClick:U,onMouseDown:ae},z)},Zn=tn(Yt);Zn.displayName="Selector";var qt=["prefixCls","disabled","visible","children","popupElement","animation","transitionName","dropdownStyle","dropdownClassName","direction","placement","builtinPlacements","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","getPopupContainer","empty","getTriggerDOMNode","onPopupVisibleChange","onPopupMouseEnter"],Jt=function(e){var o=e===!0?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:o,adjustY:1},htmlRegion:"scroll"},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:o,adjustY:1},htmlRegion:"scroll"},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:o,adjustY:1},htmlRegion:"scroll"},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:o,adjustY:1},htmlRegion:"scroll"}}},Qt=function(e,o){var t=e.prefixCls;e.disabled;var r=e.visible,a=e.children,c=e.popupElement,s=e.animation,d=e.transitionName,g=e.dropdownStyle,b=e.dropdownClassName,l=e.direction,O=l===void 0?"ltr":l,i=e.placement,S=e.builtinPlacements,M=e.dropdownMatchSelectWidth,G=e.dropdownRender,N=e.dropdownAlign,T=e.getPopupContainer,_=e.empty,Z=e.getTriggerDOMNode,W=e.onPopupVisibleChange,X=e.onPopupMouseEnter,Y=on(e,qt),q="".concat(t,"-dropdown"),oe=c;G&&(oe=G(c));var A=ue(function(){return S||Jt(M)},[S,M]),K=s?"".concat(q,"-").concat(s):d,U=typeof M=="number",ae=ue(function(){return U?null:M===!1?"minWidth":"width"},[M,U]),V=g;U&&(V=J(J({},V),{},{width:M}));var z=ie(null);return hn(o,function(){return{getPopupElement:function(){return z.current}}}),y(Tt,We({},Y,{showAction:W?["click"]:[],hideAction:W?["click"]:[],popupPlacement:i||(O==="rtl"?"bottomRight":"bottomLeft"),builtinPlacements:A,prefixCls:q,popupTransitionName:K,popup:y("div",{ref:z,onMouseEnter:X},oe),stretch:ae,popupAlign:N,popupVisible:r,getPopupContainer:T,popupClassName:He(b,ne({},"".concat(q,"-empty"),_)),popupStyle:V,getTriggerDOMNode:Z,onPopupVisibleChange:W}),a)},et=tn(Qt);et.displayName="SelectTrigger";function Wn(n,e){var o=n.key,t;return"value"in n&&(t=n.value),o??(t!==void 0?t:"rc-index-key-".concat(e))}function nt(n,e){var o=n||{},t=o.label,r=o.value,a=o.options,c=o.groupLabel,s=t||(e?"children":"label");return{label:s,value:r||"value",options:a||"options",groupLabel:c||s}}function Zt(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=e.fieldNames,t=e.childrenAsData,r=[],a=nt(o,!1),c=a.label,s=a.value,d=a.options,g=a.groupLabel;function b(l,O){l.forEach(function(i){if(O||!(d in i)){var S=i[s];r.push({key:Wn(i,r.length),groupOption:O,data:i,label:i[c],value:S})}else{var M=i[g];M===void 0&&t&&(M=i.label),r.push({key:Wn(i,r.length),group:!0,data:i,label:M}),b(i[d],!0)}})}return b(n,!1),r}function Pn(n){var e=J({},n);return"props"in e||Object.defineProperty(e,"props",{get:function(){return It(!1,"Return type is option instead of Option instance. Please read value directly instead of reading from `props`."),e}}),e}function eo(n,e){if(!e||!e.length)return null;var o=!1;function t(a,c){var s=Vt(c),d=s[0],g=s.slice(1);if(!d)return[a];var b=a.split(d);return o=o||b.length>1,b.reduce(function(l,O){return[].concat(xe(l),xe(t(O,g)))},[]).filter(function(l){return l})}var r=t(n,e);return o?r:null}var no=["id","prefixCls","className","showSearch","tagRender","direction","omitDomProps","displayValues","onDisplayValuesChange","emptyOptions","notFoundContent","onClear","mode","disabled","loading","getInputElement","getRawInputElement","open","defaultOpen","onDropdownVisibleChange","activeValue","onActiveValueChange","activeDescendantId","searchValue","autoClearSearchValue","onSearch","onSearchSplit","tokenSeparators","allowClear","suffixIcon","clearIcon","OptionList","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","placement","builtinPlacements","getPopupContainer","showAction","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown"],to=["value","onChange","removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabIndex"];function Mn(n){return n==="tags"||n==="multiple"}var oo=tn(function(n,e){var o,t,r=n.id,a=n.prefixCls,c=n.className,s=n.showSearch,d=n.tagRender,g=n.direction,b=n.omitDomProps,l=n.displayValues,O=n.onDisplayValuesChange,i=n.emptyOptions,S=n.notFoundContent,M=S===void 0?"Not Found":S,G=n.onClear,N=n.mode,T=n.disabled,_=n.loading,Z=n.getInputElement,W=n.getRawInputElement,X=n.open,Y=n.defaultOpen,q=n.onDropdownVisibleChange,oe=n.activeValue,A=n.onActiveValueChange,K=n.activeDescendantId,U=n.searchValue,ae=n.autoClearSearchValue,V=n.onSearch,z=n.onSearchSplit,L=n.tokenSeparators,R=n.allowClear,m=n.suffixIcon,se=n.clearIcon,De=n.OptionList,Oe=n.animation,de=n.transitionName,Se=n.dropdownStyle,me=n.dropdownClassName,j=n.dropdownMatchSelectWidth,Le=n.dropdownRender,Ve=n.dropdownAlign,I=n.placement,f=n.builtinPlacements,x=n.getPopupContainer,F=n.showAction,k=F===void 0?[]:F,w=n.onFocus,E=n.onBlur,H=n.onKeyUp,fe=n.onKeyDown,le=n.onMouseDown,Re=on(n,no),re=Mn(N),pe=(s!==void 0?s:re)||N==="combobox",Fe=J({},Re);to.forEach(function(P){delete Fe[P]}),b==null||b.forEach(function(P){delete Fe[P]});var Q=Ne(!1),Ge=te(Q,2),an=Ge[0],we=Ge[1];Ie(function(){we(Dt())},[]);var ge=ie(null),Xe=ie(null),he=ie(null),Pe=ie(null),Ce=ie(null),Ee=ie(!1),ke=Ft(),rn=te(ke,3),qe=rn[0],un=rn[1],Je=rn[2];hn(e,function(){var P,C;return{focus:(P=Pe.current)===null||P===void 0?void 0:P.focus,blur:(C=Pe.current)===null||C===void 0?void 0:C.blur,scrollTo:function(be){var ee;return(ee=Ce.current)===null||ee===void 0?void 0:ee.scrollTo(be)}}});var Te=ue(function(){var P;if(N!=="combobox")return U;var C=(P=l[0])===null||P===void 0?void 0:P.value;return typeof C=="string"||typeof C=="number"?String(C):""},[U,N,l]),ln=N==="combobox"&&typeof Z=="function"&&Z()||null,Ae=typeof W=="function"&&W(),wn=Ot(Xe,Ae==null||(o=Ae.props)===null||o===void 0?void 0:o.ref),fn=Ne(!1),cn=te(fn,2),Qe=cn[0],vn=cn[1];Rt(function(){vn(!0)},[]);var Cn=xn(!1,{defaultValue:Y,value:X}),mn=te(Cn,2),pn=mn[0],sn=mn[1],u=Qe?pn:!1,h=!M&&i;(T||h&&u&&N==="combobox")&&(u=!1);var v=h?!1:u,p=nn(function(P){var C=P!==void 0?P:!u;T||(sn(C),u!==C&&(q==null||q(C)))},[T,u,sn,q]),$=ue(function(){return(L||[]).some(function(P){return[`
`,`\r
`].includes(P)})},[L]),B=function(C,ve,be){var ee=!0,ye=C;A==null||A(null);var Me=be?null:eo(C,L);return N!=="combobox"&&Me&&(ye="",z==null||z(Me),p(!1),ee=!1),V&&Te!==ye&&V(ye,{source:ve?"typing":"effect"}),ee},Ke=function(C){!C||!C.trim()||V(C,{source:"submit"})};Ie(function(){!u&&!re&&N!=="combobox"&&B("",!1,!1)},[u]),Ie(function(){pn&&T&&sn(!1),T&&!Ee.current&&un(!1)},[T]);var _e=qn(),Be=te(_e,2),ce=Be[0],Ue=Be[1],yn=function(C){var ve=ce(),be=C.which;if(be===D.ENTER&&(N!=="combobox"&&C.preventDefault(),u||p(!0)),Ue(!!Te),be===D.BACKSPACE&&!ve&&re&&!Te&&l.length){for(var ee=xe(l),ye=null,Me=ee.length-1;Me>=0;Me-=1){var dn=ee[Me];if(!dn.disabled){ee.splice(Me,1),ye=dn;break}}ye&&O(ee,{type:"remove",values:[ye]})}for(var ze=arguments.length,en=new Array(ze>1?ze-1:0),je=1;je<ze;je++)en[je-1]=arguments[je];if(u&&Ce.current){var kn;(kn=Ce.current).onKeyDown.apply(kn,[C].concat(en))}fe==null||fe.apply(void 0,[C].concat(en))},In=function(C){for(var ve=arguments.length,be=new Array(ve>1?ve-1:0),ee=1;ee<ve;ee++)be[ee-1]=arguments[ee];if(u&&Ce.current){var ye;(ye=Ce.current).onKeyUp.apply(ye,[C].concat(be))}H==null||H.apply(void 0,[C].concat(be))},En=function(C){var ve=l.filter(function(be){return be!==C});O(ve,{type:"remove",values:[C]})},Ye=ie(!1),$e=function(){un(!0),T||(w&&!Ye.current&&w.apply(void 0,arguments),k.includes("focus")&&p(!0)),Ye.current=!0},lt=function(){Ee.current=!0,un(!1,function(){Ye.current=!1,Ee.current=!1,p(!1)}),!T&&(Te&&(N==="tags"?V(Te,{source:"submit"}):N==="multiple"&&V("",{source:"blur"})),E&&E.apply(void 0,arguments))},Ze=[];Ie(function(){return function(){Ze.forEach(function(P){return clearTimeout(P)}),Ze.splice(0,Ze.length)}},[]);var ct=function(C){var ve,be=C.target,ee=(ve=he.current)===null||ve===void 0?void 0:ve.getPopupElement();if(ee&&ee.contains(be)){var ye=setTimeout(function(){var en=Ze.indexOf(ye);if(en!==-1&&Ze.splice(en,1),Je(),!an&&!ee.contains(document.activeElement)){var je;(je=Pe.current)===null||je===void 0||je.focus()}});Ze.push(ye)}for(var Me=arguments.length,dn=new Array(Me>1?Me-1:0),ze=1;ze<Me;ze++)dn[ze-1]=arguments[ze];le==null||le.apply(void 0,[C].concat(dn))},st=Ne({}),dt=te(st,2),ft=dt[1];function vt(){ft({})}var Tn;Ae&&(Tn=function(C){p(C)}),kt(function(){var P;return[ge.current,(P=he.current)===null||P===void 0?void 0:P.getPopupElement()]},v,p,!!Ae);var mt=ue(function(){return J(J({},n),{},{notFoundContent:M,open:u,triggerOpen:v,id:r,showSearch:pe,multiple:re,toggleOpen:p})},[n,M,v,u,r,pe,re,p]),An=!!m||_,_n;An&&(_n=y(Sn,{className:He("".concat(a,"-arrow"),ne({},"".concat(a,"-arrow-loading"),_)),customizeIcon:m,customizeIconProps:{loading:_,searchValue:Te,open:u,focused:qe,showSearch:pe}}));var pt=function(){var C;G==null||G(),(C=Pe.current)===null||C===void 0||C.focus(),O([],{type:"clear",values:l}),B("",!1,!1)},Ln=_t(a,pt,l,R,se,T,Te,N),gt=Ln.allowClear,ht=Ln.clearIcon,bt=y(De,{ref:Ce}),St=He(a,c,(t={},ne(t,"".concat(a,"-focused"),qe),ne(t,"".concat(a,"-multiple"),re),ne(t,"".concat(a,"-single"),!re),ne(t,"".concat(a,"-allow-clear"),R),ne(t,"".concat(a,"-show-arrow"),An),ne(t,"".concat(a,"-disabled"),T),ne(t,"".concat(a,"-loading"),_),ne(t,"".concat(a,"-open"),u),ne(t,"".concat(a,"-customize-input"),ln),ne(t,"".concat(a,"-show-search"),pe),t)),Fn=y(et,{ref:he,disabled:T,prefixCls:a,visible:v,popupElement:bt,animation:Oe,transitionName:de,dropdownStyle:Se,dropdownClassName:me,direction:g,dropdownMatchSelectWidth:j,dropdownRender:Le,dropdownAlign:Ve,placement:I,builtinPlacements:f,getPopupContainer:x,empty:i,getTriggerDOMNode:function(){return Xe.current},onPopupVisibleChange:Tn,onPopupMouseEnter:vt},Ae?Gn(Ae,{ref:wn}):y(Zn,We({},n,{domRef:Xe,prefixCls:a,inputElement:ln,ref:Pe,id:r,showSearch:pe,autoClearSearchValue:ae,mode:N,activeDescendantId:K,tagRender:d,values:l,open:u,onToggleOpen:p,activeValue:oe,searchValue:Te,onSearch:B,onSearchSubmit:Ke,onRemove:En,tokenWithEnter:$}))),Dn;return Ae?Dn=Fn:Dn=y("div",We({className:St},Fe,{ref:ge,onMouseDown:ct,onKeyDown:yn,onKeyUp:In,onFocus:$e,onBlur:lt}),qe&&!u&&y("span",{style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0},"aria-live":"polite"},"".concat(l.map(function(P){var C=P.label,ve=P.value;return["number","string"].includes(bn(C))?C:ve}).join(", "))),Fn,_n,gt&&ht),y(Yn.Provider,{value:mt},Dn)}),tt=function(){return null};tt.isSelectOptGroup=!0;var ot=function(){return null};ot.isSelectOption=!0;var at=Hn(null);function ao(){return/(mac\sos|macintosh)/i.test(navigator.appVersion)}var ro=["disabled","title","children","style","className"];function Bn(n){return typeof n=="string"||typeof n=="number"}var io=function(e,o){var t=Lt(),r=t.prefixCls,a=t.id,c=t.open,s=t.multiple,d=t.mode,g=t.searchValue,b=t.toggleOpen,l=t.notFoundContent,O=t.onPopupScroll,i=jn(at),S=i.flattenOptions,M=i.onActiveValue,G=i.defaultActiveFirstOption,N=i.onSelect,T=i.menuItemSelectedIcon,_=i.rawValues,Z=i.fieldNames,W=i.virtual,X=i.direction,Y=i.listHeight,q=i.listItemHeight,oe=i.optionRender,A="".concat(r,"-item"),K=xt(function(){return S},[c,S],function(I,f){return f[0]&&I[1]!==f[1]}),U=ie(null),ae=function(f){f.preventDefault()},V=function(f){U.current&&U.current.scrollTo(typeof f=="number"?{index:f}:f)},z=function(f){for(var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,F=K.length,k=0;k<F;k+=1){var w=(f+k*x+F)%F,E=K[w],H=E.group,fe=E.data;if(!H&&!fe.disabled)return w}return-1},L=Ne(function(){return z(0)}),R=te(L,2),m=R[0],se=R[1],De=function(f){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;se(f);var F={source:x?"keyboard":"mouse"},k=K[f];if(!k){M(null,-1,F);return}M(k.value,f,F)};Ie(function(){De(G!==!1?z(0):-1)},[K.length,g]);var Oe=nn(function(I){return _.has(I)&&d!=="combobox"},[d,xe(_).toString(),_.size]);Ie(function(){var I=setTimeout(function(){if(!s&&c&&_.size===1){var x=Array.from(_)[0],F=K.findIndex(function(k){var w=k.data;return w.value===x});F!==-1&&(De(F),V(F))}});if(c){var f;(f=U.current)===null||f===void 0||f.scrollTo(void 0)}return function(){return clearTimeout(I)}},[c,g]);var de=function(f){f!==void 0&&N(f,{selected:!_.has(f)}),s||b(!1)};if(hn(o,function(){return{onKeyDown:function(f){var x=f.which,F=f.ctrlKey;switch(x){case D.N:case D.P:case D.UP:case D.DOWN:{var k=0;if(x===D.UP?k=-1:x===D.DOWN?k=1:ao()&&F&&(x===D.N?k=1:x===D.P&&(k=-1)),k!==0){var w=z(m+k,k);V(w),De(w,!0)}break}case D.ENTER:{var E=K[m];E&&!E.data.disabled?de(E.value):de(void 0),c&&f.preventDefault();break}case D.ESC:b(!1),c&&f.stopPropagation()}},onKeyUp:function(){},scrollTo:function(f){V(f)}}}),K.length===0)return y("div",{role:"listbox",id:"".concat(a,"_list"),className:"".concat(A,"-empty"),onMouseDown:ae},l);var Se=Object.keys(Z).map(function(I){return Z[I]}),me=function(f){return f.label};function j(I,f){var x=I.group;return{role:x?"presentation":"option",id:"".concat(a,"_list_").concat(f)}}var Le=function(f){var x=K[f];if(!x)return null;var F=x.data||{},k=F.value,w=x.group,E=gn(F,!0),H=me(x);return x?y("div",We({"aria-label":typeof H=="string"&&!w?H:null},E,{key:f},j(x,f),{"aria-selected":Oe(k)}),k):null},Ve={role:"listbox",id:"".concat(a,"_list")};return y(Nn,null,W&&y("div",We({},Ve,{style:{height:0,width:0,overflow:"hidden"}}),Le(m-1),Le(m),Le(m+1)),y(At,{itemKey:"key",ref:U,data:K,height:Y,itemHeight:q,fullHeight:!1,onMouseDown:ae,onScroll:O,virtual:W,direction:X,innerProps:W?null:Ve},function(I,f){var x,F=I.group,k=I.groupOption,w=I.data,E=I.label,H=I.value,fe=w.key;if(F){var le,Re=(le=w.title)!==null&&le!==void 0?le:Bn(E)?E.toString():void 0;return y("div",{className:He(A,"".concat(A,"-group")),title:Re},E!==void 0?E:fe)}var re=w.disabled,pe=w.title;w.children;var Fe=w.style,Q=w.className,Ge=on(w,ro),an=Pt(Ge,Se),we=Oe(H),ge="".concat(A,"-option"),Xe=He(A,ge,Q,(x={},ne(x,"".concat(ge,"-grouped"),k),ne(x,"".concat(ge,"-active"),m===f&&!re),ne(x,"".concat(ge,"-disabled"),re),ne(x,"".concat(ge,"-selected"),we),x)),he=me(I),Pe=!T||typeof T=="function"||we,Ce=typeof he=="number"?he:he||H,Ee=Bn(Ce)?Ce.toString():void 0;return pe!==void 0&&(Ee=pe),y("div",We({},gn(an),W?{}:j(I,f),{"aria-selected":we,className:Xe,title:Ee,onMouseMove:function(){m===f||re||De(f)},onClick:function(){re||de(H)},style:Fe}),y("div",{className:"".concat(ge,"-content")},typeof oe=="function"?oe(I,{index:f}):Ce),Xn(T)||we,Pe&&y(Sn,{className:"".concat(A,"-option-state"),customizeIcon:T,customizeIconProps:{value:H,disabled:re,isSelected:we}},we?"✓":null))}))},rt=tn(io);rt.displayName="OptionList";const uo=function(n,e){var o=ie({values:new Map,options:new Map}),t=ue(function(){var a=o.current,c=a.values,s=a.options,d=n.map(function(l){if(l.label===void 0){var O;return J(J({},l),{},{label:(O=c.get(l.value))===null||O===void 0?void 0:O.label})}return l}),g=new Map,b=new Map;return d.forEach(function(l){g.set(l.value,l),b.set(l.value,e.get(l.value)||s.get(l.value))}),o.current.values=g,o.current.options=b,d},[n,e]),r=nn(function(a){return e.get(a)||o.current.options.get(a)},[e]);return[t,r]};function Rn(n,e){return Jn(n).join("").toUpperCase().includes(e)}const lo=function(n,e,o,t,r){return ue(function(){if(!o||t===!1)return n;var a=e.options,c=e.label,s=e.value,d=[],g=typeof t=="function",b=o.toUpperCase(),l=g?t:function(i,S){return r?Rn(S[r],b):S[a]?Rn(S[c!=="children"?c:"label"],b):Rn(S[s],b)},O=g?function(i){return Pn(i)}:function(i){return i};return n.forEach(function(i){if(i[a]){var S=l(o,O(i));if(S)d.push(i);else{var M=i[a].filter(function(G){return l(o,O(G))});M.length&&d.push(J(J({},i),{},ne({},a,M)))}return}l(o,O(i))&&d.push(i)}),d},[n,t,r,o,e])};var Un=0,co=Mt();function so(){var n;return co?(n=Un,Un+=1):n="TEST_OR_SSR",n}function fo(n){var e=Ne(),o=te(e,2),t=o[0],r=o[1];return Ie(function(){r("rc_select_".concat(so()))},[]),n||t}var vo=["children","value"],mo=["children"];function po(n){var e=n,o=e.key,t=e.props,r=t.children,a=t.value,c=on(t,vo);return J({key:o,value:a!==void 0?a:o,children:r},c)}function it(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return Nt(n).map(function(o,t){if(!Xn(o)||!o.type)return null;var r=o,a=r.type.isSelectOptGroup,c=r.key,s=r.props,d=s.children,g=on(s,mo);return e||!a?po(o):J(J({key:"__RC_SELECT_GRP__".concat(c===null?t:c,"__"),label:c},g),{},{options:it(d)})}).filter(function(o){return o})}function go(n,e,o,t,r){return ue(function(){var a=n,c=!n;c&&(a=it(e));var s=new Map,d=new Map,g=function(O,i,S){S&&typeof S=="string"&&O.set(i[S],i)};function b(l){for(var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=0;i<l.length;i+=1){var S=l[i];!S[o.options]||O?(s.set(S[o.value],S),g(d,S,o.label),g(d,S,t),g(d,S,r)):b(S[o.options],!0)}}return b(a),{options:a,valueOptions:s,labelOptions:d}},[n,e,o,t,r])}function zn(n){var e=ie();e.current=n;var o=nn(function(){return e.current.apply(e,arguments)},[]);return o}var ho=["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","optionRender","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","direction","listHeight","listItemHeight","value","defaultValue","labelInValue","onChange"],bo=["inputValue"];function So(n){return!n||bn(n)!=="object"}var wo=tn(function(n,e){var o=n.id,t=n.mode,r=n.prefixCls,a=r===void 0?"rc-select":r,c=n.backfill,s=n.fieldNames,d=n.inputValue,g=n.searchValue,b=n.onSearch,l=n.autoClearSearchValue,O=l===void 0?!0:l,i=n.onSelect,S=n.onDeselect,M=n.dropdownMatchSelectWidth,G=M===void 0?!0:M,N=n.filterOption,T=n.filterSort,_=n.optionFilterProp,Z=n.optionLabelProp,W=n.options,X=n.optionRender,Y=n.children,q=n.defaultActiveFirstOption,oe=n.menuItemSelectedIcon,A=n.virtual,K=n.direction,U=n.listHeight,ae=U===void 0?200:U,V=n.listItemHeight,z=V===void 0?20:V,L=n.value,R=n.defaultValue,m=n.labelInValue,se=n.onChange,De=on(n,ho),Oe=fo(o),de=Mn(t),Se=!!(!W&&Y),me=ue(function(){return N===void 0&&t==="combobox"?!1:N},[N,t]),j=ue(function(){return nt(s,Se)},[JSON.stringify(s),Se]),Le=xn("",{value:g!==void 0?g:d,postState:function(h){return h||""}}),Ve=te(Le,2),I=Ve[0],f=Ve[1],x=go(W,Y,j,_,Z),F=x.valueOptions,k=x.labelOptions,w=x.options,E=nn(function(u){var h=Jn(u);return h.map(function(v){var p,$,B,Ke,_e;if(So(v))p=v;else{var Be;B=v.key,$=v.label,p=(Be=v.value)!==null&&Be!==void 0?Be:B}var ce=F.get(p);if(ce){var Ue;$===void 0&&($=ce==null?void 0:ce[Z||j.label]),B===void 0&&(B=(Ue=ce==null?void 0:ce.key)!==null&&Ue!==void 0?Ue:p),Ke=ce==null?void 0:ce.disabled,_e=ce==null?void 0:ce.title}return{label:$,value:p,key:B,disabled:Ke,title:_e}})},[j,Z,F]),H=xn(R,{value:L}),fe=te(H,2),le=fe[0],Re=fe[1],re=ue(function(){var u,h=E(le);return t==="combobox"&&Ut((u=h[0])===null||u===void 0?void 0:u.value)?[]:h},[le,E,t]),pe=uo(re,F),Fe=te(pe,2),Q=Fe[0],Ge=Fe[1],an=ue(function(){if(!t&&Q.length===1){var u=Q[0];if(u.value===null&&(u.label===null||u.label===void 0))return[]}return Q.map(function(h){var v;return J(J({},h),{},{label:(v=h.label)!==null&&v!==void 0?v:h.value})})},[t,Q]),we=ue(function(){return new Set(Q.map(function(u){return u.value}))},[Q]);Ie(function(){if(t==="combobox"){var u,h=(u=Q[0])===null||u===void 0?void 0:u.value;f(Bt(h)?String(h):"")}},[Q]);var ge=zn(function(u,h){var v,p=h??u;return v={},ne(v,j.value,u),ne(v,j.label,p),v}),Xe=ue(function(){if(t!=="tags")return w;var u=xe(w),h=function(p){return F.has(p)};return xe(Q).sort(function(v,p){return v.value<p.value?-1:1}).forEach(function(v){var p=v.value;h(p)||u.push(ge(p,v.label))}),u},[ge,w,F,Q,t]),he=lo(Xe,j,I,me,_),Pe=ue(function(){return t!=="tags"||!I||he.some(function(u){return u[_||"value"]===I})||he.some(function(u){return u[j.value]===I})?he:[ge(I)].concat(xe(he))},[ge,_,t,he,I,j]),Ce=ue(function(){return T?xe(Pe).sort(function(u,h){return T(u,h)}):Pe},[Pe,T]),Ee=ue(function(){return Zt(Ce,{fieldNames:j,childrenAsData:Se})},[Ce,j,Se]),ke=function(h){var v=E(h);if(Re(v),se&&(v.length!==Q.length||v.some(function(B,Ke){var _e;return((_e=Q[Ke])===null||_e===void 0?void 0:_e.value)!==(B==null?void 0:B.value)}))){var p=m?v:v.map(function(B){return B.value}),$=v.map(function(B){return Pn(Ge(B.value))});se(de?p:p[0],de?$:$[0])}},rn=Ne(null),qe=te(rn,2),un=qe[0],Je=qe[1],Te=Ne(0),ln=te(Te,2),Ae=ln[0],wn=ln[1],fn=q!==void 0?q:t!=="combobox",cn=nn(function(u,h){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},p=v.source,$=p===void 0?"keyboard":p;wn(h),c&&t==="combobox"&&u!==null&&$==="keyboard"&&Je(String(u))},[c,t]),Qe=function(h,v,p){var $=function(){var Ye,$e=Ge(h);return[m?{label:$e==null?void 0:$e[j.label],value:h,key:(Ye=$e==null?void 0:$e.key)!==null&&Ye!==void 0?Ye:h}:h,Pn($e)]};if(v&&i){var B=$(),Ke=te(B,2),_e=Ke[0],Be=Ke[1];i(_e,Be)}else if(!v&&S&&p!=="clear"){var ce=$(),Ue=te(ce,2),yn=Ue[0],In=Ue[1];S(yn,In)}},vn=zn(function(u,h){var v,p=de?h.selected:!0;p?v=de?[].concat(xe(Q),[u]):[u]:v=Q.filter(function($){return $.value!==u}),ke(v),Qe(u,p),t==="combobox"?Je(""):(!Mn||O)&&(f(""),Je(""))}),Cn=function(h,v){ke(h);var p=v.type,$=v.values;(p==="remove"||p==="clear")&&$.forEach(function(B){Qe(B.value,!1,p)})},mn=function(h,v){if(f(h),Je(null),v.source==="submit"){var p=(h||"").trim();if(p){var $=Array.from(new Set([].concat(xe(we),[p])));ke($),Qe(p,!0),f("")}return}v.source!=="blur"&&(t==="combobox"&&ke(h),b==null||b(h))},pn=function(h){var v=h;t!=="tags"&&(v=h.map(function($){var B=k.get($);return B==null?void 0:B.value}).filter(function($){return $!==void 0}));var p=Array.from(new Set([].concat(xe(we),xe(v))));ke(p),p.forEach(function($){Qe($,!0)})},sn=ue(function(){var u=A!==!1&&G!==!1;return J(J({},x),{},{flattenOptions:Ee,onActiveValue:cn,defaultActiveFirstOption:fn,onSelect:vn,menuItemSelectedIcon:oe,rawValues:we,fieldNames:j,virtual:u,direction:K,listHeight:ae,listItemHeight:z,childrenAsData:Se,optionRender:X})},[x,Ee,cn,fn,vn,oe,we,j,A,G,ae,z,Se,X]);return y(at.Provider,{value:sn},y(oo,We({},De,{id:Oe,prefixCls:a,ref:e,omitDomProps:bo,mode:t,displayValues:an,onDisplayValuesChange:Cn,direction:K,searchValue:I,onSearch:mn,autoClearSearchValue:O,onSearchSplit:pn,dropdownMatchSelectWidth:G,OptionList:rt,emptyOptions:!Ee.length,activeValue:un,activeDescendantId:"".concat(Oe,"_list_").concat(Ae)})))}),ut=wo;ut.Option=ot;ut.OptGroup=tt;export{ot as O,ut as T,tt as a};
