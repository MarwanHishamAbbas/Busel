import express from "express"
import payload from "payload"
import { nextApp, nextHandler } from "./next-utils"
import * as trpcExpress from "@trpc/server/adapters/express"
import nextBuild from "next/dist/build"
import path from "path"
import { inferAsyncReturnType } from "@trpc/server"
import { appRouter } from "./trpc"
import { PayloadRequest } from "payload/types"
import { parse } from "url"

require("dotenv").config()
const app = express()
const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
})

export type ExpressContext = inferAsyncReturnType<typeof createContext>

const PORT = Number(process.env.PORT) || 3000

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET!,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })
  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      payload.logger.info("Next.js is building for production.")

      // @ts-expect-error
      await nextBuild(path.join(__dirname, "../"))

      process.exit()
    })

    return
  }

  const cartRouter = express.Router()
  cartRouter.use(payload.authenticate)
  cartRouter.get("/", (req, res) => {
    const request = req as PayloadRequest
    if (!request.user) return res.redirect("/sign-in?origin=cart")
    const parseUrl = parse(req.url, true)
    return nextApp.render(req, res, "/cart", parseUrl.query)
  })
  app.use("/cart", cartRouter)

  app.use(
    "/api/trpc",
    trpcExpress.createExpressMiddleware({ router: appRouter, createContext })
  )
  app.use((req, res) => nextHandler(req, res))

  nextApp.prepare().then(() => {
    payload.logger.info("Next.js started")

    app.listen(PORT, async () => {
      payload.logger.info(
        `Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
      )
    })
  })
}

start()
