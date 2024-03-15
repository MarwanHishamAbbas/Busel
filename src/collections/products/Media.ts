import { User } from "../../payload-types"
import { Access, CollectionConfig } from "payload/types"

const isAdminOrHasAccessToMedia =
  (): Access =>
  async ({ req }) => {
    const user = req.user as User | null
    // You can't read this image
    if (!user) return false

    // you can read this image cause I'm ADMIN
    if (user.role === "admin") return true

    // you can read it if it's your own image
    return {
      user: {
        equals: req.user.id,
      },
    }
  }

export const Media: CollectionConfig = {
  slug: "media",
  hooks: {
    beforeChange: [
      ({ req, data }) => {
        // Assign each Media to it's specific User so that not all users has access to all medias
        return { ...data, user: req.user.id }
      },
    ],
  },
  access: {
    // Who can see what?
    read: async ({ req }) => {
      // is the user logged in?
      const referer = req.headers.referer
      // if your are on the front-end
      if (!req.user || !referer?.includes("sell")) return true
      return await isAdminOrHasAccessToMedia()({ req })
    },
    // shorhand for destructure the req and pass it
    delete: isAdminOrHasAccessToMedia(),
    update: isAdminOrHasAccessToMedia(),
  },

  admin: {
    hidden: ({ user }) => user.role === "admin",
  },
  upload: {
    staticURL: "/media",
    staticDir: "media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        height: undefined,
        position: "centre",
      },
    ],
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
  ],
}
