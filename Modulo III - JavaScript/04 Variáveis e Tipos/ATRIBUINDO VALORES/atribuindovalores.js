/*atribuições de valores

Original Variable as String = some awesome var
Camel Case = someAwesomeVar
Snake Case = some_awesome_var
Kebab Case = some-awesome-var
Pascal Case = SomeAwesomeVar
Upper Case Snake Case = SOME_AWESOME_VAR
*/

//sempre que possível declarar var em camelCase
//pode reatribuir, redeclarar e faz hoisting
//escorpo = local e bloco
var a = '50'
var b = '11'

if (a === '50') {
  var a = '170'
  let b = '5'

  console.log(a, b)
}

console.log(a, b)

//sempre que possível declarar let em camelCase
//pode reatribuir, não pode redeclarar e não faz hoisting
//escorpo = bloco
let petrusBorges = 'João'

if (petrusBorges === 'João') {
  petrusBorges = 'lucas'
}

console.log(petrusBorges)

//sempre que possível declarar constantes em SNAKE_UPPER_CASE
//não pode reatribuir, não pode redeclarar e não faz hoisting
//escorpo = bloco
const SNAKE_UPPER = 'Petrus'

console.log(SNAKE_UPPER)
