import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import i18n from '@/i18n'
import '@/sass/overrides.sass'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const theme = {
  primary: '#4CAF50',
  secondary: '#9C27b0',
  accent: '#9C27b0',
  info: '#00CAE3',
}

export default new Vuetify({
  rtl:true,
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
  icons: {
    iconFont: "mdi"
  },
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
})
