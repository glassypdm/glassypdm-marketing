"use client";

import * as React from "react"
import { Glassy } from '@/components/ui/glassy'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { cn } from "@/lib/utils"
import Link from "next/link"

function TopNav() {

    function onNavChange() {
        setTimeout(() => {
          const triggers = document.querySelectorAll(
            '.submenu-trigger[data-state="open"]'
          )
          if (triggers.length === 0) return
    
          const firstTrigger = triggers[0] as HTMLElement
          const viewports = document.getElementsByClassName("submenu-viewport")
    
          if (viewports.length > 0) {
            const viewport = viewports[0] as HTMLElement
            viewport.style.left = `${firstTrigger.offsetLeft}px`
          }
        })
    }

    return (
            <NavigationMenu onValueChange={onNavChange} className="pt-2">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}><Glassy /></NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="submenu-trigger">Features</NavigationMenuTrigger>
                        <NavigationMenuContent>
                        <ul className="w-40">
                            <ListItem title="User-controlled Desktop Sync" />
                            <ListItem title="Version Control" />
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Download</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contribute</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Wiki</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
    )
}

export default TopNav

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"