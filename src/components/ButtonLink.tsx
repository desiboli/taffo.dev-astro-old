import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

export function ButtonLink({
  href,
  children,
  ...props
}: {
  href: string
  children: ReactNode
}) {
  return (
    <Button {...props} asChild>
      <a href={href}>{children}</a>
    </Button>
  )
}
