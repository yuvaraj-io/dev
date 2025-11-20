export default function Collection({
  collections,
  selectedCollections,
  onToggle
}) {
  return (
    <>
      {collections?.map(c => (
        <div
          key={c.id}
          className="text-left mt-4 p-1 px-4 text-2.5r mob:text-1.5r rounded-lg"
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
