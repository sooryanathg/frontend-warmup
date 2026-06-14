import { DialogTitle } from "@/components/ui/dialog";

export default function FacultyDialog() {
  return (
    <>
      <DialogTitle className="text-4xl font-bold tracking-tight">
        Faculty Information
      </DialogTitle>

      <p className="mt-3 text-zinc-500">
        Meet some of our faculty members and their academic profiles.
      </p>

      <div className="mt-8 max-h-[400px] overflow-y-auto pr-2">
      <div className="space-y-4">

        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 flex items-center justify-between">
  <div>
    <h3 className="text-xl font-semibold">
      Dr. Anil Kumar
    </h3>

    <p className="mt-2 text-zinc-600">
      Ph.D. in Computer Science
    </p>
  </div>

  <p className="text-zinc-600">
    +91 98765 43210
  </p>
</div>


        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 flex items-center justify-between">

  <div>
    <h3 className="text-xl font-semibold">
Dr. Priya Nair    </h3>

    <p className="mt-2 text-zinc-600">
           Ph.D. in Information Technology
    </p>
  </div>

  <p className="text-zinc-600">
+91 98765 43212  </p>

</div>

     </div>
    </div>
      
    </>
  );
}