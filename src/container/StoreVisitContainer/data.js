export const rcrFormTemplate =

  [
    
  {
    type: "step",
    title: "",
    key: "stepIndex-0",
    fullHeight: true,
    components: [
      {
        key: "formFieldSet-00",
        type: "formFieldSet",
        legend: "",
        components: [
          {
            label: "Store Status",
            key: "storeStatus",
            placeholder: "",
            data: {values: [{
                value: "active",
                label: "Active",
                $$hashKey: "object:747"
              }, {
                value: "inactive",
                label: "Inactive",
                $$hashKey: "object:776"
              }],
              json: "",
              url: "",
              resource: "",
              custom: ""
            },
            type: "select",
            properties: {}
          },
          
          {
            inputType: "number",
            label: "Visit Number",
            key: "visitNumber",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          }
        ],
      }
    ],
  },
  
  {
    type: "step",
    title: "Step 1: RSPs",
    key: "stepIndex-1",
    components: [
      {
        key: "formFieldSet-10",
        type: "formFieldSet",
        legend: "",
        components: [          
          {
            inputType: "number",
            label: "No. of RSPs on duty during visit",
            key: "noOfRspsOnDutyDuringVisit",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
          {
            type: 'topi',
          }
        ],
      }
    ],
  },

  {
    type: "step",
    title: "Step 2: Training",
    key: "stepIndex-2",
    components: [
      {
        key: "formFieldSet-20",
        type: "formFieldSet",
        legend: "Training Attendance",
        components: [
          {
            inputType: "number",
            label: "No. of RSPs who attended Face-to-Face training",
            key: "noOfRspsWhoAttendedFaceToFaceTraining",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
          {
            inputType: "number",
            label: "No. of IREP courses completed during visit",
            key: "noOfIrepCoursesCompletedDuringVisit",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
        ],
      },
      {
        label: "Face-to-Face Training",
        key: "faceToFaceTraining",
        type: "dataGridRowView",
        gridItem: {
          trainingCourse: "",
          trainingDone: false,
        },
        addOneMoreItemTxt: "ADD COURSE",
        row: {
          key: "dataGridRow-21",
          columns: [
            {
              styles: {
                width: "75%",
              },
              key: "column-210",
              components: [
                {
                  label: "Training Course",
                  key: "trainingCourse",
                  placeholder: "",
                  incrementLabelIndex: true,
                  data: {
                    values: [{
                      value: "optane",
                      label: "Optane",
                      $$hashKey: "object:5432"
                    }, {
                      value: "10thGen",
                      label: "10th Gen",
                      $$hashKey: "object:5473"
                    }, {
                      value: "competitorAnalysis",
                      label: "Competitor Analysis",
                      $$hashKey: "object:5477"
                    }, {
                      value: "someOtherCourse",
                      label: "Some other course",
                      $$hashKey: "object:5481"
                    }],
                  },
                  type: "select",
                },
              ],
            },
            {
              styles: {
                width: "25%",
                alignItems: "flex-end",
              },
              key: "column-211",
              components: [
                {
                  type: "checkbox",
                  label: "Training Done",
                  key: "trainingDone",
                }
              ],
            }
          ]
        }
      },
      {
        key: "formFieldSet-21",
        type: "formFieldSet",
        legend: "Training Activities",
        components: [
          {
            key: "trainingActivityImages",
            type: "image",
            isAddEnabled: true,
            properties: {}
          },
        ],
      },
    ],
  },

  {
    type: "step",
    title: "Step 3.1: Merchandising",
    key: "stepIndex-3",
    components: [
      {
        key: "formFieldSet-30",
        type: "formFieldSet",
        legend: "",
        components: [
          {
            type: "switch",
            label: "Can store deploy POSM",
            key: "canStoreDeployPosm",
          },
        ],
      },
      {
        key: "formFieldSet-31",
        type: "formFieldSet",
        legend: "",
        components: [
          {
            type: "divider",
            key: "divider0"
          },
        ],
      },
      {
        key: "formFieldSet-32",
        type: "formFieldSet",
        legend: "",
        components: [
          {
            type: "switch",
            label: "POSM",
            key: "posm",
          },
          {
            inputType: "number",
            label: "2-in-1 PCs",
            key: "twoInOnePcs",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
          {
            inputType: "number",
            label: "Laptops",
            key: "laptops",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
          {
            inputType: "number",
            label: "All-in-1 PCs",
            key: "allIn1Pcs",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
          {
            key: "merchandisingImages",
            type: "image",
            isAddEnabled: true,
            properties: {}
          },       
        ],
      }
    ],
  },

  {
    type: "step",
    title: "Step 3.2: Merchandising",
    key: "stepIndex-4",
    components: [
      {
        key: "formFieldSet-40",
        type: "formFieldSet",
        legend: "",
        components: [
          {
            type: "switch",
            label: "IPOS/RXT Installation",
            key: "iposRxtInstallation",
          },
          {
            inputType: "number",
            label: "Current in Store",
            key: "currentInStore",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
          {
            inputType: "number",
            label: "New Installation",
            key: "newInstallation",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
          {
            inputType: "number",
            label: "Total IPOS/RXT Installation",
            key: "totIposRxtInstallation",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },     
        ],
      },
      {
        key: "formFieldSet-41",
        type: "formFieldSet",
        legend: "IPOS/RXT Installation Images",
        components: [
          {
            key: "iposRxtInstallationImages",
            type: "image",
            isAddEnabled: true,
            properties: {}
          },
        ],
      },
    ],
  },

  {
    type: "step",
    title: "Step 3.3: Merchandising",
    key: "stepIndex-5",
    components: [
      {
        key: "formFieldSet-50",
        type: "formFieldSet",
        legend: "RXT Submission",
        components: [
          {
            inputType: "number",
            label: "Total Submission",
            key: "rxtSubmission",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
        ],
      },
      {
        key: "formFieldSet-51",
        type: "formFieldSet",
        legend: "Total Number of PCs in Store",
        components: [
          {
            inputType: "number",
            label: "Total PCs",
            key: "totalPcsInStore",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
        ],
      },
      {
        key: "formFieldSet-52",
        type: "formFieldSet",
        legend: "No. of PCs powerd by Intel turned on",
        components: [
          {
            inputType: "number",
            label: "Current",
            key: "pcsPowerdByIntelTurnedOn",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
        ],
      },
      {
        key: "formFieldSet-53",
        type: "formFieldSet",
        legend: "No. of PCs powerd by Intel turned off",
        components: [
          {
            inputType: "number",
            label: "Current",
            key: "pcsPowerdByIntelTurnedOff",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
        ],
      },
      {
        key: "formFieldSet-54",
        type: "formFieldSet",
        legend: "No. of PCs powerd by Competitor turned on",
        components: [
          {
            inputType: "number",
            label: "Current",
            key: "pcsPowerdByCompetitorTurnedOn",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
        ],
      },
      {
        key: "formFieldSet-55",
        type: "formFieldSet",
        legend: "No. of PCs powerd by Competitor turned off",
        components: [
          {
            inputType: "number",
            label: "Current",
            key: "pcsPowerdByCompetitorTurnedOff",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
        ],
      },
    ],
  },

  {
    type: "step",
    title: "Step 4: Competitor Anaylsis",
    key: "stepIndex-6",
    components: [
      {
        label: "Competitor Anaylsis",
        key: "competitorAnaylsis",
        type: "dataGridWithFieldSets",
        gridItem: {
          competitorName: "",
          noOfCompetitorPcs: "",
          posmInstalled: "",
          description: "",
          pcBrand: "",
          pcDescription: "",
          competitorImages: [],
        },
        addOneMoreItemTxt: "ADD COMPETITOR",
        components: [
          {
            key: "formFieldSet-60",
            type: "formFieldSet",
            legend: "Competitor Information",
            components: [
              {
                label: "Competitor Name",
                key: "competitorName",
                placeholder: "",
                data: {
                  values: [{
                    value: "amd",
                    label: "AMD",
                  }, {
                    value: "intel",
                    label: "Intel",
                  }],
                },
                type: "select",
              },
              {
                inputType: "number",
                label: "Number of Competitor PCs",
                key: "noOfCompetitorPcs",
                placeholder: "",
                type: "textfield",
                keyboardType: "numeric",
              },
              {
                label: "POSM Installed",
                key: "posmInstalled",
                placeholder: "",
                data: {
                  values: [{
                    value: "yes",
                    label: "Yes",
                  }, {
                    value: "no",
                    label: "No",
                  }],
                },
                type: "select",
              },
              {
                inputType: "text",
                label: "Description",
                key: "description",
                placeholder: "",
                multiline: true,
                type: "textfield",
              },
              {
                label: "PC Brand",
                key: "pcBrand",
                placeholder: "",
                data: {
                  values: [{
                    value: "dell",
                    label: "Dell",
                  }, {
                    value: "hp",
                    label: "HP",
                  }],
                },
                type: "select",
              },
              {
                inputType: "text",
                label: "PC Description",
                key: "pcDescription",
                placeholder: "",
                multiline: true,
                type: "textfield",
              },
            ],
          },
          {
            key: "formFieldSet-61",
            type: "formFieldSet",
            legend: "Competitor Images",
            components: [
              {
                key: "competitorImages",
                type: "image",
                isAddEnabled: true,
                properties: {}
              },
            ],
          },
        ]
      },
    ],
  },

  {
    type: "step",
    title: "Step 5: Store Anaylsis",
    key: "stepIndex-7",
    components: [
      {
        key: "formFieldSet-70",
        type: "formFieldSet",
        legend: "2-in-1 Zone",
        components: [
          {
            inputType: "number",
            label: "Current",
            key: "current5",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
          {
            inputType: "number",
            label: "Outdated",
            key: "outdated5",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
          {
            inputType: "number",
            label: "Refresh/Deployment Opportunity",
            key: "refrestDeploymentOpportunity5",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
          {
            inputType: "text",
            label: "Description",
            key: "storeAnalysisDescription5",
            placeholder: "",
            multiline: true,
            type: "textfield",
          },
        ],
      },
      {
        key: "formFieldSet-71",
        type: "formFieldSet",
        legend: "PC Images (minumum 5 images)",
        components: [
          {
            key: "storeAnalysisPCImages5",
            type: "image",
            isAddEnabled: true,
            properties: {}
          },
        ],
      },
    ],
  },

  {
    type: "step",
    title: "Step 5.1: Store Anaylsis",
    key: "stepIndex-8",
    components: [
      {
        key: "formFieldSet-80",
        type: "formFieldSet",
        legend: "Gaming Zone",
        components: [
          {
            inputType: "number",
            label: "Current",
            key: "current51",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
          {
            inputType: "number",
            label: "Outdated",
            key: "outdated51",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
          {
            inputType: "number",
            label: "Refresh/Deployment Opportunity",
            key: "refrestDeploymentOpportunity51",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
          {
            inputType: "text",
            label: "Description",
            key: "storeAnalysisDescription51",
            placeholder: "",
            multiline: true,
            type: "textfield",
          },
        ],
      },
      {
        key: "formFieldSet-81",
        type: "formFieldSet",
        legend: "PC Images (minumum 5 images)",
        components: [
          {
            key: "storeAnalysisPCImages51",
            type: "image",
            isAddEnabled: true,
            properties: {}
          },
        ],
      },
    ],
  },

  {
    type: "step",
    title: "Step 5.2: Store Anaylsis",
    key: "stepIndex-9",
    components: [
      {
        key: "formFieldSet-90",
        type: "formFieldSet",
        legend: "End Cap Display",
        components: [
          {
            inputType: "number",
            label: "Current",
            key: "current52",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
        ],
      },
      {
        key: "formFieldSet-91",
        type: "formFieldSet",
        legend: "",
        components: [
          {
            type: "switch",
            label: "Intel Riser Deployed in Store",
            key: "intelRiserDeployedInStore52",
          },
        ],
      },
      {
        key: "formFieldSet-92",
        type: "formFieldSet",
        legend: "",
        components: [
          {
            type: "switch",
            label: "Promotion Updates",
            key: "promotionUpdates52",
          },
        ],
      },
      {
        key: "formFieldSet-93",
        type: "formFieldSet",
        legend: "",
        components: [
          {
            inputType: "text",
            label: "Description",
            key: "storeAnalysisDescription52",
            placeholder: "",
            multiline: true,
            type: "textfield",
          },
        ],
      },
      {
        key: "formFieldSet-94",
        type: "formFieldSet",
        legend: "",
        components: [
          {
            key: "storeAnalysisPCImages52",
            type: "image",
            isAddEnabled: true,
            properties: {}
          },
        ],
      },
    ],
  },

  {
    type: "step",
    title: "Step 5.3: Store Anaylsis",
    key: "stepIndex-10",
    components: [
      {
        key: "formFieldSet-101",
        type: "formFieldSet",
        legend: "",
        components: [
          {
            type: "switch",
            label: "New Launch Product Updates",
            key: "newLaunchProductUpdates",
          },
        ],
      },
      {
        label: "",
        key: "newLaunchProduct",
        type: "dataGridWithFieldSets",
        gridItem: {
          brand: "",
          model: "",
          specifications: "",
          price: "",
          description: "",
          images: [],
        },
        addOneMoreItemTxt: "ADD PRODUCTS",
        components: [
          {
            key: "formFieldSet-102",
            type: "formFieldSet",
            legend: "New Launch Product",
            components: [
              {
                label: "Brand",
                key: "brand",
                placeholder: "",
                data: {
                  values: [{
                    value: "dell",
                    label: "DELL",
                  }, {
                    value: "hp",
                    label: "HP",
                  }],
                },
                type: "select",
              },
              {
                inputType: "text",
                label: "Model",
                key: "model",
                placeholder: "",
                type: "textfield",
              },
              {
                inputType: "text",
                label: "Specifications",
                key: "specifications",
                placeholder: "",
                multiline: true,
                type: "textfield",
              },
              {
                inputType: "number",
                label: "Price",
                key: "price",
                placeholder: "",
                type: "textfield",
                keyboardType: "numeric",
              },
              {
                inputType: "text",
                label: "Description",
                key: "description",
                placeholder: "",
                multiline: true,
                type: "textfield",
              },
            ],
          },
          {
            key: "formFieldSet-103",
            type: "formFieldSet",
            legend: "",
            components: [
              {
                key: "images",
                type: "image",
                isAddEnabled: true,
                properties: {}
              },
            ],
          },
        ]
      },
    ],
  },

  {
    type: "step",
    title: "Step 5.4: Store Anaylsis",
    key: "stepIndex-11",
    components: [
      {
        key: "formFieldSet-111",
        type: "formFieldSet",
        legend: "",
        components: [
          {
            type: "switch",
            label: "OEM Updates",
            key: "oemUpdates",
          },
        ],
      },
      {
        label: "",
        key: "oem",
        type: "dataGridWithFieldSets",
        gridItem: {
          name: "",
          description: "",
          images: [],
        },
        addOneMoreItemTxt: "ADD OEM",
        components: [
          {
            key: "formFieldSet-112",
            type: "formFieldSet",
            legend: "New Launch Product",
            components: [
              {
                inputType: "text",
                label: "Name",
                key: "name",
                placeholder: "",
                type: "textfield",
              },
              {
                inputType: "text",
                label: "Description",
                key: "description",
                placeholder: "",
                multiline: true,
                type: "textfield",
              },
            ],
          },
          {
            key: "formFieldSet-113",
            type: "formFieldSet",
            legend: "",
            components: [
              {
                key: "images",
                type: "image",
                isAddEnabled: true,
                properties: {}
              },
            ],
          },
        ]
      },
    ],
  },

  {
    type: "step",
    title: "Step 5.5: Store Anaylsis",
    key: "stepIndex-12",
    components: [
      {
        key: "formFieldSet-121",
        type: "formFieldSet",
        legend: "",
        components: [
          {
            type: "switch",
            label: "Event Updates",
            key: "eventUpdates",
          },
        ],
      },
      {
        label: "",
        key: "event",
        type: "dataGridWithFieldSets",
        gridItem: {
          name: "",
          date: "",
          description: "",
          images: [],
        },
        addOneMoreItemTxt: "ADD EVENTS",
        components: [
          {
            key: "formFieldSet-122",
            type: "formFieldSet",
            legend: "New Launch Product",
            components: [
              {
                inputType: "text",
                label: "Name",
                key: "name",
                placeholder: "",
                type: "textfield",
              },
              {
                inputType: "text",
                label: "Date",
                key: "date",
                placeholder: "",
                type: "textfield",
              },
              {
                inputType: "text",
                label: "Description",
                key: "description",
                placeholder: "",
                multiline: true,
                type: "textfield",
              },
            ],
          },
          {
            key: "formFieldSet-123",
            type: "formFieldSet",
            legend: "",
            components: [
              {
                key: "images",
                type: "image",
                isAddEnabled: true,
                properties: {}
              },
            ],
          },
        ]
      },
    ],
  },

  {
    type: "step",
    title: "Step 5.5: Store Anaylsis",
    key: "stepIndex-13",
    fullHeight: true,
    components: [
      {
        key: "formFieldSet-131",
        type: "formFieldSet",
        legend: "Remarks",
        components: [
          {
            label: "Remarks/Feedback",
            key: "remark",
            placeholder: "",
            data: {
              values: [{
                value: "good",
                label: "Good",
              }, {
                value: "average",
                label: "Average",
              }, {
                value: "bad",
                label: "Bad",
              }, {
                value: "others",
                label: "Others",
              }],
            },
            type: "select",
          },
          {
            inputType: "text",
            label: "Enter Remarks Below",
            key: "otherRemarks",
            placeholder: "",
            multiline: true,
            type: "textfield",
          },
        ],
      },
    ],
  },

  {
    type: "step",
    title: "Step 6: Submit",
    key: "stepIndex-14",
    components: [
      {
        key: "formFieldSet-141",
        type: "formFieldSet",
        legend: "Remarks",
        components: [
          {
            inputType: "text",
            label: "Name",
            key: "submitName",
            placeholder: "",
            type: "textfield",
          },
          {
            inputType: "text",
            label: "Job Title",
            key: "submitJobTitle",
            placeholder: "",
            type: "textfield",
          },
          {
            key: "signature",
            type: "signature",
          },
        ],
      },
    ],
  },
]