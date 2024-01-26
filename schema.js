
import { Schema, model } from 'mongoose';

const studentSchema = new Schema({
  registrationId: {
    type: String,
    unique: true,
    // required: true,
  },
  class: {
    type: String,
    // required: true,
  },
  division: {
    type: String,
    // required: true,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  studentName: {
    type: String,
    // required: true,
  },
  fathersName: {
    type: String,
    // required: true,
  },
  mothersName: {
    type: String,
    // required: true,
  },
  dateOfBirth: {
    type: Date,
    // required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    // required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  phoneNumber: {
    type: String,
    // required: true,
  },
  whatsappNumber: {
    type: String,
  },
  schoolName: {
    type: String,
    // required: true,
  }
});

studentSchema.pre('save', async function (next) {
  if (!this.registrationId) {
    this.registrationId = generateRandomString();
  }
  next();
});

// Helper function to generate a random string
function generateRandomString() {
  const chars = 'ABCD0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/////payment
const paymentSchema = new Schema({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: 'Student', // Reference to the Student model
    // required: true,
  },
  month: {
    type: String,
    enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    // required: true,
  },
  amount: {
    type: Number,
    // required: true,
  },
  paymentDate: {
    type : Date,
    default : Date.now
  }
 });


// Create Payment model
const Payment = model('Payment', paymentSchema);

// Create Student model
const Student = model('Student', studentSchema);

export {Student};
export {Payment};


//create teacher profile
const teacherSchema = new Schema(
  {
    name:{type:String, requierd: true},
    address:{type:String, requierd: true},
    phoneNumber:{type:String, requierd: true},
    whatsappNumber:{type:String},
    userId:{unique:true,type:String},
    qualification:{type:String},
    teacherOf:{type:String},
    experience:{type:String}
  }
);
teacherSchema.pre('save', async function (next) {
  if (!this.userId) {
    this.userId = generateRandomString();
  }
  next();
});

const Teacher = model('Teacher',teacherSchema);
export {Teacher};


const noticeSchema = new Schema (
  {
    title:{type:String, requierd:true},
    disc:{type:String,requierd:true},
    url:{type:String}
  }
)

const Notice = model('Notice',noticeSchema);
export {Notice};

//downloads
const downloadSchema = new Schema (
  {
    title:{type:String, requierd:true},
    url:{type:String, requierd:true}
  }
)

const Download = model('Download',downloadSchema);
export {Download};
