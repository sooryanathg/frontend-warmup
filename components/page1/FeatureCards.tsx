import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";


import {
  Users,
  BookOpen,
  Code,
  Calendar,
  BriefcaseBusiness,
} from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import FacultyDialog from "./dialogs/FacultyDialog";
import NotesDialog from "./dialogs/NotesDialog";
import ProjectsDialog from "./dialogs/ProjectsDialog";
import EventsDialog from "./dialogs/EventsDialog";
import PlacementDialog from "./dialogs/PlacementDialog";

import { Badge } from "@/components/ui/badge";

export default function FeatureCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-8">
      <h2 className="mb-10 text-center text-[42px] font-bold tracking-tight">
        Featured Areas
      </h2>

      {/* Top Row */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      <Dialog>
      <DialogTrigger asChild>

        {/* Faculty */}
        <Card
          className="
          group
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-xl
          hover:scale-105
          hover:rotate-1
          hover:border-black
          hover:bg-zinc-50
          cursor-pointer
        "
        >
          <CardHeader>
            <Badge variant="secondary" className="w-fit mb-3">
            Faculty
            </Badge>
            <Users
              className="
              mb-3 h-7 w-7 text-zinc-500
              transition-all duration-300
              group-hover:text-black
              group-hover:scale-110
            "
            />

            <CardTitle className="text-2xl font-bold group-hover:text-black transition-colors duration-300">
              Faculty Information
            </CardTitle>

            <CardDescription>
              Meet our faculty members and explore their profiles.
            </CardDescription>
          </CardHeader>

          <CardContent>
            Learn about expertise, research areas, and contact details.
          </CardContent>
        </Card>

        </DialogTrigger>

         <DialogContent className="w-[90vw] max-w-6xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-2xl">
        <FacultyDialog />
       </DialogContent>
      </Dialog> 

        {/* Notes */}

        <Dialog>
        <DialogTrigger asChild>

        <Card
          className="
          group
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-xl
          hover:scale-105
          hover:rotate-1
          hover:border-black
          hover:bg-zinc-50
          cursor-pointer
        "
        >
          <CardHeader>
            <Badge variant="secondary" className="w-fit mb-3">
             Academic
            </Badge>

            <BookOpen
              className="
              mb-3 h-7 w-7 text-zinc-500
              transition-all duration-300
              group-hover:text-black
              group-hover:scale-110
            "
            />

            <CardTitle className="text-2xl font-bold group-hover:text-black transition-colors duration-300">
              Notes & PYQs
            </CardTitle>

            <CardDescription>
              Access study materials and previous year question papers.
            </CardDescription>
          </CardHeader>

          <CardContent>
            Helping students prepare efficiently for examinations.
          </CardContent>
        </Card>
        </DialogTrigger>

         <DialogContent className="max-w-2xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-2xl">
        <NotesDialog />
       </DialogContent>
      </Dialog>



        {/* Projects */}

        <Dialog>
        <DialogTrigger asChild>

        <Card
          className="
          group
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-xl
          hover:scale-105
          hover:rotate-1
          hover:border-black
          hover:bg-zinc-50
          cursor-pointer
        "
        >
          <CardHeader>
            <Badge variant="secondary" className="w-fit mb-3">
            Innovation
            </Badge>
            <Code
              className="
              mb-3 h-7 w-7 text-zinc-500
              transition-all duration-300
              group-hover:text-black
              group-hover:scale-110
            "
            />

            <CardTitle className="text-2xl font-bold group-hover:text-black transition-colors duration-300">
              Projects
            </CardTitle>

            <CardDescription>
              Explore innovative projects developed by students.
            </CardDescription>
          </CardHeader>

          <CardContent>
            Showcasing creativity, teamwork, and technical skills.
          </CardContent>
        </Card>
        </DialogTrigger>

        <DialogContent className="max-w-2xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-2xl">
         <ProjectsDialog/>
        </DialogContent>
        </Dialog>

      </div>

      {/* Bottom Row */}
      <div className="mt-6 flex flex-wrap justify-center gap-6">

        {/* Events */}
 
        <Dialog>
        <DialogTrigger asChild>
 
        <Card
          className="
          group
          w-full max-w-[380px]
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-xl
          hover:scale-105
          hover:rotate-1
          hover:border-black
          hover:bg-zinc-50
          cursor-pointer
        "
        >
          <CardHeader>
            <Badge className="w-fit mb-3">
            Live
            </Badge>
            <Calendar
              className="
              mb-3 h-7 w-7 text-zinc-500
              transition-all duration-300
              group-hover:text-black
              group-hover:scale-110
            "
            />

            <CardTitle className="text-2xl font-bold group-hover:text-black transition-colors duration-300">
              Upcoming Events
            </CardTitle>

            <CardDescription>
              Stay informed about workshops, seminars, and hackathons.
            </CardDescription>
          </CardHeader>

          <CardContent>
            Never miss important department activities.
          </CardContent>
        </Card>
        </DialogTrigger>

         <DialogContent className="max-w-2xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-2xl">
        <EventsDialog />
       </DialogContent>
      </Dialog>

        {/* Placements */}

        <Dialog>
         <DialogTrigger asChild>

        <Card
          className="
          group
          w-full max-w-[380px]
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-xl
          hover:scale-105
          hover:rotate-1
          hover:border-black
          hover:bg-zinc-50
          cursor-pointer
          min-h-[190px]
        "
        >
          <CardHeader>
            <Badge className="w-fit mb-3">
            2026
            </Badge>
            <BriefcaseBusiness
              className="
              mb-3 h-7 w-7 text-zinc-500
              transition-all duration-300
              group-hover:text-black
              group-hover:scale-110
            "
            />

            <CardTitle className="text-2xl font-bold group-hover:text-black transition-colors duration-300">
              Placement Statistics
            </CardTitle>

            <CardDescription>
              View placement records and recruiter information.
            </CardDescription>
          </CardHeader>

          <CardContent>
            Track student achievements and career opportunities.
          </CardContent>
        </Card>
        </DialogTrigger>

         <DialogContent className="max-w-2xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-2xl">
        <PlacementDialog />
       </DialogContent>
      </Dialog>

      </div>
    </section>
  );
}