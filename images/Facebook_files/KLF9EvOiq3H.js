;/*FB_PKG_DELIM*/

__d("CometNewsfeedKeyCommandWidget",["createKeyCommandWidget"],(function(a,b,c,d,e,f,g){"use strict";a=c("createKeyCommandWidget")();g["default"]=a}),98);
__d("CometContentNotAvailable.react",["fbt","CometContentArea.react","NullStateGeneral","TetraNullState.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(){return i.jsx("div",{className:"x6s0dn4 x78zum5 xtp0wl1 xl56j7k xh8yej3",children:i.jsx(c("CometContentArea.react"),{verticalAlign:"middle",children:i.jsx(c("TetraNullState.react"),{headline:h._("__JHASH__C7tfZyxTgu9__JHASH__"),icon:c("NullStateGeneral")})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPageLayoutWithComplementaryContent.react",["BaseRow.react","BaseRowItem.react","CometMediaViewerFullscreenContext","CometRouteRenderType","CometScrollView.react","MWChatVisibilityOverrideContext","gkx","react","useMWShouldCurrentRouteOverrideChatVisibility","useShouldShowMessagingEntrypointOnCurrentRoute"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j=c("gkx")("708253"),k=c("gkx")("1217157"),l=c("gkx")("2820"),m={chatSliver:{backgroundColor:"x1jx94hy",boxShadow:"x13tw4yp",display:"x78zum5",height:"xtp0wl1",top:"xxzkxad",width:"x1dmp6jm",zIndex:"x1vjfegm","@media (max-width: 899px)_display":"x1daaz14",$$css:!0},container:{height:"x3igimt",maxHeight:"xedcshv",overflowX:"x6ikm8r",overflowY:"x10wlt62","@media (max-width: 900px)_flexDirection":"x10o2a94",$$css:!0},containerFullScreenInPushView:{minHeight:"xg6iff7",$$css:!0},containerInPushView:{minHeight:"x1us19tq",$$css:!0},containerNotInPushView:{minHeight:"xat3117",$$css:!0},contentAreaInPushView:{height:"x1dr59a3","@media (max-width: 900px)_height":"xadl8oe",$$css:!0},contentAreaInPushViewUsesParentHeight:{height:"x5yr21d","@media (max-width: 900px)_height":"xadl8oe",$$css:!0},contentAreaNotInPushView:{height:"xtp0wl1","@media (max-width: 900px)_height":"xadl8oe",$$css:!0},defaultBackground:{backgroundColor:"x2bj2ny",$$css:!0},rightRail:{height:"x3igimt",maxHeight:"xmz0i5r","@media (max-width: 900px)_maxWidth":"x1dqk2q1","@media (max-width: 900px)_minHeight":"x1mr1erl",$$css:!0},rightRailFixed:{backgroundColor:"x2bj2ny",maxHeight:"x85a59c",minHeight:"x1t2pt76","@media (max-width: 900px)_maxHeight":"x12slza2","@media (max-width: 900px)_maxWidth":"x1dqk2q1","@media (max-width: 900px)_minHeight":"x1mnsmir",$$css:!0},rightRailInner:{backgroundColor:"x2bj2ny",height:"x3igimt",maxWidth:"xxc7z9f",minWidth:"x1gvwcb","@media (max-width: 900px)_minWidth":"xusdqos",$$css:!0},rightRailOuter:{height:"x5yr21d",maxHeight:"x85a59c","@media (max-width: 900px)_height":"xhz6iuk","@media (max-width: 900px)_maxHeight":"x1wrh7m5",$$css:!0},rightRailOuterNoMaxHeight:{height:"x5yr21d","@media (max-width: 900px)_height":"xhz6iuk","@media (max-width: 900px)_maxHeight":"x1wrh7m5",$$css:!0},shadowBar:{backgroundColor:"x2bj2ny",borderBottom:"x3lcxq5",minHeight:"x1e3jx5v",position:"x7wzq59",top:"x13vifvy",zIndex:"x1vjfegm",$$css:!0},shadowBarContentAreaResponsiveness:{display:"x1s85apg","@media (max-width: 900px)_display":"xhnf9zx",$$css:!0},shadowBarRightRailResponsiveness:{"@media (max-width: 900px)_display":"xzd29fr",$$css:!0}};function a(a){var b=a.children;b=b===void 0?null:b;var e=a.hideContainerBackground;e=e===void 0?!1:e;var f=a.isRightRailFixed;f=f===void 0?!1:f;var g=a.rightRail;g=g===void 0?null:g;var n=a.showChatSliverOverride;n=n===void 0?!0:n;var o=a.showShadowBar;o=o===void 0?!0:o;a=a.useParentHeight;a=a===void 0?!1:a;var p=d("CometRouteRenderType").useIsPushView(),q=c("useShouldShowMessagingEntrypointOnCurrentRoute")("CHAT")&&j,r=c("useMWShouldCurrentRouteOverrideChatVisibility")();r=d("MWChatVisibilityOverrideContext").useMWChatVisibilityOverride(r);var s=i(c("CometMediaViewerFullscreenContext"));n=n&&q&&r;return h.jsxs(c("BaseRow.react"),{align:"start",xstyle:[m.container,!e&&m.defaultBackground,s&&p&&m.containerFullScreenInPushView,!s&&(p||a)&&m.containerInPushView,!p&&!a&&m.containerNotInPushView],children:[p&&!k&&!l?h.jsx("div",{className:""+((o?" x2bj2ny x3lcxq5 x1e3jx5v x7wzq59 x13vifvy x1vjfegm":"")+(o?" x1s85apg xhnf9zx":""+(o?"":"")))}):null,h.jsx(c("BaseRowItem.react"),{expanding:!0,role:"main",xstyle:a?m.contentAreaInPushViewUsesParentHeight:p?m.contentAreaInPushView:m.contentAreaNotInPushView,children:b}),g!=null&&!s&&h.jsxs(c("BaseRowItem.react"),{role:"complementary",xstyle:f?m.rightRailFixed:m.rightRail,children:[p&&!k&&!l?h.jsx("div",{className:""+((o?" x2bj2ny x3lcxq5 x1e3jx5v x7wzq59 x13vifvy x1vjfegm":"")+(o?" xzd29fr":""+(o?"":"")))}):null,h.jsxs(c("BaseRow.react"),{xstyle:a?m.rightRailOuterNoMaxHeight:m.rightRailOuter,children:[h.jsx(c("BaseRowItem.react"),{xstyle:m.rightRailInner,children:f?h.jsx(c("CometScrollView.react"),{"data-testid":void 0,showsHorizontalScrollIndicator:!1,children:g}):g}),n?h.jsx("div",{className:"x1jx94hy x13tw4yp x78zum5 xtp0wl1 xxzkxad x1dmp6jm x1vjfegm x1daaz14"}):null]})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesCometLikeChainingContext.react",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useMemo,j=b.useState,k=h.createContext({setShouldShowLikeChaining:c("emptyFunction"),shouldShowLikeChaining:!1});function a(a){a=a.children;var b=j(!1),c=b[0],d=b[1];b=i(function(){return{setShouldShowLikeChaining:d,shouldShowLikeChaining:c}},[c]);return h.jsx(k.Provider,{value:b,children:a})}a.displayName=a.name+" [from "+f.id+"]";g.PagesCometLikeChainingContext=k;g.PagesCometLikeChainingContextProvider=a}),98);
__d("CometPhotoViewerContainerContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext();g["default"]=b}),98);
__d("PagesPageActionClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744141");c=b("FalcoLoggerInternal").create("pages_page_action_click",a);e.exports=c}),null);
__d("PagesPermalinkImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744169");c=b("FalcoLoggerInternal").create("pages_permalink_impression",a);e.exports=c}),null);
__d("PagesTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:PagesLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:PagesLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:PagesLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setConnectionClass=function(a){this.$1.connection_class=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setEventLocation=function(a){this.$1.event_location=a;return this};c.setEventTarget=function(a){this.$1.event_target=a;return this};c.setLogSource=function(a){this.$1.log_source=a;return this};c.setNavAttributionIDV2Key=function(a){this.$1.nav_attribution_id_v2_key=a;return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setRawClientTime=function(a){this.$1.raw_client_time=a;return this};c.setSessionid=function(a){this.$1.sessionid=a;return this};c.setTags=function(a){this.$1.tags=b("GeneratedLoggerUtils").serializeVector(a);return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={connection_class:!0,event:!0,event_location:!0,event_target:!0,log_source:!0,nav_attribution_id_v2_key:!0,page_id:!0,raw_client_time:!0,sessionid:!0,tags:!0};f["default"]=a}),66);
__d("PagesLoggerEventEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CLICK:"click",CREATE:"create",DELETE:"delete",DRAG:"drag",HOVER:"hover",IMPRESSION:"impression",RECEIVE_REQUEST:"receive_request",RECEIVE_RESPONSE:"receive_response",SAVE:"save",SCROLL:"scroll",SEND_REQUEST:"send_request",SEND_RESPONSE:"send_response",UNSAVE:"unsave",UPDATE:"update"})}),null);
__d("PagesLogger",["PagesLoggerEventEnum","PagesTypedLogger"],(function(a,b,c,d,e,f){var g="extra_data_",h={log:function(a,c,d,e,f,h){e===void 0&&(e=null);f===void 0&&(f=[]);var i={},j=h||{};Object.keys(j||{}).forEach(function(a){var b=j[a];(b instanceof Array||b instanceof Object)&&(b=JSON.stringify(b));i[g+a]=b});new(b("PagesTypedLogger"))().setPageID(a).setEvent(c).setEventTarget(d).setEventLocation(e).setLogSource("pages_logger").setTags(f).updateExtraData(i).log()},registerLogOnClick:function(a,c,d,e,f,g){e===void 0&&(e=null),f===void 0&&(f=[]),g===void 0&&(g={}),a.addEventListener("click",function(){h.log(c,b("PagesLoggerEventEnum").CLICK,d,e,f,g)})}};e.exports=h}),null);