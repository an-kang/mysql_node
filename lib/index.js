/* 
创建express实例
*/

const express = require('express')
const app = express()
const userModel = require('../model/userModel')
app.listen(3000)

app.get('/users', async (req, res) => {
  let data = await userModel.getUsers()
  res.send(data)
})