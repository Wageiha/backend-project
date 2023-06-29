import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"


export const signUpController = async (req, res, next) => {
  try {

    const {name, email, password} = req.body

    const alreadyExist = await userModel.findOne({ email: email });
    if (alreadyExist !== null) {
      const err = new Error("Email already registered");
      err.status = 400;
      throw err;
    }


    const saltRounds = 11  
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = new userModel({
      name,
      email,
      hashedPassword
    });

    const newUser = await user.save();

    newUser.hashedPassword = undefined;

    res.status(201).json("You have registered successfully.");
  } catch (err) {
    next(err);
  }
};

export const loginController = async (req, res, next)=>{
  try {
    const {email, password} = req.body

const userDataFromDB = await userModel.findOne({email})

if (userDataFromDB === null) {
  const err = new Error("Invalid Credentials");
      err.status = 400;
      throw err;
}

const hashedPassword = userDataFromDB.hashedPassword;

const isValid = await bcrypt.compare(password, hashedPassword);

if (isValid) res.status(201).json(userDataFromDB)
else {
  const err = new Error("Invalid Credentials");
      err.status = 400;
      throw err;
} 
  } catch (err) {
    next(err)
  }

}

export const userDetailsController = async (req, res, next) => {
  const userId = req.params
  try {
    const result = await userModel.findById(userId);

    res.status(200).json(result.name);
  } catch (err) {
    next(err);
  }
};

/* export const updateUserController = async (req, res, next) => {
  const _id = req.params._id; */

 /*  const alreadyExist = await userModel.findOne({_id: id});
  if (alreadyExist !== null) {
    const err = new Error("Email already registered");
    err.status = 400;
    throw err;
  } */

 /*  const updatedKeys = Object.keys(req.body);
  let updatedObj = { socialMediaLinks: {} };
  const socialLinksArr = [
    "twitterUsername",
    "gitHubUsername",
    "linkedInUsername",
    "discordUsername",
    "youTubeChannel",
    "website",
  ]; */

  /* updatedKeys.forEach((key) => {
    if (socialLinksArr.includes(key)) {
      updatedObj.socialMediaLinks[key] = req.body[key];
    } else {
      updatedObj[key] = req.body[key];
    }
  });
 */
/*   try {
    await userModel.findByIdAndUpdate(_id, updatedObj, {new: true})
    res.send("Your Profile is updated.");
  } catch (err) {
    next(err);
  }
}; */
