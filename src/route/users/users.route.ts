import { create, findAll, findOne, update, remove } from "../../controller/users/user.controller";
import { t } from 'elysia'
import { Elysia } from "elysia";

const usersRoute = new Elysia({ prefix: '/v1' })
    .get(
        '/users',
        async ({ set }) => {
            try {
                const users = await findAll()
                if (!users) {
                    set.status = 404
                    return { status: 'error', response: 'Not Found' }
                }
                return { status: 'success', response: users }
            } catch (e) {
                set.status = 500
                return { status: 'error', response: 'Internal Server Error' }
            }
        },
        {
            response: {
                200: t.Object({
                    status: t.String(),
                    response: t.String(),
                }),
                404: t.Object({
                    status: t.String(),
                    response: t.String()
                }),
                500: t.Object({
                    status: t.String(),
                    response: t.String()
                })
            }
        }
    )
    .get(
        '/users/:id',
        async ({ params: { id }  , set }) => {
            try {
                const user = await findOne(Number(id))
                if (!user) {
                    set.status = 404
                    return { status: 'error', response: 'Not Found' }
                }
                return { status: 'success', response: user }
            } catch (e) {
                set.status = 500
                return { status: 'error', response: 'Internal Server Error' }
            }
        },
        {
            response: {
                200: t.Object({
                    status: t.String(),
                    response: t.Object({
                        id: t.Number(),
                        name: t.String(),
                        email: t.String(),
                    })
                }),
                404: t.Object({
                    status: t.String(),
                    response: t.String()
                }),
                500: t.Object({
                    status: t.String(),
                    response: t.String()
                })
            }
        }
    )
    .post(
        '/users',
        async ({ body, set }) => {
            try {
                const user = await create(body)
                return { status: 'success', response: user }
            } catch (e) {
                set.status = 500
                return { status: 'error', response: 'Internal Server Error' }
            }
        },
        {
            body: t.Object({
                name: t.String(),
                email: t.String()
            }),
            response: {
                200: t.Object({
                    status: t.String(),
                    response: t.Object({
                        id: t.Number(),
                        name: t.String(),
                        email: t.String(),
                    })
                }),
                500: t.Object({
                    status: t.String(),
                    response: t.String()
                })
            }
        }
    )
    .put(
        '/users/:id',
        async ({ params: { id }, body, set }) => {
            try {
                const user = await update(Number(id), body)
                return { status: 'success', response: user }
            } catch (e) {
                set.status = 500
                return { status: 'error', response: 'Internal Server Error' }
            }
        },
        {
            body: t.Object({
                name: t.String(),
                email: t.String()
            }),
            response: {
                200: t.Object({
                    status: t.String(),
                    response: t.Object({
                        id: t.Number(),
                        name: t.String(),
                        email: t.String(),
                    })
                }),
                500: t.Object({
                    status: t.String(),
                    response: t.String()
                })
            }
        }
    )

export { usersRoute }