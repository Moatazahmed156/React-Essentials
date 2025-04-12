import ConceptCard from "./ConceptCard";
import { CORE_CONCEPTS } from "../data/Concepts_Data";
function CoreConcept() {
  return (
    <div className="pt-8 pb-4 flex flex-col items-center mt-12 w-[90%] min-w-[900px] max-w-[1200px] bg-[#08043a] rounded-xl max-md:min-w-0">
      <h3 className="font-bold text-2xl text-[#a18aba]">Core Concepts</h3>
      <div className="flex justify-around max-md:flex-col">
        {CORE_CONCEPTS.map((e, i) => (
          <ConceptCard
            key={i}
            image={e.image}
            Title={e.title}
            Description={e.description}
          />
        ))}
      </div>
    </div>
  );
}
export default CoreConcept;
