import { HeroCenteredImage, type HeroCenteredImageProps } from './hero-centered-image';
import { HeroLeftImage, HeroLeftImageProps } from './hero-left-image';

type HeroProps =
    | {
        layout: 'centered-image';
        layoutProps: HeroCenteredImageProps;
    }
    | {
        layout: 'left-image';
        layoutProps: HeroLeftImageProps;
    };
// | { layout: 'video-bg'; layoutProps: HeroVideoProps }; (in futuro)

export const Hero = (props: HeroProps) => {
    const { layout, layoutProps } = props;

    switch (layout) {
        case 'centered-image':
            return <HeroCenteredImage {...layoutProps} />;
        case 'left-image':
            return <HeroLeftImage {...layoutProps} />;

        default:
            return null;
    }
};
