'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _skill = require('../model/skill');

var _skill2 = _interopRequireDefault(_skill);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _authMiddleware = require('../middleware/authMiddleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var config = _ref.config,
        db = _ref.db;

    var api = (0, _express.Router)();

    api.post('/add', function (req, res) {
        var newSkill = new _skill2.default();
        newSkill.name = req.body.name;
        newSkill.coolness = req.body.coolness;
        newSkill.skillLevel = req.body.skillLevel;
        newSkill.src = req.body.src;
        newSkill.flex = req.body.flex;

        newSkill.save(function (err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Skill added sucessfully' });
        });
    });

    api.get('/', function (req, res) {
        _skill2.default.find({}, function (err, skills) {
            if (err) {
                res.send(err);
            }
            res.json(skills);
        });
    });

    api.get('/:id', function (req, res) {
        _skill2.default.findById(req.params.id, function (err, skill) {
            if (err) {
                res.send(err);
            }
            res.json(skill);
        });
    });

    api.put('/:id', function (req, res) {
        _skill2.default.findById(req.params.id, function (err, skill) {
            if (err) {
                res.send(err);
            }
            skill.name = req.body.name;
            skill.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.json({ message: "Skill updated" });
            });
        });
    });

    api.delete('/:id', function (req, res) {
        _skill2.default.remove({
            _id: req.params.id
        }, function (err, skill) {
            if (err) {
                res.send(err);
            }
            res.json({ message: "SKill Succefully deleted" });
        });
    });

    return api;
};
//# sourceMappingURL=skills.js.map