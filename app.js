
const fs = require('node:fs');
const content = 'Some content!';
const file = 'lib/text.txt'
fs.writeFile(file, content, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});

fs.readFile('lib/602.pdf', 'ascii', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });


const obj = { hello: "world" };
const blob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});