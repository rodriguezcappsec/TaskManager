"use strict";
import loginApi from "./Authentication/log-in.js";
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $(".wrapper").hide();
  loginApi();
});
