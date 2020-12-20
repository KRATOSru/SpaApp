<template>
  <v-container>
    <v-layout row>
        <v-flex xs 12 class="text-xs-center pt-5" v-if="loading">
            <v-progress-circular
                    :size="100"
                    :width="4"
                    color="purple"
                    indeterminate
            ></v-progress-circular>
        </v-flex>
      <v-flex xs12 sm6 offset-sm3 v-else-if="!loading && orders.length !== 0">
        <h1 class="text--secondary mb-3 ml-3">Orders</h1>
        <v-list two-line subheader>
          <v-list-tile
                  avatar
                  v-for="order in orders"
                  :key="order.id"
          >
            <v-list-tile-action>
                  <v-checkbox class="ml-4"
                          color="success"
                          :input-value="order.done"
                          @change="markDone(order)"
                  ></v-checkbox>
            </v-list-tile-action >
            <v-list-tile-content>

              <span class="ml-4">
                 <v-list-tile-title>{{ order.name}}</v-list-tile-title>
              </span>
              <span class="ml-3">
                 <v-list-tile-sub-title>{{order.phone}}</v-list-tile-sub-title>
              </span>

            </v-list-tile-content>
            <v-list-tile-action>
                 <v-btn
                         :to="'/ad/' + order.adId"
                         class="primary ml-8"
                 >Open</v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>
        <v-flex xs 12 class="text-xs-center" v-else>
          <h1 class="text--secondary">You have no orders</h1>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
      computed: {
        loading () {
            return this.$store.getters.loading
        },
          orders () {
            return this.$store.getters.orders
          }
      },

    methods: {
      markDone (order) {
          this.$store.dispatch('markOrderDone', order.id)
          .then(() => {
              order.done = true
          })
          .catch(() => {})
      }
    },
      created() {
        this.$store.dispatch('fetchOrders')
      }
  }
</script>

<style scoped>


</style>
