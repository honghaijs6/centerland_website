"use strict";

class Helper {

  parseUrl(url=''){

    var regex = /[?&]([^=#]+)=([^&#]*)/g,
        url,
        params = {},
        match;
    while(match = regex.exec(url)) {
        params[match[1]] = match[2]; 
    }

    return params ; 

  }
  
  invalidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  extractPathRoute(str = "") {
    str = str.replace("[slug]", "");
    str = str.replace(/\//g, "");

    return str;
  }
  subArr(string, count) {
    let str = "";

    // abc dcg sdsd
    if (string !== "") {
      const formatString = string.replace(/<\/?[^>]+(>|$)/g, "");

      const myStr = formatString.split(" ");
      for (let i = 0; i < myStr.length; i++) {
        if (count > i) {
          str += myStr[i] + " ";
        }
      }
    }

    return str + "...";
  }

  strip(html) {
    let doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }
  clearFieldNull(list) {
    Object.keys(list).map((item) => {
      if (list[item] === "null") {
        delete list[item];
      }
    });

    return list;
  }
  covertJsonFieldToString(list) {
    Object.keys(list).map((key) => {
      if (typeof list[key] === "object") {
        list[key] = JSON.stringify(list[key]);
      }
    });

    return list;
  }

  trim(str, charlist) {
    if (typeof charlist == "undefined") {
      charlist = "\\s";
    }

    var pattern = "^[" + charlist + "]*(.*?)[" + charlist + "]*$";

    return str.replace(new RegExp(pattern), "$1");
  }

  doSlug(str) {
    //str = str.trim();
    let newStr = this.khongdau(str).replace(/ /g, "-");
    newStr = newStr.substr(0, newStr.length - 1);
    return newStr;
  }
  khongdau(str = "") {
    str = str.trim();
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,
      " "
    );
    /* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */
    str = str.replace(/-+-/g, "-"); //thay thế 2- thành 1-
    str = str.replace(/^\-+|\-+$/g, "");
    //cắt bỏ ký tự - ở đầu và cuối chuỗi
    return str;
  }

  /* fuction trả về phần tử trùng nhau */
  arr_intersection(arr1, arr2) {
    return arr1.filter((x) => arr2.includes(x));
  }

  /* tra về phần tử khác nhau : của arra1 */
  arr_diff(arr1, arr2) {
    return arr1.filter((x) => !arr2.includes(x));
  }

  /* function : compare : schema fields table default must have [] */
  isPassedSchema(schema, data) {
    let ret = "";
    const filters = this.arr_diff(schema, data);

    if (filters.length > 0) {
      filters.forEach((item) => {
        ret += item + ", ";
      });
    }
    return ret;
  }
}

export default new Helper();
