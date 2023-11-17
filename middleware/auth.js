const isLogin = async(req,res,next) =>{
    try {
        
        if(req.session.user_id){
            
        }else{
            res.redirect("/login");
        }
        next();

    } catch (error) {
        console.log(error.message);
    }
}

const isLogout = async(req,res,next) =>{
    try {
        if(req.session.user_id){
            console.log(req.session.user_id);
                        // res.user_id;
            res.redirect("/home");
            console.log('after')
            // res.user_id;
        }else{
        console.log('else')
        }
        next();
    } catch (error) {
        console.log('pknolu')
        console.log(error.message);
    }
}


module.exports = {
    isLogin,
    isLogout
};