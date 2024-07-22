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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProfile } from "@/api/profiles";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { AxiosError } from "axios";
import { extractMessageFromErrorResponse } from "@/lib/utils";

export default function ProfileCreateDialog() {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const methods = useForm<NewProfileSchemaType>({
    resolver: zodResolver(newProfileSchema),
  });

  const { mutateAsync: createProfileMutation } = useMutation({
    mutationFn: (data: NewProfileSchemaType) => createProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profiles"] });
    },
  });

  async function handleSubmit(data: NewProfileSchemaType) {
    try {
      await createProfileMutation(data);
      setOpen(false);
      methods.reset();
      toast({
        title: "Success",
        description: "Profile created successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: extractMessageFromErrorResponse(error as AxiosError),
      });
    }
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
              <Button disabled={methods.formState.isSubmitting} type="submit">
                Save
              </Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
