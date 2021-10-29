<template>
  <v-row justify="center">
    <v-col cols="12" md="11">
      <base-material-card color="indigo lighten-3" class="px-5 py-1" title="Countries">
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field v-model="contenant.name" label="Name" />
          </v-col>

          <v-col cols="12" md="2" class="text-center">
            <v-btn color="indigo lighten-3" class="mr-0" @click="sendData">Add</v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-data-table
            :headers="headers"
            :items="contenants"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </v-row>
      </base-material-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      name : "",
      contenants: [],
      contenant: { serial: 0, name: "" },
      headers: [{ text: "Name", value: "name" }]
    };
  },

  methods: {
    ...mapActions("country", ["AddNewCountry"]),
    sendData() {
      this.AddNewCountry(this.contenant);
      this.contenants.push(Object.assign({}, this.contenant));
    }
  },

};
</script>
