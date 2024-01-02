import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    
    {
      source: {
        id: null,
        name: "India.com",
      },
      author: "Zee Media Bureau",
      title:
        "BAN: 144-6 (34) | IND VS BAN, 2nd ODI LIVE Cricket Score and Updates: Bangladesh recover after loss - Zee News",
      description:
        "BAN: 144-6 (34) | IND VS BAN, 2nd ODI LIVE Cricket Score and Updates: Bangladesh recover after loss",
      url: "https://zeenews.india.com/cricket/live-updates/live-cricket-score-ind-vs-ban-2nd-odi-cricket-match-2022-today-india-vs-bangladesh-cricket-live-score-and-updates-mirpur-dhaka-rohit-sharma-litton-kumar-das-2544679",
      urlToImage:
        "https://english.cdn.zeenews.com/sites/default/files/2022/12/06/1126180-indbanblog.jpg",
      publishedAt: "2022-12-07T08:26:07Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "NDTV News Desk",
      title:
        "Delhi Municipal Election Results Live Updates: AAP Wins Civic Polls, Ends BJP's 15-Year Rule - NDTV",
      description:
        "The AAP has won the elections to the Municipal Corporation of Delhi (MCD election), dislodging the BJP from power after 15 years.",
      url: "https://www.ndtv.com/india-news/live-mcd-election-results-2022-counting-of-votes-begins-at-8-am-3584045",
      urlToImage:
        "https://c.ndtvimg.com/2022-12/bfaro36g_aap-celebration_625x300_07_December_22.jpg",
      publishedAt: "2022-12-07T08:19:45Z",
      content:
        "MCD Election Results 2022: The AAP ended the BJP's 15-year rule at the civic body.\r\nNew Delhi: The AAP has won the elections to the Municipal Corporation of Delhi (MCD election), dislodging the BJP f… [+7304 chars]",
    },
    {
      source: {
        id: null,
        name: "Tech Explorist",
      },
      author: "Amit Malewar",
      title: "Moving objects without touching them - Tech Explorist",
      description:
        "A method that can move larger objects using the principles of metamaterial physics.",
      url: "https://www.techexplorist.com/moving-objects-touching/55260/",
      urlToImage:
        "https://www.techexplorist.com/wp-content/uploads/2022/12/metamaterial-object.jpg",
      publishedAt: "2022-12-07T08:17:13Z",
      content:
        "A new method has been discovered that allows contactless manipulation in industries. Developed by scientists at the University of Minnesota, the method uses ultrasound waves to move objects hands-fre… [+1892 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Tech",
      title:
        "Redmi Note 12 5G series launching in India soon! 200MP camera incoming? - HT Tech",
      description:
        "Redmi Note 12 5G series is coming to India soon, confirms Redmi in an official post. Here are all the details.",
      url: "https://tech.hindustantimes.com/tech/news/redmi-note-12-5g-series-launching-in-india-soon-200mp-camera-incoming-71670398771434.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2022/12/07/1600x900/Redmi_Note_12_Pro_1670398924519_1670398933450_1670398933450.jpg",
      publishedAt: "2022-12-07T07:43:52Z",
      content:
        "Redmi Note 12 5G series is coming to India soon. In an official social media post, Xiaomi has now confirmed bringing the Redmi Note 12 5G series smartphones to India. A teaser image also revealed the… [+1868 chars]",
    },
    
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "AAP, Trinamool's Surprise Appearance At Congress-Led Strategy Meet - NDTV",
      description:
        "Congress president Mallikarjun Kharge's meeting of opposition parties this morning at parliament featured two unexpected participants - the Aam Aadmi Party (AAP) and the Trinamool Congress.",
      url: "https://www.ndtv.com/india-news/mallikarjun-kharge-aap-trinamool-congress-aap-trinamools-surprise-appearance-at-congress-led-strategy-meet-3584714",
      urlToImage:
        "https://c.ndtvimg.com/2022-12/i0ho68hg_kharge-meeting_625x300_07_December_22.jpg",
      publishedAt: "2022-12-07T07:41:00Z",
      content:
        'Mallikarjun Kharge had called a meeting of "like-minded opposition parties"\r\nNew Delhi: Congress president Mallikarjun Kharge\'s meeting of opposition parties this morning at parliament featured two u… [+3062 chars]',
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "After Snubbing US, Middle East's Red Carpet for China's Xi Jinping - NDTV",
      description:
        "Two months after snubbing US President Joe Biden's pleas for oil, Saudi Arabia is rolling out the red carpet for his Chinese counterpart, Xi Jinping.",
      url: "https://www.ndtv.com/world-news/after-snubbing-us-middle-easts-red-carpet-for-chinas-xi-jingping-3584636",
      urlToImage:
        "https://c.ndtvimg.com/2022-11/2c30sfso_chinese-president-xi-jinpingbloomberg-_625x300_28_November_22.jpg",
      publishedAt: "2022-12-07T07:37:00Z",
      content:
        "Xi Jinping will visit Saudi Arabia for several days starting Wednesday.\r\nTwo months after snubbing US President Joe Biden's pleas for oil, Saudi Arabia is rolling out the red carpet for his Chinese c… [+7261 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT News Desk, hindustantimes.com",
      title:
        "RBI monetary policy review LIVE: Repo rate hike as expected, say experts - Hindustan Times",
      description:
        "RBI Monetary Policy Meet Live Updates: The Monetary policy committee (MPC) of the Reserve Bank of India (RBI) announced its policy review today. The bi-monthly meeting which started on Monday is keenly watched by the financial market.",
      url: "https://www.hindustantimes.com/business/rbi-monetary-policy-review-governor-shaktikanta-das-to-announce-updates-101670384999047.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/12/07/1600x900/rbi-bi-monthly-monetary-policy-review_b2337c34-9beb-11ea-a010-c71373fc244b_1670385605771_1670385605771.jpg",
      publishedAt: "2022-12-07T06:25:49Z",
      content:
        "The RBI has been extremely judicious in their decision to raise repo rate by 35 bps as against the previous revisions, which were much sharper. The move is a balanced approach towards continued econo… [+664 chars]",
    },
    {
      source: {
        id: null,
        name: "GSMArena.com",
      },
      author: "Sagar",
      title:
        "Samsung Galaxy M04's launch date, design, and key specs revealed by Amazon - GSMArena.com news - GSMArena.com",
      description: "It's expected to come with the Helio G35 SoC.",
      url: "https://www.gsmarena.com/samsung_galaxy_m04_india_launch_date_specs_price_design-news-56782.php",
      urlToImage:
        "https://fdn.gsmarena.com/imgroot/news/22/12/samsung-galaxy-m04-india-launch-date/-952x498w6/gsmarena_001.jpg",
      publishedAt: "2022-12-07T06:03:01Z",
      content:
        "The Samsung Galaxy M04 we've been hearing about for a few months will be launched on December 9 at noon local time in India. This revelation comes from Amazon.in since it created a promo page for the… [+1429 chars]",
    },
    {
      source: {
        id: null,
        name: "Crictracker.com",
      },
      author: "CricTracker Staff",
      title:
        "LPL 2022: DA vs JK, Today's Match Prediction- Who will win today's LPL match between Dambulla Aura vs Jaffna Kings? - CricTracker",
      description:
        "Match 3 of the all-exciting Lanka Premier League 2022 will see the reigning champions Jaffna Kings (JK) clashing with the Dambulla Aura (DA) at the Mahinda Rajapaksa International Stadium in Hambantot",
      url: "https://www.crictracker.com/cricket-match-predictions/lpl-2022-match-3-da-vs-jk-match-prediction-who-will-win-todays-lpl-match-between-da-vs-jk/",
      urlToImage:
        "https://media.crictracker.com/media/attachments/1670335565075_Jaffna-Kings.jpeg",
      publishedAt: "2022-12-07T05:45:00Z",
      content:
        "Match 3 of the all-exciting Lanka Premier League 2022 will see the reigning champions Jaffna Kings (JK) clashing with the Dambulla Aura (DA) at the Mahinda Rajapaksa International Stadium in Hambanto… [+2188 chars]",
    },
    {
      source: {
        id: null,
        name: "Greatandhra.com",
      },
      author: "Venkat",
      title: "2022: Three Telugu Heroes In Top#10 Positions - Greatandhra",
      description:
        "IMDb ratings are indeed surprising. The ranks are announced based on the ratings given by respective fans of the actors and actresses.",
      url: "https://www.greatandhra.com/movies/news/2022-three-telugu-heroes-in-top10-positions-125736",
      urlToImage:
        "https://www.greatandhra.com/newphotos10/ntr_allu_ramcharan11670391886.jpg",
      publishedAt: "2022-12-07T05:44:46Z",
      content:
        "IMDb ratings are indeed surprising. The ranks are announced based on the ratings given by respective fans of the actors and actresses. \r\nIt can be said that 2022 is the year of Alia Bhatt as she scor… [+765 chars]",
    },
    {
      source: {
        id: null,
        name: "Bar & Bench - Indian Legal News",
      },
      author: "Shagun Suryam",
      title:
        "Supreme Court launches updated version of its mobile app; government departments can now check pendency of their cases - Bar & Bench - Indian Legal News",
      description:
        "The Supreme Court of India Wednesday launched an updated version of its mobile app for Android users.",
      url: "https://www.barandbench.com/news/supreme-court-launches-updated-version-of-its-mobile-app-government-departments-can-now-check-pendency-of-their-case",
      urlToImage:
        "https://gumlet.assettype.com/barandbench%2F2022-12%2Fe4397da6-1a5e-4124-9414-e34ed3949ba7%2FSUPREME_COURT_OF_INDIA__WEB_PAGE_1600x900___Copy.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
      publishedAt: "2022-12-07T05:27:13Z",
      content:
        "Chief Justice of India (CJI) DY Chandrachud announced the same in open court. \r\nHe said that the updated app will enable law officers can have real time access to cases they are appearing in. \r\nPerti… [+457 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Tech",
      title:
        "Samsung to bring all-screen fingerprint scanner! Will be 2.5 billion times more secure - HT Tech",
      description:
        "Samsung is working on a new kind of OLED display that uses the entire area as the fingerprint sensor.",
      url: "https://tech.hindustantimes.com/tech/news/samsung-to-bring-all-screen-fingerprint-scanner-will-be-2-5-billion-times-more-secure-71670390584839.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2022/12/07/1600x900/DSC_1680_1646205390518_1670390699311_1670390699311.jpg",
      publishedAt: "2022-12-07T05:26:23Z",
      content:
        "In-display fingerprint scanners have been around for years now and the current generation sensors are the most convenient ones. Cheaper phones make use of the optical sensors while expensive phones s… [+1939 chars]",
    },
    
    {
      source: {
        id: null,
        name: "Koimoi",
      },
      author: "Koimoi.com Team",
      title:
        "Avatar 2 Early Reviews Are Out! Viewers Are All Gaga Over This Visual Extravaganza, Critic Declares “James Cameron Once Again Shows Filmmakers How It’s Done” - Koimoi",
      description:
        "James Cameron's Avatar 2 has fetched outstanding reactions from press members after a special screening was held for them. Read on!",
      url: "https://www.koimoi.com/?p=943010",
      urlToImage:
        "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/12/avatar-2-early-reviews-are-out-001.jpg",
      publishedAt: "2022-12-07T04:42:23Z",
      content:
        "Avatar 2 Early Reviews Are Out(Photo Credit Still From Avatar 2)\r\nJames Cameron‘s Avatar 2 (Avatar: The Way Of Water) is all set for a grand release on 16th December. After the tremendous and histori… [+3010 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "NDTV Sports Desk",
      title:
        "Achraf Hakimi: Madrid-Born Morocco Star Whose Decisive Penalty Knocked Spain Out of FIFA World Cup - NDTV Sports",
      description:
        "Achraf Hakimi scored the decisive penalty for Morocco against the country of his birth Spain in a Round of 16 match at the FIFA World Cup 2022",
      url: "https://sports.ndtv.com/fifa-world-cup-2022/achraf-hakimi-madrid-born-morocco-star-whose-decisive-penalty-knocked-spain-out-of-fifa-world-cup-3584372",
      urlToImage:
        "https://c.ndtvimg.com/2022-12/2tk9q0vo_achraf-hakimi_625x300_07_December_22.jpg",
      publishedAt: "2022-12-07T04:41:03Z",
      content:
        "When Achraf Hakimi stepped up to take the decisive penalty against Spain in a FIFA World Cup Round of 16 clash on Tuesday night, he was not only bearing the hopes of a country but the weight of his p… [+2528 chars]",
    },
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "News Desk",
      title:
        "Cyclone 'Mandous' Updates: Deep Depression Likely to Intensify Into Cyclonic Storm, Hit Tamil Nadu & AP Coa - News18",
      description:
        "As a precautionary measure 10 teams of the National Disaster Response Force (NDRF) have been deployed in several Tamil Nadu districts including Chennai.",
      url: "https://www.news18.com/news/india/cyclone-mandous-updates-deep-depression-to-bring-heavy-rain-for-tamil-nadu-andhra-also-on-alert-6557155.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2022/11/chennai-166729439216x9.jpg",
      publishedAt: "2022-12-07T04:40:00Z",
      content:
        "Tamil Nadu is set to experience extremely heavy rainfall due to a depression formed in the Bay of Bengal that will deepen further and become a cyclonic storm on Wednesday, according to India Meteorol… [+3405 chars]",
    },
    {
      source: {
        id: null,
        name: "Bar & Bench - Indian Legal News",
      },
      author: "Prashant Jha",
      title:
        "Delhi High Court lays down factors for medical board to consider when giving opinion on medical termination of pregnancy - Bar & Bench - Indian Legal News",
      description:
        "The Court said that the report of the medical board ought to include standard factors like condition of foetus, woman and the risks involved.",
      url: "https://www.barandbench.com/news/litigation/delhi-high-court-lays-down-factors-for-medical-board-to-consider-when-giving-opinion-on-medical-termination-of-pregnancy",
      urlToImage:
        "https://gumlet.assettype.com/barandbench%2F2020-02%2Fe920e202-9383-467d-bb56-40e70c0d5aa0%2FDelhi_High_Court__1_.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
      publishedAt: "2022-12-07T03:35:17Z",
      content:
        "Single-judge Justice Prathiba M Singh noted that in cases where termination of pregnancy is sought, the speediness coupled with qualitative report of the medical board is of utmost importance.\r\nThe b… [+116 chars]",
    },
    {
      source: {
        id: null,
        name: "Business Standard",
      },
      author: "ANI",
      title:
        "Apple announces new karaoke experience Apple Music Sing: Report - Business Standard",
      description:
        "According to Apple background voices can be heard separately from the lead vocals and a duet view will be available if a user wishes to sing along with a companion",
      url: "https://www.business-standard.com/article/technology/apple-announces-new-karaoke-experience-apple-music-sing-report-122120700092_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2017-03/15/full/1489597286-556.jpg",
      publishedAt: "2022-12-07T03:02:00Z",
      content:
        "American tech giant Apple has announced Apple Music Sing, a karaoke experience that will be built right into the company's Apple Music app.\r\nAccording to The Verge, an American technology news websit… [+1478 chars]",
    },
  ];
  constructor() {
    super();
    console.log("hello");
    this.state = {
      articles: this.articles,
      loading: false,
      page:1,
    };
  }
  async componentDidMount(){
    // let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=e44623369cb540e2a72ebde0fab0b1ca&page=1&pageSize=3";
    let url="https://gnews.io/api/v4/top-headlines?category=nation&lang=en&country=in&max=10&apikey=2e03d0e78cf1a27b830b17dd9c9d5af7";

    let data=await fetch(url);
    let parsedData= await data.json()
    this.setState({articles: parsedData.articles} )
  }
handleNextClick=async()=>{
  
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=e44623369cb540e2a72ebde0fab0b1ca&page=${this.state.page+1}&pageSize=3`;
    let data=await fetch(url);
    let parsedData= await data.json()
    this.setState({
      
      page:this.state.page+1, 
      articles: parsedData.articles} )
}
handlePrevClick=async()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=e44623369cb540e2a72ebde0fab0b1ca&page=${this.state.page-1}&pageSize=3`;
    let data=await fetch(url);
    let parsedData= await data.json()
    this.setState({
      
      page:this.state.page-1, 
      articles: parsedData.articles} )
}

  render() {
    return (
      <div className="container my-3">
        <h2>Top Headline</h2>

        <div className="row">
          {this.state.articles.map
          ((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  
                  title={element.title?element.title.slice(0,50):""}
                  description={element.description?element.description.slice(0,100):""}
                  imgurl={element.image}
                  newsurl={element.url}
                ></NewsItem>
              </div>
            );
            })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}
