'use client'

import { MiduLogo } from '@/components/logos/midudev'
import { NavbarIcons } from '@/components/icons/navbar'
import { Button } from '@/components/Button'
import { useId, useState, useContext, useEffect } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react';

export function Header() {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false)
	const navbarId = useId()
	const { data: session, status } = useSession();

	return (
		<header className='header-animate backdrop-blur-[10px] md:backdrop-blur-0 w-full mb-10 overflow-hidden z-[99999] py-8'>
			<div className='grid items-center justify-center md:justify-normal w-full grid-cols-[auto_1fr] mx-auto text-white gap-x-10 md:flex max-w-screen-base'>
				<a
					href='/'
					className='ml-4 transition-transform duration-300 hover:scale-125'
					title='Ir a la página principal'
					aria-label='Ir a la página principal'
				>
					<MiduLogo className='w-10 h-12' />
				</a>
				<nav
					id={navbarId}
					className={cn(
						'col-span-full overflow-x-auto row-[2/3] grid md:block grid-rows-[0fr] transition-[grid-template-rows] ',
						{
							'grid-rows-[1fr]': isNavbarOpen
						}
					)}
				>
					<ul className='flex flex-col items-center overflow-x-auto overflow-y-hidden md:overflow-hidden md:flex-row'>
						{NAV_ITEMS.map(({ Icon, href, title }, index) => (
							<li
								key={index}
								className='flex justify-center w-full first:mt-5 md:first:mt-0 md:block md:w-auto'
							>
								<a
									href={href}
									className='flex items-center justify-center w-full gap-1 px-5 py-4 text-xl duration-300 md:w-auto md:py-2 md:text-base hover:scale-110'
								>
									<Icon />
									{title}
								</a>
							</li>
						))}
					</ul>
				</nav>
			{/* Conditionally render login/signup based on authentication state */}
			{!session && ( // Hide if logged in
          		<>
					<Link href="/login" className="hidden md:block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						Login
					</Link>
					<Link href="/signup" className="hidden md:block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						Sign Up
					</Link>
         		 </>
       		 )} 
			{/* Optionally display user profile if logged in */}
				{session && (
          		<div className="hidden md:block">
					<span className="text-white mr-4">Hi, {session.user.name}!</span>
					<button className="text-white underline" onClick={() => signOut()}>Logout</button>
					{/* <Link href="" className="text-white underline">Logout</Link> */}
				</div>
        )}
			</div>
		</header>
	)
}

const NAV_ITEMS = [
	{
		href: '/#speakers',
		title: 'Speakers',
		Icon: NavbarIcons.SpeakersIcon
	},
	{
		href: '/#agenda',
		title: 'Agenda',
		Icon: NavbarIcons.ScheduleIcon
	}
]
