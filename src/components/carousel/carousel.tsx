import { Icon, IconButton } from '@mui/material';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
	const {
		carouselState: { currentSlide },
	} = rest;
	return (
		<div className="carousel-button-group" style={{ position: 'absolute', width: '100%', display: 'flex' }}>
			<IconButton disabled={currentSlide === 0} onClick={() => previous()}>
				<Icon>chevron_left</Icon>
			</IconButton>

			<div style={{ flex: 1 }}></div>

			<IconButton onClick={() => next()}>
				<Icon>chevron_right</Icon>
			</IconButton>
		</div>
	);
};

export const CarouselMedia = ({ children }: any) => {
	return (
		<Carousel
			additionalTransfrom={0}
			arrows={false}
			autoPlay={false}
			autoPlaySpeed={5000}
			centerMode={false}
			customButtonGroup={<ButtonGroup />}
			draggable
			focusOnSelect={false}
			infinite={true}
			keyBoardControl
			minimumTouchDrag={80}
			pauseOnHover
			renderArrowsWhenDisabled={true}
			renderButtonGroupOutside={false}
			renderDotsOutside={false}
			responsive={{
				desktop: {
					breakpoint: {
						max: 3000,
						min: 1024,
					},
					items: 3,
					partialVisibilityGutter: 40,
				},
				mobile: {
					breakpoint: {
						max: 464,
						min: 0,
					},
					items: 1,
					partialVisibilityGutter: 30,
				},
				tablet: {
					breakpoint: {
						max: 1024,
						min: 464,
					},
					items: 3,
					partialVisibilityGutter: 30,
				},
			}}
			rewind
			rewindWithAnimation={true}
			rtl={false}
			shouldResetAutoplay
			showDots={false}
			sliderClass=""
			swipeable
		>
			{children}
		</Carousel>
	);
};
