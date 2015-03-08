"use strict";

function isFunction(obj) {
  return typeof obj === "function";
}

var isArray = Array.isArray;

exports.isArray = isArray;
exports.isFunction = isFunction;
Object.defineProperty(exports, "__esModule", {
  value: true
});