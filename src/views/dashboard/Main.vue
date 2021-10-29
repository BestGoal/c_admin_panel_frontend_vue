<template>
  <v-app>
    <login-core-view/>
  </v-app>
</template>

<script>
  export default {
    name: 'DashboardIndex',

    components: {
      LoginCoreView: () => import('./components/core/LoginView'),
    },

    data: () => ({
      expandOnHover: false,
    }),
  }
</script>
