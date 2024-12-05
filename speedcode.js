function arrayMadness(a, b) {
  // Ready, get set, GO!!!
  return a.reduce((acc, el) => acc + el**2 ,0) > b.reduce((acc, el) => acc+el**3 ,0)
}

console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]))
