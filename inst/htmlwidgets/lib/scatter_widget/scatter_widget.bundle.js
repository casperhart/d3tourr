var scatter_widget;(()=>{"use strict";var t,e={976:(t,e,n)=>{n.d(e,{Z:()=>s});var i=n(645),o=n.n(i)()((function(t){return t[1]}));o.push([t.id,"button {\n  background-color: transparent;\n  position: absolute;\n  color: rgb(0, 0, 0);\n  text-align: center;\n  width: 30px;\n  height: 30px;\n  border-color: transparent;\n  left: 10px;\n}\n\nbutton:hover {\n  color: rgb(56, 56, 56);\n}\n\nbutton.resetButton {\n  top: 15px;\n  border: 5px;\n}\n\nbutton.panButton {\n  top: 50px;\n  border: 5px;\n}\n\nbutton.orbitButton {\n  top: 85px;\n  border: 5px;\n}\n\nbutton.selectButton {\n  top: 120px;\n  border: 5px;\n}\n\nbutton.brushButton {\n  top: 155px;\n  border: 5px;\n}\n\nbutton.unselected {\n  color: rgb(75, 75, 75);\n}\n\nbutton.selected {\n  color: rgb(44, 44, 240);\n}\n\ninput.colourSelector {\n  position: absolute;\n  top: 190px;\n  left: 13px;\n  width: 22px;\n  height: 22px;\n}\n\n.scatterWidgetContainer {\n  position: relative;\n}\n\n.scatterWidgetCanvas {\n  position: absolute;\n}\n\n.selectBox.enabled {\n  border: 1px solid #55aaff;\n  background-color: rgba(75, 160, 255, 0.3);\n  position: fixed;\n}\n\ndiv.axisLabel {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: absolute;\n  font-family: Helvetica, Sans-serif;\n}\n\ndiv.tooltip {\n  position: absolute;\n  background: rgba(0,0,0,0.5);\n  padding: 5px;\n  visibility: hidden;\n  border-radius: 5px;\n  color: white;\n  font-family: sans-serif;\n}\n\ndiv.tooltip.visible {\n  visibility: visible;\n}\n\ndiv.scatterWidgetTimeline {\n  height: 10px;\n  left: 50px;\n  right: 20px;\n  background-color: rgba(0,0,0,0.7);\n  position: absolute;\n  border-radius: 5px;\n}\n\ndiv.scatterWidgetScrubber {\n  background-color: rgba(0,0,0,0.7);\n  border-radius: 50%;\n  \n  cursor: move;\n  position: absolute;\n  left: 0px;\n  bottom: -5px;\n  z-index: 1;\n  \n}\n\ndiv.scatterWidgetScrubber.active {\n    cursor: move;\n}\n",""]);const s=o},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var s=0;s<this.length;s++){var r=this[s][0];null!=r&&(o[r]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);i&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},252:(t,e,n)=>{n.r(e),n.d(e,{default:()=>g});var i=n(379),o=n.n(i),s=n(795),r=n.n(s),a=n(569),l=n.n(a),c=n(565),h=n.n(c),u=n(216),d=n.n(u),p=n(589),f=n.n(p),m=n(976),v={};v.styleTagTransform=f(),v.setAttributes=h(),v.insert=l().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=d(),o()(m.Z,v);const g=m.Z&&m.Z.locals?m.Z.locals:void 0},379:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var s={},r=[],a=0;a<t.length;a++){var l=t[a],c=i.base?l[0]+i.base:l[0],h=s[c]||0,u="".concat(c," ").concat(h);s[c]=h+1;var d=n(u),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==d?(e[d].references++,e[d].updater(p)):e.push({identifier:u,updater:o(p,i),references:1}),r.push(u)}return r}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var s=i(t=t||[],o=o||{});return function(t){t=t||[];for(var r=0;r<s.length;r++){var a=n(s[r]);e[a].references--}for(var l=i(t,o),c=0;c<s.length;c++){var h=n(s[c]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}s=l}}},569:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i=n.css,o=n.media,s=n.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(i,t)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},28:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.orbitIcon=e.brushIcon=e.selectIcon=e.panIcon=e.resetIcon=e.playIcon=e.pauseIcon=void 0,e.pauseIcon='\n<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause" class="svg-inline--fa fa-pause fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path></svg>\n',e.playIcon='\n<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" class="svg-inline--fa fa-play fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>\n',e.resetIcon='\n<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="redo-alt" class="svg-inline--fa fa-redo-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"></path></svg>\n',e.panIcon='\n<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrows-alt" class="svg-inline--fa fa-arrows-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971z"></path></svg>',e.selectIcon='\n<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="object-group" class="svg-inline--fa fa-object-group fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M480 128V96h20c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v20H64V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v40c0 6.627 5.373 12 12 12h20v320H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-20h384v20c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-20V128zM96 276V140c0-6.627 5.373-12 12-12h168c6.627 0 12 5.373 12 12v136c0 6.627-5.373 12-12 12H108c-6.627 0-12-5.373-12-12zm320 96c0 6.627-5.373 12-12 12H236c-6.627 0-12-5.373-12-12v-52h72c13.255 0 24-10.745 24-24v-72h84c6.627 0 12 5.373 12 12v136z"></path></svg>\n',e.brushIcon='\n<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paint-brush" class="svg-inline--fa fa-paint-brush fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"></path></svg>\n',e.orbitIcon='\n<svg version="1.1" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  x="0px" y="0px" viewBox="0 0 800 800" style="enable-background:new 0 0 800 800;" xml:space="preserve"><g> <path fill="currentColor" d="M179.7,542.3c-2.3,7-9.8,10.7-16.7,8.3c-41.1-14.5-74.7-32.5-99.8-53.6c-42.5-35.5-51.4-72.1-51.4-96.5  c0-25,9.3-62.3,53.5-98.3c26.3-21.4,61.4-39.6,104.3-54.1c6.9-2.3,14.4,1.5,16.5,8.5l16,51.6c2.1,6.7-1.6,13.9-8.3,16.2  c-32.8,11.2-59.6,24.9-78,39.9c-9,7.3-24,21.7-24,36.3c0,13.4,12.3,26.5,22.7,35.2c17.4,14.5,42.8,27.9,74,39.1  c6.6,2.4,10.1,9.6,7.9,16.2L179.7,542.3z"/></g><g> <path fill="currentColor" d="M401.9,587.4c-10.5,0-21-0.2-31.5-0.6c-7.2-0.3-12.9-6.4-12.5-13.7l2.7-53.9c0.4-7.1,6.4-12.6,13.5-12.3  c9.2,0.3,18.5,0.5,27.8,0.5c88.3,0,170.7-14.2,232.1-39.9c47.4-19.9,78-46.2,78-67s-30.6-47.1-78-67  c-61.3-25.7-143.7-39.9-232.1-39.9c-10.6,0-21.3,0.2-31.9,0.6c-7.1,0.3-13-5.2-13.4-12.3l-3-53.9c-0.4-7.2,5.2-13.4,12.4-13.7  c11.9-0.5,24-0.7,36-0.7c98.7,0,192.1,16.4,263,46.2c81.9,34.4,127,84.4,127,140.8s-45.1,106.4-127,140.8  C594,571,500.6,587.4,401.9,587.4z"/></g><g> <path fill="currentColor" d="M401.9,790.5c-56.4,0-106.4-45.1-140.8-127c-29.8-70.9-46.2-164.3-46.2-263s16.4-192.1,46.2-263  c34.4-81.9,84.4-127,140.8-127c29.4,0,71.6,12.5,110.4,69.8c4.2,6.1,2.3,14.5-4.1,18.4l-46.2,28.1c-5.8,3.5-13.5,2-17.4-3.6  c-14.6-20.8-29.8-32.6-42.7-32.6c-20.8,0-47.1,30.6-67,78c-25.7,61.3-39.9,143.7-39.9,232.1c0,88.3,14.2,170.7,39.9,232.1  c19.9,47.4,46.2,78,67,78c20.8,0,47.1-30.6,67-78c25.7-61.3,39.9-143.7,39.9-232.1c0-15.3-0.4-30.7-1.3-45.8  c-0.4-7.1,4.9-13.2,12-13.8l53.9-4c7.2-0.5,13.5,4.9,13.9,12.2c1,17,1.5,34.2,1.5,51.4c0,98.7-16.4,192.1-46.2,263  C508.3,745.4,458.3,790.5,401.9,790.5z"/></g><g> <path fill="currentColor" d="M511.3,175.3c-3.4,6.6-11.9,9.6-18.6,6.4L441,157.1l-37.5-17.8c-10.1-4.8-8.5-18.9,2.7-22.7L473,93.8l66.8-22.9  c11.1-3.8,21,6.3,16,16.3l-18.7,37L511.3,175.3z"/> <path fill="currentColor" d="M498.6,196.5c-3.9,0-7.9-0.8-11.7-2.6l-89.1-42.3c-9.5-4.5-15-13.7-14.4-23.9c0.6-10.8,7.9-20,18.5-23.7l133.6-45.7  c10.6-3.6,22-0.7,29.1,7.4c6.8,7.8,8,18.4,3.3,27.7l-44.5,88.1C518.5,190.9,508.7,196.5,498.6,196.5z M412.7,128.7l85.8,40.7  c0.2,0,0.7-0.1,0.8-0.3l42.8-84.7L412.7,128.7z"/></g><g> <path fill="currentColor" d="M339.2,540.4c-3.9-6.3-2-15.2,4.3-19.2l47.8-31.3l34.7-22.7c9.4-6.1,20.5,2.6,18,14.1l-15.2,68.9L413.5,619  c-2.5,11.5-16.3,14.7-22.2,5.2L369.4,589L339.2,540.4z"/> <path fill="currentColor" d="M400.9,643.3c-8.5,0-16.4-4.4-21.1-12l-52-83.8c-7.8-12.6-4.1-29.5,8.3-37.7l82.5-54.1c8.8-5.7,19.5-5.7,27.9,0.2  c8.9,6.1,13,17.1,10.6,28.1l-30.5,137.9c-2.4,10.9-10.8,19.2-21.5,21C403.8,643.2,402.3,643.3,400.9,643.3z M350.7,533.3l50.1,80.6  l29.5-133.5l-79.4,52C350.8,532.6,350.7,533.1,350.7,533.3z"/></g></svg>\n'},467:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ScatterWidget=void 0;var i=n(96);Object.defineProperty(e,"ScatterWidget",{enumerable:!0,get:function(){return i.ScatterWidget}})},96:function(t,e,n){var i=this&&this.__createBinding||(Object.create?function(t,e,n,i){void 0===i&&(i=n),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.ScatterWidget=void 0;var r=s(n(212)),a=n(578),l=n(681),c=n(148),h=n(886),u=n(903),d=n(803),p=n(28);n(252);var f=function(){function t(t,e,n){var i=this;this.canvas=document.createElement("canvas"),this.clock=new r.Clock,this.minPointSize=.02,this.hasEdges=!1,this.selectionStartEventListener=function(t){i.selectionBox.startPoint.set(Math.floor(t.clientX),Math.floor(t.clientY),0)},this.selectionMoveEventListener=function(t){i.selectionHelper.isDown&&i.selectionBox.endPoint.set(Math.floor(t.clientX),Math.floor(t.clientY),0)},this.selectionEndEventListener=function(t){i.selectionBox.endPoint.set(Math.floor(t.clientX),Math.floor(t.clientY),0),i.setPointIndicesFromBoxSelection(i.selectionBox),i.highlightSelectedPoints()},this.width=e,this.height=n,this.addContainerElement(t),this.addCanvas(),this.addScene(),this.addRenderer(),this.addControls()}return t.prototype.constructPlot=function(){var t=this;this.colMeans=l.getColMeans(this.dataset),this.setDefaultPointColours(),this.selectedPointIndices=Array(this.dataset.length).fill(0).map((function(t,e){return e})),this.pickingColours=this.getPickingColours(),this.hasPointLabels&&(this.addToolTip(),this.canvas.addEventListener("mousemove",(function(e){return t.setTooltipFromHover(e)})));var e=new r.BufferGeometry,n=this.config.size/10,i=this.getShaderOpts(n,this.dim),o=new r.ShaderMaterial(i);this.currentFrameBuffer=this.getPointsBuffer(0,this.config.center),this.nextFrameBuffer=this.getPointsBuffer(1,this.config.center),e.setAttribute("position",this.currentFrameBuffer),this.points=new r.Points(e,o),this.points.geometry.setAttribute("color",this.pointColours),this.pointAlphas=this.getPointAlphas(),this.points.geometry.setAttribute("alpha",this.pointAlphas),this.scene.add(this.points),this.hasAxes&&(this.addAxisSegments(),this.addAxisLabels()),this.hasEdges&&this.addEdgeSegments(this.currentFrameBuffer),this.addOrbitControls();var s=this.renderer.getPixelRatio();this.pickingTexture=new r.WebGLRenderTarget(this.width*s,this.height*s),this.selectionBox=new u.SelectionBox(this.camera,this.scene),this.selectionHelper=new d.SelectionHelper(this.selectionBox,this.renderer,"disabled"),this.addTimeline(),this.clock=new r.Clock,this.time=0,this.oldFrame=-1,this.isPaused=!1},t.prototype.resize=function(t,e){var n=t/e,i=this.renderer.getPixelRatio();this.canvas.width=t,this.canvas.height=e,3==this.dim?this.camera.aspect=n:(this.camera.left=-1*n,this.camera.right=1*n,this.camera.top=1,this.camera.bottom=-1),this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.pickingTexture.setSize(t*i,e*i),this.timeline.resize(e,this.currentFrame/this.projectionMatrices.length),this.axisLabels.map((function(t){return t.setDpr(i)}))},t.prototype.renderValue=function(t){var e=this;this.config=t.config,this.dataset=t.dataset,this.crosstalkIndex=t.crosstalk.crosstalkIndex,this.crosstalkGroup=t.crosstalk.crosstalkGroup,this.crosstalkIndex&&(this.crosstalkSelectionHandle=new crosstalk.SelectionHandle,this.crosstalkSelectionHandle.setGroup(this.crosstalkGroup),this.crosstalkSelectionHandle.on("change",(function(t){return e.setPointIndicesFromCrosstalkEvent(t)}))),this.projectionMatrices=t.projectionMatrices,this.dim=t.projectionMatrices[0][0].length,3==this.dim?this.multiply=l.multiply3:this.multiply=l.multiply2,t.config.edges[0]&&(this.hasEdges=!0,this.edges=[].concat.apply([],t.config.edges)),this.hasPointLabels=0!=t.mapping.label.length,this.hasAxes=this.config.axes,this.addCamera(this.dim),this.mapping=t.mapping,this.constructPlot(),this.animate()},t.prototype.getContainerElement=function(){return this.container},t.prototype.addAxisSegments=function(){var t=new r.BufferGeometry,e=new r.LineBasicMaterial({color:0,linewidth:1}),n=this.getAxisLinesBuffer(0);t.setAttribute("position",n),this.axisSegments=new r.LineSegments(t,e),this.scene.add(this.axisSegments)},t.prototype.addEdgeSegments=function(t){var e=new r.BufferGeometry,n=new r.LineBasicMaterial({color:0,linewidth:1}),i=this.getEdgesBuffer(t);e.setAttribute("position",i),this.edgeSegments=new r.LineSegments(e,n),this.scene.add(this.edgeSegments)},t.prototype.addContainerElement=function(t){t.className="scatterWidgetContainer",this.container=t},t.prototype.addScene=function(){var t=new r.Scene;t.background=new r.Color(268435455);var e=new r.AmbientLight(4210752);t.add(e),this.scene=t},t.prototype.addCanvas=function(){var t=document.createElement("canvas");t.width=this.width,t.height=this.height,t.id=this.container.id+"-canvas",t.className="scatterWidgetCanvas",this.container.appendChild(t),this.canvas=t},t.prototype.addCamera=function(t){var e,n=this.width/this.height;3==t?(e=new r.PerspectiveCamera(45,n,.01,1e3)).position.setZ(4):((e=new r.OrthographicCamera(-1*n,1*n,1,-1,-1e3,1e3)).position.setY(4),e.up.set(0,-1,0)),this.camera=e},t.prototype.addRenderer=function(){var t=new r.WebGLRenderer({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(window.devicePixelRatio),t.setSize(this.width,this.height),this.renderer=t},t.prototype.addOrbitControls=function(){var t=new h.OrbitControls(this.camera,this.renderer.domElement);2==this.dim&&(t.minPolarAngle=Math.PI,t.maxPolarAngle=Math.PI),this.orbitControls=t},t.prototype.addToolTip=function(){var t=document.createElement("div"),e=document.createElement("span");t.appendChild(e),e.innerHTML="hello",t.className="tooltip",this.container.appendChild(t),this.toolTip=t},t.prototype.addTimeline=function(){this.timeline=new a.Timeline(this),this.container.appendChild(this.timeline.getElement()),this.timeline.resize(this.height,this.currentFrame/this.projectionMatrices.length)},t.prototype.getShaderOpts=function(t,e){var n;return(n=2==e?{uniforms:{size:{value:Math.max(t,this.minPointSize)},zoom:{value:this.camera.zoom},antialias:{value:1}},vertexShader:c.VERTEX_SHADER_2D}:{uniforms:{size:{value:Math.max(t,this.minPointSize)},antialias:{value:1}},vertexShader:c.VERTEX_SHADER_3D}).fragmentShader=c.FRAGMENT_SHADER,n.extensions={derivatives:!0},n.transparent=!0,n.depthTest=!1,n},t.prototype.getPointsBuffer=function(t,e){var n=this.multiply(this.dataset,this.projectionMatrices[t]);if(e){var i=this.multiply(this.colMeans,this.projectionMatrices[t]);n=l.centerColumns(n,i)}var o=new Float32Array([].concat.apply([],n));return new r.BufferAttribute(o,3)},t.prototype.getAxisLinesBuffer=function(t){var e,n=this.projectionMatrices[t];return 3==this.dim?e=n.map((function(t){return[0,0,0].concat(t)})):2==this.dim&&(e=n.map((function(t){return[0,0,0,t[0],0,t[1]]}))),new r.BufferAttribute(new Float32Array([].concat.apply([],e)),3)},t.prototype.getEdgesBuffer=function(t){for(var e=new Float32Array(3*this.edges.length),n=new r.BufferAttribute(e,3),i=0;i<this.edges.length;i++)n.set([t.getX(this.edges[i]-1),t.getY(this.edges[i]-1),t.getZ(this.edges[i]-1)],3*i);return n},t.prototype.coloursToBufferAttribute=function(t){var e=new r.Color,n=new Float32Array(3*this.dataset.length);if(t.length>0)for(var i=0,o=0;o<t.length;o++)i=3*o,e.set(t[o]),n[i]=e.r,n[i+1]=e.g,n[i+2]=e.b;return new r.BufferAttribute(n,3)},t.prototype.getPointAlphas=function(){return new r.BufferAttribute(new Float32Array(this.dataset.length).fill(this.config.alpha),1)},t.prototype.getPickingColours=function(){for(var t=new Float32Array(3*this.dataset.length),e=0,n=1;n<=this.dataset.length;n++)t[e]=(n>>16&255)/255,t[e+1]=(n>>8&255)/255,t[e+2]=(255&n)/255,e+=3;return new r.BufferAttribute(t,3)},t.prototype.addControls=function(){var t=this;this.addButton("reset","Reset camera position",p.resetIcon,(function(){t.orbitControls.reset(),t.setDefaultPointColours()})),this.addButton("pan","Switch to pan controls",p.panIcon,(function(){return t.setControlType("PAN")})),this.addButton("orbit","Switch to orbit controls",p.orbitIcon,(function(){return t.setControlType("ORBIT")})),this.addButton("select","Switch to selection controls",p.selectIcon,(function(){return t.setControlType("SELECT")})),this.addButton("brush","Colour selected points",p.brushIcon,(function(){return t.setSelectedPointColour()})),this.addColourSelector(),this.controlType="ORBIT",this.container.querySelector(".orbitButton").className="orbitButton selected"},t.prototype.addButton=function(t,e,n,i){var o=document.createElement("button");o.innerHTML=n,o.title=e,o.className=t+"Button",o.onclick=function(){return i()},this.container.appendChild(o)},t.prototype.addColourSelector=function(){var t=this,e=document.createElement("input");e.setAttribute("type","color"),e.className="colourSelector",e.setAttribute("value","#619CFF"),e.setAttribute("title","Select colour to apply using selection box"),e.addEventListener("change",(function(){return t.setSelectedPointColour()})),this.container.appendChild(e),this.colourSelector=e},t.prototype.addAxisLabels=function(){var t=this,e=this.renderer.getPixelRatio();this.config.axisLabels==[]?this.hasAxisLabels=!1:(this.hasAxisLabels=!0,this.axisLabels=this.config.axisLabels.map((function(n){return new m(n,[0,0,0],t.container,t.canvas,t.camera,t.dim,e)})))},t.prototype.setPointIndicesFromBoxSelection=function(t){var e=this,n=this,i=n.pickingTexture,o=n.renderer,s=n.canvas,r=o.getPixelRatio(),a=s.getBoundingClientRect(),l=(Math.min(t.startPoint.x,t.endPoint.x)-a.left)*r,c=(Math.max(t.startPoint.y,t.endPoint.y)-a.top)*r,h=Math.abs(t.startPoint.x-t.endPoint.x)*r,u=Math.abs(t.startPoint.y-t.endPoint.y)*r,d=new Uint8Array(4*h*u);o.readRenderTargetPixels(i,l,i.height-c,h,u,d);for(var p,f=new Set,m=0;m<h*u;m++)0!=(p=d[4*m]<<16|d[4*m+1]<<8|d[4*m+2])&&16777215!=p&&f.add(p-1);this.selectedPointIndices=Array.from(f),this.crosstalkIndex&&this.crosstalkSelectionHandle.set(this.selectedPointIndices.map((function(t){return e.crosstalkIndex[t]})))},t.prototype.setPointIndicesFromCrosstalkEvent=function(t){var e=this;if(t.sender!=this.crosstalkSelectionHandle){var n=t.value.map((function(t){return e.crosstalkIndex.indexOf(t)}));!0===(crosstalk.var("plotlyCrosstalkOpts").get()||{}).persistent&&(n=this.selectedPointIndices.concat(n)),this.selectedPointIndices=n,this.highlightSelectedPoints()}},t.prototype.setTooltipFromHover=function(t){var e=this,n=e.pickingTexture,i=e.renderer,o=e.canvas,s=i.getPixelRatio(),r=o.getBoundingClientRect(),a=(t.x-r.left)*s,l=(t.y-r.top)*s,c=new Uint8Array(12);i.readRenderTargetPixels(n,a,n.height-l,1,1,c);var h=c[0]<<16|c[1]<<8|c[2];if(0!=h&&16777215!=h){var u=this.toolTip.getBoundingClientRect();this.toolTip.style.left=Math.floor(a/s)-u.width+"px",this.toolTip.style.top=Math.floor(l/s)-u.height+"px",this.toolTip.className="tooltip visible",this.toolTip.querySelector("span").innerHTML=""+this.mapping.label[h-1]}else this.toolTip.className="tooltip"},t.prototype.animate=function(){var t=this,e=this.clock.getDelta();this.getIsPaused()||(this.time+=e),this.time>=this.config.duration&&(this.time=0);var n=Math.floor(this.time*this.config.fps);if(this.currentFrame=n,n!=this.oldFrame){if(this.currentFrameBuffer=this.nextFrameBuffer,this.points.geometry.setAttribute("position",this.currentFrameBuffer),this.points.geometry.attributes.position.needsUpdate=!0,this.nextFrameBuffer=this.getPointsBuffer((n+1)%this.projectionMatrices.length,this.config.center),this.hasAxes&&(this.axisSegments.geometry.setAttribute("position",this.getAxisLinesBuffer(n)),this.axisSegments.geometry.attributes.position.needsUpdate=!0),this.hasEdges){var i=this.getEdgesBuffer(this.currentFrameBuffer);this.edgeSegments.geometry.setAttribute("position",i)}this.oldFrame=n,this.timeline.updatePosition(n/this.projectionMatrices.length)}2==this.dim&&(this.points.material.uniforms.zoom.value=this.camera.zoom),this.renderer.render(this.scene,this.camera),this.points.geometry.setAttribute("color",this.pickingColours),this.points.material.uniforms.antialias.value=0,this.renderer.setRenderTarget(this.pickingTexture),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.points.geometry.setAttribute("color",this.pointColours),this.points.material.uniforms.antialias.value=1,this.hasAxisLabels&&this.axisLabels.map((function(e,i){return e.updatePosition(t.projectionMatrices[n][i],t.camera)})),requestAnimationFrame((function(){return t.animate()}))},t.prototype.getIsPaused=function(){return this.isPaused},t.prototype.setIsPaused=function(t){this.isPaused=t,t||this.animate(),this.timeline.updatePlayPauseIcon(t)},t.prototype.setTime=function(t){this.time=this.config.duration*t},t.prototype.setControlType=function(t){var e=this.controlType.toString().toLowerCase()+"Button",n=t.toString().toLowerCase()+"Button",i=this.container.querySelector("."+e),o=this.container.querySelector("."+n);switch(t){case"ORBIT":"SELECT"==this.controlType&&this.setSelectionMode(!1),this.orbitControls.mouseButtons={LEFT:r.MOUSE.ROTATE,MIDDLE:r.MOUSE.DOLLY,RIGHT:r.MOUSE.PAN};break;case"PAN":"SELECT"==this.controlType&&this.setSelectionMode(!1),this.orbitControls.mouseButtons={LEFT:r.MOUSE.PAN,MIDDLE:r.MOUSE.DOLLY,RIGHT:r.MOUSE.ROTATE};break;case"SELECT":this.setSelectionMode(!0)}this.controlType=t,i.className=e+" unselected",o.className=n+" selected"},t.prototype.setSelectedPointColour=function(){for(var t=new r.Color(this.colourSelector.value),e=0,n=this.selectedPointIndices;e<n.length;e++){var i=n[e];this.pointColours.set([t.r,t.g,t.b],3*i)}this.pointColours.needsUpdate=!0},t.prototype.setDefaultPointColours=function(){this.pointColours=this.coloursToBufferAttribute(this.mapping.colour)},t.prototype.highlightSelectedPoints=function(){if(0==this.selectedPointIndices.length)this.pointAlphas.set(new Float32Array(this.dataset.length).fill(this.config.alpha),0);else for(var t=0;t<this.dataset.length;t++)this.selectedPointIndices.includes(t)?this.pointAlphas.set([this.config.alpha],t):this.pointAlphas.set([this.config.alpha/4],t);this.pointAlphas.needsUpdate=!0},t.prototype.setSelectionMode=function(t){var e=this.container.querySelector("button.selectButton");t?(this.orbitControls.enabled=!1,e.className="selectButton selected",this.selectionHelper.element.className="selectBox enabled",this.renderer.domElement.addEventListener("pointerdown",this.selectionStartEventListener),this.renderer.domElement.addEventListener("pointermove",this.selectionMoveEventListener),this.renderer.domElement.addEventListener("pointerup",this.selectionEndEventListener)):(e.className="selectButton unselected",this.orbitControls.enabled=!0,this.renderer.domElement.removeEventListener("pointerdown",this.selectionStartEventListener),this.renderer.domElement.removeEventListener("pointermove",this.selectionMoveEventListener),this.renderer.domElement.removeEventListener("pointerup",this.selectionEndEventListener),this.selectionHelper.element.className="selectBox disabled")},t.prototype.resetClock=function(){this.time=0},t}();e.ScatterWidget=f;var m=function(){function t(t,e,n,i,o,s,a){this.div=document.createElement("div"),this.div.innerHTML=t,this.div.className="axisLabel",this.canvas=i,this.text=t,this.position=new r.Vector3,this.dim=s,this.dpr=a,n.appendChild(this.div),this.updatePosition(e,o)}return t.prototype.updatePosition=function(t,e){3==this.dim?this.position.set(t[0],t[1],t[2]):this.position.set(t[0],0,t[1]);var n=this.get2DCoords(e);this.div.style.left=n.x+"px",this.div.style.top=n.y+"px"},t.prototype.setDpr=function(t){this.dpr=t},t.prototype.get2DCoords=function(t){var e=this.position.project(t);return e.x=(e.x+1)*this.canvas.width/(2*this.dpr),e.y=-(e.y-1)*this.canvas.height/(2*this.dpr),e},t}()},148:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.VERTEX_SHADER_2D=e.VERTEX_SHADER_3D=e.FRAGMENT_SHADER=void 0,e.FRAGMENT_SHADER="\nvarying float vSize;\nvarying vec3 vColor;\nvarying float vAlpha;\nvarying float vAntialias;\n\nvoid main(){\n    \n    // make points circular\n    float distance = length(2.0 * gl_PointCoord - 1.0);\n    if (distance > 1.0) {\n        discard;\n    }\n    // alpha value for antialiased edges. fwidth is fragment width, i.e. 1px\n    float delta = fwidth(distance);\n    float edgeAlpha = smoothstep(1.0, 1.0-delta, distance);\n\n    float alpha;\n    if (vAntialias == 1.) {\n        alpha = edgeAlpha*vAlpha;\n    } else {\n        alpha = 1.0;\n    }\n\n    gl_FragColor = vec4(vColor, alpha);\n}\n",e.VERTEX_SHADER_3D="\nuniform float size;\nuniform float antialias;\n\nattribute vec3 color;\nattribute float alpha;\n\n// passed to fragment shader\nvarying vec3 vColor;\nvarying float vAlpha;\nvarying float vAntialias;\n\nvoid main(){\n    vColor=color;\n    vAlpha=alpha;\n    vAntialias = antialias;\n    \n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0);\n    gl_Position = projectionMatrix * mvPosition;\n    gl_PointSize = 200.0 * size / -mvPosition.z;\n}\n",e.VERTEX_SHADER_2D="\nuniform float size;\nuniform float zoom;\nuniform float antialias;\n\nattribute float alpha;\nattribute vec3 color;\n\n// passed to fragment shader\nvarying vec3 vColor;\nvarying float vAlpha;\nvarying float vAntialias;\n\nvoid main(){\n    vColor=color;\n    vAlpha = alpha;\n    vAntialias = antialias;\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0);\n    gl_Position = projectionMatrix * mvPosition;\n    gl_PointSize = 100.0 * size * sqrt(zoom);\n}\n"},578:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Timeline=void 0;var i=n(28),o=function(){function t(t){var e=this;this.scrubberWidth=20,this.mouseDown=!1,this.scatterWidget=t,this.parentDiv=t.getContainerElement();var n=document.createElement("div");n.className="scatterWidgetTimeline";var o=document.createElement("div");o.style.left="0px",o.style.width=this.scrubberWidth+"px",o.style.height=this.scrubberWidth+"px",o.className="scatterWidgetScrubber",o.onmousedown=function(t){e.mouseDown=!0,e.lastMousePosition=t.clientX,e.scatterWidget.setIsPaused(!0)},this.parentDiv.onmousemove=function(t){t.preventDefault(),e.mouseDown&&(e.currentPosition=parseInt(e.scrubber.style.left),e.candidatePosition=e.currentPosition+(t.clientX-e.lastMousePosition),e.candidatePosition=Math.min(e.timelineWidth,e.candidatePosition),e.candidatePosition=Math.max(0,e.candidatePosition),e.scrubber.style.left=e.candidatePosition+"px",e.scatterWidget.setTime(e.candidatePosition/(e.timelineWidth+1)),console.log(e.candidatePosition),e.lastMousePosition=t.clientX)},document.documentElement.onmouseup=function(){e.mouseDown=!1},document.documentElement.onmouseleave=function(){e.mouseDown=!1},this.playPauseButton=this.addButton("playPause","Play / Pause",i.pauseIcon,(function(){return e.scatterWidget.setIsPaused(!e.scatterWidget.getIsPaused())})),n.appendChild(o),this.timeline=n,this.scrubber=o}return t.prototype.updatePosition=function(t){this.mouseDown||(this.scrubber.style.left=Math.floor(this.timelineWidth*t)+"px")},t.prototype.updatePlayPauseIcon=function(t){this.playPauseButton.innerHTML=t?i.playIcon:i.pauseIcon},t.prototype.addButton=function(t,e,n,i){var o=document.createElement("button");return o.innerHTML=n,o.title=e,o.className=t+"Button",o.onclick=function(){return i()},this.parentDiv.appendChild(o),o},t.prototype.getElement=function(){return this.timeline},t.prototype.resize=function(t,e){this.timeline.style.top=t-30+"px",this.playPauseButton.style.top=t-40+"px",this.timelineWidth=this.timeline.offsetWidth-this.scrubberWidth,this.updatePosition(e)},t}();e.Timeline=o},681:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.centerColumns=e.getColMeans=e.multiply2=e.multiply3=void 0,e.multiply3=function(t,e){for(var n=t.length,i=t[0].length,o=new Array(n),s=0;s<n;++s){var r=new Array(3);o[s]=r;for(var a=t[s],l=0;l<3;++l){for(var c=0,h=0;h<i;++h)c+=a[h]*e[h][l];r[l]=c}}return o},e.multiply2=function(t,e){for(var n=t.length,i=t[0].length,o=new Array(n),s=0;s<n;++s){var r=new Array(3);o[s]=r;for(var a=t[s],l=0;l<2;l++){for(var c=0,h=0;h<i;++h)c+=a[h]*e[h][l];r[2*l]=c}r[1]=0}return o},e.getColMeans=function(t){var e=t.length;return[t.reduce((function(t,e){return t.map((function(t,n){return t+e[n]}))})).map((function(t){return t/e}))]},e.centerColumns=function(t,e){return t.map((function(t){return t.map((function(t,n){return t-e[0][n]}))}))}}},n={};function i(t){var o=n[t];if(void 0!==o)return o.exports;var s=n[t]={id:t,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.exports}i.m=e,t=[],i.O=(e,n,o,s)=>{if(!n){var r=1/0;for(c=0;c<t.length;c++){for(var[n,o,s]=t[c],a=!0,l=0;l<n.length;l++)(!1&s||r>=s)&&Object.keys(i.O).every((t=>i.O[t](n[l])))?n.splice(l--,1):(a=!1,s<r&&(r=s));a&&(t.splice(c--,1),e=o())}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[n,o,s]},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={499:0};i.O.j=e=>0===t[e];var e=(e,n)=>{var o,s,[r,a,l]=n,c=0;for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(l)var h=l(i);for(e&&e(n);c<r.length;c++)s=r[c],i.o(t,s)&&t[s]&&t[s][0](),t[r[c]]=0;return i.O(h)},n=self.webpackChunkscatter_widget=self.webpackChunkscatter_widget||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var o=i.O(void 0,[841],(()=>i(467)));o=i.O(o),scatter_widget=o})();