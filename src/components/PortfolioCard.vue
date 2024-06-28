<template>
  <div>
    <div class="portfolio-card" @click="openModal">
      <h3 class="portfolio-title">{{ title }}</h3>
      <p class="portfolio-description">{{ description }}</p>
    </div>
    <Modal :isVisible="isModalVisible" @close="closeModal">
      <div v-html="formattedContent"></div>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import Modal from './Modal.vue';

export default defineComponent({
  name: 'PortfolioCard',
  components: {
    Modal,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
  },
  setup(props) {
    const isModalVisible = ref(false);

    const openModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    const formattedContent = computed(() => {
      // Aqui você faria a lógica para carregar e formatar o conteúdo HTML
      // Exemplo: converter o PDF em HTML, ou usar o HTML direto se já estiver disponível
      return props.content; // Nesse exemplo, supondo que `content` já seja HTML
    });

    return {
      isModalVisible,
      openModal,
      closeModal,
      formattedContent,
    };
  },
});
</script>

<style scoped>
.portfolio-card {
  height: 16em;
  padding: 1rem;
  border: 1px solid #ccc;
  background-color: var(--white-smoke);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: transform 0.2s;
}

.portfolio-card:hover {
  transform: scale(1.05);
}

.portfolio-title {
  font-family: var(--font-primary);
  font-size: 1.5rem;
  color: #000;
  margin: 0;
  margin-bottom: 0.5rem;
}

.portfolio-description {
  font-family: var(--font-secondary);
  font-size: 1rem;
  text-align: justify;
  color: #000;
}
</style>
