<template>
  <v-row justify="center">
    <v-col cols="12" md="11">
      <base-material-card color="primary" title="إضافة APT">
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-form v-model="valid">
              <v-row style=" border-up: 15px solid #ffffff">
                <v-col cols="12" md="5">
                  <v-text-field
                    v-model="apt2.name"
                    label="أسم المجموعة"
                    counter="50"
                    :rules="[required('المجموعة'), minLength('المجموعة',4) , maxLength('المجموعة', 50)]"
                  />
                </v-col>

                <v-col cols="12" md="2">
                  <v-menu
                    v-model="apt2.menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="apt2.date"
                        label="التاريخ"
                        prepend-icon="mdi-calendar-blank"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="apt2.date" @input="apt.menu2 = false"></v-date-picker>
                    <v-spacer></v-spacer>
                  </v-menu>
                </v-col>

              </v-row>
              <v-row>
                <v-tabs
                  background-color="primary"
                  style="float:left;border-bottom: 3px solid #ece9e9;margin-left:10px; margin-right:10px; border-radius:5px;"
                  next-icon="mdi-text-box-plus-outline"
                >
                  <v-tab>
                    <h3 style="color:white; ">ملخص</h3>
                  </v-tab>
                  <v-tab-item>
                    <AptAddAbstract />
                    <v-flex style="margin-left:10px">
                      <div v-if="team.length">
                        <v-timeline dense>
                          <v-timeline-item
                            v-for="index in GetContent"
                            :key="index.contentString"
                            color="green "
                            icon="mdi-text-box-plus-outline"
                            small
                          >
                            <v-card class="elevation-2">
                              <div style="margin-left:10px;margin-right:10px;">
                                <v-icon color="green">mdi-account</v-icon>مستخدم1234
                                <p style="color:selver lighten-2; float:left; ">
                                  <v-icon color="green">mdi-calendar-range</v-icon>
                                  {{apt2.date}}
                                </p>
                              </div>
                              <v-card-text>
                                <div class="subheading">
                                  <p v-html="index.contentString"></p>
                                </div>
                                <div class="content-view" ref="contentContainer"></div>
                              </v-card-text>
                            </v-card>
                          </v-timeline-item>
                        </v-timeline>
                      </div>

                      <div v-else>
                        <div class="subheading">
                          <p>لا يوجد ملخص</p>
                        </div>
                      </div>
                    </v-flex>
                  </v-tab-item>
                  <v-tab>
                    <h3 style="color:white;">معرف</h3>
                  </v-tab>
                  <v-tab-item>
                    <signature />
                    <v-flex style="margin-left:10px">
                      <div v-if="team.length">
                        <v-timeline dense>
                          <v-timeline-item
                            v-for="index in getAptThreatSign"
                            :key="index.name"
                            color="red lighten-2"
                            icon="mdi-text-box-plus-outline"
                            small
                          >
                            <v-card class="elevation-2">
                              <div style="margin-left:10px;margin-right:10px;">
                                <v-icon color="green">mdi-account</v-icon>مستخدم1234
                                <p style="color:selver lighten-2; float:left; ">
                                  <v-icon color="green">mdi-calendar-range</v-icon>
                                  {{apt2.date}}
                                </p>
                              </div>
                              <v-card-text>
                                <div class="subheading">
                                  <p v-html="index.name"></p>
                                </div>
                                <div class="content-view" ref="contentContainer"></div>
                              </v-card-text>
                            </v-card>
                          </v-timeline-item>
                        </v-timeline>
                      </div>

                      <div v-else>
                        <div class="subheading">
                          <p>لا يوجد بصمة</p>
                        </div>
                      </div>
                    </v-flex>
                  </v-tab-item>
                </v-tabs>
              </v-row>
            </v-form>
          </v-col>

          <v-col cols="12" md="4" style="float:left; border-right: 3px solid #ece9e9">
            <div>
              <v-expansion-panels v-model="panel" :disabled="disabled" multiple>
                <v-expansion-panel >
                  <v-expansion-panel-header>
                    <h3>أسماء اخرى</h3>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <altername />
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3>دول المنشأ</h3>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <newCountries />
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3>الدول المستهدفة</h3>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <targeted />
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3>المرفقات</h3>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <FilePond />
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </v-col>
        </v-row>
        <v-row>

          <v-dialog v-model="dialog" persistent max-width="300">
            <template v-slot:activator="{ on }">
              <v-btn class="ma-2" color="success" @click="AddDetails2" :disabled="!valid" v-on="on">
                <v-icon left>mdi-checkbox-marked-circle-outline</v-icon>
                <h3>حفظ</h3>
              </v-btn>
            </template>

            <v-card >
              <v-img src=".\success.gif" style="width:50%; margin-right:80px "></v-img>
              <h3 style="margin-right:125px">تم الحفظ</h3>
              <v-btn color="green" text @click="done()">تم</v-btn>
            </v-card>

          </v-dialog>




          <v-btn class="ma-2" @click="clear">
            <v-icon left>mdi-close-circle-outline</v-icon>
            <h3>إلغاء</h3>
          </v-btn>
        </v-row>
      </base-material-card>
    </v-col>
  </v-row>
</template>

<script>
import altername from "./AlterNames";
import newCountries from "./Countries";
import targeted from "./Targeted";
import signature from "./ThreatSignature";
import { mapActions, mapGetters, mapState } from "vuex";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import FilePond from "./../attachment";
import AptAddAbstract from "./AptAddAbstract";

export default {
  components: {
    altername,
    newCountries,
    targeted,
    signature,
    FilePond,
    AptAddAbstract
  },
  data() {
    return {
      dialog: false,
      content: "",
      response: "",
      team: [
        { name: "John", role: "Developer" },
        { name: "Ali", role: "Programmer" }
      ],

      // make arrow function
      // if v is a (textfeild) and v.length is > 0 then passess, otherwise ||
      // generic required function
      valid: false,
      required(propertyType) {
        return v => (v && v.length > 0) || `ادخل اسم  ${propertyType}`;
      },
      minLength(propertyType, minLength) {
        return v =>
          (v && v.length >= minLength) ||
          `${propertyType} يجب أن تكون أكثر من ${minLength} أحرف`;
      },
      maxLength(propertyType, maxLength) {
        return v =>
          (v && v.length <= maxLength) ||
          `${propertyType} يجب أن تكون أقل من ${maxLength} أحرف`;
      },

      date: "",

      apt2: {
        name: this.getGroup,
        id: "",
        country: "",
        //date: "",
        date: new Date().toISOString().substr(0, 10),
        menu2: false,
        countries: [],
        alter_name: [],
        targeted: [],
        threatSignature: []
      },


      altername: { serial: 0, name: "" },
      targeted: {
        id: "",
        name: "",
        contenant: "",
        status: { title: "", id: "" }
      },
      panel: [0, 1, 2, 3],
      disabled: false
    };
  },
  computed: {
    ...mapGetters("apt", [
      "GetContent",
      "getAptThreatSign",
      "getApt",
      "getGroup"
    ]),
    ...mapState("apt", ["apt"])
  },
  methods: {
    ...mapActions("apt", ["AddGroup", "save"]),
    ...mapActions("country", ["fetchCountries"]),
    ...mapActions("attachment", ["setAttachmentDetials"]),

    AddDetails2() {
      this.getApt.name = this.apt2.name;
      this.save(this.getApt);
    },
    clear() {
      window.location.reload();
    },
    done(){
      this.$router.push("SearchAPT")
    this.dialog = false;
    }
  },
  created() {
    this.fetchCountries();
  }
};
</script>
