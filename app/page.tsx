import SubscribeEmailInput from "@/components/SubscribeEmailInput";
import SwiperComponent from "../components/SwiperComponent";
import Caraousal from "@/components/carousal/Caraousal";
import { fertilizers, seeds, agriculturalMachines, fertilizerimgurl, seedsimgurl, agriculturalMachinesimgurl } from "@/const/caraousals";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="pt-[calc(4rem+6rem)] w-full">
                <SwiperComponent />
            </div>
            <div className="h-screen w-full" />
            <SubscribeEmailInput className="bg-accent" />
            <div className="w-full">
                <Caraousal data={fertilizers} imgurl={fertilizerimgurl} />
                <Caraousal data={seeds} imgurl={seedsimgurl} />
                <Caraousal
                    data={agriculturalMachines}
                    imgurl={agriculturalMachinesimgurl}
                />
            </div>
        </div>
    );
}
