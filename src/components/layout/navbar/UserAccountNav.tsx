"use client"

import { User } from "@/payload-types"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"
import { ShoppingCart, UserIcon } from "lucide-react"

const UserAccountNav = ({ user }: { user: User }) => {
  const { signOut } = useAuth()
  const total = 0
  return (
    <div className="space-x-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="overflow-visible">
          <Button variant="outline" size="icon" className="relative">
            <UserIcon />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white w-60" align="end">
          <div className="flex items-center justify-start gap-2 p-2">
            <div className="flex flex-col space-y-0.5 leading-none">
              <p className="font-medium text-sm text-black">
                {user.email}{" "}
                {user.role === "admin" && (
                  <span className="text-green-400">Admin</span>
                )}
              </p>
            </div>
          </div>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link href="/sell">Seller Dashboard</Link>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={signOut} className="cursor-pointer">
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="outline" size="icon" className="relative">
        <span className="absolute -top-3 -right-3 text-primary-foreground bg-primary w-6 h-6 rounded-full grid place-content-center">
          {total}
        </span>
        <ShoppingCart />
      </Button>
    </div>
  )
}

export default UserAccountNav
