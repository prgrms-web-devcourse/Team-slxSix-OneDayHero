import {
  MatchingMissionListResponse,
  MissionResponse,
  ProgressMissionListResponse,
  SuggestedMissionListResponse
} from "@/types/response";

export const missionDetail: MissionResponse = {
  status: 200,
  data: {
    id: 1,
    missionCategory: {
      id: 1,
      code: "MC_001",
      name: "서빙"
    },
    citizenId: 1,
    region: {
      id: 1,
      si: "서울시",
      gu: "강남구",
      dong: "역삼동"
    },
    longitude: 1234277.388,
    latitude: 1234252.23,
    missionInfo: {
      title: "제목",
      content:
        "[Intervention]Images loaded lazily and replaced with placeholders. Load events are deferred. See https://go.microsoft.com/fwlink/?linkid=2048113",
      missionDate: "2023-10-10",
      startTime: "10:00",
      endTime: "10:30",
      deadlineTime: "10:00",
      price: 10000
    },
    bookmarkCount: 0,
    isBookmarked: true,
    missionStatus: "MATCHING",
    missionImage: {
      originalName: "xxx.jpeg",
      path: "~~~~"
    }
  },
  serverDateTime: "2023-11-02T14:25:44"
};

export const progessMissionList: ProgressMissionListResponse = {
  status: 200,
  data: {
    content: [
      {
        id: 1,
        title: "제목",
        missionCategory: {
          id: 1,
          code: "MC_001",
          name: "서빙"
        },
        missionDate: "2023-11-06",
        bookmarkCount: 1,
        missionStatus: "MATCHING"
      },
      {
        id: 2,
        title: "제목",
        missionCategory: {
          id: 1,
          code: "MC_001",
          name: "서빙"
        },
        missionDate: "2023-11-06",
        bookmarkCount: 1,
        missionStatus: "MATCHING"
      },
      {
        id: 3,
        title: "제목",
        missionCategory: {
          id: 1,
          code: "MC_001",
          name: "서빙"
        },
        missionDate: "2023-11-06",
        bookmarkCount: 1,
        missionStatus: "MATCHING"
      }
    ],
    pageable: {
      pageNumber: 0,
      pageSize: 4,
      sort: {
        empty: true,
        sorted: false,
        unsorted: true
      },
      offset: 0,
      paged: true,
      unpaged: false
    },
    size: 4,
    number: 0,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true
    },
    first: true,
    last: true,
    numberOfElements: 1,
    empty: false
  },
  serverDateTime: "2023-11-13T15:26:37"
};

export const suggestedMissionList: SuggestedMissionListResponse = {
  status: 200,
  data: {
    content: [
      {
        id: 1,
        mission: {
          id: 1,
          status: "MATCHING",
          bookmarkCount: 5,
          createdAt: "2023-11-16T16:08:24",
          region: {
            si: "서울시",
            gu: "프로구",
            dong: "래머동"
          },
          missionCategory: {
            code: "MC_001",
            name: "서빙"
          },
          missionInfo: {
            title: "미션 제목",
            missionDate: "2023-10-30",
            startTime: "12:00",
            endTime: "18:00",
            price: 30000
          }
        }
      },
      {
        id: 2,
        mission: {
          id: 2,
          status: "MATCHING",
          bookmarkCount: 5,
          createdAt: "2023-11-15T16:08:24",
          region: {
            si: "서울시",
            gu: "프로구",
            dong: "래머동"
          },
          missionCategory: {
            code: "MC_001",
            name: "서빙"
          },
          missionInfo: {
            title: "미션 제목",
            missionDate: "2023-10-30",
            startTime: "12:00",
            endTime: "18:00",
            price: 30000
          }
        }
      },
      {
        id: 3,
        mission: {
          id: 3,
          status: "MATCHING_COMPLETED",
          bookmarkCount: 5,
          createdAt: "2023-11-13T16:08:24",
          region: {
            si: "서울시",
            gu: "프로구",
            dong: "래머동"
          },
          missionCategory: {
            code: "MC_001",
            name: "서빙"
          },
          missionInfo: {
            title: "미션 제목",
            missionDate: "2023-10-30",
            startTime: "12:00",
            endTime: "18:00",
            price: 30000
          }
        }
      },
      {
        id: 4,
        mission: {
          id: 4,
          status: "MISSION_COMPLETED",
          bookmarkCount: 5,
          createdAt: "2023-11-14T16:08:24",
          region: {
            si: "서울시",
            gu: "프로구",
            dong: "래머동"
          },
          missionCategory: {
            code: "MC_001",
            name: "서빙"
          },
          missionInfo: {
            title: "미션 제목",
            missionDate: "2023-10-30",
            startTime: "12:00",
            endTime: "18:00",
            price: 30000
          }
        }
      },
      {
        id: 5,
        mission: {
          id: 5,
          status: "EXPIRED",
          bookmarkCount: 5,
          createdAt: "2023-11-13T16:08:24",
          region: {
            si: "서울시",
            gu: "프로구",
            dong: "래머동"
          },
          missionCategory: {
            code: "MC_001",
            name: "서빙"
          },
          missionInfo: {
            title: "미션 제목",
            missionDate: "2023-10-30",
            startTime: "12:00",
            endTime: "18:00",
            price: 30000
          }
        }
      }
    ],
    pageable: {
      pageNumber: 0,
      pageSize: 5,
      sort: {
        sorted: false,
        unsorted: true,
        empty: true
      },
      offset: 0,
      paged: true,
      unpaged: false
    },
    numberOfElements: 5,
    first: true,
    last: false,
    size: 5,
    number: 0,
    sort: {
      sorted: false,
      unsorted: true,
      empty: true
    },
    empty: false
  },
  serverDateTime: "2023-11-16T16:08:24"
};

