'use client';
import React from 'react';
import { WavePath } from "@/components/wave-path";
import { cn } from '@/lib/utils';

export default function Footer() {
	return (
		<div className="relative w-full flex min-h-[500px] flex-col items-center justify-center bg-[#ff6900]">
			<div
				aria-hidden="true"
				className={cn(
					'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
					'bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]',
					'blur-[30px]',
				)}
			/>

			<div className="flex w-[70vw] flex-col items-end">
				<WavePath className="mb-10" />
				<div className="flex w-full flex-col items-end">
					<div className="flex justify-end">
						<p className="text-white/80 mt-2 text-sm">hello</p>
						<p className="text-white ml-8 w-3/4 text-2xl md:text-4xl">
							Let’s craft something bold, simple, and unforgettable.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}