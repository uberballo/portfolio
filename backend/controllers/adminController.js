require('dotenv').config()

const logInAdmin = (req,res) =>{
    const body = req.body

    if (body.username === process.env.ADMIN_USERNAME &&
        body.password === process.env.ADMIN_PASSWORD){
            return res.status(200).json({
                loggedIn:true
            })
        }else{
            return res.status(401).json({
                loggedIn:false
            })
        }
}

module.exports= {
    logInAdmin
}