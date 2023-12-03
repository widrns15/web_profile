import { newsList } from "../properties/content";

export default function News() {
  return (
    <div className="flex flex-col space-y-4 fadeInUp">
      {newsList.map(({ key, title, subTitle, tags }) => (
        <div className="sidebar-left rounded-3xl shadow-xl p-4">
          <div className="flex space-x-3" key={key}>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full tag-yellow-dot"></div>
                <div className="ml-1 text-white">{title}</div>
              </div>
              <div className="mt-1 text-sm color-base-lite">{subTitle}</div>
              <div className="flex space-x-2 mt-2">
                {tags.map(({ text, color }) => (
                  <div
                    className="text-xs text-white py-0.5 px-1.5 rounded-full"
                    style={{ background: color }}
                    key={text}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
