const { Schema, model, models } = require('mongoose');

const studentModel = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    class: {
      type: Number,
    },
    email: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Student || model('Student', studentModel);
