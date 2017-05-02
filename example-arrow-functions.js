// var names = ['Sazjan', 'Sunil', 'Prakash'];
//
// names.forEach(function (name){
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Sazjan'));
//
// var person = {
//   name: 'Sazjan',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

//Challenge area
function add(a, b){
  return a+b;
}
//addStatement
var addStatement = (a, b) => {
  return 'Add Statement ' + (a+b);
}
console.log(addStatement(4,6));

//addExpression
var addExpression = (a, b) => 'Add Expression ' + (a+b);
console.log(addExpression(5,-2));

// console.log(add(1,5));
// console.log(add(7,0));
