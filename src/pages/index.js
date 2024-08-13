import Head from 'next/head'
import { GeistSans } from 'geist/font/sans'
import { Countdown } from '@/components/Countdown'
import { Header } from '@/components/Header'
import { Speakers } from '@/components/Speakers'
import { Agenda } from '@/sections/agenda'
import { TicketHome } from '@/sections/ticket-home'
import { query } from '@/lib/pg'
import { PageBackground } from '@/components/PageBackground'

const PREFIX_CDN = 'https://ljizvfycxyxnupniyyxb.supabase.co/storage/v1/object/public/tickets'

const title = '2024 OR conference '
const description =	'2024 OR conference'
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
				<title>2024 OR conference(在index.js)</title>
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
							Operation Research Conference <span className='text-midu-primary'>in NCKU</span>
						</h2>
						<TicketHome ticketNumber={ticketNumber} initialFlavor={flavor} username={username} />
						<h3 className='text-2xl font-bold mb-6 text-center max-w-[20ch] text-white font-bold'>
							Submission countdown
						</h3>
						<Countdown />
					</div>
				</PageBackground>
				<Speakers />
				<Agenda />
			</main>
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
