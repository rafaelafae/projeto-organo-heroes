import './Banner.css'

const Banner = () => {
    return (
        // Parece HTML mas não é, é um JSX (Como o react carrega o código e transforma em elementos no DOM)
        <header className="banner">
        <img src="/image/Banner-90.png" alt="banner principal da página"/>
        </header>
    )
}

export default Banner