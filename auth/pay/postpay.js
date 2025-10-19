document.getElementById("fblink").href = config.feedback_url;

const checkoutButton = document.getElementById('checkout-button');

checkoutButton.addEventListener('click', async () => {
    const { proPriceId } = config;
    const user = await new Promise((resolve) => {
        chrome.storage.sync.get('user', (data) => {
            resolve(data.user);
        });
    });

    if (!user) {
        alert('Please log in to subscribe.');
        return;
    }

    const response = await fetch('https://emailextracterchromeextenction.netlify.app/.netlify/functions/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId: proPriceId }),
    });

    const { sessionId } = await response.json();

    const stripe = Stripe('pk_test_51SJamuPsuDZZb4kt0OajANS2otoKcWcGNu6dCDYAB1J1rqCzfwnw6WrBjWJPadIGMiYNJMUslwgIiDXPs6W640FK00MV1AEfYE');
    await stripe.redirectToCheckout({ sessionId });
});
