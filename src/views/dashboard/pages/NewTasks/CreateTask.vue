<template>
  <v-container id="dashboard" fluid tag="section">
    <v-row>
      <v-col cols="12" md="11">
        <base-material-card color="light-green" class="px-5 py-1">
          <v-card-title>
            <h2>المهام</h2>
          </v-card-title>

          <v-card-text>
            <v-col cols="12">
              <v-text-field v-model="message2" solo label="عنوان المهمة" clearable></v-text-field>
            </v-col>
          </v-card-text>

          <v-col cols="12">
            <v-textarea color="teal">
              <template v-slot:label>
                <div>
                  المحتوى
                  <small>(اختياري)</small>
                </div>
              </template>
            </v-textarea>
          </v-col>
          <br><br><br>
          <v-radio-group v-model="row" row>
            <h3>الأولوية:</h3>
            <v-radio label="مهم جدا" value="radio-1"></v-radio>
            <v-radio label=" مهم" value="radio-2"></v-radio>
            <v-radio label=" عادي" value="radio-2"></v-radio>
          </v-radio-group>
        </base-material-card>
      </v-col>
    </v-row>

    <v-row>
      <v-card-actions>
        <v-btn @click="CreateTask" large color="primary">
          <h3>إضافة</h3>
        </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn @click="CreateTask" large color="primary">
          <h3>إغلاق</h3>
        </v-btn>
      </v-card-actions>
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
    close() {}
  }
};
</script>