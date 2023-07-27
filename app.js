const credentials = {
    apiKey: 'a5a32131ffcb99f79bf58f1af1653dd77fd3ddb28355336ec9b20d0d19ac102f', // use your sandbox app API key for development in the test environment
    username: 'AfriTapp', // use 'sandbox' for development in the test environment
};
const Africastalking = require('africastalking')(credentials);

// Initialize a service e.g. SMS
const sms = Africastalking.SMS

// Use the service
const options = {
    to: ['+254759997835', '+254721327396'],
    message: "The big bad wolf is here to stay!"
}

// Send message and capture the response or error
sms.send(options)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });