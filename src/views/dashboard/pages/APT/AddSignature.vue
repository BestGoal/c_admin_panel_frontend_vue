<template>
  <v-container id="user-22222" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="11"></v-col>
      <v-col cols="12" md="4"></v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="11">
        <v-row justify="center">
          <v-col cols="12" md="11">
            <base-material-card title="تفاصيل المصدر" class="px-5 py-3">
              <v-row>
                <v-col cols="12" md="4">
                 
                  <h2>{{getGroup}}</h2>
                  
                </v-col>

                <v-row justify="center">
                  <v-col cols="12" md="11.1">
                    <base-subheading style=" text-align-last: right" subheading="الملخص">
                
                    </base-subheading>
                    <div>
                      <quill-editor v-model="Content.contentString" ref="myQuillEditor" :options="editorOption"></quill-editor>
                    </div> 
                  </v-col>
                  
                </v-row>
                

                

                <v-col cols="12" md="2" class="text-center">
                  <v-btn color="success" class="mr-0" @click="AddForm">حفظ</v-btn>
                </v-col>
                <v-col cols="12" md="2" class="text-center">
                  <v-btn color="selver" class="mr-0" @click="cancel">إلغاء</v-btn>
                </v-col>
              </v-row>
            </base-material-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
            

<script>
import "quill/dist/quill.snow.css";
import { quillEditor } from "vue-quill-editor";
import { mapActions, mapGetters } from "vuex";
import FilePond from './../attachment'


export default {
  components:{
    quillEditor,
    FilePond
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu2: false,
      content: "",

       editorOption: {
        debug: "ínfo",
         placeholder: "type your post...",
        readOnly: true,
         theme: "snow"
       },
       Content :  {
              id: 0,
              contentString: "",
              createdBy: "hamad Ali"
          },
      APTDetail: {
        id: "",
        name: "",
        content: "",
        date: new Date().toISOString().substr(0, 10),
        country: "",
        sections: [{ name: "" }]
      },
      mounting: false,
    };
  // },
  // watch: {
  //    content(val) {
  //     if(!this.mounting){

  //    this.$store.commit('setDelta',this.$refs.myQuillEditor.quill.GetContents())

  //   }
  //     this.$store.commit('setDelta',val)
  //    this.mounting = false
    
  //   }
 },
  computed: {
    ...mapGetters("apt", ["getGroup", "GetContent"]),
    Country() {
      return [
        { code: "1", label: "OM" },
        { code: "2", label: "UK" },
        { code: "3", label: "USA" }
      ];
    }
  },
  methods: {
    // get the actions from the store
    ...mapActions("apt", ["AddSignature"]),
    AddForm() {
      this.AddSignature(this.Content);
      this.$router.push("EditApt");
    },
    cancel() {
     // this.addSignature(this.APTDetail);
      //this.AddContent(this.GetDelta);
    }
  },

   /*mounted() {
     this.mounting = true
   if(!this.content && this.GetContent){
      this.content = this.GetContent
    }
  },*/
};
</script>
<style>
.ql-editor {
  height: 72vh;
}
</style>