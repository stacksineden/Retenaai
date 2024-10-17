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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Photo upscaling",
    href: "/generations/photo-upscaling",
    description: "Make your blurry, low-quality photos clear and beautiful.",
  },
  {
    title: "Background remover",
    href: "/generations/bg-remover",
    description:
      "Easily remove backgrounds from your photos with precision using advanced AI tools.",
  },
  {
    title: "Flux AI prompt generator",
    href: "https://huggingface.co/spaces/gokaygokay/FLUX-Prompt-Generator",
    description:
      "Creates tailored prompts to inspire creativity and streamline your image generation process.",
  },
  {
    title: "Image to prompt",
    href: "/generations/image-to-prompt",
    description: "Visualize your imagination with Flux AI.",
  },
];

export function NavMenu() {
  const Navigate = useNavigate();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-accent">
            Magic Tools
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-accent">
            Flux AI
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/lora-gallery"
                  >
                    <div className="h-full w-full rounded-lg">
                      <img
                        src="/assets/psedo-generations/fashion1.webp"
                        alt="heroimage"
                        className="h-full w-full object-contain rounded-lg"
                      />
                    </div>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      AI photoshoot
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Experience the future of photography with a complimentary
                      session and see the difference AI can make.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/generations/flux?mode=flux1.1-pro"
                title="Flux 1.1 pro"
              >
                Create stunning, high-quality images with the power of the most
                advanced AI model.
              </ListItem>
              <ListItem
                href="/generations/flux?mode=flux-dev-realism"
                title="Flux dev realism"
              >
                Embark on a journey through AI-generated masterpieces.
              </ListItem>
              <ListItem
                href="/generations?mode=embed_text_flux"
                title="Flux Embed text"
              >
                Add Keywords and variability to your outputs. Great for product
                photography
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* <Link href="/docs" legacyBehavior passHref> */}
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            onClick={() => Navigate("/sign-in")}
          >
            Generate
          </NavigationMenuLink>
          {/* </Link> */}
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* <Link href="/docs" legacyBehavior passHref> */}
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            onClick={() => Navigate("/pricing")}
          >
            Pricing
          </NavigationMenuLink>
          {/* </Link> */}
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* <Link href="/docs" legacyBehavior passHref> */}
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            onClick={() => Navigate("/showcase")}
          >
            Showcase
          </NavigationMenuLink>
          {/* </Link> */}
        </NavigationMenuItem>
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
