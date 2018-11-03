"use strict";

let { addDefault } = require("@babel/helper-module-imports");

module.exports = babel => {
  let t = babel.types;
  return {
    visitor: {
      MemberExpression(path, state) {
        if (path.matchesPattern("Object.assign")) {
          if (!state.identifierName) {
            state.identifierName = addDefault(path, "object-assign", {
              nameHint: "objectAssign"
            }).name;
          }
          path.replaceWith(t.identifier(state.identifierName));
        }
      }
    }
  };
};
