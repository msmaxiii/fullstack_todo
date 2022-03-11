const mongoose = require("mongoose");

exports.mongooseConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URII, {
      useNewURLParser: true,
    });

    await mongoose.connection;
    console.log(`MongoDB Connected`);
  } catch (err) {
    const error = new Error(err);
    console.error(error);
  }
}