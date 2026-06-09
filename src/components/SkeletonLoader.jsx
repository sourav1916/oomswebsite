
export const SkeletonLoader = ({ type = "card" }) => {
  if (type === "card") {
    return (
      <div className="border border-border/80 rounded-3xl p-6 bg-surface/50 animate-pulse">
        <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-2xl mb-5" />
        <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-md w-3/4 mb-3.5" />
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-md w-full mb-2" />
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-md w-5/6 mb-5" />
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-md w-1/3" />
      </div>
    );
  }

  if (type === "list") {
    return (
      <div className="space-y-4 animate-pulse">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex items-center space-x-4 p-4 border border-border/50 rounded-2xl bg-surface/30"
          >
            <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-xl shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/3" />
              <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "hero") {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-pulse">
        <div className="space-y-6">
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/4" />
          <div className="h-14 bg-slate-200 dark:bg-slate-800 rounded w-5/6" />
          <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded w-full" />
          <div className="h-24 bg-slate-200 dark:bg-slate-800 rounded w-5/6" />
          <div className="flex space-x-4">
            <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded w-32" />
            <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded w-32" />
          </div>
        </div>
        <div className="h-[400px] bg-slate-200 dark:bg-slate-800 rounded-3xl" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-pulse space-y-8">
      <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded w-1/2" />
      <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-1/4" />
      <div className="h-64 bg-slate-200 dark:bg-slate-800 rounded-3xl" />
      <div className="space-y-4">
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full" />
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full" />
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-5/6" />
      </div>
    </div>
  );
};
export default SkeletonLoader;
