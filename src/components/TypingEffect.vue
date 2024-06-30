<template>
  <div class="typing-container">
    <h1>{{ displayedTitle }}<span class="caret">|</span></h1>
    <p>- Moacyr Scliar</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TypingEffect',
  data() {
    return {
      titles: ['" Se o escritor não tiver prazer escrevendo, o leitor também não terá"'],
      currentTitleIndex: 0,
      displayedTitle: '',
      typingSpeed: 50,
      showCaret: true,
    };
  },
  methods: {
    typeWriterEffect() {
      let currentChar = 0;
      const type = () => {
        if (currentChar < this.titles[this.currentTitleIndex].length) {
          this.displayedTitle += this.titles[this.currentTitleIndex].charAt(currentChar);
          currentChar++;
          setTimeout(type, this.typingSpeed);
        }
      };
      type();
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
.typing-container {
  font-family: var(--font-primary);
  font-size: 2rem;
  text-align: center;
  margin: 2rem;
}

h1 {
  color: #ffffFC;
  margin: 1em;
}

p {
  font-size: 1.5rem;
  color: #ffffFC;
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

/* Mobile responsive styles */
@media (max-width: 768px) {
  .typing-container {
    font-size: 1.5rem;
    margin: 1rem;
  }

  h1 {
    font-size: 1.5rem;
    margin: 0.5em;
  }

  p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .typing-container {
    font-size: 1.2rem;
    margin: 0.5rem;
  }

  h1 {
    font-size: 1.2rem;
    margin: 0.5em;
  }

  p {
    font-size: 0.8rem;
  }
}
</style>
