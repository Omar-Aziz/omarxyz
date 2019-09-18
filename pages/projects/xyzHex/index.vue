<template>
  <v-content>
    <v-layout justify-center>
      <v-sheet
        id="main-sheet"
        :height="height"
        :width="width"
        :elevation="elevation"
        :color="color"
      >
        <h1>Hex Yeah﹗</h1>
        <p>convert RGB(a) to Hex</p>
        <v-divider />
        <div id="input-div">
          <v-textarea
            v-model="rgb"
            clearable
            outlined
            label="RGBA?"
            solo
            filled
            auto-grow
            rows="2"
            :value="rgb"
          />
          <v-btn id="input-btn" ripple @click="hexIt">
            <h3>Hex it</h3>
          </v-btn>
        </div>
        <div id="output-div">
          <button id="result-btn" color="#212121" @click="copyResult">
            <h3 v-if="rev">
              COPY
            </h3>
            <h3 v-else>
              RESULT
            </h3>
          </button>
          <v-textarea
            id="rev"
            v-model="rev"
            clearable
            outlined
            :value="rev"
            solo
            flat
            filled
            auto-grow
            rows="2"
          />
        </div>
      </v-sheet>
    </v-layout>
  </v-content>
</template>

<script>
export default {
  // rgba(0,0,0,0)
  data: () => {
    return {
      height: 700,
      width: 700,
      elevation: 10,
      color: 'teal',
      rgb: '',
      rev: ''
    }
  },
  created () {
    this.$nextTick(() => {
      document.getElementById('result-btn').classList.remove('v-btn--disabled')
    })
  },
  methods: {
    rgb2hex () {
      const x = this.rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)
      return (x && x.length === 4) ? '#' + ('0' + parseInt(x[1], 10).toString(16)).slice(-2) +
            ('0' + parseInt(x[2], 10).toString(16)).slice(-2) +
            ('0' + parseInt(x[3], 10).toString(16)).slice(-2) : ''
    },
    hexIt () {
      this.rev += this.rgb2hex(this.rev)
    },
    copyResult () {
      const copy = document.getElementById('rev')
      copy.select()
      document.execCommand('copy')
      console.log(copy.value)
    }
  }
}
</script>

<style lang="css" scoped>
#miain-sheet {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#result-sheet {
  height: 60px;
  width: 100%;
  overflow: auto;
}

#input-div, #output-div {
  width: 60%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 auto
}

#input-btn {
  margin: 0;
  height: 60px;
}

#input-btn:hover {
  font-size: 15px;
}

#result-btn {
  height: 60px;
  width: 88px;
  background: #212121;
  margin: 0px 0px 0px 1px;
  cursor: auto
}

#result-btn:hover {
  text-decoration: none;
  background: #212121
}

h1 { text-align: center }
p  { text-align: center; font-size: 16px }
</style>
