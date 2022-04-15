import { useEffect, useState } from "react";
import { fetchImages } from "./api";

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

function Loading() {
  return <p>Loading...</p>;
}

/**
 * ギャラリー
 * @returns {JSX.Element}
 */
function Gallery(props) {
  const { urls } = props;
  if (urls === null) {
    return <Loading />;
  }
  return (
    <div className="columns is-vcenterd is-multiline">
      {urls.map((url) => {
        return (
          <div key={url} className="column is-3">
            <Image src={url} />
          </div>
        );
      })}
    </div>
  );
}

/**
 * 入力フォーム
 * @returns {JSX.Element}
 */
function Form(props) {
  /**
   * サブミットイベント時の処理
   * @param {*} event
   */
  function handleSubmit(event) {
    console.log(event);
    event.preventDefault();
    const { breed } = event.target.elements;
    props.onFormSubmit(breed.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select name="breed" defaultValue="shiba">
                <option value="shiba">Shiba</option>
                <option value="akita">Akita</option>
              </select>
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-dark">
              Reload
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

/**
 * メインコンテンツ
 * @returns {JSX.Element}
 */
function Main() {
  const [urls, setUrls] = useState(null);

  useEffect(() => {
    fetchImages("shiba").then((urls) => {
      setUrls(urls);
    });
  }, []);

  /**
   * 更新時の処理
   * @param {String} breed
   */
  function reloadImages(breed) {
    fetchImages(breed).then((urls) => {
      setUrls(urls);
    });
  }

  return (
    <main>
      <section className="section">
        <div className="container">
          <Form onFormSubmit={reloadImages} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} />
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
