const TG = require("telegram-bot-api");
const { isPromoMessage } = require("./checkpromo");
// Define your API object
const api = new TG({
  token: "API_KEY_HERE",
});

// Define your message provider
const mp = new TG.GetUpdateMessageProvider();

// Set message provider and start API
api.setMessageProvider(mp);
api
  .start()
  .then(() => {
    console.log("API is started");
  })
  .catch(console.err);

// Receive messages via event callback
api.on("update", (update) => {
  // update object is defined at
  // https://core.telegram.org/bots/api#update
  console.log(update.message.text);
  console.log(isPromoMessage(update.message.text));
});
