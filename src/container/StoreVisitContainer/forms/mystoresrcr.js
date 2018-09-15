export default [
  {
    type: "step",
    title: "",
    stepCompletedTxt: "",
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
              value: "Active",
              label: "Active",
              $$hashKey: "object:747"
            }, {
              value: "Inactive",
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
          editable: true,
          properties: {}
        }
      ],
    }],
  },

  {
    type: "step",
    title: "Step 1: RSPs",
    stepCompletedTxt: "Step 1 of 6 Completed",
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
          editable: true,
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
        irepTrainedUser: "",
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
            label: "IREP Trained User",
            key: "irepTrainedUser",
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
                value: "Active",
                label: "Active",
                $$hashKey: "object:5432"
              }, {
                value: "Inactive",
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
    stepCompletedTxt: "Step 2 of 6 Completed",
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
            editable: true,
            properties: {}
          },
          {
            inputType: "number",
            label: "No. of IREP courses completed during visit",
            key: "noOfIrepCoursesCompletedDuringVisit",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            editable: true,
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
                    value: "irep",
                    label: "IREP",
                    $$hashKey: "object:5473"
                  }, {
                    value: "Others",
                    label: "Others",
                    $$hashKey: "object:5481"
                  }],
                },
                type: "select",
              }],
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
    stepCompletedTxt: "Step 3.1 of 6 Completed",
    key: "stepIndex-3",
    components: [{
        key: "formFieldSet-3-0",
        type: "formFieldSet",
        legend: "",
        components: [{
          type: "switch",
          label: "Can store deploy POSM?",
          key: "canStoreDeployPosm",
        }],
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
            label: "POSM installed?",
            key: "posm",
          },
          {
            inputType: "number",
            label: "2-in-1 PCs",
            key: "twoInOnePcs",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            editable: true,
            properties: {}
          },
          {
            inputType: "number",
            label: "Laptops",
            key: "laptops",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            editable: true,
            properties: {}
          },
          {
            inputType: "number",
            label: "All-in-1 PCs",
            key: "allIn1Pcs",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            editable: true,
            properties: {}
          },
          {
            key: "merchandisingImages",
            type: "image",
            isAddEnabled: false,
            addEnabledDependency: "posmReplacement",
            properties: {}
          },
          {
            type: "switch",
            label: "Any POSM replacement required?",
            key: "posmReplacement",
          },
        ],
      }
    ],
  },

  {
    type: "step",
    title: "Step 3.2: Merchandising",
    stepCompletedTxt: "Step 3.2 of 6 Completed",
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
            editable: true,
            aggregate: {
              key: "totIposRxtInstallation",
              aggregateOf: ["currentInStore", "newInstallation"],
            },
            properties: {}
          },
          {
            inputType: "number",
            label: "New Installation",
            key: "newInstallation",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            editable: true,
            aggregate: {
              key: "totIposRxtInstallation",
              aggregateOf: ["currentInStore", "newInstallation"],
            },
            properties: {}
          },
          {
            inputType: "number",
            label: "Total IPOS/RXT Installation",
            key: "totIposRxtInstallation",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            editable: false,
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
    stepCompletedTxt: "Step 3.3 of 6 Completed",
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
          editable: true,
          properties: {}
        }, ],
      },
      {
        key: "formFieldSet-5-1",
        type: "formFieldSet",
        legend: "No. of PCs powered by Intel switched on",
        components: [{
          inputType: "number",
          label: "Current",
          key: "pcsPowerdByIntelSwitchedOn",
          placeholder: "",
          type: "textfield",
          keyboardType: "numeric",
          editable: true,
          aggregate: {
            key: "totalPcsInStore",
            aggregateOf: ["pcsPowerdByIntelSwitchedOn", "pcsPowerdByIntelSwitchedOff", "pcsPowerdByCompetitorSwitchedOn", "pcsPowerdByCompetitorSwitchedOff"],
          },
          properties: {}
        }, ],
      },
      {
        key: "formFieldSet-5-2",
        type: "formFieldSet",
        legend: "No. of PCs powerd by Intel switched off",
        components: [{
          inputType: "number",
          label: "Current",
          key: "pcsPowerdByIntelSwitchedOff",
          placeholder: "",
          type: "textfield",
          keyboardType: "numeric",
          editable: true,
          aggregate: {
            key: "totalPcsInStore",
            aggregateOf: ["pcsPowerdByIntelSwitchedOn", "pcsPowerdByIntelSwitchedOff", "pcsPowerdByCompetitorSwitchedOn", "pcsPowerdByCompetitorSwitchedOff"],
          },
          properties: {}
        }, ],
      },
      {
        key: "formFieldSet-5-3",
        type: "formFieldSet",
        legend: "No. of PCs powerd by Competitor switched on",
        components: [{
          inputType: "number",
          label: "Current",
          key: "pcsPowerdByCompetitorSwitchedOn",
          placeholder: "",
          type: "textfield",
          keyboardType: "numeric",
          editable: true,
          aggregate: {
            key: "totalPcsInStore",
            aggregateOf: ["pcsPowerdByIntelSwitchedOn", "pcsPowerdByIntelSwitchedOff", "pcsPowerdByCompetitorSwitchedOn", "pcsPowerdByCompetitorSwitchedOff"],
          },
          properties: {}
        }, ],
      },
      {
        key: "formFieldSet-5-4",
        type: "formFieldSet",
        legend: "No. of PCs powerd by Competitor switched off",
        components: [{
          inputType: "number",
          label: "Current",
          key: "pcsPowerdByCompetitorSwitchedOff",
          placeholder: "",
          type: "textfield",
          keyboardType: "numeric",
          editable: true,
          aggregate: {
            key: "totalPcsInStore",
            aggregateOf: ["pcsPowerdByIntelSwitchedOn", "pcsPowerdByIntelSwitchedOff", "pcsPowerdByCompetitorSwitchedOn", "pcsPowerdByCompetitorSwitchedOff"],
          },
          properties: {}
        }, ],
      },
      {
        key: "formFieldSet-5-5",
        type: "formFieldSet",
        legend: "Total Number of PCs in Store",
        components: [{
          inputType: "number",
          label: "Total PCs",
          key: "totalPcsInStore",
          placeholder: "",
          type: "textfield",
          keyboardType: "numeric",
          editable: false,
          properties: {}
        }, ],
      },
    ],
  },

  {
    type: "step",
    title: "Step 4: Competitor Analysis",
    stepCompletedTxt: "Step 4 of 6 Completed",
    key: "stepIndex-6",
    components: [{
      label: "Competitor Analysis",
      key: "competitorAnalysis",
      type: "dataGridWithFieldSets",
      gridItem: {
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
                  value: "AMD",
                  label: "AMD",
                }, {
                  value: "Qualcomm",
                  label: "Qualcomm",
                }],
              },
              type: "select",
            },
            {
              label: "PC Brand",
              key: "pcBrand",
              placeholder: "",
              data: {
                values: [{
                  value: "ACER",
                  label: "ACER",
                },{
                  value: "AMD",
                  label: "AMD",
                },{
                  value: "ASUS",
                  label: "ASUS",
                },{
                  value: "AVITA",
                  label: "AVITA",
                },{
                  value: "AXIOO",
                  label: "AXIOO",
                },{
                  value: "DELL",
                  label: "DELL",
                },{
                  value: "HP",
                  label: "HP",
                },{
                  value: "LENOVO",
                  label: "LENOVO",
                },{
                  value: "MSI",
                  label: "MSI",
                },{
                  value: "RAZOR",
                  label: "RAZOR",
                },{
                  value: "THUNDEROBOT",
                  label: "THUNDEROBOT",
                },{
                  value: "OTHERS",
                  label: "OTHERS",
                },],
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
            editable: true,},

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
              inputType: "text",
              label: "Form Factor",
              key: "formFactor",
              placeholder: "",
              multiline: true,
              type: "textfield",
            },
            {
              inputType: "number",
              label: "2-in-1 Convertible",
              key: "twoInOneConvertible",
              placeholder: "",
              type: "textfield",
              keyboardType: "numeric",
            editable: true,},

            {
              inputType: "number",
              label: "2-in-1 Detachable",
              key: "twoInOneDetachable",
              placeholder: "",
              type: "textfield",
              keyboardType: "numeric",
            editable: true,},

            {
              inputType: "number",
              label: "All-in-1",
              key: "allInOne",
              placeholder: "",
              type: "textfield",
              keyboardType: "numeric",
            editable: true,},

            {
              inputType: "number",
              label: "Desktop",
              key: "desktop",
              placeholder: "",
              type: "textfield",
              keyboardType: "numeric",
            editable: true,},

            {
              inputType: "number",
              label: "Laptop",
              key: "laptop",
              placeholder: "",
              type: "textfield",
              keyboardType: "numeric",
            editable: true,},

            {
              inputType: "number",
              label: "Gaming Desktop",
              key: "gamingDesktop",
              placeholder: "",
              type: "textfield",
              keyboardType: "numeric",
            editable: true,},

            {
              inputType: "number",
              label: "Gaming Laptop",
              key: "gamingLaptop",
              placeholder: "",
              type: "textfield",
              keyboardType: "numeric",
            editable: true,},

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
    title: "Step 5.1: Store Analysis",
    stepCompletedTxt: "Step 5.1 of 6 Completed",
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
            editable: true,
            properties: {}
          },
          {
            inputType: "number",
            label: "Outdated",
            key: "outdated2in1Zone",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            editable: true,
            properties: {}
          },
          {
            inputType: "number",
            label: "Refresh/Deployment Opportunity",
            key: "refrestDeploymentOpportunity2in1Zone",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            editable: true,
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
        legend: "Images",
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
    title: "Step 5.2: Store Analysis",
    stepCompletedTxt: "Step 5.2 of 6 Completed",
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
            editable: true,
            properties: {}
          },
          {
            inputType: "number",
            label: "Outdated",
            key: "outdatedGamingZone",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            editable: true,
            properties: {}
          },
          {
            inputType: "number",
            label: "Refresh/Deployment Opportunity",
            key: "refrestDeploymentOpportunityGamingZone",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            editable: true,
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
        legend: "Images",
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
    title: "Step 5.3: Store Analysis",
    stepCompletedTxt: "Step 5.3 of 6 Completed",
    key: "stepIndex-9",
    components: [{
        key: "formFieldSet-9-0",
        type: "formFieldSet",
        legend: "Intel End Cap Display",
        components: [{
            inputType: "number",
            label: "Current",
            key: "currentEndCapDisplay",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            editable: true,
            properties: {}
          },
          {
            inputType: "number",
            label: "Outdated",
            key: "outdatedEndCapDisplay",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            editable: true,
            properties: {}
          },
          {
            inputType: "number",
            label: "Refresh/Deployment Opportunity",
            key: "refrestDeploymentOpportunityEndCapDisplay",
            placeholder: "",
            type: "textfield",
            keyboardType: "numeric",
            editable: true,
            properties: {}
          },
          {
            inputType: "text",
            label: "Description",
            key: "storeAnalysisDescriptionEndCapDisplay",
            placeholder: "",
            multiline: true,
            type: "textfield",
          },
        ],
      },
      {
        key: "formFieldSet-9-1",
        type: "formFieldSet",
        legend: "Images",
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
    title: "Step 5.4: Store Analysis",
    stepCompletedTxt: "Step 5.4 of 6 Completed",
    key: "stepIndex-10",
    components: [{
        key: "formFieldSet-10-1",
        type: "formFieldSet",
        legend: "",
        components: [{
          type: "switch",
          label: "Intel Riser Deployed in Store",
          key: "intelRiserDeployedInStore",
        }, ],
      },
      {
        key: "formFieldSet-10-2",
        type: "formFieldSet",
        legend: "",
        components: [{
          type: "switch",
          label: "Retailer Promotion Updates",
          key: "promotionUpdates",
        }, ],
      },
      {
        key: "formFieldSet-10-3",
        type: "formFieldSet",
        legend: "",
        components: [{
          inputType: "text",
          label: "Description",
          key: "storeAnalysisDescription",
          placeholder: "",
          multiline: true,
          type: "textfield",
        }, ],
      },
      {
        key: "formFieldSet-10-4",
        type: "formFieldSet",
        legend: "",
        components: [{
          key: "storeAnalysisPCImages",
          type: "image",
          isAddEnabled: true,
          properties: {}
        }, ],
      },
    ],
  },

  {
    type: "step",
    title: "Step 5.5: Store Analysis",
    stepCompletedTxt: "Step 5.5 of 6 Completed",
    key: "stepIndex-11",
    components: [{
        key: "formFieldSet-11-1",
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
            key: "formFieldSet-11-2",
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
              editable: true,},

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
    title: "Step 5.6: Store Analysis",
    stepCompletedTxt: "Step 5.6 of 6 Completed",
    key: "stepIndex-11",
    components: [{
        key: "formFieldSet-12-1",
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
        key: "oems",
        type: "dataGridWithFieldSets",
        gridItem: {
          name: "",
          description: "",
          images: [],
        },
        addOneMoreItemTxt: "ADD OEM",
        addOneMoreItemPosition: "top",
        components: [{
            key: "formFieldSet-12-2",
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
    title: "Step 5.7: Store Analysis",
    stepCompletedTxt: "Step 5.7 of 6 Completed",
    key: "stepIndex-13",
    components: [{
        key: "formFieldSet-13-1",
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
        key: "events",
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
            key: "formFieldSet-13-2",
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
                label: "Date From",
                key: "dateFrom",
                placeholder: "",
                type: "date",
              },
              {
                label: "Date To",
                key: "dateTo",
                placeholder: "",
                type: "date",
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
            key: "formFieldSet-13-3",
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
    title: "Step 5.8: Store Analysis",
    stepCompletedTxt: "Step 5.8 of 6 Completed",
    key: "stepIndex-14",
    fullHeight: true,
    components: [{
      key: "formFieldSet-14-1",
      type: "formFieldSet",
      legend: "Remarks",
      components: [{
          inputType: "text",
          label: "Remarks/Feedback",
          key: "remarks",
          placeholder: "",
          multiline: true,
          type: "textfield",
        },
        {
          inputType: "text",
          label: "Action item/s for follow-up",
          key: "actionItemsForFollowUp",
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
    stepCompletedTxt: "Step 6 of 6 Completed",
    key: "stepIndex-15",
    components: [{
      key: "formFieldSet-15-1",
      type: "formFieldSet",
      legend: "Verified By",
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
