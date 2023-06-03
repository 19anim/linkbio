import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="linkbio__title">
        Ở ĐÂY IEM BÁN THUỐC HO CON HƯƠU XỐP
      </div>

      {/* INSTAGRAM LINK */}
      <div className="linkbio__items border">
          <span className="linkbio__items-icon image__ig"></span>
          <a
            className="linkbio__items-link"
            href="https://www.instagram.com/jagerthejager"
            target="_blank"
          >
            <p>Instagram xốp nè</p>
          </a>
      </div>

      {/* FACEBOOK LINK */}
      <div className="linkbio__items border">
      <span className="linkbio__items-icon image__fb"></span>
        <a
          className="linkbio__items-link"
          href="https://www.facebook.com/profile.php?id=100092571115747"
          target="_blank"
        >
          <p>Facebook chính của xốp</p>
        </a>
      </div>

      {/* FACEBOOK LINK */}
      <div className="linkbio__items border">
      <span className="linkbio__items-icon image__fb"></span>
        <a
          className="linkbio__items-link"
          href="https://www.facebook.com/jagerthejagerxop"
          target="_blank"
        >
          <p>Facebook phụ của xốp</p>
        </a>
      </div>

      {/* ZALO LINK */}
      <div className="linkbio__items border">
      <span className="linkbio__items-icon image__zalo"></span>
        <a
          className="linkbio__items-link"
          href="https://zalo.me/0927183879"
          target="_blank"
        >
          <p>Zalo của xốp - 0927183879</p>
        </a>
      </div>

      {/* SHOPEE LINK */}
      <div className="linkbio__items border">
      <span className="linkbio__items-icon image__shopee"></span>
        <a
          className="linkbio__items-link"
          href="https://shopee.vn/jagerthejager"
          target="_blank"
        >
          <p>Shopee của xốp</p>
        </a>
      </div>
    </div>
  );
}

export default App;
