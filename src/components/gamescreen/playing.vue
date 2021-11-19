<template>
  <div :style="`min-height: 100vh; `">
    <div class="flex flex-col items-center justify-center">
      <h3 class="font-arcade text-white pt-3 invisible">.</h3>
      <div class="flex items-center justify-center mb-4">
        <q-icon
          name="mdi-skip-backward"
          size="md"
          color="white"
          class="
            cursor-pointer
            p-1
            rounded-sm
            border-2 border-transparent
            hover:border-white
          "
          @click="$emit('onSpeedDown')"
        />
        <button
          class="arcade-button arcade-button--black mx-5"
          @click="$emit('onGoBack')"
        >
          Encerrar
        </button>
        <q-icon
          name="mdi-skip-forward"
          size="md"
          color="white"
          class="
            cursor-pointer
            p-1
            rounded-sm
            border-2 border-transparent
            hover:border-white
          "
          @click="$emit('onSpeedUp')"
        />
      </div>
    </div>
    <div class="flex items-center justify-center">
      <div
        class="grid border-2 border-green-600 bg-black rounded-sm"
        :style="gridStyle"
      >
        <div v-for="(value, index) in grid" :key="index">
          <div
            :style="{
              width: '1.3rem',
              height: '1.3rem',
              backgroundColor: value === true ? '#057968' : 'black',
              border: 'solid 1px rgba(5, 150, 105, 0.3)',
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 42,
    },
    height: {
      type: Number,
      default: 42,
    },
    grid: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    gridStyle() {
      return {
        gridTemplateColumns: `repeat(${this.width}, minmax(0, 1fr))`,
      }
    },
  },
}
</script>
