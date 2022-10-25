const { Schema, Types } = require('mongoose');
const dateDisplay = require('../utils/dateDisplay')

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            min: 1,
            max: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: dateDisplay
          }
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  )

module.exports = reactionSchema;
