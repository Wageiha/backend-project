import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required:  true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

const postsModel = mongoose.model("Post", postsSchema)
export default  postsModel