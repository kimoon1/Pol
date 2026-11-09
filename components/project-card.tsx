import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Project, projectHref, projectStatus } from "@/lib/portfolio";
import ProjectVisual from "./project-visual";
import { Badge } from "./ui";

export default function ProjectCard({
  project,
  heading = "h2",
}: {
  project: Project;
  heading?: "h2" | "h3";
}) {
  const Heading = heading;
  return (
    <Link className="project-card" href={projectHref(project.id)}>
      <ProjectVisual project={project} />
      <div className="project-card-content">
        <div className="project-meta">
          <Badge blue>{project.category}</Badge>
          <span
            className={
              project.status === "in-progress" ? "status-progress" : ""
            }
          >
            {projectStatus(project)}
          </span>
        </div>
        <Heading>
          {project.name}
          <ArrowUpRight size={20} aria-hidden="true" />
        </Heading>
        <p>{project.subtitle}</p>
        <div className="project-contribution">
          <span>직접 담당</span>
          <strong>{project.role}</strong>
        </div>
        <div className="tech-tags">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="project-card-bottom">
          <span>{project.period}</span>
          <span>
            사례 읽기
            <ArrowUpRight size={14} aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
