
const fs = require('fs');

let sample = ["abcde", "fghij", "klmno", "pqrst", "fguij", "axcye", "wvxyz"]

function main() {
  let contents;
  fs.readFile('input.txt', 'utf8', (err, data) => {
    if(err) console.error(`File read error ${err}`)
    contents = data.split('\n')
    print_stuff(contents)
  })
}

function print_stuff(data){

  let arr1
  let arr2
  let total_off = []
  for(let i = 0; i < data.length-1; i++){
    for(let j = 1; j < data.length; j++){
      arr1 = data[i].split('')
      arr2 = data[j].split('')
      for(let k = 0; k < arr1.length; k++){
        if(arr1[k] !== arr2[k]){
          total_off.push(arr1[k])
        }
      }

      if (total_off.length === 1){
        let result = arr1.filter(item => item !== total_off[0])
        console.log(result.join(''))
        return result.join('')
      }
      else {
        total_off = []
      }
    }
  }
}

main()

//OTHER OPTIONS:
// const fileContents = fs.readFileSync('input.txt', 'utf8')
// console.log(fileContents)

// const fileContentsAsync = await fs.readFile('input.txt', 'utf8')
// console.log(fileContentsAsync)
