import SpeechToText from "../../components/SpeechToText";
import styles from '../../styles/Home.module.css';
import Head from 'next/head'
function speechdemo(props) {
  return (
    <>
     <Head>
        <title>Speech To Text</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
     <div className={styles.container}>     
        <div className={styles.main}>        
          <div className={styles.grid}>
              <SpeechToText />
          </div>
        </div> 
      </div>
  </>
  );
}

export default speechdemo;