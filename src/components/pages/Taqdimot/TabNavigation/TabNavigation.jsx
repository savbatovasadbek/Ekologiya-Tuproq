import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Yerning_tuzilishi from "../Yerning_tuzilishi/Yerning_tuzilishi";
import Litosfera from "../Litosfera/Litosfera";

export function TabNavigation() {
  return (
    <div className="bg-black">
      <Tabs
        defaultValue="yerning-tuzilishi"
        className="container mx-auto my-0 pt-[100px]"
      >
        <TabsList className="w-full flex items-center justify-center gap-5 bg-black">
          <TabsTrigger
            value="yerning-tuzilishi"
            className="bg-black text-white rounded-2xl px-6 data-[state=active]:bg-amber-500 transition-all"
          >
            Yerning tuzilishi
          </TabsTrigger>
          <TabsTrigger
            value="litosfera"
            className="bg-black text-white rounded-2xl px-6 data-[state=active]:bg-amber-500 transition-all"
          >
            Litosfera
          </TabsTrigger>
        </TabsList>
        <TabsContent value="yerning-tuzilishi">
          <Yerning_tuzilishi />
          <TabsList className="w-full flex items-center justify-center gap-5 bg-black">
            <TabsTrigger
              value="litosfera"
              className="rounded-2xl px-6 bg-amber-500 text-black mb-[50px]"
            >
              Keyingisi
            </TabsTrigger>
          </TabsList>
        </TabsContent>
        <TabsContent value="litosfera">
          <Litosfera />
        </TabsContent>
      </Tabs>
    </div>
  );
}
