const app = "I don't do much."

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten(kittens){
  kittens.shift()
  return kittens
}
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}



//pop() - removes from end, push() - add to end, shift() - remove from start, and unshift() - add to start
