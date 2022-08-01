import { mongoose } from "mongoose";
const { Schema } = mongoose;

const partnerSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
    },
    description:{
        type: String,
        required: true
    }
  },
  {
    timestamps: true,
  }
);


const Partner = mongoose.model("Partner", partnerSchema);

module.exports = Partner;
