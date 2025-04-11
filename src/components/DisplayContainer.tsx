import { useState } from "react";
import { LayoutType, ContentItem } from '../types';
import ContentCard from "./ContentCard";
import { LuLayoutList, LuLayoutGrid } from "react-icons/lu";

interface DisplayContainerProps {
  items: ContentItem[];
  children?: (item: ContentItem, layout: LayoutType) => React.ReactNode;
  defaultLayout?: LayoutType;
}

export const DisplayContainer = ({ 
  items, 
  children, 
  defaultLayout = "grid" 
} : DisplayContainerProps) => {
  const [layout, setLayout] = useState<LayoutType>(defaultLayout);

  // Styles pour le conteneur principal
  const containerClasses = layout === "grid" 
    ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    : "flex flex-col gap-2";

  return (
    <div>
      <div className="flex justify-end mb-4 gap-2">
        <button 
          onClick={() => setLayout("grid")} 
          className={`p-2 rounded ${layout === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          <LuLayoutGrid />
        </button>
        <button 
          onClick={() => setLayout("list")} 
          className={`p-2 rounded ${layout === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          <LuLayoutList />
        </button>
      </div>
      
      <div className={containerClasses}>
        {items.map(item => (
          children 
            ? children(item, layout) 
            : <ContentCard key={item.id} item={item} layout={layout} />
        ))}
      </div>
    </div>
  );
};

export default DisplayContainer;