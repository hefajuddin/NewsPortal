import { Article, Comment } from '../types';

export const generateMockArticles = (): Article[] => {
  return [
    {
      id: '1',
      title: 'Tech Giants Unveil New AI Innovations at Annual Conference',
      slug: 'tech-giants-unveil-new-ai-innovations',
      content: `
        <p>In a landmark event for the tech industry, leading companies showcased their latest AI advancements at the annual TechWorld Conference yesterday. The presentations revealed significant breakthroughs in natural language processing, computer vision, and machine learning algorithms.</p>
        
        <p>Google introduced its next-generation language model, which demonstrates unprecedented capabilities in understanding and generating human-like text. "This represents a quantum leap in AI's ability to comprehend context and nuance," said Dr. Eliza Montgomery, Google's AI Research Director.</p>
        
        <p>Meanwhile, Microsoft revealed a new computer vision system capable of identifying objects with near-perfect accuracy even in challenging lighting conditions or partially obscured views. The technology has immediate applications in autonomous vehicles, medical imaging, and security systems.</p>
        
        <p>Not to be outdone, Apple announced a suite of machine learning tools designed to protect user privacy while offering powerful personalization features. "We believe AI can be both intelligent and respectful of privacy," Apple CEO Tim Chen stated during his keynote.</p>
        
        <p>Industry analysts note that these advancements signal an acceleration in practical AI applications that will likely reach consumers within the next 12-18 months. "What we're seeing is the transition from experimental AI to systems that will fundamentally change how we interact with technology in our daily lives," explained tech analyst Joseph Rivera.</p>
        
        <p>The conference also featured discussions about ethical AI development, with several companies announcing new frameworks for addressing bias, transparency, and accountability in their AI systems.</p>
      `,
      excerpt: 'Leading technology companies revealed groundbreaking artificial intelligence advancements at the annual TechWorld Conference, showcasing innovations in language processing, computer vision, and privacy-focused machine learning.',
      imageUrl: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'technology',
      author: 'Michael Jordan',
      publishDate: new Date('2023-11-15'),
      tags: ['AI', 'Machine Learning', 'Technology', 'Innovation'],
      featured: true,
      language: 'en'
    },
    {
      id: '2',
      title: 'Global Climate Summit Reaches Landmark Agreement',
      slug: 'global-climate-summit-agreement',
      content: `
        <p>After two weeks of intense negotiations, delegates from 195 countries reached a historic agreement at the Global Climate Summit today. The pact, known as the "Paris Evolution Framework," establishes more ambitious targets for reducing greenhouse gas emissions and provides substantial funding for climate adaptation in vulnerable nations.</p>
        
        <p>The agreement commits developed nations to achieve carbon neutrality by 2040—a decade earlier than previously pledged—and requires emerging economies to peak their emissions by 2030. Additionally, a $100 billion annual fund will be established to help developing countries transition to clean energy and adapt to climate impacts already underway.</p>
        
        <p>"This represents the most significant advancement in global climate cooperation since the original Paris Agreement," said United Nations Secretary-General Maya Patel. "While challenges remain, we now have a concrete pathway to limit warming to 1.5 degrees Celsius."</p>
        
        <p>The breakthrough came after several days of deadlock, when a coalition of small island nations and European countries proposed a compromise that addressed concerns from both developed and developing nations. The final text includes mechanisms for technology transfer, carbon markets, and regular progress reviews.</p>
        
        <p>Climate scientists cautiously welcomed the agreement. "If fully implemented, these measures could potentially bend the warming curve," said Dr. Carlos Menendez of the Global Climate Research Institute. "However, the timeline for action remains extremely tight."</p>
        
        <p>Business leaders also responded positively, with many citing the agreement's clear signals for investment in renewable energy and sustainable infrastructure. "This provides the policy certainty that markets need," said Emma Chen, CEO of GreenFuture Investments.</p>
        
        <p>Implementation begins immediately, with countries required to submit updated climate action plans within 12 months and establish domestic policies to achieve their new targets.</p>
      `,
      excerpt: 'Nearly 200 nations have signed a landmark climate agreement that accelerates emission reduction timelines and establishes a $100 billion fund for climate adaptation in developing countries.',
      imageUrl: 'https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'politics',
      author: 'Sarah Johnson',
      publishDate: new Date('2023-11-12'),
      tags: ['Climate Change', 'Global Politics', 'Environment', 'Paris Agreement'],
      featured: true,
      language: 'en'
    },
    {
      id: '3',
      title: 'Revolutionary Cancer Treatment Shows Promising Results in Clinical Trials',
      slug: 'revolutionary-cancer-treatment-trials',
      content: `
        <p>A groundbreaking cancer treatment that combines immunotherapy with targeted genetic manipulation has shown remarkable results in early clinical trials, researchers announced yesterday. The therapy, developed by a team at the National Medical Research Center, demonstrated an 87% response rate in patients with advanced forms of previously untreatable cancers.</p>
        
        <p>The treatment, known as CRISPR-enhanced Immunological Targeting (CEIT), uses precision genetic editing to modify a patient's immune cells, enabling them to recognize and attack cancer cells that had previously evaded detection. What makes this approach particularly promising is its adaptability to multiple cancer types.</p>
        
        <p>"We're seeing responses in patients with advanced melanoma, lung, and pancreatic cancers who had exhausted all other treatment options," explained Dr. Rebecca Chang, who led the research team. "Many patients in our trial have experienced complete remission, though we're cautious about using the word 'cure' at this early stage."</p>
        
        <p>The trial included 64 patients with stage 4 cancers who had not responded to conventional treatments. After six months, 56 patients showed significant tumor reduction, with 28 experiencing complete disappearance of detectable cancer. Side effects were described as manageable and less severe than those typically associated with chemotherapy.</p>
        
        <p>Medical experts not involved in the study expressed optimism tempered with caution. "These results are genuinely exciting," said Dr. Marcus Williams, oncology director at Memorial Hospital. "However, we need larger trials with longer follow-up periods to understand the durability of responses and identify which patients will benefit most."</p>
        
        <p>The research team is now preparing for an expanded phase 3 trial involving multiple research centers across North America, Europe, and Asia. If successful, the treatment could receive expedited approval from regulatory agencies, potentially becoming available to patients within three years.</p>
        
        <p>"This represents one of the most significant advances in cancer treatment I've seen in my 30-year career," said Dr. Chang. "We're cautiously optimistic that we're opening a new chapter in cancer therapy."</p>
      `,
      excerpt: 'A novel cancer therapy combining CRISPR gene editing with immunotherapy has shown an 87% response rate in patients with advanced cancers that were previously considered untreatable.',
      imageUrl: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'health',
      author: 'Dr. James Wilson',
      publishDate: new Date('2023-11-10'),
      tags: ['Cancer Research', 'Medical Breakthrough', 'Immunotherapy', 'Health'],
      featured: false,
      language: 'en'
    },
    {
      id: '4',
      title: 'Major Cryptocurrency Exchange Announces Regulatory Framework Adoption',
      slug: 'cryptocurrency-exchange-regulatory-framework',
      content: `
        <p>Global cryptocurrency exchange BitFinex announced today that it will voluntarily adopt a comprehensive regulatory framework, setting a new precedent for the largely unregulated digital asset industry. The move comes amid increasing scrutiny from financial authorities worldwide and growing concerns about consumer protection.</p>
        
        <p>The framework, developed in consultation with former regulators and compliance experts, includes enhanced know-your-customer procedures, transparent fee structures, segregation of customer assets, regular third-party audits, and insurance coverage for digital assets held in custody.</p>
        
        <p>"The future of cryptocurrency depends on establishing trust and accountability," said Elena Rodriguez, CEO of BitFinex. "We're taking this proactive step because we believe regulation is inevitable, and exchanges that embrace responsible practices will ultimately succeed."</p>
        
        <p>The announcement was welcomed by several financial authorities. "This is a positive development that aligns with the direction regulators have been advocating," said Marcus Johnson, commissioner at the Financial Markets Authority. "Self-regulation, when robust and transparent, can complement official oversight."</p>
        
        <p>BitFinex's decision follows several high-profile failures of cryptocurrency platforms that left customers unable to access their funds. The exchange will also establish a $200 million consumer protection fund to compensate users in the event of security breaches.</p>
        
        <p>Industry analysts suggest the move could pressure other major exchanges to follow suit. "This creates a competitive differentiation around trust and security," explained cryptocurrency researcher Sophia Chen. "Exchanges that maintain the status quo may find themselves at a disadvantage as institutional investors and mainstream users enter the market."</p>
        
        <p>BitFinex will begin implementing the framework immediately, with full compliance expected within six months. The company also committed to publishing quarterly compliance reports and submitting to annual security audits by independent firms.</p>
      `,
      excerpt: 'Leading cryptocurrency exchange BitFinex has announced it will voluntarily implement a comprehensive regulatory framework, including enhanced KYC procedures, regular audits, and a $200 million consumer protection fund.',
      imageUrl: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'business',
      author: 'Robert Chen',
      publishDate: new Date('2023-11-08'),
      tags: ['Cryptocurrency', 'Regulation', 'Finance', 'Bitcoin'],
      featured: false,
      language: 'en'
    },
    {
      id: '5',
      title: 'International Football Championship Finals Set After Dramatic Semi-Finals',
      slug: 'international-football-championship-finals',
      content: `
        <p>The stage is set for a historic International Football Championship final after two thrilling semi-final matches determined the last teams standing. Brazil and France will face off in Sunday's championship match after defeating their respective opponents in dramatic fashion.</p>
        
        <p>Brazil secured their place with a nail-biting 3-2 victory over Germany that required extra time to decide. The match seemed destined for a penalty shootout until Brazilian striker Carlos Silva scored a spectacular overhead kick in the 118th minute, sending Brazilian fans into ecstasy.</p>
        
        <p>"This team has shown extraordinary heart throughout the tournament," said Brazil's coach Roberto Santos. "We've faced adversity in several matches and always found a way to prevail. The final will be our greatest challenge yet."</p>
        
        <p>France, meanwhile, defeated Spain 2-0 in a tactically masterful performance led by midfielder Antoine Dubois, who orchestrated both goals while controlling the tempo throughout the match. France's defense has been impenetrable, not conceding a single goal in their last four matches.</p>
        
        <p>"We've built our success on defensive discipline and lightning-fast counterattacks," explained France's manager Jean Lefevre. "Against Brazil's creative flair, this approach will be tested to its limits."</p>
        
        <p>The final represents a classic contrast in football philosophies: Brazil's expressive, attack-minded style against France's tactical precision and defensive solidity. It also features a compelling individual rivalry between Brazilian phenomenon Thiago Mendes and French captain Lucas Bernard, widely considered the two best players in world football.</p>
        
        <p>Sunday's match at the iconic Olympia Stadium is expected to draw a global television audience of over 2 billion viewers. Ticket prices on secondary markets have reached unprecedented levels, with prime seats reportedly selling for upwards of $10,000.</p>
        
        <p>The third-place match between Germany and Spain will take place on Saturday, providing both teams an opportunity to end their tournament run on a positive note.</p>
      `,
      excerpt: 'Brazil and France have advanced to the International Football Championship final after dramatic semi-final victories. Brazil defeated Germany 3-2 in extra time, while France shut out Spain 2-0 with tactical precision.',
      imageUrl: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'sports',
      author: 'Carlos Rodriguez',
      publishDate: new Date('2023-11-05'),
      tags: ['Football', 'Sports', 'World Cup', 'International Championship'],
      featured: false,
      language: 'en'
    },
    {
      id: '6',
      title: 'Award-Winning Director Announces Groundbreaking Virtual Reality Film Series',
      slug: 'director-announces-vr-film-series',
      content: `
        <p>Oscar-winning director Christopher Nolan announced today his plans to create a groundbreaking film series specifically designed for virtual reality platforms. The project, titled "Dimensions," will consist of five interconnected episodes that push the boundaries of storytelling in the emerging medium.</p>
        
        <p>"Cinema has always evolved with technology, from silent films to sound, from black and white to color, from film to digital," Nolan explained at a press conference in Los Angeles. "Virtual reality represents the next frontier—a completely immersive experience where the line between observer and participant blurs."</p>
        
        <p>Unlike traditional VR experiences that often emphasize gaming elements, "Dimensions" will focus on narrative storytelling while taking full advantage of the medium's unique capabilities. Viewers will be able to experience the story from multiple perspectives and even influence certain aspects of the narrative, though Nolan emphasized that the core story will remain consistent.</p>
        
        <p>"We're not creating a game or a choose-your-own-adventure," he clarified. "This is cinema evolved for a new medium, with a carefully crafted narrative that respects the audience's intelligence while offering unprecedented immersion."</p>
        
        <p>The series will feature an ensemble cast including Viola Davis, Idris Elba, and Daniel Kaluuya, with filming scheduled to begin in January. The production will utilize custom-designed camera systems and cutting-edge virtual production techniques similar to those pioneered in "The Mandalorian."</p>
        
        <p>Major technology companies are already vying for distribution rights, though Nolan indicated his commitment to making the series available across all major VR platforms. "This shouldn't be locked to any single device or ecosystem," he stated. "The future of immersive storytelling should be accessible to everyone."</p>
        
        <p>Film critics and VR experts have responded enthusiastically to the announcement. "Nolan bringing his visionary approach to VR could be the catalyst this medium needs to be taken seriously as an art form," said film historian Eleanor Richardson. "This could be the 'Citizen Kane' moment for virtual reality storytelling."</p>
        
        <p>The first episode of "Dimensions" is expected to release in late 2024, with subsequent episodes following monthly. Nolan suggested that a traditional film adaptation might follow the VR release, though he emphasized it would be "a fundamentally different experience."</p>
      `,
      excerpt: 'Acclaimed filmmaker Christopher Nolan has announced "Dimensions," a five-part narrative film series designed specifically for virtual reality platforms, starring Viola Davis, Idris Elba, and Daniel Kaluuya.',
      imageUrl: 'https://images.pexels.com/photos/7240528/pexels-photo-7240528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'entertainment',
      author: 'Jennifer Parker',
      publishDate: new Date('2023-11-02'),
      tags: ['Entertainment', 'Virtual Reality', 'Film', 'Technology'],
      featured: false,
      language: 'en'
    },
    {
      id: '7',
      title: 'টেক জায়ান্টরা বার্ষিক কনফারেন্সে নতুন এআই উদ্ভাবন প্রকাশ করেছে',
      slug: 'tech-giants-unveil-new-ai-innovations-bn',
      content: `
        <p>প্রযুক্তি শিল্পের একটি মাইলফলক ঘটনায়, শীর্ষস্থানীয় কোম্পানিগুলি গতকাল বার্ষিক টেকওয়ার্ল্ড কনফারেন্সে তাদের সর্বশেষ এআই অগ্রগতি প্রদর্শন করেছে। উপস্থাপনাগুলি প্রাকৃতিক ভাষা প্রক্রিয়াকরণ, কম্পিউটার ভিশন এবং মেশিন লার্নিং অ্যালগরিদমগুলিতে উল্লেখযোগ্য অগ্রগতি প্রকাশ করেছে।</p>
        
        <p>Google তার পরবর্তী প্রজন্মের ভাষা মডেল প্রবর্তন করেছে, যা মানুষের মতো টেক্সট বোঝার এবং তৈরি করার ক্ষেত্রে অভূতপূর্ব সক্ষমতা প্রদর্শন করে। "এটি প্রসঙ্গ এবং সূক্ষ্মতা বোঝার ক্ষেত্রে এআই-এর ক্ষমতায় একটি কোয়ান্টাম লিপ প্রতিনিধিত্ব করে," বলেছেন Google-এর এআই গবেষণা পরিচালক ডঃ এলিজা মন্টগোমেরি।</p>
        
        <p>ইতিমধ্যে, Microsoft চ্যালেঞ্জিং আলোকসজ্জা বা আংশিকভাবে আচ্ছাদিত দৃশ্যগুলিতেও প্রায় নিখুঁত সঠিকতার সাথে বস্তু চিহ্নিত করতে সক্ষম একটি নতুন কম্পিউটার ভিশন সিস্টেম প্রকাশ করেছে। প্রযুক্তির স্বয়ংক্রিয় যানবাহন, মেডিকেল ইমেজিং এবং নিরাপত্তা সিস্টেমে অবিলম্বে প্রয়োগ রয়েছে।</p>
        
        <p>পিছিয়ে না থেকে, Apple ব্যবহারকারীর গোপনীয়তা রক্ষা করার সময় শক্তিশালী ব্যক্তিগতকরণ বৈশিষ্ট্য অফার করার জন্য ডিজাইন করা মেশিন লার্নিং টুলের একটি সুইট ঘোষণা করেছে। "আমরা বিশ্বাস করি যে AI বুদ্ধিমান এবং গোপনীয়তার প্রতি সম্মানজনক উভয়ই হতে পারে," তার কীনোট চলাকালীন Apple CEO টিম চেন বলেছেন।</p>
        
        <p>শিল্প বিশ্লেষকরা উল্লেখ করেছেন যে এই অগ্রগতিগুলি ব্যবহারিক AI অ্যাপ্লিকেশনগুলিতে একটি ত্বরণকে সংকেত দেয় যা সম্ভবত আগামী 12-18 মাসের মধ্যে ভোক্তাদের কাছে পৌঁছাবে। "আমরা যা দেখছি তা হল পরীক্ষামূলক AI থেকে এমন সিস্টেমে রূপান্তর যা আমাদের দৈনন্দিন জীবনে প্রযুক্তির সাথে আমাদের ইন্টারঅ্যাকশনকে মৌলিকভাবে পরিবর্তন করবে," প্রযুক্তি বিশ্লেষক জোসেফ রিভেরা ব্যাখ্যা করেছেন।</p>
        
        <p>সম্মেলনে নৈতিক AI বিকাশ সম্পর্কে আলোচনাও অন্তর্ভুক্ত ছিল, যেখানে বেশ কয়েকটি কোম্পানি তাদের AI সিস্টেমে পক্ষপাত, স্বচ্ছতা এবং জবাবদিহিতা মোকাবেলার জন্য নতুন কাঠামো ঘোষণা করেছে।</p>
      `,
      excerpt: 'প্রধান প্রযুক্তি সংস্থাগুলি বার্ষিক টেকওয়ার্ল্ড কনফারেন্সে গ্রাউন্ডব্রেকিং কৃত্রিম বুদ্ধিমত্তার অগ্রগতি প্রকাশ করেছে, ভাষা প্রক্রিয়াকরণ, কম্পিউটার ভিশন এবং গোপনীয়তা-কেন্দ্রিক মেশিন লার্নিংয়ে উদ্ভাবন প্রদর্শন করেছে।',
      imageUrl: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'technology',
      author: 'রাহিম খান',
      publishDate: new Date('2023-11-15'),
      tags: ['AI', 'Machine Learning', 'Technology', 'Innovation'],
      featured: true,
      language: 'bn'
    },
    {
      id: '8',
      title: 'বিশ্ব জলবায়ু সম্মেলন ঐতিহাসিক চুক্তিতে পৌঁছেছে',
      slug: 'global-climate-summit-agreement-bn',
      content: `
        <p>দুই সপ্তাহের তীব্র আলোচনার পর, আজ বিশ্ব জলবায়ু সম্মেলনে 195টি দেশের প্রতিনিধিরা একটি ঐতিহাসিক চুক্তিতে পৌঁছেছেন। "প্যারিস এভোলিউশন ফ্রেমওয়ার্ক" নামে পরিচিত এই চুক্তি, গ্রিনহাউস গ্যাস নির্গমন হ্রাসের জন্য আরও উচ্চাভিলাষী লক্ষ্য নির্ধারণ করে এবং দুর্বল দেশগুলিতে জলবায়ু অভিযোজনের জন্য উল্লেখযোগ্য অর্থায়ন প্রদান করে।</p>
        
        <p>চুক্তিটি উন্নত দেশগুলিকে 2040 সালের মধ্যে কার্বন নিরপেক্ষতা অর্জন করতে প্রতিশ্রুতিবদ্ধ করে—পূর্বে প্রতিশ্রুত একটি দশক আগে—এবং উদীয়মান অর্থনীতিগুলিকে 2030 সালের মধ্যে তাদের নির্গমন শীর্ষে পৌঁছাতে হবে। এছাড়াও, উন্নয়নশীল দেশগুলিকে পরিষ্কার শক্তিতে রূপান্তর করতে এবং ইতিমধ্যে চলমান জলবায়ু প্রভাবগুলির সাথে খাপ খাইয়ে নিতে সাহায্য করার জন্য 100 বিলিয়ন ডলারের বার্ষিক তহবিল প্রতিষ্ঠা করা হবে।</p>
        
        <p>"এটি মূল প্যারিস চুক্তির পর থেকে বৈশ্বিক জলবায়ু সহযোগিতায় সবচেয়ে উল্লেখযোগ্য অগ্রগতি প্রতিনিধিত্ব করে," জাতিসংঘের মহাসচিব মায়া প্যাটেল বলেছেন। "যদিও চ্যালেঞ্জ রয়েছে, আমাদের এখন উষ্ণতা 1.5 ডিগ্রি সেলসিয়াসে সীমিত করার জন্য একটি সুনির্দিষ্ট পথ রয়েছে।"</p>
        
        <p>ব্রেকথ্রু আসে কয়েক দিন ধরে চলা গতিরোধের পর, যখন ছোট দ্বীপ দেশ এবং ইউরোপীয় দেশগুলির একটি জোট উন্নত এবং উন্নয়নশীল উভয় দেশের উদ্বেগ সমাধান করে এমন একটি আপোষ প্রস্তাব করে। চূড়ান্ত পাঠ্যে প্রযুক্তি হস্তান্তর, কার্বন বাজার এবং নিয়মিত অগ্রগতি পর্যালোচনার জন্য ব্যবস্থা অন্তর্ভুক্ত রয়েছে।</p>
        
        <p>জলবায়ু বিজ্ঞানীরা সতর্কতার সাথে চুক্তিকে স্বাগত জানিয়েছেন। "যদি পুরোপুরি বাস্তবায়িত হয়, এই ব্যবস্থাগুলি সম্ভাব্যভাবে উষ্ণতার বক্ররেখাকে বাঁকাতে পারে," গ্লোবাল ক্লাইমেট রিসার্চ ইনস্টিটিউটের ডঃ কার্লোস মেনেন্ডেজ বলেছেন। "যাইহোক, কর্মের সময়সীমা অত্যন্ত সংকীর্ণ থাকে।"</p>
        
        <p>ব্যবসায়িক নেতারাও ইতিবাচকভাবে সাড়া দিয়েছেন, অনেকে নবায়নযোগ্য শক্তি এবং টেকসই অবকাঠামোতে বিনিয়োগের জন্য চুক্তির স্পষ্ট সংকেতগুলি উল্লেখ করেছেন। "এটি বাজারের প্রয়োজনীয় নীতি নিশ্চয়তা প্রদান করে," GreenFuture Investments-এর CEO এমা চেন বলেছেন।</p>
        
        <p>বাস্তবায়ন অবিলম্বে শুরু হয়, দেশগুলিকে 12 মাসের মধ্যে আপডেট করা জলবায়ু কর্ম পরিকল্পনা জমা দিতে হবে এবং তাদের নতুন লক্ষ্য অর্জনের জন্য দেশীয় নীতি প্রতিষ্ঠা করতে হবে।</p>
      `,
      excerpt: 'প্রায় 200টি দেশ একটি ঐতিহাসিক জলবায়ু চুক্তিতে স্বাক্ষর করেছে যা নির্গমন হ্রাসের সময়সীমা ত্বরান্বিত করে এবং উন্নয়নশীল দেশগুলিতে জলবায়ু অভিযোজনের জন্য একটি $100 বিলিয়ন তহবিল প্রতিষ্ঠা করে।',
      imageUrl: 'https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'politics',
      author: 'আশরাফুল হক',
      publishDate: new Date('2023-11-12'),
      tags: ['Climate Change', 'Global Politics', 'Environment', 'Paris Agreement'],
      featured: true,
      language: 'bn'
    }
  ];
};

