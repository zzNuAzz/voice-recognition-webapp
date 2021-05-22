/* eslint-disable */
const { httpPost } = require("./sender/sender");

function register(payload) {
    const route = "/register";
    console.log(payload)
    // return httpPost(route, payload)
    return Promise.resolve({
        success: true
    })
}

export default {
    post: register
}

