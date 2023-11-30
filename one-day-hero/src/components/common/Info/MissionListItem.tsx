import Image from "next/image";
import { BiMap, BiStar } from "react-icons/bi";

import Label from "@/components/common/Label";
import defaultProfileImage from "~/images/OneDayHero_logo_sm.svg";

import IconGroup from "../IconGroup";

type MissionListItemProps = {
  imageSrc?: string;
  title: string;
  categories: string;
  createAt?: string;
  location: string;
  bookmarkCount?: number;
  className?: string;
};

const MissionListItem = ({
  imageSrc,
  title,
  categories,
  createAt,
  location,
  bookmarkCount,
  className
}: MissionListItemProps) => {
  return (
    <div className={`flex w-full ${className}`}>
      <div className="flex grow gap-4">
        <div className="overflow-hidden rounded-[10px] bg-inactive">
          <Image
            src={imageSrc || defaultProfileImage}
            alt="프로필 사진"
            width={60}
            height={60}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label size="sm" className="w-[5.05rem]">
            {categories}
          </Label>
          <span className="text-md font-semibold">{title}</span>
          <div className="flex gap-2">
            <span className="text-xs">{createAt}</span>
            <IconGroup title={location} direction="row" size="sm">
              <BiMap />
            </IconGroup>
          </div>
        </div>
      </div>
      <div className="flex items-start">
        <IconGroup
          title={bookmarkCount ?? 0}
          direction="row"
          size="lg"
          textSize="base"
          className="text-neutral-400 ">
          <BiStar />
        </IconGroup>
      </div>
    </div>
  );
};

export default MissionListItem;
