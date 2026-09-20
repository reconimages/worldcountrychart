export type Platform = "spotify" | "appleMusic" | "youtubeMusic" | "amazonMusic";

export type Artist = {
  id: string;
  rank: number;
  name: string;
  country: string;
  photoUrl: string;
  bioShort: string;
  pinned: boolean;
  links: Partial<Record<Platform, string>>;
};

const I = "https://is1-ssl.mzstatic.com/image/thumb/";

const PHOTOS: Record<string, string> = {
  "maddox-chain": `${I}Music211/v4/99/2a/29/992a29d0-f7f2-e1c0-a4a9-caf890446706/artwork.jpg/600x600bb.jpg`,
  "raven-cross": `${I}Music221/v4/ec/2a/0f/ec2a0f22-d0fa-ac42-5064-d6c26cb14b84/artwork.jpg/600x600bb.jpg`,
  "wade-ashmore": `${I}Music211/v4/bb/61/6c/bb616c10-3f6f-4c76-9b98-a482172c5854/artwork.jpg/600x600bb.png`,
  "morgan-wallen": `${I}AMCArtistImages221/v4/7f/c7/73/7fc773e4-e0b4-205a-5fc3-e4b88e57a6ed/ami-identity-9e8a6aedf0dca3c60ecb0d44b67ae82b-2026-07-18T07-17-32.334Z_cropped.png/600x600bb.png`,
  "luke-combs": `${I}AMCArtistImages211/v4/17/fd/cf/17fdcf62-4009-9fe2-fe93-da119e54b90d/ami-identity-ce954f3dd60989c4a5b2c185b6a2ba0c-2026-01-07T17-27-34.014Z_cropped.png/600x600bb.png`,
  "zach-bryan": `${I}Music112/v4/be/ea/e9/beeae98a-33a4-6e1d-6efc-b8dd098b0a2c/093624866459.jpg/600x600bb.jpg`,
  "chris-stapleton": `${I}Music125/v4/e2/4b/60/e24b6016-8278-bb18-cf5d-d44bf68371da/00602547223838.rgb.jpg/600x600bb.jpg`,
  "lainey-wilson": `${I}AMCArtistImages211/v4/d2/af/2b/d2af2b08-d1d3-b961-17b7-4646c4d1e2a6/ami-identity-4d203e03b1aa5da4542ef9132fc5a331-2026-03-09T16-24-49.109Z_cropped.png/600x600bb.png`,
  "cody-johnson": `${I}AMCArtistImages211/v4/8f/bf/5c/8fbf5c7b-24e8-47d3-7db5-430aff61ff9e/ami-identity-49a75f7097d8314d0d8fcccdd43beb55-2026-04-16T14-40-48.993Z_cropped.png/600x600bb.png`,
  "kane-brown": `${I}AMCArtistImages211/v4/d9/00/2c/d9002cda-c07c-047b-b75a-22d3b292f7c5/ami-identity-3bf2913318722cd18689be3784c8b04d-2026-08-17T17-04-27.213Z_cropped.png/600x600bb.png`,
  "jelly-roll": `${I}AMCArtistImages221/v4/ff/6e/04/ff6e04f9-0536-446d-673a-1adfd83f517f/ami-identity-0b49835731a54c62a57615393723d301-2026-07-17T13-58-16.851Z_cropped.png/600x600bb.png`,
  "carrie-underwood": `${I}AMCArtistImages221/v4/0c/25/d9/0c25d9b6-b1c2-3aa3-863b-02b776ad5d59/ami-identity-ec7e0d16f7b99b8d85ac6c159c643b05-2025-12-27T16-27-35.713Z_cropped.png/600x600bb.png`,
  "miranda-lambert": `${I}AMCArtistImages211/v4/39/ca/fd/39cafd49-1dc7-592d-fc63-e95ed61fed42/ami-identity-332dac2fc5a2ae894227f5c9baae0d05-2026-06-25T14-01-03.161Z_cropped.png/600x600bb.png`,
  "luke-bryan": `${I}AMCArtistImages221/v4/54/8c/19/548c196e-ba48-36ec-ba49-011cd0b8d11b/ami-identity-6c6f0edbb221da8e97173b838ba174eb-2026-05-15T14-42-06.727Z_cropped.png/600x600bb.png`,
  "kacey-musgraves": `${I}AMCArtistImages211/v4/03/0c/90/030c90dc-057d-8493-67f4-7f77235db1bb/ami-identity-7531ce61854837418c280165a4435e0a-2026-03-11T17-49-01.769Z_cropped.png/600x600bb.png`,
  "tyler-childers": `${I}AMCArtistImages211/v4/53/fd/d1/53fdd1f7-af03-a26c-4138-4935f6bf5a76/ami-identity-bd5058391d343c335ce61149fde18ead-2025-06-12T12-47-48.737Z_cropped.png/600x600bb.png`,
  "shania-twain": `${I}AMCArtistImages211/v4/8f/12/52/8f1252d5-1777-e0d8-0480-a9f6f58d83f3/ami-identity-5588c33d23e9666c42d11cb980599166-2026-05-11T16-10-19.634Z_cropped.png/600x600bb.png`,
  "keith-urban": `${I}AMCArtistImages221/v4/d4/4e/21/d44e217e-5163-6fd5-4962-88d867f57c5f/ami-identity-aa603e74af7ffa5b8feb314482f1cbd1-2026-04-29T12-03-24.506Z_cropped.png/600x600bb.png`,
  "megan-moroney": `${I}AMCArtistImages211/v4/f7/e5/e0/f7e5e05f-b5ac-b943-c88d-1bdc12ed59a6/ami-identity-5e230cb1ee1c773f235fa10e4d4e1955-2025-11-11T20-21-39.068Z_cropped.png/600x600bb.png`,
  "riley-green": `${I}AMCArtistImages221/v4/fc/f3/a0/fcf3a099-e773-4e19-c111-7ff711c01c34/ami-identity-cfd2b32135d716cb24a303f5096abe68-2026-05-28T20-49-56.728Z_cropped.png/600x600bb.png`,
  "shaboozey": `${I}AMCArtistImages221/v4/6f/47/1c/6f471c46-d0a0-0b9d-edb8-77b866114d86/ami-identity-98c29be3d0ee8248d0dab4966617a220-2026-04-27T17-59-55.799Z_cropped.png/600x600bb.png`,
  "bailey-zimmerman": `${I}AMCArtistImages221/v4/f2/b7/2a/f2b72ae9-4bb3-c53e-b178-cdfee460c332/ami-identity-8b19e2a35d1afadeeb045d994fe1bf51-2025-06-07T01-44-53.432Z_cropped.png/600x600bb.png`,
  "jon-pardi": `${I}AMCArtistImages211/v4/85/37/25/853725b4-830e-ea11-eea1-46a4812adff0/5f96f53e-206d-405a-af43-c2da1e63e67f_ami-identity-d53010f255736ce9a0503bc60390c11d-2024-06-25T20-21-50.488Z_cropped.png/600x600bb.png`,
  hardys: `${I}AMCArtistImages211/v4/29/e5/46/29e54626-42e2-350b-f4c3-9a6abb74658c/ami-identity-12e31c561ec619518f2b5b50831359d7-2026-02-10T20-21-18.079Z_cropped.png/600x600bb.png`,
  "cody-jinks": `${I}AMCArtistImages221/v4/21/6e/1f/216e1fd5-4c45-decd-632f-190d19fd9465/ami-identity-bc88efb300cc008a954b22174c006c0a-2025-04-29T16-43-57.933Z_cropped.png/600x600bb.png`,
  "charley-crockett": `${I}Music221/v4/7b/27/99/7b279952-4391-3d81-2d9f-5ff77f61b044/075679569585.jpg/600x600bb.jpg`,
  "sierra-ferrell": `${I}AMCArtistImages221/v4/27/d4/f9/27d4f969-1c80-738c-9e9f-b2f2dde170ed/ami-identity-068eef859aad820dcac34383b5c95b3f-2026-02-05T15-24-17.212Z_cropped.png/600x600bb.png`,
  "ella-langley": `${I}AMCArtistImages211/v4/7d/f9/5b/7df95b8e-26fb-5e14-f35d-f603abc52dc8/ami-identity-6b9f829473ca41446a842ac18b0e65ee-2026-01-27T17-02-20.725Z_cropped.png/600x600bb.png`,
  "jimmie-allen": `${I}Music118/v4/6d/b9/28/6db9286f-fed7-6843-b6be-915c665e2538/4050538411119.jpg/600x600bb.jpg`,
  "brett-kissel": `${I}Music124/v4/65/c0/eb/65c0eb14-f44c-1482-32c6-a6b930069a90/0.jpg/600x600bb.jpg`,
  "jade-eagleson": `${I}AMCArtistImages211/v4/9e/bb/10/9ebb1028-2879-0eed-fca8-40cffce887e7/ami_U003aidentity_U003a86b4585fcc28415499446bb0b90c4d43-2026-09-16T21-23-03.671Z_cropped.png/600x600bb.png`,
  "the-reklaws": `${I}AMCArtistImages221/v4/a0/f6/61/a0f66177-e6ea-28d0-da48-1ba6e99fafd8/ami-identity-673c64198c582ce6960fd3f5c1bd724b-2025-05-23T04-11-46.127Z_cropped.png/600x600bb.png`,
  "nathan-carter": `${I}Music124/v4/2b/de/ce/2bdece8f-0730-b73a-04ed-4cdc3a2009c8/193483419572.jpg/600x600bb.jpg`,
  "derek-ryan": `${I}AMCArtistImages221/v4/0d/a6/b7/0da6b711-0e07-0124-48fa-02c2d6f47717/ami-identity-56c566dc4d23ad827ed7f8d05adce9ef-2025-03-12T18-35-30.606Z_cropped.png/600x600bb.png`,
  "the-shires": `${I}AMCArtistImages211/v4/56/dc/a0/56dca069-4ca8-90cf-c866-c135768a4f7e/ami-identity-55e95a1eb108c157c21cd6827098dabc-2026-03-12T15-22-54.831Z_cropped.png/600x600bb.png`,
  "ward-thomas": `${I}AMCArtistImages122/v4/58/9a/73/589a73ce-5bc9-2c8f-9924-6a860952185d/d15df7a4-2e02-4cab-8976-6defa3f63898_ami-identity-d54d6a2161354af0f2895f52c24eaf33-2022-11-11T12-42-07.508Z_cropped.png/600x600bb.png`,
  "shane-nicholson": `${I}Music123/v4/12/54/89/1254899e-af86-3ac3-51a9-fc66c713c09b/19UMGIM96402.rgb.jpg/600x600bb.jpg`,
  "kasey-chambers": `${I}Music124/v4/ce/ba/fc/cebafcef-8b29-0843-1f35-f5d015bfd2dc/mzi.idiukkti.jpg/600x600bb.jpg`,
  "wade-forster": `${I}AMCArtistImages221/v4/59/8f/29/598f2923-479a-ed93-0cd6-735fa6435588/ami-identity-d58bace039d55605e765094c8e3ae1b0-2026-08-14T01-40-24.927Z_cropped.png/600x600bb.png`,
  "the-wolfe-brothers": `${I}AMCArtistImages211/v4/cb/a3/57/cba35770-a061-fd98-cd38-45f5138ced22/71eb423f-1ab4-4d1d-80d0-408b0bde8b16_file_cropped.png/600x600bb.png`,
  "orville-peck": `${I}AMCArtistImages221/v4/0b/3d/39/0b3d3916-947c-2d2b-f235-5660f4e5d083/ami-identity-97227665eb291f8b643ebb93f1553efa-2026-07-24T22-45-20.858Z_cropped.png/600x600bb.png`,
  "carin-leon": `${I}Music221/v4/01/65/6d/01656d0e-9659-6d01-5422-aa92d102af5d/cover_050742358358.jpg/600x600bb.jpg`,
  "theuns-jordaan": `${I}Music124/v4/ec/12/70/ec127087-1c69-f690-0a5c-6d115c29271b/194491342647.jpg/600x600bb.jpg`,
};

