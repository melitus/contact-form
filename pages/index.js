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
          <p>text</p>
          <div className="icon-text">
            <i className="icon"></i>
            <span>text</span>
          </div>
          <div className="social-media">
           <a href="#" className="icon-circle">
             <i className="icon"></i>
           </a>
          </div>
          </div>
        <form>

        </form>
      </div>
    </>
  )
}
