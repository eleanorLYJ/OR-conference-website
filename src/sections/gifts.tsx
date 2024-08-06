import { NavbarIcons } from '@/components/icons/navbar'

const GIFTS = [
	{
		img: null,
		special: 'super',
		count: 1,
		name: 'Ordenador Mac Mini',
		detail: 'Si no se puede enviar, se buscará una alternativa'
	},
	{
		special: 'super',
		count: 1,
		name: 'Master Frontend de Lemoncode',
		detail: 'Duración de 6 meses, estimado en 2500€'
	},
	{
		special: 'super',
		count: 1,
		name: 'Bootcamp de JavaScript',
		detail: '100% online. Estimado en 890€'
	},
	{
		special: 'super',
		count: 1,
		name: 'Consola Nintendo Switch',
		detail: 'Si no se puede enviar, se buscará una alternativa'
	},
	{
		special: 'super',
		count: 2,
		name: 'Suscripciones 1 año en CodelyTV'
	},
	{
		special: 'high',
		count: 10,
		name: 'Peluches This is Fine'
	},
	{
		special: 'high',
		count: 3,
		name: 'Códigos de 1 año de ElsaSpeak'
	},
	{
		special: 'high',
		count: 3,
		name: 'Teclados mecánico Keychrone',
		details: 'Máximo de 95$ por teclado'
	},
	{
		special: 'high',
		count: 5,
		name: 'Libros físicos "Programador pragmático"'
	},
	{
		count: 5,
		name: 'Suscripciones 6 meses en CodelyTV'
	},
	{
		count: 5,
		name: 'Dominios + hosting profesional + SSL durante 1 año'
	},
	{
		count: 10,
		name: 'Suscripciones 1 mes de CodelyTV'
	},
	{
		count: 10,
		name: 'Suscripciones 3 meses en DevTalles'
	},
	{
		count: 25,
		name: 'Suscripciones 1 mes en DevTalles'
	},
	{
		count: 25,
		name: 'Libros "Descubre Svelte"'
	},
	{
		count: 50,
		name: 'Libros "Preguntas de entrevista de React"'
	},
	{
		count: 100,
		name: 'Libros "Aprendiendo Git"'
	}
]

/* Próximamente desvelaremos <strong>todos</storng> los regalos!
 */
export const Gifts = () => {
	return (
		<section id='regalos' className='px-4 pt-24'>
			<div className='flex relative group flex-col cursor-crosshair gap-4 py-20 mx-auto shadow-[inset_0_4px_30px] shadow-midu-primary/25 overflow-hidden rounded-2xl bg-midu-primary/10 max-w-screen-base'>
				<div className='pointer-events-none absolute w-1/2 rotate-45 h-[300%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#41b3ff00] via-[#b0a9ff13] to-[#41b3ff00]'></div>
				<h2 className='text-6xl font-bold text-center text-white'>Regalos</h2>
				<p className='text-4xl font-semibold text-center max-w-[24ch] text-yellow-200 mx-auto px-4'>
					¡Muy pronto desvelaremos todos los regalos!
				</p>
				<NavbarIcons.GiftIcon className='absolute top-0 right-0 text-white transition duration-300 translate-x-1/4 translate-y-1/4 opacity-10 w-96 h-96 group-hover:-rotate-12 group-hover:scale-125 group-hover:opacity-20' />
			</div>
		</section>
	)
}

const GiftsSection = () => {
	return (
		<section id='regalos' className='flex flex-col flex-wrap items-center justify-center pt-24'>
			<h2 className='text-6xl font-bold text-center text-white'>Regalos</h2>
			<p className='max-w-xl text-xl text-sky-200 text-center [text-wrap:balance] mt-4'>
				256 regalos para todo el mundo.
				<br />
				¡Necesitas tener{' '}
				<a href='#' className='text-yellow-200 underline'>
					el ticket gratuito para participar
				</a>
				!
				<br />
			</p>

			<div className='bg-[#000214] group-hover:bg-[#000214]/10 w-full px-6 py-10 rounded transition flex flex-col gap-2 max-w-xl m-auto gap-y-4'>
				{GIFTS.map((gift, index) => (
					<div key={index} className='flex flex-col transition cursor-crosshair hover:scale-110'>
						{gift.img && (
							<img
								className='object-cover w-full h-auto transition group-hover:scale-110'
								src={`/img/gifts/${gift.img}.png`}
								alt={`gift: ${gift.name}`}
							/>
						)}

						<h5
							className={`
							${gift.special === 'super' && 'text-yellow-300 text-3xl'}
							${gift.special === 'high' && 'text-yellow-200 text-2xl'}
							${gift.special === undefined && 'text-yellow-100 text-xl'}
						mb-2 text-2xl font-semibold tracking-tight
						`}
						>
							{gift.count}x {gift.name}
						</h5>
						{gift.detail && <p className='-mt-2 text-sm text-sky-200 opacity-90'>{gift.detail}</p>}
					</div>
				))}
			</div>
			<small className='text-center text-white text-sm max-w-xl opacity-80 [text-wrap:balance] mt-3'>
				Si ganas un sorteo y no se puede enviar a tu país el regalo, buscaremos una alternativa del
				mismo valor monetario.
			</small>
		</section>
	)
}
