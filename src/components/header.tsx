import { Github } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex flex-1 justify-center items-center">
        <Github size={30} />
      </div>
    </header>
  );
}
