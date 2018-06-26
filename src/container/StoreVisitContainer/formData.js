export const myStoresRCR = {
  // step 0
  storeStatus: "",
  visitNumber: "",

  // step 1
  noOfRspsOnDutyDuringVisit: "",
  rspList: [
    {
      name: "John Doe",
      email: "johndoe.always@gmail.com",
      contactNumber: "+65 9875 5432",
      IREPRegistered: "Yes",
      status: "Active",
    },
    {
      name: "John Doe",
      email: "johndoe.always@gmail.com",
      contactNumber: "+65 9875 5432",
      IREPRegistered: "Yes",
      status: "Active",
    },
    {
      name: "John Doe",
      email: "johndoe.always@gmail.com",
      contactNumber: "+65 9875 5432",
      IREPRegistered: "Yes",
      status: "Active",
    },
  ],
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

  // step 3.2
  iposRxtInstallation: false,
  currentInStore: "",
  newInstallation: "",
  totIposRxtInstallation: "",
  iposRxtInstallationImages: [],

  // step 3.3
  rxtSubmission: "",
  totalPcsInStore: "",
  pcsPowerdByIntelTurnedOn: "",
  pcsPowerdByIntelTurnedOff: "",
  pcsPowerdByCompetitorTurnedOn: "",
  pcsPowerdByCompetitorTurnedOff: "",

  // step 4
  competitorAnaylsis: [
    {
      competitorName: "",
      noOfCompetitorPcs: "",
      posmInstalled: "",
      description: "",
      pcBrand: "",
      pcDescription: "",
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
  intelRiserDeployedInStore: false,
  promotionUpdates: false,
  storeAnalysisDescriptionEndCapDisplay: "",
  storeAnalysisPCImagesEndCapDisplay: [],

  // step 5.4
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

  // step 5.5
  oemUpdates: false,
  oem: [
    {
      name: "",
      description: "",
      images: [],
    }
  ],

  // step 5.6
  eventUpdates: false,
  event: [
    {
      name: "",
      date: "",
      description: "",
      images: [],
    }
  ],

  // step 5.7
  remark: "",
  otherRemarks: "",

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
