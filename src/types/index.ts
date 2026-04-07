export interface ProjectLink {
  url: string;
  text: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  links: ProjectLink[];
  imageOrder: string;
  textOrder: string;
  isAsset?: boolean;
}
