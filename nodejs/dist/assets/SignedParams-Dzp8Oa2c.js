import{j as e}from"./streaming-DQs5bTwi.js";import{g as i}from"./constants-6gU7-fjU.js";function o({id:l,name:a,label:d,value:s,placeholder:r,required:t}){return e("div",{class:"w-full",children:[d&&e("label",{for:a,class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:[d,t&&" *"]}),e("input",{required:t,type:"text",name:a,id:l??a,class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:r,value:s})]})}const c=function({signedParams:l}){const[a,d]=i(()=>{const r=Object.entries(l);return r.length===0?[["",""]]:r});function s(r){d(t=>[...t.slice(0,r),...t.slice(r+1)])}return e("fieldset",{class:"border border-gray-300 rounded-lg p-4",children:[e("legend",{class:"text-lg font-medium",children:"Signed Params"}),e("div",{class:"flex flex-col gap-y-4 w-full",children:[e("div",{class:"flex flex-col gap-y-2 w-full",children:a.map(([r,t],n)=>e("div",{class:"flex items-center gap-x-2 w-full",children:[e(o,{id:`key-${r}-${n}`,name:"signed_keys[]",value:r,placeholder:"key Ex.: company_id"}),e(o,{id:`value-${t}-${n}`,name:"signed_values[]",value:String(t),placeholder:"Value Ex.: 52"}),e("button",{className:"rounded-lg border border-gray-200 hover:border-red-200 py-1 px-2.5 text-xs text-gray-500 hover:text-red-500 font-medium uppercase tracking-wider disabled:text-gray-300 hover:disabled:text-gray-300 disabled:border-gray-50 hover:disabled:border-gray-50",onClick:()=>s(n),disabled:a.length<2,children:"delete"})]},r))}),e("button",{class:"text-left text-blue-500",type:"button",onClick:()=>d([...a,["",""]]),children:["+ ",e("span",{class:"underline",children:"Add Param"})]})]})]})},u=function(l){return e(c,{...l})},f=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"}));export{o as I,f as S,u as W};
