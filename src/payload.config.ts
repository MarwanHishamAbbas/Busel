import path from "path"
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { webpackBundler } from "@payloadcms/bundler-webpack"
import { slateEditor } from "@payloadcms/richtext-slate"
import { buildConfig } from "payload/config"

import Users from "./collections/Users"

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [Users],
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    meta: {
      // Adding thumbnails and favicon later
      titleSuffix: "- Busell",
    },
  },
  editor: slateEditor({}),
  rateLimit: {
    max: 2000,
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
})
