import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
      type:String,
      required:true,
    },
    description:{
      type:String,
      required:true,
    },
    requirements:{
      type:[String],
      required:true,
    },
    salary:{
      type:String,
      required:true,
    },
    experienceLevel:{
      type: Number,
      reqired: true, 
    },
    location:{
      type: String,
      require: true,
    },
    jobType:{
      type: String,
      require: true,
    },
    position:{
      type: Number,
      require: true,
    },
    company:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
      require: true,
    },
    created_by:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      require: true,
    },
    applications:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Application', 
      }
    ]
},{timestamps: true});

export const Job = mongoose.model("Job", jobSchema);