import "./style.css"

const Header = () => {
    return (
        <header className="header">
           <div className="header__wrapper">
               <h1 className="header__title">
                   <strong>
                    Привет, это профориентационные тесты для тебя. <em></em>
                   </strong>
                   <br />узнай свою профессию 
               </h1>
               <div className="header__text">
                   <p></p>
               </div>
               <a href="#!" className="btn">
                   К тестам
               </a>
           </div>
        </header> 
    );
}
 
export default Header;