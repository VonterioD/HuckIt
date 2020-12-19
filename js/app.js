//Video tags
const vid1 = "UR3pf89uKSk"
const vid2 = "TpPyQ6xiorg"
const vid3 = "W5Zy3ZGMSas"
const vid4 = "ldkCeMDukXk"
const ytBase = "https://youtube.com/embed/"

const iframe = document.querySelector("#iframe");

//Change video to vid1
document.querySelector("#video-selection").children.item(0).addEventListener("click", e => {
    iframe.attributes.src.nodeValue = `${ytBase}${vid1}`;
    iframe.scrollIntoView({behavior:"smooth", block:"start", inline:"nearest"}); //Scroll to top of player
});
//Change video to vid2
document.querySelector("#video-selection").children.item(1).addEventListener("click", e => {
    iframe.attributes.src.nodeValue = `${ytBase}${vid2}`;
    iframe.scrollIntoView({behavior:"smooth", block:"start", inline:"nearest"});
});
//Change video to vid3
document.querySelector("#video-selection").children.item(2).addEventListener("click", e => {
    iframe.attributes.src.nodeValue = `${ytBase}${vid3}`;
    iframe.scrollIntoView({behavior:"smooth", block:"start", inline:"nearest"});
});
//Change video to vid4
document.querySelector("#video-selection").children.item(3).addEventListener("click", e => {
    iframe.attributes.src.nodeValue = `${ytBase}${vid4}`;
    iframe.scrollIntoView({behavior:"smooth", block:"start", inline:"nearest"});
});

