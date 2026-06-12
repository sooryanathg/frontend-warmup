import { DialogTitle } from "@/components/ui/dialog";

export default function NotesDialog() {
  return (
    <>
      <DialogTitle className="text-4xl font-bold tracking-tight">
        Notes & PYQs
      </DialogTitle>


      <div className="mt-6 space-y-4 text-zinc-600">
        <p>• Semester-wise notes for all subjects.</p>
        <p>• Previous year question papers.</p>
        <p>• Lab manuals and reference materials.</p>
        <p>• Easily accessible study resources.</p>
      </div>
    </>
  );
}