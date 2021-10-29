<template>
  <v-app id="home-layout">
    <transition mode="out-in">
     
    </transition>
  </v-app>
</template>


<script>
import vuetify from '@/plugins/vuetify'

  export default {
    name: 'PageLayout',

    components: {

    },

    data: () => ({
      expandOnHover: false, 
    }),
  }
</script>
<style lang="scss">
@import "@/styles/index.scss";
/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>

