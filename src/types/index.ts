// types.ts
export type LayoutType = "list" | "grid";
export interface ContentItem {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  // autres propriétés selon vos besoins
}