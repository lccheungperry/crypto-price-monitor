import redis from "redis"

const createRedisClient = () => {

    const client = redis.createClient()

    client.on('error', (err) => console.log('Redis Client Error', err))

    client.connect().then(() => {
        console.log('Redis connected!')
    })

    return client
}

export { createRedisClient }