import logo from '../Images/Logo.png';
import '../App.css';
import { appWindow } from '@tauri-apps/api/window'

function Home() {
  appWindow.listen('tauri://close-requested', () => {
    appWindow.hide();
  })

  return (
    <div className="container">
      <div className='title'>
      <img className="logo-icon" src={logo} alt="logo"/>
        <span className="logo-title">System Tray in Tauri Application</span>
      </div>
      <div className='content'>
      <button className="config-btn" onClick={()=> window.location.href='/config'}> Config </button>
      </div>
      </div>    
      
  );
}

export default Home;
