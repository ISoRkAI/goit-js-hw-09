const t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("button[data-stop]")};t.startBtn.addEventListener("click",(()=>{e.start()})),t.stopBtn.addEventListener("click",(()=>{e.stop()}));const e={isActive:!1,start(){this.isActive||(this.isActive=!0,t.startBtn.style.color="grey",t.stopBtn.style.color="black",this.timerId=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3))},stop(){clearInterval(this.timerId),this.isActive=!1,t.stopBtn.style.color="grey",t.startBtn.style.color="black"}};
//# sourceMappingURL=01-color-switcher.99827f15.js.map
