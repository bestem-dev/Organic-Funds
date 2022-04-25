import Navbar from "../components/Navbar";
import "./contenido.css";
import { Link } from "react-router-dom";

export default function Contenido (){
    return(
        <>
        <Navbar />
            <div id="section__title">
                <h1>Project brief</h1>
            </div>
            <section className="card__content">
            <p><strong id="strong">Name:</strong> Tokedu</p>
            <p><strong id="strong">Short description</strong> Descentralized education</p>
            <p><strong id="strong">Founder: </strong> Satoshi Nakamoto</p>
            <p><strong id="strong">Category: </strong>Education</p>
            <p><strong id="strong">Funded: 28</strong>/100 ETH</p>
            <a href="#">Link to whitepaper</a>
            <br></br>
            <Link to="/Voting">
            <button>FUND PROJECT</button></Link>
            <Link to="/"><button id="button1">BACK TO PROJECTS</button></Link>
            <div className="body__content">
                <h3>PROBLEM:</h3><br></br>
                <p>
                    <li><strong>Financial illiteracy:</strong><span>66% of the global population does not have basic financial kwonledge</span></li>
                    <li><strong>Lack of educators:</strong><span>In countries with low financial education thre are no trained teachers to meet the need.</span></li>
                    <li><strong>Poverty:</strong><span>1 in 10 people lives in extreme poverty. 85% of the global population lives on less than 30 dollars a day</span></li>
                    <li><strong>Technology Adoption:</strong><span>Only 4% of the global population has knowledge on how to trade cryptocurrencies.</span></li>
                </p><br></br>
                <h3>SOLUTION:</h3><br></br>
                <p>
                   <li><strong>Videogame:</strong><span> A video game as a playful teaching tool and complementary to the teacher to capture the attention of the youngest. </span></li> 
                   <li><strong>Educational:</strong><span> Teach from the basics of finance( savings, invesment, money flow) to now to operate with crypto and NFT's.</span></li>
                   <li><strong>Decentralized:</strong><span> Actively involve the student in their learning hourney to make them creators and moderators of new content.</span></li>
                   <li><strong>With Rewards</strong><span> Provide cryptocurrency incentives to users for learning, playing, creating and moderating educational content.</span></li>
                </p><br></br>
                <h3>COMPLETED MILESTONE: <span id="title__dos"> Freemium app</span></h3><br></br>
                <li><strong>Amount: </strong><span> 28 ETH</span></li>
                <li><strong>Contributors: </strong><span> 59</span></li>
                <li><strong>Description: </strong><span> App development for web browser, iOS & android.</span><br></br>
                    <span>
                     Through the initial version of our app, the user will be able to learn from scratch about personal finances, decentralized economy and investments in the crypto world. This application has as a target audience 96% of the world's population that to this day still has no knowledge about the DeFi revolution</span></li><br></br>
                <h3>FUTURE MILESTONE: <span id="title__dos"> Rewards</span></h3>
                <li><span>Launch of NFT marketplace and rewards system for tokedu app.</span></li>
                <li><span>Launch of NFT marketplace.</span></li>
                <li><span>2.500 pieces NFT first collection release</span></li>
                <li><span>Launch of the scholarships system through sponsors</span></li>
                <li><span>Launch of rewards system through crypto</span></li>
                <li><span>Trivia mode (Play2Earn)</span></li>
                <li><span>Moderator mode</span></li>
                <li><span>Creator mode (Teach2Earn)</span></li>
                <br></br>
                <h3>FUTURE MILESTONE: <span id="title__dos"> Launchpad & staking</span></h3>
                <li><span>The tokedu lauchpad will allow holders to access exclusive investment opportunities for new education projects based on the Tokedu infraestructure.</span></li>
                <li><span>$TEDU holders will be grouped into diferrent Tiers, which allow the purchase of x% of tokens from new educational projects during IDO and ICO.</span></li>
                <li><span>On the other hand, the staking system will be a way to reward our community for having a long-term mindset and holding their $TEDU tokens.</span></li>
            </div>
            </section>
        </>
    )
}