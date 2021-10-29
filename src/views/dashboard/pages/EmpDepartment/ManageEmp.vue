<template>
  <v-form ref="form" lazy-validation>
    <v-row justify="center">
      <v-col cols="12" md="11">
        <v-row>
          <v-col cols="12" md="4">
            <v-select
              v-model="department"
              :items="GetSection"
              item-text="name"
              item-value="id"
              label="القسم"
              required
            ></v-select>
          </v-col>

          <v-col cols="12" md="5">
            <v-text-field
              v-model="employee"
              placeholder="الموظف"
              label="الموظف"
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
              :items="employees"
              :items-per-page="5"
              class="elevation-1"
              dense>
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
      department: null,
      employee: null,
      myheaders: [
        { text: "القسم", value: "sectionID" },
        { text: "الموظف", value: "name" },
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
    ...mapGetters("departments", ["GetSection", "GetEmployees"]),
    ...mapState("departments", ["employees", "departments"]),
    modifyOrgs() {
      return this.employees.map(emp => {
        return {
          id: emp.id,
          name: emp.name,
          department: this.departments.find(dep => dep.id == emp.SectionID).name
        };
      });
    }
  },
  methods: {
    ...mapActions("departments", [
      "addEmployee",
      "changeSector",
      "removeOrganization","fetchSections","fetchEmployees"
    ]),
    sendData() {
      if (!this.employee || !this.department)
        return this.statAlert(
          true,
          "الرجاء التأكد من صحة البانات المدخلة اعلاه",
          "error"
        );
      const obiOrg = {
        id: Math.round(Math.random() * 999999),
        name: this.employee,
        SectionID: this.department
      };
      this.addEmployee(obiOrg);
      this.fetchEmployees();
      this.employee = '';
      this.department = '';

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
  mounted() {},created() {

  }
};
</script>
