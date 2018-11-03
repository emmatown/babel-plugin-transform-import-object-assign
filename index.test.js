let { transform } = require("@babel/core");
let plugin = require("./");

test("it works", () => {
  let { code } = transform(
    `
  
  let x = Object.assign({}, wow, something)
  let y = Object.assign({}, {something:true})

  
  `,
    {
      plugins: [plugin]
    }
  );
  expect(code).toMatchInlineSnapshot(`
"import _objectAssign from \\"object-assign\\";

let x = _objectAssign({}, wow, something);

let y = _objectAssign({}, {
  something: true
});"
`);
});
