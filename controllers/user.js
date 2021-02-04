const firebase = require('../db')
const db = firebase.firestore()
const bcrypt = require('bcrypt')
const saltRounds = 10

exports.signUp = async (req, res) => {
  const { firstname, lastname, email } = req.body
  const hashPassword = await bcrypt.hash(req.body.password, saltRounds)
  const userDetail = {
    firstname,
    lastname,
    email,
    password: hashPassword
  }
  await firebase.auth().createUserWithEmailAndPassword(email, hashPassword)
  await db
    .collection('user')
    .doc(firebase.auth().currentUser.uid)
    .set(userDetail)
  res.send(userDetail)
}
