
const Homepage = () => {
  return (
    <div className='hero-container'>
        <div className="hero-section">
            <p> <span>Make</span> <span>remote work</span></p>
            <p>Get your team in sync, no matter your location. Streamline processes, create team rituals and watch productivity soar</p>

            <div className="button">
                           <button>Learn more</button>
            </div>
 
            <div className="hero-images">
                <div className="client-image">
                <img src="images/client-databiz.svg" alt="client logo" />

                </div>
                <div className="client-image">
                <img src="images/client-audiophile.svg" alt="client logo" />

                </div>
                <div className="client-image">
                <img src="images/client-meet.svg" alt="client logo" />

                </div>
                <div className="client-image">
                <img src="images/client-maker.svg" alt="client logo" />

                </div>
            </div>
        </div>
        <picture className="image">
            <source srcSet="images/image-hero-mobile.png" media="(max-width: 950px)" />
            <img src="images/image-hero-desktop.png" alt="Hero-Section Image" />

        </picture>

    </div>
  )
}

export default Homepage