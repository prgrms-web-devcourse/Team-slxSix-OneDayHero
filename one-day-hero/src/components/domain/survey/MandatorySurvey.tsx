"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { forwardRef, useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { getClientToken } from "@/app/utils/cookie";
import Button from "@/components/common/Button";
import InputLabel from "@/components/common/InputLabel";
import UploadImage from "@/components/common/UploadImage";
import { useEditProfileFetch } from "@/services/users";
import { ImageFileType } from "@/types";
import { UserResponse } from "@/types/response";
import {
  MandatorySurveySchema,
  MandatorySurveySchemaProps
} from "@/types/schema";

const MandatorySurvey = forwardRef((userData: UserResponse, ref) => {
  // const [image, setImage] = useState<ImageFileType[] | null>(null);

  const { basicInfo, favoriteRegions, favoriteWorkingDay } = userData.data;
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    clearErrors,
    setValue,
    getValues
  } = useForm<MandatorySurveySchemaProps>({
    resolver: zodResolver(MandatorySurveySchema)
  });

  const { mutationalFetch } = useEditProfileFetch();

  const onSubmit: SubmitHandler<MandatorySurveySchemaProps> = async (data) => {
    // console.log("data check", data.image, getValues("image"));
    const { file } = getValues("image")[0];

    const formData = new FormData();
    const userData: Omit<
      UserResponse["data"],
      "image" | "heroScore" | "isHeroMode" | "serverDateTime"
    > = {
      basicInfo: {
        nickname: data.nickName,
        gender: basicInfo.gender,
        birth: basicInfo.birth,
        introduce: data.introduction
      },
      favoriteWorkingDay: favoriteWorkingDay,
      favoriteRegions: favoriteRegions
    };

    const jsonData = JSON.stringify(userData);

    formData.append(
      "userUpdateRequest",
      new Blob([jsonData], { type: "application/json" })
    );

    const imageData: any = file;

    formData.append("images", imageData);

    const { response, errorMessage } = await mutationalFetch(
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${getClientToken()}`
        }
      },
      () => {
        console.log("post 완료");
        router.push("/survey/optional");
      }
    );

    console.log("응답 확인", response, errorMessage);
  };

  const handleFileSelect = useCallback(
    (file: ImageFileType[]) => {
      console.log("이미지 확인", getValues("image"));
      setValue("image", file);
      // clearErrors("image");
      console.log("이미지 더블 체크", getValues("image"));
    },
    [setValue, getValues]
  );

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-8 flex w-full max-w-screen-sm flex-col gap-7">
        <div>
          <InputLabel className="cs:ml-3 cs:text-xl" required>
            프로필 사진
          </InputLabel>
          <UploadImage
            {...register("image")}
            size="lg"
            onFileSelect={handleFileSelect}
          />
          {errors.image && (
            <p className="text-red-500">{`${errors.image.message}`}</p>
          )}
        </div>

        <div>
          <InputLabel className="cs:mb-1 cs:ml-1 cs:text-xl" required>
            닉네임
          </InputLabel>
          <input
            {...register("nickName")}
            className="border-inactive placeholder:text-inactive focus:outline-primary h-11 w-full rounded-[10px] border p-4 pl-3"
          />
          {errors.nickName && (
            <p className="text-red-500">{`${errors.nickName.message}`}</p>
          )}
        </div>

        <div>
          <InputLabel className="cs:mb-1 cs:ml-1 cs:text-xl" required>
            자기소개
          </InputLabel>
          <textarea
            {...register("introduction")}
            className="border-inactive focus:outline-primary h-40 w-full max-w-screen-sm resize-none rounded-2xl border p-4"
          />
          {errors.introduction && (
            <p className="text-red-500">{`${errors.introduction.message}`}</p>
          )}
        </div>

        <Button type="submit" className="cs:mx-auto cs:mt-24" size="lg">
          다음
        </Button>
      </form>
    </>
  );
});

MandatorySurvey.displayName = "MandatorySurvey";

export default MandatorySurvey;
