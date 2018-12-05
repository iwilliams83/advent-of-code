const fs = require('fs');

let sample = ["abcde", "fghij", "klmno", "pqrst", "fguij", "axcye", "wvxyz"]

function main() {
  let contents;
  fs.readFile('input.txt', 'utf8', (err, data) => {
    if(err) console.error(`File read error ${err}`)
    contents = data.split('\n')
    console.log(contents)
  })

  // const fileContents = fs.readFileSync('input.txt', 'utf8')
  // console.log(fileContents)

  // const fileContentsAsync = await fs.readFile('input.txt', 'utf8')
  // console.log(fileContentsAsync)
}

main()
