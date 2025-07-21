import ProjectDetails from "@/components/ProjectDetails";

// مع Next.js 13، تعريف params هكذا مقبول:
type Params = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const projects = await import("@/utils/data").then((mod) => mod.projects);
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

// دالة الصفحة هنا ليست async (مهم)
export default function Page({ params }: Params) {
  return <ProjectDetails projectId={params.id} />;
}
