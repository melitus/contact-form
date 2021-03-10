import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Contact us</h1>
      <p>lorem epsum</p>
      <div id="contact-container">
        <div className="contact-info">
        <h4>Contact Information</h4>
          <p>Fill up the form and our team will get back to you in the next 24hours</p>
          <div className="icon-text">
             <i class="fa fa-phone" aria-hidden="true"></i>
            <span>+2348061329356</span>
          </div>
          <div className="icon-text">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
            <span>asmelitus@gmail.com</span>
          </div>
          <div className="icon-text">
             <i class="fa fa-map-marker" aria-hidden="true"></i>
            <span>Lagos, Nigeria</span>
          </div>
          <div className="social-media">
           <a href="#" className="icon-circle">
             <i class="fa fa-facebook-official" aria-hidden="true"></i>
           </a>
            <a href="#" className="icon-circle">
             <i class="fa fa-twitter" aria-hidden="true"></i>
           </a>
            <a href="#" className="icon-circle">
             <i class="fa fa-instagram" aria-hidden="true"></i>
           </a>
            <a href="#" className="icon-circle">
             <i class="fa fa-youtube" aria-hidden="true"></i>
           </a>
          </div>
          </div>
        <form>

        </form>
      </div>
    </>
  )
}
