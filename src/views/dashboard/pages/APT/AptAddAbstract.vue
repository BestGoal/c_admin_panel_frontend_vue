<template>
  <v-container id="user-22222" fluid tag="section">
    <v-row justify="center">
    </v-row>

    <v-row>
      <v-col cols="12" md="11">
        <v-row justify="center">
          <v-col cols="12" md="11">
            <v-card-title >
              <v-row>
                
                <v-row justify="center">
                  <v-col cols="12" md="11.1">
                    <base-subheading style=" text-align-last: right" subheading="الملخص"></base-subheading>
                    <div>
                      <quill-editor
                        v-model="Content.contentString"
                        ref="myQuillEditor"
                        :options="editorOption"
                      ></quill-editor>
                    </div>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="2" class="text-center">
                  <v-btn class="ma-2" outlined color="success" @click="AddForm">
                    <v-icon left>mdi-plus-circle-outline</v-icon>
                    <h4>إضافة</h4>
                  </v-btn>
                </v-col>
                </v-row>
              </v-row>
            </v-card-title>
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

export default {
  components: {
    quillEditor
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu2: false,
      content: "",

      editorOption: {
        debug: "ínfo",
        placeholder: "أكتب هنا ...",
        readOnly: true,
        theme: "snow"
      },
      Content: {
        id: 0,
        contentString: "",
        createdBy: "hamad Ali",
        dbSatus : "new"
      },
      APTDetail: {
        id: "",
        name: "",
        content: "",
        date: new Date().toISOString().substr(0, 10),
        country: "",
        sections: [{ name: "" }]
      },
      mounting: false
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
    ...mapGetters("apt", ["getGroup", "GetContent"])
  },
  methods: {
    // get the actions from the store
    ...mapActions("apt", ["AddContent"]),
    AddForm() {
      this.AddContent(this.Content);
      this.Content = {};
    },
    cancel() {
      // this.addSignature(this.APTDetail);
      //this.AddContent(this.GetDelta);
    }
  }

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
  height: 60vh;
}
</style>