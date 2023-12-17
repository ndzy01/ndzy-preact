import{a as I,y as h,A as K,f as Q,g as M,F as x,q as c,_,T,i as V,d as X}from"./preact-0e59a8f0.js";import{i as v,A as w,p as z,s as Y,m as Z,j as B,g as A,r as S,a as H}from"./@remix-run-a382267d.js";/**
 * React Router v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P(){return P=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},P.apply(this,arguments)}const L=x(null),ee=x(null),R=x(null),O=x(null),b=x({outlet:null,matches:[],isDataRoute:!1}),W=x(null);function xe(t,e){let{relative:r}=e===void 0?{}:e;N()||v(!1);let{basename:n,navigator:l}=c(R),{hash:i,pathname:a,search:f}=ae(t,{relative:r}),u=a;return n!=="/"&&(u=a==="/"?n:B([n,a])),l.createHref({pathname:u,search:f,hash:i})}function N(){return c(O)!=null}function j(){return N()||v(!1),c(O).location}function $(t){c(R).static||X(t)}function Ce(){let{isDataRoute:t}=c(b);return t?me():te()}function te(){N()||v(!1);let t=c(L),{basename:e,future:r,navigator:n}=c(R),{matches:l}=c(b),{pathname:i}=j(),a=JSON.stringify(A(l,r.v7_relativeSplatPath)),f=_(!1);return $(()=>{f.current=!0}),T(function(p,s){if(s===void 0&&(s={}),!f.current)return;if(typeof p=="number"){n.go(p);return}let o=S(p,JSON.parse(a),i,s.relative==="path");t==null&&e!=="/"&&(o.pathname=o.pathname==="/"?e:B([e,o.pathname])),(s.replace?n.replace:n.push)(o,s.state,s)},[e,n,a,i,t])}const re=x(null);function ne(t){let e=c(b).outlet;return e&&h(re.Provider,{value:t},e)}function ae(t,e){let{relative:r}=e===void 0?{}:e,{future:n}=c(R),{matches:l}=c(b),{pathname:i}=j(),a=JSON.stringify(A(l,n.v7_relativeSplatPath));return I(()=>S(t,JSON.parse(a),i,r==="path"),[t,a,i,r])}function oe(t,e){return le(t,e)}function le(t,e,r,n){N()||v(!1);let{navigator:l}=c(R),{matches:i}=c(b),a=i[i.length-1],f=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let p=j(),s;if(e){var o;let d=typeof e=="string"?z(e):e;u==="/"||(o=d.pathname)!=null&&o.startsWith(u)||v(!1),s=d}else s=p;let m=s.pathname||"/",E=u==="/"?m:m.slice(u.length)||"/",y=Z(t,{pathname:E}),g=de(y&&y.map(d=>Object.assign({},d,{params:Object.assign({},f,d.params),pathname:B([u,l.encodeLocation?l.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?u:B([u,l.encodeLocation?l.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),i,r,n);return e&&g?h(O.Provider,{value:{location:P({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:w.Pop}},g):g}function ie(){let t=pe(),e=H(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null;return h(M,null,h("h2",null,"Unexpected Application Error!"),h("h3",{style:{fontStyle:"italic"}},e),r?h("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},r):null,null)}const se=h(ie,null);class ue extends V{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?h(b.Provider,{value:this.props.routeContext},h(W.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ce(t){let{routeContext:e,match:r,children:n}=t,l=c(L);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),h(b.Provider,{value:e},n)}function de(t,e,r,n){var l;if(e===void 0&&(e=[]),r===void 0&&(r=null),n===void 0&&(n=null),t==null){var i;if((i=r)!=null&&i.errors)t=r.matches;else return null}let a=t,f=(l=r)==null?void 0:l.errors;if(f!=null){let s=a.findIndex(o=>o.route.id&&(f==null?void 0:f[o.route.id]));s>=0||v(!1),a=a.slice(0,Math.min(a.length,s+1))}let u=!1,p=-1;if(r&&n&&n.v7_partialHydration)for(let s=0;s<a.length;s++){let o=a[s];if((o.route.HydrateFallback||o.route.hydrateFallbackElement)&&(p=s),o.route.loader&&o.route.id&&r.loaderData[o.route.id]===void 0&&(!r.errors||r.errors[o.route.id]===void 0)){u=!0,p>=0?a=a.slice(0,p+1):a=[a[0]];break}}return a.reduceRight((s,o,m)=>{let E,y=!1,g=null,d=null;r&&(E=f&&o.route.id?f[o.route.id]:void 0,g=o.route.errorElement||se,u&&(p<0&&m===0?(ge("route-fallback",!1),y=!0,d=null):p===m&&(y=!0,d=o.route.hydrateFallbackElement||null)));let k=e.concat(a.slice(0,m+1)),D=()=>{let C;return E?C=g:y?C=d:o.route.Component?C=h(o.route.Component,null):o.route.element?C=o.route.element:C=s,h(ce,{match:o,routeContext:{outlet:s,matches:k,isDataRoute:r!=null},children:C})};return r&&(o.route.ErrorBoundary||o.route.errorElement||m===0)?h(ue,{location:r.location,revalidation:r.revalidation,component:g,error:E,children:D(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):D()},null)}var q=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(q||{}),U=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(U||{});function fe(t){let e=c(L);return e||v(!1),e}function he(t){let e=c(ee);return e||v(!1),e}function ve(t){let e=c(b);return e||v(!1),e}function G(t){let e=ve(),r=e.matches[e.matches.length-1];return r.route.id||v(!1),r.route.id}function pe(){var t;let e=c(W),r=he(U.UseRouteError),n=G(U.UseRouteError);return e!==void 0?e:(t=r.errors)==null?void 0:t[n]}function me(){let{router:t}=fe(q.UseNavigateStable),e=G(U.UseNavigateStable),r=_(!1);return $(()=>{r.current=!0}),T(function(l,i){i===void 0&&(i={}),r.current&&(typeof l=="number"?t.navigate(l):t.navigate(l,P({fromRouteId:e},i)))},[t,e])}const J={};function ge(t,e,r){!e&&!J[t]&&(J[t]=!0)}function Re(t){return ne(t.context)}function ye(t){v(!1)}function Pe(t){let{basename:e="/",children:r=null,location:n,navigationType:l=w.Pop,navigator:i,static:a=!1,future:f}=t;N()&&v(!1);let u=e.replace(/^\/*/,"/"),p=I(()=>({basename:u,navigator:i,static:a,future:P({v7_relativeSplatPath:!1},f)}),[u,f,i,a]);typeof n=="string"&&(n=z(n));let{pathname:s="/",search:o="",hash:m="",state:E=null,key:y="default"}=n,g=I(()=>{let d=Y(s,u);return d==null?null:{location:{pathname:d,search:o,hash:m,state:E,key:y},navigationType:l}},[u,s,o,m,E,y,l]);return g==null?null:h(R.Provider,{value:p},h(O.Provider,{children:r,value:g}))}function Ne(t){let{children:e,location:r}=t;return oe(F(e),r)}new Promise(()=>{});function F(t,e){e===void 0&&(e=[]);let r=[];return K.forEach(t,(n,l)=>{if(!Q(n))return;let i=[...e,l];if(n.type===M){r.push.apply(r,F(n.props.children,i));return}n.type!==ye&&v(!1),!n.props.index||!n.props.children||v(!1);let a={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=F(n.props.children,i)),r.push(a)}),r}export{R as N,Re as O,Pe as R,Ce as a,j as b,ae as c,Ne as d,ye as e,xe as u};
