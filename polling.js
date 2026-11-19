async function buscarLocalizacaoDaAmiga() {
  try {
    const resposta = await fetch('http://localhost:3000/localizacao');
    const dados = await resposta.json();
    
    console.log("Posição dela atualizada:", dados.latitude, dados.longitude);
    
    // Aqui é onde você jogaria os dados no mapa!
    atualizarNoMapa(dados.latitude, dados.longitude);
    
  } catch (erro) {
    console.error("Erro ao buscar localização:", erro);
  }
}

// Fica chamando a função a cada 3 segundos
setInterval(buscarLocalizacaoDaAmiga, 3000);