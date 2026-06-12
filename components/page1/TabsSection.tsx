import { Info, Eye, Target } from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function TabsSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-8 pb-20">

      {/* Heading */}
      <h2 className="mb-4 text-center text-4xl font-bold tracking-tight">
        Department Overview
      </h2>

      <p className="mb-12 text-center text-lg text-zinc-500">
        Learn more about our department, vision, and mission.
      </p>

      <Tabs defaultValue="about" className="w-full">

        {/* Tab Buttons */}
        <TabsList className="grid w-full grid-cols-3 gap-3 bg-transparent p-0">
          <TabsTrigger
  value="about"
  className="
  rounded-2xl
  border border-zinc-200
  bg-white
  py-3
  text-base font-medium
  shadow-sm
  transition-all duration-500 ease-out
  hover:-translate-y-1
  hover:shadow-lg
  data-[state=active]:bg-black
  data-[state=active]:text-white
  data-[state=active]:shadow-xl
"
>
  <Info className="h-4 w-4 mr-2" />
  About Us
</TabsTrigger>

          <TabsTrigger
  value="vision"
  className="
  rounded-2xl
  border border-zinc-200
  bg-white
  py-3
  text-base font-medium
  shadow-sm
  transition-all duration-500 ease-out
  hover:-translate-y-1
  hover:shadow-lg
  data-[state=active]:bg-black
  data-[state=active]:text-white
  data-[state=active]:shadow-xl
"
>
  <Eye className="h-4 w-4 mr-2" />
  Vision
</TabsTrigger>

          <TabsTrigger
  value="mission"
  className="
  rounded-2xl
  border border-zinc-200
  bg-white
  py-3
  text-base font-medium
  shadow-sm
  transition-all duration-500 ease-out
  hover:-translate-y-1
  hover:shadow-lg
  data-[state=active]:bg-black
  data-[state=active]:text-white
  data-[state=active]:shadow-xl
"
>
  <Target className="h-4 w-4 mr-2" />
  Mission
</TabsTrigger>
        </TabsList>

        {/* About Us */}
        <TabsContent value="about">
          <div className="
mt-6
rounded-3xl
border
border-zinc-200
bg-white
p-10
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
">

            <h3 className="mb-6 border-l-4 border-black pl-4 text-3xl font-bold tracking-tight">
              About the Department
            </h3>

            <p className="text-lg leading-9 text-zinc-600">
              The Department of Information Technology is committed to
              providing quality education and fostering innovation among
              students. Through academic excellence and practical learning,
              the department prepares students to meet the challenges of the
              modern technological world.
            </p>

          </div>
        </TabsContent>

        {/* Vision */}
        <TabsContent value="vision">
          <div className="
mt-6
rounded-3xl
border
border-zinc-200
bg-white
p-10
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
">

           <h3 className="mb-6 border-l-4 border-black pl-4 text-3xl font-bold tracking-tight">
              Our Vision
            </h3>

            <p className="text-lg leading-8 text-zinc-600">
              To become a center of excellence in Information Technology
              education and research, producing competent professionals who
              contribute to society through innovation and ethical practices.
            </p>

          </div>
        </TabsContent>

        {/* Mission */}
        <TabsContent value="mission">
          <div className="
mt-6
rounded-3xl
border
border-zinc-200
bg-white
p-10
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
">

            <h3 className="mb-6 border-l-4 border-black pl-4 text-3xl font-bold tracking-tight">
              Our Mission
            </h3>

            <p className="text-lg leading-8 text-zinc-600">
              To provide a strong academic foundation, encourage research and
              innovation, and create an environment that supports lifelong
              learning and professional growth.
            </p>

          </div>
        </TabsContent>

      </Tabs>
    </section>
  );
}