// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

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
            // Close the authentication tab
            chrome.tabs.getCurrent(tab => {
                chrome.tabs.remove(tab.id);
            });
        });
    })
    .catch((error) => {
        console.error("Login failed: ", error.message);
        alert("Login failed: " + error.message);
        // Close the authentication tab
        chrome.tabs.getCurrent(tab => {
            chrome.tabs.remove(tab.id);
        });
    });
