<template>
  <v-container id="user-22222" fluid tag="section">
    <base-material-card>
      <template v-slot:heading>

      </template>
      <template>
        <v-row><v-container><v-btn  color="success" class="mr-0" @click="NewTask">مهمة جديدة </v-btn></v-container></v-row>
        <v-row justify="center">
          <v-col cols="12" md="9">
            <v-card>
              <v-container>
                <v-simple-table>
                  <template v-slot:default>
                    <tbody>
                      <tr>
                        <td>ملخص المهة:</td>
                      </tr>
                      <tr>
                        <td>
                          <h3 v-html="getSelectedTask.description"></h3>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-container>
            </v-card>

            <v-card>
          <v-tabs background-color="transparent" slider-color="white">
            <v-tab class="mr-3">
              <v-icon class="mr-2">mdi-email</v-icon>التعليقات
            </v-tab>
            <v-tab-item>
              <v-row justify="center">
                <v-col cols="12" md="11">
                  <v-card>
                    <template v-slot:heading>
                      <div class="display-2 font-weight-light">Comments</div>
                    </template>

                    <v-flex style="margin-left:10px">
                      <div>
                        <v-timeline dense>
                          <v-timeline-item
                            v-for="index in getSelectedTask.comments"
                            :key="index"
                            color="green lighten-2"
                            icon="mdi-text-box-plus-outline"
                            small
                          >
                            <v-card class="elevation-2">
                              <v-card-text>
                                <div class="subheading">
                                  <p v-html="index.commentString"></p>
                                </div>
                                <div class="content-view" ref="contentContainer"></div>
                              </v-card-text>
                            </v-card>
                          </v-timeline-item>
                        </v-timeline>
                      </div>
                    </v-flex>
                  </v-card>
                </v-col>

                <v-col cols="12" md="11">
                  <v-card>
                    <v-textarea
                      v-model="comment.commentString"
                      prepend-icon="mdi-comment"
                      class="mx-2"
                      label="أكتب تعليق هنا"
                      rows="5"
                    ></v-textarea>

                    <v-btn color="success" class="mr-0" @click="addComment">إضافة</v-btn>
                  </v-card>
                </v-col>
              </v-row>
            </v-tab-item>

            <v-tab class="mr-3">
              <v-icon class="mr-2">mdi-email</v-icon>االحادثة المتعلقة
            </v-tab>
            <v-tab-item>


            </v-tab-item>

          </v-tabs>
        </v-card>
          </v-col>

          <v-col cols="12" md="3">
            <v-card>
              <v-container>
                <v-simple-table>
                  <template v-slot:default>
                    <tbody>
                      <tr>
                        <td >العنوان:</td>
                        <td>{{getSelectedTask.title}}</td>
                      </tr>
                      <tr>
                        <td>من:</td>
                        <td>{{getSelectedTask.date}}</td>
                      </tr>
                      <tr>
                        <td>الى:</td>
                        <td>{{getSelectedTask.dueDate}}</td>
                      </tr>
                      <tr>
                        <td>توكيل المهمة الى :</td>
                        <td>{{getSelectedTask.assigned_for.name}}</td>
                      </tr>
                      <tr>
                        <td>الأهمية:</td>
                        <td>{{getSelectedTask.importance}}</td>
                      </tr>
                      <tr>
                        <td>وزن المهمة:</td>
                        <td>{{getSelectedTask.weight}}</td>
                      </tr>
                      <tr>
                        <td>الأولوية:</td>
                        <td>{{getSelectedTask.urgent}}</td>
                      </tr>
                      <tr>
                        <td>الحالة:</td>
                        <td>
                          <!-- <v-select
                            v-model="getSelectedTask.status"
                            :items="getStatus"
                            item-text="label"
                            item-value="label"
                            label="الحالة"
                            dense
                          ></v-select> -->
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-container>
            </v-card>
          </v-col>
        </v-row>

      </template>
    </base-material-card>
  </v-container>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
import card from "./TaskComment";
import NewTask from "./AddTaskDialog";


export default {
  components: {
    card
  },
  data() {
    return {
      newstatus : 0,
      comment: {}
    };
  },
  computed: {
    ...mapState("tasks", ["defaultTask"]),
    ...mapGetters("tasks", ["getSelectedTask"]),
    //...mapGetters("Incidents", ["getSelectedIncident"]),
    //...mapGetters("StatusStore", ["getStatus"])
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "addCommentToTask"]),
    addComment() {
      let submit = Object.assign({}, this.comment);
      this.comment.commentString = "";
      this.addCommentToTask(submit);
      this.updateTask(this.getSelectedTask);
    },
    NewTask(){
      this.$router.push("./AddTaskDialog");

    }
  },
  mounted() {}
};
</script>
