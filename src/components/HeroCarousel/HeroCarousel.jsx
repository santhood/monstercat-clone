import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import SlideElement from './SlideElement'
import ProgressBar from './ProgressBar'
import data from './data.json'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function HeroCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0)
	// const progressContainer = useRef(null)

	const onAutoplayTimeLeft = (s, time, progress) => {
		// console.log(s)
		const pot = (1 - time / 6500) * 100
		document.querySelectorAll('.progress-container').forEach((item) => {
			item.style.setProperty('--progress', `${pot.toFixed(2)}%`)
		})
	}

	return (
		<section>
			<Swiper
				onSlideChange={(ev) => setCurrentSlide(ev.realIndex)}
				centeredSlides={true}
				loop={true}
				autoplay={{
					delay: 6500,
					disableOnInteraction: false
				}}
				modules={[Autoplay]}
				onAutoplayTimeLeft={onAutoplayTimeLeft}
				className="mySwiper"
			>
				<ProgressBar currentSlide={currentSlide} />
				{data.map((element) => (
					<SwiperSlide key={element.subtitle}>
						<SlideElement data={element} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}
