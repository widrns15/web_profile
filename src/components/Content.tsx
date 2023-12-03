import Header from "./Header";
import News from "./News";
import SidebarLeft from "./SidebarLeft";
import TopSelection from "./TopSelection";
import Video from "./Video";

export default function Content() {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <div className="flex flex-grow">
        <SidebarLeft />
        <div className="flex flex-col h-full pb-8 pr-8">
          <div className="flex items-start gap-6">
            <Video />
            <News />
          </div>
          <TopSelection />
        </div>
      </div>
    </div>
  );
}