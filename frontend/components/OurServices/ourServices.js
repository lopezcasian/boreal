import styles from './ourServices.module.css';

export default function OurServices(){
    return (
        <div>
            <div className={ styles.imagesDiv }>
                <div className={ styles.biggestImg }></div>
                <div className={ styles.smalestImgDiv }>
                    <div className={ styles.VrContainer }>
                        <img src={"/virtual reality.jpg"}/>
                        <div className={ styles.VrCover }>
                            <div className={ styles.ServicesName }>
                                <span>Virtual Reality</span>
                            </div>
                        </div>
                    </div>
                    <div className={ styles.RealEstateContainer }>
                        <img src={"/real estate video.jpg"}/>
                        <div className={ styles.RealEstateCover }>
                            <div className={ styles.ServicesName }>
                                <span>Real State Video</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ styles.descriptionDiv }>
                <span className={ styles.lessThanSymbol }>&lt;</span><span> Regresar</span>
                <div>
                    <h1>3D RENDERING</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non arcu in magna dignissim ornare at vitae arcu. 
                    Phasellus tristique, justo quis aliquam lacinia, elit tellus semper sem, ut congue purus eros non est. 
                    Sed egestas vehicula ligula, eu venenatis massa mattis sed. Vestibulum congue sem eget dui imperdiet, 
                    sed pretium turpis ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Vestibulum nisl nunc, consequat ac finibus non, semper sed lacus. Suspendisse blandit ultrices posuere. 
                    Mauris pretium tellus erat, varius hendrerit leo rutrum rutrum. Nullam cursus metus sed vehicula aliquet. 
                    Morbi nec tellus ante. Aenean feugiat ornare vulputate. Sed fermentum commodo quam vitae fringilla. 
                    Donec ultricies nisi nec elit aliquet vehicula. Sed aliquam imperdiet arcu, nec eleifend dui condimentum quis.
                    </p>
                </div>
                <div className={ styles.hireUsButtonDiv }>
                    <button className={ ["button", "bg-yellow", "bold", styles.hireUsButton].join(" ") }>HIRE US</button>
                </div>
            </div>
        </div>
    );
}