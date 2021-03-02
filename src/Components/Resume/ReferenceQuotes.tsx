import classNames from "classnames";
import React, { useEffect, useState } from "react";
import ReferencesWater from "../../Assets/ReferencesWater.png";

const References = [
  {
    quote: "If they were an animal, they would be a prairie dog.",
    source: "Coworker, Ian Cavitt",
  },
  {
    quote: "If they were an animal, they would be a liger.",
    source: "Coworker, Drew Nolan",
  },
  {
    quote: "If they were an animal, they would be a bee.",
    source: "Coworker, Sylvia Lugo",
  },
  {
    quote: "If they were an animal, they would be a beaver.",
    source: "Coworker, Asiel Alvarez",
  },
];

const Circles = ({ list, selected, setSelected }: any) => {
  return list.map((entry: any, i: any) => (
    <div
      key={i}
      onClick={() => setSelected(i)}
      className={classNames("rounded-full h-8 w-8", {
        "ml-5": i !== 0,
        "bg-yellow-200": selected === i,
        "bg-blue-100": !(selected === i),
      })}
    />
  ));
};

export const ReferenceQuotes = () => {
  const [selectedReference, setSelectedReference] = useState(0);

  useEffect(() => {
    let originalReference = selectedReference;
    const timer = setInterval(() => {
      if (originalReference === selectedReference) {
        setSelectedReference((prevState) =>
          prevState + 1 < References.length ? prevState + 1 : 0
        );
      }
    }, 3000);

    return () => clearInterval(timer);
  });

  return (
    <div
      style={{
        backgroundImage: `url(${ReferencesWater})`,
      }}
      className="h-80 relative flex flex-col justify-center"
    >
      <div className="mb-8 text-center text-2xl font-semibold">References</div>
      <div className="mb-5 text-center max-w-2xl mx-auto text-lg lg:text-xl xl:text-2xl">
        {References[selectedReference].quote}
      </div>
      <div className="mb-8 text-center text-lg">
        {References[selectedReference].source}
      </div>
      <div style={{ position: "absolute", width: "100%", left: 0, bottom: 20 }}>
        <div className="flex flex-row justify-center">
          <Circles
            list={References}
            selected={selectedReference}
            setSelected={setSelectedReference}
          />
        </div>
      </div>
    </div>
  );
};
