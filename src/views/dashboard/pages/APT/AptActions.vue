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
    

</v-row>
    
</template>
<script>
import { mapMutations, mapActions } from 'vuex'


export default {
   props: ['apt'],
   data (){
     return {
       show : ""
     }
   },
    methods:{
        ...mapMutations("apt",['setEditApt']),
        edit(){
            this.setEditApt(this.$props.apt); 
            this.$router.push("AddApt");  
    }
}
}
</script>


