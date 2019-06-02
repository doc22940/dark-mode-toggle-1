(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(n,t,e){n.exports=e(24)},18:function(n,t,e){},24:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),a=e(7),c=e.n(a),i=(e(18),e(10)),u=e(1),l={colors:{background:"#2E3440",cardBackground:"#3B4252",buttonBackground:"#d08770",textColor:"#ECEFF4",buttonColor:"#2E3440"}},d={colors:{background:"#ECEFF4",cardBackground:"#E5E9F0",buttonBackground:"#5E81AC",textColor:"#2E3440",buttonColor:"#ECEFF4"}},s=e(2);function m(){var n=Object(s.a)(["\n  background: ",";\n  color: ",";\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px;\n  box-sizing: border-box;\n"]);return m=function(){return n},n}var b=u.b.div(m(),function(n){return n.theme.colors.background},function(n){return n.theme.colors.textColor});function f(){var n=Object(s.a)(["\n  background: ",";\n  padding: 24px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  max-width: 300px;\n  width: 100%;\n  min-height: 100px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  font-size: 24px;\n  font-family: sans-serif;\n"]);return f=function(){return n},n}var g=u.b.div(f(),function(n){return n.theme.colors.cardBackground});function p(){var n=Object(s.a)(["\n  background: ",";\n  color: ",";\n  display: block;\n  margin-top: 24px;\n  max-width: 100%;\n  border: none;\n  line-height: 36px;\n  padding: 0 12px;\n  border-radius: 4px;\n  font-size: 14px;\n  cursor-pointer;\n"]);return p=function(){return n},n}var h=u.b.button(p(),function(n){return n.theme.colors.buttonBackground},function(n){return n.theme.colors.buttonColor});function x(){var n=Object(s.a)(["\n  z-index: 99;\n  fill: ",";\n  color: #fff;\n  position: fixed;\n  top: 0;\n  border: 0;\n  right: 0;\n"]);return x=function(){return n},n}function C(){var n=Object(s.a)(["\n  outline: none !important;\n  &:hover .octo-arm {\n    animation: "," 560ms ease-in-out;\n  }\n  & .octo-arm {\n    transform-origin: 130px 106px;\n  }\n  @media screen and (max-width: 500px) {\n    &:hover .octo-arm {\n      animation: none;\n    }\n    & .octo-arm {\n      animation: "," 560ms ease-in-out;\n    }\n  }\n"]);return C=function(){return n},n}function E(){var n=Object(s.a)(["\n  0%,\n  100% {\n    transform: rotate(0);\n  }\n  20%,\n  60% {\n    transform: rotate(-25deg);\n  }\n  40%,\n  80% {\n    transform: rotate(10deg);\n  }\n"]);return E=function(){return n},n}var k=Object(u.c)(E()),v=u.b.a(C(),k,k),w=Object(u.b)("svg")(x(),function(n){return n.theme.colors.buttonBackground}),j=function(){return o.a.createElement(v,{href:"https://github.com/tsnolan23/dark-mode-toggle","aria-label":"View source on Github"},o.a.createElement(w,{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"},o.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),o.a.createElement("path",{className:"octo-arm",fill:"currentColor",d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"}),o.a.createElement("path",{className:"octo-body",fill:"currentColor",d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"})))},B=function(){var n=localStorage.getItem("isDarkMode"),t=Object(r.useState)("true"===n),e=Object(i.a)(t,2),a=e[0],c=e[1];return o.a.createElement(u.a,{theme:a?l:d},o.a.createElement(b,null,o.a.createElement(g,null,"Dark Mode is ",a?"Enabled":"Disabled",o.a.createElement(h,{onClick:function(){c(!a),localStorage.setItem("isDarkMode",!a)}},"Toggle Dark Mode")),o.a.createElement(j,null)))};c.a.render(o.a.createElement(B,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.898fb858.chunk.js.map