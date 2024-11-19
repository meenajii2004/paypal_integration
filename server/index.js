const express = require('express');
const paypal = require('paypal-rest-sdk');
const cors = require('cors');

const app = express();

app.use(cors(
    {
        origin:["https://paypal-integration-frontend.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
));

paypal.configure({
    "mode": 'sandbox',
    "client_id": "AYUGvkcoZmKHjHpUH4S5854jtdscVdEvdHsATrVSb-AMEp60JYnoGJCa8htZPmCHUdgh8Q75V9tLIUl1",
    "client_secret": "EPOoA7EkO7WBx660eEh4va3pWYUANwZfmgTqjfR8iPvcViTqVVLuE-mWSLVI8ZdFCO10DGAdd_UyUxMP"
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
                "return_url": "http://localhost:5176/success",
                "cancel_url": "http://localhost:5176/failed"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "item",
                        "sku": "item",
                        "price": ".00",
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
        await paypal.payment.create(create_payment_json, function (error, payment) { // Fixed 'function' here
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

        const express_checkout_json = {
            "payer_id": payerId,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                }
            }]
        }

        paypal.payment.execute(paymentId, express_checkout_json, function (error, payment) { })

        if (error) {
            console.log(error);
            return res.redirect("http://localhost:5176/failed")
        }
        else {
            const response = JSON.stringify(payment);
            const ParsedResponse = JSON.parse(response);

            console.log(ParsedResponse);

            return res.redirect("http://localhost:5176/success")
        }
    } catch (error) {
        console.log(error);
    }
});

app.get('/failed', async (req, res) => {
    return res.redirect('http://localhost:5176/failed')   
})

app.listen(8001 , () => { 
    console.log("Example App on 8001");  
});      
