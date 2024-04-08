const Utama = () => {
    return ( 
      <div>
  <title>Bootstrap Theme Simply Me</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
  <style dangerouslySetInnerHTML={{__html: "\n        body {\n            font: 20px Montserrat, sans-serif;\n            line-height: 1.8;\n            color: #f5f6f7;\n        }\n\n        p {\n            font-size: 16px;\n        }\n\n        .margin {\n            margin-bottom: 45px;\n        }\n        .bg-1 {\n            background-image: url('https://i.pinimg.com/474x/63/90/25/639025f6ea462e154e6ef60d3a09f78a.jpg');\n            background-size: cover;\n            background-position: center;\n            background-repeat: no-repeat;\n            color: #000000;\n        }\n        .bg-1 h3 {\n            font-family: 'Times New Roman', Times, serif;\n            font-weight: bold;\n        }\n        .bg-2 { \n            background-color: #fee5e5; \n            color: #000000;\n        }\n        .bg-2 h3 {\n            font-family: 'Times New Roman', Times, serif;\n            font-weight: bold;\n        }\n        .bg-3 { \n            background-color: #fce4e4; \n            color: #000000;\n        }\n        .bg-3 h3 {\n            font-family: 'Times New Roman', Times, serif;\n            font-weight: bold;\n        }\n        .bg-4 { \n            background-color: #ede2e2; \n            color: #171717;\n        }\n        .container-fluid {\n            padding-top: 70px;\n            padding-bottom: 70px;\n        }\n        .navbar {\n            padding-top: 15px;\n            padding-bottom: 15px;\n            border: 0;\n            border-radius: 0;\n            margin-bottom: 0;\n            font-size: 12px;\n            letter-spacing: 5px;\n        }\n        .navbar-nav li a:hover {\n            color: #1abc9c !important;\n        }\n        .social-link {\n            display: inline-block;\n            text-align: center;\n            margin: 0 10px; /* Atur jarak antara setiap ikon dan teks */\n        }\n\n        .social-icon {\n            width: 30px;\n            height: 30px;\n            border-radius: 15px; /* Sesuaikan nilai sesuai kebutuhan */\n        }\n\n        .social-text {\n            display: block;\n            margin-top: 5px; /* Atur jarak antara ikon dan teks */\n        }\n\n    " }} />
  {/* Navbar */}
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="#">MY STORE</a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Profil</a></li>
          <li><a href="#">Category</a></li>
          <li><a href="#">Sosmed</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="container-fluid bg-1 text-center">
    <h3 className="margin">Clothing Store </h3>
    <img src="https://i.pinimg.com/474x/04/4f/72/044f721da990bfd50ab2e6c44b582ff6.jpg" className="img-responsive img-circle margin" style={{display: 'inline', width: 150, height: 150, borderRadius: '50%'}} alt="Bird" />
  </div>
  <div className="container-fluid bg-2 text-center">
    <h3 className="margin">PROFIL</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <div className="container-fluid bg-3 text-center">
    <h3 className="margin">CATEGORY</h3><br />
    <div className="row">
      <div className="col-sm-4">
        <img src="https://i.pinimg.com/564x/af/d4/b8/afd4b871078949c523356777ed6cb9b9.jpg" className="img-responsive margin rounded" style={{width: 350, height: 400, borderRadius: 15}} alt="Image" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="col-sm-4">
        <img src="https://i.pinimg.com/564x/2b/ae/09/2bae096ac2c9c63c2d1489e65736455c.jpg" className="img-responsive margin rounded" style={{width: 350, height: 400, borderRadius: 15}} alt="Image" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="col-sm-4">
        <img src="https://i.pinimg.com/564x/c5/e5/16/c5e516f5a92166de720db8e5c026c780.jpg" className="img-responsive margin rounded" style={{width: 350, height: 400, borderRadius: 15}} alt="Image" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  </div>
  {/* Footer */}
  <footer className="container-fluid bg-4 text-center">
    <p>
      Follow me on:
    </p><div />
    <a href="https://www.instagram.com/" target="_blank" className="social-link">
      <img src="https://i.pinimg.com/474x/b4/fc/64/b4fc644b69f7ce1bc5871435b35773f8.jpg" alt="Instagram" className="social-icon" />
      <span className="social-text">@penykusuma</span>
    </a>
    <a href="https://wa.me/123456789" target="_blank" className="social-link">
      <img src="https://i.pinimg.com/474x/42/50/a3/4250a36a77c5a8e3e4e06b99a6134fa7.jpg" alt="Tiktok" className="social-icon" />
      <span className="social-text">@sgtarius.girl</span>
    </a>
    <p />
  </footer>
</div>

     );
}
  
export default Utama;