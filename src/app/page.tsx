import Image from "next/image";
import logo from '../../public/logo.png'
import screen from '../../public/AppScreen.png'
import { ChartGraphSolid, Earth, MobileSignalFourSolid, RefreshSolid } from "@mynaui/icons-react";

export default function Home() {
  return (
    <>
        <div className="grid">
          <div className="box a">
            <a href="/" style={{display:'flex',alignItems:'center'}}>
              <Image src={logo} width={60} alt=""/>
              <h3 style={{fontSize:30,marginLeft:10}}>Kalink</h3>
            </a>
            <h1>Track your eSIM plans and activate them in one click</h1>
            <section>
              <p>Easily manage all your eSIM plans from a single app. Track your usage in real time, monitor remaining data and duration, and activate your plans in just a few taps. Stay connected wherever you go, whether traveling, working remotely, or exploring new places, all without swapping physical SIM cards.</p>
              <h2>Join the Nomad eSIM Revolution</h2>
              <input type="text"  placeholder="Enter your Email"/>
              <button>Join waitlist</button>
            </section>
          </div>

          <div className="box b">
            <div>
              <Image className="screenImg" src={screen} alt=""/>
            </div>
          </div>

          <div style={{backgroundColor:'#E3E2F6'}} className="box c">
            <ul  style={{display:'flex',alignItems:'center',flexWrap:'wrap'}}>
              <li>
                <MobileSignalFourSolid size={60}/>
                <p className="title">Instant connection</p>
                <p className="subtitle">Activez vos forfaits en un clic, sans carte SIM physique.</p>
              </li>

              <li>
                <RefreshSolid size={60}/>
                <p className="title">Instant connection</p>
                <p className="subtitle">Activez vos forfaits en un clic, sans carte SIM physique.</p>
              </li>

              <li>
                <ChartGraphSolid size={60}/>
                <p className="title">Instant connection</p>
                <p className="subtitle">Activez vos forfaits en un clic, sans carte SIM physique.</p>
              </li>

              <li>
                <Earth size={60}/>
                <p className="title">Instant connection</p>
                <p className="subtitle">Activez vos forfaits en un clic, sans carte SIM physique.</p>
              </li>
            </ul>
          </div>

        </div>
    </>
  );
}