function seedPhoto(id: string): string {
  return PHOTOS[id];
}

function q(name: string): string {
  return encodeURIComponent(name);
}

function searchLinks(name: string): Artist["links"] {
  return {
    spotify: `https://open.spotify.com/search/${q(name)}`,
    appleMusic: `https://music.apple.com/us/search?term=${q(name)}`,
    youtubeMusic: `https://music.youtube.com/search?q=${q(name)}`,
    amazonMusic: `https://music.amazon.com/search/${q(name)}`,
  };
}

function locked(
  rank: number,
  name: string,
  photo: string,
  bioShort: string,
  links: Artist["links"]
): Artist {
  return {
    id: name.toLowerCase().replace(/\s+/g, "-"),
    rank,
    name,
    country: "United States",
    photoUrl: photo,
    bioShort,
    pinned: true,
    links,
  };
}

function seed(
  id: string,
  rank: number,
  name: string,
  country: string,
  bioShort: string
): Artist {
  return {
    id,
    rank,
    name,
    country,
    photoUrl: seedPhoto(id),
    bioShort,
    pinned: false,
    links: searchLinks(name),
  };
}

export const SEED_ARTISTS: Artist[] = [
  locked(
    1,
    "Maddox Chain",
    PHOTOS["maddox-chain"],
    "Outlaw-soul troubadour from the red-dirt circuit — gravel voice, black hat, songs about dust and leaving.",
    {
      spotify: "https://open.spotify.com/artist/7ppocQQMtcAh0RSJ3HPFe7",
      appleMusic: "https://music.apple.com/us/artist/maddox-chain/1896651470",
      youtubeMusic: "https://music.youtube.com/search?q=Maddox%20Chain",
      amazonMusic: "https://music.amazon.com/search/Maddox%20Chain",
    }
  ),
  locked(
    2,
    "Raven Cross",
    PHOTOS["raven-cross"],
    "Honed on neon honky-tonks under a West-Texas sky — steel-guitar ballads with a midnight bite.",
    {
      spotify: "https://open.spotify.com/artist/3UnfIjSETTDtd4SmeW1P73",
      appleMusic: "https://music.apple.com/us/artist/raven-cross/6809192552",
      youtubeMusic: "https://music.youtube.com/search?q=Raven%20Cross",
      amazonMusic: "https://music.amazon.com/search/Raven%20Cross",
    }
  ),
  locked(
    3,
    "Wade Ashmore",
    PHOTOS["wade-ashmore"],
    "Back-roads country bard minted in small-town bars — high, lonesome harmonies over barstool poetry.",
    {
      spotify: "https://open.spotify.com/artist/48LURtTMQkG92LaVb7bt7g",
      appleMusic: "https://music.apple.com/us/artist/wade-ashmore/6807118544",
      youtubeMusic: "https://music.youtube.com/search?q=Wade%20Ashmore",
      amazonMusic: "https://music.amazon.com/search/Wade%20Ashmore",
    }
  ),

  seed("morgan-wallen", 4, "Morgan Wallen", "United States", "Chart-topping Tennessee hitmaker — Last Night, You Proof, Whiskey Glasses."),
  seed("luke-combs", 5, "Luke Combs", "United States", "Award-winning North Carolina powerhouse behind Beautiful Crazy and Forever After All."),
  seed("zach-bryan", 6, "Zach Bryan", "United States", "Former Navy man whose raw, poetic songs like Something in the Orange turned him into a phenomenon."),
  seed("chris-stapleton", 7, "Chris Stapleton", "United States", "Kentucky-born songwriter with a mountain-man voice — Tennessee Whiskey, White Horse."),
  seed("lainey-wilson", 8, "Lainey Wilson", "United States", "Louisiana transplant flying the bell-bottoms — Things a Man Oughta Know and Bell Bottom Country."),
  seed("cody-johnson", 9, "Cody Johnson", "United States", "Straight-shooting Texas rancher of Human and Til You Can't."),
  seed("kane-brown", 10, "Kane Brown", "United States", "Georgia-born boundary-pusher blending country, R&B and pop into stadium anthems."),
  seed("jelly-roll", 11, "Jelly Roll", "United States", "Nashville's redemption-story rapper-turned-country soul with a heart on his sleeve."),
  seed("carrie-underwood", 12, "Carrie Underwood", "United States", "Oklahoma's American-Idol-to-superstar vocal powerhouse — Before He Cheats."),
  seed("miranda-lambert", 13, "Miranda Lambert", "United States", "Texas firebrand and outlaw-country queen of The House That Built Me."),
  seed("luke-bryan", 14, "Luke Bryan", "United States", "Georgia party-and-heartbreak hitmaker — Play It Again and Crash My Party."),
  seed("kacey-musgraves", 15, "Kacey Musgraves", "United States", "Texas genre-bender behind Golden Hour and Follow Your Arrow."),
  seed("tyler-childers", 16, "Tyler Childers", "United States", "Appalachian bluegrass-country poet — Whitehouse Road and the Purgatory era."),
  seed("shania-twain", 17, "Shania Twain", "Canada", "The Queen of Country Pop — Man! I Feel Like a Woman! and You're Still the One."),
  seed("keith-urban", 18, "Keith Urban", "Australia", "Aussie-born, Nashville-based guitar virtuoso and arena headliner."),
  seed("megan-moroney", 19, "Megan Moroney", "United States", "Georgia breakout behind Tennessee Orange and Am I Okay?."),
  seed("riley-green", 20, "Riley Green", "United States", "Alabama honky-tonk traditionalist — There Was This Girl, I Wish Grandpas Never Died."),
  seed("shaboozey", 21, "Shaboozey", "United States", "Virginia's A Bar Song (Tipsy) — the country-rap crossover that ruled the charts."),
  seed("bailey-zimmerman", 22, "Bailey Zimmerman", "United States", "Illinois-raised hitmaker of Rock and a Hard Place and Fall in Love."),
  seed("jon-pardi", 23, "Jon Pardi", "United States", "California-born neo-traditionalist — Head Over Boots, Dirt on My Boots."),
  seed("hardys", 24, "HARDY", "United States", "Mississippi songwriter and aggro-country rocker behind truck."),
  seed("cody-jinks", 25, "Cody Jinks", "United States", "Texas outlaw with a devoted following — Loud and Heavy, Hippies and Cowboys."),
  seed("charley-crockett", 26, "Charley Crockett", "United States", "Gulf Coast revivalist mixing honky-tonk, blues and border roots."),
  seed("sierra-ferrell", 27, "Sierra Ferrell", "United States", "West Virginia roots wanderer with a vintage, far-traveled voice."),
  seed("ella-langley", 28, "Ella Langley", "United States", "Alabama up-and-comer — You Look Like You Love Me and its brooding heat."),
  seed("jimmie-allen", 29, "Jimmie Allen", "United States", "Trail-blazing country hitmaker — Best Shot and Freedom Was a Highway."),
  seed("brett-kissel", 30, "Brett Kissel", "Canada", "Canadian all-rounder and Mr. Entertainment — Airwaves, Let's Be the Reason."),
  seed("jade-eagleson", 31, "Jade Eagleson", "Canada", "Ontario traditionalist riding Rodeo Queen and Lucky."),
  seed("the-reklaws", 32, "The Reklaws", "Canada", "Sibling duo bringing stadium energy to Canadian country — Long Live the Night."),
  seed("nathan-carter", 33, "Nathan Carter", "Ireland", "Liverpool-born Irish showband king — Wagon Wheel and The Jukebox."),
  seed("derek-ryan", 34, "Derek Ryan", "Ireland", "Carlow-born Irish country-pop favourite — God Knows, Considering."),
  seed("the-shires", 35, "The Shires", "United Kingdom", "England's trail-blazing country duo of Ben Earle and Crissie Rhodes."),
  seed("ward-thomas", 36, "Ward Thomas", "United Kingdom", "Hampshire sisters bringing folk-country to the UK mainstream."),
  seed("shane-nicholson", 37, "Shane Nicholson", "Australia", "ARIA-winning Australian roots-country songwriter and picker."),
  seed("kasey-chambers", 38, "Kasey Chambers", "Australia", "Australia's quintessential country songstress — The Captain, Not Pretty Enough."),
  seed("wade-forster", 39, "Wade Forster", "Australia", "Riverina-bred storyteller of the wide-open Australian country."),
  seed("the-wolfe-brothers", 40, "The Wolfe Brothers", "Australia", "Tasmanian band keeping Aussie country loud — It's All the Same to Me."),
  seed("orville-peck", 41, "Orville Peck", "Canada", "Masked, mysterious crooner reimagining outcast country in gold fringe."),
  seed("carin-leon", 42, "Carín León", "Mexico", "Sonora, Mexico's regional-Mexico superstar crossing into country duets."),
  seed("theuns-jordaan", 43, "Theuns Jordaan", "South Africa", "South African boeremusiek-country legend and heartfelt Afrikaans anthems."),
];