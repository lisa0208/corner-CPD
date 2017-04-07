var Vue = require('vue')
var helloVue = require('./views/hello.vue')
 new Vue({
    el: "body",
    components: {
        hello: helloVue
    }
})