import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminSession extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_sessions';
  info: {
    description: 'Session Manager storage';
    displayName: 'Session';
    name: 'Session';
    pluralName: 'sessions';
    singularName: 'session';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    absoluteExpiresAt: Schema.Attribute.DateTime & Schema.Attribute.Private;
    childId: Schema.Attribute.String & Schema.Attribute.Private;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deviceId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    expiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::session'> &
      Schema.Attribute.Private;
    origin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sessionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique;
    status: Schema.Attribute.String & Schema.Attribute.Private;
    type: Schema.Attribute.String & Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAiDataInsightsPageAiDataInsightsPage
  extends Struct.SingleTypeSchema {
  collectionName: 'ai_data_insights_pages';
  info: {
    description: 'Content for AI Data Analytics & Business Insights Page';
    displayName: 'AI Data Insights Page';
    pluralName: 'ai-data-insights-pages';
    singularName: 'ai-data-insights-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'ai-data-insights.banner', false>;
    benefits: Schema.Attribute.Component<'ai-data-insights.benefits', false>;
    blog: Schema.Attribute.Component<'ai-data-insights.blog', false>;
    caseStudies: Schema.Attribute.Component<
      'infrastructure-page.case-studies',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq: Schema.Attribute.Component<'infrastructure-page.faq', false>;
    hero: Schema.Attribute.Component<'ai-data-insights.hero', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ai-data-insights-page.ai-data-insights-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    solutions: Schema.Attribute.Component<'ai-data-insights.solutions', false>;
    stats: Schema.Attribute.Component<'shared.stat-card', true>;
    testimonials: Schema.Attribute.Component<
      'shared.testimonial-section',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAiDataIntelligenceAiDataIntelligence
  extends Struct.SingleTypeSchema {
  collectionName: 'ai_data_intelligences';
  info: {
    description: 'Content for the AI & Data Intelligence Division Page';
    displayName: 'AI & Data Intelligence';
    pluralName: 'ai-data-intelligences';
    singularName: 'ai-data-intelligence';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    benefits: Schema.Attribute.Component<'ai.benefits', false>;
    caseStudies: Schema.Attribute.Component<'ai.case-studies', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq: Schema.Attribute.Component<'ai.faq', false>;
    hero: Schema.Attribute.Component<'ai.hero', false>;
    insights: Schema.Attribute.Component<'ai.insights', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ai-data-intelligence.ai-data-intelligence'
    > &
      Schema.Attribute.Private;
    platforms: Schema.Attribute.Component<'ai.platforms', false>;
    powerBanner: Schema.Attribute.Component<'ai.power-banner', false>;
    publishedAt: Schema.Attribute.DateTime;
    solutions: Schema.Attribute.Component<'ai.solutions', false>;
    stats: Schema.Attribute.Component<'ai.stats', false>;
    testimonials: Schema.Attribute.Component<'ai.testimonials', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAiDataSolutionAiDataSolution
  extends Struct.SingleTypeSchema {
  collectionName: 'ai_data_solutions';
  info: {
    description: 'Content for AI & Data Intelligence Solutions page';
    displayName: 'AI & Data Solutions';
    pluralName: 'ai-data-solutions';
    singularName: 'ai-data-solution';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'ai-solutions.banner', false>;
    benefits: Schema.Attribute.Component<'ai-solutions.benefits', false>;
    blog: Schema.Attribute.Component<'ai-solutions.blog', false>;
    caseStudies: Schema.Attribute.Component<'ai-solutions.case-studies', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    grid: Schema.Attribute.Component<'ai-solutions.grid', false>;
    hero: Schema.Attribute.Component<'zoho.hero', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ai-data-solution.ai-data-solution'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    stats: Schema.Attribute.Component<'ai-solutions.stats', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAwsPageAwsPage extends Struct.SingleTypeSchema {
  collectionName: 'aws_pages';
  info: {
    displayName: 'AWS Page';
    pluralName: 'aws-pages';
    singularName: 'aws-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    case_studies: Schema.Attribute.Component<'awspage.case-study-list', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq: Schema.Attribute.Component<'companyhome.qna', true>;
    footprint: Schema.Attribute.Component<'awspage.stat-grid', false>;
    hero: Schema.Attribute.Component<'awspage.hero', false>;
    infrastructure: Schema.Attribute.Component<'awspage.infra-grid', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::aws-page.aws-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    testimonials: Schema.Attribute.Component<
      'companyhome.client-review',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videos: Schema.Attribute.Component<'awspage.video-list', false>;
    why_choose: Schema.Attribute.Component<'awspage.feature-grid', false>;
  };
}

export interface ApiAzurePageAzurePage extends Struct.SingleTypeSchema {
  collectionName: 'azure_pages';
  info: {
    description: 'Content for Azure Infrastructure Hosting Page';
    displayName: 'Azure Page';
    pluralName: 'azure-pages';
    singularName: 'azure-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    AzureInfrastructureServices: Schema.Attribute.Component<
      'azure.services',
      false
    >;
    CaseStudies: Schema.Attribute.Component<'azure.case-studies', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    FAQ: Schema.Attribute.Component<'azure.faq', false>;
    globalfootprint: Schema.Attribute.Component<'azure.globalfootprint', false>;
    Hero: Schema.Attribute.Component<'azure.hero', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::azure-page.azure-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    Testimonials: Schema.Attribute.Component<'azure.testimonials', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    VideoSection: Schema.Attribute.Component<'azure.video-section', false>;
    WhyBusiness: Schema.Attribute.Component<'azure.why-choose', false>;
  };
}

export interface ApiCaseStudyCaseStudy extends Struct.CollectionTypeSchema {
  collectionName: 'case_studies';
  info: {
    description: '';
    displayName: 'Case Study';
    pluralName: 'case-studies';
    singularName: 'case-study';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::case-study.case-study'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subcategory: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCompanyAbovepartnerCompanyAbovepartner
  extends Struct.SingleTypeSchema {
  collectionName: 'company_abovepartners';
  info: {
    displayName: 'Company_abovepartner';
    pluralName: 'company-abovepartners';
    singularName: 'company-abovepartner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    backgroundimage: Schema.Attribute.Component<
      'background-img.backgroundimage',
      true
    >;
    boxes: Schema.Attribute.Component<'companyhome.content', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::company-abovepartner.company-abovepartner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCompanyCareerCompanyCareer extends Struct.SingleTypeSchema {
  collectionName: 'company_careers';
  info: {
    displayName: 'Company-career';
    pluralName: 'company-careers';
    singularName: 'company-career';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    career_hero: Schema.Attribute.Component<'companyhome.company', false>;
    companystats: Schema.Attribute.Component<
      'company-career.company-stats',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    febno_section: Schema.Attribute.Component<
      'company-career.febno-section',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::company-career.company-career'
    > &
      Schema.Attribute.Private;
    openings_section: Schema.Attribute.Component<
      'company-career.febno-section',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    resume_section: Schema.Attribute.Component<
      'company-career.resume-section',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCompanyClientCompanyClient extends Struct.SingleTypeSchema {
  collectionName: 'company_clients';
  info: {
    displayName: 'Company-client';
    pluralName: 'company-clients';
    singularName: 'company-client';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    client_review: Schema.Attribute.Component<
      'companyhome.client-review',
      false
    >;
    clientshero: Schema.Attribute.Component<'companyhome.company', false>;
    companystatistics: Schema.Attribute.Component<
      'companyhome.companystatistics',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    industry: Schema.Attribute.Component<'companyhome.industry', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::company-client.company-client'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCompanyDivisionCompanyDivision
  extends Struct.SingleTypeSchema {
  collectionName: 'company_divisions';
  info: {
    displayName: 'Company_division';
    pluralName: 'company-divisions';
    singularName: 'company-division';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Component<'companyhome.descriptions', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::company-division.company-division'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titles: Schema.Attribute.Component<'heading.heading1', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCompanyMilestoneCompanyMilestone
  extends Struct.SingleTypeSchema {
  collectionName: 'company_milestones';
  info: {
    displayName: 'Company_milestone';
    pluralName: 'company-milestones';
    singularName: 'company-milestone';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cards: Schema.Attribute.Component<'companyhome.cards', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::company-milestone.company-milestone'
    > &
      Schema.Attribute.Private;
    milestone_titles: Schema.Attribute.Component<'heading.heading1', false>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCompanyPartnershipCompanyPartnership
  extends Struct.SingleTypeSchema {
  collectionName: 'company_partnerships';
  info: {
    displayName: 'Company_partnership';
    pluralName: 'company-partnerships';
    singularName: 'company-partnership';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    images: Schema.Attribute.Component<'companyhome.images', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::company-partnership.company-partnership'
    > &
      Schema.Attribute.Private;
    partnership_titles: Schema.Attribute.Component<'heading.heading1', false>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCompanyProjectCompanyProject
  extends Struct.SingleTypeSchema {
  collectionName: 'company_projects';
  info: {
    displayName: 'Company-project';
    pluralName: 'company-projects';
    singularName: 'company-project';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::company-project.company-project'
    > &
      Schema.Attribute.Private;
    project_category: Schema.Attribute.Component<
      'company-project.project-category',
      false
    >;
    projecthero: Schema.Attribute.Component<'companyhome.company', false>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCompanyQnaCompanyQna extends Struct.SingleTypeSchema {
  collectionName: 'company_qnas';
  info: {
    displayName: 'Company_qna';
    pluralName: 'company-qnas';
    singularName: 'company-qna';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::company-qna.company-qna'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    qna_title: Schema.Attribute.Component<'heading.heading1', false>;
    question_answer: Schema.Attribute.Component<'companyhome.qna', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCompanyThirdpageCompanyThirdpage
  extends Struct.SingleTypeSchema {
  collectionName: 'company_thirdpages';
  info: {
    displayName: 'Company_thirdpage';
    pluralName: 'company-thirdpages';
    singularName: 'company-thirdpage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::company-thirdpage.company-thirdpage'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    thirdpage_contents: Schema.Attribute.Component<
      'heading.global-content',
      true
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCompanyCompany extends Struct.SingleTypeSchema {
  collectionName: 'companies';
  info: {
    displayName: 'Company';
    pluralName: 'companies';
    singularName: 'company';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    companyhomepage: Schema.Attribute.Component<'companyhome.company', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::company.company'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiContactContact extends Struct.SingleTypeSchema {
  collectionName: 'contacts';
  info: {
    displayName: 'contact';
    pluralName: 'contacts';
    singularName: 'contact';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    below_contents: Schema.Attribute.Component<
      'contactpage.description',
      false
    >;
    contact_qna: Schema.Attribute.Component<'heading.heading1', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    herosession: Schema.Attribute.Component<'companyhome.company', false>;
    letsconnect_session: Schema.Attribute.Component<'heading.heading1', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact.contact'
    > &
      Schema.Attribute.Private;
    locations: Schema.Attribute.Component<'contactpage.location', true>;
    publishedAt: Schema.Attribute.DateTime;
    ques_ans: Schema.Attribute.Component<'companyhome.qna', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDivisionDivision extends Struct.SingleTypeSchema {
  collectionName: 'divisions';
  info: {
    displayName: 'Division';
    pluralName: 'divisions';
    singularName: 'division';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrow: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Schema.Attribute.Component<'button-items.buttonitems', true>;
    changablecomponet: Schema.Attribute.Component<
      'component-items.changablecomponent',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::division.division'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiErpBusinessErpBusiness extends Struct.SingleTypeSchema {
  collectionName: 'erp_businesses';
  info: {
    description: 'Content for the ERP & Business Applications Division Page';
    displayName: 'ERP & Business Applications';
    pluralName: 'erp-businesses';
    singularName: 'erp-business';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    about: Schema.Attribute.Component<'erp.about', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faqs: Schema.Attribute.Component<'erp.faq', true>;
    hero: Schema.Attribute.Component<'erp.hero', false>;
    implementations: Schema.Attribute.Component<'erp.platform-list', false>;
    integration: Schema.Attribute.Component<'erp.integration-section', false>;
    knowledgeHub: Schema.Attribute.Component<'erp.knowledge-hub', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::erp-business.erp-business'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    serviceCapabilities: Schema.Attribute.Component<'erp.capabilities', false>;
    successStories: Schema.Attribute.Component<'erp.success-story', true>;
    testimonials: Schema.Attribute.Component<'erp.testimonial', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFooterAboveFooterAbove extends Struct.SingleTypeSchema {
  collectionName: 'footer_aboves';
  info: {
    displayName: 'footer_above';
    pluralName: 'footer-aboves';
    singularName: 'footer-above';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrowicon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    content: Schema.Attribute.Component<'footercontent.content', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::footer-above.footer-above'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFooterFooter extends Struct.SingleTypeSchema {
  collectionName: 'footers';
  info: {
    displayName: 'Footer';
    pluralName: 'footers';
    singularName: 'footer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fooerLast: Schema.Attribute.Text;
    footerdata: Schema.Attribute.Component<
      'footercontent.footerheading',
      false
    >;
    image: Schema.Attribute.Component<'images.footerimg', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::footer.footer'
    > &
      Schema.Attribute.Private;
    mapsection: Schema.Attribute.Component<'footercontent.mapsection', false>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGitexhomeGitexhome extends Struct.SingleTypeSchema {
  collectionName: 'gitexhomes';
  info: {
    displayName: 'Gitexhome';
    pluralName: 'gitexhomes';
    singularName: 'gitexhome';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ContentImg: Schema.Attribute.Component<'cntntimg.gitex-cntnt-img', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    gitexheading: Schema.Attribute.Component<'heading.heading1', true>;
    giteximg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    insightshead: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::gitexhome.gitexhome'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGlobalSourcingGlobalSourcing
  extends Struct.SingleTypeSchema {
  collectionName: 'global_sourcings';
  info: {
    displayName: 'Global Sourcing Hub';
    pluralName: 'global-sourcings';
    singularName: 'global-sourcing';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hero: Schema.Attribute.Component<'awspage.hero', false>;
    key_benefits: Schema.Attribute.Component<'awspage.feature-grid', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::global-sourcing.global-sourcing'
    > &
      Schema.Attribute.Private;
    outsourcing_hub: Schema.Attribute.Component<'awspage.feature-grid', false>;
    outsourcing_services: Schema.Attribute.Component<
      'globalsourcing.service-list',
      false
    >;
    partnerships: Schema.Attribute.Component<
      'globalsourcing.partnerships',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    success_stories: Schema.Attribute.Component<
      'globalsourcing.success-list',
      false
    >;
    talent_pool: Schema.Attribute.Component<
      'globalsourcing.talent-pool',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGoogleCloudPageGoogleCloudPage
  extends Struct.SingleTypeSchema {
  collectionName: 'google_cloud_pages';
  info: {
    description: '';
    displayName: 'Google Cloud Page';
    pluralName: 'google-cloud-pages';
    singularName: 'google-cloud-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    caseStudies: Schema.Attribute.Component<
      'infrastructure-page.case-studies',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq: Schema.Attribute.Component<'infrastructure-page.faq', false>;
    footprint: Schema.Attribute.Component<'google-cloud.footprint', false>;
    hero: Schema.Attribute.Component<'google-cloud.hero', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::google-cloud-page.google-cloud-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    services: Schema.Attribute.Component<'google-cloud.services', false>;
    testimonials: Schema.Attribute.Component<
      'shared.testimonial-section',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videos: Schema.Attribute.Component<'google-cloud.videos', false>;
    whyChoose: Schema.Attribute.Component<'google-cloud.why-choose', false>;
  };
}

export interface ApiHerosectionHerosection extends Struct.SingleTypeSchema {
  collectionName: 'herosections';
  info: {
    displayName: 'Herosection';
    pluralName: 'herosections';
    singularName: 'herosection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrow: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Button: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    Exploremore: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    imagedescription: Schema.Attribute.String;
    imagehead: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::herosection.herosection'
    > &
      Schema.Attribute.Private;
    maintext: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ApiHomeHome extends Struct.SingleTypeSchema {
  collectionName: 'homes';
  info: {
    displayName: 'Home';
    pluralName: 'homes';
    singularName: 'home';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Component<'button-items.button', false>;
    contents: Schema.Attribute.Component<'heading.global-content', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Component<'heading.description', true>;
    global_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::home.home'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    strenth_scale: Schema.Attribute.Component<'heading.heading1', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiInfrastructureHostingInfrastructureHosting
  extends Struct.SingleTypeSchema {
  collectionName: 'infrastructure_hostings';
  info: {
    description: 'Content for the Infrastructure & Hosting page';
    displayName: 'Infrastructure & Hosting';
    pluralName: 'infrastructure-hostings';
    singularName: 'infrastructure-hosting';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    case_studies: Schema.Attribute.Component<
      'infra-hosting.case-study-section',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faqs: Schema.Attribute.Component<'infra-hosting.faq-section', false>;
    features: Schema.Attribute.Component<
      'infra-hosting.features-section',
      false
    >;
    hero: Schema.Attribute.Component<'infra-hosting.hero', false>;
    insights: Schema.Attribute.Component<
      'infra-hosting.insights-section',
      false
    >;
    intro: Schema.Attribute.Component<'infra-hosting.intro-section', false>;
    knowledge_hub: Schema.Attribute.Component<
      'infra-hosting.knowledge-hub',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::infrastructure-hosting.infrastructure-hosting'
    > &
      Schema.Attribute.Private;
    platforms: Schema.Attribute.Component<
      'infra-hosting.platform-section',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    testimonials: Schema.Attribute.Component<
      'infra-hosting.testimonial-section',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiInfrastructureManagedServiceInfrastructureManagedService
  extends Struct.SingleTypeSchema {
  collectionName: 'infrastructure_managed_services';
  info: {
    description: 'Content for the Infrastructure & Managed Services Division Page';
    displayName: 'Infrastructure & Managed Services';
    pluralName: 'infrastructure-managed-services';
    singularName: 'infrastructure-managed-service';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    benefits: Schema.Attribute.Component<'infrastructure.benefits', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaBanner: Schema.Attribute.Component<'infrastructure.cta-banner', false>;
    darkSolutions: Schema.Attribute.Component<
      'infrastructure.dark-solutions',
      false
    >;
    endToEnd: Schema.Attribute.Component<'infrastructure.end-to-end', false>;
    faq: Schema.Attribute.Component<'infrastructure.faq', false>;
    hero: Schema.Attribute.Component<'infrastructure.hero', false>;
    hostingSolutions: Schema.Attribute.Component<
      'infrastructure.hosting-solutions',
      false
    >;
    insights: Schema.Attribute.Component<'infrastructure.insights', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::infrastructure-managed-service.infrastructure-managed-service'
    > &
      Schema.Attribute.Private;
    packages: Schema.Attribute.Component<'infrastructure.packages', false>;
    publishedAt: Schema.Attribute.DateTime;
    stats: Schema.Attribute.Component<'infrastructure.stats', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiInfrastructurePageInfrastructurePage
  extends Struct.SingleTypeSchema {
  collectionName: 'infrastructure_pages';
  info: {
    description: 'Content for the Infrastructure main page';
    displayName: 'Infrastructure Page';
    pluralName: 'infrastructure-pages';
    singularName: 'infrastructure-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    businessSection: Schema.Attribute.Component<
      'infrastructure-page.business-section',
      false
    >;
    caseStudies: Schema.Attribute.Component<
      'infrastructure-page.case-studies',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq: Schema.Attribute.Component<'infrastructure-page.faq', false>;
    hero: Schema.Attribute.Component<'infrastructure-page.hero', false>;
    insights: Schema.Attribute.Component<'infrastructure-page.insights', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::infrastructure-page.infrastructure-page'
    > &
      Schema.Attribute.Private;
    monitoring: Schema.Attribute.Component<
      'infrastructure-page.monitoring',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    services: Schema.Attribute.Component<'infrastructure-page.services', false>;
    solutions: Schema.Attribute.Component<
      'infrastructure-page.solutions',
      false
    >;
    testimonials: Schema.Attribute.Component<
      'infrastructure-page.testimonials',
      false
    >;
    trustedSection: Schema.Attribute.Component<
      'infrastructure-page.trusted-section',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiInsightInsight extends Struct.SingleTypeSchema {
  collectionName: 'insights';
  info: {
    displayName: 'Insight';
    pluralName: 'insights';
    singularName: 'insight';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    insightblogs: Schema.Attribute.Component<
      'insight-blogs.insight-blogs',
      false
    >;
    insightevents: Schema.Attribute.Component<
      'insight-events.insight-events',
      false
    >;
    insightgallery: Schema.Attribute.Component<
      'insight-gallery.insight-gallery',
      false
    >;
    insightHero: Schema.Attribute.Component<'companyhome.company', false>;
    insightnews: Schema.Attribute.Component<'insight-news.insight-news', false>;
    insightreview: Schema.Attribute.Component<
      'insight-review.insight-review',
      false
    >;
    insightsubscription: Schema.Attribute.Component<
      'insight-subscription.insight-subscription',
      false
    >;
    insightvideo: Schema.Attribute.Component<
      'insight-video.insight-video',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::insight.insight'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiInsightsBlogPageInsightsBlogPage
  extends Struct.SingleTypeSchema {
  collectionName: 'insights_blog_pages';
  info: {
    description: 'Content for the Insights Blog Page';
    displayName: 'Insights Blog Page';
    pluralName: 'insights-blog-pages';
    singularName: 'insights-blog-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Hero: Schema.Attribute.Component<'insights-blog.hero', false>;
    LatestBlogsSection: Schema.Attribute.Component<
      'insights-blog.latest-blogs-section',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::insights-blog-page.insights-blog-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiInsightsEventsPageInsightsEventsPage
  extends Struct.SingleTypeSchema {
  collectionName: 'insights_events_pages';
  info: {
    description: 'Content for the Insights Events Page (View All Events)';
    displayName: 'Insights Events Page';
    pluralName: 'insights-events-pages';
    singularName: 'insights-events-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Hero: Schema.Attribute.Component<'insights-blog.hero', false>;
    LatestEventsSection: Schema.Attribute.Component<
      'insights-events.latest-events-section',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::insights-events-page.insights-events-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiInsightsNewsPageInsightsNewsPage
  extends Struct.SingleTypeSchema {
  collectionName: 'insights_news_pages';
  info: {
    description: 'Content for the Insights News Page (View All News)';
    displayName: 'Insights News Page';
    pluralName: 'insights-news-pages';
    singularName: 'insights-news-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Hero: Schema.Attribute.Component<'insights-blog.hero', false>;
    LatestNewsSection: Schema.Attribute.Component<
      'insights-blog.latest-blogs-section',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::insights-news-page.insights-news-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMainDivisionMainDivision extends Struct.SingleTypeSchema {
  collectionName: 'main_divisions';
  info: {
    displayName: 'Main_division';
    pluralName: 'main-divisions';
    singularName: 'main-division';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    divisioncards: Schema.Attribute.Component<
      'division.divisioncategory',
      true
    >;
    divisionhero: Schema.Attribute.Component<'companyhome.company', false>;
    integratedsolutions: Schema.Attribute.Component<
      'division.integratedsolutions',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::main-division.main-division'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiManagedSecurityManagedSecurity
  extends Struct.SingleTypeSchema {
  collectionName: 'managed_securities';
  info: {
    description: 'Cloud Managed Security page content';
    displayName: 'Managed Security';
    pluralName: 'managed-securities';
    singularName: 'managed-security';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutCardDescription: Schema.Attribute.Text;
    aboutCardFeatures: Schema.Attribute.JSON &
      Schema.Attribute.DefaultTo<
        [
          'Zero Trust Architecture',
          'Identity Protection',
          'Compliance Management',
        ]
      >;
    aboutCardTitle: Schema.Attribute.String;
    aboutParagraph1: Schema.Attribute.Text;
    aboutParagraph2: Schema.Attribute.Text;
    aboutSubtitle: Schema.Attribute.Text;
    aboutTitle: Schema.Attribute.String;
    caseStudiesSubtitle: Schema.Attribute.Text;
    caseStudiesTitle: Schema.Attribute.String;
    caseStudyCards: Schema.Attribute.Component<
      'managed-security.case-study-card',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faqItems: Schema.Attribute.Component<'managed-security.faq-item', true>;
    faqSubtitle: Schema.Attribute.Text;
    faqTitle: Schema.Attribute.String;
    featureCards: Schema.Attribute.Component<
      'managed-security.feature-card',
      true
    >;
    featuresSubtitle: Schema.Attribute.Text;
    featuresTitle: Schema.Attribute.String;
    heroDescription: Schema.Attribute.Text;
    heroFeatures: Schema.Attribute.Component<
      'managed-security.hero-feature',
      true
    >;
    heroIntroText: Schema.Attribute.Text;
    heroPrimaryCTA: Schema.Attribute.String;
    heroSecondaryCTA: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Cloud Managed Security'>;
    insightCards: Schema.Attribute.Component<
      'managed-security.insight-card',
      true
    >;
    insightsSubtitle: Schema.Attribute.Text;
    insightsTitle: Schema.Attribute.String;
    knowledgeButtonText: Schema.Attribute.String;
    knowledgeContentDescription: Schema.Attribute.Text;
    knowledgeContentTitle: Schema.Attribute.String;
    knowledgeSubtitle: Schema.Attribute.Text;
    knowledgeTitle: Schema.Attribute.String;
    knowledgeVideoUrl: Schema.Attribute.String & Schema.Attribute.DefaultTo<''>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::managed-security.managed-security'
    > &
      Schema.Attribute.Private;
    navigationCTALabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Request for Demo'>;
    navigationCTAPath: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/demo'>;
    navigationItems: Schema.Attribute.Component<
      'managed-security.navigation-item',
      true
    >;
    navigationLogo: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Cloud Managed Security'>;
    publishedAt: Schema.Attribute.DateTime;
    solutionCards: Schema.Attribute.Component<
      'managed-security.solution-card',
      true
    >;
    solutionsSubtitle: Schema.Attribute.Text;
    solutionsTitle: Schema.Attribute.String;
    statCards: Schema.Attribute.Component<'managed-security.stat-card', true>;
    testimonialCards: Schema.Attribute.Component<
      'managed-security.testimonial-card',
      true
    >;
    testimonialsSubtitle: Schema.Attribute.Text;
    testimonialsTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMigrationMigration extends Struct.SingleTypeSchema {
  collectionName: 'migrations';
  info: {
    description: 'Content for the Migration page';
    displayName: 'Migration';
    pluralName: 'migrations';
    singularName: 'migration';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faqs: Schema.Attribute.Component<'infra-hosting.faq-section', false>;
    features: Schema.Attribute.Component<
      'infra-hosting.features-section',
      false
    >;
    hero: Schema.Attribute.Component<'infra-hosting.hero', false>;
    insights: Schema.Attribute.Component<
      'infra-hosting.insights-section',
      false
    >;
    intro: Schema.Attribute.Component<'infra-hosting.intro-section', false>;
    knowledge_hub: Schema.Attribute.Component<
      'infra-hosting.knowledge-hub',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::migration.migration'
    > &
      Schema.Attribute.Private;
    migration_stories: Schema.Attribute.Component<
      'infra-hosting.case-study-section',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    testimonials: Schema.Attribute.Component<
      'infra-hosting.testimonial-section',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNavNav extends Struct.SingleTypeSchema {
  collectionName: 'navs';
  info: {
    displayName: 'nav';
    pluralName: 'navs';
    singularName: 'nav';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    componentitem: Schema.Attribute.Component<'nav.image-arrow', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    items: Schema.Attribute.Component<'menu-items.navbarmenu', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::nav.nav'> &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    publishedAt: Schema.Attribute.DateTime;
    SearchIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOdooExpertisePageOdooExpertisePage
  extends Struct.SingleTypeSchema {
  collectionName: 'odoo_expertise_pages';
  info: {
    description: 'Dynamic content for Odoo Expertise Page';
    displayName: 'Odoo Expertise Page';
    pluralName: 'odoo-expertise-pages';
    singularName: 'odoo-expertise-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    expertise_section_description: Schema.Attribute.Text;
    expertise_section_heading: Schema.Attribute.String;
    expertise_section_subtitle: Schema.Attribute.String;
    hero_section: Schema.Attribute.Component<'zoho-app.hero', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::odoo-expertise-page.odoo-expertise-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    services: Schema.Attribute.Component<'zoho-app.app-item', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiOdooPageOdooPage extends Struct.SingleTypeSchema {
  collectionName: 'odoo_pages';
  info: {
    description: 'Content for the Odoo ERP page';
    displayName: 'Odoo Page';
    pluralName: 'odoo-pages';
    singularName: 'odoo-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq_section: Schema.Attribute.Component<'odoo.faq-section', false>;
    global_footprint: Schema.Attribute.Component<
      'company-career.company-stats',
      false
    >;
    hero_section: Schema.Attribute.Component<'odoo.hero', false>;
    industry_section: Schema.Attribute.Component<
      'odoo.industry-section',
      false
    >;
    integration_section: Schema.Attribute.Component<'odoo.integration', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::odoo-page.odoo-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    solutions_section: Schema.Attribute.Component<'odoo.solutions', false>;
    testimonials_section: Schema.Attribute.Component<'odoo.review-list', false>;
    transformation_section: Schema.Attribute.Component<
      'odoo.transformation',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    why_choose_section: Schema.Attribute.Component<'heading.heading1', false>;
  };
}

export interface ApiPartnershipPartnership extends Struct.SingleTypeSchema {
  collectionName: 'partnership';
  info: {
    displayName: 'Partnership';
    pluralName: 'partnerships';
    singularName: 'partnership';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bottom_content: Schema.Attribute.Component<
      'component-items.bottomcontent',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::partnership.partnership'
    > &
      Schema.Attribute.Private;
    platforms: Schema.Attribute.Component<'heading.title', false>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPostPost extends Struct.CollectionTypeSchema {
  collectionName: 'posts';
  info: {
    displayName: 'Post';
    pluralName: 'posts';
    singularName: 'post';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::post.post'> &
      Schema.Attribute.Private;
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    publishedat: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProductDistributionEcosystemProductDistributionEcosystem
  extends Struct.SingleTypeSchema {
  collectionName: 'product_distribution_ecosystems';
  info: {
    description: '';
    displayName: 'Product Distribution Ecosystem';
    pluralName: 'product-distribution-ecosystems';
    singularName: 'product-distribution-ecosystem';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    caseStudies: Schema.Attribute.Component<'distribution.case-studies', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    cta: Schema.Attribute.Component<'distribution.cta', false>;
    ecosystemProperties: Schema.Attribute.Component<
      'distribution.ecosystem-properties',
      false
    >;
    faq: Schema.Attribute.Component<'distribution.faq', false>;
    hero: Schema.Attribute.Component<'distribution.hero', false>;
    insights: Schema.Attribute.Component<'distribution.insights', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::product-distribution-ecosystem.product-distribution-ecosystem'
    > &
      Schema.Attribute.Private;
    platforms: Schema.Attribute.Component<
      'distribution.platform-section',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    services: Schema.Attribute.Component<'distribution.services', false>;
    stats: Schema.Attribute.Component<'distribution.stats', false>;
    testimonials: Schema.Attribute.Component<
      'distribution.testimonials',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProductivityCollaborationProductivityCollaboration
  extends Struct.SingleTypeSchema {
  collectionName: 'productivity_collaborations';
  info: {
    displayName: 'Productivity Collaboration';
    pluralName: 'productivity-collaborations';
    singularName: 'productivity-collaboration';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    caseStudySection: Schema.Attribute.Component<
      'productivity.case-study-section',
      false
    >;
    content: Schema.Attribute.Component<'productivity.content', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faqSection: Schema.Attribute.Component<'productivity.faq-section', false>;
    hero: Schema.Attribute.Component<'awspage.hero', false>;
    insightSection: Schema.Attribute.Component<
      'productivity.insight-section',
      false
    >;
    knowledgeHubSection: Schema.Attribute.Component<
      'productivity.knowledge-hub-section',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::productivity-collaboration.productivity-collaboration'
    > &
      Schema.Attribute.Private;
    platformSection: Schema.Attribute.Component<
      'productivity.platform-section',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    testimonialSection: Schema.Attribute.Component<
      'productivity.testimonial-section',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiQuickbooksQuickbooks extends Struct.SingleTypeSchema {
  collectionName: 'quickbooks';
  info: {
    description: 'QuickBooks homepage content';
    displayName: 'QuickBooks';
    pluralName: 'quickbooks-page';
    singularName: 'quickbooks';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faqItems: Schema.Attribute.Component<'quickbooks.faq-item', true>;
    faqTitle: Schema.Attribute.String;
    footprintSubtitle: Schema.Attribute.String;
    footprintTitle: Schema.Attribute.String;
    heroDescription: Schema.Attribute.Text;
    heroFeatures: Schema.Attribute.Component<'quickbooks.hero-feature', true>;
    heroIntroText: Schema.Attribute.Text;
    heroPrimaryCTA: Schema.Attribute.String;
    heroSecondaryCTA: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String & Schema.Attribute.DefaultTo<''>;
    heroTitle: Schema.Attribute.JSON &
      Schema.Attribute.DefaultTo<
        ['Tally Business', ' Management', 'Solutions']
      >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::quickbooks.quickbooks'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    reasonCards: Schema.Attribute.Component<'quickbooks.reason-card', true>;
    serviceCards: Schema.Attribute.Component<'quickbooks.service-card', true>;
    servicesLogo: Schema.Attribute.Media<'images'>;
    servicesParagraph1: Schema.Attribute.Text;
    servicesParagraph2: Schema.Attribute.Text;
    servicesSectionTitle: Schema.Attribute.String;
    servicesSubtitle: Schema.Attribute.String;
    servicesTitle: Schema.Attribute.String;
    statCards: Schema.Attribute.Component<'quickbooks.stat-card', true>;
    successStories: Schema.Attribute.Component<
      'quickbooks.success-story',
      true
    >;
    successStoriesSubtitle: Schema.Attribute.String;
    successStoriesTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'quickbooks.testimonial', true>;
    testimonialsSubtitle: Schema.Attribute.String;
    testimonialsTitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whyChooseSubtitle: Schema.Attribute.String;
    whyChooseTitle: Schema.Attribute.String;
  };
}

export interface ApiTallyTally extends Struct.SingleTypeSchema {
  collectionName: 'tallies';
  info: {
    description: 'Detailed content for ERP -> Tally page';
    displayName: 'Tally';
    pluralName: 'tallies';
    singularName: 'tally';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    FAQ: Schema.Attribute.Component<'erp.tally-faq', false>;
    Footprint: Schema.Attribute.Component<'erp.tally-footprint', false>;
    Hero: Schema.Attribute.Component<'erp.tally-hero', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::tally.tally'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    Services: Schema.Attribute.Component<'erp.tally-services', false>;
    SuccessStories: Schema.Attribute.Component<
      'erp.tally-success-stories',
      false
    >;
    Testimonials: Schema.Attribute.Component<'erp.tally-testimonials', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    WhyChoose: Schema.Attribute.Component<'erp.tally-why-choose', false>;
  };
}

export interface ApiWaslasoftPageWaslasoftPage extends Struct.SingleTypeSchema {
  collectionName: 'waslasoft_pages';
  info: {
    description: 'Content for Waslasoft ERP page';
    displayName: 'Waslasoft Page';
    pluralName: 'waslasoft-pages';
    singularName: 'waslasoft-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq_section: Schema.Attribute.Component<'waslasoft.faq-section', false>;
    global_footprint: Schema.Attribute.Component<'waslasoft.footprint', false>;
    hero_section: Schema.Attribute.Component<'waslasoft.hero', false>;
    integration_section: Schema.Attribute.Component<
      'waslasoft.integration',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::waslasoft-page.waslasoft-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    services_section: Schema.Attribute.Component<
      'waslasoft.service-section',
      false
    >;
    success_stories_section: Schema.Attribute.Component<
      'waslasoft.success-stories',
      false
    >;
    testimonials_section: Schema.Attribute.Component<
      'waslasoft.testimonial-section',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    why_choose_section: Schema.Attribute.Component<
      'waslasoft.why-choose-section',
      false
    >;
  };
}

export interface ApiZohoApplicationZohoApplication
  extends Struct.SingleTypeSchema {
  collectionName: 'zoho_applications';
  info: {
    description: 'Page content for Zoho Applications and Services';
    displayName: 'Zoho Application';
    pluralName: 'zoho-applications';
    singularName: 'zoho-application';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    app_cards: Schema.Attribute.Component<'zoho-app.app-item', true>;
    approach_cards: Schema.Attribute.Component<'zoho-app.approach-item', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hero_section: Schema.Attribute.Component<'zoho-app.hero', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::zoho-application.zoho-application'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    service_cards: Schema.Attribute.Component<
      'zoho-app.service-section',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiZohoBlogPageZohoBlogPage extends Struct.SingleTypeSchema {
  collectionName: 'zoho_blog_pages';
  info: {
    description: 'Dynamic content for Zoho Blog Page';
    displayName: 'Zoho Blog Page';
    pluralName: 'zoho-blog-pages';
    singularName: 'zoho-blog-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articles: Schema.Attribute.Component<'zoho-app.blog-article', true>;
    blog_section_description: Schema.Attribute.Text;
    blog_section_heading: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hero_section: Schema.Attribute.Component<'zoho-app.hero', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::zoho-blog-page.zoho-blog-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subscription_section: Schema.Attribute.Component<
      'zoho-app.subscription',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiZohoCaseStudyPageZohoCaseStudyPage
  extends Struct.SingleTypeSchema {
  collectionName: 'zoho_case_study_pages';
  info: {
    description: 'Dynamic content for Zoho Case Study Page';
    displayName: 'Zoho Case Study Page';
    pluralName: 'zoho-case-study-pages';
    singularName: 'zoho-case-study-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    case_studies: Schema.Attribute.Component<'zoho-app.case-study-item', true>;
    case_studies_section_description: Schema.Attribute.Text;
    case_studies_section_heading: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hero_section: Schema.Attribute.Component<'zoho-app.hero', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::zoho-case-study-page.zoho-case-study-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiZohoIndustryPageZohoIndustryPage
  extends Struct.SingleTypeSchema {
  collectionName: 'zoho_industry_pages';
  info: {
    description: 'Dynamic content for Zoho Industry Page';
    displayName: 'Zoho Industry Page';
    pluralName: 'zoho-industry-pages';
    singularName: 'zoho-industry-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hero_section: Schema.Attribute.Component<'zoho-app.hero', false>;
    industry_section: Schema.Attribute.Component<'zoho-app.app-item', true>;
    industry_section_description: Schema.Attribute.Text;
    industry_section_title: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::zoho-industry-page.zoho-industry-page'
    > &
      Schema.Attribute.Private;
    overview_section: Schema.Attribute.Component<
      'zoho-app.industry-feature',
      true
    >;
    overview_section_description: Schema.Attribute.Text;
    overview_section_title: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiZohoZoho extends Struct.SingleTypeSchema {
  collectionName: 'zohos';
  info: {
    displayName: 'Zoho';
    pluralName: 'zohos';
    singularName: 'zoho';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq_section: Schema.Attribute.Component<'companyhome.qna', true>;
    global_footprint: Schema.Attribute.Component<
      'company-career.company-stats',
      false
    >;
    hero_section: Schema.Attribute.Component<'zoho.hero', false>;
    industry_solutions: Schema.Attribute.Component<
      'companyhome.industry',
      false
    >;
    integration_section: Schema.Attribute.Component<'heading.heading1', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::zoho.zoho'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    solutions_list: Schema.Attribute.Component<
      'division.divisioncategory',
      true
    >;
    testimonials_section: Schema.Attribute.Component<
      'companyhome.client-review',
      false
    >;
    transforming_workflows: Schema.Attribute.Component<
      'company-career.febno-cards',
      true
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    why_choose_section: Schema.Attribute.Component<'heading.heading1', false>;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::session': AdminSession;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::ai-data-insights-page.ai-data-insights-page': ApiAiDataInsightsPageAiDataInsightsPage;
      'api::ai-data-intelligence.ai-data-intelligence': ApiAiDataIntelligenceAiDataIntelligence;
      'api::ai-data-solution.ai-data-solution': ApiAiDataSolutionAiDataSolution;
      'api::aws-page.aws-page': ApiAwsPageAwsPage;
      'api::azure-page.azure-page': ApiAzurePageAzurePage;
      'api::case-study.case-study': ApiCaseStudyCaseStudy;
      'api::company-abovepartner.company-abovepartner': ApiCompanyAbovepartnerCompanyAbovepartner;
      'api::company-career.company-career': ApiCompanyCareerCompanyCareer;
      'api::company-client.company-client': ApiCompanyClientCompanyClient;
      'api::company-division.company-division': ApiCompanyDivisionCompanyDivision;
      'api::company-milestone.company-milestone': ApiCompanyMilestoneCompanyMilestone;
      'api::company-partnership.company-partnership': ApiCompanyPartnershipCompanyPartnership;
      'api::company-project.company-project': ApiCompanyProjectCompanyProject;
      'api::company-qna.company-qna': ApiCompanyQnaCompanyQna;
      'api::company-thirdpage.company-thirdpage': ApiCompanyThirdpageCompanyThirdpage;
      'api::company.company': ApiCompanyCompany;
      'api::contact.contact': ApiContactContact;
      'api::division.division': ApiDivisionDivision;
      'api::erp-business.erp-business': ApiErpBusinessErpBusiness;
      'api::footer-above.footer-above': ApiFooterAboveFooterAbove;
      'api::footer.footer': ApiFooterFooter;
      'api::gitexhome.gitexhome': ApiGitexhomeGitexhome;
      'api::global-sourcing.global-sourcing': ApiGlobalSourcingGlobalSourcing;
      'api::google-cloud-page.google-cloud-page': ApiGoogleCloudPageGoogleCloudPage;
      'api::herosection.herosection': ApiHerosectionHerosection;
      'api::home.home': ApiHomeHome;
      'api::infrastructure-hosting.infrastructure-hosting': ApiInfrastructureHostingInfrastructureHosting;
      'api::infrastructure-managed-service.infrastructure-managed-service': ApiInfrastructureManagedServiceInfrastructureManagedService;
      'api::infrastructure-page.infrastructure-page': ApiInfrastructurePageInfrastructurePage;
      'api::insight.insight': ApiInsightInsight;
      'api::insights-blog-page.insights-blog-page': ApiInsightsBlogPageInsightsBlogPage;
      'api::insights-events-page.insights-events-page': ApiInsightsEventsPageInsightsEventsPage;
      'api::insights-news-page.insights-news-page': ApiInsightsNewsPageInsightsNewsPage;
      'api::main-division.main-division': ApiMainDivisionMainDivision;
      'api::managed-security.managed-security': ApiManagedSecurityManagedSecurity;
      'api::migration.migration': ApiMigrationMigration;
      'api::nav.nav': ApiNavNav;
      'api::odoo-expertise-page.odoo-expertise-page': ApiOdooExpertisePageOdooExpertisePage;
      'api::odoo-page.odoo-page': ApiOdooPageOdooPage;
      'api::partnership.partnership': ApiPartnershipPartnership;
      'api::post.post': ApiPostPost;
      'api::product-distribution-ecosystem.product-distribution-ecosystem': ApiProductDistributionEcosystemProductDistributionEcosystem;
      'api::productivity-collaboration.productivity-collaboration': ApiProductivityCollaborationProductivityCollaboration;
      'api::quickbooks.quickbooks': ApiQuickbooksQuickbooks;
      'api::tally.tally': ApiTallyTally;
      'api::waslasoft-page.waslasoft-page': ApiWaslasoftPageWaslasoftPage;
      'api::zoho-application.zoho-application': ApiZohoApplicationZohoApplication;
      'api::zoho-blog-page.zoho-blog-page': ApiZohoBlogPageZohoBlogPage;
      'api::zoho-case-study-page.zoho-case-study-page': ApiZohoCaseStudyPageZohoCaseStudyPage;
      'api::zoho-industry-page.zoho-industry-page': ApiZohoIndustryPageZohoIndustryPage;
      'api::zoho.zoho': ApiZohoZoho;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
