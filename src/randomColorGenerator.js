// Nothing in this file needs to be altered (but it is your solution so feel free to!)
export function getRandomColor() {
  // this function generates a random hex color from the letters below
  return '#' + [0, 1, 2].map(i => "123456789AB"[Math.floor(Math.random() * 11)]).join('')
}
