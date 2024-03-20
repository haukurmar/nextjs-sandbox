"use client";
import { useTranslation as useTranslationBase } from "react-i18next";

export const useTranslation = (namespaces: string | string[]) => {
	return useTranslationBase(namespaces);
};
