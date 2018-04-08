import mongoose from 'mongoose';
import { Router } from 'express';
import Skill from '../model/skill';
import bodyParser from 'body-parser';
import { authenticate } from '../middleware/authMiddleware';


export default ({ config, db }) => {
    let api = Router();

    api.post('/add', authenticate, (req, res) => {
        let newSkill= new Skill();
        newSkill.name = req.body.name;
        newSkill.coolness = req.body.coolness;
        newSkill.skillLevel = req.body.skillLevel;
        newSkill.src = req.body.src;
        newSkill.flex = req.body.flex;

        newSkill.save(err => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Skill added sucessfully' });
        });
    });

    api.get('/', authenticate, (req, res) => {
        Skill.find({}, (err, skills) => {
            if (err) {
                res.send(err);
            }
            res.json(skills);
        });
    });

    api.get('/:id', (req, res) => {
        Skill.findById(req.params.id, (err, skill) => {
            if (err) {
                res.send(err);
            }
            res.json(skill);
        });
    });

    api.put('/:id', (req, res) => {
        Skill.findById(req.params.id, (err, skill) => {
            if (err) {
                res.send(err);
            }
            skill.name = req.body.name;
            skill.save(err => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: "Skill updated" });
            });
        });
    });

    api.delete('/:id', (req, res) => {
        Skill.remove({
            _id: req.params.id
        }, (err, skill) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: "SKill Succefully deleted" })
        });
    });

    return api;
}
