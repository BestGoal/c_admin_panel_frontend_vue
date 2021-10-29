<template>
     <v-row justify="center">
     
         <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Edit Task
            </div>

            <div class="subtitle-1 font-weight-light">
              
            </div>
          </template>


          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="11">
                  <v-text-field
                  v-model="getSelectedTask.title"
                    label="Title"
                  />
                </v-col>

                <v-col cols="12" md="12">
                  <v-textarea
                  rows="5"
                  v-model="getSelectedTask.description"
                    label="Description"
                  />
                </v-col>

                </v-row>
                <v-row justify="center">

                <v-col cols="12" md="3">
                  <v-select
                  v-model="getSelectedTask.weight"
                  :items="getWhight"
                  item-text="label"
                  item-value="code"
                  label="Weight">
                  </v-select>
                </v-col>

                <v-col cols="12" md="3">
                  <v-select
                  v-model="getSelectedTask.importance"
                  :items="getImportance"
                  item-text="label"
                  item-value="code"
                  label="Importance">
                  </v-select>
                </v-col>

                <v-col cols="12" md="3">
                  <v-select
                  v-model="getSelectedTask.urgent"
                  :items="getUrgancy"
                  item-text="label"
                  item-value="code"
                  label="Urgancy">
                  </v-select>
                </v-col>

                </v-row>
                <v-row justify="center">

                <v-col cols="12" md="3">
                  <v-btn
                    color="success"
                    class="mr-0"
                    @click="add"
                  >
                   Save
                  </v-btn>
                </v-col>
                <v-col cols="12" md="3">
                  <v-btn
                    color="error"
                    class="mr-0"
                    @click="close"
                  >
                    Close
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>

        </base-material-card>

      
    </v-row>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
   computed: {
        ...mapState("tasks",['editTaskDialog']), 
        ...mapGetters("tasks",['getWhight','getImportance','getUrgancy','getSelectedTask'])
    },methods: {
        ...mapActions("tasks",['updateTask']),
        ...mapMutations("tasks",['setEditTaskDialog','setDefaultSelectedItem']),
        add(){ 
            this.updateTask(this.getSelectedTask);
            this.setEditTaskDialog(false);
            this.setDefaultSelectedItem();
            },
        close(){ 
            this.setEditTaskDialog(false);
            this.setDefaultSelectedItem();
            }

    }
    

    
}
</script>