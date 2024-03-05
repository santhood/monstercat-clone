export default function SlideElement({ data }) {
	return (
		<div className="relative min-h-[48rem] overflow-hidden px-4 pb-10 pt-20">
			{/* Background blur */}
			<div
				className="absolute inset-0 z-10 bg-cover bg-center blur-sm"
				style={{
					backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0 ,0.05), rgba(17, 17, 17) 80%), url('${data.image}')`,
					inset: '-5%'
				}}
			/>

			{/* Text content info */}
			<div className="relative z-40 mx-auto mt-[4.5rem] grid grid-cols-1 xl:w-max xl:grid-cols-[max-content,max-content]">
				<div className="relative mt-10 flex flex-col sm:mt-8">
					<picture className="mx-auto w-[16.25rem] shadow-[0_60px_40px_20px_rgba(0,0,0,0.35)] sm:w-[60vw] sm:max-w-[32rem]">
						<img src={data.image} alt={`Cover ${data.title}`} />
					</picture>
					<p className="mt-8 hidden text-center text-base italic tracking-[0.0375rem] sm:block xl:absolute xl:bottom-0 xl:left-0 xl:-translate-x-full xl:rotate-180 xl:px-2 xl:py-4 xl:text-lg xl:[writing-mode:vertical-lr]">
						<span className="font-semibold" style={{ color: data.primary_color }}>
							{data.info.text_color}
						</span>
						{data.info.text_default}
					</p>
				</div>

				<div className="title mt-12 flex flex-col sm:mt-6 sm:text-center xl:-translate-x-1/3 xl:justify-center xl:text-left">
					<p className="font-body text-xs font-normal normal-case italic tracking-[0.0375rem] sm:hidden">
						<span className="font-semibold" style={{ color: data.primary_color }}>
							{data.info.text_color}
						</span>
						{data.info.text_default}
					</p>

					<h2 className="md:text-shadow mt-4 text-2xl sm:text-4xl md:text-5xl">{data.title}</h2>
					<h3 className="mt-2 text-sm sm:text-3xl">{data.subtitle}</h3>

					<div className="mt-4 flex flex-col gap-y-4 text-center sm:mt-6 sm:flex-row sm:justify-center sm:gap-x-4 md:text-base">
						<a
							href={data.links._1}
							className="px-4 py-3 sm:px-8 sm:py-4"
							style={{ backgroundColor: data.primary_color }}
						>
							View Release
						</a>
						<a href={data.links._2} className="border px-4 py-3 sm:px-8 sm:py-4">
							Listen on Player
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
