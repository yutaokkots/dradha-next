"use client";

import React, { useState, useEffect } from "react";
import localStorageRetriever from "@/utilities/helpers/themeRetriever";

interface ColorProviderProps {
    children:React.ReactNode;
}

const ColorProvider = ({ children }:ColorProviderProps):JSX.Element => {
    const [colorTheme, setColorTheme] = useState<'lighttheme'|'darktheme'>('darktheme');

    useEffect(() => {
        const themeGetter = async () => {
            const theme = localStorageRetriever();
            setColorTheme(theme)
        }
        themeGetter()
    },[])

    return(
        <body className={colorTheme}>
            {children}
        </body>
    )
}

export default ColorProvider;