<template>
  <v-row justify="center">
    <v-col cols="12" md="11">
      <v-card-title>
        <v-col>
          <div id="file">
            <FilePondDemo />
          </div>
        </v-col>
      </v-card-title>
    </v-col>
  </v-row>
</template>

<script>
import FilePondDemo from "./MulitipleUploads";

export default {
  name: "app",
  components: {
    FilePondDemo
  }
};
</script>

<style>
#file {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.filepond--item {
  width: 11;
  height: 3em;
}
</style>

