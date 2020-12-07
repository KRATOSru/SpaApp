// import * as fb from 'firebase'
import  fb from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import {async} from "@firebase/storage/dist/src/implementation/async";

class Ad {
    constructor(title, description, ownerId, imageSrc = '',  promo = false, id = null) {
        this.title = title,
        this.description = description,
        this.ownerId = ownerId,
        this.imageSrc = imageSrc,
        this.promo = promo,
        this.id = id
    }
}
export default  {
    state: {
        ads: []
    },
    mutations: {
        createAd(state, payload) {
            state.ads.push(payload)
        }
    },
    actions: {
       async createAd({commit, getters}, payload) {
           commit('clearError')
           commit('setLoading', true),

               async fetchAds ({commit}) {
                   commit('clearError'),
                   commit('setLoading', true)

               try {
                   
               }catch (error) {
                       commit('setError', error.message)
                       commit('setLoading', false)
                       throw error
                   
               }
           }

           try {
               const newAd = new Ad(
                   payload.title,
                   payload.description,
                   getters.user.id,
                   payload.imageSrc,
                   payload.promo
               )

              const ad = await fb.database().ref('ads').push(newAd)

               commit('setLoading', false)
               commit('createAd', {
                   ...newAd,
                   id: ad.key
               })

           } catch (error) {
               commit('setError', error.message)
               commit('setLoading', false)
               throw error
           }
        }
    },
    getters: {
        ads(state) {
            return state.ads
        },
        promoAds(state) {
            return state.ads.filter(ad => {
                return ad.promo
            })
        },
        myAds(state) {
            return state.ads
        },

        adById(state) {
            return adId => {
                return state.ads.find(ad => ad.id === adId)
            }
        }
    }
}
