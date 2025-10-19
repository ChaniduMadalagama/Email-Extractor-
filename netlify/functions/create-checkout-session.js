const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
    const { priceId } = JSON.parse(event.body);

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            success_url: `${process.env.URL}/success.html`,
            cancel_url: `${process.env.URL}/cancel.html`,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ sessionId: session.id }),
        };
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: { message: error.message } }),
        };
    }
};
