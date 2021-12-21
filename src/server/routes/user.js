const express = require("express")
const router = express.Router()

router.post("/login", (request, response) => {
  console.log('server-req-', request.body)
  return response.send({
    status: 200
  })
})

module.exports = router