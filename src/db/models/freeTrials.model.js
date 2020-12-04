import mongoose from 'mongoose';

const FreeTrialSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'class',
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'course',
    },
    duration: {
      type: Number,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
  },
  { timestamps: true },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const FreeTrial = mongoose.model('freeTrial', FreeTrialSchema);

export default FreeTrial;
