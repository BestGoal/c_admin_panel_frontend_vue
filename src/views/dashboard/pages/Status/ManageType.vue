<template>
  <v-container id="user-22222" fluid tag="section">
    <!-- Sector Management & Form  -->
    <v-row justify="center">
      <v-col cols="12" md="11" class="text-left" >
        <v-btn color="light green" @click="sectorForm = true"><h3>إدارة الحالات </h3> </v-btn>
        
      </v-col>
    </v-row>
    <SectorForm :status="sectorForm" @close="sectorForm = false" />
    <!-- Organization  -->
    <v-row justify="center">
      <v-col cols="12" md="11">
        <base-material-card
          
          title="إدارة الحالة"
          class="px-5 py-3"
          color="primary"
        >
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
import Orgs from "./ManageStatus";
import SectorForm from "./statusForm/Index";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Orgs,
    SectorForm
  },
  data: () => ({
    sectorForm: false
  }),
  computed: {
    ...mapGetters("StatusStore", ["GetSector"])
  },
  methods: {
    ...mapActions("StatusStore", ["AddSector"])
  }
};
</script>
