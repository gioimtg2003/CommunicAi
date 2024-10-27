import { useTranslations } from 'next-intl';

export const useCommonTranslation = () => {
  const t = useTranslations('Common');
  return t;
};
