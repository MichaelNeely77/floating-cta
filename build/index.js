(()=>{"use strict";var e,t={955:()=>{const e=window.React,t=window.wp.blocks,a=window.wp.i18n,n=window.wp.blockEditor,l=window.wp.components;(0,t.registerBlockType)("create-block/floating-cta",{title:(0,a.__)("Floating CTA","floating-cta"),icon:"megaphone",category:"widgets",attributes:{heading:{type:"string",source:"html",selector:"h3"},text:{type:"string",source:"html",selector:"p"},imageUrl:{type:"string",default:""},buttonText:{type:"string",default:"Sign Up"},buttonUrl:{type:"string",default:"#"}},edit({attributes:t,setAttributes:r}){const o=(0,n.useBlockProps)();return(0,e.createElement)("div",{...o},(0,e.createElement)(n.InspectorControls,null,(0,e.createElement)(l.PanelBody,{title:(0,a.__)("Image Settings","floating-cta")},(0,e.createElement)(n.MediaUploadCheck,null,(0,e.createElement)(n.MediaUpload,{onSelect:e=>{r({imageUrl:e.url})},allowedTypes:["image"],render:({open:t})=>(0,e.createElement)(l.Button,{onClick:t,isDefault:!0,isLarge:!0},(0,a.__)("Select Image","floating-cta"))})))),(0,e.createElement)(n.RichText,{tagName:"h3",value:t.heading,onChange:e=>{r({heading:e})},placeholder:(0,a.__)("Heading...","floating-cta")}),(0,e.createElement)(n.RichText,{tagName:"p",value:t.text,onChange:e=>{r({text:e})},placeholder:(0,a.__)("Text...","floating-cta")}),t.imageUrl&&(0,e.createElement)("div",{className:"cta-image-wrapper"},(0,e.createElement)("img",{src:t.imageUrl,alt:(0,a.__)("Selected Image","floating-cta")})),(0,e.createElement)(n.RichText,{tagName:"a",className:"cta-button",value:t.buttonText,onChange:e=>{r({buttonText:e})},placeholder:(0,a.__)("Button Text...","floating-cta")}),(0,e.createElement)(n.URLInputButton,{url:t.buttonUrl,onChange:e=>{r({buttonUrl:e})}}),(0,e.createElement)("button",{className:"cta-close-button"},"X"))},save({attributes:t}){const l=n.useBlockProps.save();return(0,e.createElement)("div",{...l},(0,e.createElement)(n.RichText.Content,{tagName:"h3",value:t.heading}),(0,e.createElement)(n.RichText.Content,{tagName:"p",value:t.text}),t.imageUrl&&(0,e.createElement)("div",{className:"cta-image-wrapper"},(0,e.createElement)("img",{src:t.imageUrl,alt:(0,a.__)("Selected Image","floating-cta")})),(0,e.createElement)("a",{href:t.buttonUrl,className:"cta-button"},(0,e.createElement)(n.RichText.Content,{value:t.buttonText})),(0,e.createElement)("button",{className:"cta-close-button"},"X"))}})}},a={};function n(e){var l=a[e];if(void 0!==l)return l.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,a,l,r)=>{if(!a){var o=1/0;for(g=0;g<e.length;g++){for(var[a,l,r]=e[g],c=!0,i=0;i<a.length;i++)(!1&r||o>=r)&&Object.keys(n.O).every((e=>n.O[e](a[i])))?a.splice(i--,1):(c=!1,r<o&&(o=r));if(c){e.splice(g--,1);var s=l();void 0!==s&&(t=s)}}return t}r=r||0;for(var g=e.length;g>0&&e[g-1][2]>r;g--)e[g]=e[g-1];e[g]=[a,l,r]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var l,r,[o,c,i]=a,s=0;if(o.some((t=>0!==e[t]))){for(l in c)n.o(c,l)&&(n.m[l]=c[l]);if(i)var g=i(n)}for(t&&t(a);s<o.length;s++)r=o[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(g)},a=globalThis.webpackChunkfloating_cta=globalThis.webpackChunkfloating_cta||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var l=n.O(void 0,[350],(()=>n(955)));l=n.O(l)})();