import config from "../../../config/default.json";

import Sequelize, { QueryTypes } from "sequelize";

import sequelize from "../../../config/sequelize"; // THIS IS CONNECTION

const TABLE = "posts";
const paginate = config.paginate;

const moPost = sequelize.define(TABLE, {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  creator_id: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  company_id: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  parent_id: {
    type: Sequelize.INTEGER,
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
    defaultValue: "[]",
  },
  video:{
    type: Sequelize.STRING,
    defaultValue:null
  },
  slug: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  summary: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  published: {
    type: Sequelize.TINYINT,
    defaultValue: 1,
  },
  date_created: Sequelize.DATE,
  date_modified: Sequelize.DATE,

  content: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  count: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  json: {
    type: Sequelize.STRING,
    defaultValue: null,
    allowNull: true,
  },
});

Object.assign(moPost, {
  _name: TABLE,

  _maxPage: paginate.max,
  _page: 0,
  _key: "",

  sort_by: "date_created",
  sort_type: "DESC",

  listAll(filter, query) {
    return new Promise((resolve, reject) => {
      this._maxPage = query.max || this._maxPage;
      this._page = query.p || 0;
      this._page = this._page * this._maxPage;

      this._key = query.key || "";
      const withKey = ` LIKE '%${this._key}%' `;

      this.sort_by = query.sort_by !== undefined ? query.sort_by : this.sort_by;
      this.sort_type =
        query.sort_type !== undefined ? query.sort_type : this.sort_type;

      const selParentId =
        query.parent_id !== undefined
          ? ` AND ${this._name}.parent_id='${query.parent_id}' `
          : "";
      const selCompanyId =
        query.company_id !== undefined
          ? ` AND ${this._name}.company_id='${query.company_id}'`
          : "";

      const limit =
        this._maxPage !== "all"
          ? ` LIMIT ${this._page}, ${this._maxPage} `
          : "";

      let sql = ` SELECT ${this._name}.id, ${this._name}.title,${this._name}.meta_title, ${this._name}.images, ${this._name}.video, ${this._name}.slug, ${this._name}.summary, ${this._name}.date_created, ${this._name}.count,
                    users.name as creator,
                    portal_categories.title as CAT_NAME
                    
      `;

      const arr_type_condition = {
        count: `
              FROM ${this._name}
              LEFT JOIN users on users.id = ${this._name}.creator_id
              LEFT JOIN portal_categories on portal_categories.id = ${
                this._name
              }.parent_id
              WHERE (${this._name}.title  ${withKey} ) ${
          selCompanyId + selParentId
        }
        `,
        all: `
                FROM ${this._name}
                LEFT JOIN users on users.id = ${this._name}.creator_id
                LEFT JOIN portal_categories on portal_categories.id = ${
                  this._name
                }.parent_id
               
                WHERE (${this._name}.title  ${withKey} ) ${
          selCompanyId + selParentId
        }

                GROUP BY ${this._name}.id

                ORDER BY ${this._name}.${this.sort_by} ${this.sort_type}
                ${limit}
               `,
      };

      sql += arr_type_condition[filter];
      let countSQL = ` SELECT COUNT(*) AS cnt ${arr_type_condition["count"]} `;

      sequelize.query(sql, { type: QueryTypes.SELECT }).then((results) => {
        sequelize.query(countSQL, { type: QueryTypes.SELECT }).then((count) => {
          const data = {
            name: "success",
            count: count[0]["cnt"],
            rows: results,
          };

          resolve(data);
        });
      });
    });
  },

  // GET INFO BY SLUG
  // RETURN OBJECT
  getInfo(slug = "") {
    return new Promise((resolve) => {
      let sql = ` SELECT ${this._name}.*,
                    users.name as creator,
                    portal_categories.title as CAT_NAME
                  
                    FROM ${this._name}
                LEFT JOIN users on users.id = ${this._name}.creator_id
                LEFT JOIN portal_categories on portal_categories.id = ${
                  this._name
                }.parent_id
               
                WHERE (${this._name}.slug = '${slug}' )

                LIMIT 1
                
                
      `;

      sequelize.query(sql, { type: QueryTypes.SELECT }).then((results) => {

        
        resolve(results.length > 0 ? results[0] : {} );
      });
    });
  },
});

export default moPost;
