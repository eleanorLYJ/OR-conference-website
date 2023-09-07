import { cn } from '@/lib/utils'
import Marquee from '@/components/magicui/Marquee'
import { DonDominio } from '@/components/logos/dondominio'
import { ReactNode } from 'react'
import { Malt } from '@/components/logos/maltes'
import { TwitchLogo } from '@/components/TwitchLogo'

const reviews = [
	{
		name: 'FL0',
		link: 'https://fl0.com',
		logo: (
			<svg
				width='70'
				height='25'
				viewBox='0 0 70 25'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M61.166 24.176V20.158H63.231C63.4543 20.1447 63.664 20.0467 63.8174 19.8838C63.9707 19.721 64.0562 19.5057 64.056 19.282C64.056 19.265 64.056 19.248 64.056 19.231V14.36C64.0559 13.8512 64.2191 13.3558 64.5215 12.9467C64.8239 12.5375 65.2495 12.2362 65.736 12.087C65.2495 11.9378 64.8239 11.6365 64.5215 11.2273C64.2191 10.8182 64.0559 10.3228 64.056 9.814V4.947C64.056 4.929 64.056 4.912 64.056 4.895C64.0562 4.67131 63.9707 4.45603 63.8174 4.29319C63.664 4.13035 63.4543 4.03226 63.231 4.019H61.166V0H64.5601C65.487 0.0137031 66.3719 0.388209 67.0271 1.04397C67.6823 1.69974 68.0561 2.5851 68.069 3.512V9.412C68.069 9.429 68.069 9.446 68.069 9.464C68.0693 9.69688 68.1526 9.92203 68.3037 10.0992C68.4549 10.2764 68.6641 10.394 68.894 10.431H69.506V13.743H68.894C68.6641 13.78 68.4549 13.8976 68.3037 14.0748C68.1526 14.252 68.0693 14.4771 68.069 14.71C68.069 14.728 68.069 14.745 68.069 14.762V20.662C68.1017 21.1017 68.0452 21.5434 67.9028 21.9606C67.7605 22.3779 67.5352 22.762 67.2406 23.09C66.946 23.418 66.5881 23.683 66.1885 23.8691C65.7888 24.0552 65.3557 24.1586 64.915 24.173H64.559L61.166 24.176ZM39.61 24.176H39.254C38.8135 24.1614 38.3804 24.058 37.9808 23.8718C37.5813 23.6856 37.2236 23.4206 36.9291 23.0927C36.6346 22.7647 36.4094 22.3806 36.2671 21.9634C36.1248 21.5462 36.0682 21.1046 36.101 20.665V14.765C36.101 14.748 36.101 14.731 36.101 14.713C36.1006 14.4801 36.0175 14.255 35.8663 14.0778C35.7152 13.9006 35.5059 13.783 35.276 13.746H34.6639V10.432H35.276C35.5059 10.395 35.7152 10.2774 35.8663 10.1002C36.0175 9.92303 36.1006 9.69788 36.101 9.465C36.101 9.447 36.101 9.43 36.101 9.413V3.513C36.1136 2.58592 36.4873 1.70031 37.1426 1.04433C37.7978 0.388353 38.6829 0.0137092 39.61 0L43 0V4.018H40.934C40.7107 4.03126 40.5009 4.12935 40.3475 4.29219C40.1942 4.45503 40.1089 4.67031 40.109 4.894C40.109 4.911 40.109 4.928 40.109 4.946V9.814C40.1091 10.3228 39.946 10.8182 39.6436 11.2273C39.3411 11.6365 38.9154 11.9378 38.429 12.087C38.9154 12.2362 39.3411 12.5375 39.6436 12.9467C39.946 13.3558 40.1091 13.8512 40.109 14.36V19.228C40.109 19.245 40.109 19.262 40.109 19.279C40.1089 19.5027 40.1942 19.718 40.3475 19.8808C40.5009 20.0437 40.7107 20.1417 40.934 20.155H43V24.173L39.61 24.176ZM27.563 24.176C25.437 24.176 24.11 23.613 23.175 22.488C22.24 21.363 21.775 19.528 21.775 16.98V4.232H17.629V0.076H26.0649V16.266C25.981 17.2636 26.2025 18.2632 26.7 19.132C26.9575 19.4373 27.2854 19.6755 27.6554 19.826C28.0254 19.9765 28.4264 20.0349 28.824 19.996H32.412V24.177L27.563 24.176ZM3.63794 24.05V11.19H0V7.09H3.63904V3.6C3.62821 3.14148 3.71004 2.68549 3.87964 2.25935C4.04924 1.83321 4.30305 1.44569 4.62598 1.12C4.94186 0.790787 5.32282 0.530963 5.74463 0.357073C6.16644 0.183184 6.61993 0.0990398 7.07605 0.11H13.9189V4.21H8.84705C8.23305 4.21 7.92798 4.552 7.92798 5.236V7.085H13.9189V11.185H7.92798V24.05H3.63794Z'
					fill='white'
				/>
				<path
					d='M49.7455 24.207H45.1035L54.2855 0.000976562H58.9935L49.7455 24.207Z'
					fill='#3CDEDB'
				/>
			</svg>
		)
	},
	{
		name: 'Twitch',
		link: 'https://twitch.tv/midudev',
		logo: <TwitchLogo className='h-[30px] w-auto' />
	},
	{
		name: 'Vercel',
		link: 'https://vercel.com',
		logo: (
			<svg fill='none' viewBox='0 0 149 41' aria-label='Vercel' height='50'>
				<path
					fill='currentColor'
					d='M73.183 11.848c-5.311 0-9.148 3.473-9.148 8.67 0 5.199 4.313 8.672 9.625 8.672 3.223 0 6.038-1.271 7.809-3.405l-3.678-2.134c-.976 1.067-2.451 1.68-4.108 1.68-2.316 0-4.268-1.203-4.994-3.132h13.506c.114-.545.159-1.09.159-1.68-.023-5.221-3.836-8.671-9.17-8.671Zm-4.562 6.968c.613-1.93 2.247-3.132 4.562-3.132 2.316 0 3.95 1.203 4.563 3.132h-9.125Zm56.43-6.968c-5.311 0-9.147 3.473-9.147 8.67 0 5.199 4.313 8.672 9.624 8.672 3.224 0 6.038-1.271 7.809-3.405l-3.678-2.134c-.976 1.067-2.451 1.68-4.108 1.68-2.315 0-4.268-1.203-4.994-3.132h13.506c.114-.545.159-1.09.159-1.68 0-5.221-3.836-8.671-9.171-8.671Zm-4.539 6.968c.613-1.93 2.247-3.132 4.562-3.132 2.316 0 3.95 1.203 4.563 3.132h-9.125Zm-18.795 1.703c0 2.883 1.884 4.812 4.812 4.812 1.975 0 3.473-.908 4.245-2.36l3.7 2.133c-1.521 2.542-4.404 4.086-7.945 4.086-5.335 0-9.148-3.473-9.148-8.671 0-5.198 3.836-8.671 9.148-8.671 3.541 0 6.401 1.543 7.945 4.086l-3.7 2.133c-.772-1.475-2.248-2.36-4.245-2.36-2.928-.023-4.812 1.906-4.812 4.812ZM141.44 6.536v22.155h-4.335V6.536h4.335ZM23.04 4.13l17.797 30.826H5.244L23.041 4.13Zm44.514 2.406-13.347 23.13-13.348-23.13h5.017l8.353 14.46 8.354-14.46h4.971Zm28.374 5.788V17a5.633 5.633 0 0 0-1.543-.227c-2.792 0-4.813 1.93-4.813 4.813v7.127h-4.335V12.324h4.335v4.427c0-2.452 2.838-4.427 6.356-4.427Z'
				></path>
			</svg>
		)
	},
	{
		name: 'GitHub',
		link: 'https://github.com',
		logo: (
			<svg viewBox='0 0 550 139' height='50' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M70.49 0C31.51 0 0 31.74 0 71.02C0 102.41 20.19 128.98 48.2 138.39C51.7 139.1 52.98 136.86 52.98 134.98C52.98 133.33 52.86 127.69 52.86 121.81C33.25 126.04 29.17 113.34 29.17 113.34C26.02 105.11 21.35 102.99 21.35 102.99C14.93 98.64 21.82 98.64 21.82 98.64C28.94 99.11 32.67 105.93 32.67 105.93C38.97 116.75 49.12 113.69 53.21 111.81C53.79 107.22 55.66 104.05 57.65 102.29C42.01 100.64 25.56 94.53 25.56 67.25C25.56 59.49 28.36 53.14 32.79 48.2C32.09 46.44 29.64 39.15 33.49 29.39C33.49 29.39 39.44 27.51 52.86 36.68C58.61 35.13 64.53 34.33 70.48 34.33C76.43 34.33 82.5 35.15 88.1 36.68C101.52 27.51 107.47 29.39 107.47 29.39C111.32 39.15 108.87 46.44 108.17 48.2C112.72 53.14 115.41 59.49 115.41 67.25C115.41 94.53 98.96 100.52 83.2 102.29C85.77 104.52 87.98 108.76 87.98 115.46C87.98 124.98 87.86 132.63 87.86 134.98C87.86 136.86 89.14 139.1 92.64 138.39C120.65 128.98 140.84 102.41 140.84 71.02C140.98 31.74 109.36 0 70.49 0Z'
					fill='white'
				/>
				<path
					d='M258.29 66.66H228.02C227.24 66.66 226.61 67.29 226.61 68.07V82.87C226.61 83.65 227.24 84.29 228.02 84.29H239.83V102.68C239.83 102.68 237.18 103.58 229.85 103.58C221.2 103.58 209.12 100.42 209.12 73.86C209.12 47.3 221.7 43.8 233.51 43.8C243.73 43.8 248.14 45.6 250.94 46.47C251.82 46.74 252.63 45.86 252.63 45.08L256.01 30.78C256.01 30.41 255.89 29.97 255.47 29.68C254.33 28.87 247.39 24.98 229.85 24.98C209.64 24.98 188.92 33.58 188.92 74.9C188.92 116.22 212.65 122.38 232.65 122.38C249.21 122.38 259.25 115.3 259.25 115.3C259.66 115.07 259.71 114.49 259.71 114.23V68.08C259.71 67.3 259.08 66.67 258.3 66.67L258.29 66.66Z'
					fill='white'
				/>
				<path
					d='M414.27 29.92C414.27 29.13 413.65 28.5 412.87 28.5H395.83C395.05 28.5 394.42 29.14 394.42 29.92V62.85H367.86V29.92C367.86 29.13 367.23 28.5 366.45 28.5H349.41C348.63 28.5 348 29.14 348 29.92V119.09C348 119.88 348.63 120.52 349.41 120.52H366.45C367.23 120.52 367.86 119.88 367.86 119.09V80.95H394.42L394.37 119.09C394.37 119.88 395 120.52 395.78 120.52H412.86C413.64 120.52 414.26 119.88 414.27 119.09V29.92Z'
					fill='white'
				/>
				<path
					d='M290.45 41.62C290.45 35.48 285.53 30.52 279.46 30.52C273.39 30.52 268.47 35.48 268.47 41.62C268.47 47.76 273.39 52.72 279.46 52.72C285.53 52.72 290.45 47.75 290.45 41.62Z'
					fill='white'
				/>
				<path
					d='M289.23 100.28V59.12C289.23 58.34 288.6 57.7 287.82 57.7H270.83C270.05 57.7 269.35 58.5 269.35 59.29V118.27C269.35 120 270.43 120.52 271.83 120.52H287.14C288.82 120.52 289.23 119.7 289.23 118.24V100.29V100.28Z'
					fill='white'
				/>
				<path
					d='M479.04 57.83H462.13C461.35 57.83 460.72 58.47 460.72 59.26V102.99C460.72 102.99 456.42 106.13 450.33 106.13C444.24 106.13 442.61 103.36 442.61 97.39V59.26C442.61 58.47 441.98 57.83 441.2 57.83H424.04C423.27 57.83 422.63 58.47 422.63 59.26V100.28C422.63 118.01 432.51 122.35 446.11 122.35C457.26 122.35 466.26 116.19 466.26 116.19C466.26 116.19 466.69 119.44 466.88 119.82C467.07 120.2 467.58 120.59 468.12 120.59L479.04 120.54C479.81 120.54 480.45 119.9 480.45 119.12V59.26C480.45 58.47 479.81 57.83 479.03 57.83H479.04Z'
					fill='white'
				/>
				<path
					d='M525.26 55.83C515.65 55.83 509.12 60.12 509.12 60.12V29.92C509.12 29.13 508.49 28.5 507.71 28.5H490.62C489.84 28.5 489.21 29.14 489.21 29.92V119.09C489.21 119.88 489.84 120.52 490.62 120.52H502.48C503.01 120.52 503.42 120.24 503.72 119.76C504.01 119.28 504.44 115.65 504.44 115.65C504.44 115.65 511.43 122.27 524.66 122.27C540.19 122.27 549.1 114.39 549.1 86.9C549.1 59.41 534.87 55.82 525.26 55.82V55.83ZM518.59 106.07C512.72 105.89 508.75 103.23 508.75 103.23V74.99C508.75 74.99 512.67 72.58 517.49 72.15C523.58 71.6 529.45 73.44 529.45 87.97C529.45 103.29 526.8 106.31 518.6 106.07H518.59Z'
					fill='white'
				/>
				<path
					d='M338.21 57.69H325.43C325.43 57.69 325.41 40.81 325.41 40.8C325.41 40.16 325.08 39.84 324.34 39.84H306.92C306.24 39.84 305.88 40.14 305.88 40.79V58.24C305.88 58.24 297.15 60.35 296.56 60.52C295.97 60.69 295.54 61.23 295.54 61.88V72.85C295.54 73.64 296.17 74.27 296.95 74.27H305.88V100.65C305.88 120.25 319.63 122.17 328.9 122.17C333.14 122.17 338.21 120.81 339.05 120.5C339.56 120.31 339.85 119.79 339.85 119.22V107.16C339.86 106.37 339.2 105.74 338.45 105.74C337.7 105.74 335.8 106.04 333.84 106.04C327.56 106.04 325.43 103.12 325.43 99.34C325.43 95.56 325.43 74.27 325.43 74.27H338.21C338.99 74.27 339.62 73.63 339.62 72.85V59.11C339.62 58.32 338.99 57.69 338.21 57.69Z'
					fill='white'
				/>
			</svg>
		)
	},
	{
		name: 'Astro',
		link: 'https://astro.build',
		logo: (
			<svg height='50' viewBox='0 0 301 79' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M20.7866 66.8455C17.2323 63.6045 16.1947 56.7948 17.6755 51.8613C20.2432 54.9718 23.8009 55.9571 27.486 56.5133C33.1749 57.3716 38.762 57.0506 44.0468 54.4568C44.6513 54.1598 45.21 53.765 45.8706 53.3651C46.3665 54.8001 46.4956 56.2489 46.3224 57.7235C45.9012 61.3146 44.1096 64.0886 41.26 66.1914C40.1206 67.0326 38.9148 67.7844 37.738 68.5775C34.1225 71.0151 33.1444 73.8732 34.5029 78.0308C34.5352 78.132 34.5641 78.2333 34.6371 78.4805C32.7912 77.6565 31.4428 76.4567 30.4154 74.8791C29.3302 73.214 28.814 71.3721 28.7868 69.3791C28.7732 68.4093 28.7732 67.4308 28.6425 66.4747C28.3232 64.1435 27.2262 63.0999 25.1595 63.0398C23.0384 62.978 21.3606 64.286 20.9157 66.3459C20.8817 66.5038 20.8325 66.6601 20.7832 66.8437L20.7866 66.8455Z'
					fill='white'
				/>
				<path
					d='M0.5 51.0393C0.5 51.0393 11.0249 45.9249 21.5793 45.9249L29.5369 21.3588C29.8348 20.1708 30.7047 19.3634 31.6867 19.3634C32.6688 19.3634 33.5386 20.1708 33.8366 21.3588L41.7942 45.9249C54.2942 45.9249 62.8734 51.0393 62.8734 51.0393C62.8734 51.0393 44.996 2.45882 44.961 2.36135C44.4479 0.925045 43.5817 0 42.4139 0H20.9613C19.7935 0 18.9623 0.925045 18.4142 2.36135C18.3756 2.45698 0.5 51.0393 0.5 51.0393Z'
					fill='white'
				/>
				<path
					d='M111.467 43.9652C111.467 48.27 106.099 50.841 98.6667 50.841C93.8296 50.841 92.1189 49.6452 92.1189 47.134C92.1189 44.5033 94.2425 43.2477 99.0796 43.2477C103.445 43.2477 107.161 43.3075 111.467 43.8456V43.9652ZM111.526 38.6439C108.872 38.046 104.861 37.6873 100.082 37.6873C86.1611 37.6873 79.6133 40.9757 79.6133 48.6288C79.6133 56.5808 84.0964 59.63 94.4785 59.63C103.268 59.63 109.226 57.4178 111.408 51.977H111.762C111.703 53.2923 111.644 54.6077 111.644 55.6241C111.644 58.4342 112.116 58.6734 114.417 58.6734H125.271C124.681 56.9993 124.327 52.2759 124.327 48.2102C124.327 43.8456 124.504 40.5572 124.504 36.1328C124.504 27.1045 119.077 21.3648 102.088 21.3648C94.7734 21.3648 86.633 22.6203 80.4391 24.4738C81.029 26.9252 81.8549 31.8877 82.2678 35.1163C87.6358 32.6052 95.2454 31.529 101.144 31.529C109.285 31.529 111.526 33.3824 111.526 37.1492V38.6439Z'
					fill='white'
				/>
				<path
					d='M141.308 46.4763C139.833 46.6557 137.828 46.6557 135.763 46.6557C133.58 46.6557 131.575 46.5959 130.218 46.4165C130.218 46.8949 130.159 47.433 130.159 47.9113C130.159 55.385 135.055 59.7496 152.28 59.7496C168.502 59.7496 173.752 55.4448 173.752 47.8515C173.752 40.6768 170.272 37.1492 154.875 36.3719C142.901 35.8338 141.839 34.5184 141.839 33.0237C141.839 31.2898 143.373 30.393 151.395 30.393C159.713 30.393 161.954 31.529 161.954 33.9205V34.4586C163.134 34.3989 165.258 34.3391 167.44 34.3391C169.505 34.3391 171.746 34.3989 173.044 34.5184C173.044 33.9803 173.103 33.502 173.103 33.0835C173.103 24.2944 165.788 21.4245 151.631 21.4245C135.704 21.4245 130.336 25.3109 130.336 32.9041C130.336 39.7201 134.642 43.9652 149.92 44.6229C161.187 44.9816 162.426 46.2372 162.426 47.9711C162.426 49.8245 160.597 50.6616 152.693 50.6616C143.609 50.6616 141.308 49.406 141.308 46.8351V46.4763Z'
					fill='white'
				/>
				<path
					d='M193.222 14.9673C188.916 18.9732 181.188 22.9791 176.882 24.0553C176.941 26.2675 176.941 30.3332 176.941 32.5454L180.893 32.6052C180.834 36.8502 180.775 41.9921 180.775 45.4001C180.775 53.3521 184.963 59.3311 198 59.3311C203.486 59.3311 207.143 58.7332 211.685 57.7765C211.213 54.8469 210.683 50.3626 210.506 46.9546C207.792 47.8515 204.371 48.3298 200.595 48.3298C195.345 48.3298 193.222 46.8949 193.222 42.7694C193.222 39.182 193.222 35.8338 193.281 32.7248C200.006 32.7845 206.73 32.9041 210.683 33.0237C210.624 29.9147 210.742 25.4304 210.919 22.441C205.197 22.5605 198.767 22.6203 193.458 22.6203C193.517 19.9896 193.576 17.4784 193.635 14.9673H193.222Z'
					fill='white'
				/>
				<path
					d='M228.454 30.7517C228.513 27.6426 228.572 25.0119 228.631 22.441H216.774C216.951 27.5829 216.951 32.8443 216.951 40.5572C216.951 48.27 216.892 53.5913 216.774 58.6734H230.341C230.105 55.086 230.046 49.0473 230.046 43.9054C230.046 35.774 233.35 33.4422 240.841 33.4422C244.322 33.4422 246.799 33.8608 248.982 34.638C249.041 31.5888 249.631 25.6696 249.985 23.0389C247.743 22.3812 245.265 21.9627 242.257 21.9627C235.827 21.9029 231.108 24.5336 228.925 30.8115L228.454 30.7517Z'
					fill='white'
				/>
				<path
					d='M287.518 40.318C287.518 46.8351 282.799 49.8843 275.366 49.8843C267.992 49.8843 263.273 47.0144 263.273 40.318C263.273 33.6216 268.051 31.1104 275.366 31.1104C282.74 31.1104 287.518 33.801 287.518 40.318ZM299.846 40.0191C299.846 27.0448 289.7 21.2452 275.366 21.2452C260.973 21.2452 251.18 27.0448 251.18 40.0191C251.18 52.9336 260.324 59.8692 275.307 59.8692C290.408 59.8692 299.846 52.9336 299.846 40.0191Z'
					fill='white'
				/>
			</svg>
		)
	},
	{
		name: 'Platzi',
		link: 'https://platzi.com/',
		logo: <img src='/platzi.png' alt='Logo de Platzi' className='w-full h-auto' />
	}
]

