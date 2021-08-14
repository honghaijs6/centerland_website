import {mysql2} from 'mysql2';

import config from  './default.json'
import Sequelize from 'sequelize';



const connectionString = config.mysql;
const sequelize =  new Sequelize(connectionString, {
    dialect: 'mysql',
    logging: false,
    define: {
      underscored: false,
      freezeTableName: false,
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci'
      },
      timestamps: false,
      freezeTableName: true
    },
    timezone: 'Asia/Ho_Chi_Minh',
    dialectOptions: {
			timezone: "local",
		},
   
    dialectModule: mysql2
});

export default sequelize ; 


