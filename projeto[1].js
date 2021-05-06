const { Pool } = require("pg");

const{POLL} = requiere ("pg");
async function CriarConexao() {
    const poll = new POLL( {
        connectionString ='
postgres://saeurbdhxhczse:ecb472ba81836cd75ea96b298669a2dcd9f7a7515ace21f05677ef4559fe0635@ec2-52-7-115-250.compute-1.amazonaws.com:5432/d79ctrpncuk938',
        ssl: {
            rejectUnawthorized: false
    }
});
let con.query = await pool.connect();
 let ingredientes = await con.query(`
    creat table ingrediente(
        id_ing serial primary Key, 
        nome string,
        fornecedor string,
        valor integer,
    )`
 ); 
 await con.query("insert into Ingredientes(nome, fornecedor, valor) valores ($1), ($2), ($3)",
  ["estrato de tomate", "azeite", "salsinha"],
  ["atacadão", "legumes variaveis",  "atacado tempero"], ["8,00", "16,00", "4,00"]);

 await con.query("update Ingredientes set nome = $1 where id = $2", ["salsinha", 3]);
 
 await con.query("delete from Ingredientes where upper(nome) like 'salsinha' ");
 let res = await con.query("select * from Ingredientes");
 let tuplas = res.rows;
 for (let tupla of tuplas) {
     console.log(tupla);
 }
     console.log(Ingredientes);
 con.release();
}
 CriarConexao();