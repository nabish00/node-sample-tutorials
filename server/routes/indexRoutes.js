var express= require('express');
var app=express();
import adminRoutes from './adminRoutes';
//import customerRoutes from './customerRoutes';
//import productRoutes from './productRoutes';



app.use('/admin', adminRoutes);
export default app;






