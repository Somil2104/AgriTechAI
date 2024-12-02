"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


 const megaMenuData = [
  {
    Title: "Farm Supplies & Equipment",
    services: [
      {
        title: "High-Quality Seeds",
        slug: "quality-seeds",
        description: "Browse a variety of certified seeds for optimal crop yield and quality.",
      },
      {
        title: "Agricultural Machinery",
        slug: "farm-machinery",
        description: "Find top-notch machinery and equipment to streamline your farming operations.",
      },
      {
        title: "Organic Fertilizers & Pesticides",
        slug: "fertilizers-pesticides",
        description: "Access eco-friendly fertilizers and pesticides to promote sustainable farming.",
      },
    ],
  },
  {
    Title: "Crop Advisory Services",
    services: [
      {
        title: "Virtual Crop Consultations",
        slug: "crop-consultations",
        description: "Connect with agronomists for expert advice on crop management and health.",
      },
      {
        title: "Soil Testing Services",
        slug: "soil-testing",
        description: "Get detailed soil analysis and recommendations for optimal crop growth.",
      },
      {
        title: "Weather Insights & Alerts",
        slug: "weather-insights",
        description: "Receive accurate weather updates and alerts tailored for farmers.",
      },
    ],
  },
  {
    Title: "Livestock & Poultry",
    services: [
      {
        title: "Animal Feed & Supplements",
        slug: "animal-feed",
        description: "Purchase premium feed and supplements for healthy livestock and poultry.",
      },
      {
        title: "Online Veterinary Support",
        slug: "vet-support",
        description: "Consult experienced veterinarians for livestock health and care advice.",
      },
      {
        title: "Livestock Equipment",
        slug: "livestock-equipment",
        description: "Explore tools and equipment designed to make livestock farming efficient.",
      },
    ],
  },
  {
    Title: "Agri-Marketplace",
    services: [
      {
        title: "Sell Your Produce",
        slug: "sell-produce",
        description: "List your agricultural produce and connect with buyers directly.",
      },
      {
        title: "Farmers' Auctions",
        slug: "farmers-auctions",
        description: "Participate in real-time auctions to sell or buy agricultural goods.",
      },
      {
        title: "Market Price Updates",
        slug: "market-prices",
        description: "Stay updated on the latest market prices for crops and livestock.",
      },
    ],
  },
  {
    Title: "Sustainable Farming",
    services: [
      {
        title: "Organic Farming Resources",
        slug: "organic-farming",
        description: "Access tools and techniques for sustainable and organic farming practices.",
      },
      {
        title: "Renewable Energy for Farms",
        slug: "farm-energy",
        description: "Explore solar, wind, and other renewable energy solutions for your farm.",
      },
      {
        title: "Water Conservation Techniques",
        slug: "water-conservation",
        description: "Learn innovative methods to manage and conserve water efficiently on your farm.",
      },
    ],
  },
  
];

export function Menu() {
  return (
    <NavigationMenu className="">
      <NavigationMenuList className="space-x-4" >
        {
        megaMenuData.map((item,i) => {
          return(
            <NavigationMenuItem key={i} >
              <NavigationMenuTrigger>
                {item.Title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grod-cols-2 lg:w-[600px]">
                  {
                    item.services.map((component)=>(
                      <ListItem key={component.title} title={component.title} href={`/services${component.slug}`}>
                        {component.description}
                      </ListItem>
                    ))
                  }
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )
        })
      }
      </NavigationMenuList>
    </NavigationMenu>
  )
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
  )
})
ListItem.displayName = "ListItem"




