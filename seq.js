const {Sequelize,DataTypes}=require('sequelize');

const sequelize=new Sequelize('seq','postgres','password',{
    host:'localhost',
    dialect:'postgres'
});//即時関数の前の処理では;が必要

const Text=sequelize.define('text',{
    text:{
        type:DataTypes.STRING,
        allowNull:false
    }
});
(async function(){
    await Text.sync();
})();

//これはCREATEの関数にする
async function dbcre(inp_text){
    await Text.create({text:inp_text});
}

async function dbdrop(inp_id) { 
    await Text.destroy({
        where:{
            id:inp_id
        }
    });
}

async function dbsel() { 
    const data = await Text.findAll();
    return data;
 }

module.exports={
    cre:dbcre,
    drp:dbdrop,
    sel:dbsel,
}
