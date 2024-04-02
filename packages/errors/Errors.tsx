"use client";

import { Button } from "@app/ui";

type ErrorsProps = {};

const Errors = (props: ErrorsProps) => {
	return (
		<div className="flex space-x-4">
			<Button
				onClick={() => {
					console.error("This is a console error");
				}}
			>
				Console error
			</Button>
			<Button
				onClick={() => {
					throw new Error("This is a thrown error");
				}}
			>
				Throw error
			</Button>
		</div>
	);
};

export { Errors };
export type { ErrorsProps };
