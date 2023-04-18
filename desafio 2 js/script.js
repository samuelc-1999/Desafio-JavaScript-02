let students = [
  {
    name: 'Ana',
    proofOne: 6.5,
    proofTwo: 8,
  },


  {
    name: 'Julia',
    proofOne: 7,
    proofTwo: 5,
  },

  {
    name: 'João',
    proofOne: 9,
    proofTwo: 7,
  },

  {
    name: 'Matheus',
    proofOne: 6,
    proofTwo: 5,
  },

]



function mediaCalc(students) {
  let media = (students.proofOne + students.proofTwo) / 2;
  return {
  name: students.name,
  media: media,
  };
  }
  
  let results = [];
  
  for (let student of students) {
  results.push(mediaCalc(student));
  }
  

  for (let result of results) {

  if(result.media >= 7) {
    alert(`A média do(a) ${result.name} é de ${result.media}: \n Parabéns, ${result.name}! Você foi aprovado(a) no concurso!`)
     } else {
     alert(`A média do(a) ${result.name} é de ${result.media}: \n Não foi dessa vez, ${result.name}! Tente novamente!`)
    }
}