<template>
  <div class="flex items-center justify-center" style="height: 100%">
    <div>
      <button
        class="arcade-button arcade-button--green"
        @click="$emit('onStart')"
      >
        Jogar
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>
