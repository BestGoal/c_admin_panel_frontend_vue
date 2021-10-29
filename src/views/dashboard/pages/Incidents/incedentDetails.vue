<template>
  <v-container id="user-22222" fluid tag="section">
    <v-card>
      <template>
        <v-container>
          <v-simple-table>
            <template v-slot:default>
                
              <tbody>
                  
                <tr>
                  <td >عنوان الحادث:</td>
                  <td style="font-weight: 900;">{{getSelectedIncedent.subject}}</td>
                </tr>
                <tr>
                  <td>القطاع:</td>
                  <td style="font-weight: 900;">{{getSelectedIncedent.sector}}</td>
                  <td>الجهة المتأثرة:</td>
                  <td style="font-weight: 900;">{{getSelectedIncedent.org.orgname}}</td>
                </tr>

                <tr>
                  <td>تاريخ الحادثة:</td>
                  <td style="font-weight: 900;">{{getSelectedIncedent.date}}</td>
                  <td>وقت الحادث:</td>
                  <td style="font-weight: 900;">{{getSelectedIncedent.time}}</td>
                </tr>

                <tr>
                  <td>فئة الحادثة:</td>
                  <td style="font-weight: 900;">{{getSelectedIncedent.category.label}}</td>
                  <td>مستوى الخطورة:</td>
                  <td style="font-weight: 900;">{{getSelectedIncedent.saverity.lable}}</td>
                </tr>

                <tr>
                  <td>الأهمية:</td>
                  <td style="font-weight: 900;">{{getSelectedIncedent.urgancey.label}}</td>
                  <td>الحالة:</td>
                  <td style="font-weight: 900;">{{getSelectedIncedent.status.statusString}}</td>
                </tr>
                 
              </tbody>
            </template>
          </v-simple-table>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr>
                  <td>تفاصيل الحادث:</td>
                  <td style="font-weight: 900;">{{getSelectedIncedent.description}}</td>
                </tr>
                <tr>
                  <td>عنوان الانترنت:</td>
                  <td style="font-weight: 900;">{{getSelectedIncedent.ipAddresses.ip}}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-container>
      </template>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";

export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters("incidents", ["getSelectedIncedent"])
  },
  methods: {
  },
  mounted() {}
};
</script>
