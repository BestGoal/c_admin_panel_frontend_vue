<template>
     <v-row justify="center">
     <v-dialog v-model="assignTaskDialog" persistent max-width="800px">
 
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Assign Employeea
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                    <v-select
                        v-model="selectedEmps"
                        :items="allEmployees"
                        item-text="name"
                        item-value="item"
                        label="Assign Employees"
                        multiple
                        >
                        <template v-slot:prepend-item>
                            <v-list-item
                            ripple
                            @click="toggle"
                            >
                            <v-list-item-action>
                                <v-icon :color="selectedEmps.length > 0 ? 'indigo darken-4' : ''">{{ icon }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>Select All</v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                            <v-divider class="mt-2"></v-divider>
                        </template>
                        <template v-slot:append-item>
                            <v-divider class="mb-2"></v-divider>
                            <v-list-item disabled>


                            <v-list-item-content v-if="likesSomeFruit">
                                <v-list-item-title>Count</v-list-item-title>
                                <v-list-item-subtitle>{{ selectedEmps.length }}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-content v-else>
                                <v-list-item-title>
                                Select Employees
                                </v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                        </template>
                        </v-select>
              </v-row>
              <v-row justify="center">
                <v-col cols="12"  md="2" class="text-center">
                  <v-btn
                    color="success"
                    class="mr-0"
                    @click="save"
                  >
                    Save
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
import { mapState,mapMutations, mapGetters,mapActions } from 'vuex'
  export default {
    data: () => ({
      selectedEmps: [],
    }),

    computed: {
        ...mapState("tasks",['assignTaskDialog','selectedTask']),
        ...mapGetters("employees",['allEmployees']) ,
      likesAllFruit () {
        return this.selectedEmps.length === this.allEmployees.length
      },
      likesSomeFruit () {
        return this.selectedEmps.length > 0
      },
      icon () {
        if (this.likesAllFruit) return 'mdi-close-box'
        if (this.likesSomeFruit) return 'mdi-minus-box'
        return 'mdi-checkbox-blank-outline'
      },
    },mounted(){
       this.selectedEmps = this.selectedTask.employees;
    },
    methods: {
        ...mapMutations("tasks",['setSelecteItem','setAssignTaskDialog']),
        ...mapActions("tasks",['updateTask']),
        close(){
            this.setAssignTaskDialog(false);
        },save(){
          this.selectedTask.employees = this.selectedEmps;
          this.updateTask(this.selectedTask),
          this.setSelecteItem(null);
          this.setAssignTaskDialog(false);                    
        },
      toggle () {
        this.$nextTick(() => {
          if (this.likesAllFruit) {
            this.selectedEmps = []
          } else {
            this.selectedEmps = this.allEmployees.slice()
          }
        })
      },
    },
  }
</script>