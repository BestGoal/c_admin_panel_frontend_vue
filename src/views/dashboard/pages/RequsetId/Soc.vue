<template>
  <v-container id="dashboard" fluid tag="section">
    <v-row>
      <v-col cols="12" md="12">
    <v-card>
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="Idintify"
        item-key="id"
        show-select
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td>
            <v-checkbox
              v-model="props.selected"
              primary
              hide-details
            ></v-checkbox>
          </td>
          <td class="text-xs-right">{{ props.date }}</td>
          <td class="text-xs-right">{{ props.time }}</td>
          <td class="text-xs-right">{{ props.InternalIp }}</td>
          <td>
            <v-edit-dialog
              :return-value.sync="props.subsId"
              lazy
              @save="save"
              @cancel="cancel"
              @open="open"
              @close="close"
            > {{ props.subsId }}
              <template v-slot:input>
                <v-text-field
                  v-model="props.item.subsId"
                  label="Edit"
                  single-line
                  counter
                ></v-text-field>
              </template>
            </v-edit-dialog>
          </td>
        </template>

        <template #item.ownerType="{item}">
          <v-text-field v-model="item.ownerType" ></v-text-field>
        </template>
        <template #item.subsId="{item}">
          <v-text-field v-model="item.subsId" ></v-text-field>
        </template>

        <template #item.ownerSub="{item}">
          <v-text-field v-model="item.ownerSub" ></v-text-field>
        </template>

        <template #item.cid="{item}">
          <v-text-field v-model="item.cid" ></v-text-field>
        </template>

        <template  #item.phoneNum="{item}">
          <v-text-field v-model="item.phoneNum" ></v-text-field>
        </template>

        <template #item.actions="{item}">
          <v-icon small @click="save(item)">mdi-checkbox-marked-circle</v-icon>
        </template>

      </v-data-table>

      <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
        {{ snackText }}
        <template v-slot:action="{ attrs }">
          <v-btn v-bind="attrs" text @click="snack = false">Close</v-btn>
        </template>
      </v-snackbar>
      </v-card>
      </v-col>
      </v-row>

  </v-container>
</template>



<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
import axios from 'axios';
export default {
  data() {
    return {
      selected : [],
      allData : [],
      snack: false,
      snackColor: "",
      snackText: "",
      max25chars: v => v.length <= 25 || "Input too long!",
      pagination: {},
      subsId :"",
      ownerSub :"",
      cid :"",
      phoneNum :"",
      headers: [
        {
          align: "start",
          sortable: false
        },

        { text: "التاريخ", value: "date" },
        { text: "الوقت", value: "time" },
        { text: "العنوان الإلكتروني", value: "source" },
        { text: "المنفذ", value: "toPort" },
        { text: "نوع المعرف", value: "ownerType" },
        { text: "رمز المزود", value: "subsId" },
        { text: "صاحب المعرف", value: "ownerSub" },
        { text: "الرقم المدني /السجل التجاري ", value: "cid" },
        { text: " رقم الهاتف", value: "phoneNum" },
        { text: " الإجراء", value: "actions" }
      ]
    };
  },

  computed: {
    ...mapState("requsetIds", ["Idintify"]),
  },

  methods: {
    ...mapActions("requsetIds", ["getAllIp"]),
    ...mapMutations("requsetIds", ["addnewId","add"]),
    ...mapActions("requsetIds", ["newId","append"]),
    save(item) {
      
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "تم الحفظ";
      this.append(item);
    },
    cancel() {
      this.snack = true;
      this.snackColor = "error";
      this.snackText = "Canceled";
    },
    open() {
      this.snack = true;
      this.snackColor = "info";
      this.snackText = "Dialog opened";
    },
    close() {
      console.log("Dialog closed");
    },
  },
  created() {
    this.getAllIp()
  },
};
</script>
