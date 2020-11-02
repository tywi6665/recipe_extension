chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request)
        if (request.action === "scrape") {
            console.log("content page")
        }
    }
)