const premiums = [
	{
		name: 'Malt',
		premium: true,
		link: 'https://midu.link/malt',
		logo: <Malt className='w-auto h-[60px]' />
	},
	{
		name: 'Don Dominio',
		premium: true,
		link: 'https://www.dondominio.com/',
		logo: <DonDominio className='' fill='currentColor' />
	},
	{
		name: 'Codely',
		premium: true,
		link: 'https://codely.com/',
		logo: (
			<svg height='50' viewBox='0 0 118 29' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
				<g>
					<path d='M5.64838 11.2988H0V16.9472H5.64838V11.2988Z'></path>
					<path d='M11.2968 5.65234H5.64844V11.3007H11.2968V5.65234Z'></path>
					<path d='M11.2968 16.9473H5.64844V22.5957H11.2968V16.9473Z'></path>
					<path d='M16.9433 0H11.2949V5.64837H16.9433V0Z'></path>
					<path d='M16.9433 22.5938H11.2949V28.2421H16.9433V22.5938Z'></path>
				</g>
				<g>
					<path d='M33.8865 16.9473H39.5349V11.2989H33.8865V16.9473Z'></path>
					<path d='M28.2384 22.5938H33.8867V16.9454H28.2384V22.5938Z'></path>
					<path d='M28.2389 11.2988H33.8872V5.65046L28.2389 5.65046V11.2988Z'></path>
					<path d='M28.2416 0H22.5933V5.64837H28.2416V0Z'></path>
					<path d='M28.2416 22.5938H22.5933V28.2421H28.2416V22.5938Z'></path>
				</g>
				<g>
					<path d='M50.8342 14.3316C50.8342 10.8532 53.251 8.39209 56.5258 8.39209C59.0721 8.39209 61.3803 9.8147 61.7645 12.547H59.4618C59.1905 11.3724 58.1067 10.4015 56.5258 10.4015C54.533 10.4015 53.1148 12.0732 53.1148 14.3316C53.1148 16.4993 54.4245 18.1256 56.5468 18.1256C58.1056 18.1256 59.0765 17.3573 59.5049 16.1384H61.8088C61.4025 18.574 59.3477 20.135 56.5468 20.135C53.0705 20.135 50.8342 17.6507 50.8342 14.3316Z'></path>
					<path d='M63.321 14.2641C63.321 10.8321 65.7564 8.39648 69.0774 8.39648C72.3983 8.39648 74.8813 10.8575 74.8813 14.2641C74.8813 17.6706 72.3972 20.1316 69.0774 20.1316C65.783 20.1361 63.321 17.6518 63.321 14.2641ZM72.602 14.2641C72.602 12.1418 71.1796 10.4025 69.0796 10.4025C66.9796 10.4025 65.6025 12.1418 65.6025 14.2641C65.6025 16.3675 66.9796 18.1267 69.0796 18.1267C71.1796 18.1267 72.6031 16.3653 72.6031 14.2641H72.602Z'></path>
					<path d='M87.6449 3.875V19.909H85.7695L85.5669 18.3967H85.4086C84.844 19.1639 83.7369 20.1348 81.8405 20.1348C78.8137 20.1348 76.6006 17.8099 76.6006 14.2407C76.6006 10.6271 78.8823 8.39192 81.8405 8.39192C83.5797 8.39192 84.7532 9.18238 85.3411 9.92745V3.875H87.6449ZM85.3411 14.2407C85.3411 11.9601 84.0989 10.4013 82.1792 10.4013C80.2374 10.4013 78.9044 11.9601 78.9044 14.2407C78.9044 16.5656 80.233 18.1254 82.1792 18.1254C84.0989 18.1254 85.3411 16.5667 85.3411 14.2407V14.2407Z'></path>
					<path d='M100.471 14.8477H92.1144C92.2251 16.857 93.4429 18.2575 95.4357 18.2575C96.8583 18.2575 97.8967 17.6708 98.2588 16.5183H100.473C99.998 18.7767 98.1016 20.1318 95.4368 20.1318C92.1842 20.1318 89.8582 17.8512 89.8582 14.3749C89.8582 10.6939 92.2749 8.39111 95.346 8.39111C98.1016 8.39111 100.518 10.22 100.518 14.1048C100.516 14.3284 100.493 14.5543 100.471 14.8477ZM92.1366 13.2214H98.2798C98.2577 11.4821 97.083 10.2632 95.3438 10.2632C93.5603 10.2632 92.3624 11.5729 92.1366 13.2214Z'></path>
					<path d='M102.825 3.875H105.129V19.909H102.825V3.875Z'></path>
					<path d='M107.561 24.4023V22.6631C107.953 22.7561 108.354 22.8091 108.757 22.8214C109.796 22.8214 110.722 22.3919 111.219 21.1951L111.715 19.9076H110.97L106.612 8.61523H109.005L112.348 17.5351H112.529L115.665 8.61634H118.059L113.361 21.5339C113.046 22.4605 112.233 24.6503 109.252 24.6503C108.68 24.6417 108.111 24.5583 107.561 24.4023Z'></path>
				</g>
			</svg>
		)
	},
	{
		name: 'LemonCode',
		premium: true,
		link: 'https://lemoncode.net/',
		logo: (
			<svg className='w-auto h-16' viewBox='0 0 306 110' xmlns='http://www.w3.org/2000/svg'>
				<path
					fillRule='evenodd'
					clip-rule='evenodd'
					d='M4.95101 77H0V109H21V104.172H4.95101V77Z'
					fill='#D9D900'
				/>
				<path
					fillRule='evenodd'
					clip-rule='evenodd'
					d='M32.0215 94.7929H47.6096V90.0427H32.0215V80.8972H47.9468V76H27V109H48V104.068H32.0215V94.7929Z'
					fill='#D9D900'
				/>
				<path
					fillRule='evenodd'
					clip-rule='evenodd'
					d='M60.8451 86.4961L69.7177 98.9115H72.4888L81.2324 86.4961V109H86V77H82.1876L71.1291 92.5664L59.9329 77H56V109H60.8451V86.4961Z'
					fill='#D9D900'
				/>
				<path
					fillRule='evenodd'
					clip-rule='evenodd'
					d='M94 92.9915C94 97.6727 95.9599 101.878 98.9817 104.962C102.029 108.097 106.295 110 110.94 110C115.654 110 119.919 108.097 123.027 104.962C126.04 101.878 128 97.6727 128 92.9915C128 88.3103 126.04 84.1049 123.027 81.021C119.919 77.9285 115.654 76 110.94 76C106.295 76 102.029 77.9285 98.9817 81.021C95.9599 84.1049 94 88.3103 94 92.9915ZM123.122 92.9915C123.122 96.3983 121.732 99.3803 119.582 101.547C117.329 103.773 114.22 105.149 110.94 105.149C107.667 105.149 104.637 103.773 102.453 101.547C100.268 99.3803 98.8867 96.3473 98.8867 92.9915C98.8867 89.6357 100.268 86.6112 102.453 84.4363C104.637 82.2104 107.667 80.8341 110.94 80.8341C114.22 80.8341 117.329 82.2104 119.582 84.4363C121.732 86.6112 123.122 89.5932 123.122 92.9915Z'
					fill='#D9D900'
				/>
				<path
					fillRule='evenodd'
					clip-rule='evenodd'
					d='M140.866 109V86.7048L157.151 109H161V77.0429H156.186V99.5615L139.763 77.0429L136 77V109H140.866Z'
					fill='#D9D900'
				/>
				<path
					fillRule='evenodd'
					clip-rule='evenodd'
					d='M169 93.0429C169 97.7027 170.905 101.933 173.753 105.006C176.653 108.078 180.745 110 185.266 110C193.013 110 199.104 104.817 201 97.1706H196.299C194.583 102.268 190.302 105.203 185.266 105.203C182.075 105.203 179.175 103.804 177.081 101.599C174.988 99.3847 173.658 96.4069 173.658 93.0429C173.658 89.5846 174.988 86.5982 177.081 84.3927C179.175 82.1787 182.075 80.7885 185.266 80.7885C190.165 80.7885 194.248 83.3372 196.007 88.3831H200.768C198.864 80.7885 192.867 76 185.266 76C180.745 76 176.653 77.948 173.753 80.9773C170.905 84.0581 169 88.2802 169 93.0429Z'
					fill='#fff'
				/>
				<path
					fillRule='evenodd'
					clip-rule='evenodd'
					d='M208 92.9915C208 97.6727 209.96 101.878 212.973 104.962C216.021 108.097 220.286 110 224.931 110C229.654 110 233.91 108.097 237.018 104.962C240.031 101.878 242 97.6727 242 92.9915C242 88.3103 240.031 84.1049 237.018 81.021C233.91 77.9285 229.654 76 224.931 76C220.286 76 216.021 77.9285 212.973 81.021C209.96 84.1049 208 88.3103 208 92.9915ZM237.113 92.9915C237.113 96.3983 235.732 99.3803 233.573 101.547C231.329 103.773 228.212 105.149 224.931 105.149C221.667 105.149 218.628 103.773 216.453 101.547C214.268 99.3803 212.878 96.3473 212.878 92.9915C212.878 89.6357 214.268 86.6112 216.453 84.4363C218.628 82.2104 221.667 80.8341 224.931 80.8341C228.212 80.8341 231.329 82.2104 233.573 84.4363C235.732 86.6112 237.113 89.5932 237.113 92.9915Z'
					fill='#fff'
				/>
				<path
					fillRule='evenodd'
					clip-rule='evenodd'
					d='M250 76V110H261.71C272.498 110 278 101.584 278 93.1236C278 84.6634 272.498 76 261.71 76H250ZM254.829 105.116V80.9984H261.71C269.299 80.9984 273.214 87.1273 273.214 93.1236C273.214 99.12 269.299 105.116 261.71 105.116H254.829Z'
					fill='#fff'
				/>
				<path
					fillRule='evenodd'
					clip-rule='evenodd'
					d='M290.782 94.7929H305.628V90.0427H290.782V80.8972H305.949V76H286V109H306V104.068H290.782V94.7929Z'
					fill='#fff'
				/>
				<path
					d='M111 6V8.489H108.541C107.128 8.489 106.422 10.5718 106.422 14.7547V23.2934C106.422 26.3096 105.982 28.6257 105.118 30.285C104.262 31.9184 103.465 32.9987 102.708 33.4914V33.6124C103.506 34.2346 104.312 35.3581 105.159 36.9656C105.998 38.5644 106.422 40.8719 106.422 43.8708V52.3404C106.422 56.4628 107.128 58.5196 108.541 58.5196H111V61H107.801C105.134 61 103.789 58.5196 103.789 53.5503V44.9857C103.789 38.2014 102.534 34.7877 100 34.7877V32.3074C102.534 32.3074 103.789 28.9368 103.789 22.1871V13.5361C103.789 8.51493 105.35 6 108.458 6H111Z'
					fill='#fff'
				/>
				<path
					d='M196 6V8.48036H198.459C199.872 8.48036 200.578 10.5632 200.578 14.7461V23.2847C200.578 26.3096 201.018 28.6257 201.882 30.285C202.738 31.9184 203.535 32.9901 204.292 33.4827V33.6037C203.494 34.2346 202.688 35.3495 201.841 36.9569C201.002 38.5558 200.578 40.8719 200.578 43.8708V52.3404C200.578 56.4628 199.872 58.5196 198.459 58.5196H196V61H199.199C201.866 61 203.211 58.5196 203.211 53.5503V44.9857C203.211 38.1928 204.466 34.7877 207 34.7877V32.3074C204.466 32.3074 203.211 28.9282 203.211 22.1871V13.5361C203.211 8.51493 201.65 6 198.542 6H196Z'
					fill='#fff'
				/>
				<path
					fillRule='evenodd'
					clip-rule='evenodd'
					d='M164.862 36.3729C162.238 35.6536 159.362 35.1769 156.729 34.4576C156.487 34.7003 156.487 34.215 156.487 34.9343C156.487 35.4109 164.387 45.2213 168.454 50.0138C168.696 50.4905 169.412 50.7245 169.887 50.7245C171.804 50.7245 177.304 43.306 177.304 41.8761C177.304 38.2882 172.046 38.2882 170.604 37.8029C168.696 37.3262 166.537 36.8496 164.862 36.3729ZM178.979 33.019C178.979 30.3931 178.029 25.3666 175.154 23.6853L156.971 32.785L175.396 36.3729C178.262 35.8963 178.979 35.4109 178.979 33.019ZM169.171 12.2023C168.212 11.483 167.021 10.5297 166.537 10.5297C165.821 10.5297 165.104 11.483 164.862 11.9683C162.238 17.9481 155.771 29.6738 155.771 30.1504C155.771 30.8697 158.162 29.6738 160.796 28.2352C165.104 25.8432 169.887 23.6853 173.954 21.2934C174.196 21.0594 174.196 20.8167 174.196 20.0974C174.196 17.7055 172.279 15.0709 169.171 12.2023ZM154.579 36.0089H153.863V45.8193C153.863 46.3046 154.104 53.0037 154.821 56.349C155.063 57.0683 157.454 58.0303 158.413 58.0303C160.321 58.0303 166.063 55.8723 166.063 52.7611C166.063 52.0418 165.588 50.6118 164.871 49.8925C161.521 45.3426 158.888 40.0821 154.579 36.0089ZM152.3 55.751L152.067 36.1303C151.35 36.3729 151.108 36.3729 150.867 36.6069C147.517 40.9141 143.925 45.2213 140.342 49.5285C139.625 50.4905 138.425 52.1631 138.425 52.6398C138.425 56.2277 148 58.6283 149.675 58.6283C151.108 58.6283 152.3 57.4236 152.3 55.751ZM149.312 33.9117C148.354 33.9117 146.921 33.669 146.204 33.669L135.671 34.631H131.846C130.171 34.631 128.738 35.1076 128.738 37.4995C128.738 38.6955 131.129 49.4679 135.671 49.4679C136.154 49.4679 136.396 49.4679 136.629 49.2252C139.979 45.3946 143.087 41.3301 146.437 37.9762C147.396 36.7802 149.554 35.1076 149.554 34.3883C149.554 33.9117 149.554 34.1456 149.312 33.9117ZM149.502 32.7157C149.744 32.733 149.96 32.7417 150.176 32.655C150.029 32.6984 149.865 32.7157 149.675 32.7157H149.502ZM135.559 18.3641C134.833 17.8875 133.884 17.8875 133.158 17.8875C130.534 20.756 129.092 25.7826 129.092 29.1278C129.092 32.4817 132.683 32.239 135.317 32.239C136.033 32.239 139.625 32.005 141.533 31.7624H150.15V31.0431C145.367 26.9785 140.342 22.4287 135.559 18.3641ZM151.462 29.1538C150.029 22.212 150.271 15.9895 147.163 9.29039C145.721 9.29039 144.046 9.29039 143.087 10.0097C142.138 10.4864 136.154 13.5976 136.154 15.7555C136.154 16.4748 147.163 26.5192 151.229 29.8731C151.704 29.3878 151.462 29.1538 151.462 29.1538ZM161.633 8.49308C158.767 7.77377 153.5 7.53977 153.025 7.53977C152.3 7.53977 151.583 7.53978 151.35 7.77377C150.625 8.01643 150.392 8.73574 150.392 9.21239L153.742 28.8331C155.65 27.3945 157.092 23.0873 158.525 20.4614C158.767 19.7421 163.075 12.3236 163.075 10.4084C163.075 9.68904 163.075 9.68904 162.833 9.45505C162.592 8.96973 162.117 8.49308 161.633 8.49308ZM153.5 0C134.997 0 120 15.0016 120 33.4957C120 51.9985 134.997 67 153.5 67C172.003 67 187 51.9985 187 33.4957C187 15.0016 172.003 0 153.5 0ZM183.426 41.1134C182.925 42.7254 182.338 44.32 181.707 45.88C181.12 47.3273 180.421 48.6965 179.385 49.8752C178.375 51.0278 177.14 51.9551 175.957 52.9258C174.705 53.9571 174.066 55.5517 172.935 56.7216C171.873 57.8223 170.285 58.3943 168.972 59.2089C167.703 59.9889 166.563 61.0288 165.147 61.5055C162.246 62.4848 159.19 63.5161 156.177 64.0621C153.077 64.6254 149.425 63.7761 146.316 63.4208C143.286 63.0828 140.411 61.8522 137.786 60.2575C134.704 58.3769 131.552 56.193 129.394 53.2464C127.399 50.5165 126.061 47.3273 124.766 44.2507C124.136 42.7514 123.773 41.1741 123.566 39.5622C123.341 37.8289 122.677 36.5636 122.4 34.8476C121.58 29.7691 122.858 25.3579 124.904 20.6001C125.526 19.1614 126.13 17.6968 126.899 16.3275C127.658 14.9842 128.608 13.7796 129.782 12.7743C130.957 11.769 132.26 10.937 133.443 9.94904C134.635 8.94373 135.61 7.7131 136.793 6.69913C137.959 5.71116 139.297 5.09585 140.765 4.69719C142.31 4.27254 143.908 4.04721 145.436 3.57056C147.024 3.06791 148.561 2.40926 150.176 2.01061C153.5 1.1873 156.936 1.71595 160.191 2.58259C163.455 3.44056 166.701 4.4892 169.602 6.25715C171.053 7.14112 172.417 8.15509 173.764 9.17773C180.36 14.1782 182.778 22.9486 184.004 30.8264C184.548 34.3016 184.462 37.7422 183.426 41.1134Z'
					fill='#D9D900'
				/>
			</svg>
		)
	}
]

