import { zodResolver } from "@hookform/resolvers/zod";
import ProfileForm from "@/components/profile-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import {
  newProfileSchema,
  NewProfileSchemaType,
} from "@/schemas/profile-schema";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createProfile } from "@/api/profiles";
import { useState } from "react";

export default function ProfileCreateDialog() {
  const [open, setOpen] = useState(false);

  const methods = useForm<NewProfileSchemaType>({
    resolver: zodResolver(newProfileSchema),
  });

  const { mutateAsync: createProfileMutation } = useMutation({
    mutationFn: (data: NewProfileSchemaType) => createProfile(data),
  });
  async function handleSubmit(data: NewProfileSchemaType) {
    // TODO: improve this to handle error
    createProfileMutation(data);
    setOpen(false);
    methods.reset();
  }

  if (!methods.formState.isValid) {
    console.log(methods.formState.errors);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Create profile</DialogTitle>
          <DialogDescription>Add a new profile</DialogDescription>
        </DialogHeader>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <ProfileForm />
            <DialogFooter>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
