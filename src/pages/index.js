import Head from 'next/head'
import { GeistSans } from 'geist/font/sans'
import { Countdown } from '@/components/Countdown'
import { Header } from '@/components/Header'
import { TicketHome } from '@/sections/ticket-home'
import { query } from '@/lib/pg'
import { PageBackground } from '@/components/PageBackground'
import { Footer } from '@/components/Footer'
const PREFIX_CDN = 'https://ljizvfycxyxnupniyyxb.supabase.co/storage/v1/object/public/tickets'

const title = 'ORSTW 2024'
const description =	'The 2024 International Conference and the 20th Annual Meeting of the Operations Research Society of TAIWAN (ORSTW 2024)'
const defaultOgImage = '/og-image.jpg'
const url = ''  // todo

export default function Home({ username, flavor, ticketNumber, burst }) {
	// if we have a username, we use the ticket image, otherwise we use the default og image
	const ogImage = username
		? `${PREFIX_CDN}/ticket-${ticketNumber}.jpg?c=${burst}`
		: `${url}${defaultOgImage}`

	return (
		<>
			<Head>
				<title>ORSTW 2024</title>
				<meta name='description' content={description} />
				<meta property='og:image' content={ogImage} />
				<meta property='twitter:image' content={ogImage} />
				<meta property='og:title' content={title} />
				<meta property='twitter:title' content={title} />
				<meta property='og:description' content={description} />
				<meta property='twitter:description' content={description} />
				<meta property='og:url' content={url} />
				<meta property='twitter:url' content={url} />
				<meta property='og:type' content='website' />
				<meta property='twitter:card' content='summary_large_image' />
				<link rel='icon' href='/favicon.svg' />
			</Head>

			<Header />
			<main className={`${GeistSans.className}`}>
    	    <PageBackground>
				<div className='max-w-5xl mx-auto'>
					<h2 className='animate-fade-in-up text-6xl md:text-[80px] mx-auto text-center max-w-[20ch] text-white font-bold pt-40'>
						第 20 屆台灣作業研究學會年會暨學術研討會 
					</h2>
						The 20th Annual Meeting of the Operations Research Society of Taiwan (ORSTW 2024)
					<h3 className='text-2xl mb-6 text-center text-white text-bold'>
						2024年11月23-24日 <br/> 國立成功大學 
					</h3>
				</div>
			</PageBackground>



        <section id="topic" >
		{/* div in the middle but text is not in the middle */}
		<div className='flex flex-col items-center justify-center p-10 md:px-0 md:w-3/5 md:mx-auto'>
		<h1 className='text-3xl font-bold mb-6 text-purple-500'>主題</h1>
		<h2 className='animate-fade-in-up text-6xl md:text-[80px] mx-auto text-center max-w-[20ch] text-white font-bold pt-40'>
			Innovating for a Sustainable Future: <br/>
			OR in the Era of Digital Transformation</h2>
		<p className='text-xl font-bold mb-6 text-gray-200'>
			ORSTW2024 brings together researchers, practitioners, and decision-makers to share cutting-edge research, innovative applications, and emerging trends in Operations Research and related fields. We welcome contributions in areas including but not limited to:<br/>
			• Optimization and Mathematical Programming <br/>
			• Stochastic Modeling and Simulation <br/>
			• Data Analytics and Machine Learning <br/>
			• Supply Chain Management and Logistics <br/>
			• Healthcare Systems and Operations <br/>	
			• Sustainable Operations and Green Technologies <br/>
			• Financial Engineering and Risk Management <br/>
			• Energy Systems and Smart Grids <br/>
			• Transportation and Network Analysis <br/>
			• Decision Support Systems And Management <br/>
			• Industry 4.0 and Smart Manufacturing <br/>
			</p>
		</div>
        </section>
		<section id="agenda" >
		<div className='flex flex-col items-center justify-center p-10 md:px-0 md:w-3/5 md:mx-auto'>
			<h1 className='text-3xl font-bold mb-6 text-purple-500'>議程</h1>
		</div>
		</section>
 
		<section id="organization">
		<div className='flex flex-col items-center justify-center p-10 md:px-0 md:w-3/5 md:mx-auto'>
		<h1 className='text-3xl font-bold mb-6 text-purple-500'>大會組織</h1>
		</div>
        </section>

		<section id="transportation">
		<div className='flex flex-col items-center justify-center p-10 md:px-0 md:w-3/5 md:mx-auto'>
		<h1 className='text-3xl font-bold mb-6 text-purple-500'>交通資訊</h1>
			<h2>會場地點：國立成功大學 校區 </h2>
		
		</div>
        </section>

		<section id="schedule">
		<div className='flex flex-col items-center justify-center p-10 md:px-0 md:w-2/5 md:mx-auto'>
		<h1 className='text-3xl font-bold mb-6 text-purple-500'>重要日程</h1>
		
		<table className='w-full text-gray-200 mb-6'>
			<thead>
				<tr>
				<th className='text-left'>日期</th>
				<th className='text-left'>事件</th>
				</tr>
			</thead>
			<tbody>
				<tr>
				<td>09/27</td>
				<td>Abstract Submission Deadline</td>
				</tr>
				<tr>
				<td>10/11</td>
				<td>Notification of Acceptance</td>
				</tr>
				<tr>
				<td>10/18</td>
				<td>Registration Deadline</td>
				</tr>
				<tr>
				<td>11/23-24</td>
				<td>Conference Dates</td>
				</tr>		
			</tbody>
		</table>
		</div>
        </section>

        <section id="submission">
			<div className='flex flex-col items-center justify-center p-10 md:px-0 md:w-3/5 md:mx-auto'>
			<h1 className='text-3xl font-bold mb-6 text-purple-500'>投稿</h1>
			<p className='text-xl font-bold mb-6 text-gray-200'>
				<a href="https://www.dropbox.com/scl/fi/t6nzmyj8nek1bcgtl39zi/ORSTW2020_abstract_format.doc?rlkey=q27bj7bylg5cr5g0cv8y2ydg2&e=1&dl=0"> 摘要格式 </a>
			</p>
			</div>
			<TicketHome ticketNumber={ticketNumber} initialFlavor={flavor} username={username} />
			<div className='flex flex-col items-center justify-center pt-10 md:px-0 md:w-3/5 md:mx-auto'>
			<h3 className='text-3xl font-bold  text-gray-200'>
				Submission countdown
			</h3>
			</div>
			<Countdown />
        </section>

        <section id="contact">
		<div className='flex flex-col items-center justify-center p-10 md:px-0 md:w-3/5 md:mx-auto'>
		<h1 className='text-3xl font-bold mb-6 text-purple-500'>聯絡</h1>
		<p className='text-xl font-bold mb-6 text-gray-200'>
		Contact: orstw2024@gmail.com <br/>
		Conference Website: http://orstw2024.iim.ncku.edu.tw/
		</p>
		</div>
        </section>
      </main>
	  <Footer />
    </>
	)
}
// 
export const getServerSideProps = async (ctx) => {
	const { ticket } = ctx.query
  
	if (!ticket) {
	  return { props: {} }
	}
  
	try {
	  const result = await query('SELECT * FROM ticket WHERE user_name = $1', [ticket])
  
	  if (result.rows.length > 0) {
		const row = result.rows[0]
		return {
		  props: {
			burst: crypto.randomUUID(),
			ticketNumber: row.ticket_number,
			username: row.user_name,
			flavor: row.flavour
		  }
		}
	  }
	} catch (err) {
	  console.error('Database query error', err)
	}
  
	return { props: {} }
}
