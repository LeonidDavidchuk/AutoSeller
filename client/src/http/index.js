import axios from "axios"

const $host = axios.create({
    baseURL: '127.0.0.1/3000'
})

const $authHost = axios.create({
    baseURL: '127.0.0.1/3000'
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}