<template>
  <div>
    <v-layout flex align-start justify-center>
      <div class="cardSize">
        <v-card hover class="vcard">
          <v-toolbar card class="toolbar">
            <v-icon class="default-gradient-item">
              {{ icons.mail }}
            </v-icon>
            <v-toolbar-title class="default-gradient-item">
              {{ toolbarMsg }}
            </v-toolbar-title>
            <v-spacer />
            <v-btn
              id="submit"
              round
              left
              flat
              form="email-form"
              action="submit"
              type="submit"
              name="submit"
              :disabled="!verified"
            >
              <v-icon class="default-gradient-item">
                {{ icons.send }}
              </v-icon>
            </v-btn>
          </v-toolbar>
          <div>
            <v-divider />
            <v-divider />
            <v-divider />
          </div>

          <v-form
            id="email-form"
            ref="form"
            action="/send-email"
            method="POST"
            enctype="multipart/form-data"
            class="form"
          />

          <v-text-field
            class="text-input"
            form="email-form"
            name="email"
            label="email"
            hint="double check to make sure I can get back 2 you :)"
            required
            full-width
            hide-no-data
            hide-details
          />

          <div class="default-gradient-bg">
            <v-divider />
            <v-divider />
          </div>

          <v-text-field
            class="text-input"
            form="email-form"
            name="name"
            label="name"
            required
            full-width
            hide-no-data
            hide-details
          />

          <div class="default-gradient-bg">
            <v-divider />
            <v-divider />
          </div>

          <v-textarea
            class="text--primary"
            form="email-form"
            name="msg"
            placeholder="What's up!"
            counter
            required
            full-width
            auto-grow
          />

          <div class="default-gradient-bg">
            <v-divider />
            <v-divider />
          </div>

          <v-checkbox
            v-model="verified"
            style="
              padding-left: 10px;
              margin: auto;
               "
            value="agree"
            label="Tick me to send or attach images"
          />

          <details open style="padding: 0 0 0 17px; margin-top: -20px">
            <summary
              v-show="files.length > 0 ? !upload : upload"
              class="default-gradient-item"
            >
              Attachments
            </summary>
            <ul v-for="(file, key) in files" :key="(file, key)">
              <li>
                <v-icon small class="default-gradient-item">
                  image
                </v-icon>
                {{ file.name }}
              </li>
              <v-img
                :ref="'image'+parseInt( key )"
                form="email-form"
                :height="images.height"
                :width="images.width"
                class="preview hideImg"
                name="img"
                alt="img"
              />
            </ul>
          </details>

          <v-btn block flat :disabled="!verified" @click="$refs.files.click()">
            Attach images
            <v-icon right small class="default-gradient-item">
              {{ icons.attach }}
            </v-icon>
          </v-btn>
          <input
            v-show="false"
            id="files"
            ref="files"
            class="default-gradient-item"
            form="email-form"
            type="file"
            name="img"
            accept="image/*"
            multiple
            @change="handleFilesUpload"
          >

          <v-divider />
        </v-card>
      </div>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      verified: false,
      upload: false,
      toolbarMsg: 'Compose',
      icons: {
        mail: 'mail',
        send: 'send',
        attach: 'attach_file'
      },

      images: {
        height: '50px',
        width: '50px'
      },
      files: []
    }
  },

  computed: {},

  methods: {
    addFiles () {
      this.$refs.files.click()
    },

    handleFilesUpload () {
      const uploadedFiles = this.$refs.files.files

      for (let i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i])
      }

      this.getImagePreviews()
    },

    getImagePreviews () {
      for (let i = 0; i < this.files.length; i++) {
        if (/\.(jpe?g|png|gif)$/i.test(this.files[i].name)) {
          const reader = new FileReader()
          reader.addEventListener(
            'load',
            function () {
              this.$refs['image' + parseInt(i)][0].src = reader.result
            }.bind(this),
            false
          )
          reader.readAsDataURL(this.files[i])
        }
      }
    }
  }
}
</script>

<style lang="css" scoped>
.cardSize {
  width: 650px;
}

.v-divider {
  background: rgba(42, 8, 42, 0.9);
  opacity: 0.2;
}

.vcard {
  box-shadow: 0.2rem 0 0.6rem 0.2rem rgba(0, 0, 10, 0.5);
  border-radius: 4px;
  position: relative;
  background: inherit;
  overflow: hidden;
  height: 100%;
  margin: auto;
}

.theme--dark.v-toolbar {
  background: rgba(20, 0.9, 25, 0.5);
}

.hideImg {
  display: none;
}

@media only screen and (max-width: 600px) {
  .cardSize {
    width: 400px;
  }
}

.transparent {
  background-color: transparent !important;
  opacity: 0.65;
  border-color: transparent !important;
}
</style>
