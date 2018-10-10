const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.sendFile('./views/home.html',{root:__dirname})
})
router.get('/',(req,res)=>{
    res.sendFile('./views/movie.html',{root:__dirname})
})
router.get('/',(req,res)=>{
    res.sendFile('./views/about.html',{root:__dirname})
})
// 最后，一定要把路由对象导出，供外界使用
module.exports = router