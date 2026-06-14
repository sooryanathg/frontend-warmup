import styles from "./AnnouncementBar.module.css";

export default function AnnouncementBar() {
  return (
    <div className="overflow-hidden bg-zinc-900 text-zinc-100">
      <div className={`flex w-max py-3 ${styles.marquee}`}>

        {/* First copy */}
        <div className="flex items-center">
          <span className="mx-6 text-sm font-semibold tracking-wide">
            📢 Placement Drive Begins Next Week
          </span>

          <span className="text-zinc-500">•</span>

          <span className="mx-6 text-sm font-semibold tracking-wide">
            🎓 Admissions Open for 2025
          </span>

          <span className="text-zinc-500">•</span>

          <span className="mx-6 text-sm font-semibold tracking-wide">
            💻 Hackathon Registration Open
          </span>

          <span className="text-zinc-500">•</span>

          <span className="mx-6 text-sm font-semibold tracking-wide">
            🤖 IEEE Workshop on AI and ML
          </span>
        </div>

        {/* Second copy */}
        <div className="flex items-center">
          <span className="mx-6 text-sm font-semibold tracking-wide">
            📢 Placement Drive Begins Next Week
          </span>

          <span className="text-zinc-500">•</span>

          <span className="mx-6 text-sm font-semibold tracking-wide">
            🎓 Admissions Open for 2025
          </span>

          <span className="text-zinc-500">•</span>

          <span className="mx-6 text-sm font-semibold tracking-wide">
            💻 Hackathon Registration Open
          </span>

          <span className="text-zinc-500">•</span>

          <span className="mx-6 text-sm font-semibold tracking-wide">
            🤖 IEEE Workshop on AI and ML
          </span>
        </div>

      </div>
    </div>
  );
}