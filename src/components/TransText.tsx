import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

interface TextProps {
    fr: string;
    en: string;
}

export const TransText: React.FC<TextProps> = (props) => {
    const { selectedLanguage } = useLanguage();

    return props[selectedLanguage as keyof TextProps];
};

