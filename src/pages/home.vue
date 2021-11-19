<template>
  <div class="game" :style="{ backgroundColor: bkgColor }">
    <div v-if="isScreenStart || isScreenInputs">
      <Banner class="pt-10 pb-16" />

      <div class="flex items-center justify-center">
        <div
          class="inline-block border border-green-800 bg-black"
          style="width: 40rem; height: 30rem"
        >
          <GameScreenStart v-if="isScreenStart" @onStart="onStart" />
          <GameScreenInputs
            v-else-if="isScreenInputs"
            @onGridSelected="onGridSelected"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <GameScreenPosition
        v-if="isScreenPosition"
        :width="width"
        :height="height"
        @onGoBack="onGoBackFromPositionScreen"
        @onPlay="onPlay"
      />
      <GameScreenPlaying
        v-else-if="isScreenPlaying"
        :width="width"
        :height="height"
        :grid="grade.getCelulas()"
        @onGoBack="onGoBackFromPlayingScreen"
        @onSpeedDown="speedDown"
        @onSpeedUp="speedUp"
      />
    </div>
  </div>
</template>

<script>
import Banner from '@/components/banner.vue'
import GameScreenStart from '@/components/gamescreen/start.vue'
import GameScreenInputs from '@/components/gamescreen/inputs.vue'
import GameScreenPosition from '@/components/gamescreen/position.vue'
import GameScreenPlaying from '@/components/gamescreen/playing.vue'
import Grade from '@/helpers/Grade'

export default {
  components: {
    Banner,
    GameScreenStart,
    GameScreenInputs,
    GameScreenPosition,
    GameScreenPlaying,
  },
  data() {
    return {
      currentScreen: 'start',
      width: null,
      height: null,
      grade: [],
      renderInterval: 500,
      interval: null,
      bkgColor: '#2e2e2e',
    }
  },
  computed: {
    isScreenStart() {
      return this.currentScreen === 'start'
    },
    isScreenInputs() {
      return this.currentScreen === 'inputs'
    },
    isScreenPosition() {
      return this.currentScreen === 'position'
    },
    isScreenPlaying() {
      return this.currentScreen === 'playing'
    },
  },
  methods: {
    onStart() {
      this.currentScreen = 'inputs'
    },
    onGridSelected({ width, height }) {
      this.width = width
      this.height = height
      this.bkgColor = '#000000'
      this.currentScreen = 'position'
    },
    onGoBackFromPositionScreen() {
      this.bkgColor = '#2e2e2e'
      this.currentScreen = 'start'
    },
    onPlay(grid) {
      this.renderInterval = 500
      this.grade = new Grade(this.width, this.height)
      for (let i = 0; i < grid.length; i++)
        if (grid[i] === true)
          this.grade.ativa(i % this.width, parseInt(i / this.width))

      this.createInterval()

      this.bkgColor = '#000000'
      this.currentScreen = 'playing'
    },
    onGoBackFromPlayingScreen() {
      clearInterval(this.interval)
      this.currentScreen = 'position'
    },
    render() {
      this.grade.atualiza()
    },
    createInterval() {
      clearInterval(this.interval)
      this.interval = setInterval(this.render, this.renderInterval)
    },
    speedDown() {
      this.renderInterval += 100
      this.createInterval()
    },
    speedUp() {
      this.renderInterval -= 100
      if (this.renderInterval < 100) this.renderInterval = 100
      this.createInterval()
    },
  },
}
</script>

<style lang="postcss" scoped>
.game {
  min-height: 100vh;
  user-select: none;
}
</style>
