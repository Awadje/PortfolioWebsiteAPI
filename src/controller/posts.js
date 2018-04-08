import { Router } from 'express';
import Post from '../model/post';


// import { authenticate } from '../middleware/authMiddleware';


export default ({ config, db }) => {
    let api = Router();

    api.post('/add', (req, res) => {
        let newPost= new Post();
        newPost.title = req.body.title;
        newPost.content = req.body.content;
        newPost.imgUrl = req.body.imgUrl;
        newPost.flex = req.body.flex;
     

        newPost.save(err => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Post saved sucessfully' });
        });
    });

    api.get('/', (req, res) => {
        Post.find({}, (err, posts) => {
            if (err) {
                res.send(err);
            }
            res.json(posts);
        });
    });

    api.get('/:id', (req, res) => {
        Post.findById(req.params.id, (err, post) => {
            if (err) {
                res.send(err);
            }
            res.json(post);
        });
    });

    api.put('/:id', (req, res) => {
        Post.findById(req.params.id, (err, post) => {
            if (err) {
                res.send(err);
            }
            post.title = req.body.title;
            post.save(err => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: "Post updated" });
            });
        });
    });

    api.delete('/:id', (req, res) => {
        Post.remove({
            _id: req.params.id
        }, (err, post) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Post Succefully deleted" })
        });
    });

    return api;
}
