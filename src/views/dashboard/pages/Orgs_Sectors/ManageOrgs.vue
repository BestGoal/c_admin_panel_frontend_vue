<template>
  <v-form ref="form" lazy-validation>
    <v-row justify="center">
      <v-col cols="12" md="11">
        <v-row>
          <v-col cols="12" md="4">
            <v-select
              v-model="sector"
              :items="GetSector"
              :rules="[v => !!v || 'نسيت اختيار القطاع']"
              item-text="name"
              item-value="id"
              label="القطاع"
              required
            ></v-select>
          </v-col>

          <v-col cols="12" md="5">
            <v-text-field
              v-model="orgname"
              :rules="[v => !!v || 'نسيت اختيار المؤسسة']"
              placeholder="المؤسسة"
              label="المؤسسة"
              required
              clearable
            />
          </v-col>

          <v-col cols="12" md="3" class="text-center">
            <v-card-actions>
              <v-btn color="green lighten-1" class="mr-0" @click="sendData">
                <h3>اضافة</h3>
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="12">
            <v-data-table
              :headers="myheaders"
              :items="organizations"
              :items-per-page="5"
              class="elevation-1"
              dense
              group-by="sector"
                          show-group-by
            >
              <template v-slot:item.actions="{ item }">
                <v-icon @click="deleteItemOrg(item.id)">mdi-delete</v-icon>
              </template>

            </v-data-table>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- Alerts  -->
    <v-snackbar v-model="alert.status" :color="alert.color" :timeout="alert.timeout">{{ alert.txt }}</v-snackbar>
  </v-form>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      sector: 0,
      orgname: null,
      myheaders: [
        { text: "القطاع", value: "sectorId" },
        { text: "المؤسسة", value: "orgname" },
        { text: "الاجراء", value: "actions" }
      ],
      alert: {
        status: false,
        color: null,
        txt: null,
        timeout: 2000
      }
    };
  },

  computed: {
    ...mapGetters("organization", ["GetSector"]),
    ...mapState("organization", ["sectors","organizations"]),
    modifyOrgs() {
      return this.organizations.map(org => {
        return {
          id: org.id,
          name: org.orgname,
          sector: this.sectors.find(sec => sec.id === org.sectorId).name
        };
      });
    }
  },
  methods: {
    ...mapActions("organization", [
      "AddOrg",
      "changeSector",
      "removeOrganization","fetchOrganizations","fetchSectors"]),
    sendData() {
      if (!this.orgname || !this.sector)
        return this.statAlert(
          true,
          "الرجاء التأكد من صحة البانات المدخلة اعلاه",
          "error"
        );
      const obiOrg = {
        id: Math.round(Math.random() * 999999),
        orgname: this.orgname,
        sectorId: this.sector
      };
      this.AddOrg(obiOrg);
    },
    // Alert
    statAlert(status, txt, color) {
      const alert = this.alert;
      alert.status = status;
      alert.txt = txt;
      alert.color = color;
    },
    // Delete item org in table which in vuex of course
    deleteItemOrg(orgID) {
      this.removeOrganization(orgID);
    }
  },
  mounted() {},
  created() {
    this.fetchSectors();
    this.fetchOrganizations();
  }
};
</script>
