import DynamicDeveloperTag from "../ui/DynamicDeveloperTag";
import DynamicButton from "../ui/DynamicButton";

const HERO_STATS = [
  { label: "10+ Projects", color: "bg-fuchsia-200", rotation: "-rotate-2" },
  { label: "MERN Stack", color: "bg-cyan-200", rotation: "rotate-2" },
  {
    label: "AI Specialist... umm 'Soon To Be'",
    color: "bg-amber-200",
    rotation: "-rotate-1",
  },
];

const Home = () => {
  const neobrutaContainer =
    "border-2 border-slate-900 rounded-2xl shadow-[4px_4px_0px_#0f172a]";
  const neobrutaBtn =
    "border-2 border-slate-900 rounded-xl shadow-[4px_4px_0px_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:shadow-inner active:bg-opacity-50";

  return (
    <section className="pt-16 pb-20 px-6 md:px-12 mx-auto max-w-7xl relative">
      <div className="flex flex-col gap-6 max-4xl">
        {/* Tag */}
        <div>
          <DynamicDeveloperTag />
        </div>

        <h1>Hi, I'm Deepika Sharma</h1>
      </div>
      <p className="text-xl md:text-3xl font-bold mt-4 leading-relaxed bg-clip-text">
        Crafting clean web experiences powered by the{" "}
        <span className="bg-yellow-200 px-2 rounded-lg">MERN Stack</span> &{" "}
        <span className="bg-indigo-200 px-2 rounded-lg">AI-driven</span>{" "}
        backends.
      </p>
      <div className="flex flex-wrap items-center gap-4 mt-8">
        <DynamicButton />
        <div className="flex gap-4">
          <a
            href="https://github.com/Dpsh613"
            target="_blank"
            rel="noreferrer"
            className={`px-6 py-4 bg-white font-bold ${neobrutaBtn}`}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/deepika-sharma"
            target="_blank"
            rel="noreferrer"
            className={`px-6 py-4 bg-blue-100 font-bold ${neobrutaBtn}`}
          >
            LinkedIn
          </a>
        </div>
      </div>
      {/* Quick Stats Floating Below */}
      <div className="flex flex-wrap gap-4 mt-12">
        {HERO_STATS.map((stat) => (
          <div
            key={stat.label}
            className={`px-4 py-2 text-sm font-black uppercase ${stat.color} ${neobrutaContainer} ${stat.rotation}`}
          >
            {stat.label}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
