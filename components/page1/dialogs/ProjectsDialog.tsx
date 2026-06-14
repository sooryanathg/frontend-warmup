import { DialogTitle } from "@/components/ui/dialog";

export default function ProjectsDialog() {
  return (
    <>
      <DialogTitle className="text-4xl font-bold tracking-tight">
        Projects
      </DialogTitle>

      <div className="mt-6 space-y-4 text-zinc-600">
        <p>• Mini projects and main projects.</p>
        <p>• Research and innovation opportunities.</p>
        <p>• Team-based development experience.</p>
        <p>• Industry-oriented project exposure.</p>
      </div>
    </>
  );
}