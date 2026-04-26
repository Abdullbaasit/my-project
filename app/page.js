import { ParentDesign } from "./component/sneaker/TextFile";
import { Cardlist } from "./component/sneaker/ImageFile";
import { FetchData } from "./male/page";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 sm:grid-cols-2 gap-10 items-center w-full">
      <Cardlist />
      <ParentDesign />
      {/* <FetchData /> */}
    </div>
  );
}
