var assert = require("assert");
const { isPromoMessage } = require("../checkpromo");
// const TestConsts = require("./testconsts")
//Set sample messages

const samplePromoMessages =
[
    "any admin online? i have a business proposal Who should I talk to?",
    "Greetings GovernorDAO team!We are listing agency - Cryptolist.We have the best prices for listing on 10 exchanges which we work with, it helps to save up to 30-50% on package listing.This helps the project to increase liquidity, trading volume and increase the community.Are you interested in details?",
    "Hello any admin I could contact to propose a AMA ?",
    "Hello any admin I could contact to propose a AMA",
    "Hello Everyone ! I am Amanda from Crypto Anymore Community, any admin I could contact to propose a AMA session?",
    "Hello. Please who can i contact about marketing proposal here?",
    "Hi Admin.I have a listing proposal.. Whom should i contact?",
    "Hi for YouTube Marketing Proposal Whom to Contact? Thank you",
    "Hi Admin.I have listing proposal.Who can i contact about listing?",
    "I have a proposal who should I pm",
    "Hello admins who can i talk for AMA Proposal?",
    "Hello guys! Who is the right person to discuss the listing of GOVERNOR on exchanges?You can verify me in WhiteBIT official group.",
    "I Have a business proposal about creating an Arabic telegram community for $GDAO.WHO should i pm?",
    "Who should i pm for AMA proposal?",
    "Hello For YouTube Marketing Proposal Whom to Contact ?",
    "Sir sir need any type promotion? Like- member adding or",
    "Hello there, with whom I can discuss about out some of the park marketing proposal?",
    "Hi Admin Whom should i contact about listing proposal or Marketing proposal?",
    "Hi Admin!Whom should i contact about Marketing proposal?",
    "Hello good days. I have a proposal for the project. Who can I talk to from the project owners?"
];

describe("Proposal message test", function () {
  it("Should flag messages as proposal messages", function () {
      samplePromoMessages.forEach(message => {
        assert(isPromoMessage(message),"Failed case")
    });
  });
});
