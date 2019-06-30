<template>
  <div>
    <v-form ref="form" action="/send-email" id="mail_form" method="POST" autocomplete="off">
      <v-text-field v-model="name" name="name" label="Name"></v-text-field>

      <v-btn large type="submit" id="submit" name="submit" form="my_form" color="success">SEND</v-btn>
    </v-form>
    <v-date-picker v-model="range" range :landscape="landscape" :reactive="reactive"></v-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      range: new Date().toISOString().substr(0, 10),
      landscape: false,
      reactive: false
    };
  }
};
</script>

<style>
</style>
