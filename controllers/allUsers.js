const user=require('../models/user');

exports.getUsers=(req,res,next)=>{
    user.findAll().then(result=>{
        // console.log(result);
        res.render('index',{
            Users:result,
            edit:false
        })
    })
}

exports.postUser=(req,res,next)=>{
    // console.log(req.body);
    user.create({
        name:req.body.Name,
        email:req.body.Email,
        mobile:`${req.body.Mobile}`
    })
    .then(()=>{
        res.redirect('/');
    })
    .catch(err=>console.log(err));
}

exports.deleteUser=(req,res,next)=>{
    user.destroy({
        where:{
            id:req.params.UserId
        }
    })
    .then(()=>{
        res.redirect('/');
    })
    .catch(err=>console.log(err));
}
exports.editUser=(req,res,next)=>{
    user.findByPk(req.params.UserId)
    .then(result=>{
        res.render('index',{
            Users:[],
            edit:true,
            name:result.name,
            email:result.email,
            mobile:result.mobile
        })
    })
    .then(()=>{
        user.destroy({
            where:{
                id:req.params.UserId
            }
        })
    })
    .catch(err=>console.log(err));
}