import { revalidatePath } from "next/cache";

import {
  MissionResponse,
  SuggestedMissionListResponse
} from "@/types/response";

import { apiUrl } from "./base";

export const getTestMissions = async () => {
  const res = await fetch(apiUrl("/missions"));
  return res.json();
};

export const getMission = async (
  missionId: string
): Promise<MissionResponse> => {
  const response = await fetch(apiUrl(`/missions/${missionId}`), {
    next: { tags: [`mission${missionId}`] }
  });
  return response.json();
};

export const getCompletedMission =
  async (): Promise<SuggestedMissionListResponse> => {
    const response = await fetch(apiUrl(`/missions/record`), {
      next: { tags: ["record"] }
    });

    return response.json();
  };

export const postBookmark = async (missionId: number, userId: number) => {
  const response = await fetch(apiUrl("/bookmarks"), {
    method: "POST",
    body: JSON.stringify({
      missionId,
      userId
    })
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  revalidatePath("/mission/[slug]", "page");

  return response.json();
};

export const deleteBookmark = async (missionId: number, userId: number) => {
  const response = await fetch(apiUrl("/bookmarks"), {
    method: "DELETE",
    body: JSON.stringify({
      missionId,
      userId
    })
  });

  revalidatePath("/mission/[slug]", "page");

  return response.json();
};

export const getOngoingMissionList = async () => {
  try {
    const response = await fetch(apiUrl(`/missions/list/ongoing`), {
      next: { tags: [`ongoing`] }
    });

    return response.json();
  } catch (err) {
    console.error(err);
  }
};

export const getSuggestedMissionList = async () => {
  try {
    const response = await fetch(apiUrl(`/missions/list/suggested`), {
      next: { tags: [`suggested`] }
    });

    return response.json();
  } catch (err) {
    console.error(err);
  }
};
