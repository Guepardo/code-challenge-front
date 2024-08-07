import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Pencil } from "lucide-react";
import ProfileForm from "../profile-form";
import { FormProvider, useForm } from "react-hook-form";
import {
  newProfileSchema,
  NewProfileSchemaType,
} from "@/schemas/profile-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProfileResponse, updateProfile } from "@/api/profiles";
import { useState } from "react";
import { toast } from "../ui/use-toast";
import { extractMessageFromErrorResponse } from "@/lib/utils";
import { AxiosError } from "axios";

export type ProfileCardEditDialogProps = {
  id: string;
  username: string;
  profile_url: string;
};

type ProfileCardEditDialogType = {
  profile: Pick<ProfileResponse, "username" | "profile_url" | "id">;
};

export default function ProfileCardEditDialog({
  profile,
}: ProfileCardEditDialogType) {
  const [open, setOpen] = useState(false);

  const queryClient = useQueryClient();

  const methods = useForm<NewProfileSchemaType>({
    resolver: zodResolver(newProfileSchema),
    values: {
      username: profile.username,
      profile_url: profile.profile_url,
    },
  });

  const { mutateAsync: updateProfileMutation } = useMutation({
    mutationFn: (data: NewProfileSchemaType) => updateProfile(profile.id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profiles"] });
    },
  });

  async function handleSubmit(data: NewProfileSchemaType) {
    try {
      await updateProfileMutation(data);
      toast({ title: "Success", description: "Profile updated successfully" });
      setOpen(false);
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
        <Button className="justify-start" variant={"ghost"}>
          <Pencil className="mr-2 h-4 w-4" /> Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. This action will trigger a
            automatic refresh.
          </DialogDescription>
        </DialogHeader>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <ProfileForm />
            <DialogFooter>
              <Button disabled={methods.formState.isSubmitting} type="submit">
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
