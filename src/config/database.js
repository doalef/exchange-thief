import mongoose from "mongoose";
const uri = "mongodb://root:123456aa@ds129780.mlab.com:29780/exchange-thief";
export default () => {
  mongoose.connect(uri, err => {
    console.log(
      err ? err.message : "Connected to database!"
    );
  });
};
