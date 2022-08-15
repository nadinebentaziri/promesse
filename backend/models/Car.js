const mongoose = require('mongoose');

const carSchema = new mongoose.Schema(
  {
    namevendeur: {
      type: String,
      required: [true, 'Car category is required'],
    },
    nameacheteur: {
      type: String,
      required: true,
    },
    adressev: {
      type: String,
      required: true,
    },
    adressea: {
      type: String,
      required: true,
    },
    codepostalv: {
      type: String,
      required: true,
    },
    codepostala: {
      type: String,
      required: true,
    },
    nummatricule: {
      type: String,
      required: true,
    },
    telvendeur: {
      type: String,
      required: true,
    },
    telacheteur: {
      type: String,
      required: true,
    },
    emailv: {
      type: String,
      required: true,
    },
    emaila: {
      type: String,
      required: true,
    },
    // createdBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
