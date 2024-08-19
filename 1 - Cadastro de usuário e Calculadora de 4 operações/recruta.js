const primeiroNome = prompt ("Informe o primeiro nome do recruta:")
const sobrenome = prompt ("Informe o sobrenome do recruta:")
const campodeestudo = prompt ("Qual o campo de estudo do recruta ?")
const anodenascimento = prompt ("Qual o ano de nascimento do recruta?")

alert(
    "Recruta cadastrado com Sucesso!\n" +
    "\ Nome completo: " + primeiroNome + " " + sobrenome + 
    "\nCampo de estudo: "  + campodeestudo +
    "\nIdade: " + (2023 - anodenascimento)
)