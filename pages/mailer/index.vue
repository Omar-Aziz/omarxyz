<template>
  <form action="/send-email" method="POST">
  <br>
    <v-text-field name="email" label="Email"></v-text-field>
    <v-text-field name="name" label="Name"></v-text-field>

    <v-btn large action='submit' type="submit" id="submit" name="submit" color="success">submit</v-btn>
  </form>
</template>

<script>
export default {
  // middleware: "authenticated"
};
</script>