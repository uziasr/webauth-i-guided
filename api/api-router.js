const router = require('express').Router();
const bcrypt = require('bcrypt');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post('/hash', (req,res)=>{
  // read a password from the body
  // has the password using bcryptjs
  // return it to the user in an object that looks like
  // {password: 'original password' , hash: 'hash password'}
  const credentials = req.body
  const hash = bcrypt.hashSync(credentials.password, 14)
  credentials.password = hash
  res.send({credentials})
})

module.exports = router;
