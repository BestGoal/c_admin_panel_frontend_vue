<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="barImage"
    mobile-break-point="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img
        :gradient="`to bottom, ${barColor}`"
        v-bind="props"
      />
    </template>

    <v-divider class="mb-1" />

    <v-list
      dense
      nav
    >
      <v-list-item>

        <v-list-item-avatar
          class="align-self-center"
          color="white"
          contain

        >

          <v-img
            max-height="30"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title
            class="display-1"
          />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    <v-list
      expand
      nav
    >
      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />

      <template v-for="(item, i) in computedItems">
        <base-item-group
          v-if="item.children"
          :key="`group-${i}`"
          :item="item"
        >
          <!--  -->
        </base-item-group>

        <base-item
          v-else
          :key="`item-${i}`"
          :item="item"
        />
      </template>

      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />
    </v-list>

  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'DashboardCoreDrawer',
    props: {
      expandOnHover: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      items: [
       {

          icon: 'mdi-account',
          title: 'لوحة التحكم',
          to: '/Dashboard',
        },

        {

          icon: 'mdi-shield-outline',
          title: 'إدارة الحوادث',
          to: '/dashboard/pages/Incidents/DisplayIncidents',
        },
        // {
        //   icon: 'mdi-account',
        //   title: 'إدارة المستخدمين',
        //   to: '/dashboard/pages/user',
        // },

        {
          icon: 'mdi-archive',
          title: 'استعراض (APT)',
          to: '/dashboard/pages/APT/SearchAPT',
        },

        {
          icon: 'mdi-server',
          title: ' إدارة المؤسسات',
          to: '/dashboard/pages/Orgs_Sectors/Org_Sec_management',
        },
        {
          icon: 'mdi-text-box-check',
          title: 'إدارة المهام',
          to: '/dashboard/pages/tasks/manageTasks/Tasks',
        },
        {
          icon: 'mdi-inbox-arrow-down-outline',
          title: 'الوارد',
          to: '/dashboard/pages/tasks/EmployeeTask',
        },
        {
          icon: 'mdi-clock',
          title: 'إدارة الحالة',
          to: '/dashboard/pages/Status/Index_1',
        },
               {
          icon: 'mdi-account-multiple-plus-outline',
          title: 'إدارة الأقسام',
          to: '/dashboard/pages/EmpDepartment/Index_2',
        },
         {
          icon: 'mdi-account-multiple-plus-outline',
          title: 'نظام التعرفة',
          to: '/dashboard/pages/RequsetId/viewMain',
        },

      ],
    }),

    computed: {
      ...mapState(['barColor', 'barImage']),
      drawer: {
        get () {
          return this.$store.state.settings.drawer
        },
        set (val) {

           this.$store.commit('settings/SET_DRAWER', val)
        },
      },
      computedItems () {
        return this.items.map(this.mapItem)
      },
      profile () {
        return {
          avatar: true,
          title: this.$t('avatar'),
        }
      },
    },

    methods: {
      mapItem (item) {
        return {
          ...item,
          children: item.children ? item.children.map(this.mapItem) : undefined,
          title: this.$t(item.title),
        }
      },
    },
  }
</script>

<style lang="sass">
  @import '~vuetify/src/styles/tools/_rtl.sass'

  #core-navigation-drawer
    .v-list-group__header.v-list-item--active:before
      opacity: .24

    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px

        +ltr()
          margin-right: 24px
          margin-left: 12px !important

        +rtl()
          margin-left: 24px
          margin-right: 12px !important

    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .v-list-group--sub-group
      .v-list-item
        +ltr()
          padding-left: 8px

        +rtl()
          padding-right: 8px

      .v-list-group__header
        +ltr()
          padding-right: 0

        +rtl()
          padding-right: 0

        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
            margin-right: 8px

          +rtl()
            margin-left: 8px
</style>
