!function(){refs={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),styleWindow:document.querySelector("body")};var t=null;refs.startBtn.addEventListener("click",(function(){t=setInterval((function(){t&&(refs.startBtn.disabled=!0),refs.styleWindow.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),refs.stopBtn.addEventListener("click",(function(){clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.84687a2a.js.map
