<template>
  <v-container id="user-5" fluid tag="section">
    <v-row justify="center">
      <v-dialog v-model="isShowDialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">أضف تعليقك</v-btn>
        </template>
        <v-card class="lime lighten-4
" >
          <v-card-title >
            <span class="headline">أضف تعليقك على سجل الحادثة</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-textarea
                    rows="1"
                    counter
                    clearable
                    solo
                    outlined
                    shaped
                    autoGrow
                    label="اضف التعليق هنا"
                    v-model="commentString"
                    required
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="justify-center">
               <v-btn large color="blue darken-1" text @click.prevent="addComment" >
                   <span>حفظ</span>
        <v-icon>mdi-checkbox-marked-circle-outline</v-icon></v-btn>
            <v-btn large color="blue darken-1" text @click.prevent="hideModal"><span>غلق</span>
        <v-icon>mdi-close-circle-outline</v-icon></v-btn>
           
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="11">
        <base-material-card  title="خريطة السجل الزمني للحادثة"  >
          <div>
            <v-form>
              <v-container class="py-0">
                <v-timeline dense>
                  <v-timeline-item v-for="(comment, i) in getComments" :key="i" medium class=text-center color="amber accent-2
">
                   
                  <v-card class="py-0" color="light-green lighten-4">
                      <h3 >بواسطة {{ comment.postID }}</h3>
                      <h3>{{ comment.name }}</h3>
                      <h3>بتاريخ {{ comment.createdDate }}</h3>
                 
                      <v-card-text>{{ comment.commentString }}</v-card-text>
                  </v-card>
                  </v-timeline-item>
                </v-timeline>
              </v-container>
            </v-form>
          </div>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import stringHelper from "../../../../helpers/stringHelper";
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
import moment from "moment";

export default {
  data() {
    return {
      isShowDialog: false,
      commentString: "",
      postID: this.$route.query.postID
    };
  },
  computed: {
    ...mapGetters({
      commentList: "incidents/comments"
    }),
    getComments() {
      return this.$store.getters["incidents/comments"](this.postID);
    }
  },
  methods: {
    hideModal() {
      this.isShowDialog = !this.isShowDialog;
    },
    addComment() {
      // to save
      let m = moment(Date());
      let date = m.format("MM-DD-YYYY hh:mm A");
      if (this.commentString.length === 0) {
        alert("plealse input comment string!");
        return;
      }
      let _data = {
        postID: this.postID,
        id: null,
        commentString: this.commentString,
        commentedBy: "someone",
        commentedIn: "some",
        createdDate: date
      };
      this.$store.dispatch("incidents/addComment", _data);
      this.isShowDialog = !this.isShowDialog;
      this.commentString = "";
    }
  },
  created() {
    // this.$http.get("https://jsonplaceholder.typicode.com/comments").then(
    //   result => {
    //     this.comments = result.data;
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // );
  }
};
</script>
