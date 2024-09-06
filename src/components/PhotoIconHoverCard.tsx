import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import type { ReactNode } from "react"

export function PhotoIconHoverCard({ children }: { children: ReactNode }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="cursor-pointer">📸</span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-0 shadow-none border-none overflow-hidden rounded-3xl">
        <div className="flex justify-between space-x-4">{children}</div>
      </HoverCardContent>
    </HoverCard>
  )
}
