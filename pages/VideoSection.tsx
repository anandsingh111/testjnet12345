import styles from "../styles/Home.module.css";

const VideoSection = (props: any) => {
  // console.log("VideoURL", props.videos[0].fields.url);

  return (
    <>
      <div className={styles.videoContainer}>
        <video
          className={styles.responsiveIframe}
          loop
          autoPlay
          muted
          playsInline
          width="100%"
        >
          <source
            src={props?.videos?.[0]?.fields?.videoUrl?.fields?.file?.url}
          />
        </video>
      </div>
      {/* <div className={styles.videoContainer}>
        <iframe
          className={styles.responsiveIframe}
          title="vimeo-player"
          width="100%"
          height="100%"
          src={props?.videos?.[0]?.fields?.videoUrl?.fields?.file?.url}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div> */}
      {/* {" "}
      <div className={styles.videoSection} style={{}}>
        <iframe
          title="vimeo-player"
          src={props?.videos?.[0]?.fields?.url}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div> */}
      {/* <iframe src="https://www.youtube.com/embed/nckseQJ1Nlg" frameborder="0" allowfullscreen
      style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe> */}
      {/* <div className={`${styles.videoSection}`}>
        <h1>Video Section</h1>
        <iframe
          title="vimeo-player"
          src={props?.videos?.[0]?.fields?.url}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="vp-preview vp-preview-invisible" data-thumb="https://i.vimeocdn.com/video/1499337315-507644f7af6880b7c50470f31afe1817d35781c9676a6aef36f08af16bfe148a-d?mw=1800&amp;mh=1013&amp;q=70" data-thumb-width="1800"></div>
      </div> */}
    </>
  );
};

export default VideoSection;
