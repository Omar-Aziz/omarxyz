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
          <div v-if="rev">
            <button id="copy-btn" color="#212121" @click="copyResult">
              <h3>
                COPY
              </h3>
            </button>
          </div>
          <div v-else>
            <button id="result-btn" color="#212121">
              <h3>
                RESULT
              </h3>
            </button>
          </div>

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
        <!-- <div>
          <v-sheet>
            Colors
            <input id="html5colorpicker" type="color" value="#ff0000" @click="onColor">
          </v-sheet>
        </div> -->
      </v-sheet>
    </v-layout>
  </v-content>
</template>

<script>
export default {
  data: () => {
    return {
      height: 650,
      width: 600,
      elevation: 10,
      color: 'teal',
      rgb: '',
      rev: '',
      curColor: '',
      myColor: ''
    }
  },
  methods: {
    onColor () {
      const hexColorString = document.getElementById('html5colorpicker').value
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColorString)
      if (result) {
        this.myColor.r = parseInt(result[1], 16)
        this.myColor.g = parseInt(result[2], 16)
        this.myColor.b = parseInt(result[3], 16)
      }
      this.curColor = this.myColor
      console.log(this.curColor)
    },
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

#copy-btn {
  height: 60px;
  width: 88px;
  background: #212121;
  margin: 0px 0px 0px 1px;
}

#result-btn:hover {
  text-decoration: none;
  background: #212121
}

h1 { text-align: center }
p  { text-align: center; font-size: 16px }
</style>
