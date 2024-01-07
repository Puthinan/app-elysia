import { Elysia } from "elysia";
import { route } from "./route";
import { swagger } from '@elysiajs/swagger'
import { staticPlugin } from '@elysiajs/static'
const app = new Elysia().use(staticPlugin({prefix: '/file', enableDecodeURI: true})).use(route).listen(3000);


console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
