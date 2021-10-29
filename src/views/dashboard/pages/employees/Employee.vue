<template>
  <v-container
    id="user-fffff"
    fluid
    tag="section"
   >

   <addEmployeeDialog/>


        <v-row justify="center">
      <v-col
        cols="12"
        md="11"
        >
            <base-material-card
      icon="mdi-clipboard-text"
      title="Employees"
      class="px-5 py-3"
     >
     <v-card-actions>
       <v-btn @click="onAddUser" large color="primary">Add</v-btn>
    </v-card-actions>

     <v-data-table
    :headers="getTableHeaders"
    :items="allEmployees"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>

      
     </base-material-card>



      </v-col>
    </v-row>
  </v-container>

</template>

<script>

import {mapGetters,mapActions, mapMutations, mapState} from 'vuex';
import addEmployeeDialog from './addEmployeeDialog';
  export default {
    components :{
        addEmployeeDialog
    },
    data () {
      return { 
        Employee  : {
          department: "",
          name:"",
          section : '',
          jobTitle : "",
          role : "employee",
          password : "P@ssw0rd",
          username : ""
        }       ,dialog : false, 
      }

    },computed: {
      ...mapGetters("employees",['allEmployees','getTableHeaders','getAddDialogStatus']),},
    methods: {
      ...mapActions("employees",['fetchEmployees','addEmployee']),
      ...mapMutations("employees",['setDialogStatus']),
            sendData () { 
              this.setDialogStatus(!this.getAddDialogStatus)
              //this.addEmployee(this.Employee);
              },onAddUser() {
                this.setDialogStatus(!this.getAddDialogStatus)
              }
            },created (){
              this.fetchEmployees();
            }
  }
</script>
