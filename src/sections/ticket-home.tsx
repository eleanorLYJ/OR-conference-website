import Ticket from '@/components/Ticket'
import { useEffect, useState } from 'react'
import { FLAVORS } from '@/flavors/data'
import { Button } from '@/components/Button'
import { TicketIcon } from '@/components/icons'
import { Container3D } from '@/components/Container3D'
import { useRouter } from 'next/router'; // Import useRouter

export const TicketHome = ({ ticketNumber, username, initialFlavor }) => {
	const router = useRouter(); // Initialize router
	const [flavor, setFlavor] = useState(FLAVORS[initialFlavor] ?? FLAVORS.javascript)
	const [number, setNumber] = useState(ticketNumber ?? 0)
	
	const handleUpload = () => {
		router.push('/summaryUpload'); // Redirect to summaryUpload page
	  };
	
	  useEffect(() => {
		if (initialFlavor) return

		const keys = Object.keys(FLAVORS)
		const length = keys.length

		const intervalId = setInterval(() => {
			// get a random key from FLAVORS object
			const randomKey = keys[Math.floor(Math.random() * length)]
			setFlavor(FLAVORS[randomKey])
		}, 2500)

		return () => {
			clearInterval(intervalId)
		}
	}, [])

	useEffect(() => {
		if (ticketNumber) return

		fetch('/api/number')
			.then((res) => res.json())
			.then((response) => {
				setNumber(+response.number + 100)
			})
	}, [])

	return (
		<div>
			<div className='block w-full h-full'>
				<div className='flex flex-col items-center justify-center gap-4 mx-auto mt-16 scale-90 md:flex-row sm:scale-100'>
					<Button
						onClick={handleUpload}
						className='px-6 py-5 text-lg font-bold md:text-3xl rounded-xl'>
						<TicketIcon className='mr-3' />
						Submit (due: 2024/09/30)
					</Button>
				</div>
			</div>
		</div>
	)
}
