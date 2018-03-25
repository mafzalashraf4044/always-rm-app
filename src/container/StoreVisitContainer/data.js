export const visitForm = 
[
  {
    type: "panel",
    input: false,
    title: "RSPs",
    theme: "default",
    components: [
      {
        clearOnHide: false,
        key: "panelFieldset",
        input: false,
        tableView: false,
        legend: "Training Attendance",
        components: [
          {
            autofocus: false,
            input: true,
            tableView: true,
            inputType: "text",
            inputMask: "",
            label: "Total Attendees in Training",
            key: "panelFieldsetText",
            placeholder: "",
            prefix: "",
            suffix: "",
            multiple: false,
            defaultValue: "",
            protected: false,
            unique: false,
            persistent: true,
            hidden: false,
            clearOnHide: true,
            spellcheck: true,
            validate: {
              required: false,
              minLength: "",
              maxLength: "",
              pattern: "",
              custom: "",
              customPrivate: false
            },
            conditional: {
              show: "",
              when: null,
              eq: ""
            },
            type: "textfield",
            labelPosition: "top",
            tags: [],
            properties: {},
            $$hashKey: "object:23302"
          },
          {
            autofocus: false,
            input: true,
            tableView: true,
            inputType: "text",
            inputMask: "",
            label: "IREP Courses in Store",
            key: "panelFieldsetIrepCoursesinStore",
            placeholder: "",
            prefix: "",
            suffix: "",
            multiple: false,
            defaultValue: "",
            protected: false,
            unique: false,
            persistent: true,
            hidden: false,
            clearOnHide: true,
            spellcheck: true,
            validate: {
              required: false,
              minLength: "",
              maxLength: "",
              pattern: "",
              custom: "",
              customPrivate: false
            },
            conditional: {
              show: "",
              when: null,
              eq: ""
            },
            type: "textfield",
            labelPosition: "top",
            tags: [],
            properties: {},
            $$hashKey: "object:23407"
          }
        ],
        type: "fieldset",
        $$hashKey: "object:23056",
        hideLabel: true,
        tags: [],
        conditional: {
          show: "",
          when: null,
          eq: ""
        },
        properties: {},
        label: "panelFieldset"
      },
      {
        clearOnHide: false,
        key: "panelFieldset2",
        input: false,
        tableView: false,
        legend: "Training Course",
        components: [
          {
            clearOnHide: false,
            label: "Columns",
            input: false,
            tableView: false,
            key: "panelColumns",
            columns: [
              {
                components: [
                  {
                    input: true,
                    tableView: true,
                    inputType: "text",
                    inputMask: "",
                    label: "IREP Courses in Store",
                    key: "firstName2",
                    placeholder: "",
                    prefix: "",
                    suffix: "",
                    multiple: false,
                    defaultValue: "",
                    protected: false,
                    unique: false,
                    persistent: true,
                    validate: {
                      required: false,
                      minLength: "",
                      maxLength: "",
                      pattern: "",
                      custom: "",
                      customPrivate: false
                    },
                    conditional: {
                      show: "",
                      when: null,
                      eq: ""
                    },
                    type: "textfield",
                    autofocus: false,
                    hidden: false,
                    clearOnHide: true,
                    spellcheck: true,
                    labelPosition: "top",
                    tags: [],
                    properties: {},
                    $$hashKey: "object:24332"
                  }
                ],
                width: 6,
                offset: 0,
                push: 0,
                pull: 0,
                $$hashKey: "object:24322"
              }, 
              {
                components: [
                  {
                    autofocus: false,
                    input: true,
                    tableView: true,
                    label: "Training Course",
                    key: "panelColumnsReason",
                    placeholder: "",
                    data: {values: [{
                        value: "optane",
                        label: "Optane",
                        $$hashKey: "object:24357"
                      }, {
                        value: "10thGen",
                        label: "10th Gen",
                        $$hashKey: "object:24358"
                      }, {
                        value: "competitorAnalysis",
                        label: "Competitor Analysis",
                        $$hashKey: "object:24359"
                      }, {
                        value: "someOtherCourse",
                        label: "Some Other Course",
                        $$hashKey: "object:24360"
                      }],
                      json: "",
                      url: "",
                      resource: "",
                      custom: ""
                    },
                    dataSrc: "values",
                    valueProperty: "",
                    defaultValue: "",
                    refreshOn: "",
                    filter: "",
                    authenticate: false,
                    template: "<span>{{ item.label }}</span>",
                    multiple: false,
                    protected: false,
                    unique: false,
                    persistent: true,
                    hidden: false,
                    clearOnHide: true,
                    validate: {
                      required: false
                    },
                    type: "select",
                    labelPosition: "top",
                    tags: [],
                    conditional: {
                      show: "",
                      when: null,
                      eq: ""
                    },
                    properties: {},
                    $$hashKey: "object:24336"
                  }
                ],
                width: 6,
                offset: 0,
                push: 0,
                pull: 0,
                $$hashKey: "object:24323"
              }
            ],
            type: "columns",
            tags: [],
            conditional: {
              show: "",
              when: null,
              eq: ""
            },
            properties: {},
            $$hashKey: "object:24316",
            hideLabel: true
          }
        ],
        type: "fieldset",
        $$hashKey: "object:24071",
        hideLabel: true,
        tags: [],
        conditional: {
          show: "",
          when: null,
          eq: ""
        },
        properties: {},
        label: "panelFieldset2"
      },
      {
        clearOnHide: false,
        key: "panelFieldset3",
        input: false,
        tableView: false,
        legend: "New RSP",
        components: [{
          autofocus: false,
          input: true,
          tableView: true,
          inputType: "text",
          inputMask: "",
          label: "Name",
          key: "panelFieldset2Name",
          placeholder: "",
          prefix: "",
          suffix: "",
          multiple: false,
          defaultValue: "",
          protected: false,
          unique: false,
          persistent: true,
          hidden: false,
          clearOnHide: true,
          spellcheck: true,
          validate: {
            required: false,
            minLength: "",
            maxLength: "",
            pattern: "",
            custom: "",
            customPrivate: false
          },
          conditional: {
            show: "",
            when: null,
            eq: ""
          },
          type: "textfield",
          labelPosition: "top",
          tags: [],
          properties: {},
          $$hashKey: "object:24783"
        }, {
          autofocus: false,
          input: true,
          tableView: true,
          inputType: "text",
          inputMask: "",
          label: "Email",
          key: "panelFieldset2Email",
          placeholder: "",
          prefix: "",
          suffix: "",
          multiple: false,
          defaultValue: "",
          protected: false,
          unique: false,
          persistent: true,
          hidden: false,
          clearOnHide: true,
          spellcheck: true,
          validate: {
            required: false,
            minLength: "",
            maxLength: "",
            pattern: "",
            custom: "",
            customPrivate: false
          },
          conditional: {
            show: "",
            when: null,
            eq: ""
          },
          type: "textfield",
          labelPosition: "top",
          tags: [],
          properties: {},
          $$hashKey: "object:24885"
        }, {
          input: true,
          tableView: true,
          label: "Description",
          key: "message",
          placeholder: "",
          prefix: "",
          suffix: "",
          rows: 3,
          multiple: false,
          defaultValue: "",
          protected: false,
          persistent: true,
          validate: {
            required: false,
            minLength: "",
            maxLength: "",
            pattern: "",
            custom: ""
          },
          type: "textarea",
          conditional: {
            show: "",
            when: null,
            eq: ""
          },
          autofocus: false,
          hidden: false,
          wysiwyg: false,
          clearOnHide: true,
          spellcheck: true,
          labelPosition: "top",
          tags: [],
          properties: {},
          $$hashKey: "object:24988"
        }],
        type: "fieldset",
        $$hashKey: "object:24539",
        hideLabel: true,
        tags: [],
        conditional: {
          show: "",
          when: null,
          eq: ""
        },
        properties: {},
        label: "panelFieldset3"
      }
    ],
    $$hashKey: "object:234",
    clearOnHide: false,
    tableView: false,
    hideLabel: true,
    key: "panel",
    breadcrumb: "default",
    tags: [],
    conditional: {
      show: "",
      when: null,
      eq: ""
    },
    properties: {},
    label: "panel",
    isNew: false
  }, 
  {
    type: "panel",
    title: "Training",
    components: [{
      clearOnHide: false,
      key: "page2Well",
      input: false,
      components: [
        {
          autofocus: false,
          input: true,
          inputType: "checkbox",
          tableView: true,
          label: "IPOS/RXT Installation",
          dataGridLabel: false,
          key: "page2Fieldset2IposrxtInstallation",
          defaultValue: false,
          protected: false,
          persistent: true,
          hidden: false,
          name: "",
          value: "",
          clearOnHide: true,
          validate: {
            required: false
          },
          type: "checkbox",
          labelPosition: "right",
          tags: [],
          conditional: {
            show: "",
            when: null,
            eq: ""
          },
          properties: {},
          hideLabel: false,
          $$hashKey: "object:22713"
        },
        {
          key: "page2WellMerchandiserInformation",
          label: "Merchandiser Information",
          input: false,
          tag: "p",
          attrs: [{
            value: "",
            attr: ""
          }],
          className: "",
          content: "",
          type: "htmlelement",
          hideLabel: true,
          tags: [],
          conditional: {
            show: "",
            when: null,
            eq: ""
          },
          properties: {},
          $$hashKey: "object:22714"
        }
      ],
      tableView: false,
      type: "well",
      tags: [],
      conditional: {
        show: "",
        when: null,
        eq: ""
      },
      properties: {},
      label: "page2Well",
      $$hashKey: "object:22702",
      hideLabel: true
    }, {
      clearOnHide: false,
      key: "page2Fieldset",
      input: false,
      tableView: false,
      legend: "Competitor Analysis",
      components: [{
        autofocus: false,
        input: true,
        tableView: true,
        inputType: "text",
        inputMask: "",
        label: "Competitor Name",
        key: "page2FieldsetCompetitorName",
        placeholder: "",
        prefix: "",
        suffix: "",
        multiple: false,
        defaultValue: "",
        protected: false,
        unique: false,
        persistent: true,
        hidden: false,
        clearOnHide: true,
        spellcheck: true,
        validate: {
          required: false,
          minLength: "",
          maxLength: "",
          pattern: "",
          custom: "",
          customPrivate: false
        },
        conditional: {
          show: "",
          when: null,
          eq: ""
        },
        type: "textfield",
        labelPosition: "top",
        tags: [],
        properties: {},
        $$hashKey: "object:21830"
      }, {
        autofocus: false,
        input: true,
        tableView: true,
        label: "POSM Installed",
        key: "page2FieldsetPosmInstalled",
        placeholder: "",
        data: {values: [{
            value: "yes",
            label: "Yes",
            $$hashKey: "object:21942"
          }, {
            value: "no",
            label: "No",
            $$hashKey: "object:21943"
          }],
          json: "",
          url: "",
          resource: "",
          custom: ""
        },
        dataSrc: "values",
        valueProperty: "",
        defaultValue: "",
        refreshOn: "",
        filter: "",
        authenticate: false,
        template: "<span>{{ item.label }}</span>",
        multiple: false,
        protected: false,
        unique: false,
        persistent: true,
        hidden: false,
        clearOnHide: true,
        validate: {
          required: false
        },
        type: "select",
        labelPosition: "top",
        tags: [],
        conditional: {
          show: "",
          when: null,
          eq: ""
        },
        properties: {},
        $$hashKey: "object:21927"
      }, {
        autofocus: false,
        input: true,
        tableView: true,
        inputType: "text",
        inputMask: "",
        label: "PC Brand",
        key: "page2FieldsetPcBrand",
        placeholder: "",
        prefix: "",
        suffix: "",
        multiple: false,
        defaultValue: "",
        protected: false,
        unique: false,
        persistent: true,
        hidden: false,
        clearOnHide: true,
        spellcheck: true,
        validate: {
          required: false,
          minLength: "",
          maxLength: "",
          pattern: "",
          custom: "",
          customPrivate: false
        },
        conditional: {
          show: "",
          when: null,
          eq: ""
        },
        type: "textfield",
        labelPosition: "top",
        tags: [],
        properties: {},
        $$hashKey: "object:22031"
      }],
      type: "fieldset",
      $$hashKey: "object:21595",
      hideLabel: true,
      tags: [],
      conditional: {
        show: "",
        when: null,
        eq: ""
      },
      properties: {},
      label: "page2Fieldset"
    }],
    input: false,
    key: "page2",
    $$hashKey: "object:340",
    clearOnHide: false,
    theme: "default",
    tableView: false,
    hideLabel: true,
    breadcrumb: "default",
    tags: [],
    conditional: {
      show: "",
      when: null,
      eq: ""
    },
    properties: {},
    label: "page2"
  }
];