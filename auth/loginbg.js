chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "login") {
        const authUrl = chrome.runtime.getURL('auth/auth.html');
        chrome.tabs.create({ url: authUrl });
        sendResponse({ status: "opening_login_page" });
    }
    return true; // Keep the message channel open for async response
});
