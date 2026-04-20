import { ParentDesign } from "./component/ParentDesign";
import { Cardlist } from "./component/Cardlist";


export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 sm:grid-cols-2 gap-10 items-center w-full">
      <Cardlist />
      <ParentDesign />
    </div>
  );
}
