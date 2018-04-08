import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import post from '../controller/posts';
import skill from '../controller/skills';

let router = express();

//connect to db
initializeDb(db => {

    // internal middleware
    router.use(middleware({ config, db }));

    // api routes v1 (/v1)
    router.use('/post', post({ config, db }));
    router.use('/skill', skill({ config, db }));
});

export default router;
