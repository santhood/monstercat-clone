function SlideElement({ full_image, data }) {
	return (
		<a href={data.to} className="relative z-50 flex h-[31.25rem] items-center justify-center">
			{full_image ? (
				<div
					className="card-shadow absolute inset-0 z-10 bg-cover bg-center opacity-70"
					style={{
						backgroundImage: `url('${data.image}')`
					}}
				/>
			) : (
				<>
					<div
						className="card-shadow absolute inset-0 z-10 bg-cover bg-center opacity-30 blur-sm"
						style={{
							backgroundImage: `url('${data.image}')`
						}}
					></div>
					<picture className="relative z-20 w-[18.75rem]">
						<img src={data.image} alt={data.title} />
					</picture>
				</>
			)}

			<h3 className="title absolute bottom-0 left-0 z-20 p-6 text-2xl">
				<span className="line-clamp-3">{data.title}</span>
			</h3>
		</a>
	)
}

export default SlideElement
