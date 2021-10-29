<template>
  <v-row justify="center">
    <v-col cols="12" md="11">
      <v-form>
        <v-row>
            <h1><Span>اسم المجموعة : </Span> {{ selectedApt.name }} </h1>
        </v-row>
      </v-form>

      <v-row>
        <v-col cols="12" md="8">

                <v-tabs background-color="green" style="float:left;border-bottom: 3px solid #ece9e9">
                  <v-tab :disabled="!valid"><h3 style="color:white;">ملخص </h3></v-tab>
                  <v-tab-item >
                    <v-flex>
                      <div v-if="selectedApt.contents">
                        <v-timeline :reverse="reverse" dense>
                          <v-timeline-item
                            v-for="index in selectedApt.contents"
                            :key="index.contentString"
                            color="green lighten-2"
                            midum
                          >
                            <template v-slot:opposite>
                              <span></span>
                            </template>
                            <v-card class="elevation-2">

                              <p style="color:selver lighten-2;">تاريخ :</p>
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
                  <v-tab :disabled="!valid"><h3 style="color:white;">معرف </h3></v-tab>
                  <v-tab-item>
                     <v-flex>
                <div v-if="selectedApt.threatSignatures.length">
                  <v-timeline :reverse="reverse" dense>
                    <v-timeline-item
                      v-for="index in selectedApt.threatSignatures"
                      :key="index.name"
                      color="red lighten-2"
                      midum
                    >
                      <template v-slot:opposite>
                        <span></span>
                      </template>
                      <v-card class="elevation-2">
                        <p style="color:selver lighten-2;">تاريخ :</p>
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


        </v-col>

         <v-col cols="12" md="4" style="float:left; border-right: 3px solid #ece9e9">
            <div>
              <v-expansion-panels v-model="panel" :disabled="disabled" multiple>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3>أسماء اخرى</h3>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card
                        class="mx-auto"
                        max-width="300"
                        tile
                      >
                      <v-list disabled>
                        <v-list-item-group color="primary">
                          <v-list-item
                            v-for="(name, i) in selectedApt.alternativeNames"
                            :key="i"
                          >
                            <v-list-item-icon>
                              <v-icon light>mdi-account</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                              <v-list-item-title v-text="name.name"></v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list-item-group>
                      </v-list>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3>الدول</h3>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                      <v-card
                        class="mx-auto"
                        max-width="300"
                        tile
                        >
                        <v-list two-line disabled>
                          <v-list-item-group color="primary">
                            <v-list-item
                              v-for="(country, i) in selectedApt.originCountries"
                              :key="i"
                            >

                            <v-list-item-avatar>
                              <v-icon>mdi-flag</v-icon>
                            </v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title v-text="country.countryName"></v-list-item-title>
                                <v-list-item-subtitle v-text="country.contenant"></v-list-item-subtitle>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list-item-group>
                        </v-list>
                      </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3>الدول المستهدفة</h3>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                        <v-card
                        class="mx-auto"
                        max-width="300"
                        tile
                         >
                        <v-list two-line disabled>
                          <v-list-item-group color="primary">
                            <v-list-item
                              v-for="(country, i) in selectedApt.targetedCountries"
                              :key="i"
                              >
                            <v-list-item-avatar>
                              <v-icon>mdi-flag</v-icon>
                            </v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title v-text="country.countryName"></v-list-item-title>
                                <v-list-item-subtitle v-text="country.contenant"></v-list-item-subtitle>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list-item-group>
                        </v-list>
                      </v-card>
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
    </v-col>
  </v-row>
</template>

<script>

import { mapActions, mapGetters } from "vuex";
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import FilePond from './../attachment'


export default {
  components: {
    FilePond,
  },
  data() {
    return {
      disabled: false,
      valid: true,
      panel: [0, 1, 2, 3],
      content: '',
      response : "",
      alterheaders: [{ text: "الإسم", value: "name" }],
      myheaders: [
        { text: "القارة", value: "contenant" },
        { text: "الدولة", value: "countryName" },
      ] ,

    };
  },
  computed: {
    ...mapGetters("apt", ["selectedApt"]),
  },
  methods: {

  }
};
</script>
