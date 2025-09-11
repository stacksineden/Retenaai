import * as React from "react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";

export function AcademyNavMenu() {
  const Navigate = useNavigate();


  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem></NavigationMenuItem>
        <NavigationMenuItem>
          {/* <Link href="/docs" legacyBehavior passHref> */}
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            onClick={() => Navigate("/retenaai-academy/program?mode=generative_ai_engineering")}
          >
            Program
          </NavigationMenuLink>
          {/* </Link> */}
        </NavigationMenuItem>

        <NavigationMenuItem>
          {/* <Link href="/docs" legacyBehavior passHref> */}
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            onClick={() => Navigate("/retenaai-academy#how-it-works")}
          >
            How It Works
          </NavigationMenuLink>
          {/* </Link> */}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            onClick={() => Navigate("/")}
          >
            Company
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            onClick={() => Navigate("/retenaai-academy#faqs")}
          >
            Faqs
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuLink
          className={navigationMenuTriggerStyle()}
          onClick={() => Navigate("/careers")}
        >
          Careers
        </NavigationMenuLink>
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
  );
});
ListItem.displayName = "ListItem";
