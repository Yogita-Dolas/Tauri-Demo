import '../App.css';
import { appWindow } from '@tauri-apps/api/window';

export default function Config() {
  appWindow.listen('tauri://close-requested', () => {
    appWindow.hide();
  })

  const submit_Click = () => {

  }

  return (
    <div className="config-container">
      <label id="config" className="config-label">Config</label>
      <input type="text" id="config" name="config" className="config-data" />
      <button id="Submit" name="Submit" className="add-btn">Add</button>
    </div>
  )
}