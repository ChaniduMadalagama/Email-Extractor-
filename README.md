# Google Maps Scraper - Your Own Version

This is your own version of the Google Maps Scraper Chrome extension. It has been modified to use your own Firebase project for authentication and your own Stripe account for subscriptions.

## Setup and Configuration

Follow these steps to set up and configure the extension:

### 1. Firebase Setup

1.  **Create a Firebase Project:**
    *   Go to the [Firebase Console](https://console.firebase.google.com/).
    *   Click "Add project" and follow the on-screen instructions.

2.  **Add a Web App:**
    *   In your project's dashboard, click the web icon (`</>`).
    *   Give your app a nickname and click "Register app".

3.  **Get Your Firebase Config:**
    *   Firebase will provide you with a `firebaseConfig` object. Copy this object.

4.  **Update the Extension's Configuration:**
    *   Open the `auth/config.js` file.
    *   Replace the existing `firebaseConfig` object with the one you just copied.

### 2. Stripe Integration

1.  **Create a Stripe Account:**
    *   Go to the [Stripe Dashboard](https://dashboard.stripe.com/) and create an account.

2.  **Create a Product and Price:**
    *   Navigate to the "Products" section and click "+ Add product".
    *   Fill in the product details and create a recurring price.

3.  **Get Your Price ID:**
    *   After creating the price, copy the "Price ID" (it starts with `price_...`).

4.  **Get Your API Keys:**
    *   Go to the "Developers" section and then "API keys".
    *   Copy your "Publishable key" (starts with `pk_...`) and your "Secret key" (starts with `sk_...`).

5.  **Update the Extension's Configuration:**
    *   Open the `auth/config.js` file and replace the `proPriceId` with your new Price ID.
    *   Open the `auth/pay/postpay.js` file and replace `YOUR_STRIPE_PUBLISHABLE_KEY` with your Stripe publishable key.

### 3. Netlify Deployment

1.  **Create a GitHub Repository:**
    *   Create a new repository on [GitHub](https://github.com/new).
    *   Push the extension's code to this repository.

2.  **Create a Netlify Site:**
    *   Sign up for a free account on [Netlify](https://app.netlify.com/signup).
    *   Click "Add new site" > "Import an existing project".
    *   Connect your GitHub account and select the repository you created.

3.  **Configure Environment Variables:**
    *   Go to "Site settings" > "Build & deploy" > "Environment".
    *   Add a new variable with the key `STRIPE_SECRET_KEY` and your Stripe secret key as the value.

4.  **Deploy the Site:**
    *   Click "Deploy site".

5.  **Get Your Function URL:**
    *   Go to the "Functions" tab in your Netlify dashboard.
    *   Copy the URL for the `create-checkout-session` function.

6.  **Update the Extension's Frontend:**
    *   Open the `auth/pay/postpay.js` file.
    *   Replace the `fetch` URL with your new Netlify function URL.

### 4. Loading the Extension in Chrome

1.  **Open Chrome Extensions:**
    *   Open Chrome and go to `chrome://extensions`.

2.  **Enable Developer Mode:**
    *   Turn on the "Developer mode" toggle in the top-right corner.

3.  **Load the Extension:**
    *   Click "Load unpacked".
    *   Select the root directory of the extension.

The extension is now installed and ready to use with your own Firebase and Stripe accounts.
