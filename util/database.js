const Sequelize=require('sequelize');

const sequelize=new Sequelize('node-complete','root','Ashu2477@',{
    host:'localhost',
    dialect:'mysql'
})
module.exports=sequelize;