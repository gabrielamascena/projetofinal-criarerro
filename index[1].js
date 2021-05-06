let db = require("./db");
let pedido = require("./model");

async function sincronizar() {
    await db.sync();
}
async function inserir(obj) {
    let res = await Cliente.create(obj)
    console.log(res);
}

let P1 = {id_pedido: "1", data: "18 05", quantidade: "2"};
let P2 = {estabelecimento: "2", data: "01 02", quantidade: "5"};
let P3 = {reserva: "3", data: "22 10", quantidade: "4"};
let P4 = {online: "4", data: "21 10", quantidade: "10"};
let P5 = {escolha: "07", data: "01 08", quantidade: "3"};
let P6 = {adicionais: "9", data: "22 10", quantidade: "4"};
let P7 = {total: "40,50", data: "12 09", quantidade: "1"};
let P8 = {endereco: "08", data: "12 09", quantidade: "1"};
let P9 = {pagamento_tranf: "40,50", data: "12 09", quantidade: "1"};

inserir(T1);
inserir(T2);
inserir(T3);
inserir(T4);
inserir(T5);
inserir(T6);
inserir(T7);
inserir(T8);
inserir(T9);
async function consultar() {
    let resultado = await Pedido.findAll();
    console.log(resultado[2]);
    console.log(resultado[0]);
    console.log(resultado[1]);
    console.log(resultado[3]);
    console.log(resultado[4]);
    console.log(resultado[5]);
    console.log(resultado[6]);
    console.log(resultado[7]);
    console.log(resultado[8]);
}
    //sincronizar();
    consultar();