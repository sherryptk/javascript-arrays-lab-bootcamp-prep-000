const app = "I don't do much."

//var kittens = ["Milo", "Otis", "Garfield"]

// function destructivelyRemoveFirstKitten(kittens){
//   kittens.shift()
//   return kittens
// }

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}


//pop() - removes from end, push() - add to end, shift() - remove from start, and unshift() - add to start
