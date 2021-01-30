browser.contextMenus.create({
    id: "lookup-jisho",
    title: "Jisho Lookup",
    contexts: ["selection"],
});


browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "lookup-jisho") {

        // const selectedText = select.selectionText;

        console.log("test");

        //const selection = window.getSelection();

        const selectedText = info.selectionText;

        // const range = selection.getRangeAt(0);
        // const rect = range.getBoundingClientRect();
        // const top = Math.round(rect.top);
        // const left = Math.round(rect.left);

        console.log("hello");

        // console.log("top:" + top);
        // console.log("left:" + left);

        const iframe = document.createElement("iframe");
        iframe.sandbox = 'allow-forms allow-scripts allow-same-origin';
        
        iframe.src = "https://jisho.org/search/" + selectedText;
        // iframe.style.width = '1100px';
        // iframe.style.height = '800px';
        iframe.style.position = 'absolute';
        //iframe.style.top = top + 'px';
        //iframe.style.left = left + 'px';

        console.log(iframe);

        document.body.appendChild(iframe)

    }
});