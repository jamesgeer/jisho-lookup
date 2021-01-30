document.addEventListener('mouseup', event => {  
    if(window.getSelection().toString().length){

        const selection = window.getSelection();
        const selectText = selection.toString();
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        const top = Math.round(rect.top);
        const left = Math.round(rect.left);

        console.log("top:" + top);
        console.log("left:" + left);

        // const iframe = document.createElement("iframe");
        // iframe.src = "https://jisho.org/search/" + exactText;
        // iframe.style.width = '1100px';
        // iframe.style.height = '800px';
        // iframe.style.position = 'absolute';
        // iframe.style.left = window.pageX + 'px';
        // iframe.style.top = window.pageY + 'px';

        // document.body.appendChild(iframe)

        //window.open("https://jisho.org/search/" + exactText, "", "width=800,height=800");
    }
})