// import { useAppContext } from "@/context/appContext";
import React from "react";

interface TextProps {
    fr: string;
    en: string;
}

export const TransText: React.FC<TextProps> = (props) => {
    // const {selectedLanguage} = useAppContext();
    const selectedLanguage = "en";

    return props[selectedLanguage as keyof TextProps];
};

