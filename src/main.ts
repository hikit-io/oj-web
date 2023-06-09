import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import '@varlet/touch-emulator'
import {ApolloClients, DefaultApolloClient} from "@vue/apollo-composable";
import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client/core";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import("./views/index/Index.vue")
        }
    ],
})

const httpLink = createHttpLink({
    uri: 'https://api.hikit.io/auth/',
    credentials: 'include'
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})

createApp(App)
    .use(router)
    .provide(DefaultApolloClient, apolloClient)
    .provide(ApolloClients,{
        auth: apolloClient
    })
    .mount('#app')
