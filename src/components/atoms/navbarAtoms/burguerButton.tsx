type BurgBtnTypes = {
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    menuOpen: boolean;
};

export const BurguerButton = ({ setMenuOpen, menuOpen }: BurgBtnTypes) => {
    return (
        <button
            className='burger'
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Abrir menú"
        >
            <span className={`burger-line ${menuOpen ? 'open' : ''}`}></span>
            <span className={`burger-line ${menuOpen ? 'open' : ''}`}></span>
            <span className={`burger-line ${menuOpen ? 'open' : ''}`}></span>
        </button>
    )
}
