!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),styleWindow:document.querySelector("body")},n=null;t.startBtn.addEventListener("click",(function(){n=setInterval((function(){n&&(t.startBtn.disabled=!0),t.styleWindow.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.60707bc6.js.map