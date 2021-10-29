<template>

<v-row>

    <v-tooltip v-model="show" top>
          <template v-slot:activator="{ on }">
            <v-btn class="mx-2" v-on="on" fab dark x-small @click="edit" color="primary">
                <v-icon dark>mdi-file-edit</v-icon>
            </v-btn>
          </template>
          <span>Edit</span>
        </v-tooltip>

            <v-tooltip v-model="show" top>
          <template v-slot:activator="{ on }">
            <v-btn class="mx-2" v-on="on" fab dark x-small @click="assign" color="blue">
                <v-icon dark>mdi-account-plus</v-icon>
            </v-btn>
          </template>
          <span>Assign</span>
        </v-tooltip>

        <v-tooltip v-model="show" top>
          <template v-slot:activator="{ on }">
            <v-btn class="mx-2" v-on="on" fab dark x-small @click="details" color="blue">
                <v-icon dark>mdi-file-cabinet</v-icon>
            </v-btn>
          </template>
          <span>Details</span>
        </v-tooltip>

        <v-tooltip v-model="show" top>
          <template v-slot:activator="{ on }">
            <v-btn class="mx-2" v-on="on" fab dark x-small @click="close" color="blue">
                <v-icon dark>mdi-close-outline</v-icon>
            </v-btn>
          </template>
          <span>Close</span>
        </v-tooltip>

   
    

</v-row>
    
</template>
<script>
import { mapMutations, mapActions } from 'vuex'


export default {
   props: ['task'], 
    methods:{
        ...mapMutations("tasks",['setEditTaskDialog','setSelecteItem','setAssignTaskDialog']),
        edit(){
            this.setSelecteItem(this.$props.task);
            this.setEditTaskDialog(true);},
        assign(){
            this.setAssignTaskDialog(true)                        
            this.setSelecteItem(this.$props.task)},
        details(){
            this.setSelecteItem(this.$props.task);
            this.$router.push("TaskDetails");},
        close(){
          this.setSelecteItem(this.$props.task);
            }
    }
}
</script>


