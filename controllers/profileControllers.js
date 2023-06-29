import profileModel from "../models/profileModel.js";

export const createProfileController = async (req, res, next) => {
  try {
    const {
      owner,
      name,
      biography,
      location,
      twitterUsername,
      gitHubUsername,
      linkedInUsername,
      discordUsername,
      youTubeChannel,
      website,
    } = req.body;

    const profile = new profileModel({
      owner,
      name,
      biography,
      location,
      twitterUsername,
      gitHubUsername,
      linkedInUsername,
      discordUsername,
      youTubeChannel,
      website,
    });

    const newProfile = await profile.save();

    res.status(201).send("Your profile has been created.");
  } catch (err) {
    next(err);
  }
};


export const updateProfileController = ()=>{
  
}
