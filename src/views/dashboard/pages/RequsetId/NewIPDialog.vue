<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="3">
                <v-text-field v-model="ip.docmentId" label="رقم الوثيقة" />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field v-model="ip.aptGroup" label="مجموعةالاختراق" />
              </v-col>
              <v-col cols="12" md="4">
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="100px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="ip.date"
                      label="التاريخ"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="ip.date" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-col>

              <v-col cols="12" sm="4">
                <v-menu
                  ref="menu"
                  v-model="menu22"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="ip.time"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="ip.time" label="الوقت" readonly v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="menu22"
                    v-model="ip.time"
                    use-seconds
                    full-width
                    @click:second="$refs.menu.save(ip.time)"
                  ></v-time-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <div class="mb-2">العنوان الإلكتروني الداخلي</div>
            </v-row>
            <v-row>
              <v-col cols="12" md="5">
                <vue-ip :ip="dist" :on-change="checkDistIP" class="ipInput" theme="material" />
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="ip.toPort"
                  label="Outlined"
                  dense
                  placeholder="المنفذ"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
              </v-col>
            </v-row>
            <v-row>
              <div class="mb-2">العنوان الإلكتروني الخارجي</div>
            </v-row>
            <v-row>
              <v-col cols="12" md="5">
                <vue-ip :ip="source" :on-change="checkSourceIP" class="ipInput" theme="material" />
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="ip.fromPort"
                  label="Outlined"
                  dense
                  placeholder="المنفذ"
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" large text @click="saveip">
            <span>حفظ</span>
            <v-icon>mdi-checkbox-marked-circle-outline</v-icon>
          </v-btn>
          <v-btn large color="red darken-1" text @click="closeForm">
            <span>غلق</span>
            <v-icon>mdi-close-circle-outline</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

  import VueIp from "vue-ip";
  import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
  import axios from 'axios';
    export default {
      components : {VueIp},
      name: "NewIPDialog",
      props : ['dialog'],
      data(){
        return {
          source : "",
          dist : "",
          menu22 : false,
          menu2 : false,
          ip: {
            docmentId: "",
            date: new Date().toISOString().substr(0, 10),
            time: new Date().toISOString().substr(11, 8),
            source: "",
            dist: "",
            fromPort: "",
            ownerType : "",
            toPort: "",
            aptGroup: "",
            subsId: "",
            ownerSub: "",
            cid: "",
            phoneNum: "",
          },
        }
      },
      computed: {
        ...mapState(["requsetIds"]),
      },
      methods : {
        ...mapActions("requsetIds", ["add"]),

        checkDistIP(ip, valid) {
          this.ip.dist = ip;
          // console.log("IP Valid", valid);
        },
        checkSourceIP(ip, valid) {
          this.ip.source = ip;
          // console.log("IP Valid", valid);
        },
        closeForm()
        {
          this.dialog = false;
        },
        saveip()
        {
          this.$emit('input',this.ip);
          this.add(this.ip);
          this.ip = {};
          this.source = "";
          this.dist = "";
        }
      }
    }
</script>

<style scoped>

</style>
