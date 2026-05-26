import fs from 'fs'

interface IRoute {
    method: string
    url: string
    prehandler?: Function[]
    handler: Function
    posthandler?: Function[]
}

interface Handlers {
    meta: {}
    routes: [],
    route: {
        public: IRoute[]
        only_valid_token: IRoute[]
        admin_panel: IRoute[]
        condominium: IRoute[]
        correspondence: IRoute[]
        assemblies: IRoute[]
        statistic_and_report: IRoute[]
        new_and_events: IRoute[]
        space_reservation: IRoute[]
        little_store: IRoute[]
        receive_web_push: IRoute[]
    }
}

interface ExposedRoutes {
    method: string
    url: string
    prehandler: Function
    handler: Function
    posthandler: Function
    permission: string
}

export = {

    handlers: async (): Promise<ExposedRoutes[]> => {
        var dirs = fs.readdirSync(__dirname)
        var expose_routes: any[] = []

        /*
        var _promise = dirs.map(async (directories: string) => {
            if (directories.includes('index')) return;

            var files = fs.readdirSync(`${__dirname}/${directories}`)

            var _p = files.map(async (filename: string) => {
                var is_routes_file = filename.split('.')
                if (!is_routes_file[1].includes('routes'))
                    return;

                let handlers: Handlers = require(`${__dirname}/${directories}/${filename}`)

                for (var permission in handlers.route) {
                    var base = '/api'

                    let routes: IRoute[] = handlers.route[permission]

                    routes.forEach(route => {
                        expose_routes.push({
                            permission: permission,
                            method: route.method.toLowerCase(),
                            url: `${base}${route.url}`,
                            prehandler: route?.prehandler,
                            handler: route.handler,
                            posthandler: route?.posthandler
                        })
                    })

                }
            })

            await Promise.all(_p)
          
            return expose_routes
        })

        await Promise.all(_promise)
        */

        return expose_routes
    }
}
