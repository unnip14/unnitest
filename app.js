const { useState } = React;

const data = {
  'Technology & Engineering Services': {
    icon: '<i class="fas fa-cloud text-blue-600 text-3xl"></i>',
    subCategories: {
      "DevOps & Cloud Engineering": [
        "CI/CD Implementation",
        "Infrastructure as Code (IaC)",
        "Cloud Migration & Management (AWS, Azure)",
        "Kubernetes & Container Orchestration",
        "Monitoring & Observability",
        "Security & Compliance Automation (DevSecOps)"
      ],
      "Software Engineering & Quality Assurance": [
        "Web & Enterprise Application Development",
        "API Development & Integration",
        "Automated Testing Frameworks",
        "Performance & Security Testing",
        "Test Data Management & Environment Management"
      ],
      "Ecommerce Technology Services": [
        "SAP Commerce (Hybris) Development & Support",
        "Adobe Commerce (Magento)",
        "Headless Commerce Solutions",
        "Payment & Logistics Integrations",
        "Platform Upgrades & Maintenance"
      ]
    },
    caseStudy: {
      title: "Cloud-Native Transformation for Leading Auto OEM",
      summary: "Implemented end-to-end DevOps pipelines and migrated legacy platforms to Kubernetes for faster release cycles and reduced infrastructure cost.",
      image: "https://via.placeholder.com/600x200?text=Technology+Case+Study"
    }
  },
  'Digital Experience & Marketing Services': {
    icon: '<i class="fas fa-bullhorn text-pink-500 text-3xl"></i>',
    subCategories: {
      "Digital Marketing Operations": [
        "Campaign Execution (Email, Paid Media, Social)",
        "SEO & SEM Services",
        "Performance Marketing Optimization",
        "Localization & Multilingual Campaigns (DACH)"
      ],
      "Martech Implementation & Management": [
        "Adobe Experience Cloud",
        "Marketing Automation Setup & Optimization (Responsys)",
        "Tag Management & Consent Management (Tealium iQ, Adobe Marketo)"
      ],
      "Content Management": [
        "CMS Implementation (AEM, Sitecore, TYPO3)",
        "Content Production & Localization",
        "DAM Management & Governance",
        "Website Maintenance & Updates"
      ]
    },
    caseStudy: {
      title: "Hyperlocalized Marketing Automation for European Telco",
      summary: "Deployed Adobe Experience Cloud across 7 European markets to automate and personalize campaigns, increasing lead conversion by 35%.",
      image: "https://via.placeholder.com/600x200?text=Marketing+Case+Study"
    }
  },
  'Data & Intelligence Services': {
    icon: '<i class="fas fa-database text-purple-600 text-3xl"></i>',
    subCategories: {
      "Data Science & AI": [
        "Predictive Analytics & Forecasting",
        "Computer Vision & NLP Solutions",
        "Generative AI Use Cases (Content, Customer Service)",
        "AI Model Governance & Compliance (EU AI Act relevance)"
      ],
      "Digital Analytics & Optimization": [
        "Web Analytics Implementation (GA4, Adobe Analytics)",
        "CRO & A/B Testing",
        "Dashboarding & Insights Reporting (Power BI, Tableau)",
        "Consent-Driven Tracking Compliance (GDPR Focus)"
      ],
      "Customer & Enterprise Data Management": [
        "CDP Implementation (Tealium AudienceStream, Adobe RT-CDP)",
        "Data Quality & Stewardship",
        "MDM (Master Data Management)",
        "Data Integration & ETL Services"
      ]
    },
    caseStudy: {
      title: "AI-Powered Energy Demand Forecasting for Utility Provider",
      summary: "Used ML-based predictive analytics to optimize load balancing and resource planning, improving accuracy by 22%.",
      image: "https://via.placeholder.com/600x200?text=Data+Case+Study"
    }
  },
  'Finance, Operations & Governance Services': {
    icon: '<i class="fas fa-building text-green-600 text-3xl"></i>',
    subCategories: {
      "Finance & Accounting": [
        "Time & Expense Management",
        "AP/AR & General Ledger Support",
        "Invoicing & Billing Reconciliation",
        "Financial Reporting & Compliance",
        "Local Tax Regulation Support (EU VAT, GoBD)"
      ],
      "Project & Program Management": [
        "Agile & Hybrid PMO Services",
        "Financial Project Governance & Controls",
        "Portfolio & Resource Management",
        "Contract & Vendor Management"
      ],
      "Process Automation & Optimization": [
        "RPA Implementation",
        "Workflow Automation",
        "Intelligent Document Processing (OCR, ML-based extraction)",
        "Process Mining (Celonis - Germany demand)"
      ]
    },
    caseStudy: {
      title: "Invoice Automation for German Manufacturing Giant",
      summary: "Automated 85% of invoice validation and reconciliation process using RPA and OCR, reducing manual effort by 60%.",
      image: "https://via.placeholder.com/600x200?text=Operations+Case+Study"
    }
  }
};

