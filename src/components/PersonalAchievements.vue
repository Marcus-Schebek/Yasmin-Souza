<template>
  <div>
    <div class="personal-achievements">
      <h2 class="achievements-title">Meu Portfólio</h2>
    </div>
    <div class="personal-texts">
      <PortfolioCard
        v-for="item in portfolioItems"
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :content="item.content"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PortfolioCard from '../components/PortfolioCard.vue';

export default defineComponent({
  name: 'PersonalAchievements',
  components: {
    PortfolioCard,
  },
  data() {
    return {
      portfolioItems: [
        {
          title: 'Poema para o jornal Folha do Pilotis',
          description: 'Como o sol gentil que aquece a manhã,O afeto próprio nos traz a esperança.É a amizade sincera que cultivamos, Com nós mesmos, nos apoiamos.',
          content: 'https://media.journoportfolio.com/users/167392/uploads/4700fa31-d184-4408-a4c3-0186b68a520b.pdf',
        },
        {
          title: '"Além dos 20 centavos" - Crônica sobre as Jornadas de Junho de 2013',
          description: 'Essa revolta, nascida nas entranhas de um descontentamento acumulado, não era uma mera explosão de insatisfação. Ela era o resultado de anos de promessas vazias e escândalos políticos que inundaram os noticiários como gols em uma partida emocionante.',
          content: 'https://onedrive.live.com/view.aspx?resid=48E9CB32670878A3%214941&authkey=!AKwjw8YRSn1TLMo',
        },
        {
          title: 'Poema pertencente ao livro "Coletânia de Poemas sobre a Morte"',
          description: 'A morte, lâmina fria, esconde-se na penumbra, Na poesia, seu rosto revela beleza na tumba.Um adeus que sangra na eternidade esquecida,Abraço gélido, serenidade na partida.',
          content: 'https://onedrive.live.com/view.aspx?resid=48E9CB32670878A3%214885&authkey=!ABPntw653__WPLw',
        },
        {
          title: 'Poesia vencedora da categoria "Os 5 Melhores" do IV Concurso de Poesias José Aparecido Lousada',
          description: 'Nas páginas douradas da história, onde o tempo repousa e a arte renova, Mestres da palavra surgem, como sóis que elevam, em cada sílaba, uma prova.Assim como o Brasil, vasto e exuberante, desdobram riqueza, Em metáforas tecidas com primor, em cada verso, uma nobreza.',
          content: 'https://onedrive.live.com/view.aspx?resid=48E9CB32670878A3%214763&authkey=!AGSAxpa22N1vbVo',
        },
        {
          title: '"Uníssona Sutura" - Redação ganhadora do primeiro lugar do prêmio Iluminando os ideais  PEA-UNESCO',
          description: 'A rica tapeçaria da história humana, tecida ao longo das eras, é uma dança intrigante entre convivência, embates fervorosos e, em última análise, busca pela paz. Da Antiguidade à Era contemporânea, o sussurro do diálogo revelou-se como a maestria que harmoniza esses fios, tecendo relações que transcendem barreiras e forjam o ritmo da concórdia.',
          content: 'https://onedrive.live.com/view.aspx?resid=48E9CB32670878A3%214916&authkey=!APknlzhTycNLSXs',
        },
        {
          title: 'Redação para o prêmio iluminando os ideais da PEA-UNESCO - edição 2022 com o título "Alento Descurado"',
          description: 'O oceano, que divide continentes, é o mesmo que representa distintas crenças. Em sua unidade, minimiza as diferenças que dividem povos de distintos credos. É o mesmo que, no cristianismo, lava do pecado nas águas no batismo.',
          content: 'https://onedrive.live.com/view.aspx?resid=48E9CB32670878A3%214517&authkey=!AAzZOlqL2ZWIPF4',
        },
      ],
    };
  },
});
</script>

<style scoped>
.personal-achievements {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--pink);
}
.achievements-title {
  font-family: var(--font-primary);
  font-size: 4rem;
  font-weight: bold;
  color: var(--yellow); /* Cor personalizada */
  margin-bottom: 1rem; /* Espaçamento inferior */
}

.personal-texts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 2rem;
  background-color: var(--pink);
}

@media (max-width: 768px) {
  .personal-texts {
    grid-template-columns: 1fr;
  }
}
</style>
