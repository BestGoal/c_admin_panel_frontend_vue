<template>
  <v-container id="dashboard" fluid tag="section">
    <v-row justify="center">

      <NewIPDialog @input="addIp" :dialog="dialog"></NewIPDialog>

      <v-col cols="12" md="12">
        <v-card>
          <v-container>
            <v-card>
              <v-col cols="12" md="12">
                <v-data-table :headers="headers" :items="Idintify">
                  <template v-slot:item.actions="{ item }">
                    <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
                  </template>
                </v-data-table>
              </v-col>
            </v-card>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueIp from "vue-ip";
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
import   NewIPDialog  from './NewIPDialog'
import axios from 'axios'
export default {
  components: { VueIp,NewIPDialog },
  data() {
    return {
      documentId : 0,
      dialog : false,
      ip1: "",
      ip2: "",
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      time: null,
      ipList: [],
      headers: [
        { text: "رقم الوثيقة", value: "docmentId" },
        { text: "التاريخ", value: "date" },
        { text: "الوقت", value: "time" },
        { text: "العنوان الإلكتروني الداخلي", value: "source" },
        { text: "العنوان الإلكتروني الخارجي", value: "dist" },
        { text: "المنفذ من", value: "fromPort" },
        { text: "المنفذ إلى", value: "toPort" },
        { text: "مجموعة الاختراق ", value: "aptGroup" },
        { text: "تعليق", value: "comment" },
        { text: "الإجراء", value: "actions" }
      ]
    };
  },
  computed: {
    ...mapState("requsetIds", ["Idintify"])
  },

  methods: {
    ...mapActions("requsetIds", ["getAllIp","delete"]),
    addIp(ip) {
      console.log(ip);
      ip.id = Math.round(Math.random() * 999999),
      this.ipList.push(ip);
    },
    deleteItem(item) {
      let flag = confirm("Are you sure you want to delete this item?");
      if(flag){
        this.delete(item.id);
      }
    },

  },
  created() {
    this.getAllIp()
  },
};
</script>
<style lang="scss">
.ipInput {
  direction: ltr;
  border: 1px solid rgb(190, 184, 184) !important;
  input {
    width: 100%;
    color: black !important;
    &:after {
      color: black !important;
    }
  }
}
</style>
