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

    
{{ this.department.id }}

    <v-row justify="center">
      <v-col
        cols="12"
        md="11"
        >
            <base-material-card
      icon="mdi-clipboard-text"
      title="Departmets"
      class="px-5 py-3"
     >

     
              <v-row>
                <v-col
                  cols="12"
                  md="3"
                  >
                  <v-text-field
                  v-model="department.name"
                    label="Name"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="3"
                  >
                  <v-text-field
                    v-model="department.id"
                    class="purple-input"
                    label="ID Number"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="3"
                  >
                  <v-select
                  v-model="department.sector"
                  :items="sectors"
                  item-text="label"
                  item-value="code"
                  label="Sector"
                ></v-select>

                </v-col>

                <v-col
                  cols="12"
                  md="2"
                  class="text-center"
                >
                  <v-btn
                    color="success"
                    class="mr-0"
                    @click="sendData"
                  >
                    Add Department
                  </v-btn>
                </v-col>
              </v-row>

     <v-data-table
    :headers="headers"
    :items="departments"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>

      
     </base-material-card>



      </v-col>
    </v-row>
  </v-container>

</template>

<script>
  export default {
    data () {
      return { 
        department  : {
          id: "",
          name: "salim",
          sections: [{ name : "section1"}]
}           ,
        response : "ahmed",
        headers: [
          { text: 'ID', value: 'name' },
          { text: 'Name', value: 'name' },
          { text: 'sector', value: 'sector' },
        ],departments : [],
        
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
