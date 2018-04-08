import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import post from '../controller/posts';
import skill from '../controller/skills';
import account from '../controller/accounts'

let router = express();

//connect to db
initializeDb(db => {

    // internal middleware
    router.use(middleware({ config, db }));

    // api routes v1 (/v1)
    router.use('/post', post({ config, db }));
    router.use('/skill', skill({ config, db }));
    router.use('/account', account({ config, db }));
});

export default router;
