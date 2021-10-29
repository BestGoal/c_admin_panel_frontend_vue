<template>
  <v-row justify="center">
    <v-col cols="12" md="11">
      <div id="app">
        <v-btn style="float: right" class="ma-2" outlined color="success" @click="sendData()">
          <v-icon left>mdi-content-save</v-icon>
         حفظ
        </v-btn>

        <file-pond
          name="test"
          ref="pond"
          allow-multiple="true"
          allowReplace="true"
          fileValidateTypeDetectType
          v-bind:files="myFiles"
          v-on:init="handleFilePondInit"
          style="margin-right: 120px"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
// Import Vue FilePond
import vueFilePond from "vue-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

// Create component
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginFileEncode
);

import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      myFiles: [],
      Files: []
    };
  },
  components: {
    FilePond
  },
  computed: {
    ...mapGetters("apt", ["getfiles"])
  },
  methods: {
    ...mapActions("apt", ["AddFiles"]),
    handleFilePondInit: function() {
      console.log("FilePond has initialized");
      this.$refs.pond.getFiles();
    },

    sendData() {
    var myJson = {id : 0, file : ""};
     let myFiles = this.$refs.pond.getFiles();
     myFiles = myFiles.map(file =>{
        let jsonFile = { EA_Id : 2 ,
                         Entity_Type : "APT", 
                         Entity_URL :  file.getFileEncodeBase64String(),
                         Message_Id : 1}
        return jsonFile;
        });
      this.AddFiles(myFiles);
      //this.Files.push(Object.assign({},this.$refs.pond.getFiles()));
    },

    submitFiles() {
      /* Initialize the form data*/
      let formData = new FormData();

      /*Iteate over any file sent over appending the files to the form data.*/
      for (var i = 0; i < this.myFiles.length; i++) {
        let file = this.myFiles[i];

        formData.append("files[" + i + "]", file);
      }
    },

    /*
        Handles a change on the file upload
      */
    handleFilesUpload() {
      this.myFiles = this.$refs.myFiles.myFiles;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
