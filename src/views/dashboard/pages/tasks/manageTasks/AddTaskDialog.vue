<template>
  <v-row justify="center">
    <v-col cols="12" md="11">
      <base-material-card title="مهمة جديدة">
        <v-container class="py-0">
          <!-- ****************************************************** -->
          <v-row>
            <v-col cols="12" md="5">
              <v-text-field v-model="defaultTask.title" label="العنوان" />
            </v-col>
            <v-col cols="12" md="2">
              <v-menu
                v-model="defaultTask.menu1"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="defaultTask.date"
                    label="من"
                    prepend-icon="mdi-calendar-blank"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="defaultTask.date" @input="defaultTask.menu1 = false"></v-date-picker>
                <v-spacer></v-spacer>
              </v-menu>
            </v-col>
            <v-col cols="12" md="2">
              <v-menu
                v-model="defaultTask.menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="defaultTask.dueDate"
                    label="الى"
                    prepend-icon="mdi-calendar-blank"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="defaultTask.dueDate" @input="defaultTask.menu2 = false"></v-date-picker>
                <v-spacer></v-spacer>
              </v-menu>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="8">
              <v-card max-width="1200" outlined>
                <v-col cols="12" md="12">
                  <h4>ملخص المهمة</h4>
                  <quill-editor
                    v-model="defaultTask.description"
                    ref="myQuillEditor"
                    :options="editorOption"
                  ></quill-editor>
                </v-col>
              </v-card>
            </v-col>

            <v-col cols="12" md="4">
              <v-card max-width="500" outlined>
                <v-col cols="12" md="12">
                  <v-select
                    v-model="defaultTask.weight"
                    :items="getWhight"
                    item-text="label"
                    item-value="code"
                    label="وزن المهمة"
                  ></v-select>
                </v-col>

                <v-col cols="12" md="12">
                  <v-select
                    v-model="defaultTask.importance"
                    :items="getImportance"
                    item-text="label"
                    item-value="code"
                    label="الأهمية"
                  ></v-select>
                </v-col>

                <v-col cols="12" md="12">
                  <v-select
                    v-model="defaultTask.urgent"
                    :items="getUrgancy"
                    item-text="label"
                    item-value="code"
                    label="الأولوية"
                  ></v-select>
                </v-col>

                <v-col cols="12" md="12">
                  <v-select
                    v-model="defaultTask.assigned_for.id"
                    :items="GetSection"
                    item-text="name"
                    item-value="id"
                    label="توكيل المهمة الى"
                  ></v-select>
                </v-col>
              </v-card>

              <v-card max-width="500" outlined>
                <FilePond />
              </v-card>
            </v-col>
          </v-row>

          <v-dialog v-model="dialog" persistent max-width="300">
            <template v-slot:activator="{ on }">
              <v-btn class="ma-2" color="success" @click="add" v-on="on">
                <v-icon left>mdi-checkbox-marked-circle-outline</v-icon>
                <h3>حفظ</h3>
              </v-btn>
            </template>

            <v-card>
              <v-img src=".\success.gif" style="width:50%; margin-right:80px "></v-img>
              <h3 style="margin-right:125px">تم الحفظ</h3>
              <v-btn color="green" text @click="goback">تم</v-btn>
            </v-card>
          </v-dialog>

          <v-btn class="ma-2" @click="close">
            <v-icon left>mdi-close-circle-outline</v-icon>
            <h3>إلغاء</h3>
          </v-btn>
        </v-container>
      </base-material-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import "quill/dist/quill.snow.css";
import { quillEditor } from "vue-quill-editor";
import FilePond from "../../attachment";
import stringHelper from "../../../../../helpers/stringHelper";

export default {
  components: {
    quillEditor,
    FilePond
  },
  data() {
    return {
      dialog: false,
      editorOption: {
        debug: "ínfo",
        placeholder: "اكنب هنا...",
        readOnly: true,
        theme: "snow"
        //container:[["bold", "image"]]
      },
      defaultTask: {
        id: 3425,
        createdBy : "User1",
        parentTask: null,
        parentIncident : null,
        description: "",
        title: "",
        urgent: 0,
        importance: 0,
        status: { id : 1007 ,StatusString : "pending"},
        assigned_for: { id : 0 , name : "", employees : []},
        weights: 0,
        actions: "",
        date: new Date().toISOString().substr(0, 10),
        menu2: false,
        dueDate: new Date().toISOString().substr(0, 10),
        menu1: false,
      }
    };
  },
  computed: {
    ...mapState("tasks", ["addTaskDialog"]),
    ...mapGetters("departments",["GetSection"]),
    ...mapGetters("tasks", [
      "getWhight",
      "getImportance",
      "getUrgancy",
      "gettasked_for",
      "getsecureType",
      "getSelectedTask"
    ])
  },
  methods: {
    ...mapActions("departments",["fetchSections"]),
    ...mapActions("tasks", ["addTask"]),
    ...mapMutations("tasks", ["setAddTaskDialog"]),
    add() {
      this.defaultTask.parentTask =  this.getSelectedTask;
      this.addTask(this.defaultTask);
    },
    goback() {
      this.$router.push("Tasks");
    },
    close() {
      this.$router.push("Tasks");
    },
    uniqueID(length) {
      let id = "";
      const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
      const _length = length || 8;
      for (let i = 0; i < _length; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return id;
    }
  },created() {
    this.fetchSections();
  }
};
</script>
<style >
.ql-editor {
  height: 56vh;
}
</style>
