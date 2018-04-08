'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _post = require('../model/post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { authenticate } from '../middleware/authMiddleware';


exports.default = function (_ref) {
    var config = _ref.config,
        db = _ref.db;

    var api = (0, _express.Router)();

    api.post('/add', function (req, res) {
        var newPost = new _post2.default();
        newPost.title = req.body.title;
        newPost.content = req.body.content;

        newPost.save(function (err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Post saved sucessfully' });
        });
    });

    api.get('/', function (req, res) {
        _post2.default.find({}, function (err, posts) {
            if (err) {
                res.send(err);
            }
            res.json(posts);
        });
    });

    api.get('/:id', function (req, res) {
        _post2.default.findById(req.params.id, function (err, post) {
            if (err) {
                res.send(err);
            }
            res.json(post);
        });
    });

    api.put('/:id', function (req, res) {
        _post2.default.findById(req.params.id, function (err, post) {
            if (err) {
                res.send(err);
            }
            post.title = req.body.title;
            post.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.json({ message: "Post updated" });
            });
        });
    });

    api.delete('/:id', function (req, res) {
        _post2.default.remove({
            _id: req.params.id
        }, function (err, post) {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Post Succefully deleted" });
        });
    });

    return api;
};
//# sourceMappingURL=posts.js.map