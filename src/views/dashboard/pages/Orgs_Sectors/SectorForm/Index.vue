<template>
  <v-dialog v-model="status" persistent max-width="690">
    <v-card>
      <v-card-title class="headline">إدارة القطاعات</v-card-title>
      <!-- Content -->
      <section id="secContManage" class="my-8 pa-8">
        <v-text-field
          @keyup.enter="addNewSector"
          v-model="nameSector"
          placeholder="ادخل اسم القطاع هنا مباشرة"
          solo
        ></v-text-field>
        <v-btn class="ma-2" color="primary" @click="addNewSector" fab>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <!-- load new sectors -->
        <v-chip
          :color="sector.store ? 'primary' : ''"
          class="ma-2"
          v-for="(sector,i) in sectorList"
          :key="`sn${i}`"
          close
          @click:close="deleteSector(i)"
        >{{sector.name}}</v-chip>
      </section>
      <v-card-actions class="justify-center">
        <v-spacer></v-spacer>

        <v-btn color="green darken-1" large text @click="saveNewSectors">
          <span>حفظ</span>
          <v-icon>mdi-checkbox-marked-circle-outline</v-icon>
        </v-btn>
        <v-btn large color="red darken-1" text @click="closeForm">
          <span>غلق</span>
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <!-- Alerts  -->
    <v-snackbar
      top
      v-model="alert.status"
      :color="alert.color"
      :timeout="alert.timeout"
    >{{ alert.txt }}</v-snackbar>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {
    status: {
      required: true
    }
  },
  data: () => ({
    sectorList: [],
    nameSector: null,
    alert: {
      status: false,
      color: null,
      txt: null,
      timeout: 2000
    }
  }),
  computed: {
    ...mapState("organization", ["sectors"])
  },
  watch: {
    status(n) {
      if (n == true) {
        this.sectors.forEach(sector =>
          this.sectorList.push({ ...sector, store: true })
        );
      }
    }
  },
  methods: {
    ...mapActions("organization", ["SaveSectors"]),
    // Add a new Sector
    addNewSector() {
      const nameSector = this.nameSector;
      if (!nameSector || !nameSector.trim())
        return this.statAlert(true, "ادخل اسم القطاع بالشكل الصحيح", "error");
      this.sectorList.push({
        id: Math.round(Math.random() * 999999),
        name: nameSector
      });
      this.nameSector = null;
    },
    // Delete Sector
    deleteSector(index) {
      this.sectorList.splice(index, 1);
    },
    // Alert
    statAlert(status, txt, color) {
      const alert = this.alert;
      alert.status = status;
      alert.txt = txt;
      alert.color = color;
    },
    // Save the new sectors to vuex
    saveNewSectors() {
      this.SaveSectors(this.sectorList);
      this.resetForm();
      this.$emit("close");
    },
    // Close the form and rest changes
    closeForm() {
      this.resetForm();
      this.$emit("close");
    },
    // Reset Form
    resetForm() {
      this.sectorList = [];
      this.nameSector = null;
    }
  }
};
</script>
