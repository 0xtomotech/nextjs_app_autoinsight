"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from "@/components";
import { updateSearchParams } from "@/utils";

// if you use Router from next/navigation, you should use useRouter instead of Router
// also as a result you need to use "use client";
const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {

    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = updateSearchParams("limit", `${newLimit}`);

        router.push(newPathName, {scroll: false});
    }

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    title="Show More"
                    btnType="button"
                    containerStyles="bg-primary-blue text-white rounded-full"
                    handleClick={handleNavigation}
                />
            )}
        </div>
    )
}

export default ShowMore