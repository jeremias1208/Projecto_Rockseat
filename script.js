function toggleMode(){
  const htlm = document.documentElement
  //Trocar o tema
  htlm.classList.toggle("light")
  //Trocar a imagem
  const img = document.querySelector("#profile img")
  //Trocar o tema
  if (htlm.classList.contains("light")) {
    img.setAttribute("src", "./assets/jeremias.jpg")
  } else {
    img.setAttribute("src", "./assets/jeremy.jpeg")
  }
}
