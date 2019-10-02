<template>
  <v-content>
    <v-layout justify-center>
      <v-sheet
        class="main-sheet"
        :height="height"
        :width="width"
        :elevation="elevation"
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
          <v-btn id="input-btn" ripple @click.stop="hexIt">
            <h3>Hex it</h3>
          </v-btn>
        </div>
        <div id="output-div">
          <v-btn v-if="rev" id="copy-btn" color="#212121" @click="copyResult">
            <h3>
              COPY
            </h3>
          </v-btn>
          <button v-else id="result-btn" color="#212121">
            <h3>
              RESULT
            </h3>
          </button>

          <v-textarea
            id="rev"
            :disabled="!rev"
            :value="rev"
            :maxlength="max"
            class="form-control"
            type="text"
            readonly
            outlined
            solo
            auto-grow
            filled
            rows="2"
          />
        </div>
      </v-sheet>
    </v-layout>
  </v-content>
</template>

<script>
export default {
  data: () => {
    return {
      height: 300,
      width: 600,
      elevation: 10,
      color: 'teal',
      rgb: '',
      rev: '',
      max: 7,
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
      this.rev = this.rgb2hex(this.rev)
    },
    newHex (rev) {

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
.theme--dark.v-sheet, .v-input__slot {
  background: #4b6cb7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #182848, hsl(220, 24%, 10%));  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #182848, hsl(220, 24%, 10%)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-radius: 5px

}

#result-sheet {
  height: 60px;
  width: 100%;
  overflow: auto;
}

#input-div {
  width: 60%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 auto
}

#output-div {
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
  height: 61.7px;
  width: 88px;
  background: #212121;
  margin: 0px 0px 0px 1px;
  cursor: auto
}

#copy-btn {
  height: 60.495px;
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
