import Link from "next/link";

import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import MissionFullInfo from "@/components/common/Info/MissionFullInfo";
import { getSuggestedMissionList } from "@/services/missions";
import { Mission } from "@/types/type";

const SuggestedMissionPage = async () => {
  const { data } = await getSuggestedMissionList();

  return (
    <div className="mt-20 flex w-full max-w-screen-sm flex-col items-center justify-center space-y-4">
      {data.map((item: Mission) => (
        <Link
          href={`/mission/${item.id}`}
          className="flex w-full max-w-screen-sm justify-center"
          key={item.id}>
          <Container className="cs:w-11/12">
            <MissionFullInfo className="" data={item} />
            <div className="flex justify-center gap-1">
              <Button
                theme="cancel"
                size="sm"
                textSize="sm"
                className="cs:h-10">
                거절하기
              </Button>
              <Button
                theme="primary"
                size="sm"
                textSize="sm"
                className="cs:h-10">
                채팅하기
              </Button>
            </div>
          </Container>
        </Link>
      ))}
    </div>
  );
};

export default SuggestedMissionPage;
