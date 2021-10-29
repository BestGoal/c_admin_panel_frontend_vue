<template>
<v-row>
 <v-col cols="12" md="12" >
  <v-card
    class="px-5 py-1"
     >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{ comment.commentedBy }}</div>
        <v-list-item-title class="headline mb-1">{{ comment.commentString }}</v-list-item-title>
        <v-list-item-subtitle></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>


  </v-card>
 </v-col>
</v-row>
</template>

<script>
export default {
    data () {
      return {
        comment : {
            commentString : '',commentedBy : 'xcvxcv',commentedIn : "xcvxcvxcv"
        }        
      }
    },
    props: ['comment'],
}
</script>