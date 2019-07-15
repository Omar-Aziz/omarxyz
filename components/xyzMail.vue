<template>
  <div>
    <v-layout flex align-start justify-center>
      <div v-bind:style="{width: '650px'}">
        <v-card hover class="vcard">
          <v-toolbar card class="toolbar">
            <v-icon class="default-gradient-item">{{ icons.mail }}</v-icon>
            <v-toolbar-title class="default-gradient-item">{{ toolbarMsg }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              round
              left
              flat
              form="email-form"
              action="submit"
              type="submit"
              id="submit"
              name="submit"
              :disabled="!verified"
            >
              <v-icon class="default-gradient-item">{{ icons.send }}</v-icon>
            </v-btn>
          </v-toolbar>
          <div>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-divider></v-divider>
          </div>

          <v-form
            id="email-form"
            action="/send-email"
            method="POST"
            enctype="multipart/form-data"
            ref="form"
            class="form"
          ></v-form>

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
          ></v-text-field>

          <div class="default-gradient-bg">
            <v-divider></v-divider>
            <v-divider></v-divider>
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
          ></v-text-field>

          <div class="default-gradient-bg">
            <v-divider></v-divider>
            <v-divider></v-divider>
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
          ></v-textarea>

          <div class="default-gradient-bg">
            <v-divider></v-divider>
            <v-divider></v-divider>
          </div>

          <v-checkbox
            style="
              padding-left: 10px;
              margin: auto;
 
               "
            value="agree"
            v-model="verified"
            label="Tick me to send or attach images"
          ></v-checkbox>

          <details open style="padding: 0 0 0 17px; margin-top: -20px">
            <summary
              class="default-gradient-item"
              v-show="files.length > 0 ? !upload : upload"
            >Attachments</summary>
            <ul v-for="(file, key) in files">
              <li>
                <v-icon small class="default-gradient-item">image</v-icon>
                {{ file.name }}
              </li>
              <v-img
                form="email-form"
                :height="images.height"
                :width="images.width"
                class="preview hideImg"
                v-bind:ref="'image'+parseInt( key )"
                name="img"
                alt="img"
              ></v-img>
            </ul>
          </details>

          <v-btn block flat @click="$refs.files.click()" :disabled="!verified" >
            Attach images
            <v-icon right small class="default-gradient-item">{{ icons.attach }}</v-icon>
          </v-btn>
          <input
           class="default-gradient-item"
            v-show="false"
            form="email-form"
            type="file"
            name="img"
            id="files"
            ref="files"
            accept="image/*"
            multiple
            @change="handleFilesUpload"
          />

          <v-divider></v-divider>
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
      toolbarMsg: "Compose",
      icons: {
        mail: "mail",
        send: "send",
        attach: "attach_file"
      },

      images: {
        height: "50px",
        width: "50px"
      },
      files: []
    };
  },

  computed: {},

  methods: {
    addFiles() {
      this.$refs.files.click();
    },

    handleFilesUpload() {
      let uploadedFiles = this.$refs.files.files;

      for (var i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i]);
      }

      this.getImagePreviews();
    },

    getImagePreviews() {
      for (let i = 0; i < this.files.length; i++) {
        if (/\.(jpe?g|png|gif)$/i.test(this.files[i].name)) {
          let reader = new FileReader();
          reader.addEventListener(
            "load",
            function() {
              this.$refs["image" + parseInt(i)][0].src = reader.result;
            }.bind(this),
            false
          );
          reader.readAsDataURL(this.files[i]);
        }
      }
    }
  }
};
</script>

<style lang="css" scoped>
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

/* @media only screen and (max-width: 600px) {
  .vcard {
  }
} */

.transparent {
  background-color: transparent !important;
  opacity: 0.65;
  border-color: transparent !important;
}
</style>
