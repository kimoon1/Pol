export const projectFilters = [
  "전체",
  "Web",
  "Platform",
  "Mobile",
  "Infrastructure",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export function readProjectSearch(search: string) {
  const params = new URLSearchParams(search);
  const requestedFilter = params.get("filter");
  const filter = projectFilters.find((value) => value === requestedFilter) ?? "전체";
  return { filter, query: params.get("q") ?? "" };
}

export function createProjectSearch(
  search: string,
  filter: ProjectFilter,
  query: string,
) {
  const params = new URLSearchParams(search);
  if (filter === "전체") params.delete("filter");
  else params.set("filter", filter);
  if (query) params.set("q", query);
  else params.delete("q");
  return params.toString();
}
