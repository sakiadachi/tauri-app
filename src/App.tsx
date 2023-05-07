import "./App.css";
import { WebviewWindow } from '@tauri-apps/api/window'

function App() {
  async function openNewWindow() {
    const webview = new WebviewWindow('Secondary', {
      url: '../window/index.html',
      width: 300,
      height: 300,
      transparent: true,
      alwaysOnTop: true
    })
    webview.show()
    webview.once('tauri://created', function () {
      // webview window successfully created
      console.log('hey its created')
    })
    webview.once('tauri://error', function (e) {
      // an error occurred during webview window creation
    })
  }

  return (
    <div className="container">
      <div className="row">
        <button onClick={(e) => {
          e.preventDefault()
          openNewWindow()
        }}>click!</button>
      </div>
    </div>
  );
}

export default App;
