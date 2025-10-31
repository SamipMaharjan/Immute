// components/ui/page-skeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";
import { DashboardSkeleton } from "./loading-skeleton";

interface PageSkeletonProps {
  type?: "dashboard" | "table" | "cards" | "simple";
  cardCount?: number;
}

export function PageSkeleton({
  type = "dashboard",
  cardCount = 4,
}: PageSkeletonProps) {
  if (type === "dashboard") {
    return <DashboardSkeleton />;
  }

  if (type === "table") {
    return (
      <div className="space-y-4">
        {/* Table Header */}
        <div className="flex justify-between items-center">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-10 w-64" />
        </div>

        {/* Table */}
        <div className="border rounded-lg">
          {/* Table Head */}
          <div className="grid grid-cols-4 gap-4 p-4 border-b">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-6" />
            ))}
          </div>

          {/* Table Rows */}
          {[...Array(cardCount)].map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-4 gap-4 p-4 border-b last:border-b-0"
            >
              {[...Array(4)].map((_, j) => (
                <Skeleton key={j} className="h-6" />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "cards") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(cardCount)].map((_, i) => (
          <div key={i} className="border rounded-lg p-6 space-y-4">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-10 w-full mt-4" />
          </div>
        ))}
      </div>
    );
  }

  // Simple skeleton
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  );
}
