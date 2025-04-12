import TapButtton from "./TapBotton";
import { CORE_CONCEPTS } from "../data/Concepts_Data";
import { useState } from "react";

export default function Examples() {
  const [example, setExample] = useState(null);

  return (
    <div className="mt-12 items-start w-[90%] min-w-[900px] max-w-[1200px]  max-md:min-w-0">
      <h3 className="text-2xl text-white font-bold mb-8">Examples</h3>
      <menu className="flex gap-4">
        {CORE_CONCEPTS.map((e, index) => (
          <TapButtton
            key={index}
            onSelect={() => setExample(index)}
            isSelected={example === index}
          >
            {e.title}
          </TapButtton>
        ))}
      </menu>

      <div className="mt-4 p-4 bg-[#2f1d43] text-[#ebe7ef] rounded-lg shadow-2xl">
        {example === null ? (
          "Please Select a Topic"
        ) : (
          <div>
            <h3 className="font-bold text-xl text-white mb-2">
              {CORE_CONCEPTS[example].title}
            </h3>
            <p>{CORE_CONCEPTS[example].description}</p>
            <pre>
              <code>{CORE_CONCEPTS[example].code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
