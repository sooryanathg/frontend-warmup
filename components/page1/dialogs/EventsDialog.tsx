import { DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export default function EventsDialog() {
  return (
    <>
      <DialogTitle className="text-4xl font-bold tracking-tight">
  Upcoming Events
</DialogTitle>

<div className="mt-6 flex flex-wrap gap-3">

  <Badge>AI Workshop</Badge>

  <Badge variant="secondary">
    Hackathon
  </Badge>

  <Badge variant="outline">
    IEEE
  </Badge>

</div>

      <div className="mt-6 space-y-4 text-zinc-600">
        <p>📅 IEEE Workshop on AI & ML</p>
        <p>📅 Hackathon Registration Open</p>
        <p>📅 Placement Training Sessions</p>
        <p>📅 Technical Seminars and Guest Lectures</p>
      </div>
    </>
  );
}