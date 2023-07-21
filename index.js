const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/sample")
  .then(() => {
    console.log("connected to mongodb successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const student = new mongoose.Schema({
  name: String,
  workout: Boolean,
  height: Number,
});

const Student = new mongoose.model("student", student);

// const adder = async () => {
//   const ss = new Student({
//     name: "talha",
//     workout: true,
//     height: 5.7,
//   });

//   await ss.save();
// };

// const adder = async () => {
//   const ss = await Student.create({
//     name: "talha shafiq",
//     workout: true,
//     height: 5.7,
//   });
// };

// const adder = async () => {
//   const ss = await Student.find();
//   console.log(ss);
// };

const adder = async () => {
  const ss = await Student.find({ height: { $eq: 5.7 } });
  console.log(ss);
};

adder();
