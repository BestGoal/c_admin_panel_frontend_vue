<template>
  <v-container id="user-22222" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="11"></v-col>

      <v-col cols="12" md="4"></v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="11">
        <base-material-card icon="mdi-clipboard-text" title=" إضافة مؤسسة " class="px-5 py-3" color="grey darken-3">
          <v-row>
            
            <v-col cols="12" md="6">
            <SectorsComp/>
            </v-col>
            <v-col cols="12" md="6">
              <OrgsComp />
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="12" md="8" class="text-center">
              <v-btn x-large color="grey darken-3" class="mr-0" @click="sendData">إضافة</v-btn>
            </v-col>
          </v-row>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import SectorsComp from "./Sectors";
import OrgsComp from "./Orgs";

export default {
  components: {
    SectorsComp,
    OrgsComp
  },

  data() {
    return {
          Sector : {
          id : "",
          name : "",
         
          Orgs : []
        },

        
        Orgs: {id : "", name : "",},
        Sectors: {id : "", name : "",},

      
      
    };
  },
  computed: {
    Sec() {
      return [
        { code: "1", label: "CDC" },
        { code: "2", label: "19" },
        { code: "3", label: "20" }
      ];
    },
   Orgs() {
    return [
      { code: '1', label: 'مؤسسة 1' },
      { code: '2', label: 'مؤسسة 2' },
      { code: '3', label: 'مؤسسة 3' }
    ]
  }, 
  },
  methods: {
    sendData() {
      this.$http
        .post("http://localhost:8080/api/AddOrg", this.AddOrg, {
          headers: { "content-type": "application/json;" }
        })
        .then(
          result => {
            this.response = result.body;
            this.AddOrg.push({
              id: result.body.id,
              weight: result.body.weight,
              section: result.body.section,
              description: result.body.description,
              title: result.body.title,
              priority: result.body.priority,
              createdby: result.body.createdby,
              createdon: result.body.createdon
            });
            this.task.title = "";
            this.task.name = "";
            this.task.description = "";
            this.task.weight = "";
            this.task.priority = "";
            this.task.section = "";
            this.task.cratedby = "";
            this.task.createdon = "";

            this.response = result.body.id;
          },
          error => {
            this.response = error;
          }
        );
    }
  },
  mounted() {
    this.$http.get("http://localhost:8080/api/AddOrg").then(
      result => {
        this.AddOrg = result.body;
        this.response = result.body;
      },
      error => {
        console.error(error);
      }
    );
  }
};
</script>
