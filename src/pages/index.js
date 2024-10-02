import Head from 'next/head'
import { GeistSans } from 'geist/font/sans'
import { Countdown } from '@/components/Countdown'
import { Header } from '@/components/Header'
import { PageBackground } from '@/components/PageBackground'
import { Footer } from '@/components/Footer'

const title = '2024年工業工程與管理學門成果發表'
const description =	'2024年工業工程與管理學門成果發表'

export default function Home({ }) {
	// if we have a username, we use the ticket image, otherwise we use the default og image

	return (
		<>
			<Head>
				<title>2024工工學門</title>
				<meta name='description' content={description} />
				<meta property='og:title' content={title} />
				<meta property='twitter:title' content={title} />
				<meta property='og:description' content={description} />
				<meta property='twitter:description' content={description} />
				<link rel='icon' href='/favicon.svg' />
			</Head>

			<Header />
			<main className={`${GeistSans.className}`}>
    	    <PageBackground>
				<div className='max-w-5xl mx-auto'>
					<h2 className='animate-fade-in-up text-6xl md:text-[80px] mx-auto text-center max-w-[20ch] text-white font-bold pt-40 mb-4'>
						2024e國科會工程處工業工程與管理學門專題計畫研究成果發表會
					</h2>

					<h3 className='text-2xl mb-6 text-center text-white text-bold'>
						2024 年 11 月 23 日 <br/> 國立成功大學管理學院 工業與資訊管理學系
					</h3>
				</div>
			</PageBackground>
		<section id="intro" >
			<div className='flex flex-col items-center justify-center text-white text-xl p-10 md:px-0 md:w-3/5 md:mx-auto'>
				本年度工業工程與管理學門成果發表會將於11/23(六)由成大工資管系舉辦。主要目的在於促進產學專家之交流，
				深入探討工業工程與管理重要議題。
				會議亦安排產、官、學、研各領域的專家對工業工程與管理相關領域之研究成果及國內重要議題進行心得分享與專業交流，
				期能增進專題計畫研發成效與擴展產學計畫的廣度。
				<img src="/IIM_logo.jpg" className="mt-10"sizes="(max-width: 1024px) 100vw, 1024px" alt="112年度國科會工工學門成果發表會於113年11月23日星期六舉行，地點：國立成功大學管理學院" />
			</div>
		</section>

		<section id="agenda" >
		<div className='flex flex-col items-center justify-center p-10 md:px-0 md:w-3/5 md:mx-auto'>
			<h1 className='text-3xl font-bold mb-6 text-purple-500'>議程</h1>
		</div>
		</section>
 
		<section id="transportation">
		<div className='flex flex-col items-center justify-center p-10 md:px-0 md:w-3/5 md:mx-auto'>
		<h1 className='text-3xl font-bold mb-6 text-purple-500'>交通資訊</h1>
			<h2 className='text-2xl text-white'>會場地點：國立成功大學光復校區管理學院</h2>
		</div>
		<div className='p-10 md:px-0 md:w-3/5 md:mx-auto'>
		 <h2 className='text-2xl mb-3 text-white text-bold'>1. 搭乘公共運輸工具</h2>

		<h3 className='text-xl text-white text-bold'>搭乘高鐵至高鐵台南站</h3>
		<div className='text-white mb-3 '>
			<li className='p-4'>高鐵台南站下車至二樓轉乘通廊或一樓大廳1號出口前往台鐵沙崙站，搭乘台鐵沙崙區間車前往台鐵台南站，抵達台鐵台南站至後站出口，沿大學路步行至成功大學光復校區管理學院。</li>
			<li className='p-4'>從高鐵台南站搭乘計程車直達成功大學光復校區管理學院。</li>
		</div>
		<h3 className='text-xl text-white text-bold'>搭乘火車至台南火車站</h3>
		<div className='text-white mb-3 '>
			<li className='p-4'>抵達台鐵台南站至後站出口，沿大學路步行至成功大學光復校區管理學院。</li>
		</div>
		<h3 className='text-xl text-white text-bold'>客運</h3>
		<div className='text-white mb-3 '>
			<li className='p-4'>與會人員請於台南轉運站下車，搭乘計程車直達成功大學光復校區管理學院。</li>
		</div>

		<h2 className='text-2xl mb-3 text-white text-bold'>2. 自行開車</h2>
		<div className='text-white mb-3 '>
			<h3 className='text-xl mb-3'>中山高速公路（國道一號）</h3>
			<li className='p-4'>南下與會人員：沿國道一號南下→下永康交流道右轉→沿中正北路、中正南路(南向)往台南市區直行→中華路左轉→沿中華東路前進→於小東路口右轉→沿小東路前進→勝利路左轉→大學路右轉，右方即可進入本校光復校區。
			【自國道三號南下者，轉國道8號（西向），可接國道一號（南向）】</li>
			<li className='p-4'>北上與會人員：沿國道一號北上→下仁德交流道左轉→沿東門路(西向)往台南市區直走→遇長榮路右轉(北向)→沿長榮路前進→大學路左轉，右方即可進入本校光復校區。
			【自國道三號北上者，轉86號快速道路（西向），可接國道一號（北向）】</li>
		</div>
		<h3 className='text-xl text-white mb-3'>停車資訊</h3>
			<li className="text-white p-4"><a target="_blank" href="https://serv-oga.ncku.edu.tw/p/412-1057-27798.php?Lang=zh-tw" rel="noopener">校園停車場位置圖 (ncku.edu.tw)</a></li>
		</div>
		</section>

        <section id="submission">
			<div className='flex flex-col items-center justify-center p-10 md:px-0 md:w-3/5 md:mx-auto'>
			<h1 className='text-3xl font-bold mb-6 text-purple-500'>報名</h1>

			<a href="https://docs.google.com/forms/d/e/1FAIpQLScHXzMyMAZRvjuiaE5u23T_p0Mfv-_jnuVZHyREbSS3qsOb4Q/viewform?usp=sf_link" className="text-xl mt-6 text-white underline">報名表單</a>
			</div>
			<div className='flex flex-col items-center justify-center pt-10 md:px-0 md:w-3/5 md:mx-auto'>
			<h3 className='text-3xl font-bold  text-gray-200'>
				報名截止日期: 2024.10.30，截止倒數 
			</h3>
			</div>
			<Countdown />
        </section>

        <section id="contact">
		<div className='flex flex-col items-center justify-center p-10 md:px-0 md:w-3/5 md:mx-auto'>
		<h1 className='text-3xl font-bold mb-6 text-purple-500'>聯絡我們</h1>
		<p className='text-xl font-bold mb-6 text-gray-200'>
			如有任何問題，請聯絡: em53100@email.ncku.edu.tw <br/>
		</p>
		</div>
        </section>
      </main>
	  <Footer />
    </>
	)
}
// 
export const getServerSideProps = async () => {

	return { 
		props: {}, 
	}
}
