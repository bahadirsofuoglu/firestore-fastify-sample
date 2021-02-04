const firebase = require('../db')
const db = firebase.firestore()
const bcrypt = require('bcrypt')
const saltRounds = 10

exports.signUp = async (req, res) => {
  const hashPassword = await bcrypt.hash(req.body.password, saltRounds)
  const userDetail = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hashPassword
  }
  await firebase
    .auth()
    .createUserWithEmailAndPassword(userDetail.email, userDetail.password)
  await db
    .collection('user')
    .doc(firebase.auth().currentUser.uid)
    .set(userDetail)
  res.send(userDetail)
  /*   try {
    const userData = { email: req.body.email, password: hash }
    admin
      .auth()
      .createUserWithEmailAndPassword(userData.email, userData.password)
    db.collection('user')
      .doc()
      .set(userData)
    res.send({ message: 'User Created' })
  } catch (e) {
    console.log(e)
    res.send({ message: 'Error creating user' })
  } */
}
