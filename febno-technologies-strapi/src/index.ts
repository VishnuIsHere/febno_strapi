export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   */
  register() { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   */
  async bootstrap({ strapi }) {
    try {
      console.log('SEEDING: Cleaning up old Case Studies...');
      const existingCaseStudies = await strapi.entityService.findMany('api::case-study.case-study');
      if (existingCaseStudies && existingCaseStudies.length > 0) {
        for (const cs of existingCaseStudies) {
          await strapi.entityService.delete('api::case-study.case-study', cs.id);
        }
      }

      console.log('SEEDING: Adding New Case Studies from User Images...');
      const caseStudies = [
        {
          title: "Insource Prime: Driving Faster Lead Conversion and Quote-Driven Sales Execution with Zoho CRM",
          category: "ERP & Business Applications",
          subcategory: "Zoho",
          description: "Insource Prime Business Management Services partnered with Febno Technologies to implement Zoho CRM, transforming their lead management and sales execution into a streamlined capability.",
          stat: "25% Higher Conversion",
          duration: "3 Months Implementation",
          content: `## Project Overview

Insource Prime Business Management Services, based in Dubai, experienced growing challenges in managing lead conversions and maintaining a seamless quote-driven sales execution process. Their existing legacy system left many blind spots in monitoring team performance and tracking user activities.

To address these issues, they partnered with Febno Technologies to implement and customize Zoho CRM, transforming their lead management and sales execution into a streamlined, high-performance structured capability.

## Key Takeaways
- Centralized visibility of all operations and sales performance via a single dashboard.
- Automated lead assignment and standardized follow-up processes.
- Quickly modeled customized workflows for dynamic quotation process changes.
- Purpose-built reports and dashboards for data-driven operational decisions.
- A scalable CRM setup supporting future expansion across branches.

## Executive Summary
Insource Prime Business Management Services needed to modernise their existing lead generation and computing operations across all managing platforms, enhancing strong brand trust and delivering exceptional support. To achieve this, new networks must rely on timely lead management support, and regulatory and legal compliance guidelines. It entails reliable and responsive IT processes as driven by strict SLA constraints with customers.

Operating in a fast-paced, enquiry-driven environment, the company generated a large share of its leads through digital channels, particularly Meta (Facebook) Lead Ads. As inquiry volume increased, sales teams faced challenges due to the absence of a structured CRM system - resulting in delayed follow-up, limited pipeline visibility, and manual handling of quotations.

They needed a system that could be customized to automate pipeline workflows spanning all steps of client interactions:
- Inquiry to basic requirements gathering
- With this in mind project stakeholders decided on a more unified CRM and structured aligned approach to sales. Adopting Zoho CRM, to manage enquiries efficiently manage quotation progress accurately, and improve overall conversion effective rate.

Location: Dubai, UAE  
Industry: IT Services and Solutions - Business Setup

## Problem Statement and Key Challenges
As business volume increased, Insource Prime Business Management Services encountered several operational challenges that impacted their performance and visibility.

**Key Challenges**
- **Manual Lead Distribution**
  Lead distribution from Meta ad campaigns was assigned manually, leading to missed opportunities and inconsistent response times across the sales team.
- **Inconsistent Follow-up Practices**
  Sales reps lacked an automated and structured system rules, resulting in scattered delayed follow-ups and limited visibility into pending actions.
- **Misalignment Between Deals and Quotations**
  Changes in a deal's status were not automatically reflected within the macro quotes, causing inconsistencies when tracking deal values and quoting.
- **Limited Reporting and Insights**
  Out-of-the-box reports did not provide sufficient visibility into sales team user-centricity, product performance, and billing data-driven decision making.

## Evaluation of the Problem
Using Zoho CRM in upgrading the partner teams carried out a detailed assessment of Insource Prime's sales lifecycle. The evaluation focused on:
- Patterns in lead influx from Meta Ads and manual sources.
- Gaps in lead assignment and response consistency.
- The dependency between deal stages and quotation progress.
- Reporting metrics required by management visibility.

The assessment confirmed the need for a unified automation, quotation alignment, and a centralized reporting within a unified CRM environment.

## Proposed Solution
A robust Zoho CRM solution was designed and implemented to address all constraints and support a central sales operational approach.

**Key Solution Components:**
- **Direct Integration with Meta (Facebook) Lead Ads** for instant lead capture.
- **Automated Lead Distribution** workflows to assign leads in real-time based on criteria checks.
- **Deal and Quotation Status Sync** aligned with quotation flow.
- **Automated Approval Workflows** from lead capture to final quotation approval.
- **Customized performance tracking dashboards** for management visibility.

Zoho CRM was selected for its flexibility, scalability, and ability to support both internal and external integrations aligned with their unique workflow.

## Implementation
The project was executed in a phased approach to ensure smooth adoption and minimize disruption to ongoing sales activities.

**Implementation Highlights:**
- **Lead Capture and Assignment**
  Meta Ads was integrated to CRM ensuring that assigned resources received leads immediately allocated to the operational rep, improving response times.
- **CRM Customization**
  Custom object statuses were defined (Quoted, Invoiced), while the Deals module was customized to update automatically when the Quotation status changed.
- **Quotation Workflow Alignment**
  Quotation approvals were mapped to deal stages, ensuring that the sales pipeline accurately reflected the current status of each opportunity.
- **Reporting and Dashboards**
  Custom reports were created to track:
  - Leads by source, date, and owner
  - Lead conversion rate metrics
  - Deal pipeline by quotation status
  - Overall sales performance and pipeline health

Implementation Duration: The solution was delivered within a 4-week timeline.  
Additional Services: Offline administration workflow configuration, reporting, dashboards, and user training.

## Results
Following the Zoho CRM implementation, Insource Prime Business Management Services experienced significant improvements:
- **Consistent response times** through automated assignment
- **Improved quotation accuracy** tightly linked to deal values
- **Measured sales pipeline conversion** tied up with customized views
- **Better management visibility** through actionable reports and dashboards
- **Reduced manual effort due to automated workflow reporting**`
        },
        {
          title: "Odoo ERP Implementation for Al Mayar Group",
          category: "ERP & Business Applications",
          subcategory: "Odoo",
          description: "Comprehensive Odoo ERP implementation for Al Mayar Group to streamline their FMCG distribution and operational processes across the Middle East.",
          stat: "Unified Operations",
          duration: "6 Months Implementation",
          content: `## Project Overview

Al Mayar Group is a leading conglomerate in the Middle East, with operations across the UAE, Saudi Arabia, Qatar, Oman, and Bahrain. The group is engaged in diverse sectors including consumer and general trading, and FMCG manufacturing and distribution. With multiple branches and operations spread across countries, Al Mayar Group needed a unified ERP system to streamline business operations, improve efficiency, and support their growing regional presence.

## Business Challenges
Before engaging with Febno Technologies, Al Mayar Group was relying on diverse ERP and business management systems:
- Unused ERP for day-to-day operations, which created significant challenges in inventory management and accounting accuracy.
- Multiple disconnected solutions that lacked proper integration, resulting in data duplication, manual reconciliation, and delays in reporting.
- A fragmented system architecture, which failed to support multi-branch and multi-company management, leading to operational inefficiencies.

## Key pain points included:
- Difficulty in managing multi-branch operations across countries.
- Lack of real-time inventory visibility and stock control.
- Complicated financial consolidation for multiple entities.
- Absence of a single platform for HR, payroll, sales, and CRM.
- Increased operational costs due to redundant tools and manual processes.

## Febno's Solution
Febno Technologies partnered with Al Mayar Group to design and implement a comprehensive Odoo Community Edition ERP solution tailored to their unique multi-country, multi-company needs.

The implementation included the following Odoo modules:
- **Sales Management**: Streamlined quotation-to-invoice processes and unified sales tracking across regions.
- **Purchase Management**: Automated procurement cycles with supplier management and purchase approvals.
- **Inventory Management**: Advanced stock tracking with improved warehouse operations and real-time visibility across all branches.
- **Manufacturing**: Efficient production planning and monitoring for switchgear and electrical manufacturing units.
- **Accounting**: End-to-end financial management with multi-company consolidation, tax compliance, and automated reporting.
- **Human Resources & Payroll**: Centralized employee management, payroll processing, and compliance for multiple countries.
- **CRM**: Improved customer engagement with integrated lead management, opportunity tracking, and sales forecasting.

## Our team provided:
- Consultation to map Al Mayar's business processes into Odoo.
- Customization to handle multi-company, multi-currency, and local tax specific requirements.
- Implementation to ensure an easy and smooth migration from legacy systems to Odoo.
- Training & Support to empower Al Mayar's staff for effective adoption of the new system.

## Results Achieved
The successful implementation of Odoo ERP brought significant improvements to Al Mayar Group's operations:
- **Unified Operations**: A single Odoo instance now manages all entities across UAE, Saudi Arabia, Qatar, Oman, and Bahrain.
- **Improved Inventory Accuracy**: Real-time stock visibility eliminated stock discrepancies and optimized warehouse operations.
- **Streamlined Financial Management**: Multi-company accounting simplified group-level financial consolidation and compliance.
- **Operational Efficiency**: Reduced dependency on multiple disconnected systems, leading to faster decision-making and cost savings.
- **Scalable Platform**: The Odoo Community Edition implementation is flexible to support Al Mayar Group's future growth and expansions.
- **Employee Productivity**: HR & payroll automation reduced manual errors and improved workforce management.
- **Better Customer Experience**: CRM and sales integration improved client interactions and order tracking across regions.

## Why Febno Technologies?
- Expertise in Odoo & Zoho ERP implementations across industries.
- Proven track record in handling multi-company, multi-branch ERP rollouts.
- Strong consultation and customization capabilities to align ERP systems with business needs.
- Dedicated support and training ensuring smooth adoption and long-term success.

## Conclusion
With Febno Technologies' expertise, Al Mayar Group successfully transitioned from fragmented systems to a comprehensive Odoo ERP solution. The implementation has empowered them with a unified, scalable, and efficient ERP system, enabling smooth operations across multiple countries and business entities.

This case study stands as a testament to Febno's commitment to delivering reliable ERP solutions for complex business environments in the Middle East.`
        },
        {
          title: "Aman Enterprises Digital Transformation Journey with Odoo ERP",
          category: "Digital Transformation",
          subcategory: "Odoo",
          description: "Digital transformation for Aman Enterprises, a leading FMCG distribution company in Saudi Arabia with a strong distribution network.",
          stat: "100% ZATCA Compliance",
          duration: "4 Months Implementation",
          content: `## Project Overview

**Aman Enterprises** is a leading FMCG distribution company in Saudi Arabia, operating across multiple major regions. With a strong distribution network of 30+ vehicles and a growing product portfolio, the company serves a wide range of retail clients across the Kingdom.

As their operations expanded, Aman Enterprises faced increasing challenges in managing van sales, localized operations, and compliance requirements. To overcome these issues and ensure scalability, they partnered with Febno Technologies, a trusted ERP solutions provider.

## Challenges

Before implementing Odoo ERP, Aman Enterprises relied on a mix of legacy and standalone systems, which functioned in the early stages, these legacy tools struggled to support the company's growing operations across multiple regions.

**Key pain points included:**

- **Van Sales Management Issues**: Difficulty in tracking van stock, dynamic sales order forms, and driver reconciliation, especially in areas with poor internet connectivity.
- **Manual Promotion & B2C Handling**: No centralized system for managing promotions and campaigns across IT and B2B clients, leading to inconsistencies and revenue leakages.
- **Delayed Performance Reporting**: Fragmented data processes led to delayed analytics and performance reports.
- **Manual Expenses Entry**: Field reps lacked tools to submit daily requests for expense reimbursements.
- **Compliance Gaps**: Absence of ZATCA Phase 2 invoicing compliance exposed the business to regulatory risks and penalties.

Aman Enterprises needed a scalable, user-friendly, and compliant cloud-based ERP system to unify operations across regions.

## Proposed Solution

After a thorough assessment of operational bottlenecks, Febno Technologies implemented a customized Odoo ERP solution that addressed both business and regulatory needs.

**Key Modules & Features Deployed:**

**1. Van Sales Management (Offline & Online)**
- Deployed a mobile van sales POS app with offline capabilities.
- Enabled van field route scheduling, real-time stock management, customer payments, and discount rules.
- Automatic data sync when internet connectivity is restored.

**2. Promotion & B2C Item Management**
- Automated rules for discounts, bundled offers, and B2C issuance based on customer segments.
- Standardized promotions across all regions, eliminating manual errors.

**3. Expense Entry by Drivers (POS-Based)**
- Drivers could record daily expenses (fuel, food, tolls) directly via the mobile POS interface.
- Faster reimbursement times with the head office receiving real-time visibility and approvals.

**4. ZATCA Phase 2 E-Invoicing Compliance**
- Integrated Odoo with ZATCA Phase 2 regulations.
- Implemented cryptographic invoice generation, QR codes, and real-time integration with Fatoora portal.
- Ensured 100% compliance, audit readiness, and smooth VAT reporting.

**5. Real-Time Reporting & Dashboards**
- Automated past-route reporting synchronized with the backend systems.
- Centralized dashboards provided region-wise visibility to management.

**6. Inventory & Financial Integration**
- Unified warehouse, sales, inventory, and finance in a single ERP platform.
- Replaced manual bookkeeping with automated journal entries for van sales activities.

## Implementation Highlights
- Industry-specific customizations on Odoo Community Edition.
- Offline-Online van sales system multi-tenant connectivity challenges.
- ZATCA compliant invoicing integrated with daily workflows.
- Business Intelligence dashboards for KPI tracking and decision-making.
- Scalable infrastructure to support regional business expansion.

## The Results
The Odoo ERP Implementation delivered by Febno Technologies has transformed Aman Enterprises' operations:
- Streamlined van sales with automated offline to online synchronization.
- Improved financial accuracy through required automation and ERP integration.
- Regulatory compliance achieved with ZATCA Phase 2 e-Invoicing.
- Faster decision-making with real-time dashboards and business intelligence tools.
- Scalable ERP platform to support future business growth across Saudi Arabia.`
        },
        {
          title: "Odoo ERP Implementation for Beefurb",
          category: "ERP & Business Applications",
          subcategory: "Odoo",
          description: "Streamlining refurbished laptop and mobile operations for Beefurb with Odoo ERP across the Middle East.",
          stat: "End-to-End Tracking",
          duration: "3 Months Implementation",
          content: `## Project Overview

**Beefurb** is a growing enterprise in the Middle East, specializing in refurbished laptops, mobiles, and computers. With operations across the UAE, Oman, Saudi Arabia, Qatar, and Bahrain, Beefurb serves retail consumers through retail stores as well as manufacturing and distribution. They target a cost-effective alternative to new devices without compromising quality and warranties.

## Business Challenges
Before adopting Odoo ERP with Febno Technologies, Beefurb faced multiple challenges in managing its diverse business processes:
- **Refurbishment Tracking**: Difficulty in monitoring the complete refurbishment cycle for laptops and mobiles—from purchase to warehouses and eventually to retail stores.
- **Warranty Management**: No proper system to track warranties by serial number, MAC address, or internal identifiers, leading to delays and disputes in handling returns.
- **Retail & Wholesale Billing**: Lack of an integrated billing solution for outlets' POS systems and wholesale dealer channels.
- **Inventory Returns & Repairs**: Inefficient handling of customer warranty claims and repair workflow tracking.
- **Inventory Control**: Challenges in managing refurbished stock, new accessories, and ensuring accurate stock levels across multiple outlets.
- **Accounting Inefficiencies**: Financial data was fragmented, with no consolidated view of revenues, expenses, or profitability across branches and outlets.
- **Fragmented Operations**: No unified system to connect purchasing, refurbishing, sales, service management, and finance.

## Febno's Solution
Febno Technologies implemented a tailored Odoo ERP Community Edition solution for Beefurb, covering their refurbishment, retail, wholesale, finance, and post-sales operations.

**The Implementation included:**
- **Sales Management** – streamlined sales cycles for both wholesale and retail, with custom billing options for wholesale customers.
- **Purchase Management** – procurement tracking of imported used devices, vendor management with purchase approvals and cost control.
- **Inventory Management** – advanced stock tracking with serial and lot numbers, real-time visibility across warehouses and outlets.
- **Manufacturing (Refurbishing Process)** – complete refurbishment process designed as a manufacturing workflow, quality checks at multiple stages, and warranty assignment linked with serial and MAC numbers.
- **Point of Sale (POS)** – retail POS systems implemented in all outlets, integrated with inventory and warranty tracking for smooth customer service.
- **Human Resources (HR)** – centralized management of employee records, attendance, and payroll.
- **Returns & Repair Management** – warranty claim tracking directly in outlets, repair notes and service workflows for In-warranty repairs, full visibility of product lifecycle from purchase to resale to after-sales service.
- **Accessories Sales** – management of new accessory inventory and sales through Odoo.
- **Accounting** – end-to-end financial management with multi-branch accounting, real-time tracking of sales, purchases, expenses, and profitability; consolidated reporting across multiple entities and countries, automated journal entries from POS, sales, and purchases, and compliance with regional accounting standards and tax requirements.

Our role included consultation, customization, implementation, training, and ongoing support to ensure Beefurb's operations were fully aligned with Odoo ERP.

## Results Achieved
The Odoo ERP Implementation provided end-to-end business visibility and efficiency for Beefurb:
- **Refurbishment Control**: The entire process of refurbishing laptops and mobiles is now tracked as a manufacturing workflow, ensuring quality and accountability.
- **Accurate Warranty Tracking**: Warranties are essentially tied to serial numbers and MAC addresses, simplifying return handling and improving customer trust.
- **Streamlined Retail & Wholesale Billing**: POS systems in retail outlets and custom wholesale billing options improved processing times.
- **Efficient Resource Management**: Customer care warranty claims handled directly as the outlet, with proper tracking and repair workflows.
- **Inventory Transparency**: Real-time stock updates for refurbished products and accessories improved stock control across outlets.
- **Integrated Financial Management**: Accounting module provided consolidated reporting, automated journal entries, and real-time financial insights across multiple branches.
- **Integrated Operations**: All departments — from purchasing and refurbishing to sales, finance, and after-sales service — are now unified under a single ERP system.
- **Scalability**: The Odoo solution is flexible to support Beefurb's growth as they expand operations across the Middle East.

## Why Febno Technologies?
- Proven expertise in ERP implementation for retail, trading, and manufacturing businesses.
- Strong experience in customizing Odoo for unique industry needs, like refurbishing workflows, warranty, and financial management.
- Ability to deliver end-to-end consultation, implementation, and training for smooth adoption.
- Dedicated support and continuous improvement for ERP systems.

## Conclusion
With the help of Febno Technologies, Beefurb has successfully transformed its business operations by adopting Odoo ERP Community Edition. The implementation streamlined their refurbishment, retail, inventory, warranty, finance, and repair processes, enabling them to provide better customer service and scale their operations across the Middle East.

This case study demonstrates how Febno Technologies delivers tailored ERP solutions that address complex business challenges and drive measurable results.`
        },
        {
          title: "Febno Technologies: Optimizing Attendance Management for Arabian Bedding LLC",
          category: "ERP & Business Applications",
          subcategory: "Zoho",
          description: "Implementation of Zoho People and attendance machine integration for Arabian Bedding LLC in Dubai.",
          stat: "Zero Manual Errors",
          duration: "2 Months Implementation",
          content: `## Project Overview

**Arabian Bedding Trading L.L.C** is a premier Manufacturing & Distribution Company in Dubai, specializing in the wholesale and retail distribution of premium mattresses, bedding and foam products.

As the workforce grew, reliance on separate time attendance databases and manual processes for locations created challenges for processing attendance efficiently. 

## Key Takeaways
- Modernized time capture and payroll tracking.
- Unified operations.
- Seamless integration with biometric devices across branches.

## Executive Summary
Arabian Bedding Trading L.L.C faced challenges with managing branch attendance securely and accurately. With multiple branches and over a large staff base, the HR team in Dubai needed a robust cloud-based HR system to centralize their processes.

## Problem Statement and Key Challenges
As the organization expanded, several pressing issues emerged in their HR operations:

1. **Fragmented Attendance Records**
   Each branch and manufacturing site largely operated independent databases. This resulted in a combination of decentralized data formats and inconsistencies during payroll processing.
2. **Manual Reconciliation Efforts**
   The HR team in Dubai manually had to consolidate hours, staff clock-in/out times, and attendance shifts by summarizing data across multiple locations, an incredibly time-consuming and error-prone process leading to payroll delays and inaccuracies.
3. **Staff Location Allocation & Tracking**
   Given the retail nature of their business, staff frequently moved between various retail store locations. There was no clear mechanism to accurately track where a staff member was working on any specific day.
4. **Complex Shift Configurations**
   The company had to sustain different shift patterns across retail locations and factory operations to calculate working hours and overtime accurately.
5. **Limited Visibility for Global HR**
   Accurate site attendance data was not delivered to the Central HR in Dubai in real-time, resulting in blind spots in tracking delays, absenteeism, and resource availability for daily operations.

## Evaluation of the Problem
The main issue was that the existing time attendance systems were not effectively connected to Arabian Bedding's core infrastructure. 

The evaluation also revealed that employees were struggling to request time-off consistently across branches while adhering to local UAE HR and residency regulations. The lack of standard allowance rules integrated directly into the payroll system generated inconsistent payouts and lowered employee satisfaction regarding payroll accuracy.

Therefore, a unified HR platform needed to address the following issues:
- Replace standalone branch attendance databases.
- Automate shift tracking and dynamic branch assignment.
- Ensure employee records complied with strict payroll policies.
- Provide a unified self-service portal for HR operations.

## Proposed Solution
Febno Technologies deployed Zoho People, a comprehensive HR management solution, seamlessly integrated through biometric attendance systems.

1. **Biometric Attendance Integration**
   Existing biometric scanners were integrated via API directly with Zoho People. This effectively standardized attendance capture, eliminating manual data entry, and provided real-time visibility across all branches.
2. **Staff Location Tracking**
   Custom functions were utilized so that the system automatically tags an employee's attendance record with the geolocation tags and IP addresses verifying their physical location.
3. **Custom Shift Rules**
   Over 20 distinct shift patterns were mapped and configured in the system based on UAE Labor laws to automate shift rotation management and overtime compensation natively.
4. **Centralized Leave System**
   Attendance and HR data across all branch locations are consolidated in Zoho People. This gives HR managers in Dubai direct, real-time access to accurate data for payroll decisions and reporting.

## Implementation
Febno Technologies executed the implementation in a carefully structured approach to minimize disruptions to operations:
- **Requirement Gathering & Process Mapping**: Detailed branch audits to understand existing protocols and HR compliance requirements.
- **Zoho Training and Adoption**: Configured and set up the foundation of the Zoho system specifically for the business and built advanced reporting and custom dashboards. This included a customized leave policy mapping and multi-level approval workflows.
- **Biometric Integration & Rollout**: API integrations built with existing branch hardware to track punches in and out. The system was then tested across all branches prior to finalizing go-live processes.

## Results
The deployment of Zoho People delivered immediate and transformative benefits for HR:
1. **Centralized Attendance Data**: Replacing isolated databases with a single reliable source of truth, replacing the need for multiple data formats and eliminating tedious manual consolidation.
2. **Payroll Processing Efficiency**: Outdated, error-prone manual calculations are history. By having overtime and shift allowances automatically calculated based on attendance rules and shift schedules, processing time is reduced by 60%.
3. **Advanced Shift Scheduling**: Intelligent scheduling limits branch managers to assign shifts and track availability intuitively, reducing unapproved overtime and detecting absent employees.
4. **Improved Compliance & Accuracy**: Leave policies accurately reflect local UAE laws. Standardized systems natively identify and accurately record sick, casual, and unpaid leaves.
5. **Enhanced Visibility for Global HR**: A unified dashboard in Zoho gives management quick access to crucial HR metrics across their entire regional operations, ensuring proactive adjustments to staffing plans when issues are spotted locally.`
        },
        {
          title: "Streamlining Attendance and Payroll: Lamasat Alkhayal's Successful Integration of ZKTeco F18 with Zoho People.",
          category: "ERP & Business Applications",
          subcategory: "Zoho",
          description: "Successful integration of ZKTeco F18 biometric devices with Zoho People for Lamasat Alkhayal, streamlining their attendance and payroll processes across 12 branch locations.",
          stat: "100% Automated Workflow",
          duration: "2 Weeks Implementation",
          content: `## Project Overview:
Lamasat Alkhayal, a growing retail enterprise operating across multiple storefronts, faced challenges with managing its workforce attendance and payroll processes. With over 150 employees working across 12 branch locations, the company relied on standalone biometric devices across each branch and disjointed HR platforms. This created massive manual data entry work for the HR team and caused inaccuracies during payroll processing, leading to delayed salary disbursements and employee dissatisfaction.

## Executive Summary
Recognizing these operational bottlenecks, Lamasat Alkhayal engaged with Febno Technologies to design a unified HR workflow. The goal was to seamlessly integrate their existing ZKTeco F18 biometric devices across all locations with a centralized, cloud-based HR platform, Zoho People. This integration would eliminate manual data intervention, ensuring automated and efficient payroll processing for all locations.

## Problem Statement and Key Challenges
Before the integration, Lamasat Alkhayal faced several issues:
- **Manual Attendance Data Entry**: Transferring attendance data from individual ZKTeco F18 devices to central spreadsheets was tedious.
- **Administrative Overhead**: HR teams spent over 15 hours per pay period reconciling mismatches and manually calculating overtime.
- **Payroll Inconsistencies**: Due to human error, incorrect clock-in/out records caused faulty payroll distribution, causing employee dissatisfaction.
- **Integration Requirements**: Lamasat Alkhayal needed a reliable bridge between their legacy onsite hardware and modern cloud-based software without discarding their hardware investments.

## Evaluation of the Problem
The Febno Technologies team assessed the challenges and identified that a centralized solution leveraging Zoho People's robust API could directly interface with the ZKTeco F18 devices. The approach aimed to handle the complexities of multi-location attendance management in real-time, reducing manual error and ensuring seamless data flow. The key requirement was to build a secure middleware connecting local hardware networks to Zoho People's cloud infrastructure.

## Proposed Solution
To meet these needs, the integration utilized a middleware architecture developed by Febno Technologies capable of the following:

- **Centralized Attendance Tracking**: Consolidated raw data collected from multiple locations and delivered directly to Zoho People for unified viewing and detailed reporting capabilities.
- **Real-Time Data Synchronization**: Cloud to Local hardware connectivity ensuring instantaneous attendance syncing with Zoho People, providing real-time visibility to HR.
- **Automated Overtime Integrations**: Automatic linking with Zoho People's shift structures and leave policies, streamlining the whole payroll processing tracking.

This solution allowed Lamasat Alkhayal to capitalize immediately on its existing infrastructure investments while eliminating all manual intervention bottlenecks in their HR processes.

## Implementation
The integration process, completed over 2 Weeks, involved the following steps:
- **Biometric Device Database Connectivity**: Mapped the ZKTeco F18 databases to an API-compatible format, ensuring seamless data integration.
- **Creation of Additional Tables and Triggers**: Developed custom additional tables and triggers to capture real-time attendance data punches and ensured reliable data synchronization with Zoho People.
- **Establishment of Integration Software**: Installed the necessary integration software on the server to establish secure and reliable connectivity between the biometric devices and Zoho People.
- **Plugin Connectivity and API Mapping**: Installed and configured the Zoho point-to-point plugin to ensure connectivity, mapping the data across the local devices to the corresponding Zoho People employee profiles and timesheet logs.
- **Testing and Validation**: Conducted thorough testing to ensure that data properly reflected within the appropriate fields in Zoho People, including accurate tracking of project billable hours and leave application statuses.
- **Training**: Provided comprehensive training to the HR team on using the new integrated system, empowering them to manage attendance configurations and payroll through the single unified platform.

## The Result
The successful integration provided significant improvements:
- **Improved Accuracy**: Process automations eliminated the human error factors of manual data entry, providing 100% attendance accuracy.
- **Streamlined Operations**: The automated workflow reduced HR administrative workload, allowing HR teams to focus on strategic initiatives.
- **Enhanced Productivity and Employee Satisfaction**: Unified tracking of payroll processing reduced delays and discrepancies resulting in a satisfied and motivated employee workforce across all locations.`
        },
        {
          title: "How Knowledge Grid Academy (KGA) Optimized HR Processes Using Zoho People",
          category: "ERP & Business Applications",
          subcategory: "Zoho",
          description: "Implementation of Zoho People for Knowledge Grid Academy in Oman to streamline employee records, attendance, and payroll.",
          stat: "Unified Platform",
          duration: "3 Weeks Implementation",
          content: `## Project Overview:
**Client:** Knowledge Grid Academy (KGA)
**Industry:** Education & Training (Oil and Gas Sector)
**Location:** Muscat, Sultanate of Oman
**Project:** Zoho People Implementation

Implementation completed in 3 weeks, catering to over 100+ academic and administrative staff across their local branches.

## Executive Summary
Knowledge Grid Academy (KGA), a premier educational institution operating in the Sultanate of Oman since 2012, faced critical challenges in managing employee records, attendance, leave approvals, and appraisals. With a scattered workforce consisting of both academic and administrative staff across multiple campuses, the lack of an integrated HR solution caused compliance risks, manual workload burdens, and payroll delays.

By adopting Zoho People with the integration of existing ZKTeco biometric devices, Febno Technologies provided KGA with a centralized HR management platform that streamlined their administrative processes, improved attendance tracking, and significantly reduced manual intervention.

## Problem Statement and Key Challenges
Before implementing Zoho People, KGA relied heavily on manual data entry and fragmented software systems.

- **Scattered Employee Data**: Employee files were stored in physical cabinets or decentralized folders, making reporting, tracking, and compliance management time-consuming and error-prone.
- **Manual Attendance Tracking**: Attendance was tracked via standalone biometric devices that were not integrated with payroll or leave management systems.
- **Leave and Shift Chaos**: Requests for time-off, permissions, and shift adjustments were managed via emails and paper forms, leading to conflicts in shift scheduling.
- **Disjointed Payroll Calculations**: Payroll adjustments related to leaves, unpaid days, and attendance had to be calculated manually, taking days for HR personnel every month.

These inefficiencies prevented the HR team from focusing on professional development and employee engagement, as they were continually bogged down by administrative tasks.

## Evaluation of the Problem
After a comprehensive assessment, Febno Technologies identified that KGA needed a unified HR platform capable of addressing key constraints:

- **Centralized Data Handling**: A platform capable of maintaining a master employee database with secure access controls.
- **Automated Workflow Automation**: Converting manual leave, appraisal, and document requests into streamlined, automated workflows.
- **Biometric Integration**: Seamless connection of the existing ZKTeco biometric devices directly with the attendance system.
- **Leave and Attendance Policies**: Implementing custom leave policies tailored to standard Oman Labor Law requirements.
- **Customized Reporting**: The ability to generate custom attendance and shift-wise reports for precise payroll calculation.

A unified platform was essential to support the institution's ongoing expansion while replacing legacy manual operations entirely.

## Proposed Solution
Febno Technologies proposed and successfully deployed a fully customized version of Zoho People for KGA. The implementation included the following core modules tailored to the academy's specific HR framework:

- **Centralized Employee Database**: A secure, cloud-based repository tracking employee details such as contracts, visa expirations, passports, emergency contacts, and job histories.
- **Automated Shift & Leave Management**: Configured custom leave types (Sick, Casual, Annual) integrating directly with specific leave rules and Oman labor compliance standards. Automated multi-level approval hierarchies for leave authorizations were put in place.
- **Biometric Device Integration**: Developed custom APIs to integrate the existing on-site ZKTeco biometric devices directly with Zoho People's attendance module. This facilitated real-time data sync eliminating the need for manual data imports.
- **Performance Management**: Deployed digital appraisal templates to track performance goals, KPIs, and trainer evaluations natively within the system.
- **Custom Notifications and Reminders**: Configured automated email/SMS reminders for document expirations (e.g., Visas, Passports, Trade Licenses) ensuring 100% compliance.

The implemented solution transformed HR from a manual record-keeping department into a strategic, automated functionality managing over 100 employees across all branches.

## Implementation
The implementation was executed in a phased approach to minimize disruptions to ongoing operations:

- **Requirements Analysis**: Complete evaluation of KGA's specific needs, branch configurations, and payroll compliance criteria.
- **Configuration & Biometric Integration**: Custom setup of Zoho People forms, workflows, and seamless integration with existing ZKTeco biometric hardware via API bridging.
- **Data Migration**: Secure transfer of all legacy employee data, leave balances, and historical records into the new Zoho People instances.
- **Testing & Refinement**: Rigorous branch-level testing to ensure that data flows seamlessly from device punches to final attendance reconciliation structures.
- **Training and Handover**: Final stage involved comprehensive training sessions for KGA's HR personnel, equipping them to utilize Zoho People's features and manage future organizational changes effectively.

## The Result
The deployment of Zoho People delivered significant and transformative benefits for KGA:

1. **Unified HR Operations**: Replaced fragmented spreadsheets with a single, reliable source of truth for all employee data and performance metrics.
2. **Eliminated Manual Data Entry**: Zero manual intervention required for attendance logging; biometric integration ensured precise and tamper-proof real-time sync with HR dashboards.
3. **Automated Leave & Approvals**: Shift conflicts practically eliminated with automated leave tracking and policy-compliant attendance records. Paper-based applications were discarded, saving hours of weekly processing time.
4. **Improved Payroll Accuracy**: The HR team now generates accurate attendance reports directly from Zoho People, cutting down monthly payroll preparation time by 75%.
5. **Proactive Compliance Insights**: Automated reminders for visa and contract renewals ensured that the institution remained fully compliant with Oman labor laws without tracking dates manually.`
        },
        {
          title: "How Naas Tech Solutions Enforced Financial Discipline with Automated Invoice Validation in Zoho One",
          category: "ERP & Business Applications",
          subcategory: "Zoho",
          description: "Implementation of Zoho One to automate invoice validation workflows, improving financial discipline and project tracking for Naas Tech Solutions.",
          stat: "Zero Manual Errors",
          duration: "4 Weeks Implementation",
          content: `## Project Overview:
Founded in 2017 in Dubai, UAE, Naas Tech Solutions has quickly established itself as a leading IT solutions provider specializing in security, networking, and surveillance solutions. As the company scaled rapid expansion followed the company's cohesive ideology outpaced operational execution. Their complex operations across multiple divisions, 17 regional offices in Dubai, and project workflows often led to unaligned back-office and inter-departmental operations. Most critically, manual approvals via email and chats meant unmeasured assessment risk, with items being sent before acceptance over project overall allocation dropping margins unnoticed.

To overcome these challenges, Naas Tech Solutions partnered with Febno Technologies, a Zoho implementation partner. Febno designed and deployed a Zoho One solution tailored to the company's workflows, beginning with automated invoice validation through a custom-built "Save Invoice" button. By enforcing strict safeguards, automated CRM, Books, and Projects introduced a secured blueprint for execution precision across the company.

## Key takeaways:
- Safe and invoice validation at the point of entry with a custom "Save Invoice" button.
- Automated warning of margin drops for profitable IT enforcement.
- Unified Zoho CRM, Books, and Projects Integration to eliminate silos.
- Enhanced project visibility through structured blueprints.
- Secure, role-based access with rule-based access matrix for site engineers and corporate users.

## Problem Statement and Key Challenges
Naas Tech Solutions identified several critical challenges across its operations, which demanded immediate attention:
- **Revenue Risks**: Without automated checks, invoices were manually entering dropping below the minimum selling price leading margins to drop. Even worse discounts were not systematically tracked, allowing field interventions that further exposed the business to financial risk.
- **Project Visibility Issues**: Sales to project handovers lacked a structured approach. This caused difficulties in tracking budgets, timelines, and responsibilities, often leading to delays or scope mismanagement.
- **Fragmented Operations**: Sales, finance, and project teams worked in silos, relying on disconnected systems. Information was duplicated across tools, creating errors and inefficiencies that slowed down decision-making.
- **Scalability and Compliance Concerns**: As the company grew, its manual processes were unable to keep pace with the complexity of operations. Data access controls and inconsistent workflows threatened compliance and data security.

## Evaluation of the Problem
Febno Technologies began by conducting a detailed audit of Naas Tech Solutions' workflows. The assessment confirmed that uncontrolled invoicing posed the most acute risks. At the same time, inefficiencies in project management and the absence of a unified data repository created operational bottlenecks.

Febno's analysis revealed that a piecemeal approach to software implementation would not effectively address the complex processes tied to global operations. Their visibility requirements necessitated a framework with business priorities positioned their technical team just an implementation – they became a strategic partner in Naas Tech Solutions' digital transformation.

## Proposed Solution(s)
Febno Technologies deployed Zoho One with robust customisations structured around an integrated business operations paradigm.
- **Invoice Enhancements**: Custom Invoice types were introduced to distinguish between Cash and Credit transactions. Corporate and showroom invoices were assigned distinct serial numbers, simplifying tracking and reducing errors.
- **Invoice Validation**: A custom "Save Invoice" button was built to enforce validation at the point of entry. We mapped pricing checks ensuring that no item was sold below acceptable margins. While intuitive interface details prevented high risk accounts from generating fresh transactions.
- **CRM Customization**: Structured operational leads, Contacts, Deals, and their pipeline moved deals into actionable milestones within the standard sales process. A project management blueprint guided every handover from sales to execution, introducing mandatory stages and accountability checkpoints.
- **Project Management**: Zoho Projects was customized to track budgets, milestones, and resources comprehensively. Integration with Zoho CRM ensured seamless handovers, eliminating errors and delays during the transition.
- **Integrations**: Zoho CRM, Books, and Projects were inter-connected to ensure a single flow of information. Data entry in one system was automatically reflected in the others, keeping all teams aligned and reducing duplication.
- **Access and Security**: Feeds implemented strict role-based access restrictions. Showrooms were restricted to handling Cash transactions only, while corporate staff maintained oversight across all operations. This minimized security and ensured compliance with internal policies.

## Implementation
Febno Technologies executed the deployment phases, ensuring minimal disruptions to daily operations while immediately tackling pressing issues.
- **Disruption Free Integration**: Rather than overhaul all business operations, we prioritized the immediate protection against revenue leakage. Custom phases ensured CRM was active to intercept margin drops as a foundation measure limits.
- **Customizations**: Febno built the custom invoice validation scripts, developed the business automation rules, and initialized action boards tailored to enforcing business discipline.
- **Data Migration**: Historical sales and finance records were migrated into Zoho CRM and Zoho Books, ensuring a required reporting and a clean starting point for the new system.
- **Role-Based Access**: Access restrictions were configured so that showroom teams operated in Cash only, while corporate teams retained broad control, strengthening data security.
- **Bottlenecks and Mitigation**: Approval delays were resolved with conditional automation, which streamlined processed without compromising compliance standards.

Febno's phased and methodical approach allowed Naas Tech Solutions to adopt Zoho One without operational downtime, ensuring both immediate financial discipline and long-term scalability.

## Results
The deployment of Zoho One brought measurable improvements to Naas Tech Solutions' operations, with results spanning financial performance, operational efficiency, and compliance.
- **Revenue Protection**: The custom "Save Invoice" button transformed invoicing from a manual, error-prone task into a controlled process. With profit checks and overdue controls, Naas Tech Solutions eliminated the risk of underpriced sales and bad debt exposure. Profitability thresholds were consistently met, instilling financial discipline across the organization.
- **Operational Efficiency**: Automation across the entire approval bottlenecks, saving time for both sales and finance teams. Staff shifted their focus from repetitive tasks to value-added activities like customer engagement and service delivery. This saved effort inline shows directly improved responsiveness to customers.
- **Data Accuracy and Visibility**: Restructured CRM operations eliminated duplication and enforced consistency in data entry. Management gained reliable, real-time insights into sales pipelines, project progress, and financial metrics, enabling informed, timely decisions.
- **Enhanced Project Execution**: Blueprint-led processes created a secure and accountable handover management. Handovers from sales to execution became seamless, with clear roles and responsibilities at each stage. This reduced delays, improved delivery timelines, and boosted customer satisfaction.
- **Security and Compliance**: Role-based access controls ensured that users only accessed relevant data. Sensitive financial information was shielded from unauthorized visibility, while Sales transaction restrictions provided further safeguards. Naas Tech Solutions now has a scalable framework that supports compliance as the company expands.

Throughout the project, Febno was not only the implementer but the architect of business value. By aligning Zoho One's flexibility with Naas Tech Solutions' business priorities, Febno delivered a system that resolved immediate challenges while building a foundation for sustainable growth – transforming the company from fragmented manual processes to a unified, disciplined, and scalable operation ready to protect revenue, streamline operations, and support future expansion.`
        },
        {
          title: "Ramad Pay: Building a Future-Ready, Scalable Agent Onboarding and Compliance Platform with Zoho",
          category: "ERP & Business Applications",
          subcategory: "Zoho",
          description: "How Ramad Pay in Somalia utilized Zoho to automate agent onboarding, manage compliance, and scale operations rapidly.",
          stat: "Custom Onboarding",
          duration: "4 Months Implementation",
          content: `## Project Overview:
As Ramad Pay aimed for scale and expansion in 2023, its legacy processes were over-reliant bottlenecks. Manual agent onboarding, fragmented compliance management, and disconnected training platforms slowed growth, increased operational risk, and made regulatory compliance challenging.

Febno Technologies collaborated as their implementation partner to build a digital infrastructure using Zoho One. We architects a full suite built on Zoho CRM, Creator, Desk, and Sign to construct:

- **100% digital agent onboarding**, replacing paper driver forms and data entry.
- **Centralized KYC/AML Compliance**, consolidating ID verification, document checks, and risk profiling in one place.
- **Automated training and certification**, integrating Moodle LMS for mandatory training and CRM linkage.
- **Customized branch operations app** on Zoho Creator.
- **Scalable architecture**, supporting 2,000+ local agent and internal operations.

## Executive Summary
For money transfer operations, agent network onboarding isn’t just an operational procedure; it’s the lifeline. Ramad Pay, with its rapidly expanding network across Somalia, initially relied heavily on manual data entry, physical verification, and disconnected workflows to process new agents. As its network grew to 2,000 agents, the manual approach became unsustainable. Errors in manual data entry caused verification delays, increasing the time to generate agent revenue. Regulatory audits were complicated by fragmented data storage.

Furthermore, internal divisions—sales, compliance, operations, and branches—functioned independently, resulting in delays, duplication of effort, and missing information. Ramad Pay realized the need for a comprehensive digital transformation to automate workflows, ensure rapid agent deployment, and adhere to strict financial regulatory standards.

## Problem statement and key challenges
Scaling a money services business comes with stringent operational and regulatory demands. Ramad Pay faced:

**1. Fragmented Agent Onboarding & Management**
- **Slow Onboarding:** Manual processes for agent applications, approvals, and contract signing caused delays and inefficiency.
- **Fragmented Data:** Information spanning CRM, physical files, and internal systems led to data inconsistency and complicated audits.
- **Training Disconnection:** Mandatory agent compliance training was not systematically linked to agent records or business progress.
- **Contract Management:** Issuing, signing, and renewing individual agent contracts was an administrative burden, risking non-compliance.

Without a unified, automated infrastructure, Ramad Pay risked operational stagnation, regulatory penalties, and a poor agent experience.

## Evaluation of the Problem
Febno Technologies executed an end-to-end assessment of Ramad Pay's operations. We found:
- **Agent Lifecycle Automation:** A lack of connectivity across the sourcing, vetting, and training phases.
- **Application & Compliance processing:** Heavy reliance on manual paper-based processes.
- **Compliance Checks:** Disconnected risk assessments and document verification layers.
- **Training Tracks:** LMS records were not linked to CRM, causing training completion certification blind spots.
- **Contract Management:** Documents were manually generated and collected prolonging the overall turnaround time.

The assessment confirmed the need for a unified, secure platform built heavily around onboarding, training tracking, and document execution, protecting real-time state tracking up to final business generation.

## Proposed Solution
A robust solution using Zoho CRM, Zoho Forms, Zoho Sign, and Moodle LMS was implemented to automate the entire agent lifecycle.

- **Agent Registry & Lead Management:** Zoho CRM served as the central engine, tracking the entire agent lifecycle—from prospect to active agent.
- **Digital Onboarding Automation:** Zoho Forms deployed secure, mobile-friendly application portals for agents.
- **KYC & Verification Workflow:** Automated checks integrated with compliance teams for document reviews and verifications.
- **Training & Certification Tracking:** Integrated Moodle LMS with CRM to automate progress tracking. Only agents completing training could become active.
- **Digital Contract Execution:** Zoho Sign was integrated to generate, distribute, and collect secure, legally binding electronic signatures for contracts.
- **Custom Branch Operations App:** Zoho Creator built a customized app for branch managers to handle local tasks.
- **Reporting & Dashboards:** Real-time visibility into agent status, compliance metrics, and training progress.

## Implementation
The solution was deployed in a phased approach to ensure smooth adoption and operational continuity.

**Phase 1 - Lead Capture & Routing**
- Zoho Forms customized for the online agent application process.
- Automated routing for branch review, categorizing applications by operating area.
- CRM built centralizing all lead interactions and moving leads to application stages.

**Phase 2 - KYC, Verification & Application Management**
- CRM records updated to handle detailed KYC verifications.
- Automated approval hierarchies routed to the compliance team.
- Document generation triggered built-in data verification workflows extending data security.

**Phase 3 - Training Integration**
- Moodle LMS integrated with CRM to track individual agent compliance progress.
- API interlink updated CRM based on training milestones achieved.

**Phase 4 - Digital Contract Execution**
- Zoho Sign templates built for contract processing.
- Signed contracts routed to CRM to complete the agent onboarding process.
- Automated notifications to keep branches updated.

**Phase 5 - Profiling & Operations**
- Final execution checklist linked status to active in internal systems.
- Zoho Creator application rolled out to branch operations.

Custom workflows fulfilled each departmental requirement without extending timelines. Detailed integration checking ensured smooth data flows into the global infrastructure.

## Results
The Zoho-powered solution delivered immediate operational improvements:

- **Accelerated Agent Onboarding:** Application time reduced from weeks to days, enabling rapid network growth.
- **Centralized Compliance Management:** CRM served as a secure hub for all KYC documentation, reducing risk and audit preparation errors.
- **Automated Training Enforcement:** Inter-systems linked compliance learning with the contract execution capability.
- **Seamless Digital Contract Execution:** Zoho Sign eliminated manual contract handling and delays.
- **Enhanced Data Accuracy & Efficiency:** Manual data entry eliminated, reducing human error significantly.
- **Scalable Infrastructure:** Ramad Pay now possesses a robust operational framework supporting their ongoing growth goals.

## Conclusion
By partnering with Febno Technologies, Ramad Pay replaced a disconnected legacy infrastructure, forming a secure growth foundation. Using the existing strengths of Zoho CRM and Moodle LMS, the project solved complex operational issues and transformed them into a competitive, digital-first foundation for scalable growth.

Ramad Pay's journey illustrates how embracing a unified, cloud-based operational foundation empowers a financial services provider to confidently scale while remaining strictly compliant in a high-demand industry.`
        },
        {
          title: "How Safeway Groups Streamlined Attendance Tracking and HR Compliance Using Zoho People and ZKT Biometric Devices",
          category: "ERP & Business Applications",
          subcategory: "Zoho",
          description: "Implementation of Zoho People and ZKTeco biometric integration for Safeway Groups to automate attendance and compliance.",
          stat: "100% Automated Tracking",
          duration: "2 Weeks Implementation",
          content: `## Project Overview
Safeway Groups, a leading Abu Dhabi-based interior design and fit-out company, faced challenges in managing employee attendance across multiple sites. Manual processes and inconsistent application of overtime and grace period policies caused inefficiencies, compliance issues, and increased HR workload.

Febno Technologies implemented and configured Zoho People, fully integrated with ZKT biometric devices, for real-time attendance management and robust HR policy enforcement. The solution provided real-time visibility, standardized allowance rules, and significantly enhanced HR accuracy and operational efficiency.

## Key Takeaways
- Biometric attendance tracking integrated seamlessly with Zoho People across all project locations.
- Automated configurations of attendance rules, grace periods, and overtime policies.
- Centralized HR dashboards delivering real-time, multi-branch workforce insights.
- Reduced manual interventions and improved payroll processing.
- Enhanced workforce visibility and compliance through advanced HR reporting and policy automation.

## Executive Summary
Established in 1985, Safeway Groups is one of Abu Dhabi’s most trusted interior design, décor, and build-to-fit-out companies. With nearly four decades of experience, the company is known for delivering world-class design solutions backed by a highly skilled workforce of engineers, designers, and project managers operating across the UAE.

As the company expanded, managing a growing workforce across multiple project sites became increasingly complex. Attendance tracking was manual, time-consuming, and error-prone. Attendance calculations and grace period policies were inconsistently applied, leading to payroll delays and compliance gaps.

## Problem Statement and Key Challenges
Several recurring issues hindered Safeway Groups' HR operations:
- **Manual Attendance Tracking**: Attendance was recorded manually or through outdated devices, making it difficult to track employee hours accurately.
- **Inconsistent Policy Application**: Different departments followed their own rules for grace periods and attendance, creating payroll inconsistencies.
- **Limited Real-time Insights**: HR lacked a centralized system for monitoring attendance, absenteeism, or overtime trends.
- **Administrative Overhead**: The HR team spent several hours a week reconciling attendance and preparing payroll reports manually.

## Evaluation of the Problem
Febno Technologies conducted an in-depth assessment of Safeway Groups’ HR operations and identified key process gaps:
- Disconnected attendance devices and the lack of integration with any HR system.
- Non-standardized attendance and leave tracking intervals.
- High HR dependency on manual calculations for payroll processing.

The analysis revealed the need for a centralized, cloud-based HR solution capable of integrating biometric devices, enforcing consistent policies, and providing real-time visibility into attendance and compliance metrics.

## Proposed Solution
Febno Technologies recommended Zoho People as the ideal platform to digitize and streamline attendance operations.

**Solution Highlights:**
- **Biometric Integration with ZKT Devices**: ZKT biometric devices were installed, configured, and linked directly with Zoho People to enable automatic, real-time syncing of attendance data.
- **Automated Policy Configuration**: Grace period and attendance parameters were standardized across departments, ensuring fairness and compliance.
- **Centralized Attendance Dashboard**: HR teams gained real-time access to employee attendance records and analytics through Zoho People’s reporting tools.
- **Training and Empowerment**: Febno conducted interactive training sessions for HR and administrative staff to ensure seamless adoption and effective system utilization.

## Implementation
The deployment was executed by Febno Technologies efficiently and completed within two weeks. The scope of work included attendance module configuration, biometric integration, user training, and system validation.
1. **Device Setup**: ZKT biometric attendance devices installed across project sites and integrated with Zoho People.
   - Device 1: ZKteco F18 - with Access Controller used for branch data tracking
   - Device 2: ZKteco F18 - Readers used in head office and branches
2. **Configuration**: Attendance rules and grace period parameters were custom-built as per company requirements.
3. **Training**: HR team trained on Zoho People’s attendance management features, reporting tools, and compliance configurations.
4. **Testing & Go-Live**: End-to-end testing conducted to ensure accurate data synchronization and reporting.

## Result
The integration of Zoho People revolutionized Safeway Group’s attendance and HR compliance processes. The HR department now enjoys complete visibility, reduced administrative workload, and accurate data-driven reporting.

**Key Outcomes:**
- **100% Automated Attendance Tracking**: Attendance data is now captured and synced in real-time from all ZKT devices.
- **Policy Consistency**: Attendance and grace period rules are uniformly enforced across departments, reducing payroll discrepancies.
- **Improved Payroll Accuracy**: Manual reconciliation errors have been eliminated, resulting in faster, more reliable payroll processing.
- **Enhanced HR Efficiency**: HR staff report a 60% reduction in administrative effort previously spent on manual attendance management.
- **Better Compliance and Visibility**: Managers now have access to centralized dashboards for monitoring attendance trends and compliance adherence.`
        },
        {
          title: "How Smartec Automated Finance and Project Management with Zoho Books Professional",
          category: "ERP & Business Applications",
          subcategory: "Zoho",
          description: "How Smartec in Dubai digitized their manual accounting processes globally using Zoho Books Professional with Febno Technologies.",
          stat: "100% Digital Transformation",
          duration: "6 Weeks Implementation",
          content: `## Project Overview:
Smartec, a global leader in IT Infrastructure, replaced outdated manual processes with a fully digital, automated system using Zoho Books Professional. With the expertise of Febno Technologies, Smartec moved from Excel sheets to a centralized platform for finance and project management.

The solution involved custom fields, automated templates, and live inventory. The Odoo booking method features distinct roles for management to begin full setups — secure remote access with necessary usage features tracking the shipments down safely to your doorstep efficiently enabling productivity insights, end complaints, reducing errors, and accelerating a real-time foundation for your growth.

## Key Takeaways
- Complete migration from offline spreadsheets to Zoho Books Professional.
- Multi-project workflows based on cost rights, enabling secure collaboration.
- Custom fields and templates built to match Smartec's internal workflows.
- Innovative dashboards to track external resources accurately within one constraints.
- Financial reports and project profitability analysis delivered real-time visibility into costs and margins.
- Transparent audit trails records designed to support Smartec’s global growth.

## Executive Summary
Headquartered in Dubai, Smartec provides audio-visual, networking, security, and IT infrastructure solutions where systems need to perform seamlessly. While the company delivered award-winning service to clients, its own internal operations relied heavily on Excel – creating data silos, prolonging the billing process, and creating compliance risks.

Partnering with Febno Technologies, Smartec implemented Zoho Books Professional to digitize and streamline operations. The comprehensive setup and project tracking ensured a profitable, end-to-end task-based foundation allowing Smartec to track external daily wage labourers and their costs within the Professional plan.

The result was a complete transformation of bound processes, accurate project costing, real-time reporting, and a scalable system for global growth.

## Problem Statement and Key Challenges
Despite being an innovation-driven company, Smartec’s internal processes revealed significant gaps:
- **Manual operations:** Invoicing, project costing, vendor management, and expenses were all recorded in spreadsheets. Duplication, errors, and delays were routine.
- **Workforce tracking issues:** Smartec relies heavily on daily wage labourers for many projects. Labour records were handled manually, making it difficult to:
  - Allocate labour costs accurately to projects.
  - Track profitability of each project.
  - Identify fraud with the timesheets taken on serial projects.
- **Limited visibility:** Project and financial reports were not available in real-time, causing decision-making bottlenecks.
- **Scalability concerns:** As Smartec expanded globally across multi-client bases, their in-house processed systems caused bottlenecks.
- **Compliance risks:** Manual records left gaps in audit readiness, risking financial and compliance breaches.

## Evaluation of the Problem
Febno Technologies carried out a detailed analysis of Smartec’s existing processes. The evaluation focused on:
- Identifying bottlenecks in labor-based cost allocations on timesheet projects.
- Understanding the critical requirements to track daily wage labourers per project – including cost rates, working hours, and expense sheet history.
- Mapping out financial compliance parameters to ensure success.
- Reviewing Zoho Books Professional to assess if it covered Smartec's requirements by identifying where custom fields, templates, and automations would bridge the gaps.

The assessment confirmed that Zoho Books Professional could not only digitize operations but also be adapted to manage Smartec’s unique workforce tracking needs within the boundaries of the plan.

## Proposed Solution
Febno Technologies designed and implemented a tailored solution using Zoho Books Professional to digitize Smartec’s operations and eliminate reliance on Excel.
- **Online migration:** All historical and operational data base sets were safely rolled into Zoho Books Professional as centralized on line system.
- **Role-based access:** Multiple users assigned with exact functional rights, ensuring secure remote collaboration across finance, project management, and leadership teams.
- **Custom fields and templates:** Project fields and return templates were designed to mirror Smartec's internal processes.
- **Workforce tracking mechanism:** Custom fields and Live Journals workflows track each active project. Tracking daily wage laborers, and allocating project costs and profitability analyzing individual projects features became digitally visible.
- **Financial and project profitability reports:** Automated reports and dashboards allowed for advanced and project-level profitability analysis, giving management real-time insights into costs, margins, and performance.
- **Process automation:** Vendor payments, expense tracking, and reconciliation flows were streamlined.
- **Audit readiness:** Centralized logs ensure zero errors and clean, compliant records.

## Implementation
The rollout was completed in a phased approach to ensure minimal disruption:
- **Database Rollout:** Setup, branch, validation verify format read details in Zoho Books Professional.
- **Customization to Book records:** Adding the requested custom fields and projects mapping out workflows into actual real-life function, training on best practices in accurate data entry.
- **Customization & configuration:** Template adjustments within the mobile application adapting dynamic parameters in standard template features. The project focused effectively around HR needs to record time.
- **Training:** Teams successfully managing project expenses which eliminates data duplication instantly, revealing smarter options.

## Results
The implementation of Zoho Books Professional completely digitized Smartec’s operations by replacing outdated manual processes with a streamlined, digital system.
- **100% Digital transformation:** Manual, Excel-bound functions upgraded and integrated into fully automated workflows.
- **Accurate workforce costing:** External laborers successfully recorded directly, seamlessly into total operation overall costs.
- **Profitability at a glance:** Real-time dashboards empower management to make data-driven, strategic decisions globally across regions.
- **Efficiency unlocked:** Automations reduced hours spent on manual tasks, freeing teams to focus on strategy.
- **Compliance confidence:** Transparent audit trails ensure audit preparedness globally across locations.
- **Future-ready foundation:** Flexible systems built to scale with Smartec as the global client base grows.

With the expertise of Febno Technologies and the power of Zoho Books Professional, Smartec successfully modernized its entire financial and project management framework—shifting from manual spreadsheets to a central, automated, and scalable system that drives efficiency, profitability, and growth.`
        }
      ];

      for (const item of caseStudies) {
        await strapi.entityService.create('api::case-study.case-study', {
          data: {
            ...item,
            publishedAt: new Date(),
          }
        });
      }
      console.log('SEEDING: Case Studies Complete.');

      // Grant Public Permissions for Case Studies
      const roles = await strapi.plugin('users-permissions').service('role').find();
      const publicRole = roles.find(r => r.type === 'public');
      if (publicRole) {
        try {
          const permissions = await strapi.plugin('users-permissions').service('permission').find({ filters: { role: publicRole.id } });

          const hasFind = permissions.some(p => p.action === 'api::case-study.case-study.find');
          if (!hasFind) {
            await strapi.plugin('users-permissions').service('permission').create({
              data: { action: 'api::case-study.case-study.find', role: publicRole.id }
            });
          }

          const hasFindOne = permissions.some(p => p.action === 'api::case-study.case-study.findOne');
          if (!hasFindOne) {
            await strapi.plugin('users-permissions').service('permission').create({
              data: { action: 'api::case-study.case-study.findOne', role: publicRole.id }
            });
          }
          console.log('SEEDING: Granted Public Find/FindOne permission for Case Studies.');
        } catch (permErr) {
          console.log('SEEDING: Case Study permission error.', permErr.message);
        }
      }

    } catch (err) {
      console.error('SEEDING ERROR:', err.message);
    }
  }
};
