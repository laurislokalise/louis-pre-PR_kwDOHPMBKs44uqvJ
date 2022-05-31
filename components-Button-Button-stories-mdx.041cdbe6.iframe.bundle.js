"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[611],{"./src/components/Button/Button.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{button:()=>Button_stories_button,default:()=>Button_stories});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));const theme_excludeProps=props=>(prop,defaultValidatorFn)=>!props.includes(prop)&&defaultValidatorFn(prop);var get=__webpack_require__("./node_modules/lodash/fp/get.js"),get_default=__webpack_require__.n(get);const theme_fromTheme=callback=>_ref=>{let{theme,...props}=_ref;return callback(theme,props)},theme_color=colorPath=>theme_fromTheme((theme=>get_default()(colorPath,theme.colors))),commonConfig={shouldForwardProp:theme_excludeProps(["fill","color","stroke"])},reservedKeywords=["currentColor","inherit","none"],colorHelper=(inputColor,props)=>inputColor&&!reservedKeywords.includes(inputColor)&&theme_color(inputColor)(props)||inputColor,commonStyles=styled_components_browser_esm.iv`
    pointer-events: all;
    box-sizing: border-box;
    fill: ${_ref=>{let{fill,...props}=_ref;return colorHelper(fill,props)}};
    color: ${_ref2=>{let{color:svgColor,...props}=_ref2;return colorHelper(svgColor,props)}};
    stroke: ${_ref3=>{let{stroke,...props}=_ref3;return colorHelper(stroke,props)}};
`,SvgRoot=styled_components_browser_esm.ZP.svg.withConfig(commonConfig)`
    ${commonStyles};
`,Rect=(styled_components_browser_esm.ZP.path.withConfig(commonConfig)`
    ${commonStyles};
`,styled_components_browser_esm.ZP.rect.withConfig(commonConfig)`
    ${commonStyles};
`),G=styled_components_browser_esm.ZP.g.withConfig(commonConfig)`
    ${commonStyles};
`;styled_components_browser_esm.ZP.circle.withConfig(commonConfig)`
    ${commonStyles};
`,styled_components_browser_esm.ZP.linearGradient.withConfig(commonConfig)`
    ${commonStyles};
`,styled_components_browser_esm.ZP.defs.withConfig(commonConfig)`
    ${commonStyles};
`,styled_components_browser_esm.ZP.stop.withConfig(commonConfig)`
    ${commonStyles};
`,styled_components_browser_esm.ZP.clipPath.withConfig(commonConfig)`
    ${commonStyles};
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Square=_ref=>{let{rotation,begin}=_ref;return(0,jsx_runtime.jsx)(G,{transform:`rotate(${rotation} 50 50)`,children:(0,jsx_runtime.jsx)(Rect,{x:"45",y:"15",rx:"5",ry:"6.16",width:"10",height:"22",children:(0,jsx_runtime.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:`${begin}s`,repeatCount:"indefinite"})})})};Square.displayName="Square";const Spinner_Square=Square;try{Square.displayName="Square",Square.__docgenInfo={description:"",displayName:"Square",props:{rotation:{defaultValue:null,description:"",name:"rotation",required:!0,type:{name:"number"}},begin:{defaultValue:null,description:"",name:"begin",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Spinner/Square.tsx#Square"]={docgenInfo:Square.__docgenInfo,name:"Square",path:"src/foundations/icons/Spinner/Square.tsx#Square"})}catch(__react_docgen_typescript_loader_error){}const Spinner=_ref=>{let{...props}=_ref;return(0,jsx_runtime.jsxs)(SvgRoot,{width:"20",height:"20",viewBox:"0 0 100 100",...props,children:[(0,jsx_runtime.jsx)(Spinner_Square,{rotation:0,begin:-.875}),(0,jsx_runtime.jsx)(Spinner_Square,{rotation:45,begin:-.75}),(0,jsx_runtime.jsx)(Spinner_Square,{rotation:90,begin:-.625}),(0,jsx_runtime.jsx)(Spinner_Square,{rotation:135,begin:-.5}),(0,jsx_runtime.jsx)(Spinner_Square,{rotation:180,begin:-.375}),(0,jsx_runtime.jsx)(Spinner_Square,{rotation:225,begin:-.25}),(0,jsx_runtime.jsx)(Spinner_Square,{rotation:270,begin:-.125}),(0,jsx_runtime.jsx)(Spinner_Square,{rotation:315,begin:0})]})};Spinner.displayName="Spinner";const icons_Spinner=Spinner;try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"none"'},{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.300"'},{value:'"primary.200"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.300"'},{value:'"red.200"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.300"'},{value:'"green.200"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.300"'},{value:'"yellow.200"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"background.input"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"content.disabled"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Spinner/index.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/foundations/icons/Spinner/index.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}const theme_modifier=(prop,trueCss)=>props=>("function"==typeof prop?prop(props):props[prop])?trueCss:void 0,theme_variants=(prop,allVariants,fallback)=>props=>allVariants["function"==typeof prop?prop(props):props[prop]??fallback],theme_radius=radiusPath=>theme_fromTheme((theme=>get_default()(radiusPath,theme.radii))),theme_transitionTime=()=>theme_fromTheme((theme=>theme.transitionTime));var space=__webpack_require__("./src/foundations/tokens/space.ts");const theme_spacing=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return args.map((level=>space.Z[level])).join(" ")},Root=styled_components_browser_esm.ZP.button`
    cursor: pointer;
