import offlineImg from 'data-url:../assets/offlineImg.jpg'

const OfflinePage = () =>{
    return <div className='flex-1 flex flex-col items-center justify-center min-h-0'>
        <h1 className='font-bold font-mono text-xl m-4'>Oops Buddy !!! You lost connection</h1>
        <img src={offlineImg} className='max-h-[50vh]'></img>
        <h1 className='font-bold font-mono text-xl'>Please Check Your Internet connection</h1>
    </div>
}

export default OfflinePage;