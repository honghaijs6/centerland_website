import config from "../../../config/default.json";

import Sequelize, { QueryTypes } from "sequelize";


import sequelize from "../../../config/sequelize";

const TABLE = "portal_categories";
const paginate = config.paginate;

const moCate = sequelize.define(TABLE, {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },

  parent_id: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },

  company_id: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },

  creator_id: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },

  route: {
    type: Sequelize.STRING,
    defaultValue: null,
  },

  sort: {
    type: Sequelize.TINYINT,
    defaultValue: 0,
  },
  title: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  meta_title: {
    type: Sequelize.STRING,
    defaultValue: null,
  },

  images: {
    type: Sequelize.STRING,
    defaultValue: null,
  },

  slug: {
    type: Sequelize.STRING,
    defaultValue: null,
  },

  content: {
    type: Sequelize.STRING,
    defaultValue: null,
  },

  date_created: Sequelize.DATE,
  date_modified: Sequelize.DATE,
  json: {
    type: Sequelize.STRING,
    defaultValue: null,
    allowNull: true,
  },
});

Object.assign(moCate, {
  _name: TABLE,

  _maxPage: paginate.max,
  _page: 0,
  _key: "",

  sort_by: "date_created",
  sort_type: "DESC",

  listAll(filter='all', query) {
    return new Promise((resolve, reject) => {
      
      //  const { query } = params;

      this._maxPage = query.max || this._maxPage;
      this._page = query.p || 0;
      this._page = this._page * this._maxPage;

      this._key = query.key || "";
      const withKey = ` LIKE '%${this._key}%' `;

      const isDel = query.is_deleted || 0;

      this.sort_by = query.sort_by !== undefined ? query.sort_by : this.sort_by;
      this.sort_type =
        query.sort_type !== undefined ? query.sort_type : this.sort_type;

      const selParentId =
        query.parent_id !== undefined
          ? ` AND ${this._name}.parent_id='${query.parent_id}' `
          : "";

      const limit =
        this._maxPage !== "all"
          ? ` LIMIT ${this._page}, ${this._maxPage} `
          : "";

      let sql = ` SELECT ${this._name}.*,
                    users.name as creator
                   


      `;

      const arr_type_condition = {
        count: `
              FROM ${this._name}
              LEFT JOIN users on users.id = ${this._name}.creator_id
              WHERE (${this._name}.title  ${withKey} ) ${selParentId}
        `,
        all: `
                FROM ${this._name}
                LEFT JOIN users on users.id = ${this._name}.creator_id
              
                WHERE (${this._name}.title  ${withKey} ) ${selParentId}

                GROUP BY ${this._name}.id

                ORDER BY ${this._name}.${this.sort_by} ${this.sort_type}
                ${limit}
               `,
      };

      sql += arr_type_condition[filter];
      const countSQL = ` SELECT COUNT(*) AS cnt ${arr_type_condition["count"]} `;

      
      /*sequelize.query(sql, { type: QueryTypes.SELECT }).then((data)=>{
        resolve(data);
      })*/

      sequelize.query(sql,{ type: QueryTypes.SELECT }).then((results)=>{
          sequelize.query(countSQL,{type: QueryTypes.SELECT}).then(count=>{
            const data = {
                name: "success",
                count: count[0]["cnt"],
                rows: results,
              };
    
              resolve(data);
          })
      })

      
      
    });
    
  },
});

export default moCate;
