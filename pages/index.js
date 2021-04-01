import Head from 'next/head';
import CarouselComponent from '../components/carourcel.component';

export default function Home() {
  const greetingHeadWords = '小杉湯となりは\n2021年3月16日で\n1周年を迎えました'
  const congraturationContents = '文集・展示・軒先\n3つの企画'
  const greetingContentWords = '2020年3月16日。\nまだ身の回りは穏やかだけれど、なんとなく海の向こうの不穏な気配を感じていた春の入り口で、小杉湯となりはオープンしました。そこから1年。たくさんの方が小杉湯となりを利用する中で、次第にまちに馴染んでいるように思います。小杉湯となりは、銭湯のとなりでありながら、みんなのとなりにいる。\nお世話になったと感じた人たちがこの1周年を祝おうと、あの手この手で盛り上げています。'
  const greetingContentMessages = '小杉湯となり1周年を盛り上げようと、47人の会員さんとスタッフが集まりました。文集・展示・軒先と3つの企画に別れ、それぞれ工夫を凝らして、このハレの日を楽しめるように準備しています。'
  const bunsyu = 'あなたととなりの関係性をおしえてください。\n小杉湯となりの1年間を1冊の文集にします。'
  const tenji = 'みんなで作ったガーランドや感謝の気持ちを表すメッセージボードをつくり、となり1階を飾りつけます。2階では会員さんや銭湯ぐらしの交流の機会になるような展示も、ぜひ参加してね！'
  const nokisaki = '軒先から地域とのつながりを育みたい！\nので盛り沢山になりました。\n①小杉湯となりのひととなり展\n②工作キット「となりハウスの仲間たち」\n③軒先メッセージカード\n④お菓子の祝樽 鏡開き\n⑤軒先朝ごはん'
  return (
    // <div className={styles.container} >
    <div className="w-screen">
      <Head>
      <title>小杉湯となり1周年</title>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet"/>      
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:title" content="小杉湯となり1周年"/>
      <meta name="twitter:description" content="概要だよーん"/>
      <meta name="twitter:image" content="../static/kosugiyutonari_kv@2x.png"/>
      </Head>
      <section className="header__image w-screen">
        <img className="w-screen" src="../static/kosugiyutonari_kv@2x.png" alt="header-img"></img>
      </section>
      <section className="white-background">
        <div className="section__head__group text-center">
        <div className="text-center font-medium pt-14 text-xs md:text-2xl">1st anniversary</div>
        <div className="text-3xl md:text-5xl md:leading-relaxed font-bold pt-4">
      {
        //改行コードで分割し、ループ表示
        greetingHeadWords.split('\n').map(str => {
          return(<p>{str}</p>)
        })
      }
        </div>
        </div>
    <div className="leading-6 text-xs md:text-lg font-normal pt-10 px-4 pb-10	xl:px-96 md:leading-10 md:max-w-7xl mx-auto">
    {
        //改行コードで分割し、ループ表示
        greetingContentWords.split('\n').map(str => {
          return(<p>{str}</p>)
        })
      }
    </div>
      </section>
      <section className="gray-background bg-gray-200">
        <div className="section__head__group text-center">
        <div className="text-center font-medium pt-14 text-xs md:text-2xl">お祝いしよう</div>
        <div className="text-3xl md:text-5xl md:leading-relaxed font-bold pt-4">
      {
        //改行コードで分割し、ループ表示
        congraturationContents.split('\n').map(str => {
          return(<p>{str}</p>)
        })
      }
        </div>
        </div>
    <div className="leading-6 text-xs md:text-lg font-normal pt-10 px-4 pb-10	xl:px-96 md:leading-10 md:max-w-7xl mx-auto">
    {
        //改行コードで分割し、ループ表示
        greetingContentMessages.split('\n').map(str => {
          return(<p>{str}</p>)
        })
      }
    </div>
    </section>
    <section className="gray-background bg-gray-200">
    <div className="content__sub__wrap px-5 xl:px-80">
    <CarouselComponent/>
      <div className="content__sub__setumei__wrap">
      <div className="content__sub__setumei__head">
        <h1 className="text-xl font-bold pt-4 md:text-4xl md:leading-relaxed font-bold">文集</h1>
      </div>
      <div className="leading-6 content__sub__setumei__naiyou text-xs	font-normal pt-6 pb-12 md:text-lg ">
      {
        //改行コードで分割し、ループ表示
        bunsyu.split('\n').map(str => {
          return(<p>{str}</p>)
        })
      }
      </div>
    </div>
    </div>
    <div className="content__sub__wrap px-5 xl:px-80">
    <CarouselComponent/>
      <div className="content__sub__setumei__wrap">
      <div className="content__sub__setumei__head">
        <h1 className="text-xl font-bold pt-4 md:text-4xl md:leading-relaxed font-bold">展示</h1>
      </div>
      <div className="leading-6 content__sub__setumei__naiyou text-xs	font-normal pt-6 pb-12 md:text-lg md:max-w-sm	">
    {
        //改行コードで分割し、ループ表示
        tenji.split('\n').map(str => {
          return(<p>{str}</p>)
        })
      }
      </div>
    </div>
    </div>
    <div className="content__sub__wrap px-5 xl:px-80">
    <CarouselComponent/>
      <div className="content__sub__setumei__wrap">
      <div className="content__sub__setumei__head">
        <h1 className="text-xl font-bold pt-4 md:text-4xl md:leading-relaxed font-bold">軒先</h1>
      </div>
      <div className="leading-6 content__sub__setumei__naiyou text-xs	font-normal pt-6 pb-12 md:text-lg ">
    {
        //改行コードで分割し、ループ表示
        nokisaki.split('\n').map(str => {
          return(<p>{str}</p>)
        })
      }
      </div>
    </div>
    </div>
      </section>
      <section className="white-background">
        <div>
          となりのロゴ
        </div>
      </section>
    </div>
  )
}
