
process.on('uncaughtException', async function (error, origin) {
    console.log(`Uncaught Exception`)
    console.log(`name: ${error.name}`)
    console.log(`message: ${error.message}`)
    console.log(`stack: ${error.stack || "unknown stack"}`)
    console.log(`cause: ${error.cause}`)
    console.log(`origin: ${origin}`)

    process.exit(1)
})

process.on('unhandledRejection', async (reason, promise) => {
        console.log(`TYPEOF reason: ${typeof reason}`)
        console.log(`IS ERROR: ${reason instanceof Error}`)
        console.log(`CONSTRUCTOR:' ${reason?.constructor?.name}`)

        // Mostrar as chaves do objeto
        //@ts-ignore
        console.log(`REASON KEYS: ${Object.keys(reason)}`)

        // Mostrar tudo, sem tentar serializar
        console.log(`REASON RAW: ${reason}`)

        //@ts-ignore
        // Tentar mostrar stack (se tiver)
        if (reason && reason.stack) {
            //@ts-ignore
            console.log(`REASON STACK: ${reason.stack}`)
        }

        process.exit(1)
    })
