import { Elysia } from "elysia";
import { usersRoute } from "./users/users.route"
import { swagger } from '@elysiajs/swagger'
const route = new Elysia({ prefix: '/api' })
.use(
    swagger({
      exclude: ['/swagger'],
      autoDarkMode: true,
      documentation: {
        info: {
          title: '🦊 Elysia Simple',
          description: 'Simple pattern for ElysiaJS',
          version: '1.0.0',
          license: {
            name: 'MIT',
            url: 'https://opensource.org/license/mit/'
          },
          contact: {
            name: 'Puthinan',
            url: 'https://Puthinan92.com'
          }
        }
      }
    })
  ).use(usersRoute);

export { route }
