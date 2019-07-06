import { CommonEvents } from '@/shared/types';
import { ofType } from 'vue-tsx-support';
import { VForm } from 'vuetify/lib';

export default ofType<Props, CommonEvents>().convert(VForm as any);

type Props = {
  ref?: string;
  'v-model'?: any;
  'lazy-validation'?: boolean;
  value?: boolean;
};
