import { revalidatePath } from "next/cache";
import { RefObject } from "react";

import { useInfiniteFetch } from "@/hooks/useInfiniteFetch";
import {
  BookmarkResponse,
  MissionResponse,
  ProgressMissionListResponse,
  SuggestedMissionListResponse
} from "@/types/response";

import { CustomResponse, useFetch, useMutationalFetch } from "./base";

export const useGetMissionFetch = (missionId: string) => {
  return useFetch<MissionResponse>(`/missions/${missionId}`, {
    next: { tags: [`mission${missionId}`] }
  });
};

export const useCreateMissionFetch = () => {
  return useMutationalFetch<MissionResponse>("/missions") as {
    mutationalFetch: (
      fetchOptions: RequestInit,
      onSuccess?: (response?: Response) => void,
      onError?: () => void
    ) => Promise<CustomResponse<MissionResponse>>;
  };
};

export const usePostBookmarkFetch = (missionId: number, userId: number) => {
  return useMutationalFetch<BookmarkResponse>(
    "/bookmarks",
    {
      method: "POST",
      body: JSON.stringify({
        missionId,
        userId
      })
    },
    () => revalidatePath("/mission/[slug]", "page")
  );
};

export const useDeleteBookmarkFetch = (missionId: number, userId: number) => {
  return useMutationalFetch<BookmarkResponse>(
    "/bookmarks",
    {
      method: "DELETE",
      body: JSON.stringify({
        missionId,
        userId
      })
    },
    () => revalidatePath("/mission/[slug]", "page")
  );
};

export const useGetSuggestedMissionListFetch = (
  heroId: string,
  observerRef: RefObject<HTMLDivElement>
) => {
  return useInfiniteFetch<SuggestedMissionListResponse>({
    pathname: `/mission-proposals?heroId=${heroId}`,
    size: 3,
    options: {
      next: { tags: [`suggested${heroId}`] }
    }
  });
};

export const useGetProgressMissionListFetch = (
  userId: string,
  observerRef: RefObject<HTMLDivElement>
) => {
  return useInfiniteFetch<ProgressMissionListResponse>({
    pathname: `/missions/progress/${userId}`,
    size: 3,
    options: {
      next: { tags: [`progress${userId}`] }
    }
  });
};

export const useGetCompleteMissionListFetch = (
  userId: string,
  observerRef: RefObject<HTMLDivElement>
) => {
  return useInfiniteFetch<ProgressMissionListResponse>({
    pathname: `/missions/complete/${userId}`,
    size: 3,
    options: {
      next: { tags: [`complete${userId}`] }
    }
  });
};
