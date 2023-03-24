import WhatsAppAPI from "whatsapp-api-js";

const TOKEN = "whatsappToken";
const APP_SECRET = "YOUR_SECRET";
const VERIFY_TOKEN = "EAAIYr2ZBJEW8BAJWr3i74E0ZBsGlTWRfWcPO5L8OBfdfG3uyyEBMTHjuI9m8UwktZC5nidvCWGbStAq26ZCoXI2pEiHI5TAwyVmTCiA5YJ5XpIhxy1ICVucAZChi8flZBaskZBAF4ZAg11gzN2igGj2JyUBoB9TAt1NAyRq1QpaO5CPzfdTFBtbcSW0pNsuaoeZAMV2bZA9HOZB4QZDZD";

const Whatsapp = new WhatsAppAPI({
    token: TOKEN,
    appSecret: APP_SECRET,
    webhookVerifyToken: VERIFY_TOKEN
});

// Assuming get is called on a GET request to your server
function get(e) {
    return Whatsapp.get(JSON.parse(e.params));
}