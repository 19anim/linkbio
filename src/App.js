import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="linkbio__title">Ở ĐÂY IEM BÁN THUỐC HO CON HƯƠU XỐP</div>

      {/* INSTAGRAM LINK */}
      <div className="linkbio__items-container">
        <a
          className="linkbio__items-link"
          href="https://www.instagram.com/jagerthejager"
          target="_blank"
        >
          <div className="linkbio__items border">
            <span className="linkbio__items-icon image__ig"></span>
            <p>Instagram xốp nè</p>
          </div>
        </a>
      </div>

      {/* FACEBOOK LINK */}
      <div className="linkbio__items-container">
        <a
          className="linkbio__items-link"
          href="https://www.facebook.com/profile.php?id=100092571115747"
          target="_blank"
        >
          <div className="linkbio__items border">
            <span className="linkbio__items-icon image__fb"></span>
            <p>Page Facebook chính của xốp</p>
          </div>
        </a>
      </div>

      {/* FACEBOOK LINK */}
      <div className="linkbio__items-container">
        <a
          className="linkbio__items-link"
          href="https://www.facebook.com/jagerthejagerxop"
          target="_blank"
        >
          <div className="linkbio__items border">
            <span className="linkbio__items-icon image__fb"></span>
            <p>Page Facebook phụ của xốp</p>
          </div>
        </a>
      </div>

      {/* FACEBOOK LINK */}
      <div className="linkbio__items-container">
        <a
          className="linkbio__items-link"
          href="https://www.facebook.com/19anim"
          target="_blank"
        >
          <div className="linkbio__items border">
            <span className="linkbio__items-icon image__fb"></span>
            <p>Facebook cá nhân của xốp</p>
          </div>
        </a>
      </div>

      {/* ZALO LINK */}
      <div className="linkbio__items-container">
        <a
          className="linkbio__items-link"
          href="https://zalo.me/0927183879"
          target="_blank"
        >
          <div className="linkbio__items border">
            <span className="linkbio__items-icon image__zalo"></span>
            <p>Zalo của xốp - 0927183879</p>
          </div>
        </a>
      </div>

      {/* SHOPEE LINK */}
      <div className="linkbio__items-container">
        <a
          className="linkbio__items-link"
          href="https://shopee.vn/jagerthejager"
          target="_blank"
        >
          <div className="linkbio__items border">
            <span className="linkbio__items-icon image__shopee"></span>
            <p>Shopee của xốp</p>
          </div>
        </a>
      </div>  
    </div>
  );
}

export default App;
