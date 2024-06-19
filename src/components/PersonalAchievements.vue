<template>
    <div class="personal-achievements">
      <h2 class="achievements-title">Minhas Conquistas e Realizações</h2>
      <p class="achievements-text">
        1° lugar no concursos de redação iluminando os ideais PEA-UNESCO 2023
      </p>
      <p class="achievements-text">
        Poema publicado na coletânea de poemas sobre a morte da editora Persona 
      </p>
      <p class="achievements-text">
        Vencedora da categoria Os Cinco melhores no IV concurso de poesia José Aparecido Lousada
      </p>
      <p class="achievements-text">
        Publicação na Edição Anual “Afetos” do Folha do Pilotis
      </p>
      <p class="achievements-text">
        Cofundadora do podcast escolar “AgoraPod” 2023
      </p>
      <p class="achievements-text">
        Apresentação no programa “Jovem empreendedor” 2021 
      </p>
      <p class="achievements-text">
        Responsável pela produção textual do jornal escolar 2018 – 2019
      </p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'PersonalAchievements',
  });
  </script>
  
  <style scoped>
  .personal-achievements {
    padding: 5rem;
    width: 100%;
    border-radius: 0.25rem;
    background-color: var(--heliotrope);
    margin-top: 4rem;
    margin-right: 7rem;
    margin-left: -12rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  
  .achievements-title {
    font-family: var(--font-primary);
    font-size: 4rem;
    font-weight: bold;
    color: var(--yellow); /* Cor personalizada */
    margin-bottom: 1rem; /* Espaçamento inferior */
  }
  
  .achievements-text {
    font-family: var(--font-secondary);
    font-size: 1.2rem;
    line-height: 1.6;
    color: var(--white-smoke); /* Cor do texto */
    margin-bottom: 1.5rem; /* Espaçamento inferior entre os parágrafos */
    text-align: justify;
  }
  </style>
  