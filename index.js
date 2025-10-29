const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

// connnect to DB


// AUTH ROUTES

// login route

// logout route

// USER ROUTES

// PROJECT ROUTES

// GOAL ROUTES

// TASK ROUTES

// LABELS ROUTES

// CATEGORIES ROUTES


app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});