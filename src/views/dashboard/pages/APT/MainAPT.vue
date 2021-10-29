<template>
<v-row justify="center">
 <v-col cols="12" md="11" >
<base-material-card color="green lighten-1" class="px-5 py-3" title="البصمة">

<div id="APT">
    <ul>
        <li v-for='apts in APT' :key="apts.show" v-on:click='apts.show =!apts.show'>
            <h2>{{apts.name}}</h2>
            <option v-show="apts.show"><apts.path/></option> 
        </li>
    </ul>
</div>
 
</base-material-card>
</v-col>

</v-row>
</template>

<script>
import altername from "./AlterNames";
import newCountries from "./Countries";
import targeted from "./Targeted";
import signature from "./ThreatSignature";
import { mapActions, mapGetters } from "vuex";
import Quill from 'quill';

import FilePond from './../attachment'
import AddSignature from "./AddSignature";
export default {
  components:{
    altername,
    newCountries,
    targeted,
    signature,
    FilePond,
  },
  data(){
      return{
      APT:[
          {name:'signature',path:signature,show:false},
          {name:'AddSignature',path:'AddSignature',show:false},
          {name:'FilePond',path:'FilePond',show:false}

      ],
  }}
};
</script>