`,Pressable=(0,react.forwardRef)(((_ref,ref)=>{let{children,...props}=_ref;return(props=>void 0!==props.href)(props)?(0,jsx_runtime.jsx)(Root,{as:"a",...props,ref,children}):(0,jsx_runtime.jsx)(Root,{type:"button",...props,ref,children})}));Pressable.displayName="Pressable";const components_Pressable=Pressable;try{Pressable.displayName="Pressable",Pressable.__docgenInfo={description:"",displayName:"Pressable",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pressable/index.tsx#Pressable"]={docgenInfo:Pressable.__docgenInfo,name:"Pressable",path:"src/components/Pressable/index.tsx#Pressable"})}catch(__react_docgen_typescript_loader_error){}const appearanceToColorCode=appearance=>({default:"primary",primary:"primary",danger:"red",warning:"yellow"}[appearance]),getOutlineStyles=function(colorType,appearance){let transparent=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("default"===appearance)return styled_components_browser_esm.iv`
            background-color: transparent;
            color: ${theme_color("content.primary")};
            border-color: ${theme_color("content.primary")};
        `;const appearanceColorCode=appearanceToColorCode(appearance);return styled_components_browser_esm.iv`
        background-color: ${transparent?"transparent":theme_color(`surface.${appearanceColorCode}50`)};
        border-color: ${theme_color(`interactive.${appearanceColorCode}.${colorType}`)};
        color: ${theme_color(`interactive.${appearanceColorCode}.${colorType}`)};
    `},getColorStyles=(appearance,colorCode)=>{if("default"===appearance)return;const appearanceColorCode=appearanceToColorCode(appearance);return styled_components_browser_esm.iv`
        background-color: ${theme_color(`interactive.${appearanceColorCode}.idle`)};
        border-color: ${theme_color(`interactive.${appearanceColorCode}.idle`)};
        color: ${theme_color(`content.${colorCode}`)};

        &:hover:not([disabled]):not([aria-expanded='true']) {
            background-color: ${theme_color(`interactive.${appearanceColorCode}.hover`)};
            border-color: ${theme_color(`interactive.${appearanceColorCode}.hover`)};
            color: ${theme_color(`content.${colorCode}`)};
        }

        &:active:not([disabled]) {
            background-color: ${theme_color(`interactive.${appearanceColorCode}.pressed`)};
            border-color: ${theme_color(`interactive.${appearanceColorCode}.pressed`)};
        }

        ${theme_modifier("active",styled_components_browser_esm.iv`
                background-color: ${theme_color(`interactive.${appearanceColorCode}.pressed`)};
                border-color: ${theme_color(`interactive.${appearanceColorCode}.pressed`)};
            `)}
    `},variantColorStyles=styled_components_browser_esm.iv`
    ${theme_variants("appearance",{default:styled_components_browser_esm.iv`
            background-color: ${theme_color("content.white")};
            color: ${theme_color("primary.400")};
            border-color: transparent;

            &:hover:not([disabled]):not([aria-expanded='true']) {
                color: ${theme_color("primary.500")};
            }
        `,primary:styled_components_browser_esm.iv`
            ${getColorStyles("primary","white")}
        `,warning:styled_components_browser_esm.iv`
            ${getColorStyles("warning","black")}
        `,danger:styled_components_browser_esm.iv`
            ${getColorStyles("danger","white")}
        `})}

    ${theme_variants("variant",{solid:styled_components_browser_esm.iv``,outline:styled_components_browser_esm.iv`
            border-width: 1px;
            ${_ref=>{let{appearance}=_ref;return styled_components_browser_esm.iv`
                ${getOutlineStyles("idle",appearance,!0)}

                &:hover:not([disabled]):not([aria-expanded='true']) {
                    ${getOutlineStyles("hover",appearance,!0)}
                }

                &:active:not([disabled]) {
                    ${getOutlineStyles("hover",appearance)}
                }

                ${theme_modifier("active",getOutlineStyles("hover",appearance))}
            `}}
        `})}
