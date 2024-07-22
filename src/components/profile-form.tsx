import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function CustomErrorMessage({ message }: { message: string }) {
  return <p className="text-red-500 text-xs mt-1">{message}</p>;
}

export default function ProfileForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right font-bold">
          Name
        </Label>
        <div className="col-span-3">
          <Input
            {...register("username")}
            id="username"
            placeholder="example: Linus Torvalds"
          />
          <ErrorMessage
            errors={errors}
            name="username"
            render={({ message }) => <CustomErrorMessage message={message} />}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="profile_url" className="text-right font-bold">
          Github URL
        </Label>
        <div className="col-span-3">
          <Input
            {...register("profile_url")}
            id="profile_url"
            placeholder="example: https://github.com/torvalds"
          />
          <ErrorMessage
            errors={errors}
            name="profile_url"
            render={({ message }) => <CustomErrorMessage message={message} />}
          />
        </div>
      </div>
    </div>
  );
}
