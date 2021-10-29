<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <base-material-card class="px-5 py-3" color ="green lighten-1">
          <template v-slot:heading>
            <v-tabs
              v-model="tabs"
              background-color="transparent"
              slider-color="white"
            >
             <v-icon class="mr-2">
                  mdi-history
                </v-icon>
              <span
                class="subheading font-weight-light mx-3"
                style="align-self: center"
              > <h2>المهام :</h2></span>
              <v-tab>
                 <v-icon class="mr-2">
                  mdi-account-plus
                </v-icon>
               <v-badge
               color="grey lighten-1"
               content="4"
                >
                جديدة
                </v-badge>
               </v-tab>
                   <v-tab>
                 <v-icon class="mr-2">
                  mdi-account-edit
                </v-icon>
               <v-badge
               color="grey lighten-1"
               content="2"
                >
                قيد الإجراء
                </v-badge>
               </v-tab>
                   <v-tab>
                 <v-icon class="mr-2">
                  mdi-account-check
                </v-icon>
               <v-badge
               color="grey lighten-1"
               content="3"
                >
                منتهية
                </v-badge>
               </v-tab>


            </v-tabs>
          </template>

          <v-tabs-items
            v-model="tabs"
            class="transparent"
          >
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              <v-card-text>
                <template v-for="(task, i) in tasks[tabs]" >
                  <v-row
                    :key="i"
                    align="center"
                  >
                    <v-col cols="1">
                      <v-list-item-action>
                        <v-icon class="mr-2"  @click=(item.id)>
                        mdi-account-multiple
                         </v-icon>

                      </v-list-item-action>
                    </v-col>

                    <v-col cols="9" >
                      <div
                        class="font-weight-light"
                        v-text="task.text"
                      />
                    </v-col>

                    <v-col
                      cols="1"
                      class="text-left"
                    >
                      <v-icon class="mx-1" @click=(item.id)>
                         mdi-arrow-left-bold-circle-outline
                      </v-icon>

                    </v-col>

                  </v-row>
                </template>
              </v-card-text>
            </v-tab-item>
          </v-tabs-items>
        </base-material-card>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <base-material-card class="px-5 py-3" color ="red lighten-1">
          <template v-slot:heading>
            <v-tabs
              v-model="tabs1"
              background-color="transparent"
              slider-color="white"
            >
             <v-icon class="mr-2">
                  mdi-shield-outline
                </v-icon>
              <span
                class="subheading font-weight-light mx-3"
                style="align-self: center"
              ><h2>الحوادث الأمنية :</h2></span>
              <v-tab>
                 <v-icon class="mr-2">
                  mdi-account-plus
                </v-icon>
               <v-badge
               color="grey lighten-1"
               content="4"
                >
                جديدة
                </v-badge>
               </v-tab>
                   <v-tab>
                 <v-icon class="mr-2">
                  mdi-account-edit
                </v-icon>
               <v-badge
               color="grey lighten-1"
               content="2"
                >
                قيد الإجراء
                </v-badge>
               </v-tab>
                   <v-tab>
                 <v-icon class="mr-2">
                  mdi-account-check
                </v-icon>
               <v-badge
               color="grey lighten-1"
               content="3"
                >
                منتهية
                </v-badge>
               </v-tab>


            </v-tabs>
          </template>

          <v-tabs-items
            v-model="tabs1"
            class="transparent"
          >
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              <v-card-text>
                <template v-for="(incidents, i) in incidents[tabs1]" >
                  <v-row
                    :key="i"
                    align="center"
                  >
                    <v-col cols="1">
                      <v-list-item-action >
                        <v-icon class="mr-2"  @click=(item.id)>
                        mdi-account-multiple
                         </v-icon>
                      </v-list-item-action>
                    </v-col>

                    <v-col cols="9">
                      <div
                        class="font-weight-light"
                        v-text="incidents.text"
                      />
                    </v-col>

                    <v-col
                      cols="2"
                      class="text-left"
                    >
                      <v-icon class="mx-1"  @click=(item.id)>
                        mdi-arrow-left-bold-circle-outline
                      </v-icon>

                    </v-col>
                  </v-row>
                </template>
              </v-card-text>
            </v-tab-item>
          </v-tabs-items>
        </base-material-card>
      </v-col>
              <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <base-material-stats-card
          color="red lighten-1"
          icon="mdi-shield-outline"
          title="الحوادث الأمنية الأكثر خطورة"
          value="245"
          sub-icon="mdi-clock"
          sub-text="Just Updated"
        />
      </v-col>
                    <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <base-material-stats-card
          color="blue lighten-1"
          icon="mdi-bug"
          title="مجموعات ال APT المسجلة"
          value="150"
          sub-icon="mdi-clock"
          sub-text="Just Updated"
        />
      </v-col>

                    <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <base-material-stats-card
          color="green lighten-1"
          icon="mdi-history"
          title="مجموع المهام المنجزة"
          value="90"
          sub-icon="mdi-clock"
          sub-text="Just Updated"
        />
      </v-col>
                    <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <base-material-stats-card
          color="grey lighten-1"
          icon="mdi-animation"
          title="المؤسسات المتأثرة بالحوادث الأمنية"
          value="21"
          sub-icon="mdi-clock"
          sub-text="Just Updated"
        />
      </v-col>
      <v-col
        cols="12"
        lg="4"
      >
        <base-material-chart-card
          :data="emailsSubscriptionChart.data"
          :options="emailsSubscriptionChart.options"
          :responsive-options="emailsSubscriptionChart.responsiveOptions"
          color="#E91E63"
          hover-reveal
          type="Bar"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  color="info"
                  icon
                  v-on="on"
                >
                  <v-icon
                    color="info"
                  >
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">
            الحوادث الأمنية
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            عدد الحوادث الأمنية المسجلة في الشهر
          </p>

          <template v-slot:actions>
            <v-icon
              class="mr-1"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">منذ 10 دقائق</span>
          </template>
        </base-material-chart-card>
      </v-col>

       <v-col
        cols="12"
        lg="4"
      >
        <base-material-chart-card
          :data="dailySalesChart.data"
          :options="dailySalesChart.options"
          color="green lighten-1"
          hover-reveal
          type="Line"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  color="info"
                  icon
                  v-on="on"
                >
                  <v-icon
                    color="info"
                  >
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">
            المهام اليومية
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">

            <span class="green--text"></span>&nbsp;
            عدد المهام المنجزة في اليوم
          </p>

          <template v-slot:actions>
            <v-icon
              class="mr-1"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">منذ 4 دقائق</span>
          </template>
        </base-material-chart-card>
      </v-col>

      <v-col
        cols="12"
        lg="4"
      >
        <base-material-chart-card
          :data="dataCompletedTasksChart.data"
          :options="dataCompletedTasksChart.options"
          hover-reveal
          color="info"
          type="Line"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  color="info"
                  icon
                  v-on="on"
                >
                  <v-icon
                    color="info"
                  >
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h3 class="card-title font-weight-light mt-2 ml-2">
            أبرزالهجمات السيبرانية
          </h3>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            عدد الهجمات اليبرانية المسجلة لكل نوع
          </p>

          <template v-slot:actions>
            <v-icon
              class="mr-1"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">منذ 7 دقائق</span>
          </template>
        </base-material-chart-card>
      </v-col>







    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'DashboardDashboard',

    data () {
      return {


 dailySalesChart: {
          data: {
            labels: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
            series: [
              [12, 17, 7, 17, 23, 18, 38],
            ],
          },
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 0,
            }),
            low: 0,
            high: 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 5,
              left: 0,
            },
          },
        },
        dataCompletedTasksChart: {
          data: {
            labels: ['فيروس فدية', 'حصان طروادة', 'تعطيل الخدمة', 'تصيد إلكتروني', 'برمجيات خبيثة', 'حقن قواعد بيانات'],
            series: [
              [12, 9, 17, 21, 40, 33],
            ],
          },
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 0,
            }),
            low: 0,
            high: 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 5,
              left: 0,
            },
          },
        },
        emailsSubscriptionChart: {
          data: {
            labels: ['ينا', 'فبر', 'مار', 'ابر', 'ماي', 'يون', 'يول', 'أغس', 'سبت', 'أكت', 'نوف', 'ديس'],
            series: [
              [50, 40, 30, 36, 3, 16, 20, 22, 11, 9, 5, 12],

            ],
          },
          options: {
            axisX: {
              showGrid: false,
            },
            low: 0,
            high: 100,
            chartPadding: {
              top: 0,
              right: 5,
              bottom: 5,
              left: 0,
            },
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0]
                },
              },
            }],
          ],
        },


        tabs: 0,
        tasks: {
          0: [
            {
              text: 'مهمة رقم 1',
              value: true,
            },
            {
              text: 'مهمة رقم 2',
              value: false,
            },
            {
              text: 'مهمة رقم 3',
              value: false,
            },
            {
              text: 'مهمة رقم 4',
              value: true,
            },
          ],
          1: [
            {
              text: 'مهمة رقم 1',
              value: true,
            },
            {
              text: 'مهمة رقم 2',
              value: false,
            },
          ],
          2: [
            {
              text: 'مهمة رقم 1',
              value: false,
            },
            {
              text: 'مهمة رقم 2',
              value: true,
            },
            {
              text: 'مهمة رقم 3',
              value: true,
            },
          ],

        },

        tabs1: 0,
        incidents: {
          0: [
            {
              text: 'حادثة أمنية رقم 1',
              value: true,
            },
            {
              text: 'حادثة أمنية رقم 2',
              value: false,
            },
            {
              text: 'حادثة أمنية رقم 3',
              value: false,
            },
            {
              text: 'حادثة أمنية رقم 4',
              value: true,
            },
          ],
          1: [
            {
              text: 'حادثة أمنية رقم 1',
              value: true,
            },
            {
              text: 'حادثة أمنية رقم 2',
              value: false,
            },
          ],
          2: [
            {
              text: 'حادثة أمنية رقم 1',
              value: false,
            },
            {
              text: 'حادثة أمنية رقم 2',
              value: true,
            },
            {
              text: 'حادثة أمنية رقم 3',
              value: true,
            },
          ],

        },

        list: {
          0: false,
          1: false,
          2: false,
        },
      }
    },

    methods: {
      complete (index) {
        this.list[index] = !this.list[index]
      },
    },
  }
</script>
