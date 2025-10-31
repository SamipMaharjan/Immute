// components/ui/loading-skeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

export function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center justify-start py-8 px-4 pt-32">
      {/* Header Skeleton */}
      <div className="w-full max-w-6xl text-center mb-8">
        <Skeleton className="h-10 w-64 mx-auto mb-3" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Swap Card Skeleton */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sticky top-8">
            <div className="flex justify-between items-center mb-6">
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-6 w-6 rounded-full" />
            </div>

            {/* Tabs Skeleton */}
            <div className="flex bg-gray-100 rounded-2xl p-1 mb-6">
              <Skeleton className="flex-1 h-10 rounded-xl" />
              <Skeleton className="flex-1 h-10 rounded-xl ml-1" />
            </div>

            {/* Input Skeletons */}
            <div className="space-y-4 mb-6">
              <Skeleton className="h-24 rounded-2xl" />
              <Skeleton className="h-12 w-12 rounded-full mx-auto" />
              <Skeleton className="h-24 rounded-2xl" />
            </div>

            <Skeleton className="h-12 w-full rounded-2xl mb-4" />
            <Skeleton className="h-16 rounded-2xl" />
          </div>
        </div>

        {/* Right Column - Markets Skeleton */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">
            {/* Header Skeleton */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <Skeleton className="h-8 w-48 mb-2" />
                <Skeleton className="h-5 w-64" />
              </div>
              <Skeleton className="h-12 w-64 rounded-2xl" />
            </div>

            {/* Market Cards Skeleton */}
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="border border-gray-200 rounded-2xl p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Skeleton className="w-14 h-14 rounded-2xl" />
                      <div>
                        <Skeleton className="h-6 w-32 mb-2" />
                        <Skeleton className="h-5 w-24" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 flex-1 max-w-md">
                      {[...Array(4)].map((_, j) => (
                        <div key={j} className="text-center">
                          <Skeleton className="h-5 w-16 mx-auto mb-1" />
                          <Skeleton className="h-6 w-12 mx-auto" />
                        </div>
                      ))}
                    </div>
                    <Skeleton className="h-12 w-28 rounded-xl" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
