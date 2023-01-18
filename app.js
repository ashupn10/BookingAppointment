const express=require('express');
const bodyParser=require('body-parser');
// const sequelize=require('sequelize');
const sequelize=require('./util/database');
const cors=require('cors');
const userRoutes=require('./routes/allUsers');
const deleteRoutes=require('./routes/delete');
const editRoutes=require('./routes/edit');

const path=require('path');

const app=express();
app.use(cors())

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs');
app.use('/delete/:UserId',deleteRoutes);
app.use('/edit/:UserId',editRoutes);
app.use('/',userRoutes);
sequelize.sync().then(() => {
   app.listen(3000);
}).catch((error) => {
   console.error('Something went Wrong', error);
});

