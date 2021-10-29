<template>
  <v-container id="user-22222" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="11"></v-col>

      <v-col cols="12" md="4"></v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="11">
        <base-material-card
          icon="mdi-clipboard-text"
          title=" إضافة مؤسسة "
          class="px-5 py-3"
          color="grey darken-3"
        >
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="sector.secname" label="القطاع" clearable />
            </v-col>

            <v-col cols="12" md="4" class="text-center">
              <v-card-actions>
                <v-btn class="mx-2" fab dark color="teal" @click="sendData">
                  <v-icon dark>mdi-plus</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-list>
                <v-list-item v-for="item in GetSector" :key="item.sid" @click="sendData">
                  <v-list-item-content>
                    <v-list-item-title v-text="item.secname"></v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn>salim</v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="12">
              <Orgs />
            </v-col>
          </v-row>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Orgs from "./ManageOrgs";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Orgs
  },

  data() {
    return {
      sector: {
        sid: 0,
        secname: "",
        orgs: []
      }
    };
  },
  computed: {
    ...mapGetters("organization", ["GetSector"])
  },

  methods: {
    ...mapActions("organization", ["AddSector"]),
    sendData() {
      this.AddSector(Object.assign({}, this.sector));
    }
  },
  mounted() {}
};
</script>
