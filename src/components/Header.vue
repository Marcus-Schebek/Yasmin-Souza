<template>
  <header class="header-contact">
    <div class="left-section">
      <p class="intro">Olá, eu sou Yasmin, a sua nova</p>
      <div class="title-wrapper">
        <h1 class="title">{{ displayedTitle }}<span class="caret">|</span></h1>
        <button @click="copyEmail" class="copy-email-button">Copiar Email</button>
      </div>
    </div>
    <div class="right-section">
      <div class="image-container">
        <img src="../assets/Yasmin.png" alt="Yasmin" class="profile-image" />
        <div class="circle circle2"></div>
        <div class="circle circle1"></div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: {
    email: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      titles: ['REDATORA', 'ESCRITORA', 'JORNALISTA'],
      currentTitleIndex: 0,
      displayedTitle: '',
      typingSpeed: 150,
      showCaret: true,
      deletingSpeed: 50,
    };
  },
  methods: {
    copyEmail() {
      navigator.clipboard.writeText(this.email).then(

      );
    },
    typeWriterEffect() {
      let currentChar = 0;
      const type = () => {
        if (currentChar < this.titles[this.currentTitleIndex].length) {
          this.displayedTitle += this.titles[this.currentTitleIndex].charAt(currentChar);
          currentChar++;
          setTimeout(type, this.typingSpeed);
        } else {
          setTimeout(this.deleteEffect, 2000); // Tempo de espera antes de começar a deletar
        }
      };
      type();
    },
    deleteEffect() {
      let currentChar = this.titles[this.currentTitleIndex].length;
      const del = () => {
        if (currentChar > 0) {
          this.displayedTitle = this.displayedTitle.slice(0, -1);
          currentChar--;
          setTimeout(del, this.deletingSpeed);
        } else {
          this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
          setTimeout(this.typeWriterEffect, 500); 
        }
      };
      del();
    },
    blinkCaret() {
      setInterval(() => {
        this.showCaret = !this.showCaret;
      }, 500);
    },
  },
  mounted() {
    this.typeWriterEffect();
    this.blinkCaret();
  },
});
</script>

<style scoped>
.header-contact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 2em 2em 0 2em;
  position: relative;
  height: 80vh;
  max-width: 100%;
}

.left-section {
  position: initial;
  left: 22rem;
}

.title-wrapper {
  position: relative;
}

.caret {
  display: inline-block;
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.image-container {
  position: relative;
  width: 100%;
  height: 100vh;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: sideIn 1s ease-out; 
}

.circle {
  position: absolute;
  border-radius: 50%;
  z-index: 2;
  transition: transform 0.3s ease-out; 
}

.circle1 {
  width: 25rem;
  height: 25rem;
  background-color: var(--violeta);
  bottom: -10%;
  left: 40%;
}

.circle2 {
  width: 20rem;
  height: 20rem;
  background-color: var(--heliotrope);
  top: 30%;
  left: 0;
}

.circle:hover {
  transform: scale(1.2); /* Efeito de zoom ao passar o mouse */
}

.right-section {
  position: absolute;
  left: 50%;
  transform: translateY(-50%);
  opacity: 0; /* Começa com opacidade 0 */
  animation: sideIn 1s ease-out forwards; /* Animação de entrada */
}

.intro {
  font-family: var(--font-primary);
  font-size: 2rem;
  color: #000;
  margin-left: 1em;
  margin-bottom: 0;
  margin-top: 0;
}

.title {
  font-size: 10em;
  font-family: var(--font-primary);
  color: #000;
  margin-bottom: 4rem;
  margin-top: 0;
}

.copy-email-button {
  width: 290px;
  border-radius: 8px;
  border: 1px solid black;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: var(--font-primary);
  background-color: transparent;
  color: #000;
  cursor: pointer;
  transition: background-size 0.5s, background-position 0.5s;
  background-image: linear-gradient(to top, #000 50%, transparent 50%);
  background-size: 100% 200%;
  background-position: 0 0;
}

.copy-email-button:hover {
  background-position: 0 100%;
  color: #fff;
}

@keyframes sideIn {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .header-contact {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0; 
    width: 100%;
   

  }
  .right-section {
    display: none; /* Esconder a seção direita no modo responsivo */
  }
  .left-section {
    left: 0;
    padding: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative; /* Centralizar a seção esquerda */
  }

  .intro {
    font-size: 1rem;
  }

  .title {
    font-size: 3em;
    margin-bottom: 2rem;
  }
}
</style>
