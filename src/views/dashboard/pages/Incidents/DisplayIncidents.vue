<template>
  <v-container id="dashboard" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="11">
        <v-row>

          <v-col cols="12" md="3" style="float:right">
          <v-text-field class="mx-4" flat hide-details label="بحث.." append-icon="mdi-magnify">
            <input v-model="searchKey" id="input-13" type="text" />
          </v-text-field>
        </v-col>
        <v-col style="float:left">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-col cols="12" md="1" style="float:left">
              <v-btn @click="CreateIncident" fab x-small color="green" v-on="on">
                <v-icon light>mdi-plus</v-icon>
              </v-btn>
            </v-col>
          </template>
          <span>بلاغ جديد</span>
        </v-tooltip>
        </v-col>

        </v-row>

        <base-material-card color="primary" title="ملخص الحوادث">
          <v-card-text>
            <v-data-table
              :headers="incidentsTableHeader"
              :items="incidentsTable"
              item-key="id"
              :items-per-page="5"
              
            >
              <template v-slot:top>
                <v-toolbar flat color="white">
                  <v-dialog v-model="dialog" max-width="1000px">
                    <v-card>
                      <v-card-title>
                        <span class="headline">تعديل</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field v-model="editedItem.Subject"  label="العنوان"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-select
                                v-model="editedItem.saverity"
                                :items="incidents.saverity"
                                return-object
                                item-text="label"
                                item-value="code"
                                label="مستوى الخطورة"
                              ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-select
                                return-object
                                item-text="label"
                                v-model="editedItem.Sector"
                                :items="incidents.Sector"
                                item-value="code"
                                label="القطاع"
                              ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-select
                                return-object
                                v-model="editedItem.Status"
                                :items="getStatus"
                                item-text="label"
                                item-value="code"
                                label="الحالة"
                              ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-select
                                return-object
                                v-model="editedItem.category"
                                :items="incidents.category"
                                item-text="label"
                                item-value="code"
                                label="فئة الحادثة"
                              ></v-select>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                              <v-text-field v-model="editedItem.Description" label="التوصيف"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-select
                                return-object
                                v-model="editedItem.Urgancey"
                                :items="incidents.Urgancey"
                                item-text="label"
                                item-value="code"
                                label="الأهمية"
                              ></v-select>
                            </v-col>
                          </v-row>
                          <v-row v-for="(ip, index) in editedItem.ipAddresses" :key="ip.id">
                            <!--                  <the-mask :mask="['###', '###-#', '###-##']" v-model="ip.ip" label="عنوان الانترنت" />-->
                            <a
                              v-if="editedItem.ipAddresses.length === index + 1"
                              href="javascript:void(0)"
                              class="sc-color-primary"
                              @click="addIp($event)"
                            >
                              <i class="mdi mdi-plus sc-icon-24"></i>
                            </a>
                            <a
                              v-if="editedItem.ipAddresses.length !== index + 1"
                              href="javascript:void(0)"
                              class="sc-color-primary"
                              @click="removeIp($event, ip)"
                            >
                              <i class="mdi mdi-minus sc-icon-24"></i>
                            </a>
                            <v-col cols="12" md="4">
                              <v-text-field v-model="ip.ip" label="عنوان الأنترنت" />
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">الغاء</v-btn>
                        <v-btn color="blue darken-1" text @click="saveEdit">احفظ</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-dialog v-model="dialogDetails" max-width="1300px">
            <incedentDetails/>

          </v-dialog>
                </v-toolbar>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon medium  @click="viewDetails(item.id)">mdi-view-split-vertical</v-icon>
                <v-icon medium  @click="editItem(item.id)">mdi-pencil</v-icon>
                <v-icon medium @click="viewComment(item.id)">mdi-message-processing</v-icon>
                <!-- <v-icon medium @click="deleteItem(item)">mdi-delete</v-icon> -->
              </template>
            </v-data-table>
          </v-card-text>
          
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import stringHelper from "../../../../helpers/stringHelper";
import incedentDetails from "./incedentDetails"
export default {
  components:{
    incedentDetails
  },

  data: function() {
    return {
      sortDesc: true,
      
      editedItem: {
        id: "",
        Subject: "",
        saverity: "",
        org: "",
        Status: [{id:0 , StatusString:""}],
        category: "",
        Description: "",
        Sector: "",
        Urgancey: "",
        ipAddresses: [{ id: stringHelper.uniqueID(), ip: "" }],
      },
      dialog: false,
      searchKey:" ",
      dialogDetails: false,
    };
  },
  computed: {
    ...mapState(["incidents"]),
    ...mapGetters("incidents", [
      "incidentsTableHeader",
      "incidentsTable",
      "incidentById",
      "getStatus"
    ])
  },
  watch: {
    searchKey: function() {
      this.$store.dispatch("apt/setKey", this.searchKey);
    }
  },
  methods: {
    ...mapActions("incidents", ["fetchIncidents", "deleteIncident"]),
    ...mapMutations("incidents", ["setIncidents"]),
    ...mapActions("organization", ["fetchOrganizations","fetchSectors"]),
    CreateIncident() {
      this.$router.push("AddNewIncident");
    },
    editItem(item_id) {
      this.editedItem = this.incidentById(item_id);
      this.dialog = true;
    },
    ...mapActions("incidents", ["deleteIncident", "editIncident","fetchIncidents"]),
    saveEdit() {
      this.editIncident(this.editedItem);
      this.close();
    },
    viewDetails(item) {
      let incedent = this.incidentsTable.find(t => t.id == item);
      console.log(incedent);
      this.$store.dispatch("incidents/setIncident",incedent)
      this.dialogDetails = true;
    },

    viewComment(item_id) {
      let postID = item_id;
      this.$router.push({
        path: "ViewIncidentComments",
        query: { postID }
      });
    },
    close() {
      this.dialog = false;
      // setTimeout(() => {
      // 	this.editedItem = Object.assign({}, this.defaultItem)
      // 	this.editedIndex = -1
      // }, 300)
    },
    //
    deleteItem(item) {
      // const index = this.desserts.indexOf(item)
      // confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      // console.log(item);
      // store.dispatch('Incidents/deleteIncident', item);
      this.deleteIncident(item);
    },
    addIp(e) {
      e.preventDefault();
      this.editedItem.ipAddresses.push({ id: stringHelper.uniqueID(), ip: "" });
    },
    removeIp(e, ip) {
      e.preventDefault();
      this.editedItem.ipAddresses = this.editedItem.ipAddresses.filter(
        oldIp => {
          if (ip == oldIp) return false;
          return true;
        }
      );
    },
    initialize() {
      console.log("initialized");
    }
  },
  mounted() {
    // console.log(this.incidentsTableHeader)
  },
  created() {
    this.fetchIncidents();
     this.fetchSectors();
    this.fetchOrganizations();
  }
  
};
</script>
