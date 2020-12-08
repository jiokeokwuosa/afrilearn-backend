import mongoose from 'mongoose';

const QuizResultsSchema = new mongoose.Schema(
  {
    results: [
      {
        questionId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'question',
        },
        optionSelected: {
          type: Number,
        },
        correctOption: {
          type: Number,
        },
        status: {
          type: String,
          enum: ['correct', 'skipped', 'incorrect'],
        },
      },
    ],
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
    lessonId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'lesson',
    },
    timeSpent: {
      type: String,
    },
    numberOfCorrectAnswers: {
      type: Number,
    },
    numberOfWrongAnswers: {
      type: Number,
    },
    numberOfSkippedQuestions: {
      type: Number,
    },
    score: {
      type: Number,
    },
    remark: {
      type: String,
    },
  },
  { timestamps: true },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const QuizResult = mongoose.model('quizResult', QuizResultsSchema);

export default QuizResult;
