(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{235:function(t,e,o){"use strict";o.r(e);var l={props:["leftPosition","topPosition","seagulSize","seagullStart","seagullEnd","viewBox","guide"],created:function(){var t=this;this.guide&&this.$nextTick((function(){t.$gsap.to(t.$refs.seagull,{repeat:-1,duration:t.$gsap.utils.random(6,8),ease:"Power0.easeOut",motionPath:{path:t.$refs.guide,align:t.$refs.guide,autoRotate:!1,alignOrigin:[.5,.5]}})}))}},r=o(42),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{staticClass:"b--seagull-a",style:{left:this.leftPosition,top:this.topPosition,width:this.seagulSize},attrs:{viewBox:t.viewBox,fill:"none"}},[o("path",{ref:"guide",staticClass:"guide",attrs:{d:t.guide,stroke:"black"}}),t._v(" "),o("g",{ref:"seagull"},[o("path",{directives:[{name:"gsap",rawName:"v-gsap.to",value:{duration:this.$gsap.utils.random(.1,.3),attr:{d:this.seagullEnd},repeat:-1,yoyo:!0},expression:"{duration: this.$gsap.utils.random(.1, .3),attr:{d:this.seagullEnd},repeat:-1,yoyo:true,}",modifiers:{to:!0}}],attrs:{d:t.seagullStart,stroke:"black"}})])])}),[],!1,null,null,null);e.default=component.exports}}]);