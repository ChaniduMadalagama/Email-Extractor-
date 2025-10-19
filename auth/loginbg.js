// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "login") {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                chrome.storage.sync.set({
                    user: {
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    }
                }, () => {
                    console.log("User signed in and data saved.");
                    sendResponse({ status: "success", user: user });
                });
            })
            .catch((error) => {
                console.error("Login failed: ", error.message);
                sendResponse({ status: "error", message: error.message });
            });
        // Return true to indicate you wish to send a response asynchronously
        return true;
    }
});
