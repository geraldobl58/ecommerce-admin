"use client";

import { useParams, useRouter } from "next/navigation";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

import { ColorColumn, columns } from "./columns";

interface ColorsClientProps {
  data: ColorColumn[];
}

export const ColorsClient = ({ data }: ColorsClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Cores (${data.length})`}
          description="Gerencie suas cores."
        />
        <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Novo Registro
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="Chamada de API para cores" />
      <Separator />
      <ApiList entityName="colors" entityIdName="colorId" />
    </>
  );
};
