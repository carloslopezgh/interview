
const profileData = {
    name : "Kermit the frog",
    description : "Kermit the Frog is a Muppet character created and originally performed by Jim Henson. Introduced in 1955, Kermit serves as the everyman protagonist of numerous Muppet productions, most notably Sesame Street and The Muppet Show.",
    picturepath : "./assets/ProfileImg1.jpg",
    instaLink : "#",
    facebookLink : "#",
    githubLink: "#",
    linkedinLink : "#"
};

const profileCardStr = `<div class="profile-card">` +
                       `			<h1>Profile Card</h1>` +
                       `			<p> Profile information</p>` +
                       `			<image src=${profileData.picturepath}  id="profile-img"></image>` +
                       `			<p> Profile Name` +
                       `			- ${profileData.name} </p>` +
                       `			<h5> Profile Description</h5>` +
                       `			<p id="description"> ${profileData.description}</p>` +
                       `			<hr/>` +
                       `			<a href=${profileData.instaLink} target="_blank">  <image class="social-net-icons" src="assets/insta.png"></image></a>` +
                       `			<a href=${profileData.facebookLink} target="_blank">  <image class="social-net-icons" src="assets/meta.png"></image></a>` +
                       `			<a href=${profileData.githubLink} target="_blank">  <image class="social-net-icons" src="assets/gh.png"></image></a>` +
                       `			<a href=${profileData.linkedinLink} target="_blank">  <image class="social-net-icons" src="assets/linkin.png"></image></a>` +
                       `		</div>`;


const profileCardStyle = ' /* Priofile Card Style sheet */' + 
                         '.profile-card h2,.profile-card p {' +
                         '    color: #5b631b;' +
                         '    font-size: 15px;' +
                         '    text-shadow: 0px 1px 1px rgb(12, 12, 12);' +
                         '}' +
                         '.profile-card h1,h5 {' +
                         '    color: #5F7317;' +
                         '    font-size: 16px;' +
                         '    text-shadow: 1px 1px 1px rgb(12, 12, 12);' +
                         '}' +
                         '.profile-card .social-net-icons{ ' +
                         '     height: 50px; ' +
                         '     margin-right: 2%; ' +
                         '     margin-left: 2%; ' +
                         '     margin-top: 5%; ' +
                         '     margin-bottom: 5%; ' +
                         '     transition: all 300ms ease-in-out; ' +
                         ' } ' +
                         '.profile-card .social-net-icons:hover { ' +
                         '    transform: scale(1.2, 1.2); ' +
                         '    background: radial-gradient(circle, #e6edb8 50%,rgba(1,2,2,0.0) 80%); ' +
                         '} ' +
                         '.profile-card #profile-img { ' +
                         '    position: relative; ' +
                         '    top:10px; ' +
                         '    width:  40%; ' +
                         '    border-radius: 50%; ' +
                         '    border: 5px solid #8C7B26; ' +
                         '    margin: 0 auto; ' +
                         '    overflow: auto; ' +
                         '    transition: transform 300ms ease-in; ' +
                         '    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 30%); ' +
                         '} ' +
                         '.profile-card #profile-img:hover { ' +
                         '    transform: rotate(5deg); ' +
                         '    transform: scale(1.05, 1.05); ' +
                         '} ' +
                         '.profile-card { ' +
                         '    text-align: center; ' +
                         '    background-color: #fcf3f3; ' +
                         '    background-size: cover; ' +
                         '    background-repeat: no-repeat; ' +
                         '    border: 1px solid #8C7B26; ' +
                         '    border-radius: 20px; ' +
                         '    width: 40%; ' +
                         '    align-self: center; ' +
                         '    align-content: center; ' +
                         '    justify-content: center; ' +
                         '} ' +
                         '.profile-card #description{ ' +
                         '    text-align: justify; ' +
                         '    margin-left: 5%; ' +
                         '    margin-right: 5% ' +
                         '} ' ;

class profileCard extends HTMLElement {
    connectedCallback() {
        this.innerHTML = profileCardStr;
    }
}

customElements.define('profile-card', profileCard);

var profileCardStyleSheet = document.createElement("style");
profileCardStyleSheet.innerText = profileCardStyle;
document.head.appendChild(profileCardStyleSheet);
