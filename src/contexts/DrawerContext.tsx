import React, { createContext } from 'react';

type DrawerContextProviderProps = {
    children: React.ReactNode
}

type Drawer = {
    openDrawer: boolean,
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

const initState = {
    openDrawer: false,
    setOpenDrawer: (state: Drawer) => { state.openDrawer = false }
}

export const DrawerContext = createContext<Drawer | undefined>(undefined);

const DrawerContextProvider = ({ children }: DrawerContextProviderProps) => {
    const [openDrawer, setOpenDrawer] = React.useState(initState.openDrawer)
    return (
        <DrawerContext.Provider value={{ openDrawer, setOpenDrawer }}>
            {children}
        </DrawerContext.Provider>
    )
}

export default DrawerContextProvider
