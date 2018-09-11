export const myStoresRCR = {
  // step 0
  storeStatus: "",
  visitNumber: "0",

  // step 1
  noOfRspsOnDutyDuringVisit: "",
  rspList: [],
  newRspItems: [],

  // step 2
  noOfRspsWhoAttendedFaceToFaceTraining: "",
  noOfIrepCoursesCompletedDuringVisit: "",
  faceToFaceTraining: [
    {
      trainingCourse: "",
      trainingDone: false,
    }
  ],
  trainingActivityImages: [],

  // step 3.1
  canStoreDeployPosm: false,
  posm: false,
  twoInOnePcs: "",
  laptops: "",
  allIn1Pcs: "",
  merchandisingImages: [],
  posmReplacement: false,

  // step 3.2
  iposRxtInstallation: false,
  currentInStore: "0",
  newInstallation: "0",
  totIposRxtInstallation: "0",
  iposRxtInstallationImages: [],

  // step 3.3
  rxtSubmission: "",
  totalPcsInStore: "0",
  pcsPowerdByIntelSwitchedOn: "0",
  pcsPowerdByIntelSwitchedOff: "0",
  pcsPowerdByCompetitorSwitchedOn: "0",
  pcsPowerdByCompetitorSwitchedOff: "0",

  // step 4
  competitorAnalysis: [
    {
      competitorName: "",
      noOfCompetitorPcs: "",
      posmInstalled: "",
      description: "",
      pcBrand: "",
      formFactor: "",
      twoInOneConvertible: "0",
      twoInOneDetachable: "0",
      allInOne: "0",
      desktop: "0",
      laptop: "0",
      gamingDesktop: "0",
      gamingLaptop: "0",
      competitorImages: [],
    },
  ],

  // step 5.1
  current2in1Zone: "",
  outdated2in1Zone: "",
  refrestDeploymentOpportunity2in1Zone: "",
  storeAnalysisDescription2in1Zone: "",
  storeAnalysisPCImages2in1Zone: [],

  // step 5.2
  currentGamingZone: "",
  outdatedGamingZone: "",
  refrestDeploymentOpportunityGamingZone: "",
  storeAnalysisDescriptionGamingZone: "",
  storeAnalysisPCImagesGamingZone: [],

  // step 5.3
  currentEndCapDisplay: "",
  outdatedEndCapDisplay: "",
  refrestDeploymentOpportunityEndCapDisplay: "",
  storeAnalysisDescriptionEndCapDisplay: "",
  storeAnalysisPCImagesEndCapDisplay: [],

  // step 5.4
  intelRiserDeployedInStore: false,
  promotionUpdates: false,
  storeAnalysisDescription: "",
  storeAnalysisPCImages: [],

  // step 5.5
  newLaunchProductUpdates: false,
  newLaunchProduct: [
    {
      brand: "",
      model: "",
      specifications: "",
      price: "",
      description: "",
      images: [],
    }
  ],

  // step 5.6
  oemUpdates: false,
  oems: [
    {
      name: "",
      description: "",
      images: [],
    }
  ],

  // step 5.7
  eventUpdates: false,
  events: [
    {
      name: "",
      dateTo: "",
      dateFrom: "",
      description: "",
      images: [],
    }
  ],

  // step 5.8
  remarks: "",
  actionItemsForFollowUp: "",

  // step 6
  submitName: "",
  submitJobTitle: "",
  signature: "",
};

export const myStoresMerchandisers = {

  // stop 1.1
  posmTwoInOnePCs: [
    {
      type: "",
      noInStore: "",
    }
  ],
  posmTwoInOnePCsImages: [],

  // step 1.2
  posmLaptops: [
    {
      type: "",
      noInStore: "",
    }
  ],
  posmLaptopsImages: [],

  // step 1.3
  posmAllInOne: [
    {
      type: "",
      noInStore: "",
    }
  ],
  posmAllInOneImages: [],

  // step 1.4
  posmRemark: "",

  // step 1.5
  remark: "",
  otherRemarks: "",

  // step 2
  submitName: "",
  submitJobTitle: "",
  signature: "",
};
