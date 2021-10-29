<template>
     <v-row justify="center">
     <v-dialog v-model="addDialog" persistent max-width="800px">
 
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Add Employee
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="2">
                  <v-text-field
                  v-model="Employee.name"
                    label="Name"
                  />
                </v-col>

                <v-col cols="12" md="2">
                  <v-text-field
                    v-model="Employee.username"
                    class="purple-input"
                    label="ID Number"
                  />
                </v-col>

                <v-col cols="12" md="2">
                  <v-text-field
                  v-model="Employee.jobTitle"
                    label="Job Title"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12" md="2">
                  <v-select
                  v-model="Employee.department"
                  :items="getDepartments"
                  item-text="label"
                  item-value="code"
                  label="Department"
                ></v-select>
                </v-col>

                 <v-col cols="12" md="2">
                   <v-select
                  v-model="Employee.section.name"
                  :items="getSection"
                  item-text="label"
                  item-value="code"
                  label="Section"
                ></v-select>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12"  md="3" class="text-center">
                  <v-btn
                    color="success"
                    class="mr-0"
                    @click="add"
                  >
                    Add Employee
                  </v-btn>
                </v-col>
                <v-col cols="12"  md="2" class="text-center">
                  <v-btn
                    color="error"
                    class="mr-0 pa-3"
                    @click="close"
                  >
                   Close
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>

        </base-material-card>


      </v-dialog>
    </v-row>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
    data () {
         return {  Employee  : {
        id: "",
        name : "",
        section: {
            id: null,
            name: ""
        },
        jobTitle: "",
        password: "Password",
        role: "employee",
        status: ""
        },
        }
    },computed: {
        ...mapState("employees",['addDialog']),
        ...mapGetters("employees",['getAddDialogStatus','getSection','getDepartments']),
    },methods: {
        ...mapActions("employees",['addEmployee']),
        ...mapMutations("employees",['setDialogStatus']),
        add(){ 
            this.addEmployee(this.Employee);
            this.setDialogStatus(!this.addDialog);
            },
            close(){
                this.setDialogStatus(!this.addDialog);
            }

    }

    
}
</script>