"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[42858],{32346:(e,t,n)=>{n.d(t,{Z:()=>i});function i(e){return("undefined"==typeof window||!Object.prototype.hasOwnProperty.call(window,"requestAnimationFrame"))&&e&&e(),window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{e&&e()})})}},86785:(e,t,n)=>{n.d(t,{G6:()=>a,i7:()=>r,oi:()=>i,u$:()=>l,un:()=>s,vU:()=>o,w1:()=>d});let i=Object.freeze({OTHER:0,CHROME:1,SAFARI:2,IE:3,FIREFOX:4,OPERA:5,EDGE:6}),l=e=>e?e.includes("Chrome")?i.CHROME:e.includes("Safari")?i.SAFARI:e.includes("Firefox")?i.FIREFOX:e.includes("Opera")?i.OPERA:e.includes("IE")?i.IE:e.includes("Edge")?i.EDGE:i.OTHER:i.OTHER;function a(e){return l(e)===i.SAFARI}function r(e){return l(e)===i.CHROME}function o(e){return l(e)===i.FIREFOX}function s(e){return l(e)===i.EDGE}function d(e){return l(e)===i.IE}},286988:(e,t,n)=>{n.d(t,{Z:()=>l,v:()=>i});let i=()=>"undefined"!=typeof navigator&&"getInstalledRelatedApps"in navigator;async function l(){if(!i())return[];try{let e=await navigator.getInstalledRelatedApps();return e}catch(e){return[]}}},259866:(e,t,n)=>{n.d(t,{Z:()=>i});function i(e){return function e(t,n){let i;if(null==t||"object"!=typeof t&&"function"!=typeof t)return t;let l=n.find(e=>e.value===t);if(l)return l.result;let a=Object.prototype.toString.call(t);switch(a){case"[object Array]":i=Array(t.length);break;case"[object Set]":i=new Set;break;case"[object Object]":case"[object Arguments]":i={};break;case"[object Map]":i=new Map;break;default:return t}let r=[...n,{value:t,result:i}];switch(a){case"[object Array]":t.forEach((t,n)=>{i[n]=e(t,r)});break;case"[object Set]":t.forEach(t=>{i.add(e(t,r))});break;case"[object Object]":case"[object Arguments]":Object.entries(t).forEach(([t,n])=>{i[t]=e(n,r)});break;case"[object Map]":t.forEach((t,n)=>{i.set(n,e(t,r))})}return i}(e,[])}},119936:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var i=n(667294),l=n(883119),a=n(32346),r=n(844683),o=n(140017),s=n(30378),d=n(5859),p=n(55202),c=n(217058),u=n(554786),_=n(239821),m=n(785893);let h=()=>{if(document.body){let{body:{style:e}}=document;e.overflow="hidden",e.touchAction="none"}},y=()=>{if(document.body){let{body:{style:e}}=document;e.overflow="visible",e.touchAction="auto"}};function w({accessibilityModalLabel:e,align:t="center",allowClickAndDrag:n,allowScroll:w=!1,children:f,closeOnOutsideClick:x=!0,footer:g,heading:v,isOpen:b,mobileAccessibilityCloseIconLabel:j,mobileHideCloseIcon:A,mobileIsFooter:k,mobileIsFullscreen:E,mobileIsSlideUp:P,onDismiss:S,subHeading:T,type:I,zIndex:Z}){let O=(0,o.ZP)(),{isRTL:C}=(0,d.B)(),R=(0,i.useRef)(!1),[z,L]=(0,i.useState)(!1),{setAppFocusState:U}=(0,_.I)(),F=(0,u.ZP)();return((0,i.useEffect)(()=>(R.current=(0,a.Z)(()=>{R.current&&L(!0)}),()=>{"undefined"!=typeof window&&Object.prototype.hasOwnProperty.call(window,"cancelAnimationFrame")&&R.current&&(window.cancelAnimationFrame(R.current),R.current=null)}),[]),(0,i.useEffect)(()=>(b?(s.Z.pause(),U(!1),(0,c.My)(`mweb_unauth.mobile_modal.${I||"unknown_type"}.did_mount.is_open.true`)):(s.Z.resume(),U(!0)),()=>{b&&(s.Z.resume(),U(!0),(0,c.My)(`mweb_unauth.mobile_modal.${I||"unknown_type"}.did_mount.is_open.false`))}),[U,b]),(0,i.useEffect)(()=>{let e=b&&!w;return e&&h(),()=>{e&&y()}},[b,w]),b)?(0,m.jsx)(p.Z,{allowClickAndDrag:n,children:(0,m.jsx)(l.mh,{children:(0,m.jsxs)(l.xu,{"aria-label":e,display:"inlineBlock",position:"relative",role:"dialog",zIndex:Z||r.ZM,children:[(0,m.jsx)(l.iP,{accessibilityLabel:O.bt("Mobile sign-up modal mask", "Mobile Signup Modal Mask", "mweb.signup_modal.mask", undefined, true),dataTestId:"mobile-modal-mask-overlay",onTap:({event:e})=>{e.clientX&&e.clientY&&(0,c.tj)(`mweb_unauth.mobile_modal.wash_tap.${I||"unknown_type"}.with_dismissal`,{x:e.clientX,y:e.clientY}),x&&S()},tapStyle:"none",children:(0,m.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(0, 0, 0, .5)",touchAction:"none",transitionProperty:"opacity",transitionTimingFunction:"ease-out"}},height:"100%",left:!0,position:"fixed",top:!0,width:"100%",zIndex:new l.Ry(1)})}),(0,m.jsxs)(l.xu,{color:"default",dangerouslySetInlineStyle:P?(0,r.Vf)({isFullscreen:E,isTablet:"tablet"===F,isShowing:z,isRelatedInterestsModal:"related_interests_modal"===I}):(0,r.JN)({variant:E?"fullscreen":"tablet"===F?"tablet":k?"footer":"signup"===I?"signup":void 0}),"data-test-id":"mobile-signup-mask",position:"fixed",children:[(0,m.jsxs)(l.kC,{alignItems:"center",gap:{row:2,column:0},justifyContent:"start",width:"100%",children:[j&&!A?(0,m.jsx)(l.xu,{"data-test-id":"mobile-modal-cancel-button",padding:2,children:(0,m.jsx)(l.hU,{accessibilityLabel:j,icon:"cancel",iconColor:"darkGray",onClick:S,padding:4,size:"sm"})}):null,v?(0,m.jsx)(l.kC.Item,{flex:"grow",children:(0,m.jsx)(l.kC,{alignItems:"center",direction:"column",justifyContent:"center",children:(0,m.jsxs)(l.xu,{dangerouslySetInlineStyle:{__style:j&&!A?{marginRight:C?-10:50,marginLeft:C?50:-10}:{}},"data-test-id":"mobile-modal-heading",children:[E?v:(0,m.jsx)(l.xv,{align:t,size:"400",weight:"bold",children:v}),T?(0,m.jsx)(l.xv,{align:t,children:T}):null]})})}):null]}),(0,m.jsxs)(l.xu,{overflow:"auto",children:[f,g]})]})]})})}):null}},422210:(e,t,n)=>{n.d(t,{Z:()=>i});function i(e){if(!e)return!1;let t=new Date(e);return t.setDate(t.getDate()+28),new Date().getTime()<t.getTime()}},823987:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(667294);let l=(0,i.createContext)("undefined"!=typeof window?window:null)},344064:(e,t,n)=>{n.d(t,{o$:()=>l,ty:()=>a,vE:()=>r});var i=n(342513);let{Provider:l,MaybeConsumer:a,useMaybeHook:r}=(0,i.Z)("inviteContext")},194602:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(667294);let l=()=>()=>{},a=()=>!1,r=()=>!0,o=()=>{let e=(0,i.useSyncExternalStore)(l,a,r);return e}},239821:(e,t,n)=>{n.d(t,{g:()=>u,I:()=>c});var i=n(667294),l=n(342513),a=n(705895),r=n(259866);let o={appInFocus:!0,footerPlusButtonVisible:!0,isAutoplay:!1,showTypeaheadOverlay:!1,videosAutoplaying:{currentlyPlayingOrganicVideoId:null,organicVideosAutoplaying:{},promotedVideosAutoplaying:{}},viewportSize:"lg"},s=(e=o,t)=>{if("TOGGLE_TYPEAHEAD_OVERLAY"===t.type&&e.showTypeaheadOverlay!==t.payload)return{...e,showTypeaheadOverlay:t.payload};if("SET_CURRENT_VIDEO"===t.type){let{payload:n}=t,{pinId:i,isPromoted:l,currentTime:a,allowMultipleOrganicVideos:o}=n,{videosAutoplaying:s}=e,{currentlyPlayingOrganicVideoId:d,promotedVideosAutoplaying:p,organicVideosAutoplaying:c}=s,u=(0,r.Z)(p),_=(0,r.Z)(c);return l||!d||o?(l?u[i]={pinId:i,currentTime:a,paused:!1}:_[i]={pinId:i,currentTime:a,paused:!1},{...e,videosAutoplaying:{currentlyPlayingOrganicVideoId:l?d:i,promotedVideosAutoplaying:u,organicVideosAutoplaying:_}}):e}if("SET_IS_AUTOPLAY"===t.type&&e.isAutoplay!==t.payload)return{...e,isAutoplay:t.payload};if("PAUSE_CURRENT_VIDEO"===t.type){let{payload:n}=t,{pinId:i,isPromoted:l,currentTime:a}=n,{videosAutoplaying:o}=e,{promotedVideosAutoplaying:s,organicVideosAutoplaying:d}=o,p=(0,r.Z)(s),c=(0,r.Z)(d);return l?p[i]={...p[i],paused:!0,currentTime:a}:c[i]={...c[i],paused:!0,currentTime:a},{...e,videosAutoplaying:{currentlyPlayingOrganicVideoId:null,promotedVideosAutoplaying:p,organicVideosAutoplaying:c}}}if("SET_APP_FOCUS_STATE"===t.type&&e.appInFocus!==t.payload)return{...e,appInFocus:t.payload};if("SET_VIEWPORT_SIZE"===t.type&&e.viewportSize!==t.payload)return{...e,viewportSize:t.payload};if("SET_FOOTER_VISIBILITY_STATE"===t.type&&e.footerPlusButtonVisible!==t.payload)return{...e,footerPlusButtonVisible:t.payload};return e};var d=n(785893);let{Provider:p,useHook:c}=(0,l.Z)("AppUI");function u({children:e}){let[t,n]=(0,i.useReducer)(s,o),l=(0,i.useCallback)(e=>n({type:"PAUSE_CURRENT_VIDEO",payload:e}),[]),r=(0,i.useCallback)(e=>n({type:"SET_APP_FOCUS_STATE",payload:e}),[]),c=(0,i.useCallback)(e=>n({type:"SET_CURRENT_VIDEO",payload:e}),[]),u=(0,i.useCallback)(e=>n({type:"SET_FOOTER_VISIBILITY_STATE",payload:e}),[]),_=(0,i.useCallback)(e=>n({type:"SET_IS_AUTOPLAY",payload:e}),[]),m=(0,i.useCallback)(e=>n({type:"SET_VIEWPORT_SIZE",payload:e}),[]),h=(0,i.useCallback)(e=>n({type:"TOGGLE_TYPEAHEAD_OVERLAY",payload:e}),[]),y=(0,i.useMemo)(()=>({pauseAutoplay:l,setCurrentVideo:c,setFooterPlusButtonVisible:u,setIsAutoplay:_,setViewportSize:m,toggleTypeaheadOverlay:h,setAppFocusState:r,appUI:t}),[l,c,u,_,m,h,r,t]);return(0,i.useEffect)(()=>{a.Z.onSessionResume(()=>{r(!0)}).onSessionPause(()=>{r(!1)})},[r]),(0,d.jsx)(p,{value:y,children:e})}},870526:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(667294),l=n(883119),a=n(490166),r=n(785893);let o=40,s=70,d={__style:{borderRadius:"4px",padding:"10px 14px"}},p={__style:{borderWidth:"1px",borderStyle:"solid",borderColor:"white"}},c={__style:{borderRadius:"4px",padding:"10px 14px 9px 8px",whiteSpace:"nowrap"}},u=e=>({__style:{borderRadius:"24px",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"14px",paddingRight:"14px",...e}}),_=e=>"transparent"===e||"dark"===e?"inverse":"primary"===e?"light":"default",m=({color:e,icon:t})=>t?c:"transparent"===e?{__style:{...d.__style,...p.__style}}:d,h=({accessibilityLabel:e,color:t,customStyles:n,forwardedRef:d,icon:p,inline:c=!1,minHeight:h=o,minWidth:y=s,onTouch:w,pressState:f,shape:x,text:g})=>{let[v,b]=(0,i.useState)(!1),j=_(t),A=m({color:t,icon:p}),k=(0,r.jsx)(l.xu,{onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),position:"relative",children:(0,r.jsx)(l.xu,{color:"primary"===t&&v?"errorBase":t,dangerouslySetInlineStyle:"pill"===x?u(n):A,display:c?"inlineBlock":"flex",justifyContent:"center",minHeight:h,minWidth:y,children:(0,r.jsxs)(l.kC,{alignItems:"center",justifyContent:"center",children:[p&&(0,r.jsx)(l.xu,{paddingX:"check"===p?2:0,children:(0,r.jsx)(l.JO,{accessibilityLabel:e,color:j,icon:p,inline:!0,size:"check"===p?16:20})}),(0,r.jsx)(l.xv,{color:j,inline:!0,lineClamp:1,size:"300",weight:"bold",children:g})]})})});return w?(0,r.jsx)(a.Z,{onTouch:w,pressState:f||"none",rounding:"pill"===x?"pill":2,children:(0,r.jsx)(l.xu,{ref:d,children:k})}):k}},233731:(e,t,n)=>{n.d(t,{MZ:()=>Z,di:()=>C,Ai:()=>O});var i=n(667294),l=n(616550),a=n(883119),r=n(286988),o=n(587703),s=n(422210),d=n(96157),p=n(805783),c=n(5859),u=n(191313),_=n(573810),m=n(217058),h=n(149722),y=n(90647),w=n(547010),f=n(773616),x=n(870526),g=n(460270),v=n(263148),b=n(862249),j=n(171966);let A=({children:e,external:t,externalQueryParams:n,target:i,href:a,features:r})=>{let o=(0,l.k6)();if(!a)return null;let s=(0,g.Z)(a);return e({navigate:e=>{e.preventDefault(),(0,b.Z)({url:s})||t?"undefined"!=typeof window&&window.Windows?(0,j.Z)(s):(0,v.Gj)(s,{queryParams:n,features:r}):(0,v.G3)({event:e,href:a,history:o,target:"blank"===i?"blank":null})}})};var k=n(785893),E=n(86264),P=n(669177),S=n(386008);let T=e=>"string"==typeof e?e:`${e.pathname||""}${e.search?`?${e.search}`:""}`,I=(e,t=!1)=>function({isAppUpsellDisabled:n,...x}){let{children:g,clientTrackingParams:v,deeplinkUri:b,external:j,onTouch:A,refresh:I,to:Z,viewParameter:O,viewType:C}=x,R=(0,f.Z)(),[z,L]=(0,i.useState)(!1),[U,F]=(0,i.useState)(!1),[M,D]=(0,i.useState)(!1),{isAuth:B}=(0,h.Z)(),{userAgent:{platform:N},locale:G}=(0,c.B)(),V=(0,S.Tt)(),$=(0,o.Z)(),H=(0,l.TH)();(0,i.useEffect)(()=>{(async function(){if((0,r.v)()){D(!0);let e=await (0,r.Z)();e.length>0&&F(!0)}})()},[]),(0,i.useEffect)(()=>{B||"true"===(0,_.qn)("hasAppInstalledWasLogged")||((0,m.My)(`unauth.app_upsell.has_app.${U.toString()}`),(0,_.Nh)("hasAppInstalledWasLogged","true"))},[U,B]);let W=()=>{$({event_type:1701,view_type:C,view_parameter:O}),z&&L(!1)};return(0,k.jsxs)(a.xu,{"data-test-id":"deeplink-wrapper",children:[z&&(0,k.jsx)(w.Z,{app_upsell_type:"deep-link-app-upsell-modal",clientTrackingParams:v,deepLinkUri:b,isOpen:!0,onDismiss:()=>{$({component:14157,element:10308,event_type:10220,view_type:C||202,view_parameter:O,aux_data:{app_upsell_type:"deep-link-app-upsell-modal"}})},onOpenInApp:()=>{(0,u.Nh)("deeplinkBehavior","branchfallback"),W()},shouldTrackDismiss:!0,to:Z,viewParameter:O,viewType:C}),(0,k.jsx)(E.Z,{children:i=>(0,k.jsx)(e,{...x,onTouch:e=>{let l=R&&!n&&B&&!j&&!I&&!(0,p.FP)(window)&&!("ios"===N&&(G||"").startsWith("ar"))&&(0,P.kp)((0,s.Z)(V?.created_at));if(l){let t=!0,n=!1,l="string"==typeof b&&(b||"").startsWith("/pin/")&&((0,d.uM)(H)||(0,d.am)(H)||(0,d.C$)(H));l?M&&U&&b&&"android"===N&&(t=!1):(t=!1,n=!0),t?(e.stopPropagation(),e.preventDefault(),L(!0)):n||(e.stopPropagation(),e.preventDefault(),$({component:14347,element:13582,event_type:3830,view_type:20,view_parameter:3844,aux_data:{upsell_reason:"deep-link-app-upsell-modal"}}),i(b??(0,y.B)(H,"android"===N),"deep-link-app-upsell-modal"))}else"branchfallback"!==(0,u.qn)("deeplinkBehavior")||(0,_.qn)("fallbackAttempt")||(e.stopPropagation(),e.preventDefault(),(0,_.Nh)("fallbackAttempt",1),i(b,"deep-link-app-upsell-modal",`${window.location.origin}${T(Z)}`),W());!(t&&l)&&A&&A(e)},children:g})})]})},Z=I(({accessibilityLabel:e,children:t,external:n,externalQueryParams:i,features:l,inline:r=!1,newTab:o,nofollow:s,onTouch:d,onBlur:p,onFocus:c,pressState:u,rounding:_,to:m})=>(0,k.jsx)(A,{external:n,externalQueryParams:i,features:l,href:m,target:o?"blank":null,children:({navigate:n})=>(0,k.jsx)(a.rU,{accessibilityLabel:e,display:r?"inlineBlock":"block",href:(0,g.Z)(m),onBlur:p?({event:e})=>p(e):void 0,onClick:({event:e,dangerouslyDisableOnNavigation:t})=>{t(),d?.(e),e.defaultPrevented||n(e)},onFocus:c?({event:e})=>c(e):void 0,rel:s?"nofollow":"none",rounding:_,tapStyle:(Array.isArray(u)?u:[u]).includes("compress")?"compress":"none",underline:"none",children:t})})),O=I(({external:e,externalQueryParams:t,newTab:n,onTouch:i,to:l,...a})=>(0,k.jsx)(A,{external:e,externalQueryParams:t,href:l,target:n?"blank":null,children:({navigate:e})=>(0,k.jsx)(x.Z,{onTouch:t=>{i?.(t),t.defaultPrevented||e(t)},...a})})),C=I(x.Z,!0)},86264:(e,t,n)=>{n.d(t,{Z:()=>b});var i=n(214877),l=n(340523),a=n(5859),r=n(344064),o=n(669177),s=n(286988),d=n(624797),p=n(953565);let c="http://play.google.com/store/apps/details?id=com.pinterest",u=["access_token","new_password","new_password_confirm","password","next"],_=(e,t)=>t?(0,d.ru)(e,{invite_code:t}):e,m=(e,t,n)=>{if("ios"===t&&"string"==typeof e&&e.startsWith("discover/article/")){let t=e.split("/")[2];e=`discover_article/${t}/?is_deeplink=1`}return("string"==typeof e&&"shopping/"===e&&(e="?is_deeplink=1"),"string"==typeof e)?_(e,n):"ios"===t||"ipad"===t?_(e.iOS,n):"android"===t?_(e.android,n):null},h=({deeplinkUri:e,invite_code:t,platform:n,fallbackUrl:i,unauthId:l,app_upsell_type:a})=>({deeplink_path:m(e,n,t),current_page_url:(0,d.Gw)("undefined"!=typeof window?window.location.href:"",u),install_id:l,utm_source:140,utm_medium:2152,app_upsell_type:a,...i?{af_r:i}:null}),y=({deeplinkUri:e,invite_code:t,platform:n,unauthId:i,app_upsell_type:l})=>{let a=JSON.stringify({deeplink_path:m(e,n,t),current_page_url:(0,d.Gw)("undefined"!=typeof window?window.location.href:"",u),install_id:i}),r=(0,d.XP)({utm_source:"mweb",utm_medium:"upsell",utm_content:a,app_upsell_type:l});return{referrer:r}},w=({unauthId:e,app_upsell_type:t})=>{let n=(0,d.XP)({utm_source:"mweb",utm_medium:"upsell",utm_campaign:"twa",utm_content:e,app_upsell_type:t});return{referrer:encodeURI(n)}},f=({isAuthenticated:e,deeplinkUri:t,fallbackUrl:n,invite_code:i,logContextEvent:l,platform:a,redirectToLite:r,unauthId:o,userAgent:u,app_upsell_type:_})=>{if(l?.({component:14347,element:13582,event_type:701,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:_}}),t){let m=h({isAuthenticated:e,deeplinkUri:t,fallbackUrl:n,invite_code:i,platform:a,unauthId:o,userAgent:u,app_upsell_type:_});if((0,p.nP)("mweb.deeplink",{sampleRate:1,tags:{platform:a}}),i&&(0,p.nP)("mweb.deeplink.invite_code",{sampleRate:1}),(0,p.nP)("mweb.deeplink.unauthId",{sampleRate:1,tags:{withUnauthId:!!o}}),r){(0,p.nP)("mweb.deeplink.lite_link",{sampleRate:1}),l?.({component:14347,element:13582,event_type:14540,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:_}});let e=w({unauthId:o,app_upsell_type:_});window.location.href=(0,d.ru)("http://play.google.com/store/apps/details?id=com.pinterest.twa",e)}else if("android"===a){let e=y({deeplinkUri:t,invite_code:i,platform:a,unauthId:o,app_upsell_type:_});(0,s.v)()?(0,s.Z)().then(t=>{if(t.length>0){let e=(0,d.ru)(window.location.href,m);l?.({component:14347,element:13582,event_type:703,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:_}});let t=window.open(e);t||l?.({component:14347,element:13582,event_type:702,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:_}})}else l?.({component:14347,element:13582,event_type:14538,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:_}}),window.location.href=(0,d.ru)(c,e)}).catch(()=>{(0,p.nP)("mweb_android.deeplink.playStore.error",{sampleRate:1})}):(l?.({component:14347,element:13582,event_type:14538,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:_}}),window.location.href=(0,d.ru)(c,e))}else{if((0,p.nP)("mweb.deeplink.appsflyer_link",{sampleRate:1}),"ios"===a&&"undefined"!=typeof window&&window.location.href.includes("show_yip_modal")){window.location.href=(0,d.ru)("https://pinterest.com/pinterest-predicts",m);return}l?.({component:14347,element:13582,event_type:14539,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:_}}),window.location.href=(0,d.ru)("https://pinterest.onelink.me/TVSr/21e04bfd",m)}}};var x=n(785893);function g({children:e,invite_code:t}){let{isAuthenticated:n,isBot:r,unauthId:s,userAgent:{platform:d,raw:p}}=(0,a.B)(),{logContextEvent:c}=(0,i.v)(),{checkExperiment:u}=(0,l.F)(),_=async(e,i,l)=>{c({component:14347,element:13582,event_type:700,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:i}}),f({isAuthenticated:n,checkExperiment:u,deeplinkUri:e,fallbackUrl:l,invite_code:t,logContextEvent:c,platform:d,redirectToLite:(0,o.Rp)({isBot:r,platform:d,userAgent:p}),unauthId:s,userAgent:p,app_upsell_type:i})};return e(_)}let v=e=>(0,x.jsx)(r.ty,{children:t=>(0,x.jsx)(g,{...e,invite_code:t})});v.displayName="DeepLinkNavigator";let b=v},184972:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(667294),l=n(340523),a=n(616550),r=n(883119),o=n(214877),s=n(140017),d=n(785893);function p({text:e,isSelected:t,icon:n,animationType:i,position:l,hasStartPulling:a,isExecuted:o}){return(0,d.jsxs)(r.xu,{alignItems:"center",direction:"column",display:"flex",marginBottom:6,children:[(0,d.jsx)(r.xu,{color:t?"dark":"secondary",dangerouslySetInlineStyle:t&&o?{__style:{transform:"rotate(360deg)",transition:"all .9s ease-out"}}:{__style:{transition:"all .3s ease-out",marginTop:t&&"move"===i?40:0}},"data-test-id":"action-animated-icon",padding:a?4:0,rounding:"circle",children:(0,d.jsx)(r.JO,{accessibilityLabel:e,color:t?"light":"dark",icon:n,size:100*l<24?100*l:24})}),(0,d.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{opacity:t?1:0,transition:"all .3s ease-out"}},"data-test-id":"action-animated-text",padding:1,children:(0,d.jsx)(r.xv,{align:"center",size:"100",children:e})})]})}var c=n(339189);function u({enabled:e,onPull:t,refreshing:n}){let i=(0,s.ZP)(),l=(0,a.k6)(),{logContextEvent:u}=(0,o.v)(),_=e=>e>=.6,m=e=>e>.4&&e<.6,h=()=>{u({view_type:1,event_type:158,view_parameter:92}),t()},y=()=>{u({view_type:1,event_type:10144,view_parameter:92}),l.push("edit/")},{position:w,hasStartPulling:f,PULL_MENU_DISTANCE:x,isExecuted:g}=(0,c.Z)({enabled:e,onSelect:e=>{let{position:t,resetState:n}=e;m(t)?setTimeout(()=>{h(),n()},500):_(t)?setTimeout(()=>{y(),n()},500):n()},refreshing:n}),v=i.bt("Refresh", "Refresh", "pullMenu.refresh", undefined, true),b=i.bt("Edit feed", "Edit Feed", "pullMenu.goTuner", undefined, true);return(0,d.jsx)(r.xu,{children:e&&(0,d.jsxs)(r.xu,{alignItems:"center",direction:"column",display:"flex",height:w*x,justifyContent:"center",marginBottom:f?4:0,children:[(0,d.jsx)(p,{animationType:"move",hasStartPulling:f,icon:"edit",isExecuted:g,isSelected:_(w),position:w,text:b}),(0,d.jsx)(p,{hasStartPulling:f,icon:"refresh",isExecuted:g,isSelected:m(w),position:w,text:v})]})})}var _=n(589057);function m({enabled:e,onPull:t,refreshing:n}){let{checkExperiment:a}=(0,l.F)(),{anyEnabled:r}=a("hfp_drive_traffic_to_homefeed_tuner_mweb");return(0,d.jsx)(i.Fragment,{children:r?(0,d.jsx)(u,{enabled:e,onPull:t,refreshing:n}):(0,d.jsx)(_.Z,{enabled:e,onPull:t,refreshing:n})})}},589057:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(883119),l=n(214877),a=n(140017),r=n(339189),o=n(785893);function s({enabled:e,onPull:t,refreshing:n}){let s=(0,a.ZP)(),{logContextEvent:d}=(0,l.v)(),{position:p,startYRefCurrent:c,pullDistance:u}=(0,r.Z)({enabled:e,onSelect:e=>{let{pullDistance:n,resetState:i}=e;n>=120&&(d({view_type:1,event_type:158,view_parameter:92}),t()),i()},refreshing:n}),_=s.bt("Pull to refresh", "Pull to refresh", "Pull down on grid to refresh items", undefined, true);return(0,o.jsx)(i.xu,{children:e&&(0,o.jsx)(i.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{opacity:Math.min(p,1),transition:null===c?"all .3s ease-out":void 0}},display:"flex",height:120*p,justifyContent:"center",children:(0,o.jsx)(i.JO,{accessibilityLabel:_,icon:c&&u<120?"arrow-circle-down":"arrow-circle-up",size:40})})})}},339189:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(667294);function l({enabled:e,onSelect:t,refreshing:n}){let l=(0,i.useRef)(null),[a,r]=(0,i.useState)(0),[o,s]=(0,i.useState)(!1),d=n?0:a/250,p=d>0,c=()=>{s(!1),r(0)};(0,i.useEffect)(()=>{if(e){let e=e=>{window.scrollY<=0&&!n&&(l.current=e.touches[0].clientY)},i=e=>{if(l.current){let t=e.touches[0].clientY,n=(t-l.current)*.5;n>0&&(r(n),e.preventDefault())}},o=()=>{l.current&&(s(!0),t({pullDistance:a,position:d,resetState:c}),l.current=null)};return window.addEventListener("touchstart",e),window.addEventListener("touchmove",i,{passive:!1}),window.addEventListener("touchend",o),()=>{window.removeEventListener("touchstart",e),window.removeEventListener("touchmove",i,{passive:!1}),window.removeEventListener("touchend",o)}}},[e,t,a,n,d]);let u=l.current;return{pullDistance:a,hasStartPulling:p,position:d,startYRefCurrent:u,PULL_MENU_DISTANCE:250,isExecuted:o}}},490166:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(883119),l=n(785893);function a({children:e,onMouseEnter:t,onMouseLeave:n,onTouch:a,rounding:r,fullWidth:o=!1,pressState:s="none",accessibilityLabel:d,role:p}){let c=(Array.isArray(s)?s:[s]).includes("compress");return(0,l.jsx)(i.iP,{accessibilityLabel:d,fullWidth:o,onMouseEnter:t&&(({event:e})=>t(e)),onMouseLeave:n&&(({event:e})=>n(e)),onTap:a&&(({event:e})=>a(e)),role:p,rounding:r,tapStyle:c?"compress":"none",children:e})}},453652:(e,t,n)=>{n.d(t,{Z:()=>i});function i({isDesktop:e}){return e?0:1}},766311:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(667294),l=n(587703),a=n(217058);let r=e=>Object.keys(e).reduce((t,n)=>(void 0===e[n]&&delete t[n],t),{...e}),o=({viewType:e,viewParameter:t,viewData:n,auxData:i,objectIdStr:l,component:o,clientTrackingParams:s,element:d},p)=>{let c=r({event_type:13,view_type:e,view_parameter:t,view_data:n,aux_data:i,object_id_str:l,component:o,clientTrackingParams:s,element:d});-1===Object.keys(c).indexOf("view_type")&&(0,a.My)("mweb.logging.null_view_type"),p(c)};function s(e){let{auxData:t,clientTrackingParams:n,children:a,component:r,element:s,objectIdStr:d,viewData:p,viewParameter:c,viewType:u}=e,_=(0,l.Z)(),m=JSON.stringify(t),h=JSON.stringify(p);return(0,i.useEffect)(()=>{o(e,_)},[_,m,n,r,s,d,h,c,u]),i.Children.only(a)}},90647:(e,t,n)=>{n.d(t,{B:()=>h,Z:()=>y});var i=n(667294),l=n(616550),a=n(214877),r=n(525364),o=n(96157),s=n(5859),d=n(217058),p=n(623409),c=n(773616),u=n(86264),_=n(953565),m=n(785893);let h=(e,t)=>"/"===e.pathname?"/":(0,o.am)(e)&&t?`board/${e.pathname.substr(1)}`:e.pathname.substr(1);function y({children:e,componentType:t,app_upsell_type:n}){let o=(0,l.TH)(),{flushContextEvents:y,logContextEvent:w}=(0,a.v)(),{viewType:f,viewParameter:x}=(0,r.SU)(),g=(0,p.Z)(),{userAgent:{platform:v}}=(0,s.B)();(0,i.useEffect)(()=>{g({action:"view",item:"download-button",within:n})},[o,n,g]);let b=(0,i.useRef)(!1);(0,i.useEffect)(()=>{f&&202!==f?(w({component:t||13106,element:10308,event_type:9976,view_type:f,view_parameter:x,aux_data:{app_upsell_type:n,app_upsell_is_dupe:b.current}}),b.current=!0):(0,_.nP)("webapp.track_app_upsell_viewed_invalid_parameters",{sampleRate:1,tags:{component:t,view_type:f,view_parameter:x,app_upsell_type:n,app_upsell_is_dupe:b.current}})},[t,w,x,f,n]);let j=(0,c.Z)();return(0,i.useEffect)(()=>{j||(0,d.My)(`mweb.app_upsell.forbidden_upsell.${n}`)},[j,n]),(0,m.jsx)(u.Z,{children:i=>e({handleOpenApp:e=>{g({action:"click",item:"download-button",within:n}),(0,d.NC)("press_open_app",!0),w({component:t||13106,element:10308,event_type:102,view_type:f||202,view_parameter:x,aux_data:{app_upsell_type:n}}),w({component:t||13106,element:10308,event_type:9977,view_type:f||202,view_parameter:x,aux_data:{app_upsell_type:n}}),y(!0),i&&(w({component:t||13106,element:10308,event_type:1701,view_type:f||202,view_parameter:x,aux_data:{app_upsell_type:n}}),i(e?.deepLinkUri??h(o,"android"===v),n))}})})}},547010:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(883119),l=n(119936),a=n(140017),r=n(340370),o=n(5859),s=n(554786),d=n(90647),p=n(677233),c=n(669177),u=n(785893);let _=({deepLinkUri:e,isOpen:t,onDismiss:n,onOpenInApp:p,to:_,app_upsell_type:m})=>{let h=(0,a.ZP)(),y=(0,s.Wb)(),{isBot:w,userAgent:{platform:f,raw:x}}=(0,o.B)(),g=(0,c.Rp)({isBot:w,platform:f,userAgent:x}),v=(0,r.Z)({href:_??""}),b=y?60:40;return(0,u.jsx)(l.default,{accessibilityModalLabel:"",closeOnOutsideClick:!1,isOpen:t,mobileHideCloseIcon:!0,onDismiss:()=>{},type:"app_upsell_v1",zIndex:new i.Ry(101),children:(0,u.jsx)(d.Z,{app_upsell_type:m,componentType:14157,children:({handleOpenApp:t})=>(0,u.jsxs)(i.xu,{"data-test-id":"appUpsell-iframe",padding:3,children:[(0,u.jsx)(i.xu,{display:"inlineBlock",position:"absolute",children:(0,u.jsx)(i.xu,{"data-test-id":"appUpsell-continue",children:(0,u.jsx)(i.hU,{accessibilityLabel:h.bt("close icon background", "close icon background", "accesibility label for close icon on a overlay", undefined, true),icon:"cancel",iconColor:"gray",onClick:({event:e})=>{n({event:e}),v&&!e.defaultPrevented&&v({event:e})},size:"lg"})})}),(0,u.jsxs)(i.xu,{paddingX:2,paddingY:6,children:[(0,u.jsx)(i.xu,{display:"flex",justifyContent:"center",paddingY:2,children:(0,u.jsx)(i.JO,{accessibilityLabel:"Pinterest App",color:"brandPrimary",icon:"pinterest",size:b})}),(0,u.jsxs)(i.kC,{alignItems:"stretch",direction:"column",justifyContent:"center",children:[(0,u.jsx)(i.xu,{paddingY:2,children:(0,u.jsx)(i.X6,{align:"center",size:"400",children:g?h.bt("Try Pinterest Lite", "Try Pinterest Lite", "mweb.app_upsell.lite_app_upsell_title", undefined, true):h.bt("Pinterest is better in the app", "Pinterest is better on the app", "mweb.unauth.app_upsell.app_value_prop2", undefined, true)})}),(0,u.jsx)(i.xv,{align:"center",size:"300",children:g?h.bt("A space-saving way to discover new ideas", "A space-saving way to discover new ideas", "mweb.app_upsell.lite_app_value_prop", undefined, true):h.bt("Continue in the app for the full experience", "Continue in the app for the full experience", "mweb.app_upsell.description4", undefined, true)}),(0,u.jsx)(i.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{display:"grid"}},justifyContent:"center",marginTop:8,children:(0,u.jsx)(i.zx,{color:"red",fullWidth:!0,onClick:()=>{t({deepLinkUri:e}),p()},size:"lg",text:h.bt("Open app", "Open app", "mweb.app_upsell.app_upsell_button_text1", undefined, true)})})]})]})]})})})};function m({clientTrackingParams:e,deepLinkUri:t,isOpen:n,onDismiss:i,onOpenInApp:l,shouldTrackDismiss:a,to:r,viewParameter:o,viewType:s,app_upsell_type:d}){return(0,u.jsx)(p.Z,{clientTrackingParams:e,viewParameter:o,viewType:s,children:(0,u.jsx)(_,{app_upsell_type:d,deepLinkUri:t,isOpen:n,onDismiss:e=>{a&&(0,p.y)(),i(e)},onOpenInApp:()=>{(0,p.y)(),l()},to:r})})}},677233:(e,t,n)=>{n.d(t,{Z:()=>c,y:()=>p});var i=n(667294),l=n(805783),a=n(191313),r=n(573810),o=n(194602),s=n(766311),d=n(785893);let p=()=>{(0,a.Nh)("appUpsell",Date.now()),(0,a.qn)("firstUpsellTime")||(0,a.Nh)("firstUpsellTime",Date.now()),(0,r.Nh)("showedAppUpsellCurrentSession",!0)};function c({children:e,clientTrackingParams:t,viewParameter:n,viewType:a}){let r=(0,o.Z)();return r||(0,l.FP)(window)?null:(0,d.jsx)(s.Z,{clientTrackingParams:t,component:13106,viewParameter:n,viewType:a,children:(0,d.jsx)(i.Fragment,{children:e})})}},773616:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(702664);let l=()=>(0,i.useSelector)(({session:{canUseNativeApp:e}})=>e)},771881:(e,t,n)=>{n.d(t,{G9:()=>u,KJ:()=>f,SY:()=>w,c$:()=>m,cn:()=>h,gG:()=>_,kk:()=>c,mb:()=>x,s:()=>y});var i=n(883119),l=n(213377),a=n(554786),r=n(149722),o=n(490166),s=n(736079),d=n(453652),p=n(785893);let c=({isDesktop:e})=>{let t=(0,d.Z)({isDesktop:e});return t?-t:0},u=-2,_=()=>{let e=(0,a.HG)(),t=(0,d.Z)({isDesktop:e}),n=t?-t:0;return(0,p.jsx)(i.xu,{marginBottom:n,marginTop:n,paddingY:t})},m=({children:e})=>{let t=(0,a.HG)(),n=(0,r.Z)();return!n.isAuth&&t?(0,p.jsx)(s.x,{children:e}):e},h=({children:e})=>(0,p.jsx)(o.Z,{onTouch:e=>{if(e.target instanceof HTMLElement&&"IMG"===e.target.tagName){let t=e.target.getBoundingClientRect(),n=t.top+window.scrollY-70;window.scrollTo(window.scrollX,n)}},pressState:"none",children:e}),y=(e,t)=>"desktop"===t?4*l.jC:"board"===e?4:void 0,w=(e,t)=>"desktop"===e?l.yF:t||200,f=e=>e?"start":"center",x=({gutterWidth:e,itemWidth:t,className:n,minColumns:i=l.yc,maxColumns:a=l.g5})=>{let r=t+e,o=Array.from({length:a+1-i},(e,t)=>t+i),s=o.map(t=>{let l=t===i?0:t*r;return{minWidth:l,maxWidth:t===a?null:(t+1)*r-1,styles:`
      .${n} {
        max-width: ${t*r-e}px;
      }
      `}});return s.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @media (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `).join("")}},669177:(e,t,n)=>{n.d(t,{G3:()=>p,Rp:()=>d,kp:()=>o});var i=n(188349),l=n(191313),a=n(573810);let r=14*i.F4,o=(e,t)=>{let n=function(){let e=Date.now(),t=Number((0,l.qn)("appUpsell")),n=Number((0,l.qn)("firstUpsellTime")),i=!!(0,a.qn)("showedAppUpsellCurrentSession");return{currentTime:e,firstUpsellTime:n,lastUpsellTime:t,showedAppUpsellCurrentSession:i}}();return e?function(e,t,n){let{currentTime:i,firstUpsellTime:a,lastUpsellTime:o,showedAppUpsellCurrentSession:s}=e;return(n=n||r,!a||i<a+t)?!s:i-o>n&&((0,l.L_)("firstUpsellTime"),!0)}(n,i.F4):function(e,t){let{currentTime:n,lastUpsellTime:i}=e;return t=t||r,!i||n-i>t}(n,t)},s=e=>{e=e.toLowerCase();let t=e.match(/android\s([0-9\.]*)/i);return t?t[1]:void 0},d=({isBot:e,platform:t,userAgent:n})=>{try{return!e&&"android"===t&&7>parseFloat(s(n))}catch(e){return!1}},p=e=>(e.startsWith("zh")||e.startsWith("ar")?e:e.slice(0,2)).toUpperCase()},187156:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(667294),l=n(883119),a=n(213377),r=n(406893),o=n(554786),s=n(439278),d=n(785893);let p="PinGridSkeletonLoader__tall",c="PinGridSkeletonLoader__short",u=({size:e})=>(0,d.jsx)(l.xu,{padding:1,children:(0,d.jsx)("div",{className:"tall"===e?p:c})}),_=({children:e})=>(0,d.jsx)(l.kC,{direction:"column",gap:{row:0,column:2},children:e}),m=({partialViewportWidth:e})=>{let t=(0,o.ZP)(),n="desktop"===t,m=n?a.yF:a.tG;return(0,d.jsxs)(i.Fragment,{children:[(0,d.jsx)(r.Z,{unsafeCSS:[{name:p,height:250},{name:c,height:150}].map(({name:e,height:t})=>(0,s.Z)({name:e,width:m,height:t})).join("")}),(0,d.jsx)(l.xu,{marginEnd:a.qG,marginStart:a.qG,children:n?(0,d.jsxs)(l.kC,{direction:"row",gap:{row:a.jC,column:0},children:[(0,d.jsx)(_,{children:(0,d.jsx)(u,{size:"tall"})}),(0,d.jsx)(_,{children:(0,d.jsx)(u,{size:"short"})}),(0,d.jsx)(_,{children:(0,d.jsx)(u,{size:"tall"})}),!e&&(0,d.jsx)(_,{children:(0,d.jsx)(u,{size:"short"})})]}):(0,d.jsxs)(l.kC,{direction:"row",justifyContent:"center",overflow:"hidden",children:[(0,d.jsxs)(_,{children:[(0,d.jsx)(u,{size:"tall"}),(0,d.jsx)(u,{size:"short"}),(0,d.jsx)(u,{size:"tall"})]}),(0,d.jsxs)(_,{children:[(0,d.jsx)(u,{size:"short"}),(0,d.jsx)(u,{size:"tall"}),(0,d.jsx)(u,{size:"short"}),(0,d.jsx)(u,{size:"tall"})]})]})})]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/42858.en_GB-6f5b7b50256cb6fb.mjs.map