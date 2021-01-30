browser.contextMenus.create({
    id: "lookup-jisho",
    title: "Jisho Lookup",
    contexts: ["selection"],
    icons: {
        "32": "jisho.png"
    }
});


browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "lookup-jisho") {

        const selectedText = info.selectionText;

        const creating = browser.tabs.create({
            url:"https://jisho.org/search/" + selectedText
          });
          creating.then(onCreated, onError);

    }
}); 