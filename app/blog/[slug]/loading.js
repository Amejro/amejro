import ImageSkeleton from "@/app/components/skeletons/ImageSkeleton";
import React from "react";

function loading() {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-5">
      <div className="aspect-w-3 aspect-h-2 my-5">
        <ImageSkeleton />
      </div>
      <div role="status" class="space-y-2.5 animate-pulse max-w-lg">
        <div class="flex items-center w-full space-x-2">
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[480px]">
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[400px]">
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[480px]">
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[440px]">
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[360px]">
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default loading;
