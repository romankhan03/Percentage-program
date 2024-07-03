var totalMarks = 400

var physics = +prompt('enter your physics number')
var english = +prompt('enter your english number')
var urdu = +prompt('enter your urdu number')
var chem = +prompt('enter your chem number')

var obtainedMarks = physics + english + urdu + chem
var percentage = obtainedMarks / totalMarks * 100
console.log( "you got " + percentage + " % ")
