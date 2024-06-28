<template>
  <div id="home">
    <Header :email="email" />
    <section class="about">
      <AboutMe />
    </section>
    <PersonalAchievements />
    <section class="final-section">
      <TypingEffect />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '../components/Header.vue';
import AboutMe from '../components/AboutMe.vue';
import PersonalAchievements from '../components/PersonalAchievements.vue';
import TypingEffect from '../components/TypingEffect.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    AboutMe,
    PersonalAchievements,
    TypingEffect,
  },
  data() {
    return {
      email: 'Contato.yasminbsouza@gmail.com',
    };
  },
});
</script>

<style scoped>
#home {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.about {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.final-section {
  padding: 4rem 2rem;
  background-color: #FFADAD;
  color: #FFFFFC;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}
</style>