const ReviewCard = ({
	logo,
	link,
	size
}: {
	logo?: string | ReactNode
	link: string
	premium?: boolean
	size?: string
}) => {
	return (
		<a
			href={link}
			target='_blank'
			rel='noopener noreferrer'
			className={`relative ${
				size === 'large'
					? 'min-w-[250px] border-yellow-300 hover:border-yellow-200'
					: 'min-w-[50px] border-slate-900 hover:border-slate-900/75'
			} flex justify-center items-center overflow-hidden rounded-xl border bg-slate-800/50 w-full py-4 px-12 transition hover:bg-slate-800/75 hover:shadow-lg group`}
		>
			<div className='flex flex-row items-center justify-center w-full h-auto gap-2 text-white transition group-hover:scale-110'>
				{logo}
			</div>
		</a>
	)
}

export const Sponsors = () => {
	return (
		<section className='flex flex-col flex-wrap items-center justify-center my-48'>
			<h2 className='text-6xl font-bold text-center text-white'>Sponsors</h2>
			<p className='max-w-xl text-xl text-sky-200 text-center [†ext-wrap:balance] mt-4'>
				¡Gracias a ellos hacemos posible el evento!
			</p>

			<div className='relative flex flex-col items-center justify-center w-full h-full gap-4 py-20 overflow-hidden rounded-lg bg-background'>
				<div className='grid gap-4 md:grid-cols-2'>
					{premiums.map((premium) => (
						<ReviewCard key={premium.name} {...premium} size='large' />
					))}
				</div>
				<div className='relative flex flex-col w-full overflow-hidden gap-y-4'>
					<Marquee reverse pauseOnHover className='[--duration:40s]'>
						{reviews
							.slice()
							.reverse()
							.map((review) => (
								<ReviewCard key={review.name} {...review} />
							))}
					</Marquee>
					<Marquee pauseOnHover className='[--duration:40s]'>
						{[...reviews.slice(4), ...reviews.slice(0, 4)].map((review) => (
							<ReviewCard key={review.name} {...review} />
						))}
					</Marquee>
					<div className='absolute inset-y-0 left-0 w-40 pointer-events-none from-[#000214] to-transparent bg-gradient-to-r '></div>
					<div className='absolute inset-y-0 right-0 w-1/3 pointer-events-none bg-gradient-to-l from-[#000214]'></div>
				</div>
			</div>
		</section>
	)
}
