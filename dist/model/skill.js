'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var skillSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    coolness: {
        type: Number,
        required: true
    },
    skillLevel: {
        type: Number,
        required: true
    },
    src: {
        type: String,
        required: true
    },
    flex: {
        type: Number,
        required: true
    }
});

module.exports = _mongoose2.default.model('Skill', skillSchema);
//# sourceMappingURL=skill.js.map