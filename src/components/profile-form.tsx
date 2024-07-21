import { useFormContext } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function ProfileForm() {
  const { register } = useFormContext();

  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right font-bold">
          Name
        </Label>
        <Input
          {...register("username")}
          id="username"
          placeholder="example: Linus Torvalds"
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right font-bold">
          Github URL
        </Label>
        <Input
          {...register("profile_url")}
          id="username"
          placeholder="example: https://github.com/torvalds"
          className="col-span-3"
        />
      </div>
    </div>
  );
}
