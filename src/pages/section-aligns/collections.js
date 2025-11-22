export default function Collection({
  collections,
  selectedCollections,
  sectionCollectionData,
  onToggle
}) {
  
  let collectionFound = [];

  if(collections?.length, sectionCollectionData?.length){
    const collectionExtract = sectionCollectionData.map(c => c.collections);
    collectionFound = collectionExtract.flat().map(item => item.collectionId);
  }

  
  return (
    <>
      {collections?.map(c => (
        <div
          key={c.id}
          className={`text-left mt-4 p-1 px-4 text-2.5r mob:text-1.5r rounded-lg ${ !collectionFound.includes(c.id) && 'text-gray-500'}`}
        >
          <input
            type="checkbox"
            checked={selectedCollections.includes(c.id)}
            onChange={() => onToggle(c.id)}
          />
          {c.id} {c.title}
        </div>
      ))}
    </>
  );
}
