import {FC} from 'react';


interface IImg {
    img: string | undefined
}

const Img: FC<IImg> = ({img}) => {
    return (
        <div>
            <img className={} style={{}} src={img} alt=""/>
        </div>
    );
};

export default Img;