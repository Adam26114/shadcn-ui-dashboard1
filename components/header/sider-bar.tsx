"use client";
import {
    Bell,
    Package2,
} from "lucide-react";

import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { MenuLinks } from "@/constants/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SideBar = () => {

    const pathname = usePathname();
    return (
        <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-semibold font-poppin"
                    >
                        <Package2 className="h-6 w-6" />
                        <span className="">Acme Inc</span>
                    </Link>
                    <Button
                        variant="outline"
                        size="icon"
                        className="ml-auto h-8 w-8"
                    >
                        <Bell className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                    {MenuLinks.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    {!item.subMenuItems ? (
                                        <Link
                                            href={item.path}
                                            className={cn("sidebar-menu-link", pathname === item.path && "bg-black text-white")}
                                        >
                                            {item.icon}
                                            {item.title}
                                        </Link>
                                    ) : (
                                        <Accordion
                                            type="single"
                                            collapsible
                                            className="p-0 m-0 flex flex-col gap-0"
                                        >
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger className="mx-[-0.65rem] rounded-xl px-3  hover:text-foreground  hover:bg-slate-100">
                                                    <Link
                                                        href={item.path}
                                                            className={
                                                                cn(
                                                                    "sidebar-menu-link",
                                                                    pathname === item.path && "bg-black text-white"
                                                                )}
                                                    >
                                                        {item.icon}
                                                        {item.title}
                                                    </Link>
                                                </AccordionTrigger>
                                                <AccordionContent className="flex flex-col gap-0">
                                                    {item.subMenuItems?.map(
                                                        (subMenuItem, idx) => (
                                                            <Link
                                                                href={
                                                                    subMenuItem.path
                                                                }
                                                                className={cn("sidebar-submenu-link", pathname === subMenuItem.path && "bg-black text-white")}
                                                                key={idx}
                                                            >
                                                                {
                                                                    subMenuItem.icon
                                                                }
                                                                {
                                                                    subMenuItem.title
                                                                }
                                                            </Link>
                                                        )
                                                    )}
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    )}
                                </div>
                            );
                        })}
    
                    </nav>
                </div>
                <div className="mt-auto p-4">
                    <Card x-chunk="dashboard-02-chunk-0">
                        <CardHeader className="p-2 pt-0 md:p-4">
                            <CardTitle>Upgrade to Pro</CardTitle>
                            <CardDescription>
                                Unlock all features and get unlimited access to
                                our support team.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                            <Button size="sm" className="w-full">
                                Upgrade
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
