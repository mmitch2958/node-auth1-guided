const router = require("express").Router
const Users = require("../users/users-model")

router.post("/register", (req, res) => {
    const credentials = req.body;

    //validate the credentials, if they something 

    Users.add(credentials)
      .then(users => {
          res.status(201).json({ data: users });
      })
        .catch(err => res.json({ message: err.message }));
  });
  
  module.exports = router;
  