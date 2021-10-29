<template>
  <v-container
    id="user-22222"
    fluid
    tag="section"
   >


    <v-row justify="center">
      <v-col
        cols="12"
        md="11"
      >  
      </v-col>

      <v-col
        cols="12"
        md="4"
      >
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col
        cols="12"
        md="11"
        >
            <base-material-card
      icon="mdi-clipboard-text"
      title="APT Groups"
      class="px-5 py-3"
     >

     
              <v-row>
                <v-col cols="12" md="3">
                  <v-text-field
                  v-model="apt.name"
                    label="APT Name" />
                </v-col>

                </v-row>

                <v-row>


                <v-col cols="12" md="6">

                <AddSignature/></v-col>

                <v-col cols="12" md="6">
                <AlterName/>
                </v-col>
                <v-col cols="12" md="6">
                <Countries/>
                </v-col>
                <v-col cols="12" md="6">
                <Targeted/>
                </v-col>

                </v-row>
            
              <v-row justify="center">
                <v-col cols="12" md="8" class="text-center">
                
                  <v-btn 
                    x-large
                    color="success"
                    class="mr-0"
                    @click="sendData"
                  >
                    Add APT
                  </v-btn>
                </v-col>
              </v-row>

     </base-material-card>



      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import AddSignature from './AddSignature';
import AlterName from './AlterNames';
import Countries from './Countries';
import Targeted from './Targeted';

  export default {
    components: {
      AddSignature,
      AlterName,
      Countries,
      Targeted
    },
    data () {
      return {  
        
         apt : {
          name : "",
          id : "",
          countries : [],
          alter_name : [],
          targeted : [],
          threatSignature : []
        },

        altername: { serial : 0, name : "" },
        targeted: {id : "", name : "", contenant : "", status : { title : "", id : ""}},
        threatSignature: { serial : 0,name : "", domain : "" },
        country: {id : "", name : "", contenant : "", status : { title : "", id : ""}} 
 
      }

    },computed: {
  sectors() {
    return [
      { code: '1', label: 'CDC' },
      { code: '2', label: '19' },
      { code: '3', label: '20' }
    ]
  }, sections() {
    return [
      { code: '1', label: 'HR Development' },
      { code: '2', label: 'Testing' },
      { code: '3', label: 'Programming' }
    ]
  },
},
    methods: {
            sendData () {
                this.$http.post("http://localhost:8080/api/Departments", this.department , { headers: { "content-type": "application/json;" } }).then(result => {
                  this.response  = result.body;
                   this.departments.push({
                  id :result.body.id,
                  weight: result.body.weight,
                  section:result.body.section,
                  description : result.body.description,
                  title:result.body.title,
                  priority: result.body.priority,
                  createdby:result.body.createdby,
                  createdon:result.body.createdon
              });
                              this.task.title = '';
                this.task.name = '';
                this.task.description = '';
                this.task.weight = '';
                 this.task.priority = '';
                 this.task.section='';
                 this.task.cratedby='';
                 this.task.createdon='';
                                    
                   this.response = result.body.id;
                }, error => {
                    this.response = error
                });
            }
    },mounted(){
      this.$http.get("http://localhost:8080/api/Departments").then(result => {
                this.departments = result.body;
                this.response  = result.body;
            }, error => {
                console.error(error);
            });
    }
  }
</script>
