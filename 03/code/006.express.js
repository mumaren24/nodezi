const express=require('express')
const app =express()
app.set('view engine', 'ejs')
// 2. 设置模板页面的默认存放路径 app.set('views', '模板页面的具体存放路径')
app.set('views', './ejs_pages')
app.get('/',(req,res)=>{
    res.render('da.ejs', {  hobby: ['首页', '汽车', '婚庆','交友','母婴'] })
})
app.listen(3000,()=>{
    console.log('server running at http://127.0.0.1:3000')
})