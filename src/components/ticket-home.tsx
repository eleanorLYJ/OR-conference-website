import { Button } from '@/components/Button'
import { TicketIcon } from '@/components/icons'
import { useRouter } from 'next/router'

export const TicketHome = () => {
  const router = useRouter()
  
  const handleUpload = () => {
    router.push('/protected/summaryUpload')
  }

  return (
    <div className='block w-full h-full'>
      <div className='flex flex-col items-center justify-center gap-4 mx-auto mt-16 scale-90 md:flex-row sm:scale-100'>
        <Button
          onClick={handleUpload}
          className='px-6 py-5 text-lg font-bold md:text-3xl rounded-xl'>
          <TicketIcon className='mr-3' />
          Submit (due: 2024/09/28 (23:59))
        </Button>
      </div>
    </div>
  )
}