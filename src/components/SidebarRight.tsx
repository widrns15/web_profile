import { sidebarRightIcons } from "../properties/content";
import { getStaticAsset } from "../utils/getStatic";

export default function SidebarRight() {
  return (
    <div className="w-20 h-full flex-shrink-0 sidebar-right rounded-r-3xl self-center flex flex-col items-center py-4">
      <div className="w-14 h-14 rounded-full mb-10 p-1.5 relative">
        <div className="avatar-ring inset-0 absolute" />

        <div className="absolute inset-0  p-1.5">
          <img
            src="https://avatars.githubusercontent.com/u/85780501?v=4"
            alt=""
            className="rounded-full"
          />
        </div>
      </div>
      {sidebarRightIcons.map(({ background, icon, url }, index) => (
        <div
          onClick={() => window.open(url)}
          className="w-11 h-11 rounded-xl mt-4 flex justify-center items-center fadeInDown cursor-pointer"
          style={{ background, animationDelay: `${0.1 * index}s` }}
        >
          <img
            src={getStaticAsset(`icons/${icon}`)}
            alt=""
            className="w-5 h-5"
          />
        </div>
      ))}
    </div>
  );
}
