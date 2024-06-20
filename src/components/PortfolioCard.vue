<template>
    <div class="portfolio-card" @click="openExternalLink">
      <h3 class="portfolio-title">{{ title }}</h3>
      <p class="portfolio-description">{{ description }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'PortfolioCard',
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
        required: true,
      },
    },
    methods: {
      openExternalLink() {
        window.open(this.content, '_blank');
      },
    },
  });
  </script>
  
  <style scoped>
  .portfolio-card {
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
  