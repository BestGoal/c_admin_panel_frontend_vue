<template>
  <v-row justify="center">
    <v-col cols="12" md="11">
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="apt.name" label="Group Name" />
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="apt.name" label="Country" />
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="apt.name" label="Date" />
        </v-col>

        <v-row>
          <v-col cols="12" md="3">
            <v-btn color="blue-grey lighten-1" class="mr-0" @click="sendData">Add Details</v-btn>
          </v-col>

          <v-col cols="12" md="3">
            <v-btn color="blue-grey lighten-1" class="mr-0" @click="sendData">Add Domain</v-btn>
          </v-col>
        </v-row>
      </v-row>

      <v-row>
        <v-col cols="12" md="9">
          <v-card max-width="1000" class="mx-auto">
            <v-system-bar color="blue-grey lighten-1" dark>
              <v-spacer></v-spacer>

              <v-icon>mdi-close</v-icon>
            </v-system-bar>

            <v-app-bar dark color="blue-grey lighten-1">
              <v-toolbar-title>Details 1</v-toolbar-title>
            </v-app-bar>

            <v-container>
              <v-row dense>
                <v-col cols="12">
                  <v-card>
                    <v-card-subtitle>Some details about any APT groups Attack that recently happened</v-card-subtitle>

                    <v-card-actions>
                      <v-btn text>Learn more</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card max-width="1000" class="mx-auto">
            <v-system-bar color="blue-grey lighten-1" dark>
              <v-spacer></v-spacer>

              <v-icon>mdi-close</v-icon>
            </v-system-bar>

            <v-app-bar dark color="blue-grey lighten-1">
              <v-toolbar-title>Alternative Names</v-toolbar-title>
            </v-app-bar>

            <v-container>
              <v-row dense>
                <v-col cols="12">
                  <v-card>
                    <v-card-subtitle>Some details about any APT groups Attack that recently happened</v-card-subtitle>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="9">
          <v-card max-width="1000" class="mx-auto">
            <v-system-bar color="blue-grey lighten-1" dark>
              <v-spacer></v-spacer>

              <v-icon>mdi-close</v-icon>
            </v-system-bar>

            <v-app-bar dark color="blue-grey lighten-1">
              <v-toolbar-title>Details 2</v-toolbar-title>
            </v-app-bar>

            <v-container>
              <v-row dense>
                <v-col cols="12">
                  <v-card>
                    <v-card-subtitle>Some details about any APT groups Attack that recently happened</v-card-subtitle>

                    <v-card-actions>
                      <v-btn text>Learn more</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card max-width="1000" class="mx-auto">
            <v-system-bar color="blue-grey lighten-1" dark>
              <v-spacer></v-spacer>

              <v-icon>mdi-close</v-icon>
            </v-system-bar>

            <v-app-bar dark color="blue-grey lighten-1">
              <v-toolbar-title>Countries</v-toolbar-title>
            </v-app-bar>

            <v-container>
              <v-row dense>
                <v-col cols="12">
                  <v-card>
                    <v-card-subtitle>Some details about any APT groups Attack that recently happened</v-card-subtitle>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="9">
          <v-card max-width="1000" class="mx-auto">
            <v-system-bar color="blue-grey lighten-1" dark>
              <v-spacer></v-spacer>

              <v-icon>mdi-close</v-icon>
            </v-system-bar>

            <v-app-bar dark color="blue-grey lighten-1">
              <v-toolbar-title>Domain</v-toolbar-title>
            </v-app-bar>

            <v-container>
              <v-row dense>
                <v-col cols="12">
                  <v-card>
                    <v-card-subtitle>Some details about any APT groups Attack that recently happened</v-card-subtitle>

                    <v-card-actions>
                      <v-btn text>Learn more</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card max-width="1000" class="mx-auto">
            <v-system-bar color="blue-grey lighten-1" dark>
              <v-spacer></v-spacer>

              <v-icon>mdi-close</v-icon>
            </v-system-bar>

            <v-app-bar dark color="blue-grey lighten-1">
              <v-toolbar-title>Targeted</v-toolbar-title>
            </v-app-bar>

            <v-container>
              <v-row dense>
                <v-col cols="12">
                  <v-card>
                    <v-card-subtitle>Some details about any APT groups Attack that recently happened</v-card-subtitle>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      apt: {
        name: "",
        id: "",
        country: "",
        date: "",
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
      threatSignature: { serial: 0, name: "", domain: "" },
      country: {
        id: "",
        name: "",
        contenant: "",
        status: { title: "", id: "" }
      }
    };
  },
  computed: {
    sectors() {
      return [
        { code: "1", label: "CDC" },
        { code: "2", label: "19" },
        { code: "3", label: "20" }
      ];
    },
    sections() {
      return [
        { code: "1", label: "HR Development" },
        { code: "2", label: "Testing" },
        { code: "3", label: "Programming" }
      ];
    }
  },
  methods: {
    sendData() {

    }
  },
  mounted() {

  }
};
</script>
