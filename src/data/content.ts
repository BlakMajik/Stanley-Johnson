export interface MusicTrack {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  category: string;
  youtubeId?: string;
  youtubeUrl?: string;
  distrokidUrl?: string;
  historicalNote?: string;
  featuredQuote?: string;
}

export interface BookAudience {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface BookTheme {
  title: string;
  description: string;
}

export interface InquiryCategory {
  id: string;
  label: string;
  description: string;
}

export interface SiteContent {
  brand: {
    name: string;
    fullName: string;
    headline: string;
    supportingCopy: string;
    shortBio: string;
    portraitHero: string;
    portraitAbout: string;
    portraitCasual: string;
  };
  socialLinks: {
    youtube: string;
    facebook: string;
    youtubeHandle: string;
    facebookHandle: string;
  };
  pillars: Array<{
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
  }>;
  musicCatalog: MusicTrack[];
  book: {
    title: string;
    fullTitle: string;
    subtitle: string;
    author: string;
    publisher: string;
    amazonKindleUrl: string;
    officialDomainNote: string;
    synopsis: string;
    editorialExcerpt: string;
    audiences: BookAudience[];
    themes: BookTheme[];
  };
  biography: {
    title: string;
    lead: string;
    paragraphs: string[];
    coreValues: Array<{
      title: string;
      description: string;
    }>;
    backgroundPillars: Array<{
      area: string;
      description: string;
    }>;
  };
  inquiryCategories: InquiryCategory[];
}

const base = import.meta.env.BASE_URL || '/';
const asset = (path: string) => `${base.endsWith('/') ? base : base + '/'}${path.replace(/^\//, '')}`;

export const siteContent: SiteContent = {
  brand: {
    name: "Stanley Johnson",
    fullName: "Stanley E. Johnson, Jr.",
    headline: "Faith in the music. Purpose in the message.",
    supportingCopy:
      "Meet Stanley Johnson, gospel artist and author of Dadfirmations, sharing encouragement through music and the words we pass on.",
    shortBio:
      "Stanley Johnson is a gospel recording artist, author, and worship leader dedicated to uplifting lives through Christ-centered music, authentic fatherhood reflections, and meaningful church and community conversations.",
    portraitHero: asset("images/stanley_hero_portrait.jpg"),
    portraitAbout: asset("images/stanley_about_portrait.png"),
    portraitCasual: asset("images/stanley_casual_portrait.jpg"),
  },
  socialLinks: {
    youtube: "https://www.youtube.com/@TheStanleyJMusic",
    facebook: "https://www.facebook.com/StanleyJWorship/",
    youtubeHandle: "@TheStanleyJMusic",
    facebookHandle: "StanleyJWorship",
  },
  pillars: [
    {
      id: "music",
      title: "Music & Worship",
      subtitle: "Soulful Gospel Artistry",
      description:
        "Passionate, Christ-centered music crafted to inspire faith, bring comfort, and lead congregations and listeners into sincere worship.",
      icon: "Music",
    },
    {
      id: "fatherhood",
      title: "Fatherhood & Authorship",
      subtitle: "Dadfirmations",
      description:
        "Words of affirmation, character, and guidance written from a father to a son, nurturing the next generation of young men with dignity and purpose.",
      icon: "BookOpen",
    },
    {
      id: "faith",
      title: "Faith & Encouragement",
      subtitle: "Everyday Inspiration",
      description:
        "Thoughtful, grounded reflections that meet people where they are, offering hope and spiritual resilience through life's seasons.",
      icon: "Sparkles",
    },
    {
      id: "ministry",
      title: "Ministry & Education",
      subtitle: "Church & Leadership Development",
      description:
        "A seasoned background in worship education, leadership workshops, and church consultation to strengthen ministry teams.",
      icon: "Users",
    },
  ],
  musicCatalog: [
    {
      id: "trading-chains",
      title: "Trading Chains",
      subtitle: "Featured Single",
      description:
        "A resonant declaration of spiritual freedom, redemption, and personal renewal. 'Trading Chains' captures soulful gospel vocals paired with a message of releasing burdens and embracing grace.",
      coverImage: asset("images/trading_chains_cover.jpg"),
      category: "Single Release",
      distrokidUrl: "https://distrokid.com/hyperfollow/stanleyjohnson/trading-chains",
      featuredQuote: "A testimony of freedom and purpose expressed through gospel music.",
    },
    {
      id: "hiding-place",
      title: "Hiding Place",
      subtitle: "Worship Anthem & Video",
      description:
        "A heartfelt, contemplative worship ballad highlighting God as a refuge in times of trial and uncertainty. Featured historically in the Journal of Gospel Music.",
      coverImage: asset("images/hiding_place_thumb.jpg"),
      category: "Official Music Video",
      youtubeId: "GLhcAwstDTg",
      youtubeUrl: "https://www.youtube.com/watch?v=GLhcAwstDTg",
      historicalNote: "Reviewed in the Journal of Gospel Music (June 2010)",
      featuredQuote: "A reverent reminder of sanctuary, peace, and unwavering trust.",
    },
    {
      id: "beyond-me",
      title: "Beyond Me",
      subtitle: "Title Track",
      description:
        "An inspiring track centering on surrender, divine guidance, and trusting God with the steps ahead. Blends contemporary gospel arrangements with heartfelt lyricism.",
      coverImage: asset("images/beyond_me_thumb.jpg"),
      category: "Official Audio / Video",
      youtubeId: "2YN4WEJrFgs",
      youtubeUrl: "https://www.youtube.com/watch?v=2YN4WEJrFgs",
      featuredQuote: "Living with a vision greater than self.",
    },
  ],
  book: {
    title: "Dadfirmations",
    fullTitle: "Dadfirmations: Affirmations From a Father to a Son",
    subtitle: "Affirmations From a Father to a Son",
    author: "Stanley Johnson",
    publisher: "The AJS Group LLC",
    amazonKindleUrl:
      "https://www.amazon.com/Dadfirmations-Affirmations-Father-Stanley-Johnson-ebook/dp/B08VSB2H9S",
    officialDomainNote: "dadfirmations.com",
    synopsis:
      "Dadfirmations is a collection of letters and affirmations addressing faith, identity, encouragement, and the value within young men, written from a father's perspective. It serves as an intentional guide for fathers, mentors, and families who desire to speak life, character, and strength into the sons they love.",
    editorialExcerpt:
      "Words spoken in love and faith have the power to shape a young man's destiny. Dadfirmations provides the spiritual foundation and heartfelt reassurance every son needs as he navigates his journey.",
    audiences: [
      {
        title: "Fathers & Sons",
        subtitle: "Deepening the Bond",
        description:
          "Practical, heartfelt language to help fathers articulate love, expectations, faith, and unconditional belief in their boys.",
        iconName: "HeartHandshake",
      },
      {
        title: "Mentors & Youth Leaders",
        subtitle: "Guiding the Next Generation",
        description:
          "A structured resource for youth workers, pastors, and mentors leading discussions on manhood, integrity, and self-worth.",
        iconName: "Compass",
      },
      {
        title: "Families & Gift Givers",
        subtitle: "A Meaningful Milestone Gift",
        description:
          "A thoughtful keepsake for birthdays, graduations, or father-son milestone celebrations that will be cherished for years.",
        iconName: "Gift",
      },
      {
        title: "Churches & Community Groups",
        subtitle: "Men's Ministry Conversations",
        description:
          "An engaging foundation for church men's breakfasts, parenting workshops, and community fatherhood initiatives.",
        iconName: "Building2",
      },
    ],
    themes: [
      {
        title: "Faith & Identity",
        description: "Rooting personal worth in God's design rather than external pressures.",
      },
      {
        title: "Character & Resilience",
        description: "Navigating setbacks with moral courage, patience, and unwavering discipline.",
      },
      {
        title: "The Power of the Spoken Word",
        description: "Transforming the father-son dialogue from silence to active, life-giving affirmation.",
      },
      {
        title: "Legacy & Generational Strength",
        description: "Passing down spiritual wisdom, family honor, and enduring purpose.",
      },
    ],
  },
  biography: {
    title: "About Stanley Johnson",
    lead:
      "Connecting faith, music, and fatherhood through authentic expression and intentional encouragement.",
    paragraphs: [
      "Stanley E. Johnson, Jr. is a gospel recording artist, author, and worship leader whose work centers on spiritual encouragement, artistic authenticity, and the strength of the family.",
      "As a musical artist, Stanley brings a soulful and reverent voice to gospel music. His catalog—including releases like 'Trading Chains,' 'Hiding Place,' and 'Beyond Me'—reflects a deep commitment to music that not only sounds compelling but also ministers directly to the listener's heart.",
      "His authorship with 'Dadfirmations: Affirmations From a Father to a Son' grew from an earnest desire to provide fathers, mentors, and families with practical, faith-rooted words to build up young men. By framing fatherhood through vulnerability, wisdom, and spiritual guidance, Stanley invites readers into purposeful conversations about character and generational legacy.",
      "Stanley's background includes work in music ministry, worship education, leadership development, and church consultation. Whether leading worship, sharing insights on fatherhood, or facilitating ministry workshops, he approaches every opportunity with a passion for equipping individuals and strengthening communities.",
    ],
    coreValues: [
      {
        title: "Authenticity",
        description: "Honest expression in both worship and the everyday walk of faith.",
      },
      {
        title: "Faith & Hope",
        description: "An unwavering belief in God's grace and redemptive power.",
      },
      {
        title: "Family & Manhood",
        description: "Championing fathers and cultivating character in young men.",
      },
      {
        title: "Excellence",
        description: "Approaching artistic, literary, and ministry callings with care and diligence.",
      },
    ],
    backgroundPillars: [
      {
        area: "Worship & Gospel Music",
        description:
          "Songwriting, live worship leadership, and recorded releases that point hearts to Christ.",
      },
      {
        area: "Authorship & Fatherhood Advocacy",
        description:
          "Creating resources like Dadfirmations to enrich father-son relationships and mentorship programs.",
      },
      {
        area: "Ministry Consultation & Workshops",
        description:
          "Historical experience in church consulting, worship team clinics, and leadership development.",
      },
    ],
  },
  inquiryCategories: [
    {
      id: "worship_music",
      label: "Music or Worship Appearance",
      description: "Guest worship leading, concert performances, or musical ministry engagements.",
    },
    {
      id: "dadfirmations_talk",
      label: "Dadfirmations Author Conversation",
      description: "Keynotes, panel discussions, book talks, or fatherhood gatherings.",
    },
    {
      id: "church_workshop",
      label: "Workshop or Church Consultation",
      description: "Worship team workshops, vocal clinics, or ministry leadership consultation.",
    },
    {
      id: "media_interview",
      label: "Interview or Media Request",
      description: "Podcasts, press, radio, broadcast, or print media inquiries.",
    },
    {
      id: "general_inquiry",
      label: "Other Inquiry",
      description: "General correspondence or collaborative ideas.",
    },
  ],
};
