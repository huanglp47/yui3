YUI.add("dd-ddm-drop",function(e,t){e.mix(e.DD.DDM,{_noShim:!1,_activeShims:[],_hasActiveShim:function(){return this._noShim?!0:this._activeShims.length},_addActiveShim:function(e){this._activeShims.push(e)},_removeActiveShim:function(t){var n=[];e.Array.each(this._activeShims,function(e){e._yuid!==t._yuid&&n.push(e)}),this._activeShims=n},syncActiveShims:function(t){e.later(0,this,function(t){var n=t?this.targets:this._lookup();e.Array.each(n,function(e){e.sizeShim.call(e)},this)},t)},mode:0,POINT:0,INTERSECT:1,STRICT:2,useHash:!0,activeDrop:null,validDrops:[],otherDrops:{},targets:[],_addValid:function(e){return this.validDrops.push(e),this},_removeValid:function(t){var n=[];return e.Array.each(this.validDrops,function(e){e!==t&&n.push(e)}),this.validDrops=n,this},isOverTarget:function(e){if(this.activeDrag&&e){var t=this.activeDrag.mouseXY,n,r=this.activeDrag.get("dragMode"),i,s=e.shim;if(t&&this.activeDrag){i=this.activeDrag.region;if(r===this.STRICT)return this.activeDrag.get("dragNode").inRegion(e.region,!0,i);if(e&&e.shim)return r===this.INTERSECT&&this._noShim?(n=i||this.activeDrag.get("node"),e.get("node").intersect(n,e.region).inRegion):(this._noShim&&(s=e.get("node")),s.intersect({top:t[1],bottom:t[1],left:t[0],right:t[0]},e.region).inRegion)}}return!1},clearCache:function(){this.validDrops=[],this.otherDrops={},this._activeShims=[]},_activateTargets:function(){this._noShim=!0,this.clearCache(),e.Array.each(this.targets,function(e){e._activateShim([]),e.get("noShim")===!0&&(this._noShim=!1)},this),this._handleTargetOver()},getBestMatch:function(t,n){var r=null,i=0,s;return e.each(t,function(e){var t=this.activeDrag.get("dragNode").intersect(e.get("node"));e.region.area=t.area,t.inRegion&&t.area>i&&(i=t.area,r=e)},this),n?(s=[],e.Array.each(t,function(e){e!==r&&s.push(e)},this),[r,s]):r},_deactivateTargets:function(){var t=[],n,r=this.activeDrag,i=this.activeDrop;r&&i&&this.otherDrops[i]?(r.get("dragMode")?(n=this.getBestMatch(this.otherDrops,!0),i=n[0],t=n[1]):(t=this.otherDrops,delete t[i]),r.get("node").removeClass(this.CSS_PREFIX+"-drag-over"),i&&(i.fire("drop:hit",{drag:r,drop:i,others:t}),r.fire("drag:drophit",{drag:r,drop:i,others:t}))):r&&r.get("dragging")&&(r.get("node").removeClass(this.CSS_PREFIX+"-drag-over"),r.fire("drag:dropmiss",{pageX:r.lastXY[0],pageY:r.lastXY[1]})),this.activeDrop=null,e.Array.each(this.targets,function(e){e._deactivateShim([])},this)},_dropMove:function(){this._hasActiveShim()?this._handleTargetOver():e.each(this.otherDrops,function(e){e._handleOut.apply(e,[])})},_lookup:function(){if(!this.useHash||this._noShim)return this.validDrops;var t=[];return e.Array.each(this.validDrops,function(e){e.shim&&e.shim.inViewportRegion(!1,e.region)&&t.push(e)}),t},_handleTargetOver:function(){var t=this._lookup();e.Array.each(t,function(e){e._handleTargetOver.call(e)},this)},_regTarget:function(e){this.targets.push(e)},_unregTarget:function(t){var n=[],r;e.Array.each(this.targets,function(e){e!==t&&n.push(e)},this),this.targets=n,r=[],e.Array.each(this.validDrops,function(e){e!==t&&r.push(e)}),this.validDrops=r},getDrop:function(t){var n=!1,r=e.one(t);return r instanceof e.Node&&e.Array.each(this.targets,function(e){r.compareTo(e.get("node"))&&(n=e)}),n}},!0)},"@VERSION@",{requires:["dd-ddm"]});
