import offlineImg from '../assets/offlineImg.jpg'

const OfflinePage = () =>{
    return <div>
        <h1>Oops Buddy !!! You lost connection</h1>
        <img src={offlineImg}></img>
        <h1>Please Check Your Internet connection</h1>
    </div>
}

export default OfflinePage;