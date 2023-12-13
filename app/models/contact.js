import { Mongoose } from "mongoose";

const contactSchema = new Schema({
    fullname:{
        type: String,
        required: [true, "Name is required."],
        trim: true,
        minLength: [2, "Name must be at least 2 characters long."],
        maxLength: [30, "Name must be at most 30 characters long."]
    },
    email:{
        type: String,
        required: [true, "Email is required."],
       match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Email must be a valid email address."],
    },
    pnumber:{
        type: Number,
        required: [true, "Phone number is required."],
        match:[/^\d{3}-\d{3}-\d{4}$/, "Phone number must be a valid phone number."],
    },
    date:{
        type: Date,
        default: Date.now,
    },

});

const Contact = Mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;