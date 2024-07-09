import './Footer.css'

const Footer = () => {
    return (
        // Parece HTML mas não é, é um JSX (Como o react carrega o código e transforma em elementos no DOM)
        <footer className="footer">
            <div>
                <img src="/image/Footer-90.png" alt="footer principal da página" className='footer-img'/>
            </div>
            <div className='icons'>
                <div>
                    <a href='https://github.com/rafaelafae' >
                        <img src='/image/github.png' alt='logo github' className='icons-img' />
                    </a> 
                    <a href='https://www.linkedin.com/in/rafaelafae/' >
                        <img src='/image/linkedin.png' alt='logo linkedin' className='icons-img'/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer