import { LayoutType, ContentItem } from "../types";

interface ContentCardProps {
  item: ContentItem;
  layout: LayoutType;
}

export const ContentCard = ({ item, layout } : ContentCardProps) => {
  // Styles dynamiques selon le layout
  const cardClasses = layout === "grid" 
    ? "flex flex-col p-4 border-2 border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow hover:border-blue-200"
    : "flex flex-row items-center p-4 border-b border-gray-200 bg-white hover:bg-blue-50 transition-colors";

  return (
    <div className={cardClasses}>
      {item.icon && (
        <div className={layout === "grid" ? "mb-3 text-4xl" : "mr-3 text-2xl"}>
          {item.icon}
        </div>
      )}
      <div className={layout === "grid" ? "text-center" : "flex-1"}>
        <h3 className="font-semibold">{item.title}</h3>
        {item.description && (
          <p className={layout === "grid" ? "text-sm mt-1" : "text-sm"}>
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContentCard;