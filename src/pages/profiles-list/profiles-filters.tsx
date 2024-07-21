import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ProfileCreateDialog from "./profile-create-dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

const formFilterSchema = z.object({
  term: z.string().optional(),
});

type FormFilterSchema = z.infer<typeof formFilterSchema>;

export default function ProfilesFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { register, handleSubmit } = useForm<FormFilterSchema>({
    defaultValues: {
      term: searchParams.get("term") || "",
    },
  });

  function handleApplyFilters({ term }: FormFilterSchema) {
    setSearchParams((params) => {
      if (term) {
        params.set("term", term);
        params.delete("page");
      } else {
        params.delete("term");
      }

      return params;
    });
  }

  return (
    <div className="flex flex-row gap-2">
      <form
        className="flex flex-1 gap-2"
        onSubmit={handleSubmit(handleApplyFilters)}
      >
        <Input
          className="flex-1"
          {...register("term")}
          placeholder="Filter by name, location, organization or url"
        />
        <Button type="submit" variant={"outline"}>
          <Search className="mr-2 h-4 w-4" /> Filter
        </Button>
      </form>
      <ProfileCreateDialog />
    </div>
  );
}
