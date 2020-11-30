import * as config from 'config';
import { Server } from './app';

// create http server
export const app = Server.bootstrap().app;
export const server = Server.bootstrap().server;

let port = process.env.PORT;
if (!port) {
    port = config.get('port');
}
console.log('api running on PORT: ', port);

// used for forgot password api.. 



server.listen(port);

