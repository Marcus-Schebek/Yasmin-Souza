<template>
  <div id="home">
    <Header :email="email" />
    <AboutMe />
    <PersonalAchievements />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '../components/Header.vue';
import AboutMe from '../components/AboutMe.vue';
import PersonalAchievements from '../components/PersonalAchievements.vue';


export default defineComponent({
  name: 'Home',
  components: {
    Header,
    AboutMe,
    PersonalAchievements,
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
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