export const completedMissionList: ProgressMissionListResponse = {
  status: 200,
  data: {
    content: [
      {
        id: 1,
        title: "제목",
        missionCategory: {
          id: 1,
          code: "MC_001",
          name: "서빙"
        },
        missionDate: "2023-11-06",
        bookmarkCount: 1,
        missionStatus: "MISSION_COMPLETED"
      },
      {
        id: 2,
        title: "제목",
        missionCategory: {
          id: 1,
          code: "MC_001",
          name: "서빙"
        },
        missionDate: "2023-11-06",
        bookmarkCount: 1,
        missionStatus: "MISSION_COMPLETED"
      },
      {
        id: 3,
        title: "제목",
        missionCategory: {
          id: 1,
          code: "MC_001",
          name: "서빙"
        },
        missionDate: "2023-11-06",
        bookmarkCount: 1,
        missionStatus: "MISSION_COMPLETED"
      }
    ],
    pageable: {
      pageNumber: 0,
      pageSize: 4,
      sort: {
        empty: true,
        sorted: false,
        unsorted: true
      },
      offset: 0,
      paged: true,
      unpaged: false
    },
    size: 4,
    number: 0,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true
    },
    first: true,
    last: true,
    numberOfElements: 1,
    empty: false
  },
  serverDateTime: "2023-11-13T15:26:37"
};

export const matchingMissionList: MatchingMissionListResponse = {
  status: 200,
  data: {
    userId: 1,
    missionResponses: {
      content: [
        {
          missionId: 1,
          missionBookmarkId: 5,
          isAlive: true,
          missionInfo: {
            title: "청소 미션",
            categoryName: "청소",
            bookmarkCount: 5,
            price: 35000,
            missionDate: "2023-12-05",
            startTime: "14:30",
            endTime: "18:30"
          },
          region: {
            id: 1,
            si: "서울시",
            gu: "강남구",
            dong: "역삼동"
          }
        },
        {
          missionId: 2,
          missionBookmarkId: 6,
          isAlive: true,
          missionInfo: {
            title: "심부름1",
            categoryName: "심부름",
            bookmarkCount: 3,
            price: 10000,
            missionDate: "2023-12-06",
            startTime: "10:30",
            endTime: "12:30"
          },
          region: {
            id: 1,
            si: "서울시",
            gu: "강남구",
            dong: "역삼동"
          }
        },
        {
          missionId: 5,
          missionBookmarkId: 10,
          isAlive: true,
          missionInfo: {
            title: "심부름2",
            categoryName: "심부름",
            bookmarkCount: 3,
            price: 10000,
            missionDate: "2023-12-07",
            startTime: "12:30",
            endTime: "13:30"
          },
          region: {
            id: 1,
            si: "서울시",
            gu: "강남구",
            dong: "역삼동"
          }
        }
      ],
      pageable: {
        pageNumber: 0,
        pageSize: 3,
        sort: {
          empty: true,
          sorted: false,
          unsorted: true
        },
        offset: 0,
        paged: true,
        unpaged: false
      },
      size: 3,
      number: 0,
      sort: {
        empty: true,
        sorted: false,
        unsorted: true
      },
      first: true,
      last: false,
      numberOfElements: 3,
      empty: false
    }
  },
  serverDateTime: "2023-11-13T15:26:38"
};
