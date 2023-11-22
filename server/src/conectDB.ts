

import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://batzion:24009010650@cluster0.pjeni9p.mongodb.net/", 

)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err:any) => {
    console.log("Cannot connect to the database!", err);
    // logger.error("Cannot connect to the database!");
    process.exit();
  });