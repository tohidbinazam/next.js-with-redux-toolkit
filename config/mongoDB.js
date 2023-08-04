const { default: mongoose } = require('mongoose');

const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.log(error.message);
  }
};

export default mongoDB;
