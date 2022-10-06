import { useRouter } from 'next/router'
import en from '../lang/en'
import ja from '../lang/ja'

const useLocale = () => {
  const { locale } = useRouter()
  const t = locale === 'en' ? en : ja
  return { locale, t }
}

export default useLocale
