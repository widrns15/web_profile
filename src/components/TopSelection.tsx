import { useState } from "react";
import { topSelectionItemList } from "../properties/content";
import { CategoryValueType } from "../types/types";
import SelectionList from "./SelectionList";
import SelectionListItem from "./SelectionListItem";

export default function TopSelection() {
  const [activeSelection, setActiveSelection] = useState(
    topSelectionItemList.personalProject
  );

  const setActiveSelectionValue = (value: CategoryValueType) => {
    setActiveSelection([]);
    setTimeout(() => {
      setActiveSelection(topSelectionItemList[value]);
    }, 10);
  };
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <div className="text-white text-3xl">Web Developer "Seong_il"</div>
        <div className="w-28 tag-red text-white flex rounded-full items-center justify-center py-0.5">
          <div className="w-2 h-2 rounded-full tag-red-dot" />
          <div className="ml-2 text-xs font-bold">Develeloping</div>
        </div>
      </div>
      <div className="flex mt-8">
        <SelectionList setActiveSelectionValue={setActiveSelectionValue} />
        <div className="ml-24 space-x-8 flex flex-1">
          {activeSelection.map((item) => (
            <SelectionListItem key={item.key} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
