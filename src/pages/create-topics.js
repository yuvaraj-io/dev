import React, { useState, useMemo } from 'react';
import Heading from "./ui-reusables/Heading";
import { 
  useFetchTopicsQuery, 
  useFetchSectionsQuery,
  useFetchSectionCollectionsQuery, 
  usePostSectionCollectionsMutation,
  useFetchCollectionsQuery 
} from "../store/apis/blog";

import SectionFormat from './section-aligns/section-format';
import Collection from './section-aligns/collections';
import { refreshApp } from '../commons/common-method';

export default function CreateTopics() {

  const [learnId, setLearnId] = useState();
  const [sectionId, setActiveSectionId] = useState();

  // LOCAL UI STATE to override server data
  const [localSectionCollections, setLocalSectionCollections] = useState({});

  const { data, isLoading } = useFetchTopicsQuery();
  const { data: sectionData } = useFetchSectionsQuery(learnId, { skip: !learnId });
  const { data: sectionCollectionData } = useFetchSectionCollectionsQuery(learnId, { skip: !learnId });
  const { data: collections } = useFetchCollectionsQuery(learnId, { skip: !learnId });

  const [ sendCollectionSection, collectionSections ] = usePostSectionCollectionsMutation();

  // -----------------------------------------
  // TOPICS UI
  // -----------------------------------------
  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-center items-center h-full">
        <div className="w-6 h-12 rounded-full bg-slate-300 animate-spin" /> loading...
      </div>
    );
  } else if (data) {
    content = data.map((n, i) => (
      <li key={i} onClick={() => setLearnId(btoa(n.id))}>
        {n.id} {n.name}
      </li>
    ));
  }

  // -----------------------------------------
  // SELECTED COLLECTIONS (parent-owned)
  // -----------------------------------------
  const selectedCollections = useMemo(() => {

    // If user already interacted → prefer local state
    if (localSectionCollections[sectionId]) {
      return localSectionCollections[sectionId];
    }

    // Else fallback to API response
    const section = sectionCollectionData?.find(
      s => s.sectionId === sectionId
    );

    return section
      ? section.collections.map(c => c.collectionId)
      : [];

  }, [sectionId, sectionCollectionData, localSectionCollections]);


  // -----------------------------------------
  // TOGGLE COLLECTIONS
  // -----------------------------------------
  const markCollections = (collectionId) => {
    setLocalSectionCollections(prev => {
      const current = prev[sectionId] || selectedCollections;

      const updated = current.includes(collectionId)
        ? current.filter(id => id !== collectionId)
        : [...current, collectionId];

      return {
        ...prev,
        [sectionId]: updated
      };
    });
  };

  const setMulipleSections = async () => {

    try{
        const collectionSection = await  sendCollectionSection({
            topicId: atob(learnId), 
            sectionId: sectionId, 
            collections: selectedCollections
        });
        refreshApp();
    }catch(error){
        console.error(error);
    }
    

  }


  // -----------------------------------------
  // UI LAYOUT
  // -----------------------------------------
  return (
    <div>
     <button className="p-1r px-5 border border-solid border-purple-500 text-1.5r ml-5" onClick={setMulipleSections} >Save</button>
      <div className="flex">

        {/* Topics */}
        <div className="w-1/5 mob:w-10">
          <Heading text="Topics" />
          <ul>{content}</ul>
        </div>

        {/* Sections */}
        <div className="w-1/5 mob:w-full">
          <Heading text="Sections" />
          <SectionFormat 
            sectionData={sectionData} 
            sectionId={sectionId} 
            activeSectionId={setActiveSectionId} 
            topicId={learnId}
          />
        </div>

        {/* Preview */}
        <div className="w-1/5 mob:w-full">
          <Heading text="Preview" />
          {sectionCollectionData &&
            sectionCollectionData.map(c => (
              <div
                key={c.id}
                className="text-left mt-4 p-1 px-4 text-2.5r mob:text-1.5r rounded-lg text-purple-500"
              >
                {c.id} {c.section_name}

                {c.collections.map(s => (
                  <div
                    key={s.id}
                    className={
                      "text-left mt-4 p-1 px-4 text-2.5r mob:text-1.5r rounded-lg " +
                      (selectedCollections.includes(s.collectionId)
                        ? "text-purple-500 bg-slate-200"
                        : "text-slate-200")
                    }
                  >
                    {s.collection_title}
                  </div>
                ))}
              </div>
            ))}
        </div>

        {/* Collections */}
        <div className="w-1/5 mob:w-full">
          <Heading text="Collections" />
          <Collection
            collections={collections}
            sectionCollectionData={sectionCollectionData}
            selectedCollections={selectedCollections}
            onToggle={markCollections}
          />
        </div>

      </div>
    </div>
  );
}