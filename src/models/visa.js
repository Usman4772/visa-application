import mongoose from "mongoose";

const visaSchema = new mongoose.Schema({
  visaNumber: {
    type: String,
  },
  trackingId: {
    type: String,
  },
  Name: {
    type: String,
  },
  Dob: {
    type: Date,
  },
  Sex: {
    type: String,
  },
  Nationality: {
    type: String,
  },
  TravelNumber: {
    type: String,
  },
  issue_date: {
    type: Date,
  },
  valid_till: {
    type: Date,
  },
});

const Visa = mongoose.models.Visa || mongoose.model("Visa", visaSchema);
export default Visa;
