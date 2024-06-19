<template>
  <div class="about-me">
    <h2 class="about-title">E quem sou eu ?</h2>
    <p class="about-text">
      Escritora oriunda do pulsante Rio de Janeiro, desenha sua trajetória como uma trama intricada entre os trilhos do metrô e as páginas da literatura. Nascida sob o sol carioca, ela traz consigo a paixão pelo ritmo frenético urbano e pela magia das letras. Ao descobrir a protagonista de sua própria narrativa, Yasmin transita habilmente entre a melhoria citadina e a serenidade literária, unindo o movimento efervescente do metrô ao encanto contido nas linhas de grandes obras.
    </p>
    <p class="about-text">
      A tulipa, sua flor predileta, simboliza a delicadeza que permeia suas palavras. Como especialidade que se abre com graciosidade, suas expressões artísticas revelam a profundidade de sua visão única do mundo. Cada palavra é cuidadosamente escolhida, como um ornamento meticuloso selecionado como flores mais exuberantes para compor um buquê encantador.
    </p>
    <p class="about-text">
      Yasmin destaca-se como uma voz crítica no cenário literário contemporâneo, sua escrita robusta e delicada ecoa uma sinfonia de emoções. Mergulhando nas complexidades da vida urbana, ela traduz com maestria essas nuances em prosa cativante. A cidade é sua musa, os livros, seus guias, e cada linha escrita é um convite para o leitor explorar os matizes da existência.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutMe',
});
</script>

<style scoped>
.about-me {
  padding: 4rem;
  width: 100%;
  box-sizing: border-box;
  z-index: 5;
  background-color: var(--yellow);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.about-title {
  font-family: var(--font-primary);
  font-size: 4rem;
  font-weight: bold;
  color: var(--heliotrope); /* Cor personalizada */
  margin-bottom: 1rem; /* Espaçamento inferior */
}

.about-text {
  font-family: var(--font-secondary);
  font-size: 1.2rem;
  line-height: 1.6;
  color: #000; /* Cor do texto */
  margin-bottom: 1.5rem; /* Espaçamento inferior entre os parágrafos */
  text-align: justify;
}
</style>
