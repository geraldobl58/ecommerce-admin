"use client";

import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import Link from "next/link";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}/`,
      label: "Inicio",
      active: pathname === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/billboards`,
      label: "Painel",
      active: pathname === `/${params.storeId}/billboards`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Configurações",
      active: pathname === `/${params.storeId}/settings`,
    },
  ];

  return (
    <nav
      className={cn(
        `
        flex
        items-center
        space-x-4
        lg:space-x-6
      `,
        className
      )}
    >
      {routes.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            `
            text-sm
            font-medium
            transition-colors
            hover:text-primary
          `,
            item.active ? "text-black dark:text-white" : "text-muted-foreground"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
