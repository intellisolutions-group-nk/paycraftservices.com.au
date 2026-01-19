import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AnimatedSection from '@/components/AnimatedSection';
import { serviceIcons, CheckIcon, ArrowRightIcon, ShieldIcon, ClockIcon, UsersIcon, ChartIcon } from '@/components/Icons';
import servicesData from '@/data/services.json';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all services
export async function generateStaticParams() {
  return servicesData.services.map((service) => ({
    slug: service.id,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.services.find((s) => s.id === slug);
  
  if (!service) {
    return {
      title: 'Service Not Found - PayCraft',
    };
  }

  return {
    title: `${service.title} - PayCraft`,
    description: service.description,
  };
}

// Service-specific detailed content
const serviceDetails: Record<string, {
  overview: string;
  features: { title: string; description: string }[];
  benefits: string[];
  includedItems: string[];
  idealFor: string[];
  process: { step: number; title: string; description: string }[];
  testimonial: { quote: string; author: string; role: string };
  faqs: { question: string; answer: string }[];
}> = {
  'payroll-processing': {
    overview: 'Our payroll processing service takes the complexity out of paying your employees. We handle every aspect of your payroll cycle, from calculating wages and deductions to generating payslips and ensuring compliance with Australian regulations. Whether you have a small team or a large workforce, our scalable solutions adapt to your needs.',
    features: [
      { title: 'Complete Pay Cycle Management', description: 'End-to-end management of your entire payroll process, from timesheet collection to final payment processing.' },
      { title: 'Accurate Calculations', description: 'Precise wage, salary, overtime, and allowance calculations based on current award rates and agreements.' },
      { title: 'Automated Payslip Generation', description: 'Professional payslips automatically generated and distributed to employees via email or portal access.' },
      { title: 'Multi-Frequency Support', description: 'Support for weekly, fortnightly, monthly, or custom pay cycles to match your business requirements.' },
      { title: 'Leave Management', description: 'Comprehensive tracking of annual leave, personal leave, long service leave, and all other entitlements.' },
      { title: 'Deduction Management', description: 'Handle all types of deductions including tax, super, salary sacrifice, child support, and voluntary deductions.' },
      { title: 'Award Interpretation', description: 'Expert interpretation and application of Modern Awards and Enterprise Agreements.' },
      { title: 'Termination Processing', description: 'Complete termination calculations including final pay, unused leave, and all required documentation.' },
    ],
    benefits: [
      'Eliminate manual calculation errors',
      'Save hours of administrative time each pay cycle',
      'Ensure employees are paid correctly and on time',
      'Reduce compliance risks and penalties',
      'Access expert payroll knowledge and support',
      'Scale seamlessly as your business grows',
      'Improve employee satisfaction with accurate pay',
      'Free your team to focus on core business activities',
    ],
    includedItems: [
      'Payroll processing for all pay cycles',
      'Payslip generation and distribution',
      'Leave balance tracking and management',
      'Tax and deduction calculations',
      'Payment file preparation',
      'Payroll reports and summaries',
      'Ongoing support from payroll specialists',
      'Regular compliance updates',
    ],
    idealFor: [
      'Small to medium businesses without in-house payroll expertise',
      'Growing companies needing scalable payroll solutions',
      'Businesses wanting to reduce administrative burden',
      'Organisations seeking to improve payroll accuracy',
      'Companies with complex award or agreement requirements',
    ],
    process: [
      { step: 1, title: 'Data Collection', description: 'We securely collect employee information, timesheets, leave requests, and any pay variations for the period.' },
      { step: 2, title: 'Processing & Calculations', description: 'Our team processes your payroll with thorough accuracy checks, applying all relevant rates and deductions.' },
      { step: 3, title: 'Review & Approval', description: 'You receive a comprehensive payroll summary to review and approve before we proceed with payments.' },
      { step: 4, title: 'Payment & Distribution', description: 'Payments are processed to employee accounts and payslips are distributed electronically.' },
    ],
    testimonial: {
      quote: 'PayCraft transformed our payroll process. What used to take us days now happens seamlessly, and we have complete confidence in the accuracy of every pay run.',
      author: 'Katherine O\'Brien',
      role: 'HR Manager',
    },
    faqs: [
      { question: 'How often can payroll be processed?', answer: 'We support all standard payroll frequencies including weekly, fortnightly, and monthly pay cycles. We can also accommodate custom schedules if your business requires them.' },
      { question: 'What information do you need from us each pay period?', answer: 'We typically need timesheets or hours worked, any leave taken, overtime details, and notification of any pay variations such as bonuses or allowances. We can integrate with your time and attendance systems to streamline this process.' },
      { question: 'How do employees receive their payslips?', answer: 'Payslips are distributed electronically via email or can be accessed through a secure employee self-service portal. This ensures timely delivery and reduces paper waste.' },
      { question: 'Can you handle employees on different awards?', answer: 'Yes, we have expertise in interpreting and applying various Modern Awards and Enterprise Agreements. We ensure each employee is paid according to their applicable award or agreement.' },
      { question: 'What happens if there is a payroll error?', answer: 'While our multi-step verification process minimises errors, if one does occur, we work quickly to rectify it. Underpayments are corrected in the next pay run or as a separate payment, and we handle all necessary adjustments.' },
      { question: 'How do you handle new employee onboarding?', answer: 'We can set up new employees in the payroll system with all their details, tax file declarations, superannuation choices, and award classifications. We ensure everything is in place for their first pay.' },
    ],
  },
  'salary-wage-payments': {
    overview: 'Ensure your employees receive their pay accurately and on time with our comprehensive salary and wage payment service. We manage the entire payment process from calculation to bank transfer, handling all the complexities of different pay rates, overtime, penalties, and allowances.',
    features: [
      { title: 'Direct Bank Transfers', description: 'Secure electronic funds transfer directly to employee bank accounts across all Australian financial institutions.' },
      { title: 'Multiple Payment Methods', description: 'Support for various payment methods to accommodate different employee preferences and requirements.' },
      { title: 'Flexible Scheduling', description: 'Configure payment schedules that align with your business operations and cash flow requirements.' },
      { title: 'Overtime Calculations', description: 'Accurate overtime calculations based on applicable award rates, including time and a half and double time.' },
      { title: 'Penalty Rate Management', description: 'Automatic application of penalty rates for weekends, public holidays, and shift work as per relevant awards.' },
      { title: 'Allowance Processing', description: 'Handle all types of allowances including travel, meal, uniform, tool, and industry-specific allowances.' },
      { title: 'Back Pay Calculations', description: 'Process retrospective pay adjustments when rates change or errors need correction.' },
      { title: 'Payment Reconciliation', description: 'Comprehensive reconciliation of all payments with detailed reporting for your records.' },
    ],
    benefits: [
      'Employees receive accurate pay on time, every time',
      'Reduce administrative overhead on payment processing',
      'Eliminate manual bank file preparation errors',
      'Improve employee trust and satisfaction',
      'Complete audit trail for all payments',
      'Flexible payment options for your business',
      'Secure and compliant payment processing',
      'Detailed payment reports for accounting',
    ],
    includedItems: [
      'Payment calculations for all pay types',
      'Bank file generation and submission',
      'Payment scheduling and processing',
      'Overtime and penalty rate calculations',
      'Allowance and deduction processing',
      'Payment reconciliation reports',
      'Back pay and adjustment processing',
      'Payment confirmation and tracking',
    ],
    idealFor: [
      'Businesses with complex pay structures',
      'Companies with employees on various award rates',
      'Organisations with shift workers and penalty rates',
      'Businesses wanting to streamline payment processes',
      'Companies requiring detailed payment audit trails',
    ],
    process: [
      { step: 1, title: 'Payroll Finalisation', description: 'Once payroll calculations are complete and approved, we prepare the payment files for processing.' },
      { step: 2, title: 'Bank File Generation', description: 'Secure ABA bank files are generated with all payment details, ready for submission to financial institutions.' },
      { step: 3, title: 'Payment Execution', description: 'Funds are transferred electronically to employee bank accounts according to the scheduled pay date.' },
      { step: 4, title: 'Confirmation & Reporting', description: 'Payment confirmations are tracked and detailed reports provided for your records and reconciliation.' },
    ],
    testimonial: {
      quote: 'The payment processing is flawless. Our employees always receive their pay on time, and the detailed reports make our accounting reconciliation so much easier.',
      author: 'Michael Thompson',
      role: 'Finance Manager',
    },
    faqs: [
      { question: 'When are payments processed and received?', answer: 'We process payments according to your scheduled pay dates. For standard bank transfers, employees typically receive funds on the designated pay day when files are submitted in time for bank processing cut-offs.' },
      { question: 'Can you handle different pay rates for the same employee?', answer: 'Yes, we can manage employees with multiple pay rates, such as different rates for different roles, overtime rates, and penalty rates. All applicable rates are calculated correctly for each pay period.' },
      { question: 'How do you handle payment errors or adjustments?', answer: 'We have robust validation processes to prevent errors. If an adjustment is needed, we can process corrections in the next pay run or as a separate payment, depending on urgency and your preference.' },
      { question: 'What banks do you support for payments?', answer: 'We support payments to all Australian banks and financial institutions. We generate standard ABA files that are accepted by all banking systems.' },
      { question: 'How is payment data kept secure?', answer: 'All payment data is encrypted and transmitted securely. We follow strict security protocols and industry best practices to protect sensitive financial information.' },
      { question: 'Can we see payment reports before they are processed?', answer: 'Yes, you receive a complete payment summary for review and approval before any payments are processed. This gives you full visibility and control over every payment run.' },
    ],
  },
  'superannuation-processing': {
    overview: 'Navigate the complexities of superannuation with confidence. Our superannuation processing service ensures your contributions are calculated correctly, paid on time, and fully compliant with SuperStream requirements. We manage contributions to all funds, handle choice of fund obligations, and provide comprehensive reporting.',
    features: [
      { title: 'SuperStream Compliance', description: 'Fully compliant electronic submission of contributions and data to all superannuation funds via SuperStream.' },
      { title: 'Multi-Fund Management', description: 'Manage contributions to unlimited superannuation funds, including industry, retail, and self-managed super funds (SMSFs).' },
      { title: 'Accurate Contribution Calculations', description: 'Precise calculations based on Ordinary Time Earnings (OTE) and current Superannuation Guarantee rates.' },
      { title: 'Quarterly Reporting', description: 'Comprehensive quarterly reporting to track contributions, compliance, and deadlines.' },
      { title: 'Choice of Fund Administration', description: 'Manage employee choice of fund requests and ensure timely processing of fund changes.' },
      { title: 'Salary Sacrifice Processing', description: 'Handle pre-tax salary sacrifice contributions in addition to employer contributions.' },
      { title: 'Contribution Reconciliation', description: 'Detailed reconciliation of all contributions paid versus amounts due, identifying any discrepancies.' },
      { title: 'Fund Communication', description: 'Liaise with superannuation funds to resolve any contribution or member issues.' },
    ],
    benefits: [
      'Full compliance with Superannuation Guarantee requirements',
      'Avoid late payment penalties and charges',
      'Accurate OTE and contribution calculations',
      'Seamless SuperStream submissions',
      'Simplified multi-fund management',
      'Clear visibility of contribution status',
      'Expert guidance on super obligations',
      'Reduced administrative burden',
    ],
    includedItems: [
      'Superannuation Guarantee calculations',
      'SuperStream compliant submissions',
      'Multi-fund contribution processing',
      'Salary sacrifice administration',
      'Choice of fund management',
      'Quarterly contribution reports',
      'Fund liaison and issue resolution',
      'Compliance monitoring and alerts',
    ],
    idealFor: [
      'Businesses wanting to ensure super compliance',
      'Companies with employees in multiple funds',
      'Organisations managing salary sacrifice arrangements',
      'Businesses concerned about super guarantee deadlines',
      'Companies needing expert super guidance',
    ],
    process: [
      { step: 1, title: 'Calculation', description: 'Superannuation contributions are calculated based on Ordinary Time Earnings and the current SG rate for each employee.' },
      { step: 2, title: 'Validation', description: 'Fund details, member numbers, and contribution amounts are validated against employee records and fund requirements.' },
      { step: 3, title: 'SuperStream Submission', description: 'Contributions are submitted electronically via SuperStream compliant channels to all employee funds.' },
      { step: 4, title: 'Confirmation & Reporting', description: 'We track submission confirmations and provide detailed reports showing all contributions processed.' },
    ],
    testimonial: {
      quote: 'Superannuation used to be a headache for us. PayCraft handles everything - calculations, submissions, and reporting. We never miss a deadline now.',
      author: 'Jennifer Walsh',
      role: 'Business Owner',
    },
    faqs: [
      { question: 'What is SuperStream and why is it important?', answer: 'SuperStream is the mandatory electronic standard for making superannuation contributions in Australia. It ensures data and payments are linked and sent electronically to funds. All employers must use a SuperStream compliant method to pay super contributions.' },
      { question: 'How often should superannuation be paid?', answer: 'The Superannuation Guarantee requires contributions to be paid at least quarterly by the 28th of the month following the end of each quarter. However, many businesses choose to pay more frequently, such as each pay run, which we can accommodate.' },
      { question: 'Can you handle employees with self-managed super funds (SMSFs)?', answer: 'Yes, we can process contributions to SMSFs provided the fund has an Electronic Service Address (ESA) for SuperStream. We ensure all SMSF contributions are submitted correctly.' },
      { question: 'What happens if an employee changes their super fund?', answer: 'We process choice of fund changes as soon as we receive the new fund details. Contributions are directed to the new fund from the next contribution period.' },
      { question: 'How do you calculate Ordinary Time Earnings?', answer: 'We calculate OTE based on ATO guidelines, including regular salary and wages, shift loadings, and allowances that are part of ordinary hours. We exclude overtime, reimbursements, and other excluded amounts.' },
      { question: 'What if a contribution is rejected by a fund?', answer: 'We monitor all submissions for rejections. If a contribution is rejected, we investigate the cause, correct any issues, and resubmit promptly. We keep you informed throughout the process.' },
    ],
  },
  'payroll-compliance-reporting': {
    overview: 'Stay on top of your payroll compliance obligations with our comprehensive compliance and reporting service. We ensure your business meets all Australian taxation, employment, and reporting requirements, giving you peace of mind and protecting you from costly penalties.',
    features: [
      { title: 'PAYG Withholding', description: 'Accurate calculation and reporting of Pay As You Go tax withholdings for all employees.' },
      { title: 'End of Financial Year Processing', description: 'Complete EOFY processing including payment summaries, finalisation, and lodgement.' },
      { title: 'Award Compliance', description: 'Ongoing monitoring and application of Modern Award requirements including rates and conditions.' },
      { title: 'Record Keeping', description: 'Comprehensive payroll records maintained in accordance with statutory requirements.' },
      { title: 'Regulatory Updates', description: 'Proactive implementation of changes to tax rates, super rates, and employment legislation.' },
      { title: 'PAYG Payment Summaries', description: 'Preparation and distribution of annual payment summaries (now via STP) for all employees.' },
      { title: 'Audit Support', description: 'Complete records and support documentation for any payroll audits or Fair Work enquiries.' },
      { title: 'Compliance Reporting', description: 'Regular compliance reports highlighting status and any areas requiring attention.' },
    ],
    benefits: [
      'Avoid penalties for non-compliance',
      'Stay current with regulatory changes',
      'Accurate tax calculations and reporting',
      'Audit-ready documentation at all times',
      'Expert interpretation of complex regulations',
      'Peace of mind knowing you are compliant',
      'Protection against underpayment claims',
      'Reduced risk of Fair Work issues',
    ],
    includedItems: [
      'PAYG withholding calculations and reporting',
      'Award rate monitoring and updates',
      'Leave entitlement compliance',
      'Record keeping and documentation',
      'Regulatory change implementation',
      'EOFY processing and finalisation',
      'Compliance status reporting',
      'Audit support and documentation',
    ],
    idealFor: [
      'Businesses concerned about compliance risks',
      'Companies in industries with complex awards',
      'Organisations that have experienced compliance issues',
      'Businesses wanting to reduce audit risk',
      'Companies without in-house compliance expertise',
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'We assess your current payroll compliance status and identify any areas of risk or improvement.' },
      { step: 2, title: 'Implementation', description: 'Compliance processes and controls are implemented or enhanced within your payroll operations.' },
      { step: 3, title: 'Ongoing Monitoring', description: 'Continuous monitoring of compliance requirements with proactive updates for regulatory changes.' },
      { step: 4, title: 'Reporting & Review', description: 'Regular compliance reports and periodic reviews to ensure ongoing adherence to all requirements.' },
    ],
    testimonial: {
      quote: 'With PayCraft handling our compliance, I sleep better at night. They keep us updated on every regulatory change and ensure we are always ahead of requirements.',
      author: 'Peter MacLeod',
      role: 'Operations Director',
    },
    faqs: [
      { question: 'What compliance areas do you cover?', answer: 'We cover all aspects of payroll compliance including PAYG withholding, superannuation guarantee, Fair Work requirements, Modern Award compliance, leave entitlements, record keeping obligations, and STP reporting requirements.' },
      { question: 'How do you stay updated on regulation changes?', answer: 'Our team continuously monitors updates from the ATO, Fair Work Commission, and other regulatory bodies. We implement changes proactively and keep you informed of any impacts to your business.' },
      { question: 'Can you help if we have a Fair Work or ATO audit?', answer: 'Yes, we maintain comprehensive records and can provide all necessary documentation for audits. We can also assist with responding to enquiries and implementing any required remediation.' },
      { question: 'What happens at End of Financial Year?', answer: 'We handle all EOFY requirements including STP finalisation, reconciliation of PAYG withholdings, and ensuring all employee records are accurate and complete for the financial year.' },
      { question: 'How long do you keep payroll records?', answer: 'We maintain payroll records for the legally required period of 7 years. Records are stored securely and can be accessed whenever needed.' },
      { question: 'Do you provide compliance training for our team?', answer: 'While we handle compliance on your behalf, we can provide guidance and information to help your team understand key obligations and processes.' },
    ],
  },
  'stp-support': {
    overview: 'Single Touch Payroll (STP) reporting is mandatory for all Australian employers. Our STP support service ensures your business meets all ATO requirements with accurate, timely reporting every pay run. We handle everything from initial setup to ongoing submissions and year-end finalisation.',
    features: [
      { title: 'STP Phase 2 Compliance', description: 'Fully compliant with STP Phase 2 requirements including disaggregated reporting of income types.' },
      { title: 'Real-Time Reporting', description: 'Payroll data reported to the ATO on or before each pay day as required.' },
      { title: 'Disaggregated Data', description: 'Correct classification and reporting of gross payments, PAYG, super, and allowances separately.' },
      { title: 'Error Validation', description: 'Pre-submission validation to identify and correct errors before lodgement with the ATO.' },
      { title: 'Submission Tracking', description: 'Complete visibility of submission status with confirmations from the ATO.' },
      { title: 'Year-End Finalisation', description: 'Complete finalisation process ensuring all employee records are marked as final for the year.' },
      { title: 'Update Events', description: 'Processing of update events for corrections, terminations, and amendments.' },
      { title: 'Employee Tax Declarations', description: 'Electronic processing of tax file number declarations and withholding variations.' },
    ],
    benefits: [
      'Meet all ATO STP reporting obligations',
      'Real-time payroll visibility for employees via myGov',
      'Eliminate annual payment summary distribution',
      'Reduce end of year processing workload',
      'Accurate disaggregated reporting',
      'Quick identification and correction of errors',
      'Complete audit trail of all submissions',
      'Streamlined reporting process',
    ],
    includedItems: [
      'STP Phase 2 compliant reporting',
      'Pay event submissions each pay run',
      'Pre-submission error validation',
      'Submission tracking and confirmations',
      'Year-end finalisation processing',
      'Update event submissions',
      'Error correction and resubmission',
      'ATO liaison for STP matters',
    ],
    idealFor: [
      'All Australian employers (STP is mandatory)',
      'Businesses transitioning to STP Phase 2',
      'Companies experiencing STP submission errors',
      'Organisations wanting to simplify reporting',
      'Businesses seeking expert STP guidance',
    ],
    process: [
      { step: 1, title: 'Setup & Configuration', description: 'We configure your STP reporting, ensuring all income types, allowances, and deductions are mapped correctly for Phase 2.' },
      { step: 2, title: 'Each Pay Run', description: 'With every pay run, we prepare and submit STP data to the ATO, validating accuracy before lodgement.' },
      { step: 3, title: 'Monitoring & Correction', description: 'We track all submissions for ATO acceptance and promptly address any errors or rejections.' },
      { step: 4, title: 'Finalisation', description: 'At year end, we complete the finalisation process, marking all employee records as final with the ATO.' },
    ],
    testimonial: {
      quote: 'STP was confusing at first, but PayCraft made it simple. They handle all our submissions and we have never had an issue with the ATO.',
      author: 'Lisa Brennan',
      role: 'Accounts Manager',
    },
    faqs: [
      { question: 'What is STP Phase 2?', answer: 'STP Phase 2 expands reporting requirements to include more detailed (disaggregated) information about employee payments. This includes separately reporting gross amounts, allowances, paid leave, overtime, and other income types rather than a single gross figure.' },
      { question: 'When must STP be reported?', answer: 'STP must be reported to the ATO on or before the day you pay your employees. We ensure submissions are made in time with each pay run.' },
      { question: 'What if there are errors in a submission?', answer: 'We validate all data before submission to minimise errors. If an error is identified after lodgement, we submit an update event to correct the information with the ATO.' },
      { question: 'Do employees still receive payment summaries?', answer: 'With STP, employees access their year-to-date and end of year payment information through myGov, linked to their ATO account. Formal payment summaries are no longer required to be issued for STP-reported employees.' },
      { question: 'What is an STP finalisation?', answer: 'Finalisation is the process of marking each employee\'s income statement as "Tax ready" at the end of the financial year. This tells employees and the ATO that the information is final and can be used for tax returns.' },
      { question: 'Can you help us transition to STP Phase 2?', answer: 'Yes, we assist businesses with transitioning to Phase 2 requirements, including mapping income types, configuring reporting, and ensuring compliance with the expanded requirements.' },
    ],
  },
  'payroll-outsourcing': {
    overview: 'Free your business from the complexities of payroll management by outsourcing to our expert team. Our complete payroll outsourcing service handles every aspect of your payroll function, from processing and payments to compliance and reporting. You get a dedicated specialist who knows your business and manages everything on your behalf.',
    features: [
      { title: 'End-to-End Management', description: 'Complete management of your entire payroll function from start to finish, every pay cycle.' },
      { title: 'Dedicated Specialist', description: 'A dedicated payroll specialist assigned to your business who understands your specific requirements.' },
      { title: 'All Compliance Handled', description: 'STP reporting, superannuation, tax compliance, and all regulatory requirements managed for you.' },
      { title: 'Employee Query Management', description: 'We handle employee payroll queries, reducing demands on your internal team.' },
      { title: 'Regular Reconciliation', description: 'Ongoing reconciliation of payroll data to ensure accuracy and identify any discrepancies.' },
      { title: 'Custom Reporting', description: 'Tailored reports designed to give you the payroll insights your business needs.' },
      { title: 'System Management', description: 'We manage the payroll system, data, and all technical aspects on your behalf.' },
      { title: 'Scalable Service', description: 'Our service scales with your business, from a handful of employees to hundreds.' },
    ],
    benefits: [
      'Focus entirely on your core business',
      'Access experienced payroll professionals',
      'Reduce overhead and staffing costs',
      'Eliminate payroll-related stress',
      'Improve accuracy and reduce errors',
      'Ensure ongoing compliance',
      'Scale without adding internal resources',
      'Single point of contact for all payroll matters',
    ],
    includedItems: [
      'Complete payroll processing',
      'Salary and wage payments',
      'Superannuation contributions',
      'STP reporting and compliance',
      'Leave and entitlement management',
      'Employee query handling',
      'Payslip distribution',
      'Comprehensive reporting',
      'Dedicated payroll specialist',
      'Regular review meetings',
    ],
    idealFor: [
      'Businesses without internal payroll expertise',
      'Companies wanting to reduce payroll overhead',
      'Growing businesses needing scalable solutions',
      'Organisations frustrated with payroll complexity',
      'Businesses that have experienced payroll issues',
    ],
    process: [
      { step: 1, title: 'Discovery & Onboarding', description: 'We learn about your business, current processes, and specific requirements. All data is securely migrated to our systems.' },
      { step: 2, title: 'Transition', description: 'Your payroll is transitioned to our team with thorough testing and parallel runs to ensure accuracy.' },
      { step: 3, title: 'Ongoing Management', description: 'Your dedicated specialist manages all aspects of payroll, with regular communication and reporting.' },
      { step: 4, title: 'Continuous Improvement', description: 'Regular reviews identify opportunities to improve processes and enhance service delivery.' },
    ],
    testimonial: {
      quote: 'Outsourcing our payroll to PayCraft was a game changer. We no longer worry about pay runs, compliance, or staying on top of regulations. They handle everything.',
      author: 'David Gallagher',
      role: 'Managing Director',
    },
    faqs: [
      { question: 'What is included in payroll outsourcing?', answer: 'Our outsourcing service includes complete payroll processing, payments, superannuation, STP reporting, compliance, leave management, employee queries, payslips, and comprehensive reporting. Essentially, everything related to paying your employees.' },
      { question: 'Will we have a dedicated contact person?', answer: 'Yes, you will have a dedicated payroll specialist assigned to your business. They will learn your specific requirements and be your single point of contact for all payroll matters.' },
      { question: 'How do we communicate changes and variations?', answer: 'You can submit changes via email, phone, or through our secure portal. Your dedicated specialist processes all changes and confirms receipt.' },
      { question: 'What happens if our dedicated specialist is away?', answer: 'We have a team structure that ensures continuity. While you have a dedicated specialist, there is always a backup team member who is familiar with your account and can assist.' },
      { question: 'How quickly can we get started?', answer: 'We typically complete onboarding within 2-4 weeks, depending on the complexity of your payroll. We work with you to ensure a smooth transition with no disruption to employee payments.' },
      { question: 'Is outsourcing cost-effective compared to in-house payroll?', answer: 'Many businesses find outsourcing more cost-effective when they consider the full cost of in-house payroll, including salaries, training, software, compliance risk, and time. We provide a clear pricing structure so you know exactly what to expect.' },
    ],
  },
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.services.find((s) => s.id === slug);
  
  if (!service) {
    notFound();
  }

  const details = serviceDetails[slug];
  const IconComponent = serviceIcons[service.icon] || serviceIcons.payroll;
  
  // Get other services for related section
  const otherServices = servicesData.services.filter((s) => s.id !== slug).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-bg overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-secondary-400 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <Link 
                href="/services"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                All Services
              </Link>
            </div>
            <h1 className="text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
              {service.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
                Get Started
              </Link>
              <Link href="#features" className="btn-outline">
                Learn More
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white" id="features">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-4">
                Overview
              </span>
              <h2 className="text-gray-900 mb-6">
                About This Service
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {details.overview}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding gradient-bg-subtle">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-4">
              What We Offer
            </span>
            <h2 className="text-gray-900 mb-6">
              Key Features
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Comprehensive features designed to meet all your {service.title.toLowerCase()} needs.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {details.features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="card h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & What's Included */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <AnimatedSection>
              <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-4">
                Why Choose This Service
              </span>
              <h2 className="text-gray-900 mb-6">
                Benefits
              </h2>
              <ul className="space-y-4">
                {details.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon className="w-4 h-4 text-primary-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* What's Included */}
            <AnimatedSection direction="left">
              <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-4">
                Service Inclusions
              </span>
              <h2 className="text-gray-900 mb-6">
                What&apos;s Included
              </h2>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 md:p-8">
                <ul className="space-y-3">
                  {details.includedItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
                        <CheckIcon className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-12 gradient-bg">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <AnimatedSection className="lg:w-1/3">
              <h3 className="text-2xl font-display font-semibold text-white mb-2">
                Ideal For
              </h3>
              <p className="text-white/70">
                This service is perfect for:
              </p>
            </AnimatedSection>
            <AnimatedSection direction="left" className="lg:w-2/3">
              <div className="flex flex-wrap gap-3">
                {details.idealFor.map((item, index) => (
                  <span
                    key={index}
                    className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm border border-white/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-4">
              How It Works
            </span>
            <h2 className="text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A streamlined approach to ensure efficient and accurate service delivery.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {details.process.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative">
                  {index < details.process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent z-0" />
                  )}
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6 text-white font-display font-bold text-xl shadow-lg shadow-primary-600/25">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-display font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding gradient-bg-subtle">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="card text-center p-8 md:p-12">
              <svg className="w-12 h-12 text-primary-200 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                &ldquo;{details.testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl">
                  {details.testimonial.author.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{details.testimonial.author}</p>
                  <p className="text-gray-500">{details.testimonial.role}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary-600 font-medium text-sm uppercase tracking-wider mb-4">
              Common Questions
            </span>
            <h2 className="text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Find answers to common questions about our {service.title.toLowerCase()} service.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {details.faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="card">
                  <h3 className="text-lg font-display font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding gradient-bg-subtle">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-gray-900 mb-4">
              Related Services
            </h2>
            <p className="text-gray-600">
              Explore our other payroll services that complement {service.title.toLowerCase()}.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((relatedService, index) => {
              const RelatedIcon = serviceIcons[relatedService.icon] || serviceIcons.payroll;
              return (
                <AnimatedSection key={relatedService.id} delay={index * 0.1}>
                  <Link href={`/services/${relatedService.id}`} className="block group">
                    <div className="card card-hover h-full">
                      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <RelatedIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-display font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {relatedService.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {relatedService.shortDescription}
                      </p>
                      <div className="flex items-center gap-2 text-primary-600 font-medium text-sm">
                        <span>Learn more</span>
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Contact us today to discuss how our {service.title.toLowerCase()} service
              can benefit your business. Our team is ready to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
                Contact Us
              </Link>
              <Link href="/services" className="btn-outline">
                View All Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
