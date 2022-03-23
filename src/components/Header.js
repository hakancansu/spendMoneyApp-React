function Header({ money, total }) {
  const Goster = () => {
    if (total > 0) {
      return <div className="header"> Harcayacak {money - total}$ paranız kaldı</div>;
    }

    if (total <= 0) {
      return <div className="header empty">Harcamak için {money}$ paranız var</div>;
    }
  };

  return <div>{Goster()}
  
  <style jsx>{`
              .header {
                position: sticky;
                top: 0;
                background: linear-gradient(to bottom, #20b820, #14be2a);
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 24px;
                letter-spacing: 1px;
              }

              .header.empty {
                background: linear-gradient(to bottom, #b82020, #be1414);
              }

              .header span {
                margin: 0 10px;
                font-weight: bold;
              }
			`}</style>
  </div>;
}

export default Header;
