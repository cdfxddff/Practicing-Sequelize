const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('shoppingapp','postgres','password',{
    host:'localhost',
    dialect:'postgres'
});//即時関数の前の処理では;が必要

(async function(){
    try{
        await sequelize.authenticate();//接続できているかどうかの確認
        console.log('Connection has been established successfully.');
    }catch(error){
        console.error('Unable to connect to the database:', error);
    }
})();
