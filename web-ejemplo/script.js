const persona = {
  firstName: 'Alejandro',
  lastName: 'Aguilera',
  age: 18,
  isStudent: true,
  email: 'aguilera@gmail.com',
  links: ['google.com', 'facebook.com']
}

const sumar = (sumando1, sumando2) => {
  console.log(sumando1)
  console.log(sumando2)

  return sumando1 + sumando2
}

function restar (a, b) {
  return a - b
}

console.log(sumar(2,2))