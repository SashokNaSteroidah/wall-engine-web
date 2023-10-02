import './style.sass'
import { ChangeEvent, useState } from "react"
import Img from "./components/Img/Img"
import { CiImageOn } from "react-icons/ci"

function App() {
    const [img, setImg] = useState<string | undefined>(undefined)
    const [fullscreen, setFullscreen] = useState(false)
    const [isLoaded, setLoaded] = useState(false)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            if (files.length > 1) {
                console.error('Вы не можете загрузить больше 1 картинки');
            } else {
                const file = files[0];
                const reader = new FileReader();
                reader.onload = () => {
                    setImg(reader.result as string);
                    setLoaded(prevState => !prevState);
                };
                reader.readAsDataURL(file);
            }
        } else {
            console.error('Вы не выбрали файл');
        }
    };

    const openFullscreen = () => {
        if (fullscreen) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
        setFullscreen(prevState => !prevState)
    }

    return (
        <>
            <section className={isLoaded ? "ui hidden" : "ui"}>
                <label>
                    <CiImageOn />
                    <span>Выбрать картинку</span>
                    <input className="uiFile" onChange={handleChange} type="file" />
                </label>
                <button onClick={openFullscreen}>
                    {fullscreen
                        ? "Выйти из полноэкранного режима"
                        : "Открыть в полноэкранном режиме"
                    }
                </button>
            </section>
            {img && <Img img={img} />}
        </>
    )
}

export default App
