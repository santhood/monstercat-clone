import { Swiper, SwiperSlide } from 'swiper/react'
import SlideElement from './SlideElement'
import data from './data.json'

import 'swiper/css'
import 'swiper/css/pagination'

export default function ThreeCarousel() {
	return (
		<section className="wrapper-content mt-12">
			<div className="grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-3">
				{data.map((item) => (
					<div key={item.title}>
						<h3 className="title text-xl opacity-50">{item.title}</h3>
						<Swiper spaceBetween={2} className="mySwiper2 mt-8">
							<div className="absolute right-0 top-0 flex items-center p-4 [&>svg]:w-12">
								<svg xmlns="http://www.w3.org/2000/svg" width="128" viewBox="0 0 24 24">
									<path fill="currentColor" d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z"></path>
								</svg>

								<svg xmlns="http://www.w3.org/2000/svg" width="128" viewBox="0 0 24 24">
									<path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"></path>
								</svg>
							</div>
							{item.slides.map((slide) => (
								<SwiperSlide key={slide.title}>
									<SlideElement full_image={item.full_image} data={slide} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				))}
			</div>
		</section>
	)
}
