refs={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),styleWindow:document.querySelector("body")};let t=null;refs.startBtn.addEventListener("click",(()=>{t=setInterval((()=>{t&&(refs.startBtn.disabled=!0),refs.styleWindow.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),refs.stopBtn.addEventListener("click",(()=>{clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.8cd7f712.js.map
