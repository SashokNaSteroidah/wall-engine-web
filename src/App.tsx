import './style.sass'
import {useState} from "react";
import Img from "./components/Img/Img";
import {CiImageOn} from "react-icons/ci";

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
            <section className="ui">
                <label>
                    <CiImageOn/>
                    <span>Выбрать картинку</span>
                    <input className="uiFile" onChange={handleChange} type="file"/>
                </label>
            </section>
            {img && <Img img={img}/>}
        </>
    )
}

export default App