`,Container=(0,styled_components_browser_esm.ZP)(components_Pressable)`
    display: inline-flex;
    align-items: center;
    background-color: transparent;
    border: 1px solid transparent;
    text-decoration: none;
    vertical-align: middle;
    border-radius: ${theme_radius("md")};
    cursor: pointer;
    position: relative;
    transition: all ${theme_transitionTime()};
    box-sizing: border-box;

    ${theme_variants("size",{xs:styled_components_browser_esm.iv`
            font-size: 11px;
            padding: ${theme_spacing(0,2)};
            height: 20px;
            line-height: 12px;
        `,sm:styled_components_browser_esm.iv`
            font-size: 12px;
            padding: ${theme_spacing(0,3)};
            height: 30px;
            line-height: 12px;
        `,md:styled_components_browser_esm.iv`
            font-size: 14px;
            padding: ${theme_spacing(0,3)};
            height: 35px;
            line-height: 14px;
        `,lg:styled_components_browser_esm.iv`
            font-size: 18px;
            padding: ${theme_spacing(0,4)};
            height: 45px;
            line-height: 18px;
        `})}

    ${variantColorStyles}

    &:disabled {
        cursor: not-allowed;
        background-color: ${theme_color("surface.secondary")};
        color: ${theme_color("content.disabled")};
        border-color: ${theme_color("content.disabled")};

        ${theme_modifier("isLoading",variantColorStyles)}
    }
`,Content=styled_components_browser_esm.ZP.span`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    ${theme_variants("size",{xs:styled_components_browser_esm.iv`
            gap: ${theme_spacing(1)};
        `,sm:styled_components_browser_esm.iv`
            gap: ${theme_spacing(2)};
        `,md:styled_components_browser_esm.iv`
            gap: ${theme_spacing(2)};
        `,lg:styled_components_browser_esm.iv`
            gap: ${theme_spacing(2)};
        `})}

    ${theme_modifier("isHidden",styled_components_browser_esm.iv`
            opacity: 0;
        `)}
`,Text=styled_components_browser_esm.ZP.span`
    position: relative;
    align-items: center;
    display: inline-flex;
    white-space: nowrap;

    ${theme_modifier("ellipsis",styled_components_browser_esm.iv`
            overflow: hidden;
            text-overflow: ellipsis;
        `)}

    ${theme_variants("size",{xs:styled_components_browser_esm.iv`
            top: 0;
        `,sm:styled_components_browser_esm.iv`
            top: -1px; // Make text visually centered
        `,md:styled_components_browser_esm.iv`
            top: -1px; // Make text visually centered
        `,lg:styled_components_browser_esm.iv`
            top: -1px; // Make text visually centered
        `})}
`,LoadingSpinner=(0,styled_components_browser_esm.ZP)(icons_Spinner)`
    fill: currentColor;
    width: 1.3em;
    height: 1.3em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`,Button=(0,react.forwardRef)(((_ref,ref)=>{let{size="md",variant="solid",type="button",appearance="default",loading=!1,active=!1,children,leftIcon,rightIcon,ellipsis,...rest}=_ref;return(0,jsx_runtime.jsxs)(Container,{ref,type:rest.href?void 0:type,size,variant,appearance,isLoading:loading,active,...rest,disabled:"disabled"in rest&&rest.disabled||loading,"aria-expanded":active,children:[(0,jsx_runtime.jsxs)(Content,{isHidden:loading,size,children:[leftIcon,(0,jsx_runtime.jsx)(Text,{size,ellipsis,children}),rightIcon]}),loading&&(0,jsx_runtime.jsx)(LoadingSpinner,{"aria-busy":"true","aria-live":"polite","aria-label":"Loading"})]})}));Button.displayName="Button";const Button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},appearance:{defaultValue:{value:"default"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"danger"'},{value:'"warning"'}]}},variant:{defaultValue:{value:"solid"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"outline"'}]}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},leftIcon:{defaultValue:null,description:"",name:"leftIcon",required:!1,type:{name:"ReactNode"}},rightIcon:{defaultValue:null,description:"",name:"rightIcon",required:!1,type:{name:"ReactNode"}},ellipsis:{defaultValue:null,description:"",name:"ellipsis",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Button",component:Button_Button,mdxType:"Meta"}),(0,esm.kt)("h1",{id:"button"},"Button"),(0,esm.kt)("p",null,"The Button is a clickable component that can either act as a button or an anchor. It can be used for submitting a form, opening a piece of UI or navigating to different page."),(0,esm.kt)(dist_esm.Xz,{mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Button",mdxType:"Story"},(0,esm.kt)(Button_Button,{appearance:"primary",mdxType:"Button"},"Button"))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const Button_stories_button=()=>(0,esm.kt)(Button_Button,{appearance:"primary"},"Button");Button_stories_button.displayName="button",Button_stories_button.storyName="Button",Button_stories_button.parameters={storySource:{source:'<Button appearance="primary">Button</Button>'}};const componentMeta={title:"Button",component:Button_Button,includeStories:["button"]},mdxStoryNameToKey={Button:"button"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};const Button_stories=componentMeta}}]);
//# sourceMappingURL=components-Button-Button-stories-mdx.041cdbe6.iframe.bundle.js.map