function Main() {
    return (
        <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3>Danki.Code</h3>
            </div>

            <div className="item-menu">
              <a href="#">Login</a>
            </div>
          </div>

          <div className="form">
            <h2>Entre em contato</h2>
            <form>
              <div className="items-form">
                <input 
                  type="text"
                  placeholder="Seu nome..1">
                </input>
                
                <input 
                  type="text"
                  placeholder="Seu nome..2">
                </input>

                <input 
                  type="text"
                  placeholder="Seu nome..3">
                </input>

                <input 
                  type="text"
                  placeholder="Seu nome..4">
                </input>

                <input type="submit"></input>
              </div>
            </form>
          </div>
        </div>

      </div>
    )
}

export default Main