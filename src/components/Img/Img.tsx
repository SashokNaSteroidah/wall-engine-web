import {FC, useState} from 'react';
import classes from './img.module.sass'


interface IImg {
    img: string | undefined
}

const Img: FC<IImg> = ({img}) => {
    const [rotate, setRotate] = useState("0deg")

    const handleRotate = () => {
         rotate == "90deg" ? setRotate("0deg") : setRotate("90deg")
    }

    return (
        <>
            <img onClick={handleRotate} className={classes.imgStyle} style={{transform: `rotate(${rotate})`}} src={img} alt=""/>
        </>
    );
};

export default Img;