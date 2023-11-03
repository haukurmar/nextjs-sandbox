import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes, SVGProps } from "react";

export type NavigationItem = {
	name: string;
	href: string;
	icon: ReactNode;
	current: boolean;
};

export type HeroIconType = ForwardRefExoticComponent<
	PropsWithoutRef<SVGProps<SVGSVGElement>> & {
		title?: string;
		titleId?: string;
	} & RefAttributes<SVGSVGElement>
>;
