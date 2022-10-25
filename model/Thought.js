const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');
const dateDisplay = require('../utils/dateDisplay');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            getter: dateDisplay
        },
        username: {
            type: String,
            required: true
        },
        reactions: [Reaction]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount', function () { return this.reactions.length });

const Thought = model('thoughts', thoughtSchema);

module.exports = Thought;
