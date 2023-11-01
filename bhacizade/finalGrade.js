bhacizade/finalGrade.js
const finalGrade =(grade1, grade2, grade3) => {
  let average = ( grade1 + grade2 +grade3) / 3 ;
  console.log (average);
switch (true){
  case grade1 < 0:
  case grade2 < 0:
  case grade3 < 0:
  case grade1 > 100:
  case grade2 > 100:
  case grade3 > 100:
  return 'You have entered an invalid grade.'
  default: 
  switch (true) {
  case average <= 59:
  return 'F'
  case average <= 69:
  return 'D'
  case average <= 79:
  return 'C'
  case average <= 89:
  return 'B'
  case average <= 100:
  return 'A'
  }
}
}
console.log(finalGrade(82,90,75))
