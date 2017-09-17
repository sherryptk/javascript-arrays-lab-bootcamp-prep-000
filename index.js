const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var moreKittens=[...kittens, name]
  return moreKittens
}

function prependKitten(name){
  var moreKittens=[name,...kittens]
  return moreKittens
}

function removeLastKitten(name){
  var moreKittens.slice(-1)
  return moreKittens
}
// var cities = ["New York", "San Francisco"]
//
// ["Philadelphia", ...cities] // ["Philadelphia", "New York", "San Francisco"]
//
// cities // ["New York", "San Francisco"]

//pop() - removes from end,  shift() - remove from start, and unshift() - add to start, push() - add to end,
