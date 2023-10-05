import './globals.css'
import './animation.css'

export const metadata = {
  title: 'معامل ميد سيرف',
  description: `معامل ميد سيرف للتحاليل الطبيه #نحن نهتم بصحتك وصحه أسرتك شعارنا دائما #الثقه  #الدقه #الجوده من اولوياتنا الحرص التام والكامل على خصوصيه المريض والاهتمام بكل التفاصيل البسيطه التى تؤدى الى نتائج عظيمه`,
}

export const revalidate = 0 // revalidate the data at most every hour

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir='rtl' className='h-full'>
      <head>
        <link rel="icon" href="/icon/logo.jpg" type="image/jpeg" sizes="any"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap" rel="stylesheet" />
      </head>
        {children}
    </html>
  )
}
