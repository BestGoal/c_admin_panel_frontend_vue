<template>
  <v-container id="dashboard" fluid tag="section">
    <v-card>
      <v-row justify="center">
        <v-col cols="12" md="12">
          <v-card-title style="float:right">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="البحث.."
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
        </v-col>
        <v-data-table :headers="headers" :items="Idintify" :search="search" @click:row="addComments">
        </v-data-table>
      </v-row>
    </v-card>
    <v-dialog v-model="dailog">
      <Notification/>
    </v-dialog>
  </v-container>
</template>
<script>
import Notification from "./Notification"
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
import axios from 'axios'
export default {
  components:{Notification},
  data() {
    return {
      search: "",
      dailog : false,
      data : [],
      headers: [
        {
          align: "start",
          sortable: false
        },
        { text: "رقم الوثيقة", value: "docmentId" },
        { text: "التاريخ", value: "date" },
        { text: "الوقت", value: "time" },
        { text: "العنوان الإلكتروني الداخلي", value: "source" },
        { text: "العنوان الإلكتروني الخارجي", value: "dist" },
        { text: "المنفذ من", value: "fromPort" },
        { text: "المنفذ إلى", value: "toPort" },
        { text: "مجموعة الاختراق ", value: "aptGroup" },
        { text: "رمز المزود", value: "subsId" },
        { text: "صاحب المعرف", value: "ownerSub" },
        { text: "الرقم المدني /السجل التجاري ", value: "cid" },
        { text: " رقم الهاتف", value: "phoneNum" }
       
      ]
    };
  },
  computed: {
    ...mapState("requsetIds", ["Idintify"]),
  },
  methods:{
    ...mapActions("requsetIds", ["getAllIp"]),
    addComments () {
      this.dailog = true;
      //this.$router.push("Notification")
    },
  },
  created() {
    this.getAllIp()
  },
};
</script>
