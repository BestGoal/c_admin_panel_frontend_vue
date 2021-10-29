<template>
  <v-container id="user-22222" fluid tag="section">
    <!-- Sector Management & Form  -->
    <v-row justify="center">
      <v-col cols="12" md="11" class="text-left" >
        <v-btn color="primary" @click="sectorForm = true"><h3>ادارة القطاعات </h3> </v-btn>
        
      </v-col>
    </v-row>
    <SectorForm :status="sectorForm" @close="sectorForm = false" />
    <!-- Organization  -->
    <v-row justify="center">
      <v-col cols="12" md="11">
        <base-material-card
          
          title="إدارة المؤسسات"
          
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
import Orgs from "./ManageOrgs";
import SectorForm from "./SectorForm/Index";
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
    ...mapGetters("organization", ["GetSector"])
  },
  methods: {
    ...mapActions("organization", ["fetchOrganizations","fetchSectors"])
  },

  created(){

this.fetchOrganizations();
this.fetchSectors();
  }
};
</script>
