"use client";
import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import useKeypress from "react-use-keypress";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

let images = [
	"https://europe-west2-bilar-staging.cloudfunctions.net/ext-image-processing-api-handler/process?operations=%5B%7B%22operation%22%3A%22input%22%2C%22type%22%3A%22url%22%2C%22url%22%3A%22https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fbilar-staging.appspot.com%2Fo%2FXvnaAVNCCoNFbvW6ADgQVQ5RVZ63%25252Fimages%25252F9c6f50b0-dbea-4670-be59-ee13eac148f3%25252F9ec83326-844a-48e4-8278-aa1992daa797-processed%3Falt%3Dmedia%26token%3D609d597e-b7a5-430c-a086-fdcc3717846d%22%7D%2C%7B%22operation%22%3A%22resize%22%2C%22width%22%3A640%2C%22height%22%3A480%7D%2C%7B%22operation%22%3A%22output%22%2C%22format%22%3A%22webp%22%2C%22quality%22%3A100%2C%22lossless%22%3Atrue%7D%5D",
	"https://europe-west2-bilar-staging.cloudfunctions.net/ext-image-processing-api-handler/process?operations=%5B%7B%22operation%22%3A%22input%22%2C%22type%22%3A%22url%22%2C%22url%22%3A%22https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fbilar-staging.appspot.com%2Fo%2FXvnaAVNCCoNFbvW6ADgQVQ5RVZ63%25252Fimages%25252F9c6f50b0-dbea-4670-be59-ee13eac148f3%25252F22fd176e-52a8-4336-a564-3f14b494a2f2-processed%3Falt%3Dmedia%26token%3Dba6c4290-714c-4539-987d-cdccb0477f44%22%7D%2C%7B%22operation%22%3A%22resize%22%2C%22width%22%3A640%2C%22height%22%3A480%7D%2C%7B%22operation%22%3A%22output%22%2C%22format%22%3A%22webp%22%2C%22quality%22%3A100%2C%22lossless%22%3Atrue%7D%5D",
	"https://europe-west2-bilar-staging.cloudfunctions.net/ext-image-processing-api-handler/process?operations=%5B%7B%22operation%22%3A%22input%22%2C%22type%22%3A%22url%22%2C%22url%22%3A%22https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fbilar-staging.appspot.com%2Fo%2FXvnaAVNCCoNFbvW6ADgQVQ5RVZ63%25252Fimages%25252F9c6f50b0-dbea-4670-be59-ee13eac148f3%25252Fc9757745-d41e-4fb9-adbd-eb1b9d538967-processed%3Falt%3Dmedia%26token%3Da9bce8dd-3d5c-4991-ae3c-69f1513dcc9a%22%7D%2C%7B%22operation%22%3A%22resize%22%2C%22width%22%3A640%2C%22height%22%3A480%7D%2C%7B%22operation%22%3A%22output%22%2C%22format%22%3A%22webp%22%2C%22quality%22%3A100%2C%22lossless%22%3Atrue%7D%5D",
];

let collapsedAspectRatio = 1 / 3;
let fullAspectRatio = 3 / 2;
let gap = 2;
let margin = 12;

export const Gallery = () => {
	let [index, setIndex] = useState(0);

	useKeypress("ArrowRight", () => {
		if (index + 1 < images.length) {
			setIndex(index + 1);
		}
	});

	useKeypress("ArrowLeft", () => {
		if (index > 0) {
			setIndex((i) => i - 1);
		}
	});

	return (
		<MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
			<div className="h-full bg-black">
				<div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
					<div className="relative overflow-hidden">
						<motion.div animate={{ x: `-${index * 100}%` }} className="flex">
							{images.map((image, i) => (
								<motion.img
									key={image}
									src={image}
									animate={{ opacity: i === index ? 1 : 0.3 }}
									className="aspect-[3/2] object-cover"
								/>
							))}
						</motion.div>
						<AnimatePresence initial={false}>
							{index > 0 && (
								<motion.button
									initial={{ opacity: 0 }}
									animate={{ opacity: 0.7 }}
									exit={{ opacity: 0, pointerEvents: "none" }}
									whileHover={{ opacity: 1 }}
									className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
									onClick={() => setIndex(index - 1)}
								>
									<ChevronLeftIcon className="h-6 w-6" />
								</motion.button>
							)}
						</AnimatePresence>

						<AnimatePresence initial={false}>
							{index + 1 < images.length && (
								<motion.button
									initial={{ opacity: 0 }}
									animate={{ opacity: 0.7 }}
									exit={{ opacity: 0, pointerEvents: "none" }}
									whileHover={{ opacity: 1 }}
									className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
									onClick={() => setIndex(index + 1)}
								>
									<ChevronRightIcon className="h-6 w-6" />
								</motion.button>
							)}
						</AnimatePresence>
					</div>

					<div className="absolute inset-x-0 bottom-6 flex justify-center overflow-hidden">
						<motion.div
							initial={false}
							animate={{
								x: `-${index * 100 * (collapsedAspectRatio / fullAspectRatio) + index * gap + margin}%`,
							}}
							style={{ aspectRatio: fullAspectRatio, gap: `${gap}%` }}
							className="flex h-14"
						>
							{images.map((image, i) => (
								<motion.button
									key={image}
									onClick={() => setIndex(i)}
									whileHover={{ opacity: 1 }}
									initial={false}
									animate={i === index ? "active" : "inactive"}
									variants={{
										active: {
											marginLeft: `${margin}%`,
											marginRight: `${margin}%`,
											opacity: 1,
											aspectRatio: fullAspectRatio,
										},
										inactive: {
											marginLeft: "0%",
											marginRight: "0%",
											opacity: 0.5,
											aspectRatio: collapsedAspectRatio,
										},
									}}
								>
									<motion.img src={image} className="h-full object-cover" />
								</motion.button>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</MotionConfig>
	);
};
