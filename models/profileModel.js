import mongoose from "mongoose";

export const profileSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {type: String}, 
    biography: {type: String},
    location: {type: String},
    twitterUsername: {type: String },
    gitHubUsername: {type: String },
    linkedInUsername: {type: String },
    discordUsername: {type: String },
    youTubeChannel: {type: String },
    website: {type: String },
})

const profileModel =  mongoose.model('Profile', profileSchema)
export default  profileModel
 