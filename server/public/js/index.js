"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * @Author: lenovo
 * @Date:   2018-10-14 10:54:54
 * @Last Modified by:   lenovo
 * @Last Modified time: 2018-10-19 11:37:26
 */
var Animal2 = function Animal2() {
  _classCallCheck(this, Animal2);

  this.name = "博美";
};

var dog = new Animal2();
document.body.innerHTML = dog.name;