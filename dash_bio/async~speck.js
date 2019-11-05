(window.webpackJsonpdash_bio=window.webpackJsonpdash_bio||[]).push([[8],{177:function(e,t){function n(e,t,n,r){var o,i=null==(o=r)||"number"==typeof o||"boolean"==typeof o?r:n(r),s=t.get(i);return void 0===s&&(s=e.call(this,r),t.set(i,s)),s}function r(e,t,n){var r=Array.prototype.slice.call(arguments,3),o=n(r),i=t.get(o);return void 0===i&&(i=e.apply(this,r),t.set(o,i)),i}function o(e,t,n,r,o){return n.bind(t,e,r,o)}function i(e,t){return o(e,this,1===e.length?n:r,t.cache.create(),t.serializer)}function s(){return JSON.stringify(arguments)}function c(){this.cache=Object.create(null)}c.prototype.has=function(e){return e in this.cache},c.prototype.get=function(e){return this.cache[e]},c.prototype.set=function(e,t){this.cache[e]=t};var a={create:function(){return new c}};e.exports=function(e,t){var n=t&&t.cache?t.cache:a,r=t&&t.serializer?t.serializer:s;return(t&&t.strategy?t.strategy:i)(e,{cache:n,serializer:r})},e.exports.strategies={variadic:function(e,t){return o(e,this,r,t.cache.create(),t.serializer)},monadic:function(e,t){return o(e,this,n,t.cache.create(),t.serializer)}}},42:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(5);var s="function"==typeof Object.assign?Object.assign:function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1,r=arguments.length;n<r;){var o=arguments[n];if(null!=o)for(var s in o)Object(i.a)(s,o)&&(t[s]=o[s]);n+=1}return t},c=n(3),a=Object(c.a)(function(e){return s.apply(null,[{}].concat(e))}),u=n(43),l=n(177),p=n.n(l),f=n(19),h=n(17);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return R});var m=p()(function(e){for(var t=f.speckSystem.new(),n=0;n<e.length;n++){var r=e[n];f.speckSystem.addAtom(t,r.symbol,r.x,r.y,r.z)}return f.speckSystem.center(t),f.speckSystem.calculateBonds(t),t}),g=function(e){return a([e,{rotation:new Float32Array(e.rotation),translation:a([e.translation])}])},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.assign(e,t)},R=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=w(t).call(this,e),(n=!o||"object"!==v(o)&&"function"!=typeof o?y(r):o).state={renderer:null},n.eventListenDestructor=function(){},n.refreshView=!1,n.propsReconcileTimeout=null,n.view=S(f.speckView.new(),e.view),n.props.setProps({view:g(n.view)}),n.setCanvasRef=function(e){n.canvas=e},n.setContainerRef=function(e){n.container=e},n.loop=n.loop.bind(y(n)),n.loadStructure=n.loadStructure.bind(y(n)),n.propsReconcile=n.propsReconcile.bind(y(n)),n.propsReconcileSchedule=n.propsReconcileSchedule.bind(y(n)),n}var n,i,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r["Component"]),n=t,(i=[{key:"componentDidMount",value:function(){var e=this,t=this.props.scrollZoom,n=this.canvas,r=this.container,o=new f.speckRenderer(n,200,300);this.setState({renderer:o},this.loadStructure),this.eventListenDestructor=Object(f.speckInteractions)({scrollZoom:t,container:r,getRotation:function(){return e.view.rotation},setRotation:function(t){e.view=S(e.view,{rotation:t}),e.propsReconcileSchedule()},getTranslation:function(){return e.view.translation},setTranslation:function(t){e.view=S(e.view,{translation:t}),e.propsReconcileSchedule()},getZoom:function(){return e.view.zoom},setZoom:function(t){e.view=S(e.view,{zoom:t}),e.propsReconcileSchedule()},refreshView:function(){return e.refreshView=!0}}),this.loop()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.data,r=t.view,o=t.presetView,i=this.state.renderer,s=this.view,c=!1;e.presetView!==o&&(s=S(s,f.speckPresetViews[o]),this.propsReconcileSchedule(),c=!0),function(e){for(var t=JSON.stringify(e),n=1;n<arguments.length;n++)if(t===JSON.stringify(arguments[n]))return!0;return!1}(r,e.view,s)||(s=S(s,r),c=!0),Object(u.a)(n,e.data)||(c=!0),c&&(this.view=s,i&&this.loadStructure())}},{key:"componentWillUnmount",value:function(){this.state.renderer=null,this.eventListenDestructor(),this.props.setProps({view:this.view})}},{key:"propsReconcile",value:function(){Object(u.a)(this.view,this.props.view)||this.props.setProps({view:g(this.view)})}},{key:"propsReconcileSchedule",value:function(){clearTimeout(this.propsReconcileTimeout),this.propsReconcileTimeout=setTimeout(this.propsReconcile,500)}},{key:"loadStructure",value:function(){var e=this.props.data;if(0!==e.length){var t=this.state.renderer,n=this.view,r=m(e);t.setSystem(r,n),t.setResolution(n.resolution,n.aoRes),this.refreshView=!0}}},{key:"loop",value:function(){this.state.renderer&&this.view&&(this.refreshView&&(this.state.renderer.reset(),this.refreshView=!1),this.state.renderer.render(this.view)),requestAnimationFrame(this.loop)}},{key:"render",value:function(){var e=this.props.id,t=this.view,n={height:t.resolution,width:t.resolution};return o.a.createElement("div",{id:e,ref:this.setContainerRef,style:n},o.a.createElement("canvas",{ref:this.setCanvasRef,width:t.resolution,height:t.resolution}))}}])&&d(n.prototype,i),s&&d(n,s),t}();R.defaultProps=h.b,R.propTypes=h.c}}]);