(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[109],{1109:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return j}});var r=n(2676),o=n(5271),i=n(507);function a(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function u(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r,o=l(t);if(e){var i=l(this).constructor;r=Reflect.construct(o,arguments,i)}else r=o.apply(this,arguments);return(n=r)&&("object"==typeof n||"function"==typeof n)?n:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function d(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=String(t);if(0===n)return r;var o=r.match(/(.*?)([0-9]+)(.*)/),i=o?o[1]:"",a=o?o[3]:"",s=o?o[2]:r,c=s.length>=n?s:(((function(t){if(Array.isArray(t))return m(t)})(e=Array(n))||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(){return"0"}).join("")+s).slice(-1*n);return"".concat(i).concat(c).concat(a)}var h={daysInHours:!1,zeroPadTime:2},y=function(t){u(n,t);var e=f(n);function n(){var t;return a(this,n),t=e.apply(this,arguments),t.state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval(function(){0==t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState(function(t){return{count:t.count-1}})},1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState(function(t){return{count:t.count+e}},t.startCountdown)},t}return c(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,o.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(o.Component);y.propTypes={count:i.number,children:i.element,onComplete:i.func};var v=function(t){u(n,t);var e=f(n);function n(t){var r;if(a(this,n),(r=e.call(this,t)).mounted=!1,r.initialTimestamp=r.calcOffsetStartTimestamp(),r.offsetStartTimestamp=r.props.autoStart?0:r.initialTimestamp,r.offsetTime=0,r.legacyMode=!1,r.legacyCountdownRef=(0,o.createRef)(),r.tick=function(){var t=r.calcTimeDelta(),e=t.completed&&!r.props.overtime?void 0:r.props.onTick;r.setTimeDeltaState(t,void 0,e)},r.start=function(){if(!r.isStarted()){var t=r.offsetStartTimestamp;r.offsetStartTimestamp=0,r.offsetTime+=t?r.calcOffsetStartTimestamp()-t:0;var e=r.calcTimeDelta();r.setTimeDeltaState(e,"STARTED",r.props.onStart),r.props.controlled||e.completed&&!r.props.overtime||(r.clearTimer(),r.interval=window.setInterval(r.tick,r.props.intervalDelay))}},r.pause=function(){r.isPaused()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.setTimeDeltaState(r.state.timeDelta,"PAUSED",r.props.onPause))},r.stop=function(){r.isStopped()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.offsetTime=r.offsetStartTimestamp-r.initialTimestamp,r.setTimeDeltaState(r.calcTimeDelta(),"STOPPED",r.props.onStop))},r.isStarted=function(){return r.isStatus("STARTED")},r.isPaused=function(){return r.isStatus("PAUSED")},r.isStopped=function(){return r.isStatus("STOPPED")},r.isCompleted=function(){return r.isStatus("COMPLETED")},t.date){var i=r.calcTimeDelta();r.state={timeDelta:i,status:i.completed?"COMPLETED":"STOPPED"}}else r.legacyMode=!0;return r}return c(n,[{key:"componentDidMount",value:function(){!this.legacyMode&&(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date===t.date||(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,n=t.now,r=t.precision,o=t.controlled,i=t.overtime;return function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.now,o=void 0===r?Date.now:r,i=n.precision,a=n.controlled,s=n.offsetTime,c=n.overtime;e="string"==typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,a||(e+=void 0===s?0:s);var u=a?e:e-o(),l=Math.round(1e3*parseFloat(((c?u:Math.max(0,u))/1e3).toFixed(Math.min(20,Math.max(0,void 0===i?0:i))))),p=Math.abs(l)/1e3;return{total:l,days:Math.floor(p/86400),hours:Math.floor(p/3600%24),minutes:Math.floor(p/60%60),seconds:Math.floor(p%60),milliseconds:Number((p%1*1e3).toFixed()),completed:l<=0}}(e,{now:n,precision:r,controlled:o,offsetTime:this.offsetTime,overtime:i})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,n){var r=this;if(this.mounted){var o=t.completed&&!this.state.timeDelta.completed,i=t.completed&&"STARTED"===e;return o&&!this.props.overtime&&this.clearTimer(),this.setState(function(n){var o=e||n.status;return t.completed&&!r.props.overtime?o="COMPLETED":e||"COMPLETED"!==o||(o="STOPPED"),{timeDelta:t,status:o}},function(){n&&n(r.state.timeDelta),r.props.onComplete&&(o||i)&&r.props.onComplete(t,i)})}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t,e,n,r,o,i,a,s,c,u,l,p=this.props,f=p.daysInHours,m=p.zeroPadTime,y=p.zeroPadDays,v=this.state.timeDelta;return Object.assign(Object.assign({},v),{api:this.getApi(),props:this.props,formatted:(t=v.days,e=v.hours,n=v.minutes,r=v.seconds,i=(o=Object.assign(Object.assign({},h),{daysInHours:f,zeroPadTime:m,zeroPadDays:y})).daysInHours,a=o.zeroPadTime,c=void 0===(s=o.zeroPadDays)?a:s,u=Math.min(2,a),l=i?d(e+24*t,a):d(e,u),{days:i?"":d(t,c),hours:l,minutes:d(n,u),seconds:d(r,u)})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,n=t.children,r=t.onComplete;return(0,o.createElement)(y,{ref:this.legacyCountdownRef,count:e,onComplete:r},n)}var i=this.props,a=i.className,s=i.overtime,c=i.children,u=i.renderer,l=this.getRenderProps();if(u)return u(l);if(c&&this.state.timeDelta.completed&&!s)return(0,o.cloneElement)(c,{countdown:l});var p=l.formatted,f=p.days,m=p.hours,d=p.minutes,h=p.seconds;return(0,o.createElement)("span",{className:a},l.total<0?"-":"",f,f?":":"",m,":",d,":",h)}}]),n}(o.Component);v.defaultProps=Object.assign(Object.assign({},h),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),v.propTypes={date:(0,i.oneOfType)([(0,i.instanceOf)(Date),i.string,i.number]),daysInHours:i.bool,zeroPadTime:i.number,zeroPadDays:i.number,controlled:i.bool,intervalDelay:i.number,precision:i.number,autoStart:i.bool,overtime:i.bool,className:i.string,children:i.element,renderer:i.func,now:i.func,onMount:i.func,onStart:i.func,onPause:i.func,onStop:i.func,onTick:i.func,onComplete:i.func};var T=n(3801),S=n(350),D=n(6943);(0,S.zo)("div",{});let b=(0,S.zo)("div",{d:"flex",fd:"column",ai:"center",gap:12}),w=(0,S.zo)("div",{w:90,h:51,d:"flex",ai:"center",jc:"center",br:17,ta:"center","@sm":{w:42,h:40}}),g=(0,S.zo)(D.Z,{color:"#66DD7C",fz:40,fw:700,"@sm":{fz:32}}),k=(0,S.zo)(D.Z,{color:"$white","-webkit-text-stroke-width":1,"-webkit-text-stroke-color:":"#000",fz:20,fw:700,textTransform:"uppercase","@sm":{fz:16}}),P=(0,S.zo)(D.Z,{mt:-30,fz:30,fw:600,color:"#66DD7C"});var O=n(6094),j=t=>{let{date:e=new Date("2024-06-21T15:00:00Z"),completeComponent:n}=t,{t:o}=(0,O.$G)();return(0,r.jsx)(v,{date:e,renderer:t=>{let{days:e,hours:i,minutes:a,seconds:s,completed:c}=t;return c?n||null:(0,r.jsxs)(T.Z,{css:{d:"flex",ai:"center",gap:8,"@sm":{gap:4}},children:[(0,r.jsxs)(b,{children:[(0,r.jsx)(w,{children:(0,r.jsx)(g,{withBlackStroke:!0,children:e})}),(0,r.jsx)(k,{withBlackStroke:!0,children:o("common.days","Days")})]}),(0,r.jsx)(P,{children:":"}),(0,r.jsxs)(b,{children:[(0,r.jsx)(w,{children:(0,r.jsx)(g,{withBlackStroke:!0,children:i})}),(0,r.jsx)(k,{withBlackStroke:!0,children:o("common.hours","Hours")})]}),(0,r.jsx)(P,{children:":"}),(0,r.jsxs)(b,{children:[(0,r.jsx)(w,{children:(0,r.jsx)(g,{withBlackStroke:!0,children:a})}),(0,r.jsx)(k,{withBlackStroke:!0,children:o("common.min","Min")})]}),(0,r.jsx)(P,{children:":"}),(0,r.jsxs)(b,{children:[(0,r.jsx)(w,{children:(0,r.jsx)(g,{withBlackStroke:!0,children:s})}),(0,r.jsx)(k,{withBlackStroke:!0,children:o("common.sec","Sec")})]})]})},zeroPadTime:2})}},4049:function(t,e,n){"use strict";var r=n(6257);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,i,a){if(a!==r){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},507:function(t,e,n){t.exports=n(4049)()},6257:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);