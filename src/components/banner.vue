<template>
  <div>
    <div class="bkg flex items-center justify-center py-6">
      <q-img
        :src="require('@/assets/imgs/game-of-life.gif')"
        spinner-color="white"
        class="h-48 w-48 rounded-full border-4"
        style="border-color: rgba(5, 150, 105, 0.1)"
      />
      <div class="ml-8">
        <h1 class="text-green-600 text-2xl mb-3">Game of Life</h1>
        <span class="text-gray-500 text-xs">
          Mateus Santos | Gabriel Izoton
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* stylelint-disable */
.bkg {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 255, 255, 0.1) 54%,
    rgba(0, 0, 0, 0) 100%
  );
}
</style>
