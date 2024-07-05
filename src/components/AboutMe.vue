<template>
  <div class="about-me-container">
    <div class="image-container">
      <img src="../assets/Yasmin2.png" alt="Yasmin" class="profile-image" />
    </div>
    <div class="about-me">
      <h2 class="about-title">E quem sou eu ?</h2>
      <p class="about-text">
        Sou Yasmin, uma jovem carioca de alma inquieta cursando Comunicação Social — Jornalismo na UFRRJ. Destaco-me como uma das promessas mais brilhantes da minha geração, inspirada pelas paisagens urbanas do Rio de Janeiro e pelas narrativas literárias que me envolvem. Aos 18 anos, conquistei o 1º lugar no concurso de redação "Iluminando os Ideais PEA-UNESCO 2023" e publiquei poemas e contos. Além disso, sou uma líder destemida, co-fundadora do podcast escolar "AgoraPod", e estou engajada em projetos voluntários, demonstrando um compromisso admirável com o impacto positivo em minha comunidade.
      </p>
      <p class="about-text">
        A tulipa, minha flor predileta, simboliza a delicadeza que permeia minhas palavras. Assim como uma tulipa se abre com graciosidade, minhas expressões artísticas revelam a profundidade de minha visão do mundo. Cada palavra é cuidadosamente escolhida, como um ornamento meticuloso, selecionado como as flores mais exuberantes para compor um buquê encantador.
      </p>
      <p class="about-text">
        Destaco-me como uma voz crítica no cenário literário contemporâneo. Minha escrita, robusta e delicada, ecoa uma sinfonia de emoções. Mergulhando nas complexidades da vida urbana, traduzo com maestria essas nuances em prosa cativante. A cidade é minha musa, os livros, seus guias, e cada linha escrita é um convite para ti, leitor, explorar os matizes da existência.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutMe',
});
</script>

<style scoped>
.about-me-container {
  display: flex;
  align-items: flex-start;
  padding: 4rem;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--yellow);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.image-container {
  flex: 1;
  margin-right: 2rem;
  position: relative;
  min-width: 200px; /* largura mínima para a imagem */
}

.profile-image {
  width: 80%;
  height: auto;
  box-shadow:  #000 25px 25px;
  transition: transform 0.3s ease; /* Transição suave para o efeito de movimento */
}

.image-container:hover .profile-image {
  transform: scale(1.05) rotate(3deg); /* Efeito de movimento ao passar o mouse */
}

.about-me {
  flex: 2;
}

.about-title {
  font-family: var(--font-primary);
  font-size: 4rem;
  font-weight: bold;
  color: var(--heliotrope);
  margin-bottom: 1rem;
}

.about-text {
  font-family: var(--font-secondary);
  font-size: 1.2rem;
  line-height: 1.6;
  color: #000;
  margin-bottom: 1.5rem;
  color: var(--elegant-black); /* Cor do texto */
  margin-bottom: 1.5rem; /* Espaçamento inferior entre os parágrafos */
  text-align: justify;
}

@media (max-width: 1024px) {
  .about-me-container {
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }

  .image-container {
    margin-right: 0;
    margin-bottom: 2rem;
  }

  .about-title {
    font-size: 3rem;
  }

  .about-text {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .about-me-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 100%;

  }
  .image-container {
    margin-right: 0;
    margin-bottom: 2rem;
  }

  .about-title {
    font-size: 2rem;
    width: 110%;
  }

  .about-text {
    font-size: 1rem;
  }
}
</style>