function App() {
  const [layer, setLayer] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleBack = () => {
    if (layer === 4) setLayer(2);
    else if (layer === 2) {
      setSelectedCategory(null);
      setLayer(1);
    } else if (layer === 3) {
      setSelectedSubCategory(null);
      setLayer(2);
    }
  };

  const category = selectedCategory && data[selectedCategory];
  const subCategory = category && selectedSubCategory && category.subCategories[selectedSubCategory];

  return React.createElement("div", null,
    layer > 1 && React.createElement("button", { onClick: handleBack, className: "mb-6 text-blue-600" }, "← Back"),
    layer === 1 && React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[70vh]" },
      Object.keys(data).map((cat) =>
        React.createElement("div", {
          key: cat,
          onClick: () => { setSelectedCategory(cat); setLayer(2); },
          className: "cursor-pointer h-[35vh] bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-all flex flex-col justify-center"
        },
          React.createElement("div", { dangerouslySetInnerHTML: { __html: data[cat].icon } }),
          React.createElement("h2", { className: "text-2xl font-bold text-gray-800 mt-4" }, cat)
        )
      )
    ),
    layer === 2 && category && React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[60vh]" },
      Object.keys(category.subCategories).map((sub) =>
        React.createElement("div", {
          key: sub,
          onClick: () => { setSelectedSubCategory(sub); setLayer(3); },
          className: "h-[28vh] bg-slate-100 rounded-xl p-5 shadow-md hover:shadow-xl hover:bg-blue-50 transition flex items-center justify-center text-center"
        }, React.createElement("h3", { className: "text-lg font-semibold text-slate-800" }, sub))
      ),
      React.createElement("div", {
        onClick: () => setLayer(4),
        className: "cursor-pointer bg-blue-100 p-6 rounded-xl text-blue-900 shadow hover:bg-blue-200 transition flex items-center justify-center"
      }, "📄 View Case Study")
    ),
    layer === 3 && subCategory && React.createElement("div", { className: "mt-4" },
      React.createElement("h2", { className: "text-2xl font-semibold text-slate-800 mb-6" }, selectedSubCategory),
      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" },
        subCategory.map((service, index) =>
          React.createElement("div", {
            key: index,
            className: "bg-white p-6 rounded-xl border border-slate-200 shadow hover:shadow-md transition-all"
          },
            React.createElement("div", { className: "flex items-center space-x-3" },
              React.createElement("i", { className: "fas fa-check-circle text-green-500" }),
              React.createElement("h4", { className: "text-lg font-semibold text-blue-800" }, service)
            )
          )
        )
      )
    ),
    layer === 4 && category && React.createElement("div", { className: "bg-white p-6 rounded-xl shadow space-y-4" },
      React.createElement("h2", { className: "text-2xl font-bold text-slate-800" }, category.caseStudy.title),
      React.createElement("p", { className: "text-slate-700 text-base" }, category.caseStudy.summary),
      React.createElement("img", { src: category.caseStudy.image, alt: "Case Study", className: "rounded-xl w-full h-auto" })
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));