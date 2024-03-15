import { PrimaryActionEmailHtml } from "../components/email/PrimaryActionEmail"
import { CollectionConfig } from "payload/types"

const Users: CollectionConfig = {
  slug: "users",
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => {
        return PrimaryActionEmailHtml({
          actionLabel: "verify your account",
          buttonText: "Verify Account",
          href: `${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}`,
        })
      },
    },
  },

  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}

export default Users
