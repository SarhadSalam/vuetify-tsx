import { ofType } from 'vue-tsx-support';
import { VCarouselItem } from 'vuetify/lib';

import { Transitionable } from './types';

export default ofType<Props, Events>().convert(VCarouselItem as any);

type Props = Transitionable & {
  reverseTransition?: string;
};

type Events = {};
