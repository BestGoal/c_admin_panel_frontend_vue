<template>
  <v-container id="dashboard" fluid tag="section">
    <!-- <EditTaskDialog/> -->
    <EmpCheckList />

    <v-row justify="center">
      <v-col cols="12" md="11">
      <v-row>
      <v-col cols="12" md="3" style="float:right">
        <v-text-field class="mx-4" flat hide-details label="بحث.." append-icon="mdi-magnify">
          <input v-model="searchKey" id="input-13" type="text" />
        </v-text-field>
      </v-col>
      </v-row>
      <v-col cols="12" md="12">
        <base-material-card title="المهام الواردة">
          <template>
            <v-tabs background-color="transparent" slider-color="white">
              <v-tab class="mr-3">
                <v-badge color="green" content="0"></v-badge>
                <v-icon class="mr-2">mdi-email</v-icon>المهام العاجلة
              </v-tab>
              <v-tab-item>
                <v-card-text>
                  <v-data-table :headers="getTableHeaders" :items="doTasks" :items-per-page="5">
                    <template #item.actions="{item}">
                      <Actions :task="item" />
                    </template>
                  </v-data-table>
                </v-card-text>
              </v-tab-item>
              <v-tab class="mr-3">
                <v-badge color="green" content="0"></v-badge>
                <v-icon class="mr-2">mdi-email</v-icon>المهام المقررة
              </v-tab>
              <v-tab-item>
                <v-card-text>
                  <v-data-table :headers="getTableHeaders" :items="doTasks" :items-per-page="5">
                    <template #item.actions="{item}">
                      <Actions :task="item" />
                    </template>
                  </v-data-table>
                </v-card-text>
              </v-tab-item>
              <v-tab>
                <v-badge color="green" content="0"></v-badge>
                <v-icon class="mr-2">mdi-email</v-icon>المهام المعلقة
              </v-tab>
              <v-tab-item>
                <v-card-text>
                  <v-data-table :headers="getTableHeaders" :items="doTasks" :items-per-page="5">
                    <template #item.actions="{item}">
                      <Actions :task="item" />
                    </template>
                  </v-data-table>
                </v-card-text>
              </v-tab-item>
              <v-tab>
                <v-badge color="green" content="0"></v-badge>
                <v-icon class="mr-2">mdi-email</v-icon>المهام المنتهية
              </v-tab>
              <v-tab-item>
                <v-card-text>
                  <v-data-table :headers="getTableHeaders" :items="doTasks" :items-per-page="5">
                    <template #item.actions="{item}">
                      <Actions :task="item" />
                    </template>
                  </v-data-table>
                </v-card-text>
              </v-tab-item>
            </v-tabs>
          </template>
        </base-material-card>
      </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Actions from "./TaskActions";
import EditTaskDialog from "./EditTaskDialog";
import EmpCheckList from "./../../employees/EmployeeCheckList";

export default {
  name: "DashboardDashboard",
  components: {
    Actions,
    EditTaskDialog,
    EmpCheckList
  },
  data() {
    return {
      doTasks: [],
      delegatedTasks: [],
      deletedTasks: [],
      decideTasks: []
    };
  },
  watch: {
    searchKey: function() {
      this.$store.dispatch("apt/setKey", this.searchKey);
    }
  },
  methods: {
    ...mapActions("tasks", ["fetchTasks"])
  },
  computed: {
    ...mapGetters("tasks", ["getTaskByExpersion", "getTableHeaders"])
  },
  mounted() {
    this.doTasks = this.getTaskByExpersion(
      task => task.urgent == 1 && task.importance == 1
    );
    this.delegatedTasks = this.getTaskByExpersion(
      task => task.urgent == 1 && task.importance == 2
    );
    this.decideTasks = this.getTaskByExpersion(
      task => task.urgent == 2 && task.importance == 1
    );
    this.deletedTasks = this.getTaskByExpersion(
      task => task.urgent == 2 && task.importance == 2
    );
  },
  created() {
    this.fetchTasks();
  }
};
</script>
