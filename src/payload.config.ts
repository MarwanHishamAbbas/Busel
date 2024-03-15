import { buildConfig } from "payload/config"
import { webpackBundler } from "@payloadcms/bundler-webpack"
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { slateEditor } from "@payloadcms/richtext-slate"
import path from "path"
import { Users } from "./collections/Users"
import dotenv from "dotenv"
import { Products } from "./collections/products/Products"
import { Media } from "./collections/products/Media"
import { ProductFile } from "./collections/products/ProductFile"
import { Orders } from "./collections/Orders"

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
})

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [Users, Products, Media, ProductFile, Orders],
  routes: {
    admin: "/sell",
  },
  admin: {
    user: "users",
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "- Busell",
    },
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
})
