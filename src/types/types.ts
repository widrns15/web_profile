export type CategoryValueType =
  | "personalProject"
  | "studyGroup"
  | "selfDevelopement"
  | "hobby";

export type CategoryType = {
  key: number;
  label: string;
  value: CategoryValueType;
};

export type SidebarRightIconsType = {
  background: string;
  icon: string;
  url: string;
};

export interface NewsListProps {
  key: string;
  title: string;
  subTitle: string;
  tags: { text: string; color: string }[];
}

export interface SelectionItemProps {
  key: string;
  title: string;
  subTitle: string;
  image: string;
  isSmallImage?: boolean;
  url?: string;
  tags: { text: string; color: string }[];
}
