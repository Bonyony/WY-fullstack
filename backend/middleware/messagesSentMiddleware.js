const dbModels = require("../models");
const Profile = dbModels.profile;

const incrementMessagesSent = async (user) => {
  // use user.name to match withe Profile.username
  try {
    const profile = await Profile.findOne({ username: user.name });

    if (!profile) {
      console.log(`Profile not found for ${user.name}`);
      return;
    }

    profile.messagesSent += 1;
    await profile.save();

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
