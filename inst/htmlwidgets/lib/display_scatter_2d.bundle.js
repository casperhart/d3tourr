!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.display_scatter_2d=e():t.display_scatter_2d=e()}(self,(function(){return(self.webpackChunk_name_=self.webpackChunk_name_||[]).push([[365],{444:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});var n=i(645),s=i.n(n)()((function(t){return t[1]}));s.push([t.id,"button {\n  background-color: transparent;\n  position: absolute;\n  color: rgb(0, 0, 0);\n  text-align: center;\n  width: 30px;\n  height: 30px;\n  border-color: transparent;\n  left: 10px;\n}\n\nbutton:hover {\n  color: rgb(56, 56, 56);\n}\n\nbutton.resetButton {\n  top: 15px;\n  border: 5px;\n}\n\nbutton.panButton {\n  top: 50px;\n  border: 5px;\n}\n\nbutton.orbitButton {\n  top: 85px;\n  border: 5px;\n}\n\nbutton.selectButton {\n  top: 120px;\n  border: 5px;\n}\n\nbutton.brushButton {\n  top: 155px;\n  border: 5px;\n}\n\nbutton.unselected {\n  color: rgb(75, 75, 75);\n}\n\nbutton.selected {\n  color: rgb(44, 44, 240);\n}\n\ninput.colourSelector {\n  position: absolute;\n  top: 190px;\n  left: 13px;\n  width: 22px;\n  height: 22px;\n}\n\n.scatterWidgetContainer {\n  position: relative;\n  overflow: hidden;\n}\n\n.scatterWidgetCanvas {\n  position: relative;\n}\n\n.selectionBox {\n  border: 1px solid #55aaff;\n  background-color: rgba(75, 160, 255, 0.3);\n  position: absolute;\n}\n\ndiv.axisLabel {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: absolute;\n  font-family: Helvetica, Sans-serif;\n  pointer-events: none;\n}\n\ndiv.tooltip {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background: rgba(0,0,0,0.5);\n  padding: 5px;\n  visibility: hidden;\n  border-radius: 5px;\n  color: white;\n  font-family: sans-serif;\n}\n\ndiv.tooltip.visible {\n  visibility: visible;\n}\n\ndiv.timelineContainer {\n  position: absolute; \n  left: 10px;\n  right: 10px;\n}\n\ndiv.timeline {\n  position: absolute;\n  left: 50px; \n  right: 20px;\n  background-color: rgba(0,0,0,0.7);\n  border-radius: 5px;\n  z-index: 0;\n}\n\ndiv.scrubber {\n  position: absolute;\n  background-color: rgba(0,0,0, 0.5);\n  border-radius: 50%; \n  cursor: move;\n  left: 0px;\n  z-index: 1;\n}\n\ndiv.basisIndicator {\n  position: absolute;\n  background-color: rgb(255,255,255);\n  border-radius: 50%;\n  z-index: 0.5;\n}\n\ndiv.scrubber.active {\n    cursor: move;\n}\n",""]);const o=s},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(n)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(s[r]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);n&&s[c[0]]||(i&&(c[2]?c[2]="".concat(i," and ").concat(c[2]):c[2]=i),e.push(c))}},e}},770:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>v});var n=i(379),s=i.n(n),o=i(795),r=i.n(o),a=i(569),c=i.n(a),l=i(565),h=i.n(l),u=i(216),d=i.n(u),p=i(589),f=i.n(p),m=i(444),g={};g.styleTagTransform=f(),g.setAttributes=h(),g.insert=c().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=d(),s()(m.Z,g);const v=m.Z&&m.Z.locals?m.Z.locals:void 0},379:t=>{"use strict";var e=[];function i(t){for(var i=-1,n=0;n<e.length;n++)if(e[n].identifier===t){i=n;break}return i}function n(t,n){for(var o={},r=[],a=0;a<t.length;a++){var c=t[a],l=n.base?c[0]+n.base:c[0],h=o[l]||0,u="".concat(l," ").concat(h);o[l]=h+1;var d=i(u),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(e[d].references++,e[d].updater(p)):e.push({identifier:u,updater:s(p,n),references:1}),r.push(u)}return r}function s(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i.update(t=e)}else i.remove()}}t.exports=function(t,s){var o=n(t=t||[],s=s||{});return function(t){t=t||[];for(var r=0;r<o.length;r++){var a=i(o[r]);e[a].references--}for(var c=n(t,s),l=0;l<o.length;l++){var h=i(o[l]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}o=c}}},569:t=>{"use strict";var e={};t.exports=function(t,i){var n=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},565:(t,e,i)=>{"use strict";t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(i){!function(t,e,i){var n=i.css,s=i.media,o=i.sourceMap;s?t.setAttribute("media",s):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(n,t)}(e,t,i)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},465:function(t,e,i){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,i,n){void 0===n&&(n=i),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[i]}})}:function(t,e,i,n){void 0===n&&(n=i),t[n]=e[i]}),s=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.prototype.hasOwnProperty.call(t,i)&&n(e,t,i);return s(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.AxisLabel=void 0;var r=o(i(212)),a=function(){function t(t,e,i,n,s,o,a){this.div=document.createElement("div"),this.div.innerHTML=t,this.div.className="axisLabel",this.canvas=n,this.text=t,this.position=new r.Vector3,this.dim=o,this.dpr=a,i.appendChild(this.div),this.updatePosition(e,s)}return t.prototype.updatePosition=function(t,e){3==this.dim?this.position.set(t[0],t[1],t[2]):this.position.set(t[0],0,t[1]);var i=this.get2DCoords(e);this.div.style.left=i.x+"px",this.div.style.top=i.y+"px"},t.prototype.setDpr=function(t){this.dpr=t},t.prototype.get2DCoords=function(t){var e=this.position.project(t);return e.x=(e.x+1)*this.canvas.width/(2*this.dpr),e.y=-(e.y-1)*this.canvas.height/(2*this.dpr),e},t}();e.AxisLabel=a},237:function(t,e,i){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,i,n){void 0===n&&(n=i),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[i]}})}:function(t,e,i,n){void 0===n&&(n=i),t[n]=e[i]}),s=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.prototype.hasOwnProperty.call(t,i)&&n(e,t,i);return s(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.DisplayScatter=void 0;var r=o(i(212)),a=i(104),c=i(435),l=i(684),h=i(465),u=i(543);i(770);var d=function(){function t(t,e,i){this.minPointSize=.02,this.canvas=document.createElement("canvas"),this.clock=new r.Clock,this.hasEdges=!1,this.width=e,this.height=i,this.addContainerElement(t),this.addCanvas(),this.addScene(),this.addRenderer(),this.addControls(),this.addSleepEventListeners()}return t.prototype.constructPlot=function(){var t=this;this.colMeans=c.getColMeans(this.dataset),this.setDefaultPointColours(),this.setDefaultFilterSelection(),this.setDefaultPointSelection(),this.pickingColours=this.getPickingColours(),this.hasPointLabels&&(this.addToolTip(),this.canvas.addEventListener("mousemove",(function(e){return t.setTooltipFromHover(e)})));var e=new r.BufferGeometry,i=this.config.size/10,n=this.getShaderOpts(i),s=new r.ShaderMaterial(n);this.currentFrameBuffer=this.getPointsBuffer(0,this.config.center),e.setAttribute("position",this.currentFrameBuffer),this.points=new r.Points(e,s),this.points.geometry.setAttribute("color",this.pointColours),this.pointAlphas=this.getPointAlphas(),this.points.geometry.setAttribute("alpha",this.pointAlphas),this.scene.add(this.points),this.hasAxes&&(this.addAxisSegments(),this.addAxisLabels()),this.hasEdges&&this.addEdgeSegments(this.currentFrameBuffer),this.addOrbitControls();var o=this.renderer.getPixelRatio();this.pickingTexture=new r.WebGLRenderTarget(this.width*o,this.height*o),this.selectionHelper=new l.SelectionHelper(this),this.addTimeline(),this.clock=new r.Clock,this.time=0,this.oldFrame=-1,this.isPaused=!1},t.prototype.resize=function(t,e){var i=t/e,n=this.renderer.getPixelRatio();this.canvas.width=t,this.canvas.height=e,this.resizeCamera(i),this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.pickingTexture.setSize(t*n,e*n),this.timeline.resize(e,this.currentFrame/this.projectionMatrices.length),this.axisLabels.map((function(t){return t.setDpr(n)}))},t.prototype.renderValue=function(t){var e=this;this.config=t.config,this.dataset=t.dataset,this.crosstalkIndex=t.crosstalk.crosstalkIndex,this.crosstalkGroup=t.crosstalk.crosstalkGroup,this.crosstalkIndex&&(this.crosstalkSelectionHandle=new crosstalk.SelectionHandle,this.crosstalkSelectionHandle.setGroup(this.crosstalkGroup),this.crosstalkSelectionHandle.on("change",(function(t){return e.setPointSelectionFromCrosstalkEvent(t)})),this.crosstalkFilterHandle=new crosstalk.FilterHandle,this.crosstalkFilterHandle.setGroup(this.crosstalkGroup),this.crosstalkFilterHandle.on("change",(function(t){return e.setPointFilterFromCrosstalkEvent(t)}))),this.projectionMatrices=t.projectionMatrices,this.dim=t.projectionMatrices[0][0].length,t.config.edges[0]&&(this.hasEdges=!0,this.edges=t.config.edges.flat()),this.hasPointLabels=0!=t.mapping.label.length,this.hasAxes=this.config.axes,this.addCamera(),this.mapping=t.mapping,this.scene.background=new r.Color(t.config.backgroundColour),this.backgroundColour=parseInt(t.config.backgroundColour.substring(1),16),this.constructPlot(),this.animate(),this.setIsPaused(this.config.paused)},t.prototype.addAxisSegments=function(){var t=new r.BufferGeometry,e=new r.LineBasicMaterial({color:0,linewidth:1}),i=this.getAxisLinesBuffer(0);t.setAttribute("position",i),this.axisSegments=new r.LineSegments(t,e),this.scene.add(this.axisSegments)},t.prototype.addEdgeSegments=function(t){var e=new r.BufferGeometry,i=new r.LineBasicMaterial({color:0,linewidth:1}),n=this.getEdgesBuffer(t);e.setAttribute("position",n),this.edgeSegments=new r.LineSegments(e,i),this.scene.add(this.edgeSegments)},t.prototype.addContainerElement=function(t){t.className="scatterWidgetContainer",this.container=t},t.prototype.addScene=function(){var t=new r.Scene,e=new r.AmbientLight(4210752);t.add(e),this.scene=t},t.prototype.addCanvas=function(){var t=document.createElement("canvas");t.width=this.width,t.height=this.height,t.id=this.container.id+"-canvas",t.className="scatterWidgetCanvas",this.container.appendChild(t),this.canvas=t},t.prototype.addRenderer=function(){var t=new r.WebGLRenderer({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(window.devicePixelRatio),t.setSize(this.width,this.height),this.renderer=t},t.prototype.addToolTip=function(){var t=document.createElement("div"),e=document.createElement("span");t.appendChild(e),e.innerHTML="hello",t.className="tooltip",this.container.appendChild(t),this.toolTip=t},t.prototype.addTimeline=function(){this.timeline=new a.Timeline(this),this.container.appendChild(this.timeline.getElement()),this.timeline.resize(this.height,this.currentFrame/this.projectionMatrices.length)},t.prototype.getPointsBuffer=function(t,e){var i=this.multiply(this.dataset,this.projectionMatrices[t]);if(e){var n=this.multiply(this.colMeans,this.projectionMatrices[t]);i=c.centerColumns(i,n)}var s=new Float32Array(i.flat());return new r.BufferAttribute(s,3)},t.prototype.getAxisLinesBuffer=function(t){var e=this.projectionMatrices[t],i=this.projectionMatrixToAxisLines(e);return new r.BufferAttribute(new Float32Array(i.flat()),3)},t.prototype.getEdgesBuffer=function(t){for(var e=new Float32Array(3*this.edges.length),i=new r.BufferAttribute(e,3),n=0;n<this.edges.length;n++)i.set([t.getX(this.edges[n]-1),t.getY(this.edges[n]-1),t.getZ(this.edges[n]-1)],3*n);return i},t.prototype.coloursToBufferAttribute=function(t){var e=new r.Color,i=new Float32Array(3*this.dataset.length);if(t.length>0)for(var n=0,s=0;s<t.length;s++)n=3*s,e.set(t[s]),i[n]=e.r,i[n+1]=e.g,i[n+2]=e.b;return new r.BufferAttribute(i,3)},t.prototype.getPointAlphas=function(){return new r.BufferAttribute(new Float32Array(this.dataset.length).fill(this.config.alpha),1)},t.prototype.getPickingColours=function(){for(var t=new Float32Array(3*this.dataset.length),e=0,i=1;i<=this.dataset.length;i++)t[e]=(i>>16&255)/255,t[e+1]=(i>>8&255)/255,t[e+2]=(255&i)/255,e+=3;return new r.BufferAttribute(t,3)},t.prototype.addControls=function(){var t=this;this.addButton("reset","Reset camera position",u.resetIcon,(function(){t.orbitControls.reset(),t.setDefaultPointColours(),t.setDefaultPointSelection(),t.setControlType("ORBIT")})),this.addButton("pan","Switch to pan controls",u.panIcon,(function(){return t.setControlType("PAN")})),this.addButton("orbit","Switch to orbit controls",u.orbitIcon,(function(){return t.setControlType("ORBIT")})),this.addButton("select","Switch to selection controls",u.selectIcon,(function(){return t.setControlType("SELECT")})),this.addButton("brush","Colour selected points",u.brushIcon,(function(){return t.setSelectedPointColour()})),this.addColourSelector(),this.controlType="ORBIT",this.container.querySelector(".orbitButton").className="orbitButton selected"},t.prototype.addButton=function(t,e,i,n){var s=document.createElement("button");s.innerHTML=i,s.title=e,s.className=t+"Button",s.onclick=function(){return n()},this.container.appendChild(s)},t.prototype.addColourSelector=function(){var t=this,e=document.createElement("input");e.setAttribute("type","color"),e.className="colourSelector",e.setAttribute("value","#619CFF"),e.setAttribute("title","Select colour to apply using selection box"),e.addEventListener("change",(function(){return t.setSelectedPointColour()})),this.container.appendChild(e),this.colourSelector=e},t.prototype.addAxisLabels=function(){var t=this,e=this.renderer.getPixelRatio();this.config.axisLabels==[]?this.hasAxisLabels=!1:(this.hasAxisLabels=!0,this.axisLabels=this.config.axisLabels.map((function(i){return new h.AxisLabel(i,[0,0,0],t.container,t.canvas,t.camera,t.dim,e)})))},t.prototype.addSleepEventListeners=function(){var t=this;this.container.addEventListener("mouseover",(function(){return t.wakeEventListener()})),this.container.addEventListener("scroll",(function(){return t.wakeEventListener()})),this.container.addEventListener("keydown",(function(){return t.wakeEventListener()})),this.container.addEventListener("mouseleave",(function(){return t.sleepEventListener()}))},t.prototype.setPointSelectionFromBox=function(t,e,i){var n=this,s=this.pickingTexture,o=this.renderer,r=o.getPixelRatio(),a=t.x*r,c=e.y*r,l=(e.x-t.x)*r,h=(e.y-t.y)*r,u=new Uint8Array(4*l*h);o.readRenderTargetPixels(s,a,s.height-c,l,h,u);for(var d,p=new Set,f=0;f<l*h;f++)0!=(d=u[4*f]<<16|u[4*f+1]<<8|u[4*f+2])&&d!=this.backgroundColour&&this.filteredPointIndices.includes(d-1)&&p.add(d-1);i&&this.selectedPointIndices.map((function(t){return p.add(t)})),this.selectedPointIndices=Array.from(p),this.crosstalkIndex&&this.crosstalkSelectionHandle.set(this.selectedPointIndices.map((function(t){return n.crosstalkIndex[t]}))),this.highlightSelectedPoints()},t.prototype.setPointSelectionFromCrosstalkEvent=function(t){var e=this;if(t.sender!=this.crosstalkSelectionHandle){var i=t.value.map((function(t){return e.crosstalkIndex.indexOf(t)}));!0===(crosstalk.var("plotlyCrosstalkOpts").get()||{}).persistent&&(i=this.selectedPointIndices.concat(i)),this.selectedPointIndices=i,this.highlightSelectedPoints(),this.isSleeping&&this.animate()}},t.prototype.setPointFilterFromCrosstalkEvent=function(t){var e=this;t.value&&0!=t.value.length?this.filteredPointIndices=t.value.map((function(t){return e.crosstalkIndex.indexOf(t)})):this.setDefaultFilterSelection(),this.filterPoints(),this.isSleeping&&this.animate()},t.prototype.setTooltipFromHover=function(t){var e=this,i=e.pickingTexture,n=e.renderer,s=e.canvas,o=n.getPixelRatio(),r=s.getBoundingClientRect(),a=(t.x-r.left)*o,c=(t.y-r.top)*o,l=new Uint8Array(12);n.readRenderTargetPixels(i,a,i.height-c,1,1,l);var h=l[0]<<16|l[1]<<8|l[2];if(0!=h&&h!=this.backgroundColour&&this.filteredPointIndices.includes(h-1)){var u=this.toolTip.getBoundingClientRect();this.toolTip.style.left=Math.floor(a/o)-u.width+"px",this.toolTip.style.top=Math.floor(c/o)-u.height+"px",this.toolTip.className="tooltip visible",this.toolTip.querySelector("span").innerHTML=""+this.mapping.label[h-1]}else this.toolTip.className="tooltip"},t.prototype.animate=function(){var t=this,e=this.clock.getDelta();this.getIsPaused()||(this.time+=e),this.time>=this.config.duration&&(this.time=0);var i=Math.floor(this.time*this.config.fps);if(this.currentFrame=i,i!=this.oldFrame){if(this.currentFrameBuffer=this.getPointsBuffer(i%this.projectionMatrices.length,this.config.center),this.points.geometry.setAttribute("position",this.currentFrameBuffer),this.points.geometry.attributes.position.needsUpdate=!0,this.hasAxes&&(this.axisSegments.geometry.setAttribute("position",this.getAxisLinesBuffer(i)),this.axisSegments.geometry.attributes.position.needsUpdate=!0),this.hasEdges){var n=this.getEdgesBuffer(this.currentFrameBuffer);this.edgeSegments.geometry.setAttribute("position",n)}this.oldFrame=i,this.timeline.updatePosition(i/(this.projectionMatrices.length-1))}this.adjustPointSizeFromZoom&&this.adjustPointSizeFromZoom(),this.renderer.render(this.scene,this.camera),this.points.geometry.setAttribute("color",this.pickingColours),this.points.material.uniforms.antialias.value=0,this.renderer.setRenderTarget(this.pickingTexture),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.points.geometry.setAttribute("color",this.pointColours),this.points.material.uniforms.antialias.value=1,this.hasAxisLabels&&this.axisLabels.map((function(e,n){return e.updatePosition(t.projectionMatrices[i][n],t.camera)})),this.isSleeping||requestAnimationFrame((function(){return t.animate()}))},t.prototype.getIsPaused=function(){return this.isPaused},t.prototype.setIsPaused=function(t){this.isPaused=t,t||this.animate(),this.timeline.updatePlayPauseIcon(t)},t.prototype.setSleep=function(t){this.isSleeping=t},t.prototype.setTime=function(t){this.time=this.config.duration*t},t.prototype.getBasisIndices=function(){return this.config.basisIndices},t.prototype.getNumAnimationFrames=function(){return this.projectionMatrices.length},t.prototype.setControlType=function(t){var e=this.controlType.toString().toLowerCase()+"Button",i=t.toString().toLowerCase()+"Button",n=this.container.querySelector("."+e),s=this.container.querySelector("."+i);switch(t){case"ORBIT":"SELECT"==this.controlType&&this.setSelectionMode(!1),this.orbitControls.mouseButtons={LEFT:r.MOUSE.ROTATE,MIDDLE:r.MOUSE.DOLLY,RIGHT:r.MOUSE.PAN};break;case"PAN":"SELECT"==this.controlType&&this.setSelectionMode(!1),this.orbitControls.mouseButtons={LEFT:r.MOUSE.PAN,MIDDLE:r.MOUSE.DOLLY,RIGHT:r.MOUSE.ROTATE};break;case"SELECT":this.setSelectionMode(!0)}this.controlType=t,n.className=e+" unselected",s.className=i+" selected"},t.prototype.sleepEventListener=function(){this.isPaused&&this.setSleep(!0)},t.prototype.wakeEventListener=function(){this.isSleeping&&(this.setSleep(!1),this.animate())},t.prototype.setSelectedPointColour=function(){for(var t=new r.Color(this.colourSelector.value),e=0,i=this.selectedPointIndices;e<i.length;e++){var n=i[e];this.pointColours.set([t.r,t.g,t.b],3*n)}this.pointColours.needsUpdate=!0},t.prototype.setDefaultPointColours=function(){this.pointColours=this.coloursToBufferAttribute(this.mapping.colour)},t.prototype.setDefaultPointSelection=function(){this.selectedPointIndices=Array(this.dataset.length).fill(0).map((function(t,e){return e})),this.crosstalkSelectionHandle&&this.crosstalkSelectionHandle.clear()},t.prototype.setDefaultFilterSelection=function(){this.filteredPointIndices=Array(this.dataset.length).fill(0).map((function(t,e){return e}))},t.prototype.highlightSelectedPoints=function(){if(0==this.selectedPointIndices.length)for(var t=0,e=this.filteredPointIndices;t<e.length;t++){var i=e[t];this.pointAlphas.set([this.config.alpha],i)}else for(var n=0,s=this.filteredPointIndices;n<s.length;n++)i=s[n],this.selectedPointIndices.includes(i)?this.pointAlphas.set([this.config.alpha],i):this.pointAlphas.set([this.config.alpha/4],i);this.pointAlphas.needsUpdate=!0},t.prototype.filterPoints=function(){for(var t=0;t<this.dataset.length;t++)this.filteredPointIndices.includes(t)||this.pointAlphas.set([0],t);this.highlightSelectedPoints()},t.prototype.setSelectionMode=function(t){var e=this.container.querySelector("button.selectButton");t?(this.orbitControls.enabled=!1,e.className="selectButton selected",this.selectionHelper.enable()):(e.className="selectButton unselected",this.orbitControls.enabled=!0,this.selectionHelper.disable())},t}();e.DisplayScatter=d},543:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.orbitIcon=e.brushIcon=e.selectIcon=e.panIcon=e.resetIcon=e.playIcon=e.pauseIcon=void 0,e.pauseIcon='\n<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause" class="svg-inline--fa fa-pause fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path></svg>\n',e.playIcon='\n<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" class="svg-inline--fa fa-play fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>\n',e.resetIcon='\n<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="redo-alt" class="svg-inline--fa fa-redo-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"></path></svg>\n',e.panIcon='\n<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrows-alt" class="svg-inline--fa fa-arrows-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971z"></path></svg>',e.selectIcon='\n<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="object-group" class="svg-inline--fa fa-object-group fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M480 128V96h20c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v20H64V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v40c0 6.627 5.373 12 12 12h20v320H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-20h384v20c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-20V128zM96 276V140c0-6.627 5.373-12 12-12h168c6.627 0 12 5.373 12 12v136c0 6.627-5.373 12-12 12H108c-6.627 0-12-5.373-12-12zm320 96c0 6.627-5.373 12-12 12H236c-6.627 0-12-5.373-12-12v-52h72c13.255 0 24-10.745 24-24v-72h84c6.627 0 12 5.373 12 12v136z"></path></svg>\n',e.brushIcon='\n<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paint-brush" class="svg-inline--fa fa-paint-brush fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"></path></svg>\n',e.orbitIcon='\n<svg version="1.1" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  x="0px" y="0px" viewBox="0 0 800 800" style="enable-background:new 0 0 800 800;" xml:space="preserve"><g> <path fill="currentColor" d="M179.7,542.3c-2.3,7-9.8,10.7-16.7,8.3c-41.1-14.5-74.7-32.5-99.8-53.6c-42.5-35.5-51.4-72.1-51.4-96.5  c0-25,9.3-62.3,53.5-98.3c26.3-21.4,61.4-39.6,104.3-54.1c6.9-2.3,14.4,1.5,16.5,8.5l16,51.6c2.1,6.7-1.6,13.9-8.3,16.2  c-32.8,11.2-59.6,24.9-78,39.9c-9,7.3-24,21.7-24,36.3c0,13.4,12.3,26.5,22.7,35.2c17.4,14.5,42.8,27.9,74,39.1  c6.6,2.4,10.1,9.6,7.9,16.2L179.7,542.3z"/></g><g> <path fill="currentColor" d="M401.9,587.4c-10.5,0-21-0.2-31.5-0.6c-7.2-0.3-12.9-6.4-12.5-13.7l2.7-53.9c0.4-7.1,6.4-12.6,13.5-12.3  c9.2,0.3,18.5,0.5,27.8,0.5c88.3,0,170.7-14.2,232.1-39.9c47.4-19.9,78-46.2,78-67s-30.6-47.1-78-67  c-61.3-25.7-143.7-39.9-232.1-39.9c-10.6,0-21.3,0.2-31.9,0.6c-7.1,0.3-13-5.2-13.4-12.3l-3-53.9c-0.4-7.2,5.2-13.4,12.4-13.7  c11.9-0.5,24-0.7,36-0.7c98.7,0,192.1,16.4,263,46.2c81.9,34.4,127,84.4,127,140.8s-45.1,106.4-127,140.8  C594,571,500.6,587.4,401.9,587.4z"/></g><g> <path fill="currentColor" d="M401.9,790.5c-56.4,0-106.4-45.1-140.8-127c-29.8-70.9-46.2-164.3-46.2-263s16.4-192.1,46.2-263  c34.4-81.9,84.4-127,140.8-127c29.4,0,71.6,12.5,110.4,69.8c4.2,6.1,2.3,14.5-4.1,18.4l-46.2,28.1c-5.8,3.5-13.5,2-17.4-3.6  c-14.6-20.8-29.8-32.6-42.7-32.6c-20.8,0-47.1,30.6-67,78c-25.7,61.3-39.9,143.7-39.9,232.1c0,88.3,14.2,170.7,39.9,232.1  c19.9,47.4,46.2,78,67,78c20.8,0,47.1-30.6,67-78c25.7-61.3,39.9-143.7,39.9-232.1c0-15.3-0.4-30.7-1.3-45.8  c-0.4-7.1,4.9-13.2,12-13.8l53.9-4c7.2-0.5,13.5,4.9,13.9,12.2c1,17,1.5,34.2,1.5,51.4c0,98.7-16.4,192.1-46.2,263  C508.3,745.4,458.3,790.5,401.9,790.5z"/></g><g> <path fill="currentColor" d="M511.3,175.3c-3.4,6.6-11.9,9.6-18.6,6.4L441,157.1l-37.5-17.8c-10.1-4.8-8.5-18.9,2.7-22.7L473,93.8l66.8-22.9  c11.1-3.8,21,6.3,16,16.3l-18.7,37L511.3,175.3z"/> <path fill="currentColor" d="M498.6,196.5c-3.9,0-7.9-0.8-11.7-2.6l-89.1-42.3c-9.5-4.5-15-13.7-14.4-23.9c0.6-10.8,7.9-20,18.5-23.7l133.6-45.7  c10.6-3.6,22-0.7,29.1,7.4c6.8,7.8,8,18.4,3.3,27.7l-44.5,88.1C518.5,190.9,508.7,196.5,498.6,196.5z M412.7,128.7l85.8,40.7  c0.2,0,0.7-0.1,0.8-0.3l42.8-84.7L412.7,128.7z"/></g><g> <path fill="currentColor" d="M339.2,540.4c-3.9-6.3-2-15.2,4.3-19.2l47.8-31.3l34.7-22.7c9.4-6.1,20.5,2.6,18,14.1l-15.2,68.9L413.5,619  c-2.5,11.5-16.3,14.7-22.2,5.2L369.4,589L339.2,540.4z"/> <path fill="currentColor" d="M400.9,643.3c-8.5,0-16.4-4.4-21.1-12l-52-83.8c-7.8-12.6-4.1-29.5,8.3-37.7l82.5-54.1c8.8-5.7,19.5-5.7,27.9,0.2  c8.9,6.1,13,17.1,10.6,28.1l-30.5,137.9c-2.4,10.9-10.8,19.2-21.5,21C403.8,643.2,402.3,643.3,400.9,643.3z M350.7,533.3l50.1,80.6  l29.5-133.5l-79.4,52C350.8,532.6,350.7,533.1,350.7,533.3z"/></g></svg>\n'},73:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DisplayScatter=void 0;var n=i(237);Object.defineProperty(e,"DisplayScatter",{enumerable:!0,get:function(){return n.DisplayScatter}})},684:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SelectionHelper=void 0;var n=i(212),s=function(){function t(t){var e=this;this.startPoint=new n.Vector2,this.pointTopLeft=new n.Vector2,this.pointBottomRight=new n.Vector2,this.widget=t,this.element=document.createElement("div"),this.element.className="selectionBox",this.element.style.pointerEvents="none",this.isDown=!1,this.widget.container.addEventListener("pointerdown",(function(t){e.isDown=!0,e.onSelectStart(t)})),this.widget.container.addEventListener("pointermove",(function(t){e.isDown&&e.onSelectMove(t)})),this.widget.container.addEventListener("pointerup",(function(t){e.isDown=!1,e.onSelectOver(t)}))}return t.prototype.disable=function(){this.enabled=!1},t.prototype.enable=function(){this.enabled=!0},t.prototype.onSelectStart=function(t){if(this.enabled){this.widget.container.appendChild(this.element);var e=this.widget.canvas.getBoundingClientRect();this.element.style.left=t.clientX-e.left+"px",this.element.style.top=t.clientY-e.top+"px",this.element.style.width="0px",this.element.style.height="0px",this.startPoint.x=t.clientX-e.left,this.startPoint.y=t.clientY-e.top}},t.prototype.onSelectMove=function(t){if(this.enabled){var e=this.widget.canvas.getBoundingClientRect();this.pointBottomRight.x=Math.max(this.startPoint.x,t.clientX-e.left),this.pointBottomRight.y=Math.max(this.startPoint.y,t.clientY-e.top),this.pointTopLeft.x=Math.min(this.startPoint.x,t.clientX-e.left),this.pointTopLeft.y=Math.min(this.startPoint.y,t.clientY-e.top),this.element.style.left=this.pointTopLeft.x+"px",this.element.style.top=this.pointTopLeft.y+"px",this.element.style.width=this.pointBottomRight.x-this.pointTopLeft.x+"px",this.element.style.height=this.pointBottomRight.y-this.pointTopLeft.y+"px"}},t.prototype.onSelectOver=function(t){this.enabled&&(this.onSelectMove(t),this.widget.setPointSelectionFromBox(this.pointTopLeft,this.pointBottomRight,t.shiftKey),this.element.parentElement.removeChild(this.element))},t}();e.SelectionHelper=s},871:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FRAGMENT_SHADER=void 0,e.FRAGMENT_SHADER="\nvarying float vSize;\nvarying vec3 vColor;\nvarying float vAlpha;\nvarying float vAntialias;\n\nvoid main(){\n    \n    // make points circular\n    float distance = length(2.0 * gl_PointCoord - 1.0);\n    if (distance > 1.0) {\n        discard;\n    }\n    // alpha value for antialiased edges. fwidth is fragment width, i.e. 1px\n    float delta = fwidth(distance);\n    float edgeAlpha = smoothstep(1.0, 1.0-delta, distance);\n\n    float alpha;\n    if (vAntialias == 1.) {\n        alpha = edgeAlpha*vAlpha;\n    } else {\n        alpha = 1.0;\n    }\n\n    gl_FragColor = vec4(vColor, alpha);\n}\n"},104:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Timeline=void 0;var n=i(543),s=function(){function t(t){this.scrubberWidth=16,this.timelineThickness=4,this.hasBasisIndicators=!0,this.basisIndicators=[],this.basisIndicatorDiameter=4,this.mouseDown=!1,this.widget=t,this.parentDiv=t.container,this.addContainer(),this.addTimeline(),this.addScrubber(),this.addPlayPauseButton(),this.addBasisIndicators(),this.addEventListerners(),this.addTooltip()}return t.prototype.updatePosition=function(t){this.mouseDown||(this.scrubber.style.left=Math.floor(this.timelineWidth*t)+"px")},t.prototype.updatePlayPauseIcon=function(t){this.playPauseButton.innerHTML=t?n.playIcon:n.pauseIcon},t.prototype.addButton=function(t,e,i,n){var s=document.createElement("button");return s.innerHTML=i,s.title=e,s.className=t+"Button",s.onclick=function(){return n()},s},t.prototype.getElement=function(){return this.container},t.prototype.resize=function(t,e){if(this.container.style.top=t-40+"px",this.timelineWidth=this.timeline.offsetWidth-this.scrubberWidth,this.hasBasisIndicators)for(var i=0;i<this.basisIndices.length;i++)this.basisIndicators[i].style.left=this.basisIndices[i]/(this.numAnimationFrames-1)*this.timelineWidth+this.scrubberWidth/2-this.basisIndicatorDiameter/2+"px";this.updatePosition(e)},t.prototype.addContainer=function(){var t=document.createElement("div");t.className="timelineContainer",this.container=t},t.prototype.addTimeline=function(){var t=document.createElement("div");t.className="timeline",t.style.height=this.timelineThickness+"px",t.style.top=15-this.timelineThickness/2+"px",this.container.appendChild(t),this.timeline=t},t.prototype.addBasisIndicators=function(){var t=this;if(this.widget.getBasisIndices&&this.widget.getNumAnimationFrames){this.basisIndices=this.widget.getBasisIndices(),this.numAnimationFrames=this.widget.getNumAnimationFrames();for(var e=function(e){var n=document.createElement("div");n.className="basisIndicator",n.style.width=i.basisIndicatorDiameter+"px",n.style.height=i.basisIndicatorDiameter+"px",n.addEventListener("mouseover",(function(i){return t.basisIndicatorHoverCallback(i,e)})),n.addEventListener("click",(function(i){return t.basisIndicatorClickCallback(i,e)})),i.basisIndicators.push(n),i.timeline.appendChild(n)},i=this,n=0;n<this.basisIndices.length;n++)e(n)}else this.hasBasisIndicators=!1},t.prototype.addTooltip=function(){var t=document.createElement("div"),e=document.createElement("span");t.appendChild(e),e.innerHTML="hello",t.className="tooltip",t.style.top="-20px",this.container.appendChild(t),this.tooltip=t},t.prototype.basisIndicatorHoverCallback=function(t,e){var i=this;this.tooltip.querySelector("span").innerHTML="Basis "+(e+1);var n=this.container.getBoundingClientRect(),s=this.tooltip.getBoundingClientRect(),o=t.clientX-n.left;t.clientY,n.top,this.tooltip.className="tooltip visible",this.tooltip.style.left=Math.floor(o)-s.width+"px",setTimeout((function(){return i.tooltip.className="tooltip"}),3e3)},t.prototype.basisIndicatorClickCallback=function(t,e){this.widget.setTime(this.basisIndices[e]/this.numAnimationFrames)},t.prototype.addScrubber=function(){var t=this,e=document.createElement("div");e.style.left="0px",e.style.width=this.scrubberWidth+"px",e.style.height=this.scrubberWidth+"px",e.className="scrubber",e.style.top=this.timelineThickness/2-this.scrubberWidth/2+"px",e.onmousedown=function(e){t.mouseDown=!0,t.lastMousePosition=e.clientX,t.widget.setIsPaused(!0)},this.timeline.appendChild(e),this.scrubber=e},t.prototype.setTimeFromMousePosition=function(t){this.currentPosition=parseInt(this.scrubber.style.left),this.candidatePosition=this.currentPosition+(t.clientX-this.lastMousePosition),this.candidatePosition=Math.min(this.timelineWidth,this.candidatePosition),this.candidatePosition=Math.max(0,this.candidatePosition),this.scrubber.style.left=this.candidatePosition+"px",this.widget.setTime(this.candidatePosition/(this.timelineWidth+1)),this.lastMousePosition=t.clientX},t.prototype.addEventListerners=function(){var t=this;this.parentDiv.onmousemove=function(e){t.mouseDown&&t.setTimeFromMousePosition(e)},document.documentElement.onmouseup=function(){t.mouseDown=!1},document.documentElement.onmouseleave=function(){t.mouseDown=!1}},t.prototype.addPlayPauseButton=function(){var t=this;this.playPauseButton=this.addButton("playPause","Play / Pause",n.pauseIcon,(function(){return t.widget.setIsPaused(!t.widget.getIsPaused())})),this.container.appendChild(this.playPauseButton)},t}();e.Timeline=s},435:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.centerColumns=e.getColMeans=void 0,e.getColMeans=function(t){var e=t.length;return[t.reduce((function(t,e){return t.map((function(t,i){return t+e[i]}))})).map((function(t){return t/e}))]},e.centerColumns=function(t,e){return t.map((function(t){return t.map((function(t,i){return t-e[0][i]}))}))}},509:function(t,e,i){"use strict";var n,s=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),o=this&&this.__createBinding||(Object.create?function(t,e,i,n){void 0===n&&(n=i),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[i]}})}:function(t,e,i,n){void 0===n&&(n=i),t[n]=e[i]}),r=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.prototype.hasOwnProperty.call(t,i)&&o(e,t,i);return r(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.DisplayScatter2d=void 0;var c=a(i(212)),l=i(73),h=i(307),u=i(871),d=i(886),p=function(t){function e(e,i,n){return t.call(this,e,i,n)||this}return s(e,t),e.prototype.addCamera=function(){var t=this.width/this.height,e=new c.OrthographicCamera(-1*t,1*t,1,-1,-1e3,1e3);e.position.setY(4),e.up.set(0,-1,0),this.camera=e},e.prototype.addOrbitControls=function(){var t=new d.OrbitControls(this.camera,this.renderer.domElement);t.minPolarAngle=Math.PI,t.maxPolarAngle=Math.PI,this.orbitControls=t},e.prototype.resizeCamera=function(t){this.camera.left=-1*t,this.camera.right=1*t,this.camera.top=1,this.camera.bottom=-1},e.prototype.multiply=function(t,e){for(var i=t.length,n=t[0].length,s=new Array(i),o=0;o<i;++o){var r=new Array(3);s[o]=r;for(var a=t[o],c=0;c<2;c++){for(var l=0,h=0;h<n;++h)l+=a[h]*e[h][c];r[2*c]=l}r[1]=0}return s},e.prototype.getShaderOpts=function(t){return{uniforms:{size:{value:Math.max(t,this.minPointSize)},zoom:{value:this.camera.zoom},antialias:{value:1}},vertexShader:h.VERTEX_SHADER_2D,fragmentShader:u.FRAGMENT_SHADER,extensions:{derivatives:!0},transparent:!0,depthTest:!1}},e.prototype.projectionMatrixToAxisLines=function(t){return t.map((function(t){return[0,0,0,t[0],0,t[1]]}))},e.prototype.adjustPointSizeFromZoom=function(){this.points.material.uniforms.zoom.value=this.camera.zoom},e}(l.DisplayScatter);e.DisplayScatter2d=p},307:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VERTEX_SHADER_2D=void 0,e.VERTEX_SHADER_2D="\nuniform float size;\nuniform float zoom;\nuniform float antialias;\n\nattribute float alpha;\nattribute vec3 color;\n\n// passed to fragment shader\nvarying vec3 vColor;\nvarying float vAlpha;\nvarying float vAntialias;\n\nvoid main(){\n    vColor=color;\n    vAlpha = alpha;\n    vAntialias = antialias;\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0);\n    gl_Position = projectionMatrix * mvPosition;\n    gl_PointSize = 100.0 * size * sqrt(zoom);\n}\n"}},t=>{"use strict";return t.O(0,[841],(()=>(509,t(t.s=509)))),t.O()}])}));