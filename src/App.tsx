import './style.sass'
import {useState} from "react";
import Img from "./components/Img/Img";

function App() {
    const [img, setImg] = useState<string | undefined>(undefined)

    const handleChange = (event) => {
        if (event.target.files.length > 2) {
            console.error('Вы не можете загрузить больше 1 картинки')
        } else {

            const file = event.target.files[0]
            const reader = new FileReader()
            reader.onload = () => {
                setImg(reader.result as string);
            };

            reader.readAsDataURL(file);

        }

    }

    return (
        <>
            <input onChange={handleChange} type="file"/>
            {img && <Img img={img}/>}
        </>
    )
}

export default App
