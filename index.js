const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

// function destructivelyRemoveFirstKitten(kittens){
//   kittens.shift()
//   return kittens
// }

function destructivelyAppendKitten(kittens, name){
  kittens.push(name)
  return kittens
}



//pop() - removes from end, push() - add to end, shift() - remove from start, and unshift() - add to start
