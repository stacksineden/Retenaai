import * as React from "react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";
import { useUserCountry } from "@/hooks/useUserLocation";

export function NavMenu() {
  const Navigate = useNavigate();

  const { country } = useUserCountry();

  const isNigeria = country === "NG";

  return (
    <NavigationMenu className="mt-3">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            onClick={() => Navigate(isNigeria ? "/packages" : "/contact")}
          >
            Packages
          </NavigationMenuLink>
          {/* </Link> */}
        </NavigationMenuItem>

        {/* <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            onClick={() => Navigate("/retenaai-academy")}
          >
            Academy
          </NavigationMenuLink>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            onClick={() => Navigate("/enterprise")}
          >
            Pilot Program
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            onClick={() => Navigate("/case-study")}
          >
            Case Studies
          </NavigationMenuLink>
        </NavigationMenuItem>
        {isNigeria && (
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            onClick={() => Navigate("/affiliate-program")}
          >
            Affiliate Program
          </NavigationMenuLink>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

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
            className,
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
  );
});
ListItem.displayName = "ListItem";
