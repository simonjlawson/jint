// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Single line comment can contain SPACE (U+0020)
 *
 * @path ch07/7.2/S7.2_A3.4_T1.js
 * @description Use SPACE(\u0020)
 */

// CHECK#1
eval("//\u0020 single line \u0020 comment \u0020");

//CHECK#2
var x = 0;
eval("//\u0020 single line \u0020 comment \u0020 x = 1;");
if (x !== 0) {
  $ERROR('#1: var x = 0; eval("//\\u0020 single line \\u0020 comment \\u0020 x = 1;"); x === 0. Actual: ' + (x));
}
