export default [
  {
    type: "step",
    title: "",
    key: "stepIndex-0",
    fullHeight: true,
    startBtn: true,
    components: [{
      key: "formFieldSet-0-0",
      type: "formFieldSet",
      legend: "",
      components: [{
          label: "Store Status",
          key: "storeStatus",
          placeholder: "",
          data: {
            values: [{
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
    }],
  },

  {
    type: "step",
    title: "Step 1: RSPs",
    key: "stepIndex-1",
    components: [{
      key: "formFieldSet-1-0",
      type: "formFieldSet",
      legend: "",
      components: [{
          inputType: "number",
          label: "No. of RSPs on duty during visit",
          key: "noOfRspsOnDutyDuringVisit",
          placeholder: "",
          type: "textfield",
          keyboardType: "numeric",
          properties: {}
        }
      ],
    },
    {
      label: "Current RSP List",
      key: "rspList",
      type: "rspList",
      gridItem: {
        name: "",
        email: "",
        contactNumber: "",
        IREPRegistered: "",
        status: "",
      },
      addOneMoreItemTxt: "ADD NEW RSP",
      components: [{
          key: "formFieldSet-1-1",
          type: "formFieldSet",
          legend: "New RSP",
          components: [{
            inputType: "text",
            label: "Name",
            key: "name",
            placeholder: "",
            type: "textfield",
            properties: {}
          },
          {
            inputType: "text",
            label: "Email",
            key: "email",
            placeholder: "",
            type: "textfield",
            properties: {}
          },
          {
            inputType: "text",
            label: "Contact Number",
            key: "contactNumber",
            placeholder: "",
            type: "textfield",
            properties: {}
          },
          {
            label: "IREP Registered",
            key: "IREPRegistered",
            placeholder: "",
            data: {
              values: [{
                value: "yes",
                label: "Yes",
                $$hashKey: "object:5432"
              }, {
                value: "no",
                label: "No",
                $$hashKey: "object:5473"
              }],
            },
            type: "select",
          },
          {
            label: "Status",
            key: "status",
            placeholder: "",
            data: {
              values: [{
                value: "active",
                label: "Active",
                $$hashKey: "object:5432"
              }, {
                value: "inactive",
                label: "Inactive",
                $$hashKey: "object:5473"
              }],
            },
            type: "select",
          }],
        },
      ]
    }],
  },

  {
    type: "step",
    title: "Step 2: Training",
    key: "stepIndex-2",
    components: [{
        key: "formFieldSet-2-0",
        type: "formFieldSet",
        legend: "Training Attendance",
        components: [{
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
          key: "dataGridRow-2-1",
          columns: [{
              styles: {
                width: "75%",
              },
              key: "column-2-1-0",
              components: [{
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
              }, ],
            },
            {
              styles: {
                width: "25%",
                alignItems: "flex-end",
              },
              key: "column-2-1-1",
              components: [{
                type: "checkbox",
                label: "Training Done",
                key: "trainingDone",
              }],
            }
          ]
        }
      },
      {
        key: "formFieldSet-2-2",
        type: "formFieldSet",
        legend: "Training Activities",
        components: [{
          key: "trainingActivityImages",
          type: "image",
          isAddEnabled: true,
          properties: {}
        }, ],
      },
    ],
  },

  {
    type: "step",
    title: "Step 3.1: Merchandising",
    key: "stepIndex-3",
    components: [{
        key: "formFieldSet-3-0",
        type: "formFieldSet",
        legend: "",
        components: [{
          type: "switch",
          label: "Can store deploy POSM",
          key: "canStoreDeployPosm",
        }, ],
      },
      {
        key: "formFieldSet-3-1",
        type: "formFieldSet",
        legend: "",
        components: [{
          type: "divider",
          key: "canStoreDeployPosmDivider"
        }, ],
      },
      {
        key: "formFieldSet-3-2",
        type: "formFieldSet",
        legend: "",
        components: [{
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
    components: [{
        key: "formFieldSet-4-0",
        type: "formFieldSet",
        legend: "",
        components: [{
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
        key: "formFieldSet-4-1",
        type: "formFieldSet",
        legend: "IPOS/RXT Installation Images",
        components: [{
          key: "iposRxtInstallationImages",
          type: "image",
          isAddEnabled: true,
          properties: {}
        }, ],
      },
    ],
  },

  {
    type: "step",
    title: "Step 3.3: Merchandising",
    key: "stepIndex-5",
    components: [{
        key: "formFieldSet-5-0",
        type: "formFieldSet",
        legend: "RXT Submission",
        components: [{
          inputType: "number",
          label: "Total Submission",
          key: "rxtSubmission",
          placeholder: "",
          type: "textfield",
          keyboardType: "numeric",
          properties: {}
        }, ],
      },
      {
        key: "formFieldSet-5-1",
        type: "formFieldSet",
        legend: "Total Number of PCs in Store",
        components: [{
          inputType: "number",
          label: "Total PCs",
          key: "totalPcsInStore",
          placeholder: "",
          type: "textfield",
          keyboardType: "numeric",
          properties: {}
        }, ],
      },
      {
        key: "formFieldSet-5-2",
        type: "formFieldSet",
        legend: "No. of PCs powerd by Intel turned on",
        components: [{
          inputType: "number",
          label: "Current",
          key: "pcsPowerdByIntelTurnedOn",
          placeholder: "",
          type: "textfield",
          keyboardType: "numeric",
          properties: {}
        }, ],
      },
      {
        key: "formFieldSet-5-3",
        type: "formFieldSet",
        legend: "No. of PCs powerd by Intel turned off",
        components: [{
          inputType: "number",
          label: "Current",
          key: "pcsPowerdByIntelTurnedOff",
          placeholder: "",
          type: "textfield",
          keyboardType: "numeric",
          properties: {}
        }, ],
      },
      {
        key: "formFieldSet-5-4",
        type: "formFieldSet",
        legend: "No. of PCs powerd by Competitor turned on",
        components: [{
          inputType: "number",
          label: "Current",
          key: "pcsPowerdByCompetitorTurnedOn",
          placeholder: "",
          type: "textfield",
          keyboardType: "numeric",
          properties: {}
        }, ],
      },
      {
        key: "formFieldSet-5-5",
        type: "formFieldSet",
        legend: "No. of PCs powerd by Competitor turned off",
        components: [{
          inputType: "number",
          label: "Current",
          key: "pcsPowerdByCompetitorTurnedOff",
          placeholder: "",
          type: "textfield",
          keyboardType: "numeric",
          properties: {}
        }, ],
      },
    ],
  },

  {
    type: "step",
    title: "Step 4: Competitor Anaylsis",
    key: "stepIndex-6",
    components: [{
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
      addOneMoreItemPosition: "top",
      components: [{
          key: "formFieldSet-6-0",
          type: "formFieldSet",
          legend: "Competitor Information",
          components: [{
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
          key: "formFieldSet-6-1",
          type: "formFieldSet",
          legend: "Competitor Images",
          components: [{
            key: "competitorImages",
            type: "image",
            isAddEnabled: true,
            properties: {}
          }, ],
        },
      ]
    }, ],
  },

  {
    type: "step",
    title: "Step 5.1: Store Anaylsis",
    key: "stepIndex-7",
    components: [{
        key: "formFieldSet-7-0",
        type: "formFieldSet",
        legend: "2-in-1 Zone",
        components: [{
            inputType: "number",
            label: "Current",
            key: "current2in1Zone",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
          {
            inputType: "number",
            label: "Outdated",
            key: "outdated2in1Zone",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
          {
            inputType: "number",
            label: "Refresh/Deployment Opportunity",
            key: "refrestDeploymentOpportunity2in1Zone",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
          {
            inputType: "text",
            label: "Description",
            key: "storeAnalysisDescription2in1Zone",
            placeholder: "",
            multiline: true,
            type: "textfield",
          },
        ],
      },
      {
        key: "formFieldSet-7-1",
        type: "formFieldSet",
        legend: "PC Images (minumum 5 images)",
        components: [{
          key: "storeAnalysisPCImages2in1Zone",
          type: "image",
          isAddEnabled: true,
          properties: {}
        }]
      },
    ],
  },

  {
    type: "step",
    title: "Step 5.2: Store Anaylsis",
    key: "stepIndex-8",
    components: [{
        key: "formFieldSet-8-0",
        type: "formFieldSet",
        legend: "Gaming Zone",
        components: [{
            inputType: "number",
            label: "Current",
            key: "currentGamingZone",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
          {
            inputType: "number",
            label: "Outdated",
            key: "outdatedGamingZone",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
          {
            inputType: "number",
            label: "Refresh/Deployment Opportunity",
            key: "refrestDeploymentOpportunityGamingZone",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            properties: {}
          },
          {
            inputType: "text",
            label: "Description",
            key: "storeAnalysisDescriptionGamingZone",
            placeholder: "",
            multiline: true,
            type: "textfield",
          },
        ],
      },
      {
        key: "formFieldSet-8-1",
        type: "formFieldSet",
        legend: "PC Images (minumum 5 images)",
        components: [{
          key: "storeAnalysisPCImagesGamingZone",
          type: "image",
          isAddEnabled: true,
          properties: {}
        }, ],
      },
    ],
  },

  {
    type: "step",
    title: "Step 5.3: Store Anaylsis",
    key: "stepIndex-9",
    components: [{
        key: "formFieldSet-9-0",
        type: "formFieldSet",
        legend: "End Cap Display",
        components: [{
          inputType: "number",
          label: "Current",
          key: "currentEndCapDisplay",
          placeholder: "",
          type: "textfield",
          keyboardType: "numeric",
          properties: {}
        }, ],
      },
      {
        key: "formFieldSet-9-1",
        type: "formFieldSet",
        legend: "",
        components: [{
          type: "switch",
          label: "Intel Riser Deployed in Store",
          key: "intelRiserDeployedInStore",
        }, ],
      },
      {
        key: "formFieldSet-9-2",
        type: "formFieldSet",
        legend: "",
        components: [{
          type: "switch",
          label: "Promotion Updates",
          key: "promotionUpdates",
        }, ],
      },
      {
        key: "formFieldSet-9-3",
        type: "formFieldSet",
        legend: "",
        components: [{
          inputType: "text",
          label: "Description",
          key: "storeAnalysisDescriptionEndCapDisplay",
          placeholder: "",
          multiline: true,
          type: "textfield",
        }, ],
      },
      {
        key: "formFieldSet-9-4",
        type: "formFieldSet",
        legend: "",
        components: [{
          key: "storeAnalysisPCImagesEndCapDisplay",
          type: "image",
          isAddEnabled: true,
          properties: {}
        }, ],
      },
    ],
  },

  {
    type: "step",
    title: "Step 5.4: Store Anaylsis",
    key: "stepIndex-10",
    components: [{
        key: "formFieldSet-10-1",
        type: "formFieldSet",
        legend: "",
        components: [{
          type: "switch",
          label: "New Launch Product Updates",
          key: "newLaunchProductUpdates",
        }, ],
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
        addOneMoreItemPosition: "top",
        components: [{
            key: "formFieldSet-10-2",
            type: "formFieldSet",
            legend: "New Launch Product",
            components: [{
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
            key: "formFieldSet-10-3",
            type: "formFieldSet",
            legend: "",
            components: [{
              key: "images",
              type: "image",
              isAddEnabled: true,
              properties: {}
            }, ],
          },
        ]
      },
    ],
  },

  {
    type: "step",
    title: "Step 5.5: Store Anaylsis",
    key: "stepIndex-11",
    components: [{
        key: "formFieldSet-11-1",
        type: "formFieldSet",
        legend: "",
        components: [{
          type: "switch",
          label: "OEM Updates",
          key: "oemUpdates",
        }, ],
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
        addOneMoreItemPosition: "top",
        components: [{
            key: "formFieldSet-11-2",
            type: "formFieldSet",
            legend: "New OEM",
            components: [{
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
            key: "formFieldSet-11-3",
            type: "formFieldSet",
            legend: "",
            components: [{
              key: "images",
              type: "image",
              isAddEnabled: true,
              properties: {}
            }, ],
          },
        ]
      },
    ],
  },

  {
    type: "step",
    title: "Step 5.6: Store Anaylsis",
    key: "stepIndex-12",
    components: [{
        key: "formFieldSet-12-1",
        type: "formFieldSet",
        legend: "",
        components: [{
          type: "switch",
          label: "Event Updates",
          key: "eventUpdates",
        }, ],
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
        addOneMoreItemPosition: "top",
        components: [{
            key: "formFieldSet-12-2",
            type: "formFieldSet",
            legend: "New Event",
            components: [{
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
            key: "formFieldSet-12-3",
            type: "formFieldSet",
            legend: "",
            components: [{
              key: "images",
              type: "image",
              isAddEnabled: true,
              properties: {}
            }, ],
          },
        ]
      },
    ],
  },

  {
    type: "step",
    title: "Step 5.7: Store Anaylsis",
    key: "stepIndex-13",
    fullHeight: true,
    components: [{
      key: "formFieldSet-13-1",
      type: "formFieldSet",
      legend: "Remarks",
      components: [{
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
    }, ],
  },

  {
    type: "step",
    title: "Step 6: Submit",
    key: "stepIndex-14",
    fullHeight: true,
    components: [{
      key: "formFieldSet-14-1",
      type: "formFieldSet",
      legend: "",
      components: [{
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
    }, ],
  }
];
