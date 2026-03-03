import type { Schema, Struct } from '@strapi/strapi';

export interface AiDataInsightsBanner extends Struct.ComponentSchema {
  collectionName: 'components_ai_data_insights_banners';
  info: {
    description: 'Banner section for AI Data Insights';
    displayName: 'Banner';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AiDataInsightsBenefits extends Struct.ComponentSchema {
  collectionName: 'components_ai_data_insights_benefits';
  info: {
    description: 'Benefits section';
    displayName: 'Benefits';
  };
  attributes: {
    description: Schema.Attribute.Text;
    introText: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AiDataInsightsBlog extends Struct.ComponentSchema {
  collectionName: 'components_ai_data_insights_blogs';
  info: {
    description: 'Blog/Insights section';
    displayName: 'Blog';
  };
  attributes: {
    blogCards: Schema.Attribute.Component<'shared.insight-card', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AiDataInsightsHero extends Struct.ComponentSchema {
  collectionName: 'components_ai_data_insights_heroes';
  info: {
    description: 'Hero section for AI Data Insights';
    displayName: 'Hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'shared.feature-card', true>;
    introText: Schema.Attribute.Text;
    primaryCTA: Schema.Attribute.String;
    secondaryCTA: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AiDataInsightsSolutions extends Struct.ComponentSchema {
  collectionName: 'components_ai_data_insights_solutions';
  info: {
    description: 'Solutions Grid';
    displayName: 'Solutions';
  };
  attributes: {
    solutionCards: Schema.Attribute.Component<'shared.feature-card', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AiSolutionsBanner extends Struct.ComponentSchema {
  collectionName: 'components_ai_solutions_banners';
  info: {
    description: 'Banner section';
    displayName: 'Banner';
  };
  attributes: {
    description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AiSolutionsBenefits extends Struct.ComponentSchema {
  collectionName: 'components_ai_solutions_benefits';
  info: {
    description: 'Benefits or Capabilities section';
    displayName: 'Benefits';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AiSolutionsBlog extends Struct.ComponentSchema {
  collectionName: 'components_ai_solutions_blogs';
  info: {
    description: 'Blog/Insights section';
    displayName: 'Blog';
  };
  attributes: {
    description: Schema.Attribute.Text;
    posts: Schema.Attribute.Component<'ai-solutions.blog-post', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AiSolutionsBlogPost extends Struct.ComponentSchema {
  collectionName: 'components_ai_solutions_blog_posts';
  info: {
    description: 'Blog post summary card';
    displayName: 'Blog Post';
  };
  attributes: {
    category: Schema.Attribute.String;
    date: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    iconName: Schema.Attribute.String;
    readMoreLink: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AiSolutionsCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_ai_solutions_case_studies';
  info: {
    description: 'Case studies section';
    displayName: 'Case Studies';
  };
  attributes: {
    caseStudyCard: Schema.Attribute.Component<'cards.cards', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AiSolutionsGrid extends Struct.ComponentSchema {
  collectionName: 'components_ai_solutions_grids';
  info: {
    description: 'Grid of feature cards';
    displayName: 'Grid';
  };
  attributes: {
    cards: Schema.Attribute.Component<'zoho.feature', true>;
    title: Schema.Attribute.String;
  };
}

export interface AiSolutionsHero extends Struct.ComponentSchema {
  collectionName: 'components_ai_solutions_heroes';
  info: {
    description: 'Hero section with title, subtitle, cards and actions';
    displayName: 'Hero';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.feature-card', true>;
    description: Schema.Attribute.RichText;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AiSolutionsLink extends Struct.ComponentSchema {
  collectionName: 'components_ai_solutions_links';
  info: {
    description: 'Nav or Action Link';
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    path: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']> &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface AiSolutionsNav extends Struct.ComponentSchema {
  collectionName: 'components_ai_solutions_navs';
  info: {
    description: 'Inner navigation menu';
    displayName: 'Nav';
  };
  attributes: {
    items: Schema.Attribute.Component<'ai-solutions.link', true>;
  };
}

export interface AiSolutionsStatItem extends Struct.ComponentSchema {
  collectionName: 'components_ai_solutions_stat_items';
  info: {
    description: 'Statistic item for Stats section';
    displayName: 'Stat Item';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'0'>;
  };
}

export interface AiSolutionsStats extends Struct.ComponentSchema {
  collectionName: 'components_ai_solutions_stats';
  info: {
    description: 'Statistics section';
    displayName: 'Stats';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'ai-solutions.stat-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AiBenefits extends Struct.ComponentSchema {
  collectionName: 'components_ai_benefits';
  info: {
    description: 'AI Benefits Section';
    displayName: 'benefits';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AiCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_ai_case_studies';
  info: {
    description: 'AI Case Studies Section';
    displayName: 'case-studies';
  };
  attributes: {
    caseStudies: Schema.Attribute.Component<'erp.success-story', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AiFaq extends Struct.ComponentSchema {
  collectionName: 'components_ai_faqs';
  info: {
    description: 'AI FAQ Section';
    displayName: 'faq';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'erp.faq', true>;
    title: Schema.Attribute.String;
  };
}

export interface AiHero extends Struct.ComponentSchema {
  collectionName: 'components_ai_heroes';
  info: {
    description: 'AI Data Intelligence Hero Section';
    displayName: 'hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'awspage.feature-card', true>;
    introText: Schema.Attribute.Text;
    primaryCTA: Schema.Attribute.String;
    secondaryCTA: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface AiInsights extends Struct.ComponentSchema {
  collectionName: 'components_ai_insights';
  info: {
    description: 'AI Insights Section';
    displayName: 'insights';
  };
  attributes: {
    cards: Schema.Attribute.Component<'awspage.feature-card', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AiPlatforms extends Struct.ComponentSchema {
  collectionName: 'components_ai_platforms';
  info: {
    description: 'AI Platforms Section';
    displayName: 'platforms';
  };
  attributes: {
    platforms: Schema.Attribute.Component<'erp.platform', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AiPowerBanner extends Struct.ComponentSchema {
  collectionName: 'components_ai_power_banners';
  info: {
    description: 'AI Power Banner Section';
    displayName: 'power-banner';
  };
  attributes: {
    content: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AiSolutions extends Struct.ComponentSchema {
  collectionName: 'components_ai_solutions';
  info: {
    description: 'AI Solutions Section';
    displayName: 'solutions';
  };
  attributes: {
    cards: Schema.Attribute.Component<'awspage.feature-card', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AiStat extends Struct.ComponentSchema {
  collectionName: 'components_ai_stats_items';
  info: {
    description: 'Single Statistic Item';
    displayName: 'stat';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface AiStats extends Struct.ComponentSchema {
  collectionName: 'components_ai_stats';
  info: {
    description: 'AI Stats Section';
    displayName: 'stats';
  };
  attributes: {
    description: Schema.Attribute.Text;
    stats: Schema.Attribute.Component<'ai.stat', true>;
    title: Schema.Attribute.String;
  };
}

export interface AiTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_ai_testimonials';
  info: {
    description: 'AI Testimonials Section';
    displayName: 'testimonials';
  };
  attributes: {
    testimonials: Schema.Attribute.Component<'erp.testimonial', true>;
    title: Schema.Attribute.String;
  };
}

export interface AwspageCaseStudyCard extends Struct.ComponentSchema {
  collectionName: 'components_awspage_case_study_cards';
  info: {
    description: '';
    displayName: 'Case Study Card';
  };
  attributes: {
    company: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AwspageCaseStudyList extends Struct.ComponentSchema {
  collectionName: 'components_awspage_case_study_lists';
  info: {
    description: '';
    displayName: 'Case Study List';
  };
  attributes: {
    cards: Schema.Attribute.Component<'awspage.case-study-card', true>;
    maintitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface AwspageFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_awspage_feature_cards';
  info: {
    description: '';
    displayName: 'Feature Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AwspageFeatureGrid extends Struct.ComponentSchema {
  collectionName: 'components_awspage_feature_grids';
  info: {
    description: '';
    displayName: 'Feature Grid';
  };
  attributes: {
    cards: Schema.Attribute.Component<'awspage.feature-card', true>;
    description: Schema.Attribute.Text;
    maintitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface AwspageHero extends Struct.ComponentSchema {
  collectionName: 'components_awspage_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'awspage.feature-card', true>;
    introText: Schema.Attribute.Text;
    maintitle: Schema.Attribute.String;
    primaryCTA: Schema.Attribute.String;
    secondaryCTA: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface AwspageInfraGrid extends Struct.ComponentSchema {
  collectionName: 'components_awspage_infra_grids';
  info: {
    description: '';
    displayName: 'Infrastructure Grid';
  };
  attributes: {
    maintitle: Schema.Attribute.String;
    services: Schema.Attribute.Component<'awspage.service-card', true>;
    subtitle: Schema.Attribute.String;
  };
}

export interface AwspageServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_awspage_service_cards';
  info: {
    description: '';
    displayName: 'Service Card';
  };
  attributes: {
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AwspageStatCard extends Struct.ComponentSchema {
  collectionName: 'components_awspage_stat_cards';
  info: {
    description: '';
    displayName: 'Stat Card';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface AwspageStatGrid extends Struct.ComponentSchema {
  collectionName: 'components_awspage_stat_grids';
  info: {
    description: '';
    displayName: 'Stat Grid';
  };
  attributes: {
    maintitle: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'awspage.stat-card', true>;
    subtitle: Schema.Attribute.String;
  };
}

export interface AwspageVideoCard extends Struct.ComponentSchema {
  collectionName: 'components_awspage_video_cards';
  info: {
    description: '';
    displayName: 'Video Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface AwspageVideoList extends Struct.ComponentSchema {
  collectionName: 'components_awspage_video_lists';
  info: {
    description: '';
    displayName: 'Video List';
  };
  attributes: {
    maintitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    videos: Schema.Attribute.Component<'awspage.video-card', true>;
  };
}

export interface AzureCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_azure_case_studies_sections';
  info: {
    description: 'Azure case studies section';
    displayName: 'Case Studies Section';
  };
  attributes: {
    studies: Schema.Attribute.Component<'azure.case-study', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AzureCaseStudy extends Struct.ComponentSchema {
  collectionName: 'components_azure_case_studies_items';
  info: {
    description: 'Azure case study item';
    displayName: 'Case Study Item';
  };
  attributes: {
    company: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    readmoreurl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AzureFaq extends Struct.ComponentSchema {
  collectionName: 'components_azure_faqs';
  info: {
    description: 'Azure FAQ section';
    displayName: 'FAQ Section';
  };
  attributes: {
    items: Schema.Attribute.Component<'azure.faq-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface AzureFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_azure_faq_items';
  info: {
    description: 'Azure FAQ item';
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface AzureFeature extends Struct.ComponentSchema {
  collectionName: 'components_azure_features';
  info: {
    description: 'Azure feature item with icon';
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AzureGlobalfootprint extends Struct.ComponentSchema {
  collectionName: 'components_azure_globalfootprints';
  info: {
    displayName: 'Globalfootprint';
  };
  attributes: {
    cardIcons: Schema.Attribute.Component<'erp.tally-icon-simple', true>;
    rightcardtitle: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'erp.tally-stat', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AzureHero extends Struct.ComponentSchema {
  collectionName: 'components_azure_heroes';
  info: {
    description: 'Azure Hero section';
    displayName: 'Hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'azure.feature', true>;
    introText: Schema.Attribute.Text;
    maintitle: Schema.Attribute.Text;
    primaryCTA: Schema.Attribute.String;
    secondaryCTA: Schema.Attribute.String;
  };
}

export interface AzureService extends Struct.ComponentSchema {
  collectionName: 'components_azure_services_items';
  info: {
    description: 'Azure service item';
    displayName: 'Service Item';
  };
  attributes: {
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AzureServices extends Struct.ComponentSchema {
  collectionName: 'components_azure_services_sections';
  info: {
    description: 'Azure services section (replaces Instruction)';
    displayName: 'Services Section';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    services: Schema.Attribute.Component<'azure.service', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AzureTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_azure_testimonials_items';
  info: {
    description: 'Azure testimonial item';
    displayName: 'Testimonial Item';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface AzureTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_azure_testimonials_sections';
  info: {
    description: 'Azure testimonials section';
    displayName: 'Testimonials Section';
  };
  attributes: {
    reviews: Schema.Attribute.Component<'azure.testimonial', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AzureVideo extends Struct.ComponentSchema {
  collectionName: 'components_azure_videos';
  info: {
    description: 'Azure video item';
    displayName: 'Video';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    videourl: Schema.Attribute.Text;
  };
}

export interface AzureVideoSection extends Struct.ComponentSchema {
  collectionName: 'components_azure_video_sections';
  info: {
    description: 'Azure video section';
    displayName: 'Video Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    videos: Schema.Attribute.Component<'azure.video', true>;
  };
}

export interface AzureWhyCard extends Struct.ComponentSchema {
  collectionName: 'components_azure_why_cards';
  info: {
    description: 'Why Choose Azure card';
    displayName: 'Why Card';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AzureWhyChoose extends Struct.ComponentSchema {
  collectionName: 'components_azure_why_chooses';
  info: {
    description: 'Why Choose Azure section';
    displayName: 'Why Choose';
  };
  attributes: {
    cards: Schema.Attribute.Component<'azure.why-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BackgroundImgBackgroundimage extends Struct.ComponentSchema {
  collectionName: 'components_background_img_backgroundimages';
  info: {
    displayName: 'backgroundimage';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ButtonItemsButton extends Struct.ComponentSchema {
  collectionName: 'components_button_items_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    btn: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ButtonItemsButtonitems extends Struct.ComponentSchema {
  collectionName: 'components_button_items_buttonitems';
  info: {
    displayName: 'Buttonitems';
  };
  attributes: {
    buttonimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttontext: Schema.Attribute.String;
  };
}

export interface ButtonItemsLinkButton extends Struct.ComponentSchema {
  collectionName: 'components_button_items_link_buttons';
  info: {
    displayName: 'Link-Button';
  };
  attributes: {
    linkicon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    URl: Schema.Attribute.String;
  };
}

export interface CardsCards extends Struct.ComponentSchema {
  collectionName: 'components_cards_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    readMoreLink: Schema.Attribute.Text;
    tags: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CntntimgGitexCntntImg extends Struct.ComponentSchema {
  collectionName: 'components_cntntimg_gitex_cntnt_imgs';
  info: {
    displayName: 'gitexCntntImg';
  };
  attributes: {
    date: Schema.Attribute.Date;
    leftimg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    mainhead: Schema.Attribute.String;
    subHead: Schema.Attribute.Text;
  };
}

export interface CompanyCareerCompanyStats extends Struct.ComponentSchema {
  collectionName: 'components_company_career_company_stats';
  info: {
    displayName: 'company_stats';
  };
  attributes: {
    heading: Schema.Attribute.String;
    stats_card: Schema.Attribute.Component<'heading.heading1', true>;
  };
}

export interface CompanyCareerFebnoCards extends Struct.ComponentSchema {
  collectionName: 'components_company_career_febno_cards';
  info: {
    displayName: 'febno_cards';
  };
  attributes: {
    cards_button: Schema.Attribute.Component<'button-items.button', false>;
    category: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'division.list', true>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CompanyCareerFebnoSection extends Struct.ComponentSchema {
  collectionName: 'components_company_career_febno_sections';
  info: {
    displayName: 'febno_section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'company-career.febno-cards', true>;
    heading: Schema.Attribute.Component<'heading.heading1', false>;
  };
}

export interface CompanyCareerResumeSection extends Struct.ComponentSchema {
  collectionName: 'components_company_career_resume_sections';
  info: {
    displayName: 'resume_section';
  };
  attributes: {
    button: Schema.Attribute.Component<'button-items.button', false>;
    heading: Schema.Attribute.Component<'heading.heading1', false>;
  };
}

export interface CompanyProjectCategoryCard extends Struct.ComponentSchema {
  collectionName: 'components_company_project_category_cards';
  info: {
    displayName: 'category_card';
  };
  attributes: {
    button: Schema.Attribute.Component<'button-items.button', false>;
    heading: Schema.Attribute.Component<'heading.heading1', false>;
    image: Schema.Attribute.Component<'images.image', false>;
  };
}

export interface CompanyProjectProjectCategory extends Struct.ComponentSchema {
  collectionName: 'components_company_project_project_categories';
  info: {
    displayName: 'project-category';
  };
  attributes: {
    btnproject: Schema.Attribute.Component<'button-items.button', false>;
    category_card: Schema.Attribute.Component<
      'company-project.category-card',
      true
    >;
    items: Schema.Attribute.Component<'division.list', true>;
  };
}

export interface CompanyhomeButton extends Struct.ComponentSchema {
  collectionName: 'components_companyhome_buttons';
  info: {
    displayName: 'button';
    icon: 'earth';
  };
  attributes: {
    arrow: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface CompanyhomeCards extends Struct.ComponentSchema {
  collectionName: 'components_companyhome_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    content1: Schema.Attribute.String;
    content2: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
  };
}

export interface CompanyhomeCategories extends Struct.ComponentSchema {
  collectionName: 'components_companyhome_categories';
  info: {
    displayName: 'categories';
  };
  attributes: {
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'division.list', true>;
  };
}

export interface CompanyhomeClientReview extends Struct.ComponentSchema {
  collectionName: 'components_companyhome_client_reviews';
  info: {
    displayName: 'client_review';
  };
  attributes: {
    heading: Schema.Attribute.String;
    reviewcard: Schema.Attribute.Component<'insight-review.reviewcard', true>;
  };
}

export interface CompanyhomeCompany extends Struct.ComponentSchema {
  collectionName: 'components_companyhome_companies';
  info: {
    displayName: 'company';
  };
  attributes: {
    button: Schema.Attribute.Component<'companyhome.button', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CompanyhomeCompanydivision extends Struct.ComponentSchema {
  collectionName: 'components_companyhome_companydivisions';
  info: {
    displayName: 'companydivision';
  };
  attributes: {};
}

export interface CompanyhomeCompanystatistics extends Struct.ComponentSchema {
  collectionName: 'components_companyhome_companystatistics';
  info: {
    displayName: 'companystatistics';
  };
  attributes: {
    statistics: Schema.Attribute.Component<'heading.heading1', true>;
  };
}

export interface CompanyhomeContent extends Struct.ComponentSchema {
  collectionName: 'components_companyhome_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    description: Schema.Attribute.Text;
    head: Schema.Attribute.String;
  };
}

export interface CompanyhomeDescriptions extends Struct.ComponentSchema {
  collectionName: 'components_companyhome_descriptions';
  info: {
    displayName: 'descriptions';
  };
  attributes: {
    descriptions: Schema.Attribute.Text;
  };
}

export interface CompanyhomeImages extends Struct.ComponentSchema {
  collectionName: 'components_companyhome_images';
  info: {
    displayName: 'images';
    icon: 'briefcase';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CompanyhomeIndustry extends Struct.ComponentSchema {
  collectionName: 'components_companyhome_industries';
  info: {
    displayName: 'industry';
  };
  attributes: {
    category: Schema.Attribute.Component<'companyhome.categories', true>;
    heading: Schema.Attribute.String;
  };
}

export interface CompanyhomeQna extends Struct.ComponentSchema {
  collectionName: 'components_companyhome_qnas';
  info: {
    displayName: 'qna';
  };
  attributes: {
    answer: Schema.Attribute.Component<'companyhome.text', true>;
    question: Schema.Attribute.String;
  };
}

export interface CompanyhomeText extends Struct.ComponentSchema {
  collectionName: 'components_companyhome_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    ans: Schema.Attribute.Text;
  };
}

export interface ComponentItemsBottomcontent extends Struct.ComponentSchema {
  collectionName: 'components_component_items_bottomcontents';
  info: {
    displayName: 'bottomcontent';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subheading: Schema.Attribute.String;
  };
}

export interface ComponentItemsChangablecomponent
  extends Struct.ComponentSchema {
  collectionName: 'components_component_items_changablecomponents';
  info: {
    displayName: 'changablecomponent';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagehead: Schema.Attribute.String;
    smalltext: Schema.Attribute.String;
  };
}

export interface ComponentItemsLinkComponent extends Struct.ComponentSchema {
  collectionName: 'components_component_items_link_components';
  info: {
    displayName: 'LinkComponent';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Url: Schema.Attribute.String;
    urlicon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContactLocation extends Struct.ComponentSchema {
  collectionName: 'components_contact_locations';
  info: {
    description: '';
    displayName: 'Location';
  };
  attributes: {
    address: Schema.Attribute.Text;
    email: Schema.Attribute.String;
    latitude: Schema.Attribute.Decimal;
    longitude: Schema.Attribute.Decimal;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    zoom: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<8>;
  };
}

export interface ContactpageDescription extends Struct.ComponentSchema {
  collectionName: 'components_contactpage_descriptions';
  info: {
    displayName: 'description';
    icon: 'earth';
  };
  attributes: {
    description: Schema.Attribute.Text;
    links: Schema.Attribute.Component<'contactpage.letsconnect', true>;
  };
}

export interface ContactpageLetsconnect extends Struct.ComponentSchema {
  collectionName: 'components_contactpage_letsconnects';
  info: {
    displayName: 'letsconnect';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ContactpageLocation extends Struct.ComponentSchema {
  collectionName: 'components_contactpage_locations';
  info: {
    description: '';
    displayName: 'Location';
  };
  attributes: {
    address: Schema.Attribute.Text;
    email: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    latitude: Schema.Attribute.Decimal;
    longitude: Schema.Attribute.Decimal;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    zoom: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<8>;
  };
}

export interface DistributionCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_distribution_case_studies_v2';
  info: {
    description: '';
    displayName: 'Case Studies';
  };
  attributes: {
    items: Schema.Attribute.Component<'distribution.case-study', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DistributionCaseStudy extends Struct.ComponentSchema {
  collectionName: 'components_distribution_case_studies';
  info: {
    description: '';
    displayName: 'Case Study';
  };
  attributes: {
    category: Schema.Attribute.String;
    color: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DistributionCta extends Struct.ComponentSchema {
  collectionName: 'components_distribution_ctas';
  info: {
    description: '';
    displayName: 'CTA';
  };
  attributes: {
    description: Schema.Attribute.Text;
    primaryCTA: Schema.Attribute.String;
    secondaryCTA: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DistributionEcosystemProperties
  extends Struct.ComponentSchema {
  collectionName: 'components_distribution_ecosystem_properties';
  info: {
    description: '';
    displayName: 'Ecosystem Properties';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'distribution.property-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface DistributionFaq extends Struct.ComponentSchema {
  collectionName: 'components_distribution_faqs';
  info: {
    description: '';
    displayName: 'FAQ';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'distribution.faq-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface DistributionFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_distribution_faq_items';
  info: {
    description: '';
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface DistributionFeature extends Struct.ComponentSchema {
  collectionName: 'components_distribution_features';
  info: {
    description: '';
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DistributionHero extends Struct.ComponentSchema {
  collectionName: 'components_distribution_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'distribution.feature', true>;
    introText: Schema.Attribute.Text;
    primaryCTA: Schema.Attribute.String;
    secondaryCTA: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DistributionInsight extends Struct.ComponentSchema {
  collectionName: 'components_distribution_insights';
  info: {
    description: '';
    displayName: 'Insight';
  };
  attributes: {
    category: Schema.Attribute.String;
    date: Schema.Attribute.String;
    excerpt: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface DistributionInsights extends Struct.ComponentSchema {
  collectionName: 'components_distribution_insights_sections';
  info: {
    description: '';
    displayName: 'Insights Section';
  };
  attributes: {
    items: Schema.Attribute.Component<'distribution.insight', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DistributionLink extends Struct.ComponentSchema {
  collectionName: 'components_distribution_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface DistributionPlatform extends Struct.ComponentSchema {
  collectionName: 'components_distribution_platforms';
  info: {
    description: '';
    displayName: 'Platform';
  };
  attributes: {
    color: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    links: Schema.Attribute.Component<'distribution.link', true>;
    name: Schema.Attribute.String;
    tag: Schema.Attribute.String;
  };
}

export interface DistributionPlatformSection extends Struct.ComponentSchema {
  collectionName: 'components_distribution_platform_sections';
  info: {
    description: '';
    displayName: 'Platform Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    platforms: Schema.Attribute.Component<'distribution.platform', true>;
    title: Schema.Attribute.String;
  };
}

export interface DistributionPropertyItem extends Struct.ComponentSchema {
  collectionName: 'components_distribution_property_items';
  info: {
    description: '';
    displayName: 'Property Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DistributionServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_distribution_service_items';
  info: {
    description: '';
    displayName: 'Service Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DistributionServices extends Struct.ComponentSchema {
  collectionName: 'components_distribution_services';
  info: {
    description: '';
    displayName: 'Services';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'distribution.service-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface DistributionStatItem extends Struct.ComponentSchema {
  collectionName: 'components_distribution_stat_items';
  info: {
    description: '';
    displayName: 'Stat Item';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
    value: Schema.Attribute.BigInteger;
  };
}

export interface DistributionStats extends Struct.ComponentSchema {
  collectionName: 'components_distribution_stats';
  info: {
    description: '';
    displayName: 'Stats';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'distribution.stat-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface DistributionTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_distribution_testimonials';
  info: {
    description: '';
    displayName: 'Testimonial';
  };
  attributes: {
    author: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    role: Schema.Attribute.String;
  };
}

export interface DistributionTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_distribution_testimonials_sections';
  info: {
    description: '';
    displayName: 'Testimonials Section';
  };
  attributes: {
    items: Schema.Attribute.Component<'distribution.testimonial', true>;
    title: Schema.Attribute.String;
  };
}

export interface DivisionConnect extends Struct.ComponentSchema {
  collectionName: 'components_division_connects';
  info: {
    displayName: 'connect';
  };
  attributes: {
    btn: Schema.Attribute.Component<'button-items.button', true>;
    headings: Schema.Attribute.Component<'companyhome.content', false>;
  };
}

export interface DivisionDivisioncategory extends Struct.ComponentSchema {
  collectionName: 'components_division_divisioncategories';
  info: {
    displayName: 'divisioncategory';
  };
  attributes: {
    btn: Schema.Attribute.Component<'button-items.button', false>;
    divisioncontent: Schema.Attribute.Component<
      'component-items.changablecomponent',
      false
    >;
    listitems: Schema.Attribute.Component<'division.list', true>;
  };
}

export interface DivisionIntegratedsolutions extends Struct.ComponentSchema {
  collectionName: 'components_division_integratedsolutions';
  info: {
    displayName: 'integratedsolutions';
  };
  attributes: {
    divisionconnect: Schema.Attribute.Component<'division.connect', false>;
    heading: Schema.Attribute.Component<'heading.heading1', false>;
    integratedcards: Schema.Attribute.Component<'companyhome.cards', true>;
  };
}

export interface DivisionList extends Struct.ComponentSchema {
  collectionName: 'components_division_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    items: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ErpAbout extends Struct.ComponentSchema {
  collectionName: 'components_erp_abouts';
  info: {
    description: 'About section for ERP page';
    displayName: 'about';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'About This Service'>;
  };
}

export interface ErpCapabilities extends Struct.ComponentSchema {
  collectionName: 'components_erp_capabilities';
  info: {
    description: 'Service capabilities section';
    displayName: 'capabilities';
  };
  attributes: {
    cards: Schema.Attribute.Component<'awspage.feature-card', true>;
    supportText: Schema.Attribute.Text;
    timelineText: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Key Service Capabilities'>;
  };
}

export interface ErpFaq extends Struct.ComponentSchema {
  collectionName: 'components_erp_faqs';
  info: {
    description: 'FAQ Item';
    displayName: 'faq';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface ErpHero extends Struct.ComponentSchema {
  collectionName: 'components_erp_heroes';
  info: {
    description: 'Hero section for ERP page';
    displayName: 'hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'awspage.feature-card', true>;
    introText: Schema.Attribute.Text;
    primaryCTA: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Explore ERP Solutions'>;
    secondaryCTA: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'View Benefits'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ErpIntegrationSection extends Struct.ComponentSchema {
  collectionName: 'components_erp_integration_sections';
  info: {
    description: 'Integration benefits and capabilities';
    displayName: 'integration-section';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'awspage.feature-card', true>;
    benefitsDescription: Schema.Attribute.Text;
    benefitsTitle: Schema.Attribute.String;
    capabilities: Schema.Attribute.Component<'awspage.feature-card', true>;
    capabilitiesDescription: Schema.Attribute.Text;
    capabilitiesTitle: Schema.Attribute.String;
  };
}

export interface ErpKnowledgeHub extends Struct.ComponentSchema {
  collectionName: 'components_erp_knowledge_hubs';
  info: {
    description: 'Knowledge hub section';
    displayName: 'knowledge-hub';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    thumbnailUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
    videoDescription: Schema.Attribute.Text;
    videoTitle: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
  };
}

export interface ErpPlatform extends Struct.ComponentSchema {
  collectionName: 'components_erp_platforms';
  info: {
    description: 'ERP Platform item';
    displayName: 'platform';
  };
  attributes: {
    description: Schema.Attribute.Text;
    isCustomLogo: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    logo: Schema.Attribute.Media<'images'>;
    logoUrl: Schema.Attribute.String;
    logoWidth: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface ErpPlatformList extends Struct.ComponentSchema {
  collectionName: 'components_erp_platform_lists';
  info: {
    description: 'List of ERP platforms';
    displayName: 'platform-list';
  };
  attributes: {
    platforms: Schema.Attribute.Component<'erp.platform', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ErpSimpleTextLine extends Struct.ComponentSchema {
  collectionName: 'components_erp_simple_text_lines';
  info: {
    description: 'A simple wrapper for a text line, useful for repeatable arrays of strings';
    displayName: 'Simple Text Line';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface ErpSuccessStory extends Struct.ComponentSchema {
  collectionName: 'components_erp_success_stories';
  info: {
    description: 'Success story card';
    displayName: 'success-story';
  };
  attributes: {
    company: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    iconName: Schema.Attribute.String;
    industry: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ErpTallyFaq extends Struct.ComponentSchema {
  collectionName: 'components_erp_tally_faqs';
  info: {
    description: 'Frequently Asked Questions section';
    displayName: 'Tally FAQ';
  };
  attributes: {
    questions: Schema.Attribute.Component<'erp.tally-question', true>;
    title: Schema.Attribute.String;
  };
}

export interface ErpTallyFeature extends Struct.ComponentSchema {
  collectionName: 'components_erp_tally_features';
  info: {
    description: 'Feature card for Tally Hero section';
    displayName: 'Tally Feature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ErpTallyFootprint extends Struct.ComponentSchema {
  collectionName: 'components_erp_tally_footprints';
  info: {
    description: 'Global footprint metrics section';
    displayName: 'Tally Footprint';
  };
  attributes: {
    cardIcons: Schema.Attribute.Component<'erp.tally-icon-simple', true>;
    cardMainText: Schema.Attribute.String;
    cardSubText: Schema.Attribute.String;
    empowerDesc: Schema.Attribute.Text;
    empowerTitle: Schema.Attribute.String;
    footprintSubtitle: Schema.Attribute.String;
    footprintTitle: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'erp.tally-stat', true>;
  };
}

export interface ErpTallyHero extends Struct.ComponentSchema {
  collectionName: 'components_erp_tally_heroes';
  info: {
    description: 'Main hero section for Tally page';
    displayName: 'Tally Hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'erp.tally-feature', true>;
    introText: Schema.Attribute.Text;
    maintitle: Schema.Attribute.Text;
    primaryCTA: Schema.Attribute.String;
    secondaryCTA: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface ErpTallyIconSimple extends Struct.ComponentSchema {
  collectionName: 'components_erp_tally_icon_simples';
  info: {
    description: 'Simple icon wrapper';
    displayName: 'Tally Icon Simple';
  };
  attributes: {
    icon: Schema.Attribute.String;
  };
}

export interface ErpTallyQuestion extends Struct.ComponentSchema {
  collectionName: 'components_erp_tally_questions';
  info: {
    description: 'FAQ question item';
    displayName: 'Tally Question';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface ErpTallyReason extends Struct.ComponentSchema {
  collectionName: 'components_erp_tally_reasons';
  info: {
    description: 'Reason item for Why Choose Tally section';
    displayName: 'Tally Reason';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ErpTallyServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_erp_tally_service_items';
  info: {
    description: 'Service item for Tally Services section';
    displayName: 'Tally Service Item';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ErpTallyServices extends Struct.ComponentSchema {
  collectionName: 'components_erp_tally_services';
  info: {
    description: 'Services section for Tally page';
    displayName: 'Tally Services';
  };
  attributes: {
    cardmaintitle: Schema.Attribute.String;
    description1: Schema.Attribute.Text;
    description2: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    serviceList: Schema.Attribute.Component<'erp.tally-service-item', true>;
    subtitle: Schema.Attribute.String;
    tagline: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'POWER OF SIMPLICITY'>;
    title: Schema.Attribute.String;
  };
}

export interface ErpTallyStat extends Struct.ComponentSchema {
  collectionName: 'components_erp_tally_stats';
  info: {
    description: 'Stat item for Footprint section';
    displayName: 'Tally Stat';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface ErpTallyStory extends Struct.ComponentSchema {
  collectionName: 'components_erp_tally_stories';
  info: {
    description: 'Success story card';
    displayName: 'Tally Story';
  };
  attributes: {
    category: Schema.Attribute.String;
    desc: Schema.Attribute.Text;
    headline: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    readMoreLink: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ErpTallySuccessStories extends Struct.ComponentSchema {
  collectionName: 'components_erp_tally_success_stories';
  info: {
    description: 'Success stories section';
    displayName: 'Tally Success Stories';
  };
  attributes: {
    stories: Schema.Attribute.Component<'erp.tally-story', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ErpTallyTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_erp_tally_testimonial_items';
  info: {
    description: 'Testimonial card';
    displayName: 'Tally Testimonial';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    role: Schema.Attribute.String;
  };
}

export interface ErpTallyTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_erp_tally_testimonials';
  info: {
    description: 'Client testimonials section';
    displayName: 'Tally Testimonials';
  };
  attributes: {
    list: Schema.Attribute.Component<'erp.tally-testimonial', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ErpTallyWhyChoose extends Struct.ComponentSchema {
  collectionName: 'components_erp_tally_why_chooses';
  info: {
    description: 'Why Choose Tally section';
    displayName: 'Tally Why Choose';
  };
  attributes: {
    items: Schema.Attribute.Component<'erp.tally-reason', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ErpTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_erp_testimonials';
  info: {
    description: 'Client testimonial';
    displayName: 'testimonial';
  };
  attributes: {
    company: Schema.Attribute.String;
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    role: Schema.Attribute.String;
    stars: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<5>;
  };
}

export interface FootercontentContent extends Struct.ComponentSchema {
  collectionName: 'components_footercontent_contents';
  info: {
    displayName: 'content';
    icon: 'clock';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FootercontentData extends Struct.ComponentSchema {
  collectionName: 'components_footercontent_data';
  info: {
    displayName: 'data';
  };
  attributes: {
    description: Schema.Attribute.String;
    mapdetails: Schema.Attribute.Component<'footercontent.mapdetails', true>;
  };
}

export interface FootercontentFooterdata extends Struct.ComponentSchema {
  collectionName: 'components_footercontent_footerdata';
  info: {
    displayName: 'footerdata';
  };
  attributes: {
    subtitle: Schema.Attribute.Component<'subitems.subitem', true>;
    title: Schema.Attribute.String;
  };
}

export interface FootercontentFooterheading extends Struct.ComponentSchema {
  collectionName: 'components_footercontent_footerheadings';
  info: {
    displayName: 'footerheading';
  };
  attributes: {
    allfooterdata: Schema.Attribute.Component<'footercontent.footerdata', true>;
    global_links: Schema.Attribute.Component<'footerdata.footerglobal', true>;
  };
}

export interface FootercontentMapdetails extends Struct.ComponentSchema {
  collectionName: 'components_footercontent_mapdetails';
  info: {
    displayName: 'mapdetails';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
  };
}

export interface FootercontentMapicon extends Struct.ComponentSchema {
  collectionName: 'components_footercontent_mapicons';
  info: {
    displayName: 'mapicon';
  };
  attributes: {
    maps: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface FootercontentMapsection extends Struct.ComponentSchema {
  collectionName: 'components_footercontent_mapsections';
  info: {
    displayName: 'mapsection';
  };
  attributes: {
    mapdata: Schema.Attribute.Component<'footercontent.data', true>;
    mapicon: Schema.Attribute.Component<'footercontent.mapicon', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterdataFooterglobal extends Struct.ComponentSchema {
  collectionName: 'components_footerdata_footerglobals';
  info: {
    displayName: 'footerglobal';
  };
  attributes: {
    description: Schema.Attribute.Text;
    global_links: Schema.Attribute.Component<'numbers.numbers', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterdataHeading extends Struct.ComponentSchema {
  collectionName: 'components_footerdata_headings';
  info: {
    displayName: 'heading';
  };
  attributes: {};
}

export interface GlobalsourcingPartnerships extends Struct.ComponentSchema {
  collectionName: 'components_globalsourcing_partnerships';
  info: {
    description: '';
    displayName: 'Partnerships';
  };
  attributes: {
    features: Schema.Attribute.Component<'awspage.feature-card', true>;
    maintitle: Schema.Attribute.String;
    partners: Schema.Attribute.Component<'awspage.stat-card', true>;
    stats: Schema.Attribute.Component<'awspage.stat-card', true>;
    subtitle: Schema.Attribute.String;
  };
}

export interface GlobalsourcingServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_globalsourcing_service_items';
  info: {
    description: '';
    displayName: 'Service Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    metrics: Schema.Attribute.Component<'awspage.stat-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface GlobalsourcingServiceList extends Struct.ComponentSchema {
  collectionName: 'components_globalsourcing_service_lists';
  info: {
    description: '';
    displayName: 'Service List';
  };
  attributes: {
    maintitle: Schema.Attribute.String;
    services: Schema.Attribute.Component<'globalsourcing.service-item', true>;
    subtitle: Schema.Attribute.String;
  };
}

export interface GlobalsourcingSuccessList extends Struct.ComponentSchema {
  collectionName: 'components_globalsourcing_success_lists';
  info: {
    description: '';
    displayName: 'Success List';
  };
  attributes: {
    maintitle: Schema.Attribute.String;
    stories: Schema.Attribute.Component<'globalsourcing.success-story', true>;
    subtitle: Schema.Attribute.String;
  };
}

export interface GlobalsourcingSuccessStory extends Struct.ComponentSchema {
  collectionName: 'components_globalsourcing_success_stories';
  info: {
    description: '';
    displayName: 'Success Story';
  };
  attributes: {
    author: Schema.Attribute.String;
    category: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    metrics: Schema.Attribute.Component<'awspage.stat-card', true>;
    quote: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface GlobalsourcingTalentCard extends Struct.ComponentSchema {
  collectionName: 'components_globalsourcing_talent_cards';
  info: {
    description: '';
    displayName: 'Talent Card';
  };
  attributes: {
    available: Schema.Attribute.String;
    category: Schema.Attribute.String;
    levels: Schema.Attribute.Text;
    role: Schema.Attribute.String;
    skills: Schema.Attribute.Text;
  };
}

export interface GlobalsourcingTalentPool extends Struct.ComponentSchema {
  collectionName: 'components_globalsourcing_talent_pools';
  info: {
    description: '';
    displayName: 'Talent Pool';
  };
  attributes: {
    maintitle: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'awspage.stat-card', true>;
    subtitle: Schema.Attribute.String;
    talent_cards: Schema.Attribute.Component<
      'globalsourcing.talent-card',
      true
    >;
  };
}

export interface GoogleCloudFootprint extends Struct.ComponentSchema {
  collectionName: 'components_google_cloud_footprints';
  info: {
    description: '';
    displayName: 'Footprint';
    icon: 'globe';
  };
  attributes: {
    aiCardDescription: Schema.Attribute.Text;
    aiCardTitle: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'shared.stat-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface GoogleCloudHero extends Struct.ComponentSchema {
  collectionName: 'components_google_cloud_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'google-cloud.hero-feature', true>;
    introText: Schema.Attribute.Text;
    primaryCTA: Schema.Attribute.String;
    secondaryCTA: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface GoogleCloudHeroFeature extends Struct.ComponentSchema {
  collectionName: 'components_google_cloud_hero_features';
  info: {
    description: '';
    displayName: 'Hero Feature';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GoogleCloudServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_google_cloud_service_cards';
  info: {
    description: '';
    displayName: 'Service Card';
    icon: 'server';
  };
  attributes: {
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GoogleCloudServices extends Struct.ComponentSchema {
  collectionName: 'components_google_cloud_services';
  info: {
    description: '';
    displayName: 'Services';
    icon: 'grid';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logoText: Schema.Attribute.String;
    serviceCards: Schema.Attribute.Component<'google-cloud.service-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface GoogleCloudVideoCard extends Struct.ComponentSchema {
  collectionName: 'components_google_cloud_video_cards';
  info: {
    description: '';
    displayName: 'Video Card';
    icon: 'play';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    videoLink: Schema.Attribute.String;
  };
}

export interface GoogleCloudVideos extends Struct.ComponentSchema {
  collectionName: 'components_google_cloud_videos_section';
  info: {
    description: '';
    displayName: 'Videos';
    icon: 'film';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    videoCards: Schema.Attribute.Component<'google-cloud.video-card', true>;
  };
}

export interface GoogleCloudWhyChoose extends Struct.ComponentSchema {
  collectionName: 'components_google_cloud_why_chooses';
  info: {
    description: '';
    displayName: 'Why Choose';
    icon: 'question';
  };
  attributes: {
    cards: Schema.Attribute.Component<'google-cloud.why-choose-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface GoogleCloudWhyChooseCard extends Struct.ComponentSchema {
  collectionName: 'components_google_cloud_why_choose_cards';
  info: {
    description: '';
    displayName: 'Why Choose Card';
    icon: 'check-square';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HeadingDescription extends Struct.ComponentSchema {
  collectionName: 'components_heading_descriptions';
  info: {
    displayName: 'description';
  };
  attributes: {
    global_description: Schema.Attribute.String;
  };
}

export interface HeadingGlobalContent extends Struct.ComponentSchema {
  collectionName: 'components_heading_global_contents';
  info: {
    displayName: 'global_content';
  };
  attributes: {
    global_icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    number: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface HeadingHeading1 extends Struct.ComponentSchema {
  collectionName: 'components_heading_heading1s';
  info: {
    displayName: 'Heading1';
  };
  attributes: {
    maintitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface HeadingTitle extends Struct.ComponentSchema {
  collectionName: 'components_heading_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    icons: Schema.Attribute.Component<'images.image', true>;
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.String;
  };
}

export interface ImagesFooterimg extends Struct.ComponentSchema {
  collectionName: 'components_images_footerimgs';
  info: {
    displayName: 'footerimg';
  };
  attributes: {
    footericn: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    url: Schema.Attribute.String;
  };
}

export interface ImagesImage extends Struct.ComponentSchema {
  collectionName: 'components_images_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.String;
  };
}

export interface InfraHostingCaseStudyCard extends Struct.ComponentSchema {
  collectionName: 'components_infra_hosting_case_study_cards';
  info: {
    description: 'Card for case study';
    displayName: 'Case Study Card';
    icon: 'book-open';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    readMoreUrl: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface InfraHostingCaseStudySection extends Struct.ComponentSchema {
  collectionName: 'components_infra_hosting_case_study_sections';
  info: {
    description: 'Section for case studies';
    displayName: 'Case Study Section';
    icon: 'briefcase';
  };
  attributes: {
    caseStudies: Schema.Attribute.Component<
      'infra-hosting.case-study-card',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface InfraHostingFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_infra_hosting_faq_items';
  info: {
    description: 'Frequently asked question item';
    displayName: 'FAQ Item';
    icon: 'help-circle';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface InfraHostingFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_infra_hosting_faq_sections';
  info: {
    description: 'Section for frequently asked questions';
    displayName: 'FAQ Section';
    icon: 'question';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'infra-hosting.faq-item', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface InfraHostingFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_infra_hosting_feature_cards';
  info: {
    description: 'Feature and benefit card';
    displayName: 'Feature Card';
    icon: 'check-circle';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface InfraHostingFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_infra_hosting_features_sections';
  info: {
    description: 'Section for features and benefits';
    displayName: 'Features Section';
    icon: 'list';
  };
  attributes: {
    features: Schema.Attribute.Component<'infra-hosting.feature-card', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface InfraHostingHero extends Struct.ComponentSchema {
  collectionName: 'components_infra_hosting_heroes';
  info: {
    description: 'Hero section for Infrastructure & Hosting';
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'infra-hosting.hero-feature', true>;
    introText: Schema.Attribute.Text;
    maintitle: Schema.Attribute.String;
    primaryCTA: Schema.Attribute.String;
    secondaryCTA: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface InfraHostingHeroFeature extends Struct.ComponentSchema {
  collectionName: 'components_infra_hosting_hero_features';
  info: {
    description: 'Feature card for hero section';
    displayName: 'Hero Feature';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface InfraHostingInsightCard extends Struct.ComponentSchema {
  collectionName: 'components_infra_hosting_insight_cards';
  info: {
    description: 'Latest insight card';
    displayName: 'Insight Card';
    icon: 'lightbulb';
  };
  attributes: {
    category: Schema.Attribute.String;
    date: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    readMoreUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface InfraHostingInsightsSection extends Struct.ComponentSchema {
  collectionName: 'components_infra_hosting_insights_sections';
  info: {
    description: 'Section for latest insights';
    displayName: 'Insights Section';
    icon: 'newspaper';
  };
  attributes: {
    insights: Schema.Attribute.Component<'infra-hosting.insight-card', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface InfraHostingIntroSection extends Struct.ComponentSchema {
  collectionName: 'components_infra_hosting_intro_sections';
  info: {
    description: 'Introduction section with visualization card';
    displayName: 'Intro Section';
    icon: 'info';
  };
  attributes: {
    contentLeft: Schema.Attribute.Blocks;
    stats: Schema.Attribute.Component<'infra-hosting.stat-item', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    visualizationChecklist: Schema.Attribute.Text;
    visualizationDescription: Schema.Attribute.Text;
    visualizationIcon: Schema.Attribute.String;
    visualizationTitle: Schema.Attribute.String;
  };
}

export interface InfraHostingKnowledgeHub extends Struct.ComponentSchema {
  collectionName: 'components_infra_hosting_knowledge_hubs';
  info: {
    description: 'Knowledge Hub section with featured video';
    displayName: 'Knowledge Hub';
    icon: 'play-circle';
  };
  attributes: {
    featuredVideoDesc: Schema.Attribute.Text;
    featuredVideoThumbnail: Schema.Attribute.Media<'images'>;
    featuredVideoTitle: Schema.Attribute.String;
    featuredVideoUrl: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    viewMoreUrl: Schema.Attribute.String;
  };
}

export interface InfraHostingPlatformCard extends Struct.ComponentSchema {
  collectionName: 'components_infra_hosting_platform_cards';
  info: {
    description: 'Cloud platform card';
    displayName: 'Platform Card';
    icon: 'server';
  };
  attributes: {
    description: Schema.Attribute.Text;
    logo: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface InfraHostingPlatformSection extends Struct.ComponentSchema {
  collectionName: 'components_infra_hosting_platform_sections';
  info: {
    description: 'Section displaying cloud platforms';
    displayName: 'Platform Section';
    icon: 'cloud';
  };
  attributes: {
    platforms: Schema.Attribute.Component<'infra-hosting.platform-card', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface InfraHostingStatItem extends Struct.ComponentSchema {
  collectionName: 'components_infra_hosting_stat_items';
  info: {
    description: 'Statistic item for intro section';
    displayName: 'Stat Item';
    icon: 'chart-pie';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface InfraHostingTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_infra_hosting_testimonial_cards';
  info: {
    description: 'Client testimonial card';
    displayName: 'Testimonial Card';
    icon: 'message-circle';
  };
  attributes: {
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    role: Schema.Attribute.String;
  };
}

export interface InfraHostingTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_infra_hosting_testimonial_sections';
  info: {
    description: 'Section for client testimonials';
    displayName: 'Testimonial Section';
    icon: 'users';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<
      'infra-hosting.testimonial-card',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface InfrastructurePageBusinessSection
  extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_page_business_sections';
  info: {
    description: 'Business value proposition section';
    displayName: 'Business Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.feature-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface InfrastructurePageCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_page_case_studies';
  info: {
    description: 'Case studies section';
    displayName: 'Case Studies';
  };
  attributes: {
    caseStudyCards: Schema.Attribute.Component<'shared.success-story', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface InfrastructurePageFaq extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_page_faqs';
  info: {
    description: 'FAQ section';
    displayName: 'FAQ';
  };
  attributes: {
    faqItems: Schema.Attribute.Component<'shared.faq-item', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface InfrastructurePageHero extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_page_heroes';
  info: {
    description: 'Hero section for Infrastructure page';
    displayName: 'Hero';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'shared.feature-card', true>;
    introText: Schema.Attribute.Text & Schema.Attribute.Required;
    primaryCTA: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryCTA: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.JSON & Schema.Attribute.Required;
  };
}

export interface InfrastructurePageInsights extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_page_insights';
  info: {
    description: 'Insights/blog section';
    displayName: 'Insights';
  };
  attributes: {
    insightCards: Schema.Attribute.Component<'shared.insight-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface InfrastructurePageMonitoring extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_page_monitorings';
  info: {
    description: 'Monitoring features section';
    displayName: 'Monitoring';
  };
  attributes: {
    features: Schema.Attribute.Component<'shared.feature-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface InfrastructurePageServices extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_page_services';
  info: {
    description: 'Services section';
    displayName: 'Services';
  };
  attributes: {
    sectionSubtitle: Schema.Attribute.Text;
    sectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    serviceCards: Schema.Attribute.Component<'shared.service-card', true>;
  };
}

export interface InfrastructurePageSolutions extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_page_solutions';
  info: {
    description: 'Solutions section';
    displayName: 'Solutions';
  };
  attributes: {
    solutionCards: Schema.Attribute.Component<'shared.service-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface InfrastructurePageTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_page_testimonials';
  info: {
    description: 'Client testimonials section';
    displayName: 'Testimonials';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    testimonialCards: Schema.Attribute.Component<'shared.testimonial', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface InfrastructurePageTrustedSection
  extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_page_trusted_sections';
  info: {
    description: 'Trusted partners and stats section';
    displayName: 'Trusted Section';
  };
  attributes: {
    stats: Schema.Attribute.Component<'shared.stat-card', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface InfrastructureBenefitCard extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_benefit_cards';
  info: {
    description: '';
    displayName: 'Benefit Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface InfrastructureBenefits extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_benefits';
  info: {
    description: '';
    displayName: 'Benefits';
  };
  attributes: {
    cards: Schema.Attribute.Component<'infrastructure.benefit-card', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface InfrastructureCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_cta_banners';
  info: {
    description: 'Call to Action Banner';
    displayName: 'cta-banner';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface InfrastructureDarkSolutions extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_dark_solutions';
  info: {
    description: 'Dark Mode Solutions Grid';
    displayName: 'dark-solutions';
  };
  attributes: {
    cards: Schema.Attribute.Component<'awspage.feature-card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface InfrastructureEndToEnd extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_end_to_ends';
  info: {
    description: 'End to End Solutions Grid';
    displayName: 'end-to-end';
  };
  attributes: {
    cards: Schema.Attribute.Component<'awspage.feature-card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface InfrastructureFaq extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_faqs';
  info: {
    description: 'FAQ Section';
    displayName: 'faq';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'erp.faq', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface InfrastructureHero extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_heroes';
  info: {
    description: 'Hero section';
    displayName: 'hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'awspage.feature-card', true>;
    introText: Schema.Attribute.Text;
    primaryCTA: Schema.Attribute.String;
    secondaryCTA: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface InfrastructureHostingSolutions extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_hosting_solutions';
  info: {
    description: 'Hosting Solutions Grid';
    displayName: 'hosting-solutions';
  };
  attributes: {
    cards: Schema.Attribute.Component<'awspage.feature-card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface InfrastructureInsights extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_insights';
  info: {
    description: 'Insights/Blog Section';
    displayName: 'insights';
  };
  attributes: {
    cards: Schema.Attribute.Component<'awspage.feature-card', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface InfrastructureListItem extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_list_items';
  info: {
    description: 'Simple text item for lists';
    displayName: 'list-item';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface InfrastructurePackage extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_packages_items';
  info: {
    description: 'Pricing or Service Package';
    displayName: 'package';
  };
  attributes: {
    cta: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'infrastructure.list-item', true>;
    name: Schema.Attribute.String;
    popular: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface InfrastructurePackages extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_packages_sections';
  info: {
    description: 'Section containing multiple packages';
    displayName: 'packages';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'infrastructure.package', true>;
    title: Schema.Attribute.String;
  };
}

export interface InfrastructureStats extends Struct.ComponentSchema {
  collectionName: 'components_infrastructure_stats';
  info: {
    description: 'Stats bar';
    displayName: 'stats';
  };
  attributes: {
    items: Schema.Attribute.Component<'ai.stat', true>;
  };
}

export interface InsightBlogsBlogcard extends Struct.ComponentSchema {
  collectionName: 'components_insight_blogs_blogcards';
  info: {
    displayName: 'blogcard';
  };
  attributes: {
    author: Schema.Attribute.String;
    blogcontent: Schema.Attribute.Component<'companyhome.content', false>;
    blogimage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    category: Schema.Attribute.String;
    date: Schema.Attribute.String;
    time: Schema.Attribute.String;
  };
}

export interface InsightBlogsInsightBlogs extends Struct.ComponentSchema {
  collectionName: 'components_insight_blogs_insight_blogs';
  info: {
    displayName: 'insight-blogs';
  };
  attributes: {
    blog_btn: Schema.Attribute.Component<'button-items.button', false>;
    blogcard: Schema.Attribute.Component<'insight-blogs.blogcard', true>;
    blogsheading: Schema.Attribute.Component<'heading.heading1', false>;
  };
}

export interface InsightEventsEventcards extends Struct.ComponentSchema {
  collectionName: 'components_insight_events_eventcards';
  info: {
    displayName: 'eventcards';
  };
  attributes: {
    category: Schema.Attribute.String;
    date: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    location: Schema.Attribute.String;
    timeend: Schema.Attribute.Time;
    timestart: Schema.Attribute.Time;
  };
}

export interface InsightEventsInsightEvents extends Struct.ComponentSchema {
  collectionName: 'components_insight_events_insight_events';
  info: {
    displayName: 'insight-events';
  };
  attributes: {
    eventcards: Schema.Attribute.Component<'insight-events.eventcards', true>;
    events_btn: Schema.Attribute.Component<'button-items.button', false>;
    eventsheadings: Schema.Attribute.Component<'heading.heading1', false>;
  };
}

export interface InsightGalleryImagecard extends Struct.ComponentSchema {
  collectionName: 'components_insight_gallery_imagecards';
  info: {
    displayName: 'imagecard';
  };
  attributes: {
    category: Schema.Attribute.String;
    image: Schema.Attribute.Component<'images.image', false>;
  };
}

export interface InsightGalleryInsightGallery extends Struct.ComponentSchema {
  collectionName: 'components_insight_gallery_insight_galleries';
  info: {
    displayName: 'insight-gallery';
  };
  attributes: {
    gallerybtn: Schema.Attribute.Component<'button-items.button', false>;
    galleryheading: Schema.Attribute.Component<'heading.heading1', false>;
    imagecard: Schema.Attribute.Component<'insight-gallery.imagecard', true>;
  };
}

export interface InsightNewsInsightNews extends Struct.ComponentSchema {
  collectionName: 'components_insight_news_insight_news';
  info: {
    displayName: 'insight-news';
  };
  attributes: {
    news_btn: Schema.Attribute.Component<'button-items.button', false>;
    newscard: Schema.Attribute.Component<'insight-news.newscard', true>;
    newsheadings: Schema.Attribute.Component<'heading.heading1', false>;
  };
}

export interface InsightNewsNewsContent extends Struct.ComponentSchema {
  collectionName: 'components_insight_news_news_contents';
  info: {
    displayName: 'news-content';
  };
  attributes: {};
}

export interface InsightNewsNewscard extends Struct.ComponentSchema {
  collectionName: 'components_insight_news_newscards';
  info: {
    displayName: 'newscard';
  };
  attributes: {
    cardcontent: Schema.Attribute.Component<'companyhome.content', false>;
    date: Schema.Attribute.String;
    highlight: Schema.Attribute.Boolean;
  };
}

export interface InsightReviewInsightReview extends Struct.ComponentSchema {
  collectionName: 'components_insight_review_insight_reviews';
  info: {
    displayName: 'insight-review';
  };
  attributes: {
    reviewbtn: Schema.Attribute.Component<'button-items.button', false>;
    reviewcard: Schema.Attribute.Component<'insight-review.reviewcard', true>;
    reviewheading: Schema.Attribute.Component<'heading.heading1', false>;
  };
}

export interface InsightReviewReviewcard extends Struct.ComponentSchema {
  collectionName: 'components_insight_review_reviewcards';
  info: {
    displayName: 'reviewcard';
  };
  attributes: {
    reviewcontent: Schema.Attribute.Text;
    reviewerdetails: Schema.Attribute.Component<'heading.heading1', false>;
  };
}

export interface InsightSubscriptionInsightSubscription
  extends Struct.ComponentSchema {
  collectionName: 'components_insight_subscription_insight_subscriptions';
  info: {
    displayName: 'insight-subscription';
  };
  attributes: {
    contactbtn: Schema.Attribute.Component<'button-items.button', false>;
    subscribebtn: Schema.Attribute.Component<'button-items.button', false>;
    subscriptionheading: Schema.Attribute.Component<'heading.heading1', false>;
  };
}

export interface InsightVideoInsightVideo extends Struct.ComponentSchema {
  collectionName: 'components_insight_video_insight_videos';
  info: {
    displayName: 'insight-video';
  };
  attributes: {
    videobtn: Schema.Attribute.Component<'button-items.button', false>;
    videocard: Schema.Attribute.Component<'insight-video.video-card', true>;
    videoheading: Schema.Attribute.Component<'heading.heading1', false>;
  };
}

export interface InsightVideoVideoCard extends Struct.ComponentSchema {
  collectionName: 'components_insight_video_video_cards';
  info: {
    displayName: 'video-card';
  };
  attributes: {
    category: Schema.Attribute.String;
    time: Schema.Attribute.String;
    url: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface InsightsBlogBlogCard extends Struct.ComponentSchema {
  collectionName: 'components_insights_blog_blog_cards';
  info: {
    description: 'A single blog item for the Latest Blogs section';
    displayName: 'Blog Card';
  };
  attributes: {
    bullets: Schema.Attribute.Component<'shared.bullet', true>;
    cardImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    category: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    date: Schema.Attribute.String;
    desc: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface InsightsBlogHero extends Struct.ComponentSchema {
  collectionName: 'components_insights_blog_heroes';
  info: {
    description: 'Insights Blog Page Hero section';
    displayName: 'Hero';
  };
  attributes: {
    badgeIcon: Schema.Attribute.String;
    badgeText: Schema.Attribute.Text;
    badgeTitle: Schema.Attribute.String;
    primaryBtn: Schema.Attribute.String;
    secondaryBtn: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface InsightsBlogLatestBlogsSection extends Struct.ComponentSchema {
  collectionName: 'components_insights_blog_latest_blogs_sections';
  info: {
    description: 'The wrapper section for the blog cards';
    displayName: 'Latest Blogs Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'insights-blog.blog-card', true>;
    description: Schema.Attribute.Text;
    header: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface InsightsEventsEventCard extends Struct.ComponentSchema {
  collectionName: 'components_insights_events_event_cards';
  info: {
    description: 'A single event item for the Latest Events section';
    displayName: 'Event Card';
  };
  attributes: {
    category: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    dateNumber: Schema.Attribute.Integer;
    heading: Schema.Attribute.String;
    location: Schema.Attribute.String;
    month: Schema.Attribute.String & Schema.Attribute.DefaultTo<'DEC'>;
    timeend: Schema.Attribute.String;
    timestart: Schema.Attribute.String;
  };
}

export interface InsightsEventsLatestEventsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_insights_events_latest_events_sections';
  info: {
    description: 'Section containing the latest events grid';
    displayName: 'Latest Events Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'insights-events.event-card', true>;
    header: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface ManagedSecurityCaseStudyCard extends Struct.ComponentSchema {
  collectionName: 'components_managed_security_case_study_cards';
  info: {
    description: 'Case study card for managed security';
    displayName: 'Case Study Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    iconName: Schema.Attribute.String & Schema.Attribute.DefaultTo<'shield'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ManagedSecurityFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_managed_security_faq_items';
  info: {
    description: 'FAQ question and answer';
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ManagedSecurityFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_managed_security_feature_cards';
  info: {
    description: 'Security feature card';
    displayName: 'Feature Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    iconName: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ManagedSecurityHeroFeature extends Struct.ComponentSchema {
  collectionName: 'components_managed_security_hero_features';
  info: {
    description: 'Feature item for hero section';
    displayName: 'Hero Feature';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    iconName: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ManagedSecurityInsightCard extends Struct.ComponentSchema {
  collectionName: 'components_managed_security_insight_cards';
  info: {
    description: 'Blog/insight card for security insights';
    displayName: 'Insight Card';
  };
  attributes: {
    category: Schema.Attribute.String & Schema.Attribute.Required;
    date: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    iconName: Schema.Attribute.String & Schema.Attribute.DefaultTo<'shield'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ManagedSecurityNavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_managed_security_navigation_items';
  info: {
    description: 'Navigation menu item';
    displayName: 'Navigation Item';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    path: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ManagedSecuritySolutionCard extends Struct.ComponentSchema {
  collectionName: 'components_managed_security_solution_cards';
  info: {
    description: 'Security solution card';
    displayName: 'Solution Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    iconName: Schema.Attribute.String & Schema.Attribute.Required;
    targetId: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ManagedSecurityStatCard extends Struct.ComponentSchema {
  collectionName: 'components_managed_security_stat_cards';
  info: {
    description: 'Statistics card with icon';
    displayName: 'Stat Card';
  };
  attributes: {
    iconName: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ManagedSecurityTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_managed_security_testimonial_cards';
  info: {
    description: 'Client testimonial card';
    displayName: 'Testimonial Card';
  };
  attributes: {
    firstName: Schema.Attribute.String & Schema.Attribute.Required;
    lastName: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface MenuItemsMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_items_menus';
  info: {
    displayName: 'Menu';
  };
  attributes: {
    item1: Schema.Attribute.String;
    item2: Schema.Attribute.String;
    item3: Schema.Attribute.String;
    item4: Schema.Attribute.String;
  };
}

export interface MenuItemsNavbarmenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_items_navbarmenus';
  info: {
    displayName: 'navbarmenu';
  };
  attributes: {
    item: Schema.Attribute.Component<'subitems.item', true>;
    menu_item: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface NavDigitalPlatform extends Struct.ComponentSchema {
  collectionName: 'components_nav_digital_platforms';
  info: {
    displayName: 'digital_platform';
    icon: 'check';
  };
  attributes: {};
}

export interface NavImageArrow extends Struct.ComponentSchema {
  collectionName: 'components_nav_image_arrows';
  info: {
    displayName: 'image-arrow';
  };
  attributes: {
    arrow: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    digitalplatform: Schema.Attribute.Component<'subitems.sub-subitem', true> &
      Schema.Attribute.DefaultTo<[]>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mobile_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface NumbersNumbers extends Struct.ComponentSchema {
  collectionName: 'components_numbers_numbers';
  info: {
    displayName: 'numbers';
  };
  attributes: {
    images: Schema.Attribute.Component<'images.footerimg', true>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface OdooApp extends Struct.ComponentSchema {
  collectionName: 'components_odoo_apps';
  info: {
    description: 'App item for Integration section';
    displayName: 'App';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface OdooCard extends Struct.ComponentSchema {
  collectionName: 'components_odoo_cards';
  info: {
    description: 'Simple card for Solutions section';
    displayName: 'Card';
  };
  attributes: {
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface OdooFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_odoo_faq_items';
  info: {
    description: 'Question and Answer';
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface OdooFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_odoo_faq_sections';
  info: {
    description: 'Frequently Asked Questions';
    displayName: 'FAQ Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'odoo.faq-item', true>;
  };
}

export interface OdooFeature extends Struct.ComponentSchema {
  collectionName: 'components_odoo_features';
  info: {
    description: '';
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface OdooHero extends Struct.ComponentSchema {
  collectionName: 'components_odoo_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'odoo.feature', true>;
    introText: Schema.Attribute.Text;
    primaryCTA: Schema.Attribute.String;
    secondaryCTA: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface OdooIndustryItem extends Struct.ComponentSchema {
  collectionName: 'components_odoo_industry_items';
  info: {
    description: 'Industry Solution Card';
    displayName: 'Industry Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    tags: Schema.Attribute.Component<'odoo.industry-tag', true>;
    title: Schema.Attribute.String;
  };
}

export interface OdooIndustrySection extends Struct.ComponentSchema {
  collectionName: 'components_odoo_industry_sections';
  info: {
    description: 'Industry Solutions Section';
    displayName: 'Industry Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'odoo.industry-item', true>;
    subtitle: Schema.Attribute.String;
  };
}

export interface OdooIndustryTag extends Struct.ComponentSchema {
  collectionName: 'components_odoo_industry_tags';
  info: {
    description: 'Tag for Industry Solutions';
    displayName: 'Industry Tag';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface OdooIntegration extends Struct.ComponentSchema {
  collectionName: 'components_odoo_integrations';
  info: {
    description: 'Integration Section';
    displayName: 'Integration';
  };
  attributes: {
    apps: Schema.Attribute.Component<'odoo.app', true>;
    maintitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface OdooReviewList extends Struct.ComponentSchema {
  collectionName: 'components_odoo_review_lists';
  info: {
    description: 'Testimonials Section';
    displayName: 'Review List';
  };
  attributes: {
    heading: Schema.Attribute.String;
    reviews: Schema.Attribute.Component<'odoo.testimonial', true>;
    subtitle: Schema.Attribute.String;
  };
}

export interface OdooSlide extends Struct.ComponentSchema {
  collectionName: 'components_odoo_slides';
  info: {
    description: 'Slide for Business Transformation Carousel';
    displayName: 'Slide';
  };
  attributes: {
    description: Schema.Attribute.Text;
    gradient: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    lineColor: Schema.Attribute.String;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      [
        'customization',
        'implementation',
        'crm',
        'module',
        'support',
        'accounting',
        'inventory',
        'strategy',
      ]
    >;
  };
}

export interface OdooSolutions extends Struct.ComponentSchema {
  collectionName: 'components_odoo_solutions';
  info: {
    description: 'Solutions Grid Section';
    displayName: 'Solutions';
  };
  attributes: {
    cards: Schema.Attribute.Component<'odoo.card', true>;
    heading: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface OdooTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_odoo_testimonials';
  info: {
    description: 'Client Review';
    displayName: 'Testimonial';
  };
  attributes: {
    content: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface OdooTransformation extends Struct.ComponentSchema {
  collectionName: 'components_odoo_transformations';
  info: {
    description: 'Business Transformation Slider Section';
    displayName: 'Transformation';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    slides: Schema.Attribute.Component<'odoo.slide', true>;
  };
}

export interface ProductivityCaseStudy extends Struct.ComponentSchema {
  collectionName: 'components_productivity_case_studies';
  info: {
    description: '';
    displayName: 'case-study';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    industry: Schema.Attribute.String;
    size: Schema.Attribute.String;
    tags: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ProductivityCaseStudySection extends Struct.ComponentSchema {
  collectionName: 'components_productivity_case_study_sections';
  info: {
    description: '';
    displayName: 'case-study-section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'productivity.case-study', true>;
  };
}

export interface ProductivityContent extends Struct.ComponentSchema {
  collectionName: 'components_productivity_contents';
  info: {
    description: '';
    displayName: 'content';
  };
  attributes: {
    heading: Schema.Attribute.String;
    mainDescription: Schema.Attribute.Text;
    secondaryDescription: Schema.Attribute.Text;
    subHeading: Schema.Attribute.String;
  };
}

export interface ProductivityFaq extends Struct.ComponentSchema {
  collectionName: 'components_productivity_faqs';
  info: {
    description: '';
    displayName: 'faq';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface ProductivityFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_productivity_faq_sections';
  info: {
    description: '';
    displayName: 'faq-section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'productivity.faq', true>;
  };
}

export interface ProductivityInsight extends Struct.ComponentSchema {
  collectionName: 'components_productivity_insights';
  info: {
    description: '';
    displayName: 'insight';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    category: Schema.Attribute.String;
    date: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ProductivityInsightSection extends Struct.ComponentSchema {
  collectionName: 'components_productivity_insight_sections';
  info: {
    description: '';
    displayName: 'insight-section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'productivity.insight', true>;
  };
}

export interface ProductivityKnowledgeHubSection
  extends Struct.ComponentSchema {
  collectionName: 'components_productivity_knowledge_hub_sections';
  info: {
    description: '';
    displayName: 'knowledge-hub-section';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    videoThumbnail: Schema.Attribute.Media<'images' | 'videos'>;
    videoTitle: Schema.Attribute.String;
  };
}

export interface ProductivityPlatform extends Struct.ComponentSchema {
  collectionName: 'components_productivity_platforms';
  info: {
    description: '';
    displayName: 'platform';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ProductivityPlatformSection extends Struct.ComponentSchema {
  collectionName: 'components_productivity_platform_sections';
  info: {
    description: '';
    displayName: 'platform-section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'productivity.platform', true>;
  };
}

export interface ProductivityTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_productivity_testimonials';
  info: {
    description: '';
    displayName: 'testimonial';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'>;
    content: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
    role: Schema.Attribute.String;
  };
}

export interface ProductivityTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_productivity_testimonial_sections';
  info: {
    description: '';
    displayName: 'testimonial-section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'productivity.testimonial', true>;
  };
}

export interface QuickbooksFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_quickbooks_faq_items';
  info: {
    description: 'QuickBooks frequently asked question';
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuickbooksHeroFeature extends Struct.ComponentSchema {
  collectionName: 'components_quickbooks_hero_features';
  info: {
    description: 'QuickBooks hero section feature card';
    displayName: 'Hero Feature';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    iconName: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuickbooksReasonCard extends Struct.ComponentSchema {
  collectionName: 'components_quickbooks_reason_cards';
  info: {
    description: 'Why choose QuickBooks reason card';
    displayName: 'Reason Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    iconName: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuickbooksServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_quickbooks_service_cards';
  info: {
    description: 'QuickBooks service offering card';
    displayName: 'Service Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    iconName: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuickbooksStatCard extends Struct.ComponentSchema {
  collectionName: 'components_quickbooks_stat_cards';
  info: {
    description: 'QuickBooks footprint statistic card';
    displayName: 'Stat Card';
  };
  attributes: {
    iconName: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuickbooksSuccessStory extends Struct.ComponentSchema {
  collectionName: 'components_quickbooks_success_stories';
  info: {
    description: 'QuickBooks success story case study';
    displayName: 'Success Story';
  };
  attributes: {
    category: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    iconName: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuickbooksTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_quickbooks_testimonials';
  info: {
    description: 'QuickBooks client testimonial';
    displayName: 'Testimonial';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBullet extends Struct.ComponentSchema {
  collectionName: 'components_shared_bullets';
  info: {
    description: 'A single text bullet point';
    displayName: 'Bullet';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    description: 'Reusable FAQ question and answer';
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_cards';
  info: {
    description: 'Reusable feature card';
    displayName: 'Feature Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    iconName: Schema.Attribute.String & Schema.Attribute.Required;
    tags: Schema.Attribute.JSON;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedInsightCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_insight_cards';
  info: {
    description: 'Reusable insight/blog card';
    displayName: 'Insight Card';
  };
  attributes: {
    category: Schema.Attribute.String;
    date: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    iconName: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_cards';
  info: {
    description: 'Reusable service card with tags';
    displayName: 'Service Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    iconName: Schema.Attribute.String & Schema.Attribute.Required;
    tags: Schema.Attribute.JSON;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStatCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_stat_cards';
  info: {
    description: 'Reusable stat/metric card';
    displayName: 'Stat Card';
  };
  attributes: {
    iconName: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSuccessStory extends Struct.ComponentSchema {
  collectionName: 'components_shared_success_stories';
  info: {
    description: 'Reusable success story/case study card';
    displayName: 'Success Story';
  };
  attributes: {
    category: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    headline: Schema.Attribute.String;
    iconName: Schema.Attribute.String;
    tags: Schema.Attribute.JSON;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    description: 'Reusable testimonial card';
    displayName: 'Testimonial';
  };
  attributes: {
    company: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    rating: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<5>;
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonial_sections';
  info: {
    description: 'A section containing testimonials';
    displayName: 'Testimonial Section';
    icon: 'quote-right';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    testimonialCards: Schema.Attribute.Component<'shared.testimonial', true>;
    title: Schema.Attribute.String;
  };
}

export interface SubitemsItem extends Struct.ComponentSchema {
  collectionName: 'components_subitems_items';
  info: {
    displayName: 'item';
  };
  attributes: {
    subitems: Schema.Attribute.Component<'subitems.sub-subitem', true>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SubitemsSubSubitem extends Struct.ComponentSchema {
  collectionName: 'components_subitems_sub_subitems';
  info: {
    displayName: 'sub_subitem';
    icon: 'earth';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SubitemsSubitem extends Struct.ComponentSchema {
  collectionName: 'components_subitems_subitems';
  info: {
    displayName: 'subitem';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SubtitlesSubtitle extends Struct.ComponentSchema {
  collectionName: 'components_subtitles_subtitles';
  info: {
    displayName: 'subtitle';
  };
  attributes: {};
}

export interface WaslasoftAppItem extends Struct.ComponentSchema {
  collectionName: 'components_waslasoft_app_items';
  info: {
    description: 'Waslasoft Integrated App';
    displayName: 'App Item';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface WaslasoftFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_waslasoft_faq_items';
  info: {
    description: 'Waslasoft FAQ';
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface WaslasoftFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_waslasoft_faq_sections';
  info: {
    description: 'Waslasoft FAQ List';
    displayName: 'FAQ Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'waslasoft.faq-item', true>;
  };
}

export interface WaslasoftFootprint extends Struct.ComponentSchema {
  collectionName: 'components_waslasoft_footprints';
  info: {
    description: 'Waslasoft Global Footprint';
    displayName: 'Footprint';
  };
  attributes: {
    stats: Schema.Attribute.Component<'waslasoft.stat-item', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WaslasoftHero extends Struct.ComponentSchema {
  collectionName: 'components_waslasoft_heroes';
  info: {
    description: 'Waslasoft Hero Section';
    displayName: 'Hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    primaryCTA: Schema.Attribute.String;
    secondaryCTA: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WaslasoftIntegration extends Struct.ComponentSchema {
  collectionName: 'components_waslasoft_integrations';
  info: {
    description: 'Waslasoft Integrations Section';
    displayName: 'Integration';
  };
  attributes: {
    apps: Schema.Attribute.Component<'waslasoft.app-item', true>;
    maintitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface WaslasoftService extends Struct.ComponentSchema {
  collectionName: 'components_waslasoft_services';
  info: {
    description: 'Waslasoft Service Item';
    displayName: 'Service';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WaslasoftServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_waslasoft_service_sections';
  info: {
    description: 'Waslasoft Services List';
    displayName: 'Service Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    services: Schema.Attribute.Component<'waslasoft.service', true>;
    subtitle: Schema.Attribute.String;
  };
}

export interface WaslasoftStatItem extends Struct.ComponentSchema {
  collectionName: 'components_waslasoft_stat_items';
  info: {
    description: 'Waslasoft Stats';
    displayName: 'Stat Item';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface WaslasoftSuccessStories extends Struct.ComponentSchema {
  collectionName: 'components_waslasoft_success_stories';
  info: {
    description: 'Success Stories Section for Waslasoft';
    displayName: 'Success Stories';
  };
  attributes: {
    stories: Schema.Attribute.Component<'waslasoft.success-story-card', true>;
    subtitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'see how businesses transformed their operations with waslasoft'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Waslasoft Success Stories'>;
  };
}

export interface WaslasoftSuccessStoryCard extends Struct.ComponentSchema {
  collectionName: 'components_waslasoft_success_story_cards';
  info: {
    description: 'Card for Waslasoft Success Stories';
    displayName: 'Success Story Card';
  };
  attributes: {
    category: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    headline: Schema.Attribute.String;
    icon_name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Store'>;
    title: Schema.Attribute.String;
  };
}

export interface WaslasoftTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_waslasoft_testimonials';
  info: {
    description: 'Waslasoft Testimonials';
    displayName: 'Testimonial';
  };
  attributes: {
    content: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface WaslasoftTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_waslasoft_testimonial_sections';
  info: {
    description: 'Waslasoft Testimonials List';
    displayName: 'Testimonial Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    reviews: Schema.Attribute.Component<'waslasoft.testimonial', true>;
    subtitle: Schema.Attribute.String;
  };
}

export interface WaslasoftWhyChooseItem extends Struct.ComponentSchema {
  collectionName: 'components_waslasoft_why_choose_items';
  info: {
    description: 'Waslasoft Benefit';
    displayName: 'Why Choose Item';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WaslasoftWhyChooseSection extends Struct.ComponentSchema {
  collectionName: 'components_waslasoft_why_choose_sections';
  info: {
    description: 'Waslasoft Benefits List';
    displayName: 'Why Choose Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'waslasoft.why-choose-item', true>;
    subtitle: Schema.Attribute.String;
  };
}

export interface ZohoAppAppItem extends Struct.ComponentSchema {
  collectionName: 'components_zoho_app_app_items';
  info: {
    description: '';
    displayName: 'app-item';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    tags: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface ZohoAppApproachItem extends Struct.ComponentSchema {
  collectionName: 'components_zoho_app_approach_items';
  info: {
    description: '';
    displayName: 'approach-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ZohoAppBlogArticle extends Struct.ComponentSchema {
  collectionName: 'components_zoho_app_blog_articles';
  info: {
    description: '';
    displayName: 'blog-article';
  };
  attributes: {
    author: Schema.Attribute.String;
    category: Schema.Attribute.String;
    date: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    readTime: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ZohoAppCaseStudyItem extends Struct.ComponentSchema {
  collectionName: 'components_zoho_app_case_study_items';
  info: {
    description: '';
    displayName: 'case-study-item';
  };
  attributes: {
    company: Schema.Attribute.String;
    desc: Schema.Attribute.Text;
    short_id: Schema.Attribute.String;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ZohoAppHero extends Struct.ComponentSchema {
  collectionName: 'components_zoho_app_heroes';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    badgeText: Schema.Attribute.String;
    badgeTitle: Schema.Attribute.String;
    primaryBtn: Schema.Attribute.String;
    secondaryBtn: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ZohoAppIndustryFeature extends Struct.ComponentSchema {
  collectionName: 'components_zoho_app_industry_features';
  info: {
    description: '';
    displayName: 'industry-feature';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ZohoAppServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_zoho_app_service_items';
  info: {
    description: '';
    displayName: 'service-item';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    items: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface ZohoAppServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_zoho_app_service_sections';
  info: {
    description: '';
    displayName: 'service-section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    services: Schema.Attribute.Component<'zoho-app.service-item', true>;
    subtitle: Schema.Attribute.String;
  };
}

export interface ZohoAppSubscription extends Struct.ComponentSchema {
  collectionName: 'components_zoho_app_subscriptions';
  info: {
    description: '';
    displayName: 'subscription';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface ZohoFeature extends Struct.ComponentSchema {
  collectionName: 'components_zoho_features';
  info: {
    description: '';
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ZohoHero extends Struct.ComponentSchema {
  collectionName: 'components_zoho_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'zoho.feature', true>;
    introText: Schema.Attribute.Text;
    primaryCTA: Schema.Attribute.String;
    secondaryCTA: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ai-data-insights.banner': AiDataInsightsBanner;
      'ai-data-insights.benefits': AiDataInsightsBenefits;
      'ai-data-insights.blog': AiDataInsightsBlog;
      'ai-data-insights.hero': AiDataInsightsHero;
      'ai-data-insights.solutions': AiDataInsightsSolutions;
      'ai-solutions.banner': AiSolutionsBanner;
      'ai-solutions.benefits': AiSolutionsBenefits;
      'ai-solutions.blog': AiSolutionsBlog;
      'ai-solutions.blog-post': AiSolutionsBlogPost;
      'ai-solutions.case-studies': AiSolutionsCaseStudies;
      'ai-solutions.grid': AiSolutionsGrid;
      'ai-solutions.hero': AiSolutionsHero;
      'ai-solutions.link': AiSolutionsLink;
      'ai-solutions.nav': AiSolutionsNav;
      'ai-solutions.stat-item': AiSolutionsStatItem;
      'ai-solutions.stats': AiSolutionsStats;
      'ai.benefits': AiBenefits;
      'ai.case-studies': AiCaseStudies;
      'ai.faq': AiFaq;
      'ai.hero': AiHero;
      'ai.insights': AiInsights;
      'ai.platforms': AiPlatforms;
      'ai.power-banner': AiPowerBanner;
      'ai.solutions': AiSolutions;
      'ai.stat': AiStat;
      'ai.stats': AiStats;
      'ai.testimonials': AiTestimonials;
      'awspage.case-study-card': AwspageCaseStudyCard;
      'awspage.case-study-list': AwspageCaseStudyList;
      'awspage.feature-card': AwspageFeatureCard;
      'awspage.feature-grid': AwspageFeatureGrid;
      'awspage.hero': AwspageHero;
      'awspage.infra-grid': AwspageInfraGrid;
      'awspage.service-card': AwspageServiceCard;
      'awspage.stat-card': AwspageStatCard;
      'awspage.stat-grid': AwspageStatGrid;
      'awspage.video-card': AwspageVideoCard;
      'awspage.video-list': AwspageVideoList;
      'azure.case-studies': AzureCaseStudies;
      'azure.case-study': AzureCaseStudy;
      'azure.faq': AzureFaq;
      'azure.faq-item': AzureFaqItem;
      'azure.feature': AzureFeature;
      'azure.globalfootprint': AzureGlobalfootprint;
      'azure.hero': AzureHero;
      'azure.service': AzureService;
      'azure.services': AzureServices;
      'azure.testimonial': AzureTestimonial;
      'azure.testimonials': AzureTestimonials;
      'azure.video': AzureVideo;
      'azure.video-section': AzureVideoSection;
      'azure.why-card': AzureWhyCard;
      'azure.why-choose': AzureWhyChoose;
      'background-img.backgroundimage': BackgroundImgBackgroundimage;
      'button-items.button': ButtonItemsButton;
      'button-items.buttonitems': ButtonItemsButtonitems;
      'button-items.link-button': ButtonItemsLinkButton;
      'cards.cards': CardsCards;
      'cntntimg.gitex-cntnt-img': CntntimgGitexCntntImg;
      'company-career.company-stats': CompanyCareerCompanyStats;
      'company-career.febno-cards': CompanyCareerFebnoCards;
      'company-career.febno-section': CompanyCareerFebnoSection;
      'company-career.resume-section': CompanyCareerResumeSection;
      'company-project.category-card': CompanyProjectCategoryCard;
      'company-project.project-category': CompanyProjectProjectCategory;
      'companyhome.button': CompanyhomeButton;
      'companyhome.cards': CompanyhomeCards;
      'companyhome.categories': CompanyhomeCategories;
      'companyhome.client-review': CompanyhomeClientReview;
      'companyhome.company': CompanyhomeCompany;
      'companyhome.companydivision': CompanyhomeCompanydivision;
      'companyhome.companystatistics': CompanyhomeCompanystatistics;
      'companyhome.content': CompanyhomeContent;
      'companyhome.descriptions': CompanyhomeDescriptions;
      'companyhome.images': CompanyhomeImages;
      'companyhome.industry': CompanyhomeIndustry;
      'companyhome.qna': CompanyhomeQna;
      'companyhome.text': CompanyhomeText;
      'component-items.bottomcontent': ComponentItemsBottomcontent;
      'component-items.changablecomponent': ComponentItemsChangablecomponent;
      'component-items.link-component': ComponentItemsLinkComponent;
      'contact.location': ContactLocation;
      'contactpage.description': ContactpageDescription;
      'contactpage.letsconnect': ContactpageLetsconnect;
      'contactpage.location': ContactpageLocation;
      'distribution.case-studies': DistributionCaseStudies;
      'distribution.case-study': DistributionCaseStudy;
      'distribution.cta': DistributionCta;
      'distribution.ecosystem-properties': DistributionEcosystemProperties;
      'distribution.faq': DistributionFaq;
      'distribution.faq-item': DistributionFaqItem;
      'distribution.feature': DistributionFeature;
      'distribution.hero': DistributionHero;
      'distribution.insight': DistributionInsight;
      'distribution.insights': DistributionInsights;
      'distribution.link': DistributionLink;
      'distribution.platform': DistributionPlatform;
      'distribution.platform-section': DistributionPlatformSection;
      'distribution.property-item': DistributionPropertyItem;
      'distribution.service-item': DistributionServiceItem;
      'distribution.services': DistributionServices;
      'distribution.stat-item': DistributionStatItem;
      'distribution.stats': DistributionStats;
      'distribution.testimonial': DistributionTestimonial;
      'distribution.testimonials': DistributionTestimonials;
      'division.connect': DivisionConnect;
      'division.divisioncategory': DivisionDivisioncategory;
      'division.integratedsolutions': DivisionIntegratedsolutions;
      'division.list': DivisionList;
      'erp.about': ErpAbout;
      'erp.capabilities': ErpCapabilities;
      'erp.faq': ErpFaq;
      'erp.hero': ErpHero;
      'erp.integration-section': ErpIntegrationSection;
      'erp.knowledge-hub': ErpKnowledgeHub;
      'erp.platform': ErpPlatform;
      'erp.platform-list': ErpPlatformList;
      'erp.simple-text-line': ErpSimpleTextLine;
      'erp.success-story': ErpSuccessStory;
      'erp.tally-faq': ErpTallyFaq;
      'erp.tally-feature': ErpTallyFeature;
      'erp.tally-footprint': ErpTallyFootprint;
      'erp.tally-hero': ErpTallyHero;
      'erp.tally-icon-simple': ErpTallyIconSimple;
      'erp.tally-question': ErpTallyQuestion;
      'erp.tally-reason': ErpTallyReason;
      'erp.tally-service-item': ErpTallyServiceItem;
      'erp.tally-services': ErpTallyServices;
      'erp.tally-stat': ErpTallyStat;
      'erp.tally-story': ErpTallyStory;
      'erp.tally-success-stories': ErpTallySuccessStories;
      'erp.tally-testimonial': ErpTallyTestimonial;
      'erp.tally-testimonials': ErpTallyTestimonials;
      'erp.tally-why-choose': ErpTallyWhyChoose;
      'erp.testimonial': ErpTestimonial;
      'footercontent.content': FootercontentContent;
      'footercontent.data': FootercontentData;
      'footercontent.footerdata': FootercontentFooterdata;
      'footercontent.footerheading': FootercontentFooterheading;
      'footercontent.mapdetails': FootercontentMapdetails;
      'footercontent.mapicon': FootercontentMapicon;
      'footercontent.mapsection': FootercontentMapsection;
      'footerdata.footerglobal': FooterdataFooterglobal;
      'footerdata.heading': FooterdataHeading;
      'globalsourcing.partnerships': GlobalsourcingPartnerships;
      'globalsourcing.service-item': GlobalsourcingServiceItem;
      'globalsourcing.service-list': GlobalsourcingServiceList;
      'globalsourcing.success-list': GlobalsourcingSuccessList;
      'globalsourcing.success-story': GlobalsourcingSuccessStory;
      'globalsourcing.talent-card': GlobalsourcingTalentCard;
      'globalsourcing.talent-pool': GlobalsourcingTalentPool;
      'google-cloud.footprint': GoogleCloudFootprint;
      'google-cloud.hero': GoogleCloudHero;
      'google-cloud.hero-feature': GoogleCloudHeroFeature;
      'google-cloud.service-card': GoogleCloudServiceCard;
      'google-cloud.services': GoogleCloudServices;
      'google-cloud.video-card': GoogleCloudVideoCard;
      'google-cloud.videos': GoogleCloudVideos;
      'google-cloud.why-choose': GoogleCloudWhyChoose;
      'google-cloud.why-choose-card': GoogleCloudWhyChooseCard;
      'heading.description': HeadingDescription;
      'heading.global-content': HeadingGlobalContent;
      'heading.heading1': HeadingHeading1;
      'heading.title': HeadingTitle;
      'images.footerimg': ImagesFooterimg;
      'images.image': ImagesImage;
      'infra-hosting.case-study-card': InfraHostingCaseStudyCard;
      'infra-hosting.case-study-section': InfraHostingCaseStudySection;
      'infra-hosting.faq-item': InfraHostingFaqItem;
      'infra-hosting.faq-section': InfraHostingFaqSection;
      'infra-hosting.feature-card': InfraHostingFeatureCard;
      'infra-hosting.features-section': InfraHostingFeaturesSection;
      'infra-hosting.hero': InfraHostingHero;
      'infra-hosting.hero-feature': InfraHostingHeroFeature;
      'infra-hosting.insight-card': InfraHostingInsightCard;
      'infra-hosting.insights-section': InfraHostingInsightsSection;
      'infra-hosting.intro-section': InfraHostingIntroSection;
      'infra-hosting.knowledge-hub': InfraHostingKnowledgeHub;
      'infra-hosting.platform-card': InfraHostingPlatformCard;
      'infra-hosting.platform-section': InfraHostingPlatformSection;
      'infra-hosting.stat-item': InfraHostingStatItem;
      'infra-hosting.testimonial-card': InfraHostingTestimonialCard;
      'infra-hosting.testimonial-section': InfraHostingTestimonialSection;
      'infrastructure-page.business-section': InfrastructurePageBusinessSection;
      'infrastructure-page.case-studies': InfrastructurePageCaseStudies;
      'infrastructure-page.faq': InfrastructurePageFaq;
      'infrastructure-page.hero': InfrastructurePageHero;
      'infrastructure-page.insights': InfrastructurePageInsights;
      'infrastructure-page.monitoring': InfrastructurePageMonitoring;
      'infrastructure-page.services': InfrastructurePageServices;
      'infrastructure-page.solutions': InfrastructurePageSolutions;
      'infrastructure-page.testimonials': InfrastructurePageTestimonials;
      'infrastructure-page.trusted-section': InfrastructurePageTrustedSection;
      'infrastructure.benefit-card': InfrastructureBenefitCard;
      'infrastructure.benefits': InfrastructureBenefits;
      'infrastructure.cta-banner': InfrastructureCtaBanner;
      'infrastructure.dark-solutions': InfrastructureDarkSolutions;
      'infrastructure.end-to-end': InfrastructureEndToEnd;
      'infrastructure.faq': InfrastructureFaq;
      'infrastructure.hero': InfrastructureHero;
      'infrastructure.hosting-solutions': InfrastructureHostingSolutions;
      'infrastructure.insights': InfrastructureInsights;
      'infrastructure.list-item': InfrastructureListItem;
      'infrastructure.package': InfrastructurePackage;
      'infrastructure.packages': InfrastructurePackages;
      'infrastructure.stats': InfrastructureStats;
      'insight-blogs.blogcard': InsightBlogsBlogcard;
      'insight-blogs.insight-blogs': InsightBlogsInsightBlogs;
      'insight-events.eventcards': InsightEventsEventcards;
      'insight-events.insight-events': InsightEventsInsightEvents;
      'insight-gallery.imagecard': InsightGalleryImagecard;
      'insight-gallery.insight-gallery': InsightGalleryInsightGallery;
      'insight-news.insight-news': InsightNewsInsightNews;
      'insight-news.news-content': InsightNewsNewsContent;
      'insight-news.newscard': InsightNewsNewscard;
      'insight-review.insight-review': InsightReviewInsightReview;
      'insight-review.reviewcard': InsightReviewReviewcard;
      'insight-subscription.insight-subscription': InsightSubscriptionInsightSubscription;
      'insight-video.insight-video': InsightVideoInsightVideo;
      'insight-video.video-card': InsightVideoVideoCard;
      'insights-blog.blog-card': InsightsBlogBlogCard;
      'insights-blog.hero': InsightsBlogHero;
      'insights-blog.latest-blogs-section': InsightsBlogLatestBlogsSection;
      'insights-events.event-card': InsightsEventsEventCard;
      'insights-events.latest-events-section': InsightsEventsLatestEventsSection;
      'managed-security.case-study-card': ManagedSecurityCaseStudyCard;
      'managed-security.faq-item': ManagedSecurityFaqItem;
      'managed-security.feature-card': ManagedSecurityFeatureCard;
      'managed-security.hero-feature': ManagedSecurityHeroFeature;
      'managed-security.insight-card': ManagedSecurityInsightCard;
      'managed-security.navigation-item': ManagedSecurityNavigationItem;
      'managed-security.solution-card': ManagedSecuritySolutionCard;
      'managed-security.stat-card': ManagedSecurityStatCard;
      'managed-security.testimonial-card': ManagedSecurityTestimonialCard;
      'menu-items.menu': MenuItemsMenu;
      'menu-items.navbarmenu': MenuItemsNavbarmenu;
      'nav.digital-platform': NavDigitalPlatform;
      'nav.image-arrow': NavImageArrow;
      'numbers.numbers': NumbersNumbers;
      'odoo.app': OdooApp;
      'odoo.card': OdooCard;
      'odoo.faq-item': OdooFaqItem;
      'odoo.faq-section': OdooFaqSection;
      'odoo.feature': OdooFeature;
      'odoo.hero': OdooHero;
      'odoo.industry-item': OdooIndustryItem;
      'odoo.industry-section': OdooIndustrySection;
      'odoo.industry-tag': OdooIndustryTag;
      'odoo.integration': OdooIntegration;
      'odoo.review-list': OdooReviewList;
      'odoo.slide': OdooSlide;
      'odoo.solutions': OdooSolutions;
      'odoo.testimonial': OdooTestimonial;
      'odoo.transformation': OdooTransformation;
      'productivity.case-study': ProductivityCaseStudy;
      'productivity.case-study-section': ProductivityCaseStudySection;
      'productivity.content': ProductivityContent;
      'productivity.faq': ProductivityFaq;
      'productivity.faq-section': ProductivityFaqSection;
      'productivity.insight': ProductivityInsight;
      'productivity.insight-section': ProductivityInsightSection;
      'productivity.knowledge-hub-section': ProductivityKnowledgeHubSection;
      'productivity.platform': ProductivityPlatform;
      'productivity.platform-section': ProductivityPlatformSection;
      'productivity.testimonial': ProductivityTestimonial;
      'productivity.testimonial-section': ProductivityTestimonialSection;
      'quickbooks.faq-item': QuickbooksFaqItem;
      'quickbooks.hero-feature': QuickbooksHeroFeature;
      'quickbooks.reason-card': QuickbooksReasonCard;
      'quickbooks.service-card': QuickbooksServiceCard;
      'quickbooks.stat-card': QuickbooksStatCard;
      'quickbooks.success-story': QuickbooksSuccessStory;
      'quickbooks.testimonial': QuickbooksTestimonial;
      'shared.bullet': SharedBullet;
      'shared.faq-item': SharedFaqItem;
      'shared.feature-card': SharedFeatureCard;
      'shared.insight-card': SharedInsightCard;
      'shared.service-card': SharedServiceCard;
      'shared.stat-card': SharedStatCard;
      'shared.success-story': SharedSuccessStory;
      'shared.testimonial': SharedTestimonial;
      'shared.testimonial-section': SharedTestimonialSection;
      'subitems.item': SubitemsItem;
      'subitems.sub-subitem': SubitemsSubSubitem;
      'subitems.subitem': SubitemsSubitem;
      'subtitles.subtitle': SubtitlesSubtitle;
      'waslasoft.app-item': WaslasoftAppItem;
      'waslasoft.faq-item': WaslasoftFaqItem;
      'waslasoft.faq-section': WaslasoftFaqSection;
      'waslasoft.footprint': WaslasoftFootprint;
      'waslasoft.hero': WaslasoftHero;
      'waslasoft.integration': WaslasoftIntegration;
      'waslasoft.service': WaslasoftService;
      'waslasoft.service-section': WaslasoftServiceSection;
      'waslasoft.stat-item': WaslasoftStatItem;
      'waslasoft.success-stories': WaslasoftSuccessStories;
      'waslasoft.success-story-card': WaslasoftSuccessStoryCard;
      'waslasoft.testimonial': WaslasoftTestimonial;
      'waslasoft.testimonial-section': WaslasoftTestimonialSection;
      'waslasoft.why-choose-item': WaslasoftWhyChooseItem;
      'waslasoft.why-choose-section': WaslasoftWhyChooseSection;
      'zoho-app.app-item': ZohoAppAppItem;
      'zoho-app.approach-item': ZohoAppApproachItem;
      'zoho-app.blog-article': ZohoAppBlogArticle;
      'zoho-app.case-study-item': ZohoAppCaseStudyItem;
      'zoho-app.hero': ZohoAppHero;
      'zoho-app.industry-feature': ZohoAppIndustryFeature;
      'zoho-app.service-item': ZohoAppServiceItem;
      'zoho-app.service-section': ZohoAppServiceSection;
      'zoho-app.subscription': ZohoAppSubscription;
      'zoho.feature': ZohoFeature;
      'zoho.hero': ZohoHero;
    }
  }
}
