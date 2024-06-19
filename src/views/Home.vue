<template>
  <div id="home">
    <Header :email="email" />
    <section class="about">
      <AboutMe />
    </section>
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
</style>

