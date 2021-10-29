<template>
  <v-container id="user-22222" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="11">
        <v-col cols="12" md="3" style="float:right">
          <v-text-field class="mx-4" flat hide-details label="بحث.." append-icon="mdi-magnify">
            <input v-model="searchKey" id="input-13" type="text" />
          </v-text-field>
        </v-col>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-col cols="12" md="1" style="float:left">
              <v-btn @click="onAddTask" fab x-small color="green" v-on="on">
                <v-icon light>mdi-plus</v-icon>
              </v-btn>
            </v-col>
          </template>
          <span>إضافة مهمة جديدة</span>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="11">
        <base-material-card title="كل المهام">
          <v-data-table
            :headers="getTableHeaders"
            :items="getTasks"
            @click:row="viewDetails"
            :items-per-page="5"
            class="elevation-1"
          >
          </v-data-table>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
import AddTaskDialog from "./AddTaskDialog";
import EditTaskDialog from "./EditTaskDialog";
import Actions from "./TaskActions";


export default {
  components: {
    AddTaskDialog

  },
  data() {
    return {
      searchKey: "",
      dialog: false,
      statusByUser: "",
      AddStatus: false,

      status:""

    };

  },
  watch: {
    searchKey: function() {
      this.$store.dispatch("apt/setKey", this.searchKey);
    }
  },
  computed: {
    ...mapState("tasks", ["tasks"]),
    ...mapGetters("tasks", ["allTasks", "getTableHeaders", "taskById"]),
    ...mapGetters("tasks", ["getWhight","getImportance","getUrgancy","getSelectedTask","getstatus"]),
    getTasks() {
      return this.allTasks.map(task => {
        return {
          title : task.title,
          id: task.id,
          status:task.status.statusString,
          assignd:task.assigned_for.name,
          urgent :task.urgent == 1 ? "important" : "not Important"
        };
      });
    }
  },
  methods: {
    ...mapActions("tasks", ["fetchTasks", "addTask", "changStatus","editstatus"]),
    ...mapMutations("tasks", ["setAddTaskDialog","setSelectedTask"]),

    sendData() {
      this.addTask(this.task);
    },
    onAddTask() {
      // this.setAddTaskDialog(true);
      this.$router.push("AddTaskDialog");
    },
    viewDetails(item) {
      let task = this.allTasks.find(t => t.id == item.id);
      this.$store.dispatch("tasks/setSelecteTask",task)
      this.$router.push("TaskDetails");
    },

    addStatus(item_id) {
      this.dialog = false;
    }
  },
  mounted() {},
  created() {
    this.fetchTasks();
  },
};
</script>
