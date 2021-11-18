<template>
  <div class="flex items-center justify-center relative" style="height: 100%">
    <h3 class="font-arcade text-white absolute" style="top: 5rem">
      Selecione o tamanho do Grid
    </h3>
    <div>
      <div class="flex flex-col items-center justify-center">
        <div class="mb-5">
          <input v-model="width" autofocus type="text" class="w-20 p-2" />
          <span class="text-green-600 mx-3">x</span>
          <input v-model="height" type="text" class="w-20 p-2" />
        </div>

        <button
          class="arcade-button arcade-button--green"
          @click="$emit('onGridSelected', { width, height })"
        >
          Próximo
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 42,
      height: 42,
    }
  },
}
</script>
