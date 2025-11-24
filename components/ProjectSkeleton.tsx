export default function ProjectSkeleton() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* StaggeredMenu skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 h-16 bg-black/80 backdrop-blur-sm border-b border-white/10" />

      {/* Hero Section Skeleton */}
      <div className="relative w-full h-[60vh] min-h-[500px] bg-gray-900 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12">
            <div className="h-6 w-32 bg-gray-800 rounded mb-6" />
            <div className="h-16 w-64 bg-gray-800 rounded mb-4" />
            <div className="h-6 w-96 bg-gray-800 rounded" />
          </div>
        </div>
      </div>

      {/* Content Section Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Project Info Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-800 rounded-lg animate-pulse" />
              <div className="flex-1">
                <div className="h-4 w-16 bg-gray-800 rounded mb-2 animate-pulse" />
                <div className="h-5 w-32 bg-gray-800 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Description Skeleton */}
        <div className="mb-16">
          <div className="h-8 w-48 bg-gray-800 rounded mb-6 animate-pulse" />
          <div className="space-y-4">
            <div className="h-5 w-full bg-gray-800 rounded animate-pulse" />
            <div className="h-5 w-full bg-gray-800 rounded animate-pulse" />
            <div className="h-5 w-3/4 bg-gray-800 rounded animate-pulse" />
          </div>
        </div>

        {/* Features Skeleton */}
        <div className="mb-16">
          <div className="h-8 w-48 bg-gray-800 rounded mb-8 animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="p-6 bg-white/5 rounded-xl border border-white/10"
              >
                <div className="h-5 w-full bg-gray-800 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots Skeleton */}
        <div className="mb-16">
          <div className="h-8 w-48 bg-gray-800 rounded mb-8 animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="aspect-video bg-gray-900 rounded-xl border border-white/10 animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



