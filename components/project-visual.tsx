import {
  ArrowDown,
  Database,
  Layers,
  Smartphone,
  Workflow,
} from "lucide-react";
import type { Project } from "@/lib/portfolio";
export default function ProjectVisual({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const Icon =
    project.kind === "mobile"
      ? Smartphone
      : project.kind === "system"
        ? Database
        : project.kind === "commerce"
          ? Layers
          : Workflow;
  return (
    <div
      className={`project-visual contribution-visual ${large ? "visual-large" : ""}`}
      aria-hidden="true"
    >
      <div className="contribution-map">
        <div className="contribution-map-header">
          <span>
            <Icon size={15} />
            담당 흐름
          </span>
          <span>{project.number}</span>
        </div>
        <ol className="contribution-flow">
          {project.visualSteps.map((step, i) => (
            <li key={step}>
              <span>0{i + 1}</span>
              <strong>{step}</strong>
              {i < project.visualSteps.length - 1 && <ArrowDown size={12} />}
            </li>
          ))}
        </ol>
        <span className="contribution-map-note">
          {project.status === "in-progress" ? "개발 주제 · 진행 중" : "구성 개념도"}
        </span>
      </div>
    </div>
  );
}
