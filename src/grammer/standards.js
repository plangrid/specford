module.exports = {
  header: "// Autogenerated by Specford.\n",
  fn: "function ${nfe}(${args}) {\n${body}\n}${terminator}",
  autoEx: "(function ${nfe}(${args}) {\n${body}\n}(${passed}))${terminator}"
};