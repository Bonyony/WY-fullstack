const dbModels = require("../models");
const Profile = dbModels.profile;

const incrementMessagesSent = async (user) => {
  // use user.name to match withe Profile.username
  try {
    await Profile.updateOne(
      { username: user.name },
      { $inc: { messagesSent: 1 } }
    );
    console.log(`Incremented messagesSent for user: ${user.name}`);
  } catch (err) {
    console.error(
      `Failed to increment messagesSent for user: ${user.name}`,
      err
    );
  }
};

module.exports = {
  incrementMessagesSent,
};
