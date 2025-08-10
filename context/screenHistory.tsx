import { PathName } from "@/types/PathName";
import { createContext, useState } from "react";

interface ScreenHistoryContextType {
    lastTab: PathName,
    setLastTab: React.Dispatch<React.SetStateAction<PathName>>
}

const ScreenHistoryContext = createContext<ScreenHistoryContextType|undefined>(undefined);

const ScreenHistoryProvider = ({ children }: { children: React.ReactNode }) => {
    const [lastTab, setLastTab] = useState<PathName>("/");

    return (
        <ScreenHistoryContext.Provider
            value={{
                lastTab,
                setLastTab
            }}
        >
            {children}
        </ScreenHistoryContext.Provider>
    )
}

export { ScreenHistoryContext, ScreenHistoryProvider };
