/**
 * ヘッダー
 * @returns {JSX.Element}
 */
function Header() {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Cute Dog Image</h1>
        </div>
      </div>
    </header>
  );
}

/**
 * 画像
 * @returns {JSX.Element}
 */
function Image(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={props.src} alt="cute dog" />
        </figure>
      </div>
    </div>
  );
}

/**
 * ギャラリー
 * @returns {JSX.Element}
 */
function Gallery() {
  const url = "https://images.dog.ceo/breeds/shiba/shiba-8.jpg";

  return (
    <div className="columns is-vcenterd is-multiline">
      <div className="column is-3">
        <Image src={url} />
      </div>
    </div>
  );
}

/**
 * メインコンテンツ
 * @returns {JSX.Element}
 */
function Main() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <Gallery />
        </div>
      </section>
    </main>
  );
}

/**
 * フッター
 * @returns {JSX.Element}
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Dog images are retrieved from Dog API</p>
        <p>
          <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
        </p>
      </div>
    </footer>
  );
}

/**
 *
 * @returns {JSX.Element}
 */
function App() {
  return (
    <div>
      {/* ヘッダー */}
      <Header />
      {/* メインコンテンツ */}
      <Main />
      {/* フッター */}
      <Footer />
    </div>
  );
}

export default App;
