// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
    projectId: "YOUR_FIREBASE_PROJECT_ID",
    storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "YOUR_FIREBASE_SENDER_ID",
    appId: "YOUR_FIREBASE_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementById("auth-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload on form submit

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create a new user with email and password
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log("User Created:", user);

            // Optionally, you can update the profile with the username
            user.updateProfile({
                displayName: username
            }).then(() => {
                console.log("Username added:", user.displayName);
                alert("Account created successfully!");
                // Redirect or perform other actions
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error:", errorCode, errorMessage);
            alert(errorMessage);
        });
});
