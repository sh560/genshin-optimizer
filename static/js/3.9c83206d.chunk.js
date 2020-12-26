(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[3],{146:function(e,n,t){"use strict";var a=t(1),o=t(2),r=t(4),i=t.n(r),c=t(0),s=t.n(c),l=t(5),d=t.n(l),u={label:i.a.string.isRequired,onClick:i.a.func},f=s.a.forwardRef((function(e,n){var t=e.label,r=e.onClick,i=e.className,c=Object(o.a)(e,["label","onClick","className"]);return s.a.createElement("button",Object(a.a)({ref:n,type:"button",className:d()("close",i),onClick:r},c),s.a.createElement("span",{"aria-hidden":"true"},"\xd7"),s.a.createElement("span",{className:"sr-only"},t))}));f.displayName="CloseButton",f.propTypes=u,f.defaultProps={label:"Close"},n.a=f},196:function(e,n,t){"use strict";var a=t(1),o=t(2),r=t(5),i=t.n(r),c=t(0),s=t.n(c),l=t(23),d=t(24),u=t(6),f=t(107),b=t(146),m=t(35),p=t(11),h=t(43),v=Object(m.a)("h4");v.displayName="DivStyledAsH4";var g=Object(p.a)("alert-heading",{Component:v}),O=Object(p.a)("alert-link",{Component:h.a}),j={show:!0,transition:f.a,closeLabel:"Close alert"},y=s.a.forwardRef((function(e,n){var t=Object(l.a)(e,{show:"onClose"}),r=t.bsPrefix,c=t.show,m=t.closeLabel,p=t.className,h=t.children,v=t.variant,g=t.onClose,O=t.dismissible,j=t.transition,y=Object(o.a)(t,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),E=Object(u.a)(r,"alert"),w=Object(d.a)((function(e){g&&g(!1,e)})),N=!0===j?f.a:j,C=s.a.createElement("div",Object(a.a)({role:"alert"},N?y:void 0,{ref:n,className:i()(p,E,v&&E+"-"+v,O&&E+"-dismissible")}),O&&s.a.createElement(b.a,{onClick:w,label:m}),h);return N?s.a.createElement(N,Object(a.a)({unmountOnExit:!0},y,{ref:void 0,in:c}),C):c?C:null}));y.displayName="Alert",y.defaultProps=j,y.Link=O,y.Heading=g,n.a=y},201:function(e,n,t){"use strict";var a,o=t(1),r=t(2),i=t(5),c=t.n(i),s=t(49),l=t(42),d=t(39),u=t(50);function f(e){if((!a&&0!==a||e)&&l.a){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),a=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return a}var b=t(108),m=t(24),p=t(125),h=t(44),v=t(0),g=t.n(v);function O(e){void 0===e&&(e=Object(d.a)());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch(t){return e.body}}var j=t(116),y=t(34),E=t(4),w=t.n(E),N=t(18),C=t.n(N),k=t(117),x=t(133),R=t(130);function F(e,n){e.classList?e.classList.add(n):Object(R.a)(e,n)||("string"===typeof e.className?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}function S(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function T(e,n){e.classList?e.classList.remove(n):"string"===typeof e.className?e.className=S(e.className,n):e.setAttribute("class",S(e.className&&e.className.baseVal||"",n))}var A=t(20);function D(e){return"window"in e&&e.window===e?e:"nodeType"in(n=e)&&n.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var n}function H(e){var n;return D(e)||(n=e)&&"body"===n.tagName.toLowerCase()?function(e){var n=D(e)?Object(d.a)():Object(d.a)(e),t=D(e)||n.defaultView;return n.body.clientWidth<t.innerWidth}(e):e.scrollHeight>e.clientHeight}var M=["template","script","style"],P=function(e,n,t){[].forEach.call(e.children,(function(e){-1===n.indexOf(e)&&function(e){var n=e.nodeType,t=e.tagName;return 1===n&&-1===M.indexOf(t.toLowerCase())}(e)&&t(e)}))};function B(e,n){n&&(e?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden"))}var L,I=function(){function e(e){var n=void 0===e?{}:e,t=n.hideSiblingNodes,a=void 0===t||t,o=n.handleContainerOverflow,r=void 0===o||o;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=a,this.handleContainerOverflow=r,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=f()}var n=e.prototype;return n.isContainerOverflowing=function(e){var n=this.data[this.containerIndexFromModal(e)];return n&&n.overflowing},n.containerIndexFromModal=function(e){return function(e,n){var t=-1;return e.some((function(e,a){return!!n(e,a)&&(t=a,!0)})),t}(this.data,(function(n){return-1!==n.modals.indexOf(e)}))},n.setContainerStyle=function(e,n){var t={overflow:"hidden"};e.style={overflow:n.style.overflow,paddingRight:n.style.paddingRight},e.overflowing&&(t.paddingRight=parseInt(Object(A.a)(n,"paddingRight")||"0",10)+this.scrollbarSize+"px"),Object(A.a)(n,t)},n.removeContainerStyle=function(e,n){Object.assign(n.style,e.style)},n.add=function(e,n,t){var a=this.modals.indexOf(e),o=this.containers.indexOf(n);if(-1!==a)return a;if(a=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,n){var t=n.dialog,a=n.backdrop;P(e,[t,a],(function(e){return B(!0,e)}))}(n,e),-1!==o)return this.data[o].modals.push(e),a;var r={modals:[e],classes:t?t.split(/\s+/):[],overflowing:H(n)};return this.handleContainerOverflow&&this.setContainerStyle(r,n),r.classes.forEach(F.bind(null,n)),this.containers.push(n),this.data.push(r),a},n.remove=function(e){var n=this.modals.indexOf(e);if(-1!==n){var t=this.containerIndexFromModal(e),a=this.data[t],o=this.containers[t];if(a.modals.splice(a.modals.indexOf(e),1),this.modals.splice(n,1),0===a.modals.length)a.classes.forEach(T.bind(null,o)),this.handleContainerOverflow&&this.removeContainerStyle(a,o),this.hideSiblingNodes&&function(e,n){var t=n.dialog,a=n.backdrop;P(e,[t,a],(function(e){return B(!1,e)}))}(o,e),this.containers.splice(t,1),this.data.splice(t,1);else if(this.hideSiblingNodes){var r=a.modals[a.modals.length-1],i=r.backdrop;B(!1,r.dialog),B(!1,i)}}},n.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),z=t(131);function K(e){var n=e||(L||(L=new I),L),t=Object(v.useRef)({dialog:null,backdrop:null});return Object.assign(t.current,{add:function(e,a){return n.add(t.current,e,a)},remove:function(){return n.remove(t.current)},isTopModal:function(){return n.isTopModal(t.current)},setDialogRef:Object(v.useCallback)((function(e){t.current.dialog=e}),[]),setBackdropRef:Object(v.useCallback)((function(e){t.current.backdrop=e}),[])})}var _=Object(v.forwardRef)((function(e,n){var t=e.show,a=void 0!==t&&t,i=e.role,c=void 0===i?"dialog":i,s=e.className,d=e.style,u=e.children,f=e.backdrop,b=void 0===f||f,h=e.keyboard,E=void 0===h||h,w=e.onBackdropClick,N=e.onEscapeKeyDown,R=e.transition,F=e.backdropTransition,S=e.autoFocus,T=void 0===S||S,A=e.enforceFocus,D=void 0===A||A,H=e.restoreFocus,M=void 0===H||H,P=e.restoreFocusOptions,B=e.renderDialog,L=e.renderBackdrop,I=void 0===L?function(e){return g.a.createElement("div",e)}:L,_=e.manager,U=e.container,V=e.containerClassName,W=e.onShow,$=e.onHide,J=void 0===$?function(){}:$,q=e.onExit,G=e.onExited,Q=e.onExiting,X=e.onEnter,Y=e.onEntering,Z=e.onEntered,ee=Object(r.a)(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),ne=Object(z.a)(U),te=K(_),ae=Object(k.a)(),oe=Object(x.a)(a),re=Object(v.useState)(!a),ie=re[0],ce=re[1],se=Object(v.useRef)(null);Object(v.useImperativeHandle)(n,(function(){return te}),[te]),l.a&&!oe&&a&&(se.current=O()),R||a||ie?a&&ie&&ce(!1):ce(!0);var le=Object(m.a)((function(){if(te.add(ne,V),pe.current=Object(y.a)(document,"keydown",be),me.current=Object(y.a)(document,"focus",(function(){return setTimeout(ue)}),!0),W&&W(),T){var e=O(document);te.dialog&&e&&!Object(j.a)(te.dialog,e)&&(se.current=e,te.dialog.focus())}})),de=Object(m.a)((function(){var e;(te.remove(),null==pe.current||pe.current(),null==me.current||me.current(),M)&&(null==(e=se.current)||null==e.focus||e.focus(P),se.current=null)}));Object(v.useEffect)((function(){a&&ne&&le()}),[a,ne,le]),Object(v.useEffect)((function(){ie&&de()}),[ie,de]),Object(p.a)((function(){de()}));var ue=Object(m.a)((function(){if(D&&ae()&&te.isTopModal()){var e=O();te.dialog&&e&&!Object(j.a)(te.dialog,e)&&te.dialog.focus()}})),fe=Object(m.a)((function(e){e.target===e.currentTarget&&(null==w||w(e),!0===b&&J())})),be=Object(m.a)((function(e){E&&27===e.keyCode&&te.isTopModal()&&(null==N||N(e),e.defaultPrevented||J())})),me=Object(v.useRef)(),pe=Object(v.useRef)(),he=R;if(!ne||!(a||he&&!ie))return null;var ve=Object(o.a)({role:c,ref:te.setDialogRef,"aria-modal":"dialog"===c||void 0},ee,{style:d,className:s,tabIndex:-1}),ge=B?B(ve):g.a.createElement("div",ve,g.a.cloneElement(u,{role:"document"}));he&&(ge=g.a.createElement(he,{appear:!0,unmountOnExit:!0,in:!!a,onExit:q,onExiting:Q,onExited:function(){ce(!0);for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];null==G||G.apply(void 0,n)},onEnter:X,onEntering:Y,onEntered:Z},ge));var Oe=null;if(b){var je=F;Oe=I({ref:te.setBackdropRef,onClick:fe}),je&&(Oe=g.a.createElement(je,{appear:!0,in:!!a},Oe))}return g.a.createElement(g.a.Fragment,null,C.a.createPortal(g.a.createElement(g.a.Fragment,null,Oe,ge),ne))})),U={show:w.a.bool,container:w.a.any,onShow:w.a.func,onHide:w.a.func,backdrop:w.a.oneOfType([w.a.bool,w.a.oneOf(["static"])]),renderDialog:w.a.func,renderBackdrop:w.a.func,onEscapeKeyDown:w.a.func,onBackdropClick:w.a.func,containerClassName:w.a.string,keyboard:w.a.bool,transition:w.a.elementType,backdropTransition:w.a.elementType,autoFocus:w.a.bool,enforceFocus:w.a.bool,restoreFocus:w.a.bool,restoreFocusOptions:w.a.shape({preventScroll:w.a.bool}),onEnter:w.a.func,onEntering:w.a.func,onEntered:w.a.func,onExit:w.a.func,onExiting:w.a.func,onExited:w.a.func,manager:w.a.instanceOf(I)};_.displayName="Modal",_.propTypes=U;var V=Object.assign(_,{Manager:I}),W=(t(59),t(8)),$=t(45),J=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",q=".sticky-top",G=".navbar-toggler",Q=function(e){function n(){return e.apply(this,arguments)||this}Object(W.a)(n,e);var t=n.prototype;return t.adjustAndStore=function(e,n,t){var a,o=n.style[e];n.dataset[e]=o,Object(A.a)(n,((a={})[e]=parseFloat(Object(A.a)(n,e))+t+"px",a))},t.restore=function(e,n){var t,a=n.dataset[e];void 0!==a&&(delete n.dataset[e],Object(A.a)(n,((t={})[e]=a,t)))},t.setContainerStyle=function(n,t){var a=this;if(e.prototype.setContainerStyle.call(this,n,t),n.overflowing){var o=f();Object($.a)(t,J).forEach((function(e){return a.adjustAndStore("paddingRight",e,o)})),Object($.a)(t,q).forEach((function(e){return a.adjustAndStore("marginRight",e,-o)})),Object($.a)(t,G).forEach((function(e){return a.adjustAndStore("marginRight",e,o)}))}},t.removeContainerStyle=function(n,t){var a=this;e.prototype.removeContainerStyle.call(this,n,t),Object($.a)(t,J).forEach((function(e){return a.restore("paddingRight",e)})),Object($.a)(t,q).forEach((function(e){return a.restore("marginRight",e)})),Object($.a)(t,G).forEach((function(e){return a.restore("marginRight",e)}))},n}(I),X=t(107),Y=t(11),Z=Object(Y.a)("modal-body"),ee=g.a.createContext({onHide:function(){}}),ne=t(6),te=g.a.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,i=e.contentClassName,s=e.centered,l=e.size,d=e.children,u=e.scrollable,f=Object(r.a)(e,["bsPrefix","className","contentClassName","centered","size","children","scrollable"]),b=(t=Object(ne.a)(t,"modal"))+"-dialog";return g.a.createElement("div",Object(o.a)({},f,{ref:n,className:c()(b,a,l&&t+"-"+l,s&&b+"-centered",u&&b+"-scrollable")}),g.a.createElement("div",{className:c()(t+"-content",i)},d))}));te.displayName="ModalDialog";var ae=te,oe=Object(Y.a)("modal-footer"),re=t(146),ie=g.a.forwardRef((function(e,n){var t=e.bsPrefix,a=e.closeLabel,i=e.closeButton,s=e.onHide,l=e.className,d=e.children,u=Object(r.a)(e,["bsPrefix","closeLabel","closeButton","onHide","className","children"]);t=Object(ne.a)(t,"modal-header");var f=Object(v.useContext)(ee),b=Object(m.a)((function(){f&&f.onHide(),s&&s()}));return g.a.createElement("div",Object(o.a)({ref:n},u,{className:c()(l,t)}),d,i&&g.a.createElement(re.a,{label:a,onClick:b}))}));ie.displayName="ModalHeader",ie.defaultProps={closeLabel:"Close",closeButton:!1};var ce,se=ie,le=t(35),de=Object(le.a)("h4"),ue=Object(Y.a)("modal-title",{Component:de}),fe={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:ae};function be(e){return g.a.createElement(X.a,e)}function me(e){return g.a.createElement(X.a,e)}var pe=g.a.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,i=e.style,O=e.dialogClassName,j=e.contentClassName,y=e.children,E=e.dialogAs,w=e["aria-labelledby"],N=e.show,C=e.animation,k=e.backdrop,x=e.keyboard,R=e.onEscapeKeyDown,F=e.onShow,S=e.onHide,T=e.container,A=e.autoFocus,D=e.enforceFocus,H=e.restoreFocus,M=e.restoreFocusOptions,P=e.onEntered,B=e.onExit,L=e.onExiting,I=e.onEnter,z=e.onEntering,K=e.onExited,_=e.backdropClassName,U=e.manager,W=Object(r.a)(e,["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"]),$=Object(v.useState)({}),J=$[0],q=$[1],G=Object(v.useState)(!1),X=G[0],Y=G[1],Z=Object(v.useRef)(!1),te=Object(v.useRef)(!1),ae=Object(v.useRef)(null),oe=Object(b.a)(),re=oe[0],ie=oe[1],se=Object(m.a)(S);t=Object(ne.a)(t,"modal"),Object(v.useImperativeHandle)(n,(function(){return{get _modal(){return re}}}),[re]);var le=Object(v.useMemo)((function(){return{onHide:se}}),[se]);function de(){return U||(ce||(ce=new Q),ce)}function ue(e){if(l.a){var n=de().isContainerOverflowing(re),t=e.scrollHeight>Object(d.a)(e).documentElement.clientHeight;q({paddingRight:n&&!t?f():void 0,paddingLeft:!n&&t?f():void 0})}}var fe=Object(m.a)((function(){re&&ue(re.dialog)}));Object(p.a)((function(){Object(u.a)(window,"resize",fe),ae.current&&ae.current()}));var pe=function(){Z.current=!0},he=function(e){Z.current&&re&&e.target===re.dialog&&(te.current=!0),Z.current=!1},ve=function(){Y(!0),ae.current=Object(h.a)(re.dialog,(function(){Y(!1)}))},ge=function(e){"static"!==k?te.current||e.target!==e.currentTarget?te.current=!1:S():function(e){e.target===e.currentTarget&&ve()}(e)},Oe=Object(v.useCallback)((function(e){return g.a.createElement("div",Object(o.a)({},e,{className:c()(t+"-backdrop",_,!C&&"show")}))}),[C,_,t]),je=Object(o.a)({},i,{},J);C||(je.display="block");return g.a.createElement(ee.Provider,{value:le},g.a.createElement(V,{show:N,ref:ie,backdrop:k,container:T,keyboard:!0,autoFocus:A,enforceFocus:D,restoreFocus:H,restoreFocusOptions:M,onEscapeKeyDown:function(e){x||"static"!==k?x&&R&&R(e):(e.preventDefault(),ve())},onShow:F,onHide:S,onEnter:function(e){e&&(e.style.display="block",ue(e));for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];I&&I.apply(void 0,[e].concat(t))},onEntering:function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];z&&z.apply(void 0,[e].concat(t)),Object(s.a)(window,"resize",fe)},onEntered:P,onExit:function(e){ae.current&&ae.current();for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];B&&B.apply(void 0,[e].concat(t))},onExiting:L,onExited:function(e){e&&(e.style.display="");for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];K&&K.apply(void 0,t),Object(u.a)(window,"resize",fe)},manager:de(),containerClassName:t+"-open",transition:C?be:void 0,backdropTransition:C?me:void 0,renderBackdrop:Oe,renderDialog:function(e){return g.a.createElement("div",Object(o.a)({role:"dialog"},e,{style:je,className:c()(a,t,X&&t+"-static"),onClick:k?ge:void 0,onMouseUp:he,"aria-labelledby":w}),g.a.createElement(E,Object(o.a)({},W,{role:"document",onMouseDown:pe,className:O,contentClassName:j}),y))}}))}));pe.displayName="Modal",pe.defaultProps=fe,pe.Body=Z,pe.Header=se,pe.Title=ue,pe.Footer=oe,pe.Dialog=ae,pe.TRANSITION_DURATION=300,pe.BACKDROP_TRANSITION_DURATION=150;n.a=pe}}]);
//# sourceMappingURL=3.9c83206d.chunk.js.map