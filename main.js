const app = Vue.createApp({
    // data: function() {
    //     return {
    //         product: 'Socks'
    //     }
    // }
    //pre-ES6 syntax

    data() {
        return {
            product: 'Socks',
            description: 'Made of soft cotton to keep your feet warm'
        }
    }
})
//initiating the app by passing an object argument
//with data as a property, whose value is a function is returning 
//another object where we store our data


