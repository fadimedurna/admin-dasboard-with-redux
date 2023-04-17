const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: {
      type: String,
      default:
        "https://admin.universcitiz.com/uploads/imageupload16267193569261.png",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
