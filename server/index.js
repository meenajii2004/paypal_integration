const express = require('express');
const paypal = require('paypal-rest-sdk');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: ["https://paypal-integration-frontend.vercel.app"], // Update with your Vercel frontend domain
    methods: ["POST", "GET"],
    credentials: true
}));

paypal.configure({
    "mode": 'sandbox', // Or 'live' for production
    "client_id": "YOUR_CLIENT_ID",
    "client_secret": "YOUR_CLIENT_SECRET"
});

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.post('/payment', async (req, res) => {
    try {
        let create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "https://paypal-integration-frontend.vercel.app/success", // Redirect to Vercel success page
                "cancel_url": "https://paypal-integration-frontend.vercel.app/failed"  // Redirect to Vercel failed page
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "item",
                        "sku": "item",
                        "price": "1.00", // Corrected amount
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                },
                "description": "This is the payment description."
            }]
        };
        
        await paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                console.log(error);
                throw error;
            } else {
                console.log(payment);
                res.json(payment);
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error creating payment');
    }
});

app.get('/success', async (req, res) => {
    try {
        console.log(req.query);

        const payerId = req.query.PayerID;
        const paymentId = req.query.paymentId;

        const execute_payment_json = {
            "payer_id": payerId,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                }
            }]
        };

        paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
            if (error) {
                console.log(error);
                return res.redirect("https://paypal-integration-frontend.vercel.app/failed");
            } else {
                console.log(JSON.stringify(payment));
                return res.redirect("https://paypal-integration-frontend.vercel.app/success"); // Redirect to Vercel success page
            }
        });
    } catch (error) {
        console.log(error);
    }
});

app.get('/failed', async (req, res) => {
    return res.redirect("https://paypal-integration-frontend.vercel.app/failed"); // Redirect to Vercel failed page
});

app.listen(8001, () => {
    console.log("Example App on 8001");
});