export const generateMockComments = (): Comment[] => {
  return [
    {
      id: '1',
      articleId: '1',
      name: 'John Smith',
      email: 'john@example.com',
      content: 'This is fascinating! I wonder how these AI advancements will affect jobs in the creative industries.',
      createdAt: new Date('2023-11-16T10:23:00')
    },
    {
      id: '2',
      articleId: '1',
      name: 'Lisa Johnson',
      email: 'lisa@example.com',
      content: 'I\'m excited about the privacy-focused ML tools. It\'s about time companies prioritized user privacy alongside innovation.',
      createdAt: new Date('2023-11-16T11:45:00')
    },
    {
      id: '3',
      articleId: '2',
      name: 'Michael Chen',
      email: 'michael@example.com',
      content: 'While this agreement is a step in the right direction, I worry that the timelines are still too conservative given the acceleration of climate impacts we\'re already seeing.',
      createdAt: new Date('2023-11-13T09:12:00')
    },
    {
      id: '4',
      articleId: '2',
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      content: 'The $100 billion fund is crucial. Developing nations need financial support to transition their economies without sacrificing growth and poverty reduction goals.',
      createdAt: new Date('2023-11-14T16:30:00')
    },
    {
      id: '5',
      articleId: '3',
      name: 'Dr. Robert Brown',
      email: 'robert@example.com',
      content: 'As an oncologist, I\'m cautiously optimistic about these results. CRISPR has shown tremendous potential in early research, but translating that to clinical outcomes has been challenging. This could be the breakthrough we\'ve been waiting for.',
      createdAt: new Date('2023-11-11T14:18:00')
    }
  ];
};