import * as React from "react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";


export function NavMenu() {
  const Navigate = useNavigate();

  return (
    <NavigationMenu>
      <NavigationMenuList>

        <NavigationMenuItem></NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-accent">
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] z-[999999]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/solutions"
                  >
                    <div className="h-full w-full rounded-lg">
                      <img
                        src="/assets/outreach.webp"
                        alt="heroimage"
                        className="h-full w-full object-contain rounded-lg"
                      />
                    </div>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Client aquisition systems
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Let AI fill your pipeline with qualified leads — while you
                      focus on closing deals, not chasing them.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/case-study?system=leadpilot"
                title="Cold Outreach Engine"
              >
                Say goodbye to cold DMs — personalize outreach at scale with an
                AI engine that books meetings while you sleep.
              </ListItem>
              <ListItem href="/solutions" title="Modular AI Infrastructure">
                Turn chaos into clarity — deploy plug-and-play AI systems that
                streamline operations and scale with your business.
              </ListItem>
              <ListItem
                href="/case-study?system=studiogen"
                title="AI photoshoot"
              >
                Experience the future of photography with a complimeentary
                session and see the difference AI can make
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            onClick={() => Navigate("/retenaai-academy")}
          >
            Academy
          </NavigationMenuLink>
          {/* </Link> */}
        </NavigationMenuItem>
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
            onClick={() => Navigate("/solutions")}
          >
            Case Studies
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
