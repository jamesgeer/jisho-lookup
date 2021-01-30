browser.contextMenus.create({
    id: "lookup-jisho",
    title: "Jisho Lookup",
    contexts: ["selection"],
});


browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "lookup-jisho") {

        const selectedText = info.selectionText;

        window.open("https://jisho.org/search/" + selectedText, "", "width=200,height=100");

    }
});