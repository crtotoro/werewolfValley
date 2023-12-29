export const toTitleCase = (str) => 
  str.split(' ').filter(substr => substr).map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');

export const toKey = (str) => {
  // let scrubber = new RegExp('[^a-z,A-Z,0-9,_]+','g')
  // let spaces = new RegExp('\s+','g')
  return str.toLowerCase().replace(/\s+/, '_').replace(/[^a-zA-Z0-9_]+/g, '');
}

// return str.toLowerCase().split(' ').filter(substr => substr).map(substr => substr.replace(scrubber, '')).join('_');
// return str.toLowerCase().split(' ').filter(substr => substr).join('_').replace(scrubber, '');


let name = 'AmBidExTRous  PANDA435!!!!!!!'
console.log('Name:', name)
console.log('Key:', toKey(name))
console.log('Title:', toTitleCase(name))
