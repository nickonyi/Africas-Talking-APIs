const AfricasTalking = require('africastalking');

// TODO: Initialize Africa's Talking
const aficastalking = AfricasTalking({
    apikey: 'a5a32131ffcb99f79bf58f1af1653dd77fd3ddb28355336ec9b20d0d19ac102f',
    username: 'AfriTapp'
});




module.exports = async function sendSMS() {

    // TODO: Send message
    try {
        const result = await africastalking.SMS.send({
            to: '[+254759997835,+25478937262]',
            message: 'Hey AT Ninja! Wassup...',
            from: '[+254759997835]'
        });
        console.log(result);
    } catch (ex) {
        console.error(ex);
    }

};