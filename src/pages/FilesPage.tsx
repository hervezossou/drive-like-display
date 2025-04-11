import DisplayContainer from "../components/DisplayContainer";
import { LuFileText, LuFolder, LuImage, LuMusic } from "react-icons/lu";

const FilesPage = () => {
  const files = [
    {
      id: '1',
      title: 'Document.pdf',
      description: 'Modifié hier',
      icon: <LuFileText className="text-green-600 size-8" />,
    },
    {
      id: "2",
      title: 'Projets',
      description: 'Dossier',
      icon: <LuFolder className="text-green-600 size-8" />,
    },
    {
      id: '3',
      title: 'Image.jpg',
      description: '1.5 MB',
      icon: <LuImage className="text-green-600 size-8" />,
    },
    {
      id: '4',
      title: 'Musique.mp3',
      description: '3.2 MB',
      icon: <LuMusic className="text-green-600 size-8" />,
    },
    // ... autres éléments
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-1">Mes fichiers</h1>
      {/*<DisplayContainer items={files} defaultLayout="grid" />*/}
      
      {/* Alternative avec children personnalisé */}
      <DisplayContainer items={files} defaultLayout="list">
        {(item, layout) => (
          <div 
            className={`p-3 ${layout === "list" ? "flex items-center border-b" : "border rounded"}`}
          >
            <div className={layout === "list" ? "mr-3" : "mb-2"}>
              {item.icon}
            </div>
            <div>
              <h3>{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
        )}
      </DisplayContainer>
    </div>
  );
};

export default FilesPage;