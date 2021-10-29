<template>
  <v-container id="user-5" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="11">
        <base-material-card  title="اضافة حادثة جديدة" >
          <div>
            <v-form>
              <v-container class="py-0">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="Incident.Subject" label="عنوان الحادث" />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="3">
                    <v-select
                      v-model="sectorSelected"
                      :items="sectors"
                      item-text="name"
                      item-value="id"
                      @change="changeSector"
                      label="القطاع"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-select
                      item-text="orgname"
                      v-model="Incident.org.id"
                      :items="orgs"
                      item-value="id"
                      label="الجهة المتأثرة"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-menu
                      v-model="menu2"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="Incident.Date"
                          label="تاريخ الحادثة"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="Incident.Date" @input="menu2 = false"></v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-menu
                      ref="menu"
                      v-model="time2"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      :return-value.sync="time"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="Incident.Time" label="وقت الحادث" readonly v-on="on"></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="time2"
                        v-model="Incident.Time"
                        full-width
                        @click:minute="$refs.menu.save(time)"
                      ></v-time-picker>
                    </v-menu>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" md="3">
                    <v-select
                      return-object
                      v-model="Incident.category"
                      :items="incidents.Cat"
                      item-text="label"
                      item-value="id"
                      label="فئة الحادثة"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-select
                      return-object
                      v-model="Incident.saverity"
                      :items="incidents.Sver"
                      item-text="label"
                      item-value="id"
                      label="مستوى الخطورة"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-select
                      return-object
                      v-model="Incident.Urgancey"
                      :items="incidents.Urgancey"
                      item-text="label"
                      item-value="id"
                      label="الأهمية"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-select
                      return-object
                      v-model="Incident.Status"
                      :items="incidents.Status"
                      item-text="label"
                      item-value="Id"
                      label="الحالة"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="12">
                    <v-textarea rows="5" v-model="Incident.Description" label="تفاصيل الحادث" />
                  </v-col>
                </v-row>
                <v-row v-for="(ip, index) in Incident.ipAddresses" :key="ip.id">
                  <!--                  <the-mask :mask="['###', '###-#', '###-##']" v-model="ip.ip" label="عنوان الانترنت" />-->
                  <a
                    v-if="Incident.ipAddresses.length === index + 1"
                    href="javascript:void(0)"
                    class="sc-color-primary"
                    @click="addIp($event)"
                  >
                    <i class="mdi mdi-plus sc-icon-24"></i>
                  </a>
                  <a
                    v-if="Incident.ipAddresses.length !== index + 1"
                    href="javascript:void(0)"
                    class="sc-color-primary"
                    @click="removeIp($event, ip)"
                  >
                    <i class="mdi mdi-minus sc-icon-24"></i>
                  </a>
                  <!-- IP Address -->
                  <v-col cols="12" md="4">
                    <div class="mb-2">عنوان الانترنت</div>
                    <vue-ip class="ipInput" :ip="ip.ip" :on-change="checkStatusIP" theme="material"></vue-ip>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" md="3">
                    <v-btn color="success" class="mr-0" @click="add">حفظ</v-btn>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-btn color="error" class="mr-0" @click="close">إغلاق</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </div>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import stringHelper from "../../../../helpers/stringHelper";
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
import VueIp from "vue-ip";

export default {
  components: { VueIp },
  data() {
    return {
      time2: false,
      menu2: false,
      date: new Date().toISOString().substr(0, 10),
      time: null,
      ipLabel: "IP address",
      Incident: {
        id: 0,
        Status: {Id:0, StatusString:""},
        Subject: "",
        Date: "",
        Time: "",
        category: {id:0, code:"", label:""},
        Description: "",
        Sector: "",
        org: { id : 0},
        Urgancey: {id:0, code:"", label:""},
        saverity: {id:0, code:"", lable:""},
        ipAddresses: [{ id: this.uniqueID(), ip: "" }]
      },
      sectorSelected: null,
      orgSelected: null,
      orgs: []
    };
  },
  computed: {
    ...mapState(["incidents"]),
    ...mapState("organization", ["sectors", "organizations"]),
  },
  methods: {
    ...mapActions("incidents", ["addIncident"]),
    ...mapActions("organization", ["setSelectedSector"]),
    ...mapMutations("incidents", ["newIncidnt"]),
     ...mapActions("organization", ["fetchOrganizations","fetchSectors"]),
    changeSector() {
      console.log(this.sectorSelected);
      this.orgs = this.organizations.filter(org => {
        return org.sectorId == this.sectorSelected;
      });
    },
    add() {
      this.Sector = this.sectorSelected;
      console.log(this.Incident);
      this.addIncident(this.Incident);
      this.$router.push("DisplayIncidents");
      
    },
    close() {
      this.$router.push("DisplayIncidents");
    },
    addIp(e) {
      e.preventDefault();
      this.Incident.ipAddresses.push({ id: this.uniqueID(), ip: "" });
    },
    removeIp(e, ip) {
      e.preventDefault();
      this.Incident.ipAddresses = this.Incident.ipAddresses.filter(oldIp => {
        if (ip == oldIp) return false;
        return true;
      });
    },
    uniqueID() {
      return Math.floor(Math.random() * Math.floor(100000));
    },
    checkStatusIP(ip, valid) {
      console.log(ip);
      console.log("IP Valid", valid);
    }
  },
  created() {
    this.fetchSectors();
    this.fetchOrganizations();

  }
};
</script>
<style lang="scss">
.ipInput {
  direction: ltr;
  border: 1px solid black !important;
  input {
    width: 100%;
    color: black !important;
    &:after {
      color: black !important;
    }
  }
}
</style>
