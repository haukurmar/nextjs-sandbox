import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children?: ReactNode;
};

const Button = (props: ButtonProps) => {
	const { children, ...filteredProps } = props;
	return (
		<button
			type="button"
			className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			{...filteredProps}
		>
			{children}
		</button>
	);
};

export { Button };
export type { ButtonProps };
