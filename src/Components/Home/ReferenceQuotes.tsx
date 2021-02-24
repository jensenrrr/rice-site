import classNames from "classnames";
import React, { useState } from "react";
import ReferencesWater from "../../Assets/ReferencesWater.png";

const References = [
  {
    quote: `"If they were an animal, they would be a prairie dog."`,
    source: "Coworker, Ian Cavitt",
  },
  {
    quote: `"What a builder!"`,
    source: "Friend, Billy Bob",
  },
  {
    quote: `"What a good reference here, great referecne, best reference!"`,
    source: "Former POTUS",
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
  return (
    <div
      style={{
        backgroundImage: `url(${ReferencesWater})`,
      }}
      className="h-80 relative flex flex-col justify-center"
    >
      <div className="mb-8 text-center text-2xl font-semibold">References</div>
      <div className="mb-5 text-center max-w-2xl mx-auto text-xl">
        {References[selectedReference].quote}
      </div>
      <div className="mb-8 text-center text-lg">
        {References[selectedReference].source}
      </div>
      <div style={{ position: "absolute", width: "100%", left: 0, bottom: 20 }}>
        {/*//className="absolute left-0 w-full">*/}
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
