let LightYear = prompt("Qual a distância em anos luz você gostaria de converter?")


let opcao = prompt("Para qual medida de distância gostaria de converter?" + "\n1 - Parsec (PC)" + "\n2 - Unidade Astronômica (UA)" + "\n3 - Quilômetro (KM)" + "\n4 - Sair")

switch(opcao){
    case "1":
        let parsec = (LightYear * 0.3066)
        alert(LightYear + " LY" + " = " + parsec + " PC")
        break
    case "2":
        let UnidadeAstronomica = LightYear * 63241.1
        alert(LightYear + " LY" + " = " + UnidadeAstronomica + " UA")
        break
    case "3":
        let quilometro = LightYear * 9.5 * Math.pow(10, 12)
        alert(LightYear + " LY" + " = " + quilometro + " KM")
        break
    case "4":
        alert("Encerrando...")
        break
    default: 
        alert("Comando inválido")
}