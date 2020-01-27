// exports.area = (a) => (a*a);
// exports.perimeter = (a) => (4*a);

//Traditional method to write above functions

const area = (a) => (a*a);
const perimeter = (a) => (4*a);

module.exports.area = area;  //the second area written the same as where we use this name as index file
module.exports.perimeter = perimeter;
