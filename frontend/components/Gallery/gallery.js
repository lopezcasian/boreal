import styles from "./gallery.module.css"

export default function Gallery(){
    return(
        <div className={ styles.contentDiv }>
          <div className={ styles.menu }>
            <a><b>ALL</b></a>
            <span>|</span>
            <a>RESIDENTIAL</a>
            <span>|</span>
            <a>COMMERCIAL</a>
            <span>|</span>
            <a>PRODUCT DESIGN</a>
          </div>
          <div>
            <div className={ styles.slider }>
              <img src="/IMG_GALE.jpg" />
              <div className={ styles.galleryControlls }>
                <div className={ styles.prev }><a>&lt;</a></div>
                <div className={ styles.next }><a>&gt;</a></div>
              </div>
            </div>
            <div>
              <span><b>Project Name: </b> Mediterranean Home</span><br/>
              <span><b>Location: </b>Cabo San Lucas, Mexico</span><br/>
              <span><b>Software's: </b>3D Max, Vray</span>
            </div>
          </div>
        </div>
    );
}