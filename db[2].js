let Sequelize = require("sequelize");

let db = new Sequelize(
    "postgres://saeurbdhxhczse:ecb472ba81836cd75ea96b298669a2dcd9f7a7515ace21f05677ef4559fe0635@ec2-52-7-115-250.compute-1.amazonaws.com:5432/d79ctrpncuk938
const mySecret = process.env['d79ctrpncuk938']
"
   {
        dialect: "postgres",
        dialectOpitions: {
            ssl: {
                rejectUnawthorized: false, // very importat
            }
        }
    });

    module.

exports = db;