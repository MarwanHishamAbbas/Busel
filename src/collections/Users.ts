import { PrimaryActionEmailHtml } from "../components/email/PrimaryActionEmail"
import { CollectionConfig } from "payload/types"

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,

  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
