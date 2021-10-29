<template>
  <v-form ref="form" lazy-validation>
    <v-row justify="center">
      <v-col cols="12" md="11">
        <v-row>
          <v-col cols="12" md="4">
            <v-select
              v-model="statType"
              :items="GetSector"
              :rules="[v => !!v || 'نسيت اختيار نوع الحالة الجديدة']"
              item-text="statusType"
              item-value="id"
              label="نوع الحالة"
              required
            ></v-select>
          </v-col>

          <v-col cols="12" md="5">
            <v-text-field
              v-model="org"
              :rules="[v => !!v || 'نسيت اختيار الحالة']"
              placeholder="الحالة"
              label="الحالة"
              required
              clearable
            />
          </v-col>

          <v-col cols="12" md="3" class="text-center">
            <v-card-actions>
              <v-btn color="light green" class="mr-0" @click="sendData">
                <h3>إضافة</h3>
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="12">
            <v-data-table
              :headers="myheaders"
              :items="modifyOrgs"
              :items-per-page="5"
              class="elevation-1"
              dense
              group-by="category"
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
      statType: null,
      org: null,
      myheaders: [
        { text: "نوع الحالة", value: "category" },
        { text: "الحالة", value: "StatusString" },
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
    ...mapGetters("StatusStore", ["GetSector"]),
    ...mapState("StatusStore", ["status", "statusType"]),
    modifyOrgs() {
      return this.status.map(org => {
        console.log(org)
        return {
          id: org.id,
          StatusString: org.statusString,
          category: this.statusType.find(st => st.id == org.statusTypeId).statusType
        };
      });
    }
  },
  methods: {
    ...mapActions("StatusStore", [
      "AddOrg",
      "changeSector",
      "removeOrganization", "fetchstatusTypeId","fetchStatuses"
    ]),
    sendData() {
      if (!this.org || !this.statType)
        return this.statAlert(
          true,
          "الرجاء التأكد من صحة البانات المدخلة اعلاه",
          "error"
        );
      const obiOrg = {
        id: Math.round(Math.random() * 999999),
        statusString: this.org,
        statusTypeId: this.statType
      };
      console.log(obiOrg);
      this.AddOrg(obiOrg);
      this.fetchStatuses();
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
    this.fetchstatusTypeId();
    this.fetchStatuses();
  }


};
</script>
