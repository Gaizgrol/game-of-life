<template>
  <div :style="`min-height: 100vh; `">
    <div class="flex flex-col items-center justify-center">
      <h3 class="font-arcade text-white pt-3">
        Selecione as células iniciais (vazio para aleatório)
      </h3>
      <div class="flex items-center justify-center mb-4">
        <button
          class="arcade-button arcade-button--black"
          @click="$emit('onGoBack')"
        >
          Voltar
        </button>
        <button
          class="arcade-button arcade-button--green ml-3"
          @click="$emit('onPlay', grid)"
        >
          Iniciar
        </button>
        <button
          class="arcade-button arcade-button--black ml-3"
          @click="resetGrid"
        >
          Limpar
        </button>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <!-- background-image: url(${require('@/assets/imgs/bkg-grid.png')}); background-size: auto auto -->
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
              cursor: 'pointer',
            }"
            class="hover:bg-gray-800"
            @click="() => onSelectCell(index)"
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
  },
  data() {
    return {
      grid: [],
    }
  },
  computed: {
    gridStyle() {
      return {
        gridTemplateColumns: `repeat(${this.width}, minmax(0, 1fr))`,
      }
    },
  },
  mounted() {
    this.makeGrid()
  },
  methods: {
    makeGrid() {
      this.grid = []
      for (let i = 0; i < this.width * this.height; i++) {
        this.grid.push(false)
      }
    },
    onSelectCell(index) {
      this.grid[index] = !this.grid[index]
      this.$forceUpdate()
    },
    resetGrid() {
      this.makeGrid()
    },
  },
}
</script>
