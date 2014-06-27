/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.Accordion");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.Accordion",{metadata:{publicMethods:["openSection","closeSection"],library:"sap.ui.commons",properties:{"width":{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:'200px'},"openedSectionsId":{type:"string",group:"Misc",defaultValue:null}},defaultAggregation:"sections",aggregations:{"sections":{type:"sap.ui.commons.AccordionSection",multiple:true,singularName:"section"}},events:{"sectionOpen":{},"sectionClose":{},"sectionsReorder":{}}}});sap.ui.commons.Accordion.M_EVENTS={'sectionOpen':'sectionOpen','sectionClose':'sectionClose','sectionsReorder':'sectionsReorder'};jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");jQuery.sap.require("sap.ui.thirdparty.jqueryui.jquery-ui-core");jQuery.sap.require("sap.ui.thirdparty.jqueryui.jquery-ui-widget");jQuery.sap.require("sap.ui.thirdparty.jqueryui.jquery-ui-mouse");jQuery.sap.require("sap.ui.thirdparty.jqueryui.jquery-ui-sortable");sap.ui.commons.Accordion.CARD_1=1;sap.ui.commons.Accordion.CARD_0_1=2;sap.ui.commons.Accordion.CARD_0_N=3;sap.ui.commons.Accordion.CARD_1_N=4;sap.ui.commons.Accordion.KEY_TIMEOUT=500;sap.ui.commons.Accordion.aAccordionsToReplace=[];sap.ui.commons.Accordion.aAccordions=[];
sap.ui.commons.Accordion.prototype.init=function(){this.bInitialRendering=true;this.activationMode=sap.ui.commons.Accordion.CARD_1;this.rb=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");this.aSectionTitles=[];sap.ui.commons.Accordion.aAccordions.push(this)};
sap.ui.commons.Accordion.prototype.onsapspace=function(e){this.onclick(e)};
sap.ui.commons.Accordion.prototype.onsappagedownmodifiers=function(e){var t=jQuery(e.target);var p=t.parentsUntil('.sapUiAcd');var d=p[p.length-1];var n=jQuery(d).next();while(!this.getCorrespondingSection(n[0]).getEnabled()){n=n.next()}n=n[0];this.openSection(n.id);var s=this.getCorrespondingSection(n);s.focusFirstControl();e.preventDefault();e.stopPropagation()};
sap.ui.commons.Accordion.prototype.onsappageupmodifiers=function(e){var t=jQuery(e.target);var p=t.parentsUntil('.sapUiAcd');var s=p[p.length-1];var n=jQuery(s).prev();while(!this.getCorrespondingSection(n[0]).getEnabled()){n=n.prev()}n=n[0];this.openSection(n.id);var s=this.getCorrespondingSection(n);if(s){s.focusFirstControl()}e.preventDefault();e.stopPropagation()};
sap.ui.commons.Accordion.prototype.onsapupmodifiers=function(e){e.preventDefault();e.stopPropagation();var p=jQuery(e.target).parentsUntil('.sapUiAcd');var d=p[p.length-1];if(this.__idxOfSec(d.id)==0){return}var D=jQuery(d).prev().first()[0];var i=false;if(this.__idxOfSec(D.id)==0){i=true}this.dropSection(d,D,i);var s=this.getSections();s[this.__idxOfSec(d.id)].focus()};
sap.ui.commons.Accordion.prototype.onsapdownmodifiers=function(e){e.preventDefault();e.stopPropagation();var p=jQuery(e.target).parentsUntil('.sapUiAcd');var d=p[p.length-1];if(this.__idxOfSec(d.id)==this.getSections().length-1){return}var D=jQuery(d).next().first()[0];this.dropSection(d,D,false);var s=this.getSections();s[this.__idxOfSec(d.id)].focus()};
sap.ui.commons.Accordion.prototype.onsapprevious=function(e){if(e.srcControl.getMetadata().getName()!="sap.ui.commons.AccordionSection"){return}e.preventDefault();e.stopPropagation();var c=this.getCurrentSection(e.target);if(c.id==this.getSections()[0].getId()){var n=jQuery(c).find("div.sapUiAcdSectionHdr");if(n){n.focus()}}if(c){var p=jQuery(c).prev();while(p&&jQuery(p).hasClass("sapUiAcdSectionDis")){p=jQuery(p).prev()}if(p){var n=jQuery(p).find("div.sapUiAcdSectionHdr");if(n){n.focus()}}}};
sap.ui.commons.Accordion.prototype.onsapnext=function(e){if(e.srcControl.getMetadata().getName()!="sap.ui.commons.AccordionSection"){return}e.preventDefault();e.stopPropagation();var c=this.getCurrentSection(e.target);if(c){var n=jQuery(c).next();while(n&&jQuery(n).hasClass("sapUiAcdSectionDis")){n=jQuery(n).next()}if(n){var N=jQuery(n).find("div.sapUiAcdSectionHdr");if(N){N.focus()}}}};
sap.ui.commons.Accordion.prototype.onsaphome=function(e){e.preventDefault();e.stopPropagation();var f=this.getSections()[0].getDomRef();if(jQuery(f).hasClass("sapUiAcdSectionDis")){f=jQuery(f).next();while(f&&jQuery(f).hasClass("sapUiAcdSectionDis")){f=jQuery(f).next()}}if(f){var n=jQuery(f).find("div.sapUiAcdSectionHdr");if(n){n.focus()}}};
sap.ui.commons.Accordion.prototype.onsapend=function(e){e.preventDefault();e.stopPropagation();var n=this.getSections().length;var f=this.getSections()[n-1].getDomRef();if(jQuery(f).hasClass("sapUiAcdSectionDis")){f=jQuery(f).prev();while(f&&jQuery(f).hasClass("sapUiAcdSectionDis")){f=jQuery(f).prev()}}if(f){var N=jQuery(f).find("div.sapUiAcdSectionHdr");if(N){N.focus()}}};
sap.ui.commons.Accordion.prototype.getCurrentSection=function(d){var c=d;while(!jQuery(c).hasClass("sapUiAcdSection")){c=jQuery(c).parent()}return c[0]};
sap.ui.commons.Accordion.prototype.dropSection=function(d,D,b){var o=jQuery(d).parent()[0];var c=jQuery(o).children(".sapUiAcdSection").toArray();var i=jQuery.inArray(D,c);if(b){i-=1}this.moveSection(d.id,i)};
sap.ui.commons.Accordion.prototype.moveSection=function(s,t){var o=this.__idxOfSec(s);if(t==o){return}var S=this.aSectionTitles[o];this.aSectionTitles.splice(o,1);var a=this.getSections();var b=a[o];this.removeSection(o,true);if(t!=-1){this.aSectionTitles.splice(t,0,S)}else{this.aSectionTitles.splice(0,0,S)}this.insertSection(b,t,true);this.fireSectionsReorder({movedSectionId:s,newIndex:t})};
sap.ui.commons.Accordion.prototype._onSortChange=function(e,u){e.preventDefault();e.stopPropagation();var d=u.item[0];var S=u.item[0].getAttribute("Id");var D=jQuery(d).parent()[0];var c=jQuery(D).children(".sapUiAcdSection").toArray();var i=jQuery.inArray(d,c);this.moveSection(S,i)};
sap.ui.commons.Accordion.prototype.onclick=function(e){if(e.srcControl.getId()==this.getId()){return}var t=jQuery(e.target);if(t.hasClass("sapUiAcdSectionCont")){return}if(!(jQuery(e.target).control(0)instanceof sap.ui.commons.AccordionSection)){return}var d=e.srcControl.getDomRef();var s=this.getCorrespondingSection(d);if(s&&!s.getEnabled()){return}if(e.srcControl&&e.srcControl.getCollapsed()==true){this.openSection(d.id)}else{if(e.srcControl){this.closeSection(d.id)}}e.preventDefault();e.stopPropagation();var S=this.getSections();S[this.__idxOfSec(d.id)].focus()};
sap.ui.commons.Accordion.prototype.openSection=function(s){var i=this.__idxOfSec(s);var S=this.getSections();if(this.activationMode==sap.ui.commons.Accordion.CARD_0_1||this.activationMode==sap.ui.commons.Accordion.CARD_1){var c=this.closeOpenedSections()}S[i]._setCollapsed(false);this.fireSectionOpen({openSectionId:s,closeSectionIds:c})};
sap.ui.commons.Accordion.prototype.closeSection=function(s){var i=this.__idxOfSec(s);var S=this.getSections();var c=S[i];var d=this.getOpenedSectionsId().split(",");S[i]._setCollapsed(true);this.fireSectionClose({closeSectionId:s})};
sap.ui.commons.Accordion.prototype.closeOpenedSections=function(){var c=[];var s=this.getSections();for(var i=0;i<s.length;i++){if(s[i].getCollapsed()==false){s[i]._setCollapsed(true);c.push(s[i].getId())}}return c};
sap.ui.commons.Accordion.prototype.openDefaultSections=function(){var s=this.getSections();var d=this.getOpenedSectionsId().split(",");for(var i=0;i<d.length;i++){var a=s[this.__idxOfSec(d[i])];a._setCollapsed(false)}};
sap.ui.commons.Accordion.prototype.getNumberOfOpenedSections=function(){var o=0;var s=this.getSections();for(var i=0;i<s.length;i++){if(s[i].getCollapsed()==false){o++}}return o};
sap.ui.commons.Accordion.prototype.addSection=function(s){this.addAggregation("sections",s);if((this.getOpenedSectionsId()==null||this.getOpenedSectionsId()=="")&&s.getEnabled()){this.setOpenedSectionsId(s.getId())}this.aSectionTitles.push(s.getTitle())};
sap.ui.commons.Accordion.prototype.__idxOfSec=function(s){if(typeof(s)=="string"){s=sap.ui.getCore().byId(s)}return this.indexOfSection(s)};
sap.ui.commons.Accordion.prototype.setOpenedSectionsId=function(o){var s=this.getSections();var d=o.split(",");if(d.length==1){if(this.__idxOfSec(o)<0){this.setProperty("openedSectionsId",o);return this}if(s[this.__idxOfSec(o)].getEnabled()){this.setProperty("openedSectionsId",o)}else{for(var i=0;i<s.length;i++){if(s[i].getEnabled()){this.setProperty("openedSectionsId",s[i].getId());return this}}}}else if(d.length==0){return this}else{var c;for(var i=0;i<d.length;i++){if(s[this.__idxOfSec(d[i])].getEnabled()){if(c){c+=","+d[i];return}else{c=d[i]}}}if(c){this.setProperty("openedSectionsId",c)}}return this};
sap.ui.commons.Accordion.prototype.getCorrespondingSection=function(d){if(jQuery(d).hasClass("sapUiAcdSection")){var a=jQuery(d).parent();var A=a[0];var s=jQuery(A).children();var i=s.index(d);var b=this.getSections();return b[i-1]}};
sap.ui.commons.Accordion.prototype.isLastSection=function(s){var S=this.getSections();if(jQuery.inArray(s,S)==S.length-1){return true}else{return false}};
sap.ui.commons.Accordion.prototype.onAfterRendering=function(){var a=this.getDomRef();var l="0px";var r="0px";if(jQuery(a).css("borderLeftStyle")!=="none"){l=jQuery(a).css("border-left-width")}if(jQuery(a).css("borderRightStyle")!=="none"){r=jQuery(a).css("border-right-width")}var b=parseFloat(l.substring(0,l.indexOf("px")))+parseFloat(r.substring(0,r.indexOf("px")));a.style.height=a.offsetHeight-b-7+"px";this.$().sortable({handle:"> div.sapUiAcdSectionHdr > div",stop:jQuery.proxy(this._onSortChange,this)})};