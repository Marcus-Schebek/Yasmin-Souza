<template>
  <v-dialog v-model="isVisible" transition="dialog-bottom-transition" max-width="600">
    <v-card>
      <v-card-title>
        {{ title }}
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text>
        <slot></slot>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="closeModal">Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
});
</script>

<style scoped>
.v-dialog-transition {
  transition: all 0.3s ease;
}
</style>
