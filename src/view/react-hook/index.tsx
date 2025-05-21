import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import UseEffect from "./section/use-effect";
import UseMemo from "./section/use-memo";
import UseRef from "./section/use-ref";
import UseState from "./section/use-state"
import MyComponent from "./section/use-state/test";
import UseCallBack from "./section/use-callback";

export default function ReactHookView({nama}:{nama:string}){
    return (
        <div>
            <UseState/>
            <UseRef/>
        </div>

    
    );
}