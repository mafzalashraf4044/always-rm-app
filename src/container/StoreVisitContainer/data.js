export const visitFormTemplate =

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
    key: "stepIndex-3",
    components: [
      {
        key: "formFieldSet-40",
        type: "formFieldSet",
        legend: "",
        styles: {marginBottom: 0},
        components: [
          {
            type: "switch",
            label: "IPOS/RXT Installation",
            key: "iposRxtInstallation",
          },
        ],
      },
      {
        key: "formFieldSet-41",
        type: "formFieldSet",
        legend: "",
        styles: {marginTop: 0},
        components: [
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
        key: "formFieldSet-42",
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
    title: "Step 3.2: Merchandising",
    key: "stepIndex-3",
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
        key: "formFieldSet-52",
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
        key: "formFieldSet-53",
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
        key: "formFieldSet-54",
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








]