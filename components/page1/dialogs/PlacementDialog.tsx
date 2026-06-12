import { DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export default function PlacementDialog() {
  return (
    <>
      <DialogTitle className="text-4xl font-bold tracking-tight">
        Placement Statistics 2026
      </DialogTitle>

      <div className="mt-6 flex flex-wrap gap-3">

  <Badge>95% Placement Rate</Badge>

  <Badge variant="secondary">
    ₹12 LPA Highest
  </Badge>

  <Badge variant="outline">
    30+ Recruiters
  </Badge>

  <Badge>
    2026 Batch
  </Badge>

</div>

      <div className="mt-6 space-y-5">

        <div className="flex justify-between">
          <span>Placement Rate</span>
          <span className="font-bold">95%</span>
        </div>

        <div className="flex justify-between">
          <span>Highest Package</span>
          <span className="font-bold">₹12 LPA</span>
        </div>

        <div className="flex justify-between">
          <span>Average Package</span>
          <span className="font-bold">₹5.5 LPA</span>
        </div>

        <div className="flex justify-between">
          <span>Companies Visited</span>
          <span className="font-bold">30+</span>
        </div>

      </div>
    </>
  );
}