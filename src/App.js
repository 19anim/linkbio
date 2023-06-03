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
          href="https://www.instagram.com/jagerthejager"
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
          href="https://www.instagram.com/jagerthejager"
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
          href="https://www.instagram.com/jagerthejager"
          target="_blank"
        >
          <p>Zalo của xốp</p>
        </a>
      </div>

      {/* SHOPEE LINK */}
      <div className="linkbio__items border">
      <span className="linkbio__items-icon image__shopee"></span>
        <a
          className="linkbio__items-link"
          href="https://www.instagram.com/jagerthejager"
          target="_blank"
        >
          <p>Shopee của xốp</p>
        </a>
      </div>
    </div>
  );
}

export default App;
