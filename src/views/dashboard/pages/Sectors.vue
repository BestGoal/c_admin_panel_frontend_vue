<template>

    <v-row justify="center">
      <v-col
        cols="12"
        md="11"
        >
    <base-material-card
          color="grey"
          class="px-5 py-1"
          title="القطاعات"
        >

     
              <v-row>

                  <v-col
                  cols="12"
                  md="3"
                  >
                  <v-select
                  v-model="Sector.name"
                  :items="Sec"
                  item-text="label"
                  item-value="code"
                  label="القطاع"
                ></v-select>

                </v-col>

                

          

                <v-col cols="12" md="2" class="text-center">
                
                  <v-btn
                    color="grey" class="mr-0" @click="sendData">إضافة</v-btn>
                </v-col>
              </v-row>

              <v-row>

                <v-data-table
                    :headers="getTableHeaders"
                    :items="allTasks"
                    :items-per-page="5"
                    class="elevation-1"
                ></v-data-table>

              </v-row>

     </base-material-card>



      </v-col>
    </v-row>

</template>

<script>
  export default {
    data () {
      return {  
        
         Sector : {
          id : "",
          name : "",
         
          Orgs : []
        },

        
        Orgs: {id : "", name : "",},
        
 
      }

    },computed: {
  Sec() {
    return [
      { code: '1', label: 'قطاع 1' },
      {code: '2', label: 'قطاغ 2'},
      { code: '3', label: 'قطاع 3' },
      { code: '4', label: 'قطاع 4' }
      
    ]
  }, 
  
},
    methods: {
            sendData () {
                this.$http.post("http://localhost:8080/api/AddOrg", this.AddOrg , { headers: { "content-type": "application/json;" } }).then(result => {
                  this.response  = result.body;
                   this.AddOrg.push({
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
      this.$http.get("http://localhost:8080/api/AddOrg").then(result => {
                this.AddOrg = result.body;
                this.response  = result.body;
            }, error => {
                console.error(error);
            });
    }
  }
</script>
