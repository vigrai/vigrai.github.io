(window.webpackJsonp=window.webpackJsonp||[]).push([[13,11],{233:function(t,n,e){"use strict";e.r(n);var o={props:["iconModifier"],created:function(){var t=this;this.$nextTick((function(){t.$gsap.timeline({repeat:-1,yoyo:!0}).to(t.$refs.initialShape,{duration:t.$gsap.utils.random(2,3),morphSVG:t.$refs.iconMotionShape})}))}},l=e(42),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"b--icon-a",class:t.iconModifier},[e("svg",{staticClass:"b--icon-a__bg-items",attrs:{viewBox:"0 0 42 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{ref:"initialShape",attrs:{d:"M41.5604 24.5128C41.5604 1.98201 29.1832 0.491736 18.8004 0.0224591C8.41766 -0.446846 0 6.44566 0 20.0547C0 42.0814 15.1049 40.087 25.253 39.8523C35.4011 39.6177 41.5604 33.1944 41.5604 24.5128Z"}}),t._v(" "),e("path",{ref:"iconMotionShape",attrs:{d:"M39 24.963C39 4.69559 32.2867 2.45549 22.8384 2.03335C13.3901 1.61119 3 5.11266 3 17.3546C3 37.1685 13.1054 37.1735 22.3402 36.9625C31.5751 36.7514 39 32.7725 39 24.963Z"}})]),t._v(" "),e("div",{staticClass:"b--icon-a__ft-items"},[t._t("default")],2)])}),[],!1,null,null,null);n.default=component.exports},259:function(t,n,e){"use strict";e.r(n);e(17),e(37),e(38);var o={components:{"v-icon-a":e(233).default,"v-card-e-company":function(){return e.e(35).then(e.bind(null,272))},"v-card-e-process":function(){return e.e(0).then(e.bind(null,278))}},data:function(){return{isModalOpen:!1,modalContent:null,processContent:null}},methods:{closeModal:function(){this.isModalOpen=!1,this.processContent=null,this.modalContent=null}},created:function(){var t=this;this.$nuxt.$on("openModal",(function(n){"company"==n.type&&(console.log(n),t.modalContent=n.modalContent.companies[n.key],t.processContent=null,t.isModalOpen=!0),"process"==n.type&&(t.processContent=n.modalContent.process[n.key],t.modalContent=null,t.isModalOpen=!0)}))}},l=e(42),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"b--modal-a",class:{"b--modal-a--is-active":this.isModalOpen}},[e("div",{staticClass:"b--modal-a__wrapper"},[this.modalContent||this.processContent?e("div",{staticClass:"b--modal-a__wrapper__ft-items"},[e("button",{staticClass:"b--modal-a__wrapper__ft-items__btn",on:{click:function(n){return n.preventDefault(),t.closeModal()}}},[e("v-icon-a",[e("svg",{attrs:{viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10.6667 1L1 10.6667",stroke:"#0B2545","stroke-width":"2"}}),t._v(" "),e("path",{attrs:{d:"M1.33334 1L11 10.6667",stroke:"#0B2545","stroke-width":"2"}})])])],1),t._v(" "),e("div",{staticClass:"b--modal-a__wrapper__ft-items__content b--scrollbar-a"},[t.modalContent?e("v-card-e-company",{attrs:{modalContent:t.modalContent}}):t._e(),t._v(" "),t.processContent?e("v-card-e-process",{attrs:{modalContent:t.processContent}}):t._e()],1)]):t._e(),t._v(" "),e("div",{staticClass:"b--modal-a__wrapper__bg-items"},[e("svg",{attrs:{viewBox:"0 0 603 580",fill:"none"}},[e("path",{attrs:{d:"M57.9769 475.26C-29.9111 351.533 -13.1557 184.97 76.4317 87.8928C158.993 -1.57095 346.371 -58.193 532.42 97.892C646.94 219.715 602.121 445.399 532.42 507.619C401.919 624.112 138.293 588.326 57.9769 475.26Z",fill:"#0B2545"}})])])]),t._v(" "),e("div",{staticClass:"b--modal-a__overlay",on:{click:function(n){return n.preventDefault(),t.closeModal()}}})])}),[],!1,null,null,null);n.default=component.exports}}]);