<template>
  <div id="home">
    <Header class="header" :email="email" />
    <section class="about">
      <AboutMe />
    </section>
    <PersonalAchievements />
    <section class="final-section">
      <TypingEffect />
    </section>
    <footer class="footer">
      <p>Created by Marcus Schebek</p>
    </footer>
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

.header {
  height: 100vh;
}

.about {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.final-section {
  min-height: 50vh;
}

.footer {
  text-align: center;
  padding: 1rem;
  background-color: #fc9797; 
}

.footer p {
  color: #f5f5f5; /* Tom mais escuro para o texto */
  font-size: 1rem;
}
</style>
