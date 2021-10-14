const handleCalcIMC = event => {
   event.preventDefault()

   const peso = document.getElementById('peso').value;
   const altura = document.getElementById('altura').value;

   const imc = calcIMC(peso, altura)
   const imcText = getTextIMC(imc)
   console.log(imc, imcText)

   document.getElementById('result').innerHTML = `Seu IMC é: ${imc.toFixed(2)} => ${imcText}`
}

const calcIMC = (peso, altura) => {
   return (peso / (altura ** 2))
}

const getTextIMC = (imc) => {
   const textIMC = ['Magreza', 'Normal', 'Sobrepeso', 'Obesidade']

   if (imc < 18.5) return textIMC[0]
   if (imc >= 18.5 && imc < 24.9) return textIMC[1]
   if (imc >= 24.9 && imc < 30) return textIMC[2]
   if (imc > 30) return textIMC[3]
}