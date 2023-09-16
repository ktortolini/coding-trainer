const router = require('express').Router();
const authorize = require('../utils/authorize');
const { User, Post, Comment } = require('../models');
// adds a get request for the homepage
router.get('/', async (req, res) => {
   try {
      // gets all of the posts and their authors
      const result = await Post.findAll({
         include: {
            model: User,
         },
      });
      // serializes the data so the template can read it
      const postsFlat = result.map((post) => post.get({ plain: true }));
      // this is for debugging purposes
      console.log(`${JSON.stringify(postsFlat)} = result.map() => {...}`);
      // checks if the user is logged in
      if (req.session.user_name === undefined) {
         res.render('homepage', {
            posts: postsFlat,
         });
      } else {
         // renders the homepage
         res.render('homepage', {
            posts: postsFlat,
            user: req.session.user_name,
         });
      }
   } catch (error) {
      console.log(error);
   }
});
// adds a post request for the homepage
router.post('/', async (req, res) => {
   try {
      // creates the posts with the body and title
      const post = await Post.create({
         body: req.body.body,
         title: req.body.title,
         user_id: req.session.user.id,
      });
      // this is for debugging purposes
      console.log(`${JSON.stringify(post)} = post => await Post.create({...})`);
      // checks if the user is logged in
      if (req.session.user === undefined) {
         res.redirect('/login');
      } else {
         // renders homepage
         res.redirect('/');
      }
   } catch (error) {
      console.log(error);
   }
});
// adds a get request for the dashboard
router.get('/dashboard', authorize, async (req, res) => {
   try {
      // gets all of the posts from the current user
      const result = await Post.findAll({
         where: {
            user_id: req.session.user_id,
         },
         include: [User],
      });
      // serializes the data so the template can read it
      const postsFlat = result.map((post) => post.get({ plain: true }));
      // this is for debugging purposes
      console.log(`${JSON.stringify(postsFlat)} = result.map() => {...}`);
      // checks if the user is logged in
      if (req.session.user_id === undefined) {
         res.redirect('/login');
      } else {
         // renders the dashboard
         res.render('dashboard', {
            posts: postsFlat,
            user_id: req.session.user_id,
         });
      }
   } catch (error) {
      console.log(error);
   }
});
// adds a get request for adding comments
router.get('/post/:id/comment', authorize, async (req, res) => {
   try {
      // gets the selected post
      const result = await Post.findOne({
         where: {
            id: req.params.id,
         },
         include: [
            { model: User },
            {
               model: Comment,
               include: {
                  model: User,
               },
            },
         ],
      });
      // serializes the data so the template can read it
      const postsFlat = result.get({ plain: true });
      // this is for debugging purposes
      console.log('$$$$$$$$$$$$$$$:', postsFlat.length);
      console.log(`${JSON.stringify(postsFlat)} = result.get({...})`);
      // checks if the user is logged in
      if (req.session.user_id === undefined) {
         res.redirect('/login');
      } else {
         // argument is handlebars file
         res.render('addComment', {
            post: postsFlat,
            user: req.session.user,
         });
      }
   } catch (error) {
      console.log(error);
   }
});
// todo: working on the create post route
// adds a post request for adding comments
router.post('/post', async (req, res) => {
   // this is for debugging purposes
   console.log('req.body', req.body);
   try {
      const post = await Post.create({
         title: req.body.title,
         body: req.body.body,
         user_id: req.body.user_id,
      });
      console.log(`${JSON.stringify(post)} = result.map() => {...}`);
      // checks if the user is logged in
      if (req.session.user_id === undefined) {
         res.redirect('/login');
      } else {
         res.redirect('/');
      }
   } catch (err) {
      console.log(err);
      res.status(500).json(err);
   }
});
// adds a post request for adding comments
router.post('/:post_id/comment', async (req, res) => {
   // this is for debugging purposes
   console.log('req.body', req.body);
   try {
      // creates the comment with the body
      const comment = await Comment.create({
         body: req.body.commentText,
         post_id: req.params.post_id,
         user_id: req.session.user_id,
      });
      // this is for debugging purposes
      console.log(
         `${JSON.stringify(comment)} = comment => await Comment.create({...})`,
      );
      // checks if the user is logged in
      if (req.session.user_id === undefined) {
         res.redirect('/login');
      } else {
         // renders the comment page
         res.redirect(`/post/${req.params.post_id}/comment`);
      }
   } catch (error) {
      console.log(error);
   }
});
// adds a get request for editing comments
router.get('/post/edit/:id', async (req, res) => {
   try {
      // gets the selected post
      const result = await Post.findOne({
         where: {
            post_id: req.params.id,
         },
         include: [
            { model: User },
            {
               model: Comment,
               include: {
                  model: User,
               },
            },
         ],
      });
      // serializes the data so the template can read it
      const postsFlat = result.get({ plain: true });
      // this is for debugging purposes
      console.log(`${JSON.stringify(postsFlat)} = result.get({...})`);
      // checks if the user is logged in
      if (req.session.user === undefined) {
         res.redirect('/login');
      } else {
         // argument is handlebars file
         res.render('editPost', {
            post: postsFlat,
            user: req.session.user,
         });
      }
   } catch (error) {
      console.log(error);
   }
});
// todo: working on the create post route
// adds a post request for editing posts
router.post('/edit/:id', async (req, res) => {
   try {
      // updates the posts with body and title
      const post = await Post.update({
         where: {
            post_id: req.params.id,
         },
         // todo: check this variable
         body: req.body.body,
         title: req.body.title,
      });
      // this is for debugging purposes
      console.log(`${JSON.stringify(post)} = post => await Post.update({...})`);
      // checks if the user is logged in
      if (req.session.user === undefined) {
         res.redirect('/login');
      } else {
         // renders the dashboard
         res.redirect('/dashboard');
      }
   } catch (error) {
      console.log(error);
   }
});
// adds a post request for deleting posts
router.post('/delete/:id', async (req, res) => {
   try {
      // deletes the posts with post_id
      const post = await Post.destroy({
         where: {
            post_id: req.params.id,
         },
         force: true,
         cascade: true,
      });
      // this is for debugging purposes
      console.log(
         `${JSON.stringify(post)} = post => await Post.destroy({...})`,
      );
      // checks if the user is logged in
      if (req.session.user === undefined) {
         res.redirect('/login');
      } else {
         // renders the dashboard
         res.redirect('/dashboard');
      }
   } catch (error) {
      console.log(error);
   }
});
// adds a get request for the register
router.get('/register', (req, res) => {
   // renders the register handlebars
   res.render('register');
});
// adds a get request for the login
router.get('/login', (req, res) => {
   // renders the login handlebars
   res.render('login');
});

module.exports = router;
