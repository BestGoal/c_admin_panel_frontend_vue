<template>
  <v-container id="dashboard" fluid tag="section">
    <v-row>
      <v-col cols="12" md="11">
        <base-material-card color="light-green" class="px-5 py-1">
          <v-card-title>
            <h2>المهام</h2>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="ابحث"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>

          <v-card-text>
            <v-data-table :headers="getTableHeaders" :items="doTasks" :items-per-page="5">
              <template #item.actions="{item}">
                <Actions :task="item" />
              </template>
            </v-data-table>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>

    <v-row>
      <v-card-actions>
        <v-btn @click="CreateTask" large color="primary">
          <h3>اضف مهمة</h3>
        </v-btn>
      </v-card-actions>

      <v-dialog v-model="addDialog" persistent max-width="800px">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">Add Employee</div>
          </template>
        </base-material-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      Employee: {
        id: "",
        name: "",
        section: {
          id: null,
          name: ""
        },
        jobTitle: "",
        password: "Password",
        role: "employee",
        status: ""
      }
    };
  },
  computed: {
    ...mapGetters("tasks", ["getTaskByExpersion", "getTableHeaders"]),
    ...mapState("employees", ["addDialog"]),
    ...mapGetters("employees", [
      "getAddDialogStatus",
      "getSection",
      "getDepartments"
    ])
  },
  methods: {
    ...mapActions("employees", ["addEmployee"]),
    ...mapMutations("employees", ["setDialogStatus"]),
    CreateTask() {
      this.$router.push("CreateTask");
      // this.addEmployee(this.Employee);
      // this.setDialogStatus(!this.addDialog);
    },
    close() {
      this.setDialogStatus(!this.addDialog);
    }
  }
};
</script>