<template>
  <v-container id="dashboard" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="11">
        <v-card >
          <template>
            <v-tabs background-color="transparent" slider-color="white">
              <v-tab class="mr-3">
                <v-icon class="mr-2">mdi-comment-text</v-icon>requests 
              </v-tab>
              <v-tab-item>
              <DisplayId/>
              </v-tab-item>

              <v-tab class="mr-3">
                <v-icon class="mr-2">mdi-comment-question</v-icon>new request 
              </v-tab>
              <v-tab-item>
                <v-card-text>
                  <RequestId/>
                </v-card-text>
              </v-tab-item>

              <v-tab class="mr-3">
               
                <v-icon class="mr-2">mdi-comment-processing</v-icon>soc
              </v-tab>
              <v-tab-item>
                <v-card-text>
                  <Soc/>
                </v-card-text>
              </v-tab-item>

              <v-tab-item>
                <v-card-text></v-card-text>
              </v-tab-item>
            </v-tabs>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RequestId from "./RequestId";
import DisplayId from "./DisplayId";
import Soc from "./Soc";
import Notification from "./Notification";

export default {
  components: {
    RequestId,
    DisplayId,
    Soc,
    Notification
  },
  data() {
    return{};
  }
};
</script>
