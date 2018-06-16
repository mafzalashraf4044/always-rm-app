export default [
  {
    type: "step",
    title: "Step 1.1: POSM (2-in-1)",
    key: "stepIndex-0",
    components: [{
      label: "POSM",
      key: "posmTwoInOnePCs",
      type: "dataGridWithFieldSets",
      gridItem: {
        type: "",
        noInStore: "",
      },
      addOneMoreItemTxt: "ADD TYPES",
      addOneMoreItemPosition: "bottom",
      components: [{
          key: "formFieldSet-0-0",
          type: "formFieldSet",
          legend: "2-in-1 PCs",
          legendDarkTxt: true,
          components: [{
              label: "Type",
              key: "type",
              placeholder: "",
              data: {
                values: [{
                  value: "tableTent",
                  label: "Table Tent",
                }],
              },
              type: "select",
            },{
              label: "Number in Store",
              key: "noInStore",
              placeholder: "",
              data: {
                values: [{
                  value: "tableTent",
                  label: "Table Tent",
                }],
              },
              type: "select",
            },
          ],
        },
      ]
    },
    {
      key: "formFieldSet-0-1",
      type: "formFieldSet",
      legend: "",
      components: [{
        key: "posmTwoInOnePCsImages",
        type: "image",
        isAddEnabled: true,
        properties: {}
      }],
    }],
  },

  {
    type: "step",
    title: "Step 1.2: POSM (Laptops)",
    key: "stepIndex-1",
    components: [{
      label: "POSM",
      key: "posmLaptops",
      type: "dataGridWithFieldSets",
      gridItem: {
        type: "",
        noInStore: "",
      },
      addOneMoreItemTxt: "ADD TYPES",
      addOneMoreItemPosition: "bottom",
      components: [{
          key: "formFieldSet-1-0",
          type: "formFieldSet",
          legend: "Laptops",
          legendDarkTxt: true,
          components: [{
              label: "Type",
              key: "type",
              placeholder: "",
              data: {
                values: [{
                  value: "tableTent",
                  label: "Table Tent",
                }],
              },
              type: "select",
            },{
              label: "Number in Store",
              key: "noInStore",
              placeholder: "",
              data: {
                values: [{
                  value: "tableTent",
                  label: "Table Tent",
                }],
              },
              type: "select",
            },
          ],
        },
      ]
    },
    {
      key: "formFieldSet-1-1",
      type: "formFieldSet",
      legend: "",
      components: [{
        key: "posmLaptopsImages",
        type: "image",
        isAddEnabled: true,
        properties: {}
      }],
    }],
  },

  {
    type: "step",
    title: "Step 1.3: POSM (All-in-One)",
    key: "stepIndex-2",
    components: [{
      label: "POSM",
      key: "posmAllInOne",
      type: "dataGridWithFieldSets",
      gridItem: {
        type: "",
        noInStore: "",
      },
      addOneMoreItemTxt: "ADD TYPES",
      addOneMoreItemPosition: "bottom",
      components: [{
          key: "formFieldSet-2-0",
          type: "formFieldSet",
          legend: "All-in-One",
          legendDarkTxt: true,
          components: [{
              label: "Type",
              key: "type",
              placeholder: "",
              data: {
                values: [{
                  value: "tableTent",
                  label: "Table Tent",
                }],
              },
              type: "select",
            },{
              label: "Number in Store",
              key: "noInStore",
              placeholder: "",
              data: {
                values: [{
                  value: "tableTent",
                  label: "Table Tent",
                }],
              },
              type: "select",
            },
          ],
        },
      ]
    },
    {
      key: "formFieldSet-2-1",
      type: "formFieldSet",
      legend: "",
      components: [{
        key: "posmAllInOneImages",
        type: "image",
        isAddEnabled: true,
        properties: {}
      }],
    }],
  },

  {
    type: "step",
    title: "Step 1.4: POSM (Feedback)",
    key: "stepIndex-3",
    fullHeight: true,
    components: [{
      key: "formFieldSet-3-0",
      type: "formFieldSet",
      legend: "POSM",
      components: [{
          label: "Remarks/Feedback",
          key: "posmRemark",
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
      ],
    }, ],
  },

  {
    type: "step",
    title: "Step 1.5: Store Feedback",
    key: "stepIndex-4",
    fullHeight: true,
    components: [{
      key: "formFieldSet-4-0",
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
    title: "Step 2: Submit",
    key: "stepIndex-5",
    components: [{
      key: "formFieldSet-5-0",
      type: "formFieldSet",
      legend: "Remarks",
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
    }],
  }
];
