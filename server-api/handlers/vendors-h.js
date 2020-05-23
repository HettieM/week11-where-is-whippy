const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const bcrypt = require("bcrypt")

dotenv.config()
const SECRET = process.env.JWT_SECRET

const vendors = require("../model/vendors-m")

function allVendors(req, res, next) {
  vendors
    .getAllVendors()
    .then((allVendors) => {
      res.send(allVendors)
    })
    .catch(next)
}

function getSpecificVendor(req, res, next) {
  const vendorId = req.params.id
  vendors
    .getSpecificVendor(vendorId)
    .then((vendor) => res.send(vendor))
    .catch(next)
}

function createVendor(req, res, next) {
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password
  const mobile = req.body.mobile
  const companyName = req.body.company_name
  const alcohol = req.body.alcohol
  const vegan = req.body.vegan_option

  bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(password, salt))
    .then((hash) =>
      vendors.createVendor({
        name,
        email,
        password: hash,
        mobile,
        companyName,
        alcohol,
        vegan,
      })
    )
    .then((newVendor) => {
      const token = jwt.sign({ user: newVendor.name }, SECRET, {
        expiresIn: "60m",
      })
      res.status(201).send({ access_token: token })
    })
    .catch(next)
}

function loginVendor(req, res, next) {
  const email = req.body.email
  const password = req.body.name

  vendors
    .getVendorLogin(email)
    .then((vendor) => {
      bcrypt.compare(password, vendor.password).then((match) => {
        if (!match) {
          const error = new Error("Unauthorized")
          error.status = 401
          next(error)
        } else {
          const token = jwt.sign({ user: vendor.id }, SECRET, {
            expiresIn: "1h",
          })
          res.status(200).send({ access_token: token })
        }
      })
    })
    .catch(next)
}

module.exports = { allVendors, getSpecificVendor, createVendor, loginVendor }
