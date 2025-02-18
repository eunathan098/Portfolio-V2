function acessar(){
    window.location.href="profile.html";
}
  
function abrirMenuMobile() {
    let containerMenu = document.getElementById("menu-lateral-mobile");
  
    containerMenu.style.display = "flex";
  }
  
  function fecharMenuMobile() {
    let containerMenu = document.getElementById("menu-lateral-mobile");
  
    containerMenu.style.display = "none";
  }
  
  window.sr = ScrollReveal({ reset: true });
  
  sr.reveal('.container-perfil', { duration: 1000});
  
  window.sr = ScrollReveal({ reset: true });
  
  sr.reveal('.sessao_content-2', { duration: 2500});

  // Efeito para Títulos da página 

  sr.reveal('.titulos', {
    rotate: {
      x: 0, y: 80, z: 0
    }, duration: 2000
  })
  // Efeito HEADER
  
  // Obtém o elemento do cabeçalho
  const header = document.getElementById("header");
  
  // Função para verificar o scroll
  function checkScroll() {
    if (window.scrollY > 0) {
      // Verifica a posição do scroll
      header.classList.add("bg-white"); // Adiciona a classe para o fundo branco
    } else {
      header.classList.remove("bg-white"); // Remove a classe quando volta ao topo
    }
  }
  
  // Adiciona o ouvinte de evento para o scroll
  window.addEventListener("scroll", checkScroll);