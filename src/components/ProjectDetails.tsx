"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Github,
} from "lucide-react";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/utils/data";

interface ProjectDetailsProps {
  projectId: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectId }) => {
  const router = useRouter();

  const projectIdNumber = useMemo(() => {
    const n = Number(projectId);
    return isNaN(n) ? null : n;
  }, [projectId]);

  const project = projects.find((p) => p.id === projectIdNumber);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center text-red-500">
        <h2 className="text-2xl mb-4">Project not found</h2>
        <Button onClick={() => router.push("/")}>Go Home</Button>
      </div>
    );
  }


  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.arrayImage.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.arrayImage.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen transition-colors text-zinc-100">
      <div className="container mx-auto sm:px-4 py-8 max-w-6xl">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:bg-[rgba(255,255,255,0.05)]"
          >
            <Link href="/">
              <ArrowLeft className="h-5 w-5 text-zinc-100" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <Badge className="mt-2 bg-zinc-700">{project.category}</Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className=" overflow-hidden border-[1px] !border-mainColor !bg-[rgba(255,255,255,0.05)]">
              <CardContent className="p-0 border-0">
                <div className="relative aspect-video">
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            {project.arrayImage.length > 0 && (
              <Card className="bg-transparent border-none overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-textColor">
                    App Screenshots
                  </h3>
                  <div className="relative">
                    <div className="aspect-square max-w-xs mx-auto relative overflow-hidden rounded-lg">
                      <Image
                        src={project.arrayImage[currentImageIndex]}
                        alt={`Screenshot ${currentImageIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#333] hover:!bg-[rgba(255,255,255,0.05)]"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-4 w-4 text-zinc-100" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#333] hover:!bg-[rgba(255,255,255,0.05)]"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-4 w-4 text-zinc-100" />
                    </Button>
                  </div>

                  <div className="flex justify-center gap-2 mt-4">
                    {project.arrayImage.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex
                            ? "bg-blue-600"
                            : "bg-zinc-400 dark:bg-zinc-600"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <Card className="!bg-[rgba(255,255,255,0.05)] border-blueColor">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-textColor">
                    Project Description
                  </h2>
                  <p className="text-subtextColor leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.features && (
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-textColor">
                      Features
                    </h3>
                    <p className="text-subtextColor">{project.features}</p>
                  </div>
                )}

                {project.status && (
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-textColor">
                      Status
                    </h3>
                    <p className="text-green-600">{project.status}</p>
                  </div>
                )}
                {project.note !== "" ? (
                  <div>
                    <div className="text-lg font-semibold mb-1 text-red-600">
                      Note:
                    </div>
                    <div className="text-subtextColor">{project.note}</div>
                  </div>
                ) : null}
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              {project.github !== "" ? (
                <Button
                  asChild
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : null}

              {project.downloadLink !== "" ? (
                <Button
                  variant="outline"
                  asChild
                  className="flex-1 bg-white text-zinc-700 "
                >
                  <Link
                    href={project.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download App APK
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : null}

              {project.downloadLinkIOS !== "" ? (
                <Button
                  variant="outline"
                  asChild
                  className="flex-1 bg-white text-zinc-700 "
                >
                  <Link
                    href={project.downloadLinkIOS}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download App IOS
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
