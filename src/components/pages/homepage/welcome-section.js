import phones from "../../images/phones.png"
import cash from "../../images/cash.png"
import coins from "../../images/coins.png"
import padlock from "../../images/padlock.png"

const Welcome = () => {
    return (
      <div>
        <section className="welcome-section">
          <div>
            <h2>We Have <span className="blue-text">pride</span> in making the Essence of 
            business <span className="blue-text">Easier</span></h2>
            <p >connecting business to their target audioence</p>
            <button className="get-started">Get Started</button>
          </div>
          <div className="mobile-pics">
            <img src={phones} alt="phones" />
          </div>
        </section>
        <section className="money-section" style={{position: 'relative', backgroundColor:'rgba(7, 7, 7, 0.75)', width:'100%', height:'350px',  display: "flex", justifyItems:'center', alignItems:'center'}}>
          <h2>We plan to help you <span className="blue-text">achieve</span> your potential
           <span className="blue-text"> target</span> with a 100% security</h2>

           <img src={cash} alt="" style={{position: 'absolute', left: "0", bottom:'-3.0rem' }} />
           <img src={coins} alt="" style={{position: 'absolute', bottom: "-3.0rem", right: "0"}}/>
           <img src={padlock} alt="" style={{position: 'absolute', bottom: "auto", right: "15%"}}/>
        </section>
        </div>
    )
}

export default Welcome;