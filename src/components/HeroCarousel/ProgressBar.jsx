import data from './data.json'

export default function ProgressBar({ currentSlide }) {
	return (
		<>
			<div
				className="wrapper-content absolute left-[50%] top-20 z-50 w-full translate-x-[-50%] md:hidden"
				slot="container-start"
			>
				<div className="progress-container h-2 border">
					<div className="h-full w-[var(--progress)] bg-[#f1f1f1]"></div>
				</div>
				<div className="title mt-6 hidden flex-col text-base sm:flex">
					<span>{data[currentSlide].title}</span>
					<span>{data[currentSlide].subtitle}</span>
				</div>
			</div>

			<div
				className="wrapper-content absolute left-[50%] top-20 z-50 hidden w-full translate-x-[-50%] md:block"
				slot="container-start"
			>
				<div
					className="grid gap-x-4"
					style={{
						gridTemplateColumns: `repeat(${data.length}, 1fr)`
					}}
				>
					{data.map((item) => (
						<div key={item.index_id} className="flex flex-col">
							<div className="progress-container h-2 border">
								<div
									className={`${
										item.index_id == currentSlide ? 'w-[var(--progress)]' : 'w-0'
									} h-full bg-[#f1f1f1]`}
								></div>
							</div>
							<div className="title mt-4 hidden flex-col text-base sm:flex">
								<span>{item.title}</span>
								<span>{item.subtitle}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

// w-[var(--progress)]

// absolute top-[80px] left-0
