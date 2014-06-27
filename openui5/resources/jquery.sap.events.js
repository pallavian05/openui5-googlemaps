/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','jquery.sap.keycodes'],function(q){"use strict";q.sap._touchToMouseEvent=true;var o,a,b,c,d,m,I=false;if(sap.ui.Device.browser.webkit&&/Mobile/.test(navigator.userAgent)&&sap.ui.Device.support.touch){I=true;var s=(function(){var e=window.document,H=false,t=null,j=false,n,p,i=0;m=["mousedown","mouseover","mouseup","mouseout","click"];var r=function(T,E){if(!H){return}var M=E.type=="touchend"?E.changedTouches[0]:E.touches[0];var v=e.createEvent('MouseEvent');v.initMouseEvent(T,true,true,window,E.detail,M.screenX,M.screenY,M.clientX,M.clientY,E.ctrlKey,E.shiftKey,E.altKey,E.metaKey,E.button,E.relatedTarget);v.isSynthetic=true;window.setTimeout(function(){t.dispatchEvent(v)},0)};var u=function(E){return E.target.tagName.match(/input|textarea|select/i)};d=function(E){if(!E.isSynthetic&&!u(E)){E.stopPropagation();E.preventDefault()}};o=function(E){var T=E.touches,v;H=(T.length==1&&!u(E));j=false;if(H){v=T[0];t=v.target;if(t.nodeType===3){t=t.parentNode}n=v.clientX;p=v.clientY;r("mousedown",E)}};a=function(E){var T;if(H){T=E.touches[0];if(Math.abs(T.clientX-n)>10||Math.abs(T.clientY-p)>10){j=true}if(j){r("mousemove",E)}}};b=function(E){r("mouseup",E);if(!j){r("click",E)}};c=function(E){r("mouseup",E)};for(;i<m.length;i++){e.addEventListener(m[i],d,true)}e.addEventListener('touchstart',o,true);e.addEventListener('touchmove',a,true);e.addEventListener('touchend',b,true);e.addEventListener('touchcancel',c,true)}())}q.sap.disableTouchToMouseHandling=function(){var i=0;if(!I){return}document.removeEventListener('touchstart',o,true);document.removeEventListener('touchmove',a,true);document.removeEventListener('touchend',b,true);document.removeEventListener('touchcancel',c,true);for(;i<m.length;i++){document.removeEventListener(m[i],d,true)}};q.sap.ControlEvents=["click","dblclick","focusin","focusout","keydown","keypress","keyup","mousedown","mouseout","mouseover","mouseup","select","selectstart","dragstart","dragenter","dragover","dragleave","dragend","drop","paste","cut"];if(sap.ui.Device.support.touch){q.sap.ControlEvents.push("touchstart","touchend","touchmove","touchcancel")}q.sap.PseudoEvents={sapdown:{sName:"sapdown",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ARROW_DOWN&&!k(e)}},sapdownmodifiers:{sName:"sapdownmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ARROW_DOWN&&k(e)}},sapshow:{sName:"sapshow",aTypes:["keydown"],fnCheck:function(e){return(e.keyCode==q.sap.KeyCodes.F4&&!k(e))||(e.keyCode==q.sap.KeyCodes.ARROW_DOWN&&h(e,false,true,false))}},sapup:{sName:"sapup",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ARROW_UP&&!k(e)}},sapupmodifiers:{sName:"sapupmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ARROW_UP&&k(e)}},saphide:{sName:"saphide",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ARROW_UP&&h(e,false,true,false)}},sapleft:{sName:"sapleft",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ARROW_LEFT&&!k(e)}},sapleftmodifiers:{sName:"sapleftmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ARROW_LEFT&&k(e)}},sapright:{sName:"sapright",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ARROW_RIGHT&&!k(e)}},saprightmodifiers:{sName:"saprightmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ARROW_RIGHT&&k(e)}},saphome:{sName:"saphome",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.HOME&&!k(e)}},saphomemodifiers:{sName:"saphomemodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.HOME&&k(e)}},saptop:{sName:"saptop",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.HOME&&h(e,true,false,false)}},sapend:{sName:"sapend",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.END&&!k(e)}},sapendmodifiers:{sName:"sapendmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.END&&k(e)}},sapbottom:{sName:"sapbottom",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.END&&h(e,true,false,false)}},sappageup:{sName:"sappageup",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.PAGE_UP&&!k(e)}},sappageupmodifiers:{sName:"sappageupmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.PAGE_UP&&k(e)}},sappagedown:{sName:"sappagedown",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.PAGE_DOWN&&!k(e)}},sappagedownmodifiers:{sName:"sappagedownmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.PAGE_DOWN&&k(e)}},sapselect:{sName:"sapselect",aTypes:["keydown"],fnCheck:function(e){return(e.keyCode==q.sap.KeyCodes.ENTER||e.keyCode==q.sap.KeyCodes.SPACE)&&!k(e)}},sapselectmodifiers:{sName:"sapselectmodifiers",aTypes:["keydown"],fnCheck:function(e){return(e.keyCode==q.sap.KeyCodes.ENTER||e.keyCode==q.sap.KeyCodes.SPACE)&&k(e)}},sapspace:{sName:"sapspace",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.SPACE&&!k(e)}},sapspacemodifiers:{sName:"sapspacemodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.SPACE&&k(e)}},sapenter:{sName:"sapenter",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ENTER&&!k(e)}},sapentermodifiers:{sName:"sapentermodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ENTER&&k(e)}},sapbackspace:{sName:"sapbackspace",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.BACKSPACE&&!k(e)}},sapbackspacemodifiers:{sName:"sapbackspacemodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.BACKSPACE&&k(e)}},sapdelete:{sName:"sapdelete",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.DELETE&&!k(e)}},sapdeletemodifiers:{sName:"sapdeletemodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.DELETE&&k(e)}},sapexpand:{sName:"sapexpand",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.NUMPAD_PLUS&&!k(e)}},sapexpandmodifiers:{sName:"sapexpandmodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.NUMPAD_PLUS&&k(e)}},sapcollapse:{sName:"sapcollapse",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.NUMPAD_MINUS&&!k(e)}},sapcollapsemodifiers:{sName:"sapcollapsemodifiers",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.NUMPAD_MINUS&&k(e)}},sapcollapseall:{sName:"sapcollapseall",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.NUMPAD_ASTERISK&&!k(e)}},sapescape:{sName:"sapescape",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.ESCAPE&&!k(e)}},saptabnext:{sName:"saptabnext",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.TAB&&!k(e)}},saptabprevious:{sName:"saptabprevious",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.TAB&&h(e,false,false,true)}},sapskipforward:{sName:"sapskipforward",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.F6&&!k(e)}},sapskipback:{sName:"sapskipback",aTypes:["keydown"],fnCheck:function(e){return e.keyCode==q.sap.KeyCodes.F6&&h(e,false,false,true)}},sapdecrease:{sName:"sapdecrease",aTypes:["keydown"],fnCheck:function(e){var r=sap.ui.getCore().getConfiguration().getRTL();var p=r?q.sap.KeyCodes.ARROW_RIGHT:q.sap.KeyCodes.ARROW_LEFT;return(e.keyCode==p||e.keyCode==q.sap.KeyCodes.ARROW_DOWN)&&!k(e)}},sapdecreasemodifiers:{sName:"sapdecreasemodifiers",aTypes:["keydown"],fnCheck:function(e){var r=sap.ui.getCore().getConfiguration().getRTL();var p=r?q.sap.KeyCodes.ARROW_RIGHT:q.sap.KeyCodes.ARROW_LEFT;return(e.keyCode==p||e.keyCode==q.sap.KeyCodes.ARROW_DOWN)&&k(e)}},sapincrease:{sName:"sapincrease",aTypes:["keydown"],fnCheck:function(e){var r=sap.ui.getCore().getConfiguration().getRTL();var n=r?q.sap.KeyCodes.ARROW_LEFT:q.sap.KeyCodes.ARROW_RIGHT;return(e.keyCode==n||e.keyCode==q.sap.KeyCodes.ARROW_UP)&&!k(e)}},sapincreasemodifiers:{sName:"sapincreasemodifiers",aTypes:["keydown"],fnCheck:function(e){var r=sap.ui.getCore().getConfiguration().getRTL();var n=r?q.sap.KeyCodes.ARROW_LEFT:q.sap.KeyCodes.ARROW_RIGHT;return(e.keyCode==n||e.keyCode==q.sap.KeyCodes.ARROW_UP)&&k(e)}},sapprevious:{sName:"sapprevious",aTypes:["keydown"],fnCheck:function(e){var r=sap.ui.getCore().getConfiguration().getRTL();var p=r?q.sap.KeyCodes.ARROW_RIGHT:q.sap.KeyCodes.ARROW_LEFT;return(e.keyCode==p||e.keyCode==q.sap.KeyCodes.ARROW_UP)&&!k(e)}},sappreviousmodifiers:{sName:"sappreviousmodifiers",aTypes:["keydown"],fnCheck:function(e){var r=sap.ui.getCore().getConfiguration().getRTL();var p=r?q.sap.KeyCodes.ARROW_RIGHT:q.sap.KeyCodes.ARROW_LEFT;return(e.keyCode==p||e.keyCode==q.sap.KeyCodes.ARROW_UP)&&k(e)}},sapnext:{sName:"sapnext",aTypes:["keydown"],fnCheck:function(e){var r=sap.ui.getCore().getConfiguration().getRTL();var n=r?q.sap.KeyCodes.ARROW_LEFT:q.sap.KeyCodes.ARROW_RIGHT;return(e.keyCode==n||e.keyCode==q.sap.KeyCodes.ARROW_DOWN)&&!k(e)}},sapnextmodifiers:{sName:"sapnextmodifiers",aTypes:["keydown"],fnCheck:function(e){var r=sap.ui.getCore().getConfiguration().getRTL();var n=r?q.sap.KeyCodes.ARROW_LEFT:q.sap.KeyCodes.ARROW_RIGHT;return(e.keyCode==n||e.keyCode==q.sap.KeyCodes.ARROW_DOWN)&&k(e)}},sapdelayeddoubleclick:{sName:"sapdelayeddoubleclick",aTypes:["click"],fnCheck:function(e){var i=q(e.target);var j=e.timeStamp;var n=i.data("sapdelayeddoubleclick_lastClickTimestamp");var p=n||0;i.data("sapdelayeddoubleclick_lastClickTimestamp",j);var r=j-p;return(r>=300&&r<=1300)}}};var P=["sapdown","sapdownmodifiers","sapshow","sapup","sapupmodifiers","saphide","sapleft","sapleftmodifiers","sapright","saprightmodifiers","saphome","saphomemodifiers","saptop","sapend","sapendmodifiers","sapbottom","sappageup","sappageupmodifiers","sappagedown","sappagedownmodifiers","sapselect","sapselectmodifiers","sapspace","sapspacemodifiers","sapenter","sapentermodifiers","sapexpand","sapbackspace","sapbackspacemodifiers","sapdelete","sapdeletemodifiers","sapexpandmodifiers","sapcollapse","sapcollapsemodifiers","sapcollapseall","sapescape","saptabnext","saptabprevious","sapskipforward","sapskipback","sapprevious","sappreviousmodifiers","sapnext","sapnextmodifiers","sapdecrease","sapdecreasemodifiers","sapincrease","sapincreasemodifiers","sapdelayeddoubleclick"];(function initTouchEventSupport(){q.sap.touchEventMode="SIM";var A=[];var e=[];if(sap.ui.Device.support.touch){q.sap.touchEventMode="ON";q.event.props.push("touches","targetTouches","changedTouches")}var j=function(u,O,H){var v="__"+u+"Handler";var w="sap"+u;A.push(w);e.push({sName:u,aTypes:[w],fnCheck:function(E){return true}});q.event.special[w]={add:function(x){var y=this,$=q(this),z={domRef:y,eventName:u,sapEventName:w,eventHandle:x};var B=function(E){H(E,z)};$.data(v+x.guid,B);for(var i=0;i<O.length;i++){$.on(O[i],B)}},remove:function(x){var $=q(this);var H=$.data(v+x.guid);$.removeData(v+x.guid);for(var i=0;i<O.length;i++){q.event.remove(this,O[i],H)}}}};var M=function(E,C){var D=q(C.domRef);if(E.isMarked("delayedMouseEvent")){return}if(!(E.type!="mouseout"||(E.type==="mouseout"&&q.sap.checkMouseEnterOrLeave(E,C.domRef)))){var u=true;var v=D.data("__touchstart_control");if(v){var w=q.sap.domById(v);if(w&&q.sap.checkMouseEnterOrLeave(E,w)){u=false}}if(u){return}}var N=q.event.fix(E.originalEvent||E);N.type=C.sapEventName;if(N.isMarked("firstUIArea")){N.setMark("handledByUIArea",false)}var x=[{identifier:1,pageX:N.pageX,pageY:N.pageY,clientX:N.clientX,clientY:N.clientY,screenX:N.screenX,screenY:N.screenY,target:N.target,radiusX:1,radiusY:1,rotationAngle:0}];switch(C.eventName){case"touchstart":case"touchmove":N.touches=N.changedTouches=N.targetTouches=x;break;case"touchend":N.changedTouches=x;N.touches=N.targetTouches=[];break}if(C.eventName==="touchstart"||D.data("__touch_in_progress")){D.data("__touch_in_progress","X");var y=q.fn.control?q(E.target).control(0):null;if(y){D.data("__touchstart_control",y.getId())}if(E.type==="mouseout"){N.setMarked("fromMouseout")}C.eventHandle.handler.call(C.domRef,N);if(C.eventName==="touchend"&&!N.isMarked("fromMouseout")){D.removeData("__touch_in_progress");D.removeData("__touchstart_control")}}};j("touchstart",["mousedown"],M);j("touchend",["mouseup","mouseout"],M);j("touchmove",["mousemove"],M);function n(){var C=window["sap-ui-config"]||{},L=C.libs||"";function u(K){return document.location.search.indexOf("sap-ui-"+K)>-1||!!C[K.toLowerCase()]}return sap.ui.Device.support.touch||u("xx-test-mobile")||u("xx-fakeOS")||L.match(/sap.m\b/)}if(n()){q.sap.require("sap.ui.thirdparty.jquery-mobile-custom");if(sap.ui.Device.support.touch){var F=false,p=q.vmouse.moveDistanceThreshold,r,t;var T=function(E,C){var u=E.originalEvent.touches[0];if(E.type==="touchstart"){F=false;r=u.pageX;t=u.pageY}else if(E.type==="touchmove"){F=F||(Math.abs(u.pageX-r)>p||Math.abs(u.pageY-t)>p)}var N=q.event.fix(E.originalEvent||E);N.type=C.sapEventName;if(N.isMarked("firstUIArea")){N.setMark("handledByUIArea",false)}delete N.touches;delete N.changedTouches;delete N.targetTouches;var v=(C.eventName==="mouseup"?E.changedTouches[0]:E.touches[0]);N.screenX=v.screenX;N.screenY=v.screenY;N.clientX=v.clientX;N.clientY=v.clientY;N.ctrlKey=v.ctrlKey;N.altKey=v.altKey;N.shiftKey=v.shiftKey;C.eventHandle.handler.call(C.domRef,N);if(E.type==="touchend"&&!F){N.type="click";N.setMark("handledByUIArea",false);C.eventHandle.handler.call(C.domRef,N)}};q.sap.disableTouchToMouseHandling();q.sap._touchToMouseEvent=false;j("mousedown",["touchstart"],T);j("mousemove",["touchmove"],T);j("mouseup",["touchend","touchcancel"],T)}A.push("swipe","tap","swipeleft","swiperight","scrollstart","scrollstop");e.push({sName:"swipebegin",aTypes:["swipeleft","swiperight"],fnCheck:function(E){var R=sap.ui.getCore().getConfiguration().getRTL();return(R&&E.type==="swiperight")||(!R&&E.type==="swipeleft")}});e.push({sName:"swipeend",aTypes:["swipeleft","swiperight"],fnCheck:function(E){var R=sap.ui.getCore().getConfiguration().getRTL();return(!R&&E.type==="swiperight")||(R&&E.type==="swipeleft")}})}if(q.sap.Version(q.fn.jquery).compareTo("1.9.1")<0){q.sap.ControlEvents=q.sap.ControlEvents.concat(A)}else{q.sap.ControlEvents=A.concat(q.sap.ControlEvents)}for(var i=0;i<e.length;i++){q.sap.PseudoEvents[e[i].sName]=e[i];P.push(e[i].sName)}}());function f(){var e=q.sap.PseudoEvents,r=[];for(var n in e){if(e[n].aTypes){for(var j=0,i=e[n].aTypes.length;j<i;j++){var t=e[n].aTypes[j];if(q.inArray(t,r)==-1){r.push(t)}}}}return r}var g=f();function h(e,C,A,i){return e.shiftKey==i&&e.altKey==A&&l(e)==C}function k(e){return e.shiftKey||e.altKey||l(e)}function l(e){return!!(e.metaKey||e.ctrlKey)}q.Event.prototype.getPseudoTypes=function(){var p=[];if(q.inArray(this.type,g)!=-1){var e=P;var j=e.length;var n=null;for(var i=0;i<j;i++){n=q.sap.PseudoEvents[e[i]];if(n.aTypes&&q.inArray(this.type,n.aTypes)>-1&&n.fnCheck&&n.fnCheck(this)){p.push(n.sName)}}}this.getPseudoTypes=function(){return p.slice()};return p.slice()};q.Event.prototype.isPseudoType=function(t){var p=this.getPseudoTypes();if(t){return q.inArray(t,p)>-1}else{return p.length>0}};var _=q.Event.prototype.preventDefault;q.Event.prototype.preventDefault=function(){_.apply(this,arguments);var e=this.originalEvent;if(!e){return}if(e.keyCode!=0){try{if(!sap.ui.Device.browser.firefox){e.keyCode=0}}catch(i){}}};q.sap.bindAnyEvent=function bindAnyEvent(C){if(C){q(document).bind(q.sap.ControlEvents.join(" "),C)}};q.sap.unbindAnyEvent=function unbindAnyEvent(C){if(C){q(document).unbind(q.sap.ControlEvents.join(" "),C)}};q.sap.checkMouseEnterOrLeave=function checkMouseEnterOrLeave(E,D){if(E.type!="mouseover"&&E.type!="mouseout"){return false}var i=false;var j=D;var p=E.relatedTarget;try{while(p&&p!==j){p=p.parentNode}if(p!==j){i=true}}catch(e){}return i};q.Event.prototype.getOffsetX=function(){if(this.type=='click'){if(this.offsetX){return this.offsetX}if(this.layerX){return this.layerX}if(this.originalEvent.layerX){return this.originalEvent.layerX}}return 0};q.Event.prototype.getOffsetY=function(){if(this.type=='click'){if(this.offsetY){return this.offsetY}if(this.layerY){return this.layerY}if(this.originalEvent.layerY){return this.originalEvent.layerY}}return 0};var S=q.Event.prototype.stopImmediatePropagation;q.Event.prototype.stopImmediatePropagation=function(e){S.apply(this,arguments);if(e){this._bIsStopHandlers=true}};q.Event.prototype.isImmediateHandlerPropagationStopped=function(){return!!this._bIsStopHandlers};q.Event.prototype.setMark=function(K,v){K=K||"handledByControl";v=arguments.length<2?true:v;(this.originalEvent||this)["_sapui_"+K]=v};q.Event.prototype.setMarked=q.Event.prototype.setMark;q.Event.prototype.isMarked=function(K){K=K||"handledByControl";return!!(this.originalEvent||this)["_sapui_"+K]};return q},false);