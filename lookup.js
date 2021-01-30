browser.contextMenus.create({
    id: "lookup-jisho",
    title: "Jisho Lookup",
    contexts: ["link"],
});
browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "lookup-jisho") {

        // Examples: text and HTML to be copied.
        const text = "This is text: " + info.linkUrl;
        // Always HTML-escape external input to avoid XSS.
        const safeUrl = escapeHTML(info.linkUrl);
        const html = `This is HTML: <a href="${safeUrl}">${safeUrl}</a>`;

        console.log(info);

    }
});