const webPush = require("web-push");
const vapid = require("./.vapid.json");

webPush.setVapidDetails(
  "mailto:test@example.com",
  vapid.publicKey,
  vapid.privateKey,
);

const subscription = {
  endpoint: "xxx",
  keys: {
    p256dh: "xxx",
    auth: "xxx",
  },
};

webPush.sendNotification(
  subscription,
  JSON.stringify({
    title: "Push Notification",
    body: `This is push notification test at ${new Date().toISOString()}`,
  }),
);
