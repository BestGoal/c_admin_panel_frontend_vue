<template>
  <v-container
    id="user-22222"
    fluid
    tag="section"
   >


    <v-row justify="center">
      <v-col
        cols="12"
        md="6"
        >
            <base-material-card
      icon="mdi-clipboard-text"
      title="Login"
      class="px-5 py-3"
     >


              <v-row  justify="center">
                <v-col
                  cols="12"
                  md="5"
                  >
                  <v-text-field
                  v-model="Employee.id"
                    label="ID"
                  />
                </v-col>

                </v-row>
                <v-row  justify="center">
                <v-col
                  cols="12"
                  md="5"
                  >
                  <v-text-field
                    v-model="Employee.password"
                    class="purple-input"
                    label="Password"
                    type="password"
                  />
                </v-col>

                </v-row>
                <v-row  justify="center">

                <v-col
                  cols="12"
                  md="5"
                  class="text-center"
                >
                  <v-btn
                    color="success"
                    class="mr-0"
                    @click="lgogogogogogo"
                  >
                   Login
                  </v-btn>
                </v-col>
              </v-row>


     </base-material-card>



      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
  export default {
    name: 'LoginCoreView',
    data () {
      return {
         Employee  : {
        id: "5e687a7a5e41344570d49835",
        name : "devleloper",
        section: {
            id: null,
            name: "development"
        },
        jobTitle: "title",
        password: "Password",
        role: "employee",
        status: "active"
        },
      }

    },computed: {
      ...mapGetters("employees",['getResponse']) ,

    },
    methods: {
      ...mapMutations("settings",['SET_DRAWER']),
      ...mapActions("employees",['login']),
        lgogogogogogo(){
          this.login(this.Employee);
          this.SET_DRAWER(true);
          this.$router.push("/dashboard");
        }
    },mounted(){

    },created(){
      this.SET_DRAWER(false);
    }
  }
</script>
